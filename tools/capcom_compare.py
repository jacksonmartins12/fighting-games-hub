#!/usr/bin/env python3
"""Compares the hub's frame data with Capcom's official frame data pages, saved as HTML.

Save each fighter's page from streetfighter.com/6/character/<name>/frame (Classic controls, with the table on screen)
into one folder, then:

    python3 tools/capcom_compare.py FOLDER [--json OUT.json]

Reads the rendered table of every page, matches each row to a hub move (by strength, name and input; combo steps
like "Power Stomps(2)" are aligned by their best fit), and compares startup, active frames, recovery, on hit and on
block where both sides have a plain number. It prints every difference and changes nothing: differences are for a
person to review (record decisions in data/sources.js). Rows for character states the hub doesn't list separately
(e.g. "[Denjin Charge]") are skipped.
"""
import collections, difflib, glob, html, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HUB = os.path.join(ROOT, 'data', 'chars')
KEYS = {'key-d': '2', 'key-r': '6', 'key-dr': '3', 'key-l': '4', 'key-dl': '1', 'key-u': '8', 'key-ur': '9', 'key-ul': '7', 'key-nutral': '5',
        'key-lc': '[4]', 'key-dc': '[2]', 'key-rc': '[6]', 'key-circle': '360', 'key-or': ' or ', 'arrow_3': ' > ', 'key-plus': ''}
BTN = {'icon_punch_l': 'LP', 'icon_punch_m': 'MP', 'icon_punch_h': 'HP', 'icon_punch': 'P', 'icon_kick_l': 'LK', 'icon_kick_m': 'MK', 'icon_kick_h': 'HK', 'icon_kick': 'K'}


def clean(c):
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', c))).strip()


def parse(folder):
    out = {}
    for f in sorted(glob.glob(os.path.join(folder, '*.htm*'))):
        name = os.path.basename(f).split(' FRAME DATA')[0]
        s = open(f, encoding='utf-8', errors='replace').read()
        i = s.find('<table')
        if i < 0:
            continue
        t = s[i:s.find('</table>', i)]
        rows = []
        for r in re.findall(r'<tr.*?</tr>', t, re.S):
            if 'frame_heading' in r:
                continue
            tds = re.findall(r'<td[^>]*>(.*?)</td>', r, re.S)
            if len(tds) < 8:
                continue
            nm = re.search(r'<span class="frame_arts[^"]*">(.*?)</span>', tds[0], re.S)
            p = re.search(r'<p class="frame_classic[^"]*">(.*?)</p>', tds[0], re.S)
            inp = ''
            if p:
                for tok in re.findall(r'controller/([\w-]+)\.png|>([^<]+)<', p.group(1)):
                    if tok[0]:
                        inp += KEYS.get(tok[0], BTN.get(tok[0], ''))
                    elif tok[1].strip() and tok[1].strip() not in ('L', 'M', 'H'):
                        inp += ' ' + tok[1].strip() + ' '
            rows.append({'name': clean(nm.group(1)) if nm else clean(tds[0]), 'input': re.sub(r'\s+', ' ', inp).strip(),
                         'startup': clean(tds[1]), 'active': clean(tds[2]), 'recovery': clean(tds[3]), 'hit': clean(tds[4]), 'block': clean(tds[5])})
        out[name] = rows
    return out

def slugify(n): return re.sub(r'[^a-z0-9]+','-',n.lower()).strip('-')
def nin(x): return re.sub(r'\(.*?\)','',str(x or '').upper().replace(' ',''))
def ncap_in(i):
    i=i.upper().replace(' ','')
    return '5'+i if re.match(r'^(LP|MP|HP|LK|MK|HK|P|K)',i) else i
REP=[('standing ','stand '),('crouching ','crouch '),('jumping ','jump '),('light punch','lp'),('medium punch','mp'),('heavy punch','hp'),('light kick','lk'),('medium kick','mk'),('heavy kick','hk')]
def strength(n):
    w=n.strip().split(' ')[0].upper()
    return {'L':'L','M':'M','H':'H','OD':'OD','LP':'L','LK':'L','MP':'M','MK':'M','HP':'H','HK':'H'}.get(w,'')
