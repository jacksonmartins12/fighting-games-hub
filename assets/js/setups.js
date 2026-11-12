'use strict';
// ---------- per-fighter oki and pressure sheets (character guides) ----------
// Both sheets are computed from the fighter's frame table with the same tested functions as the okizeme
// calculator and the string checker (okiKnockdowns, okiMeaty, safeMeaty, gapGroup); no number is typed by hand.
var SETUP_F = 4;   // fastest normal in SF6: 4 frames for every fighter in the data (frames.s.fastestNormal)

function setupNormals(slug) { return advStrikes(slug).filter(function (m) { return m[3] === 'n'; }); }

// Oki: for every knockdown advantage N the fighter can get, the normals that hit meaty when pressed as soon as
// possible after 0, 1 or 2 forward dashes (no manual wait). Knockdowns are grouped by N, since timing depends only on N.
function okiSheet(slug) {
  var st = FRAMES[slug].s || {}, fd = advNum(st.fDash), norms = setupNormals(slug), groups = {};
  okiKnockdowns(slug).forEach(function (k) { if (!k.cond) (groups[k.n] = groups[k.n] || []).push(k); });   // only knockdowns on a normal hit
  return Object.keys(groups).map(Number).sort(function (a, b) { return a - b; }).map(function (N) {
    var cols = [0, 1, 2].map(function (d) {
      if (d && fd == null) return null;
      var spent = d * (fd || 0);
      if (spent > N) return null;   // still dashing when they wake up
      return norms.map(function (m) {
        var S = suEff(m[4]), A = advActive(m[5]), r = okiMeaty(N, spent, S, A.n);
        if (!r || r.delay !== 0) return null;
        var blk = advNum(m[8]), hit = advNum(m[7]), rec = advNum(m[6]);
        var stuck = rec == null || A.multi ? null : A.n - r.k + rec;
        return { m: m, k: r.k, A: A, blk: blk == null ? null : blk + r.k - 1, hit: hit == null ? null : hit + r.k - 1,
          stuck: stuck, safeFrom: stuck == null ? null : stuck + 2 };
      }).filter(Boolean).sort(function (a, b) { return (b.blk == null ? -99 : b.blk) - (a.blk == null ? -99 : a.blk); });
    });
    return { n: N, kds: groups[N], cols: cols, spent: [0, fd, fd == null ? null : 2 * fd] };
  });
}

// Pressure: from each blocked move with a plain on-block value, the links that make a true block string (gap <= 0)
// or a frame trap against a 4-frame normal (gap 1 to 3). "plain": moves that are already plus; "dr": normals done
// out of Drive Rush, which get +4.
function pressureSheet(slug) {
  var nexts = advStrikes(slug), out = { plain: [], dr: [] };
  var follow = function (a) {
    return nexts.map(function (m) { var S = suEff(m[4]); return { m: m, S: S, gap: S - a, g: gapGroup(S - a, SETUP_F) }; })
      .filter(function (x) { return x.g === 'true' || x.g === 'trap'; })
      .sort(function (x, y) { return x.gap - y.gap || x.S - y.S; });
  };
  strFirst(slug).forEach(function (A) {
    var a = advNum(A[8]);
    if (a == null) return;
    if (a >= 1) out.plain.push({ m: A, a: a, list: follow(a) });
    if (A[3] === 'n' && a + 4 >= 1) out.dr.push({ m: A, a: a + 4, base: a, list: follow(a + 4) });
  });
  ['plain', 'dr'].forEach(function (k) { out[k] = out[k].filter(function (x) { return x.list.length; }).sort(function (x, y) { return y.a - x.a; }); });
  return out;
}

