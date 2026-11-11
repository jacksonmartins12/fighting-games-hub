#!/usr/bin/env python3
"""Adds to the hub the moves that only Capcom's official frame pages list (saved as HTML, see capcom_compare.py).

    python3 tools/capcom_add.py FOLDER [--dry-run]

Every Capcom row that tools/capcom_compare.py can't pair with a hub move (character states such as Denjin Charge,
parry and Drive Rush variants, steps of Supers and combos, charged versions, separate projectile rows...) becomes a
new row in data/chars/<fighter>.js, placed after the last move of the same kind. Its values are Capcom's, written in
the hub's format; the names go into data/sources.js (capcomRows) so the tables can show where the row came from.
Run it once per saved set of pages: rows already added are recognised by name and skipped. A Capcom row is not added
when it is a hub move under another name (same_move: same input and startup, and on block, recovery and damage agree).
Rows that only exist in a character state or as a follow-up get the condition "state", which keeps them out of the
Punish Finder's punishers.
"""
import json, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import capcom_compare as cc   # noqa: E402
import fat_sync               # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TYPE = {'Normal Moves': 'n', 'Unique Attacks': 'n', 'Special Moves': 's', 'Super Arts': 'u', 'Throws': 't', 'Common Moves': 'd'}
MOTION = [('236236', 'qcf,qcf'), ('214214', 'qcb,qcb'), ('63214', 'hcb'), ('41236', 'hcf'), ('42684268', '720'), ('4268', '360'),
          ('[4]646', 'b,f,b,f'), ('[4]6', 'b,f'), ('[2]8', 'd,u'), ('623', 'f,d,df'), ('421', 'b,d,db'), ('236', 'qcf'), ('214', 'qcb'),
          ('22', 'd,d'), ('66', 'f,f'), ('44', 'b,b')]
DIR = {'1': 'db', '2': 'd', '3': 'df', '4': 'b', '6': 'f', '7': 'ub', '8': 'u', '9': 'uf', '5': ''}
# follow-ups Capcom lists as plain moves although they only come out of another move or state: Akuma's Demon Raid
# transitions ("Can go into any transition attack"), Cammy's Hooligan Combination finishers, Jamie's Drink Level 4 6HK
FOLLOW_UPS = {'akuma': ('Demon Gou Zanku', 'Demon Gou Rasen'), 'cammy': ('Reverse Edge', 'Fatal Leg Twister'), 'jamie': ('Ransui Haze',)}
CANCEL = {'C': 'sp su', 'SA': 'su', 'SA2': 'su2 su3', 'SA3': 'su3'}


def classic(num):
    out = []
    for part in num.split(' > '):
        m = re.match(r'^([\d\[\]]*)(.*)$', part)
        motion, rest = m.group(1), m.group(2)
        words = []
        while motion:
            for a, b in MOTION:
                if motion.startswith(a):
                    words.append(b); motion = motion[len(a):]; break
            else:
                d = DIR.get(motion[0], motion[0]); motion = motion[1:]
                if d:
                    words.append(d)
        out.append((','.join(words) + '+' if words and rest else ','.join(words)) + rest)
    return ' > '.join(out)


def num_input(r):
    s = r['input'] or ''
    air = bool(re.search(r'During a (neutral or forward |neutral |forward )?jump', s))
    s = re.sub(r'\(During a (neutral or forward |neutral |forward )?jump\)', '', s)
    s = re.sub(r'\s+', ' ', s).strip()
    s = re.sub(r'\(\s+', '(', re.sub(r'\s+\)', ')', s))
    s = re.sub(r'^(LP|MP|HP|LK|MK|HK|LPLK|MPMK|HPHK|P|K|PP|KK)$', r'5\1', s) if re.fullmatch(r'(LP|MP|HP|LK|MK|HK|P|K|PP|KK)', s) else s
    s = re.sub(r'\s*Hold\s*', ' (hold) ', s).strip()
    return (s + (' (air)' if air else '')).strip(), air


