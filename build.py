#!/usr/bin/env python3
"""Builds index.html from the files in src/, i18n/ and src/site.json.

    python3 build.py                 -> writes index.html (the page GitHub Pages serves)
    python3 build.py --artifact OUT  -> also writes OUT, the same page without <head>, for the claude.ai artifact

index.html is generated: edit the sources and run this script again.
  src/shell.html            page frame (hero, reader, footer); {{t:key}} = interface string in both languages
  src/site.json             chapter order and groups (the menu, chapter tags and pagers come from it)
  src/content/<lang>/*.html chapter text, one file per chapter and language
  i18n/<lang>.js            interface strings
"""
import hashlib, json, os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
LANGS = [('en', 'en'), ('pt', 'pt-BR')]
SCRIPTS = ['i18n/en.js', 'i18n/pt.js', 'data/roster.js', 'data/upcoming.js', 'data/quiz.js', 'data/sources.js',
           'assets/js/core.js', 'assets/js/store.js', 'assets/js/nav.js', 'assets/js/widgets.js',
           'assets/js/checklists.js', 'assets/js/quiz.js', 'assets/js/roster.js', 'assets/js/frames.js',
           'assets/js/punish.js', 'assets/js/matchup.js', 'assets/js/sheet.js', 'assets/js/tracker.js', 'assets/js/plan.js', 'assets/js/review.js', 'assets/js/flashcards.js', 'assets/js/search.js', 'assets/js/advanced.js', 'assets/js/boot.js']


def read(p):
    with open(os.path.join(ROOT, p), encoding='utf-8') as f:
        return f.read()


def load_i18n(lang):
    src = read('i18n/%s.js' % lang)
    return json.loads(src[src.index('= {') + 2: src.rindex('}') + 1])


I18N = {l: load_i18n(l) for l, _ in LANGS}
missing = set(I18N['en']) ^ set(I18N['pt'])
if missing:
    sys.exit('i18n keys missing in one language: %s' % sorted(missing))


def t(key):
    """Both languages side by side; CSS shows the active one."""
    if key not in I18N['en']:
        sys.exit('unknown i18n key: ' + key)
    return ''.join('<span class="l-%s" lang="%s">%s</span>' % (l, code, I18N[l][key]) for l, code in LANGS)


def expand(html):
    return re.sub(r'\{\{t:([^}]+)\}\}', lambda m: t(m.group(1)), html)


def count_label(key, n):
    """{{chapters:group}} / {{chapters:all}}: an i18n string with {0} = number of chapters."""
    return ''.join('<span class="l-%s" lang="%s">%s</span>' % (l, code, I18N[l][key].replace('{0}', str(n))) for l, code in LANGS)


def build():
    site = json.loads(read('src/site.json'))
    groups = {g['id']: g for g in site['groups']}
    chapters = site['chapters']
    by_group = {g: [c for c in chapters if c['group'] == g] for g in groups}

    def glabel(g):
        return I18N['en']['group.' + g] if groups[g].get('plainLabel') else t('group.' + g)

    def pager_label(word, g):  # "Previous · The Path" as one string per language
        return ''.join('<span class="l-%s" lang="%s">%s · %s</span>' % (l, code, I18N[l]['nav.' + word], I18N[l]['group.' + g]) for l, code in LANGS)

    # sidebar
    side = ['<aside class="sidebar" id="sidebar" aria-label="Chapters">', expand(read('src/sidebar-top.html').rstrip('\n'))]
    first = chapters[0]['id']
    for g in site['groups']:
        side.append('<div class="group" data-group="%s">' % g['id'])
        side.append('<div class="group-head">%s<span class="k" aria-hidden="true">%s</span><span class="gt"><b>%s</b><small>%s</small></span></div>'
                    % (g['face'], g['kanji'], glabel(g['id']), expand(g['small'])))
        for i, c in enumerate(by_group[g['id']], 1):
            num = '<span class="n">%02d</span>' % i if g.get('numbered') else ''
            side.append('<button class="chap" type="button" data-go="%s" aria-current="%s">%s<span class="lbl">%s</span><span class="qs" data-qs="%s"></span></button>'
                        % (c['id'], 'true' if c['id'] == first else 'false', num, t('chapter.' + c['id']), c['id']))
        side.append('</div>')
    side.append('</aside>')

    # chapters
    out = []
    for n, c in enumerate(chapters):
        g = groups[c['group']]
        sib = by_group[c['group']]
        count = ' · %02d / %02d' % (sib.index(c) + 1, len(sib)) if g.get('numbered') else ''
        tag = '<div class="chapter-tag"><span class="k" aria-hidden="true">%s</span><span>%s%s</span></div>' % (g['kanji'], t('group.' + c['group']), count)
        nav = ''
        for word, cls, o in (('previous', 'prev', n - 1), ('next', 'next', n + 1)):
            if 0 <= o < len(chapters):
                oc = chapters[o]
                nav += '<button class="%s" type="button" data-go="%s"><small>%s</small><span>%s</span></button>' % (
                    cls, oc['id'], pager_label(word, oc['group']), t('chapter.' + oc['id']))
        body = ''.join('<div class="l-%s" lang="%s">%s</div>\n' % (l, code, read('src/content/%s/%s.html' % (l, c['id']))) for l, code in LANGS)
        app = c.get('app') or '<div class="quiz" data-quiz="%s"></div>' % c['id']
        out.append('<section id="%s" data-group="%s"%s>\n%s\n%s%s\n<nav class="pager" aria-label="Chapters">%s</nav>\n</section>\n'
                   % (c['id'], c['group'], ' class="active"' if n == 0 else '', tag, body, app, nav))

    scripts = '\n'.join('<script src="%s"></script>' % p for p in SCRIPTS)
    html = read('src/shell.html')
    html = html.replace('{{chapters:all}}', count_label('ui.hero-line', len(chapters)))
    html = re.sub(r'\{\{chapters:([a-z]+)\}\}', lambda m: count_label('ui.n-chapters', len(by_group[m.group(1)])), html)
    html = expand(html)
    html = html.replace('{{sidebar}}', '\n'.join(side)).replace('{{chapters}}', ''.join(out)).replace('{{scripts}}', scripts)
    return html


