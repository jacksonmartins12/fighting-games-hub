'use strict';
// ---------- per-fighter oki sheet (character guides) ----------
// The sheet is computed from the fighter's frame table with the same tested functions as the okizeme
// calculator (okiKnockdowns, okiMeaty, safeMeaty); no number is typed by hand.
function setupNormals(slug) { return advStrikes(slug).filter(function (m) { return m[3] === 'n'; }); }

// Oki: for every knockdown advantage N the fighter can get, the normals that hit meaty when pressed as soon as
// possible after 0, 1 or 2 forward dashes (no manual wait). Knockdowns are grouped by N, since timing depends only on N.
function okiSheet(slug) {
  var st = FRAMES[slug].s || {}, fd = advNum(st.fDash), norms = setupNormals(slug), groups = {};
  okiKnockdowns(slug).forEach(function (k) { (groups[k.n] = groups[k.n] || []).push(k); });
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

function setupMoveLabel(m) { return '<b class="inp">' + esc(m[1] || m[0]) + '</b>' + (m[1] ? ' <span class="muted small">' + esc(m[0]) + '</span>' : ''); }
function setupsHTML(slug) {
  if (!FRAMES[slug]) return '';
  var st = FRAMES[slug].s || {}, fd = advNum(st.fDash), oki = okiSheet(slug);
  var h = '<details class="ft-details setups"><summary><span class="ft-sum-t">' + B('setups.title') + '</span> <span class="muted small">' + B('setups.summary') + '</span></summary><div class="setups-body">';
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
          ' · ' + B('setups.fact-block') + ' ' + (e.blk == null ? '—' : fmtAdv(e.blk)) + ' · ' + B('setups.fact-hit') + ' ' + (e.hit == null ? fmtCell(e.m[7]) : fmtAdv(e.hit)) +
          (e.safeFrom == null ? '' : ' · ' + B('setups.fact-safe', [e.safeFrom])) + '</span></li>';
      }).join('') + '</ul></div>';
    });
    h += '</div>';
  });
  h += '<p class="small muted">' + B('setups.oki-count', [shown.length, oki.length]) + ' ' + B('setups.oki-legend') + '</p>';
  h += '<p><a class="btn ghost" href="#adv-oki" data-oki-char="' + slug + '">' + B('setups.open-oki') + '</a></p>';
  h += '</div></details>';
  return h;
}
document.addEventListener('click', function (e) {
  var o = e.target.closest('[data-oki-char]');
  if (o) { adv.okiChar = o.getAttribute('data-oki-char'); adv.okiKd = null; adv.okiDash = 0; adv.okiWalk = 0; advSave(); }
});