def hub_name(r, num):
    n = r['name'].strip()
    suffix = []
    state = re.match(r'^\[(.*?)\]\s*(.*)$', n)
    while state:   # one or more state prefixes, e.g. "[During Nakatagong Lakas][Boosted]OD Alon(2)"
        n = state.group(2); suffix.append(state.group(1))
        state = re.match(r'^\[(.*?)\]\s*(.*)$', n)
    timing = re.match(r'^\((.*?)\)\s*(.*)$', n)
    if timing:
        n = timing.group(2); suffix.append(timing.group(1).lower())
    if n.startswith('CA '):
        n = n[3:]; suffix.append('Critical Art')
    n = re.sub(r'^SA[123] ', '', n)
    for a, b in cc.REP:
        n = re.sub(a.strip(), b.strip().upper() if b.strip() in ('lp', 'mp', 'hp', 'lk', 'mk', 'hk') else b.strip().capitalize(), n, flags=re.I) if a.strip() in n.lower() else n
    m = re.match(r'^(L|M|H) (.*)$', n)
    if m:
        btn = re.findall(r'(P|K)\b', re.sub(r'(LP|MP|HP)', 'P', re.sub(r'(LK|MK|HK)', 'K', num)))
        n = '%s%s %s' % (m.group(1), btn[-1] if btn else 'P', m.group(2))
    n = re.sub(r'\s*\((During|After|With) [^)]*\)', '', n)
    n = re.sub(r'\(\s*(\d)\s*\)', r' \1', n)
    n = re.sub(r'\((Lv\s?)(\d)\)$', r' (lvl \2)', n)
    n = re.sub(r'\(Charged\)$', ' (hold)', n)
    return re.sub(r'\s+', ' ', n + ''.join(' (%s)' % x for x in suffix)).strip()


def val(v, kind):
    v = (v or '').strip()
    if not v:
        return None
    if re.fullmatch(r'[-+]?\d+', v):
        if kind in ('startup', 'active', 'recovery') and int(v) == 0:
            return None   # Capcom writes 0 where a common move has no such phase
        return int(v)
    if kind == 'active':
        m = re.fullmatch(r'(\d+)-(\d+)', v)
        if m:
            return int(m.group(2)) - int(m.group(1)) + 1
    if kind in ('hit', 'block') and v == 'D':
        return 'KD'
    v = re.sub(r'(\d+) total frames', r'\1 total', v)
    return v


def row_from(r, slug=''):
    num, air = num_input(r)
    cond = 'air' if air else ('low' if re.search(r'under 25% vitality', r['input'] or '', re.I) else '')
    sec = TYPE.get(r['section'], 's')
    if (re.match(r'^\[|^\((Perfect timing|Failed version)\)', r['name'].strip(), re.I)
            or re.search(r'\((During|After|With|Drink|\d+ Sun Crest|\d or more|Activates)', r['input'] or '', re.I)
            or re.search(r'Available at Drink Level|only (usable|available) (during|when|while)', r['misc'] or '', re.I)
            or not (r['input'] or '').strip()
            or re.search(r'version\)|\(Activated\)', r['name'], re.I)
            or any(r['name'].startswith(x) for x in FOLLOW_UPS.get(slug, ()))
            or (sec in ('s', 'u') and re.fullmatch(r'5?(LP|MP|HP|LK|MK|HK|P|K|PP|KK)', num.replace(' (air)', '')))):
        cond = cond or 'state'   # only in a character state, at a set timing, or as a follow-up: not usable on its own
    canc = CANCEL.get(re.sub(r'[*,\d]+$|^\*', '', r['cancel'].replace('*', '').strip()), '')
    inv = r['misc'] if re.search(r'invincib', r['misc'] or '', re.I) else None
    return [hub_name(r, num), num, num if ' or ' in num else classic(num), TYPE.get(r['section'], 's'), val(r['startup'], 'startup'), val(r['active'], 'active'),
            val(r['recovery'], 'recovery'), val(r['hit'], 'hit'), val(r['block'], 'block'), val(r['damage'], 'damage'), canc, cond,
            1 if re.search(r'\(projectile\)$', r['name'], re.I) and 'Parry' not in r['name'] else 0, None, r['scaling'] or None, inv]


def first(v):
    m = re.match(r'\s*([-+]?\d+)', str(v if v is not None else ''))
    return int(m.group(1)) if m else None


def same_input(a, b):
    """Inputs compared without notes in brackets and with the two ways of writing a half circle (FAT writes Zangief's
    63214 as 624) and of naming two buttons ("LK or MK" / "K")."""
    def n(x):
        x = re.sub(r'\(.*?\)', '', x or '').replace('63214', '624')
        return cc.nin(re.sub(r'[LMH]([PK]) or [LMH]?[PK]', r'\1', x))
    return n(a) == n(b)


