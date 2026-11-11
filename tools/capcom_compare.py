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


def compare(cap):
    tot=collections.Counter(); diffs=[]; pairs_all=[]; unmatched=[]
    for cname,rows in cap.items():
        slug=slugify(cname); t=open(os.path.join(HUB,slug+'.js'),encoding='utf-8').read(); hub=json.loads(t[t.index('] = ')+4:t.rindex(';')])['frames']['m']
        used=set(); pairs=[]
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
            if not pool: unmatched.append((slug,r['name'],r['input'])); continue
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
                for n,r in items: unmatched.append((slug,r['name'],r['input']))
        for r,k in pairs:
            tot['matched']+=1; pairs_all.append((slug,hub[k][0],r['name']))
            for f,a,b in fields(r,hub[k]):
                if a is None or b is None: continue
                tot['compared values']+=1
                if a!=b: diffs.append({'char':slug,'hub_move':hub[k][0],'capcom_move':r['name'],'field':f,'hub':b,'capcom':a})
    return tot, diffs, unmatched, pairs_all


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    tot, diffs, unmatched, pairs = compare(parse(sys.argv[1]))
    for d in diffs:
        print('%(char)s | %(hub_move)s | %(field)s: hub %(hub)s, Capcom %(capcom)s' % d)
    print(dict(tot))
    print('%d differences in %d moves; %d Capcom rows not matched' % (len(diffs), len({(d['char'], d['hub_move']) for d in diffs}), len(unmatched)))
    if '--json' in sys.argv:
        with open(sys.argv[sys.argv.index('--json') + 1], 'w', encoding='utf-8') as f:
            json.dump({'totals': tot, 'diffs': diffs, 'pairs': pairs, 'unmatched': unmatched}, f, ensure_ascii=False, indent=1)


if __name__ == '__main__':
    main()