def core(n):
    n=n.lower(); n=re.sub(r'\[.*?\]','',n)
    for a,b in REP: n=n.replace(a,b)
    n=re.sub(r'^(lp|lk|mp|mk|hp|hk|l|m|h|od) ','',n) if strength(n) else n
    n=re.sub(r'^(sa[123]|ca) ','',n)
    return re.sub(r'[^a-z0-9]','',n)
def ival(v):
    s=str(v).strip().replace('−','-'); return int(s) if re.fullmatch(r'[+-]?\d+',s) else None
def acount(a):
    a=str(a).strip(); m=re.fullmatch(r'(\d+)-(\d+)',a)
    if m: return int(m.group(2))-int(m.group(1))+1
    return 1 if re.fullmatch(r'\d+',a) else None
def fields(r,m): return [('startup',ival(r['startup']),ival(m[4])),('active',acount(r['active']),m[5] if isinstance(m[5],int) else None),('recovery',ival(r['recovery']),ival(m[6])),('onHit',ival(r['hit']),ival(m[7])),('onBlock',ival(r['block']),ival(m[8]))]
def miss(r,m): return sum(1 for f,a,b in fields(r,m) if a is not None and b is not None and a!=b)


def nums(v):
    """Every number a hub value lists: 11(13) -> {11, 13}; 11+19 -> {11, 19, 30}; KD +40 -> {40}."""
    if isinstance(v, int):
        return {v}
    s = str(v or '').replace('−', '-')
    out = {int(x) for x in re.findall(r'[-+]?\d+', s)}
    for a, b in re.findall(r'(\d+)\+(\d+)', s):
        out.add(int(a) + int(b))
    return out


def loose(r, m, follow_up=False):
    """Compares a Capcom row with a hub row whose values may list several versions: a value agrees when the hub lists it."""
    out = []
    for f, cv, hv in (('startup', ival(r['startup']), m[4]), ('active', acount(r['active']), m[5]), ('recovery', ival(r['recovery']), m[6]),
                      ('onHit', ival(r['hit']), m[7]), ('onBlock', ival(r['block']), m[8])):
        if cv is None or hv is None or not nums(hv):
            continue
        if f == 'active' and not isinstance(hv, int) and not re.fullmatch(r'\d+(\(\d+\))?', str(hv)):
            continue
        if f in ('onHit',) and re.match(r'\s*H?KD|Crumple|Tumble', str(hv)):
            continue
        out.append((f, cv, hv, cv in nums(hv)))
    return out


