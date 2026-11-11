#!/usr/bin/env python3
"""Checks the hub's data before every build (build.py runs it; it can also run alone).

Errors stop the build; warnings are printed. What it checks:
  - every fighter file parses and has guide, frames.m and frames.s; the roster and the files match
  - every move row has 16 fields of the right kinds: name, inputs, type (n s u t d), frame fields that are
    numbers or frame-data text, damage, cancels, condition, projectile flag, range, scaling note, invincibility note
  - no move appears twice with the same name, input and condition
  - numbers are plausible (startup 1-300, active 0-300, recovery 0-300, advantage -150..+150)
  - data/sources.js: flags point at moves that exist, statuses are known
  - data/quiz.js: every question has options in both languages and a valid answer index
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TYPES = set('nsutd')
FRAME_TEXT = re.compile(r"^[\w\s+\-−~*()/.,:;?'\[\]{}&%∞]*$")
PAIRS = {')': '(', ']': '[', '}': '{'}


def balanced(s):
    stack = []
    for c in s:
        if c in '([{':
            stack.append(c)
        elif c in PAIRS:
            if not stack or stack.pop() != PAIRS[c]:
                return False
    return not stack


def js_object(path, marker):
    with open(os.path.join(ROOT, path), encoding='utf-8') as f:
        s = f.read()
    i = s.index(marker) + len(marker) - 1
    j = s.rindex(';')
    return json.loads(s[i:j])


def first_int(v):
    if isinstance(v, int):
        return v
    m = re.match(r'\s*([-+−]?\d+)', str(v or ''))
    return int(m.group(1).replace('−', '-')) if m else None


def validate():
    errors, warnings = [], []
    chars_dir = os.path.join(ROOT, 'data', 'chars')
    files = sorted(n[:-3] for n in os.listdir(chars_dir) if n.endswith('.js'))
    roster = js_object('data/roster.js', '= {')
    roster_slugs = set(roster) if isinstance(roster, dict) else set()
    if roster_slugs and roster_slugs != set(files):
        errors.append('roster and data/chars differ: %s' % sorted(roster_slugs ^ set(files)))
    moves = {}
    for slug in files:
        try:
            d = js_object('data/chars/%s.js' % slug, '] = {')
        except Exception as e:  # noqa: BLE001
            errors.append('%s: does not parse (%s)' % (slug, e))
            continue
        for k in ('guide', 'frames'):
            if k not in d:
                errors.append('%s: missing %s' % (slug, k))
        f = d.get('frames', {})
        rows = f.get('m') or []
        if not rows:
            errors.append('%s: no moves' % slug)
        for k in ('fastestNormal', 'bestReversal', 'fDash', 'bDash', 'health', 'jump'):
            if not (f.get('s') or {}).get(k):
                errors.append('%s: stats.%s missing' % (slug, k))
        seen = set()
        moves[slug] = set()
        for n, m in enumerate(rows):
            where = '%s move %d (%s)' % (slug, n, m[0] if m else '?')
            if len(m) != 16:
                errors.append('%s: %d fields, expected 16' % (where, len(m)))
                continue
            name, num, cls, typ = m[0], m[1], m[2], m[3]
            moves[slug].add(name)
            if not isinstance(name, str) or not name.strip():
                errors.append(where + ': empty name')
            if typ not in TYPES:
                errors.append('%s: type %r not in n s u t d' % (where, typ))
            key = (name, num, m[11])
            if key in seen:
                errors.append(where + ': duplicate move')
            seen.add(key)
            for i, label in ((4, 'startup'), (5, 'active'), (6, 'recovery'), (7, 'on hit'), (8, 'on block'), (9, 'damage')):
                v = m[i]
                if v is None or isinstance(v, int):
                    continue
                if not isinstance(v, str) or not FRAME_TEXT.match(v):
                    errors.append('%s: %s %r is not a number or frame-data text' % (where, label, v))
                elif not balanced(v):
                    errors.append('%s: %s %r has unbalanced brackets' % (where, label, v))
            s = first_int(m[4])
            if isinstance(m[4], int) and not (1 <= m[4] <= 300):
                errors.append('%s: startup %d out of range' % (where, m[4]))
            if s is not None and s < 0:
                errors.append('%s: negative startup' % where)
            for i, label in ((5, 'active'), (6, 'recovery')):
                if isinstance(m[i], int) and not (0 <= m[i] <= 300):
                    warnings.append('%s: %s %d is unusual' % (where, label, m[i]))
            for i, label in ((7, 'on hit'), (8, 'on block')):
                if isinstance(m[i], int) and not (-150 <= m[i] <= 150):
                    errors.append('%s: %s %d out of range' % (where, label, m[i]))
            if m[12] not in (0, 1):
                errors.append(where + ': projectile flag must be 0 or 1')
            for i, label in ((14, 'scaling'), (15, 'invincibility')):
                if m[i] is not None and not isinstance(m[i], str):
                    errors.append('%s: %s note must be text or null' % (where, label))
    try:
        src = js_object('data/sources.js', '= {')
        statuses = set(src.get('statuses', []))
        if src.get('frameData', {}).get('status') not in statuses:
            errors.append('sources.js: frameData.status is not a known status')
        for slug, fl in src.get('flags', {}).items():
            for move, flag in fl.items():
                if flag.get('status') not in ('check', 'conflict', 'derived', 'tested'):
                    errors.append('sources.js: %s/%s has unknown status %r' % (slug, move, flag.get('status')))
                if not move.startswith('(') and move not in moves.get(slug, ()):
                    errors.append('sources.js: flag for unknown move %s/%s' % (slug, move))
    except (ValueError, OSError) as e:
        errors.append('sources.js: %s' % e)
    quiz = js_object('data/quiz.js', '= {')
    for ch, qs in quiz.items():
        for i, q in enumerate(qs):
            opts = q.get('options') or []
            if not all(o.get('en') and o.get('pt') for o in opts) or not (q.get('q', {}).get('en') and q.get('q', {}).get('pt')):
                errors.append('quiz %s #%d: text missing in a language' % (ch, i))
            if not isinstance(q.get('answer'), int) or not 0 <= q['answer'] < len(opts):
                errors.append('quiz %s #%d: answer index out of range' % (ch, i))
    return errors, warnings, sum(len(v) for v in moves.values())


def main():
    errors, warnings, n = validate()
    for w in warnings:
        print('warning:', w)
    for e in errors:
        print('ERROR:', e)
    print('validate: %d fighters, %d moves, %d errors, %d warnings' % (len(os.listdir(os.path.join(ROOT, 'data', 'chars'))), n, len(errors), len(warnings)))
    return 1 if errors else 0


if __name__ == '__main__':
    sys.exit(main())