function setupMoveLabel(m) { return '<b class="inp">' + esc(m[1] || m[0]) + '</b>' + (m[1] ? ' <span class="muted small">' + esc(m[0]) + '</span>' : ''); }
function setupsHTML(slug) {
  if (!FRAMES[slug]) return '';
  var st = FRAMES[slug].s || {}, fd = advNum(st.fDash), oki = okiSheet(slug), pr = pressureSheet(slug);
  var h = '<details class="ft-details setups"><summary><span class="ft-sum-t">' + B('setups.title') + '</span> <span class="muted small">' + B('setups.summary') + '</span></summary><div class="setups-body">' +
    '<div class="card warning setups-warn"><p>' + B('setups.warn') + '</p></div>';
  // --- oki ---
  h += '<h5>' + B('setups.oki') + '</h5><p class="small">' + B('setups.oki-how', [fd == null ? '?' : fd]) + '</p>';
  var shown = oki.filter(function (g) { return g.cols.some(function (c) { return c && c.length; }); });
  shown.forEach(function (g) {
    var src = g.kds.map(function (k) { return '<span class="inp">' + esc(k.m[1] || k.m[0]) + '</span>' + (k.hard ? ' <span class="ft-tag">HKD</span>' : '') + (k.alt ? '*' : ''); }).join(', ');
    h += '<div class="setups-block"><p class="setups-head"><b class="inp">+' + g.n + '</b> <span class="small">' + src + '</span></p>';
    g.cols.forEach(function (c, d) {
      if (!c || !c.length) return;
      h += '<div class="setups-row"><span class="setups-lbl">' + B('setups.d' + d, [g.spent[d]]) + '</span><ul class="setups-list">' + c.map(function (e) {
        return '<li>' + setupMoveLabel(e.m) + ' <span class="setups-facts">' + B('setups.fact-active', [e.k, e.A.n]) + (e.A.multi ? ' (m)' : '') +
          ' · ' + B('setups.fact-block') + ' ' + (e.blk == null ? '—' : fmtAdv(e.blk)) + ' · ' + B('setups.fact-hit') + ' ' + okiHitCell(e.m[7], e.k) +
          (e.safeFrom == null ? '' : ' · ' + B('setups.fact-safe', [e.safeFrom])) + '</span></li>';
      }).join('') + '</ul></div>';
    });
    h += '</div>';
  });
  h += '<p class="small muted">' + B('setups.oki-count', [shown.length, oki.length]) + ' ' + B('setups.oki-legend') + '</p>';
  h += '<p><a class="btn ghost" href="#adv-oki" data-oki-char="' + slug + '">' + B('setups.open-oki') + '</a></p>';
  // --- pressure ---
  h += '<h5>' + B('setups.pressure') + '</h5><p class="small">' + B('setups.pressure-how') + '</p>';
  [['plain', 'setups.plain'], ['dr', 'setups.dr']].forEach(function (k) {
    var list = pr[k[0]];
    h += '<h6>' + B(k[1], [list.length]) + '</h6>';
    if (!list.length) { h += '<p class="small muted">' + B('setups.none-' + k[0]) + '</p>'; return; }
    list.forEach(function (x) {
      h += '<div class="setups-block"><p class="setups-head">' + setupMoveLabel(x.m) + ' <span class="inp">' + fmtAdv(x.a) + '</span>' + (k[0] === 'dr' ? ' <span class="small muted">' + B('setups.dr-base', [fmtAdv(x.base)]) + '</span>' : '') + '</p>';
      ['true', 'trap'].forEach(function (g) {
        var ys = x.list.filter(function (y) { return y.g === g; });
        if (!ys.length) return;
        h += '<div class="setups-row"><span class="setups-lbl">' + B('setups.' + g) + '</span><p class="setups-nexts">' + ys.map(function (y) { return '<span class="setups-next"><b class="inp">' + esc(y.m[1] || y.m[0]) + '</b> <span class="muted">' + B('setups.gap', [y.gap]) + '</span></span>'; }).join(' ') + '</p></div>';
      });
      h += '</div>';
    });
  });
  h += '<p class="small muted">' + B('setups.pressure-legend') + '</p>';
  h += '<p><a class="btn ghost" href="#adv-pressure" data-str-char="' + slug + '">' + B('setups.open-str') + '</a></p>';
  h += '</div></details>';
  return h;
}
document.addEventListener('click', function (e) {
  var o = e.target.closest('[data-oki-char]'), s = e.target.closest('[data-str-char]');
  if (o) { adv.okiChar = o.getAttribute('data-oki-char'); adv.okiKd = null; adv.okiDash = 0; adv.okiWalk = 0; advSave(); }
  if (s) { adv.strChar = s.getAttribute('data-str-char'); adv.strA = null; adv.strDr = false; adv.strBo = false; adv.strExtra = 0; advSave(); }
});