def alias_pass(r, hub, used, stats):
    """Second-pass matching for rows the hub names differently. Returns (kind, hub index or None, checks) or None."""
    name = r['name'].strip()
    free = [k for k in range(len(hub))]
    m = re.match(r'(Forward|Backward) Dash$', name)
    if m:
        tf = re.match(r'(\d+) total frames', r['recovery'])
        if not tf:
            return None
        key = 'fDash' if m.group(1) == 'Forward' else 'bDash'
        hv = stats.get(key)
        return ('stats.' + key, None, [('total frames', int(tf.group(1)), hv, str(int(tf.group(1))) == str(hv))])
    cs = strength(name)
    variant = None
    base = name
    if base.startswith('CA '):
        base = base[3:]
        cands = [k for k in free if '(Critical Art)' in hub[k][0] and core(hub[k][0].replace('(Critical Art)', '')) == core(base)]
        return ('ca', cands[0], loose(r, hub[cands[0]])) if cands else None
    m = re.match(r'Drive Reversal \(while (blocking|recovering)\): (.*)$', base)
    if m:
        cands = [k for k in free if hub[k][0].startswith('Drive Reversal')]
        if not cands:
            return None
        k = cands[0]
        row = list(hub[k])
        if m.group(1) == 'recovering':  # the hub writes "blocking(recovering)", e.g. 20(18)
            row[4] = (re.findall(r'\((\d+)\)', str(row[4])) or [row[4]])[0]
        else:
            row[4] = re.match(r'\d+', str(row[4])).group(0) if re.match(r'\d+', str(row[4])) else row[4]
        row[4] = int(row[4]) if str(row[4]).isdigit() else row[4]
        return ('drive reversal', k, [c for c in loose(r, row) if c[0] != 'active'])
    lv = re.search(r'\(Lv\s?(\d)\)$', base)
    ch = re.search(r'\((Charged)\)$', base)
    bu = re.search(r'\((Burst)\)$', base)
    stem = re.sub(r'\s*\((Lv\s?\d|Charged|Burst)\)$', '', base)
    def find(pred):
        return [k for k in free if pred(hub[k][0])]
    cands = []
    if lv and lv.group(1) == '1':
        cands = find(lambda h: strength(h) == cs and core(h) == core(stem))
    elif lv:
        n = lv.group(1)
        cands = find(lambda h: core(re.sub(r'\s*\(lvl \d\)', '', h)) == core(stem) and ('(lvl %s)' % n) in h and strength(h) in (cs, ''))
    elif ch:
        cands = find(lambda h: core(re.sub(r'\s*\((hold|charged)\)', '', h, flags=re.I)) == core(stem) and re.search(r'\((hold|charged)\)', h, re.I) and (strength(h) == cs or (strength(h) == '' and cs != 'OD')))
    elif bu:
        cands = find(lambda h: 'Burst' in h and core(re.sub(r'\s*\((Bubble )?Burst\)', '', h)).replace('chaser', 'chase') == core(stem).replace('chaser', 'chase') and strength(h) == cs)
    else:
        # follow-up written "Parent > Child" in the hub
        is_od = cs == 'OD'
        cands = find(lambda h: '>' in h and core(h.split('>')[-1]) == core(stem) and (('OD' in h.split()) == is_od) and (cs in ('', 'OD') or strength(h.split('>')[-1].strip()) in (cs, '')))
        if cands:
            k = cands[0]
            row = list(hub[k])
            if isinstance(row[4], str) and re.fullmatch(r'\d+\+\d+', row[4]):
                row[4] = int(row[4].split('+')[1])   # the hub sums parent + follow-up startup
            return ('follow-up', k, loose(r, row))
        # a strength-specific Capcom row against the hub's single row for the move
        cands = find(lambda h: strength(h) == '' and core(h) == core(stem) and cs != 'OD')
        if not cands and re.match(r'(L|M|H|OD) Aerial ', stem):   # "L Aerial Rolling Attack" -> the hub's air version
            cands = find(lambda h: strength(h) in (cs, '') and core(re.sub(r'\(air\)', '', h)) == core(stem) and ('(air)' in h or 'Aerial' in h))
        if not cands and re.match(r'OD [MH] ', stem):          # "OD M Yoga Fire" -> the hub's OD row
            cands = find(lambda h: strength(h) == 'OD' and core(h) == core(re.sub(r'^OD [MH] ', 'OD ', stem)))
    if not cands:
        return None
    k = cands[0]
    return ('variant', k, loose(r, hub[k]))