def same_move(slug, m, row):
    """A Capcom row is a hub move under another name when input and startup are the same, and on block, recovery and damage
    agree as far as Capcom gives them: a "N total" recovery or an empty on block cannot disagree, and the damage may sit
    inside the hub's text ("800(900)", "1350-1950") or be Jamie's Drink Level 0 value (90%, the hub's convention)."""
    if not row[1] or first(m[4]) != first(row[4]):
        return False
    if not same_input(m[1], row[1]):
        # a different way of writing the same Super, e.g. Kimberly's "236236 (hold) K" (Capcom) / "236236K > 5K (1 stock)"
        # (FAT): accepted only when the motion is the same and startup, recovery, on block and damage are all equal
        motion = lambda x: re.match(r'\d*', re.sub(r'[^\d>]', '', x or '')).group(0)
        return (len(motion(row[1])) >= 4 and motion(row[1]) == motion(m[1]) and first(row[9]) and
                [first(row[i]) for i in (6, 8, 9)] == [first(m[i]) for i in (6, 8, 9)] and None not in [first(row[i]) for i in (6, 8)])
    if row[8] is not None and first(row[8]) != first(m[8]):
        return False
    if 'total' not in str(row[6]) and first(row[6]) != first(m[6]):
        return False
    d, h = first(row[9]), first(m[9])
    return not d or d == h or str(d) in re.findall(r'\d+', str(m[9])) or (slug == 'jamie' and h == round(d * 0.9))


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    cap = cc.parse(sys.argv[1])
    tot, diffs, unmatched, pairs = cc.compare(cap)
    paired = {(slug, cn) for slug, _, cn in pairs}
    src_path = os.path.join(ROOT, 'data', 'sources.js')
    s = open(src_path, encoding='utf-8').read()
    sources = json.loads(s[s.index('= {') + 2: s.rindex(';')])
    added = sources.setdefault('capcomRows', {})
    total = 0
    for cname, rows in cap.items():
        slug = cc.slugify(cname)
        src, d = fat_sync.read_char(slug + '.js')
        hub = d['frames']['m']
        names = {m[0] for m in hub}
        new = []
        for r in rows:
            if (slug, r['name']) in paired:
                continue
            row = row_from(r, slug)
            if not row[11] and any(m[11] == 'air' and cc.core(re.sub(r'\s*\(air\)', '', m[0])) == cc.core(row[0]) for m in hub):
                row[11] = 'air'   # the hub (FAT) lists this move as an air move, e.g. Dhalsim's Yoga Comet
            if not any(row[4:10]) and not row[14]:
                continue   # a heading-like row with no numbers
            if row[0] in added.get(slug, []):
                continue   # added by an earlier run
            step = re.match(r'^(.*?)\s*\(\s*\d\s*\)', re.sub(r'^\[.*?\]\s*', '', r['name'].strip()))
            if step and any(cc.core(m[0]).startswith(cc.core(step.group(1))) and ('[' not in r['name'] or (first(m[8]) == first(row[8]) and cc.strength(m[0]) == cc.strength(row[0]))) for m in hub):
                continue   # a step of a target combo the hub already lists in its own way (in a state: only if on block agrees,
                           # e.g. Yasmine's [Boosted] Alon 2 is the hub's "Alon (Bayani Mode)")
            if row[0] in names or any(cc.core(m[0]) == cc.core(row[0]) and cc.strength(m[0]) == cc.strength(row[0]) for m in hub):
                continue   # the hub already has a move by this name: not a missing move
            if row[11] != 'state' and any(same_move(slug, m, row) for m in hub):
                continue   # the same move under another name ("Long Sliding Kick" / "Crouch HK", "Psycho Crusher Attack" / "Psycho Crusher")
            if any(cc.core(row[0]) in cc.core(m[0]) and [m[4], m[6], m[8]] == [row[4], row[6], row[8]] for m in hub):
                continue   # same move under a longer hub name (e.g. "OD Kasai Thrust Kick (LK)") with the same numbers
            names.add(row[0]); new.append(row)
        if not new:
            continue
        total += len(new)
        added.setdefault(slug, [])
        added[slug] += [x[0] for x in new if x[0] not in added[slug]]
        if '--dry-run' in sys.argv:
            for x in new:
                print(slug, json.dumps(x, ensure_ascii=False))
            continue
        # insert each new row after the last hub row of the same type
        lines = src.split('\n')
        rows_at = [i for i, l in enumerate(lines) if l.strip().startswith('["')]
        for x in new:
            types = [json.loads(lines[i].strip().rstrip(','))[3] for i in rows_at]
            same = [i for i, t in zip(rows_at, types) if t == x[3]]
            at = (same or rows_at)[-1]
            if not lines[at].rstrip().endswith(','):
                lines[at] = lines[at].rstrip() + ','
                tail = ''
            else:
                tail = ','
            indent = lines[at][:len(lines[at]) - len(lines[at].lstrip())]
            lines.insert(at + 1, indent + json.dumps(x, ensure_ascii=False, separators=(',', ':')) + tail)
            rows_at = [i for i, l in enumerate(lines) if l.strip().startswith('["')]
        with open(os.path.join(ROOT, 'data', 'chars', slug + '.js'), 'w', encoding='utf-8') as f:
            f.write('\n'.join(lines))
    if '--dry-run' not in sys.argv:
        with open(src_path, 'w', encoding='utf-8') as f:
            f.write(s[:s.index('= {') + 2] + json.dumps(sources, ensure_ascii=False, indent=1) + ';\n')
    print('%d rows %s' % (total, 'would be added' if '--dry-run' in sys.argv else 'added'))


if __name__ == '__main__':
    main()
