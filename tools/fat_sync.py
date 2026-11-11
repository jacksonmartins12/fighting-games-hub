#!/usr/bin/env python3
"""Compare the hub's frame data with a copy of FAT (Frame Assistant Tool) and, on request, sync it.

FAT is the source of the hub's SF6 frame data (https://github.com/D4RKONION/FAT,
file src/js/constants/framedata/SF6FrameData.json). Clone FAT anywhere and pass the JSON file:

    python3 tools/fat_sync.py check  PATH/SF6FrameData.json
        Lists every difference in the core fields (startup, active, recovery, on hit, on block, damage,
        cancels, input) without changing anything. Run it after a balance patch: the list is the patch.

    python3 tools/fat_sync.py extras PATH/SF6FrameData.json
        Rewrites only the reference fields the hub copies as-is (range, damage-scaling note, invincibility notes,
        jump, throw range).
        They never touch the core numbers.

    python3 tools/fat_sync.py apply  PATH/SF6FrameData.json --commit SHA --date YYYY-MM-DD
        Applies the core-field differences found by `check`, but only on moves whose current hub value is
        not marked as tested or disputed in data/sources.js, and appends one entry per change to
        data/patches.js (old value, new value, source commit). Review `check` first.

Moves are matched by name. Taunts are skipped on purpose.
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHARS = os.path.join(ROOT, 'data', 'chars')
CORE = [(4, 'startup'), (5, 'active'), (6, 'recovery'), (7, 'onHit'), (8, 'onBlock'), (9, 'dmg')]


def norm(x):
    return re.sub(r'[^a-z0-9]', '', str(x).lower())


def load_fat(path):
    with open(path, encoding='utf-8') as f:
        fat = json.load(f)
    return {norm(k): v for k, v in fat.items()}


def char_files():
    return sorted(n for n in os.listdir(CHARS) if n.endswith('.js'))


def read_char(name):
    with open(os.path.join(CHARS, name), encoding='utf-8') as f:
        src = f.read()
    return src, json.loads(src[src.index('] = ') + 4: src.rindex(';')])


def fat_moves(fat, slug):
    entry = fat.get(norm(slug))
    if entry is None:
        return None, None
    return {norm(v['moveName']): v for v in entry['moves']['normal'].values() if v.get('moveType') != 'taunt'}, entry.get('stats', {})


def same(a, b):
    if a is None and b is None:
        return True
    return str(a).replace(' ', '') == str(b).replace(' ', '')


def check(fat, quiet=False):
    diffs, missing, extra = [], [], []
    for name in char_files():
        slug = name[:-3]
        _, d = read_char(name)
        moves, _ = fat_moves(fat, slug)
        if moves is None:
            missing.append((slug, '(fighter not in FAT)'))
            continue
        hub_names = set()
        for m in d['frames']['m']:
            hub_names.add(norm(m[0]))
            v = moves.get(norm(m[0]))
            if v is None:
                missing.append((slug, m[0]))
                continue
            for i, key in CORE:
                if not same(m[i], v.get(key)):
                    diffs.append({'char': slug, 'move': m[0], 'field': key, 'hub': m[i], 'fat': v.get(key)})
            if set((m[10] or '').split()) != set(v.get('xx') or []):
                diffs.append({'char': slug, 'move': m[0], 'field': 'xx', 'hub': m[10], 'fat': ' '.join(v.get('xx') or [])})
        for k, v in moves.items():
            if k not in hub_names:
                extra.append((slug, v['moveName']))
    if not quiet:
        for x in diffs:
            print('DIFF  %(char)s / %(move)s / %(field)s: hub %(hub)r, FAT %(fat)r' % x)
        for x in missing:
            print('ONLY IN HUB  %s / %s' % x)
        for x in extra:
            print('ONLY IN FAT  %s / %s' % x)
        print('%d differences, %d moves only in the hub, %d only in FAT' % (len(diffs), len(missing), len(extra)))
    return diffs


def rewrite_rows(src, fn):
    """Calls fn(row) for each move row line of a fighter file and writes the rows back in the same one-line style."""
    out = []
    for line in src.split('\n'):
        s = line.strip()
        if s.startswith('["') and (s.endswith('],') or s.endswith(']')):
            comma = s.endswith(',')
            row = json.loads(s[:-1] if comma else s)
            row = fn(row)
            line = line[:len(line) - len(line.lstrip())] + json.dumps(row, ensure_ascii=False, separators=(',', ':')) + (',' if comma else '')
        out.append(line)
    return '\n'.join(out)


def extras(fat):
    """Fields 13 (range), 14 (FAT's damage-scaling note) and 15 (FAT's invincibility notes, in English) of every move,
    plus jump and throw range in the stats."""
    for name in char_files():
        slug = name[:-3]
        src, d = read_char(name)
        moves, stats = fat_moves(fat, slug)

        def add(row):
            v = moves.get(norm(row[0]), {})
            rng = v.get('range')
            sc = v.get('dmgScaling')
            inv = [x for x in (v.get('extraInfo') or []) if re.search(r'invincib|invulner', x, re.I)]
            return row[:13] + [rng if rng not in ('', None) else None, sc if sc else None, ' '.join(inv) if inv else None]
        src = rewrite_rows(src, add)
        d2 = json.loads(src[src.index('] = ') + 4: src.rindex(';')])
        s = d2['frames']['s']
        jump = str(stats.get('fJump') or '')
        m = re.findall(r'\d+\+\d+\+\d+', jump)
        if m:
            s['jump'] = ' / '.join(m)
        if stats.get('throwRange') is not None:
            s['throwRange'] = str(stats['throwRange'])
        start = src.index('  "s": {')
        end = src.index('}', start) + 1
        body = '  "s": ' + json.dumps(s, ensure_ascii=False, indent=6)[:-1] + '    }'
        src = src[:start] + body + src[end:]
        with open(os.path.join(CHARS, name), 'w', encoding='utf-8') as f:
            f.write(src)
    print('extras written for', len(char_files()), 'fighters')


def apply(fat, commit, date):
    sys.path.insert(0, ROOT)
    protected = set()
    src_path = os.path.join(ROOT, 'data', 'sources.js')
    with open(src_path, encoding='utf-8') as f:
        s = f.read()
    sources = json.loads(s[s.index('= {') + 2: s.rindex('}') + 1])
    for slug, moves in sources.get('flags', {}).items():
        for move, flag in moves.items():
            if flag.get('status') in ('tested', 'conflict'):
                protected.add((slug, move))
    diffs = [x for x in check(fat, quiet=True) if (x['char'], x['move']) not in protected and x['field'] != 'xx']
    by_char = {}
    for x in diffs:
        by_char.setdefault(x['char'], []).append(x)
    idx = dict(CORE)
    field_index = {v: k for k, v in idx.items()}
    for slug, changes in by_char.items():
        name = slug + '.js'
        src, _ = read_char(name)

        def upd(row):
            for x in changes:
                if x['move'] == row[0]:
                    row[field_index[x['field']]] = x['fat']
            return row
        with open(os.path.join(CHARS, name), 'w', encoding='utf-8') as f:
            f.write(rewrite_rows(src, upd))
    pp = os.path.join(ROOT, 'data', 'patches.js')
    with open(pp, encoding='utf-8') as f:
        p = f.read()
    log = json.loads(p[p.index('= [') + 2: p.rindex(']') + 1])
    if diffs:
        log.append({'date': date, 'source': 'FAT commit ' + commit, 'status': 'tool',
                    'changes': [{'char': x['char'], 'move': x['move'], 'field': x['field'], 'old': x['hub'], 'new': x['fat']} for x in diffs]})
    with open(pp, 'w', encoding='utf-8') as f:
        f.write(p[:p.index('= [') + 2] + json.dumps(log, ensure_ascii=False, indent=1) + ';\n')
    print('%d changes applied; %d protected moves skipped' % (len(diffs), len(protected)))


def main():
    if len(sys.argv) < 3 or sys.argv[1] not in ('check', 'extras', 'apply'):
        sys.exit(__doc__)
    fat = load_fat(sys.argv[2])
    if sys.argv[1] == 'check':
        sys.exit(1 if check(fat) else 0)
    if sys.argv[1] == 'extras':
        extras(fat)
    else:
        a = sys.argv
        if '--commit' not in a or '--date' not in a:
            sys.exit('apply needs --commit SHA --date YYYY-MM-DD')
        apply(fat, a[a.index('--commit') + 1], a[a.index('--date') + 1])


if __name__ == '__main__':
    main()