def compare(cap):
    tot=collections.Counter(); diffs=[]; pairs_all=[]; unmatched=[]
    for cname,rows in cap.items():
        slug=slugify(cname); t=open(os.path.join(HUB,slug+'.js'),encoding='utf-8').read(); hub=json.loads(t[t.index('] = ')+4:t.rindex(';')])['frames']['m']
        used=set(); pairs=[]; left=[]
        stats=json.loads(t[t.index('] = ')+4:t.rindex(';')])['frames']['s']
        groups=collections.defaultdict(list)
        for r in rows:
            tot['capcom rows']+=1
            if '[' in r['name']: tot['state variants (not in hub)']+=1; continue
            m=re.match(r'^(.*?)\((\d+)\)$',r['name'].strip())
            if m: groups[(core(m.group(1)),strength(r['name']))].append((int(m.group(2)),r)); continue
            cs,cc,ci=strength(r['name']),core(r['name']),ncap_in(r['input'])
            pool=[k for k,h in enumerate(hub) if k not in used and strength(h[0])==cs and core(h[0])==cc]
            if not pool: pool=[k for k,h in enumerate(hub) if k not in used and strength(h[0])==cs and difflib.SequenceMatcher(None,core(h[0]),cc).ratio()>=0.9]
            if len(pool)>1:
                byin=[k for k in pool if nin(hub[k][1])==ci]; pool=byin or pool
            if not pool: left.append(r); continue
            k=min(pool,key=lambda k:miss(r,hub[k])); used.add(k); pairs.append((r,k))
        for (cc,cs),items in groups.items():
            hubk=[(int(re.search(r'(\d+)$',h[0]).group(1)) if re.search(r'\d+$',h[0]) else 1,k) for k,h in enumerate(hub) if k not in used and strength(h[0])==cs and core(re.sub(r'\s*\d+$','',h[0]))==cc]
            best=None
            for off in (0,1,-1):
                mp=[(r,k) for n,r in items for hn,k in hubk if hn==n-off]
                if not mp: continue
                score=(sum(miss(r,hub[k]) for r,k in mp)/len(mp),-len(mp))
                if best is None or score<best[0]: best=(score,mp)
            if best:
                for r,k in best[1]: used.add(k); pairs.append((r,k))
            else:
                left.extend(r for n,r in items)
        # second pass: names the hub writes differently (see alias_pass)
        for r in left:
            hit = alias_pass(r, hub, used, stats)
            if hit is None:   # third try: same input and strength, different name (e.g. Spinning Scythe / Spin Scythe)
                ci = ncap_in(r['input'])
                same = [k for k in range(len(hub)) if k not in used and ci and nin(hub[k][1]) == ci and strength(hub[k][0]) == strength(r['name'])
                        and difflib.SequenceMatcher(None, core(hub[k][0]), core(r['name'])).ratio() >= 0.6]
                if len(same) == 1:
                    used.add(same[0]); hit = ('same input', same[0], loose(r, hub[same[0]]))
            if hit is None:
                unmatched.append((slug, r['name'], r['input'])); continue
            kind, k, checks = hit
            tot['matched (second pass)'] += 1
            pairs_all.append((slug, hub[k][0] if k is not None else kind, r['name']))
            for f, a, b, ok in checks:
                tot['compared values'] += 1
                if not ok: diffs.append({'char': slug, 'hub_move': hub[k][0] if k is not None else kind, 'capcom_move': r['name'], 'field': f, 'hub': b, 'capcom': a, 'pass': 2})
        for r,k in pairs:
            tot['matched']+=1; pairs_all.append((slug,hub[k][0],r['name']))
            strict=set()
            for f,a,b in fields(r,hub[k]):
                if a is None or b is None: continue
                tot['compared values']+=1; strict.add(f)
                if a!=b: diffs.append({'char':slug,'hub_move':hub[k][0],'capcom_move':r['name'],'field':f,'hub':b,'capcom':a})
            for f,a,b,ok in loose(r,hub[k]):   # hub values that list several versions, e.g. -50(-54)
                if f in strict: continue
                tot['compared values (hub lists versions)']+=1
                if not ok: diffs.append({'char':slug,'hub_move':hub[k][0],'capcom_move':r['name'],'field':f,'hub':b,'capcom':a,'pass':1})
    return tot, diffs, unmatched, pairs_all


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    tot, diffs, unmatched, pairs = compare(parse(sys.argv[1]))
    for d in diffs:
        print('%(char)s | %(hub_move)s | %(field)s: hub %(hub)s, Capcom %(capcom)s' % d)
    print(dict(tot))
    print('%d differences in %d moves; %d Capcom rows not matched' % (len(diffs), len({(d['char'], d['hub_move']) for d in diffs}), len(unmatched)))
    print('second pass (names written differently, values compared against every version the hub lists): %d differences' % sum(1 for d in diffs if d.get('pass') == 2))
    if '--json' in sys.argv:
        with open(sys.argv[sys.argv.index('--json') + 1], 'w', encoding='utf-8') as f:
            json.dump({'totals': tot, 'diffs': diffs, 'pairs': pairs, 'unmatched': unmatched}, f, ensure_ascii=False, indent=1)


if __name__ == '__main__':
    main()