def moves_index():
    """data/moves-index.js: every move name and input, so the search finds moves without loading 32 fighter files."""
    out = {}
    for name in sorted(os.listdir(os.path.join(ROOT, 'data/chars'))):
        src = read('data/chars/' + name)
        d = json.loads(src[src.index('] = ') + 4: src.rindex(';')])
        seen, rows = set(), []
        for m in d['frames']['m']:
            row = [m[0], m[1] or '', m[2] or '']
            if tuple(row) not in seen:
                seen.add(tuple(row)); rows.append(row)
        out[name[:-3]] = rows
    body = ',\n'.join('%s:%s' % (json.dumps(k), json.dumps(v, ensure_ascii=False, separators=(',', ':'))) for k, v in out.items())
    with open(os.path.join(ROOT, 'data/moves-index.js'), 'w', encoding='utf-8') as f:
        f.write('// Generated by build.py from data/chars/*.js: [name, input, classic input] of every move, for the search.\n'
                '(window.HUB_DATA = window.HUB_DATA || {}).moves = {\n%s\n};\n' % body)
    print('data/moves-index.js', sum(len(v) for v in out.values()), 'moves')


def service_worker():
    """sw.js: list of every file the hub needs, plus a version that changes whenever any of them changes."""
    files = ['index.html', 'manifest.webmanifest']
    for top in ('assets', 'i18n', 'data', 'img'):
        for folder, _, names in os.walk(os.path.join(ROOT, top)):
            for n in names:
                files.append(os.path.relpath(os.path.join(folder, n), ROOT).replace(os.sep, '/'))
    files = sorted(f for f in files if f != 'img/og.jpg' and not f.endswith('.pyc'))
    h = hashlib.sha1()
    for f in files:
        with open(os.path.join(ROOT, f), 'rb') as fh:
            h.update(f.encode()); h.update(fh.read())
    h.update(read('src/sw.template.js').encode())
    later = [f for f in files if f.startswith(('data/chars/', 'img/fighters/'))]
    core = [f for f in files if f not in later]
    sw = read('src/sw.template.js').replace('__VERSION__', h.hexdigest()[:12]).replace('__CORE__', json.dumps(core)).replace('__REST__', json.dumps(later))
    with open(os.path.join(ROOT, 'sw.js'), 'w', encoding='utf-8') as f:
        f.write(sw)
    print('sw.js', len(core), 'core files +', len(later), 'on demand, version', h.hexdigest()[:12])


def main():
    sys.path.insert(0, os.path.join(ROOT, 'tools'))
    import validate
    if validate.main():
        sys.exit('build stopped: fix the data errors above (tools/validate.py)')
    moves_index()
    html = build()
    page = html.replace('<!--head-end-->\n', '').replace('<!--body-start-->\n', '</head>\n<body>\n').replace('<!--body-end-->\n', '</body>\n</html>\n')
    with open(os.path.join(ROOT, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(page)
    print('index.html', len(page), 'bytes')
    service_worker()
    if '--artifact' in sys.argv:
        dst = sys.argv[sys.argv.index('--artifact') + 1]
        body = html[html.index('<!--head-end-->\n') + 16:].replace('<!--body-start-->\n', '').replace('<!--body-end-->\n', '')
        with open(dst, 'w', encoding='utf-8') as f:
            f.write(body)
        print(dst, len(body), 'bytes')


if __name__ == '__main__':
    main()
