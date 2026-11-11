'use strict';
// ---------- full frame data ----------
var FT_CATS = ['all', 'n', 's', 'u', 't', 'd'];   // labels: frames.cat.<id> in i18n
var XX = { ch: 'Chain', sp: 'SP', su: 'SA', tc: 'TC', jc: 'JC' };
var ftState = { cat: 'all', q: '', unsafe: false };
function firstInt(v) { if (typeof v === 'number') return v; if (v == null) return null; var m = String(v).match(/[-+]?\d+/); return m ? +m[0] : null; }
function safestBlock(v) { // least punishable value listed for a move (e.g. its spaced version)
  if (typeof v === 'number') return v; if (v == null) return null;
  var ms = String(v).match(/[-+]?\d+/g); if (!ms) return null;
  return Math.max.apply(null, ms.map(Number));
}
function dmgVal(v) {
  if (typeof v === 'number') return v; if (v == null) return 0;
  var s = String(v), x = s.match(/(\d+)\s*x\s*(\d+)/i); if (x) return +x[1] * +x[2];
  var m = s.match(/\d+/); return m ? +m[0] : 0;
}
function suEff(v) { // startup that actually connects: sums "8+15", takes the slow end of "5(9~10)"
  if (typeof v === 'number') return v; if (v == null) return null;
  var s = String(v), lead = s.split(/[(\s]/)[0];
  if (/\+/.test(lead)) return lead.match(/\d+/g).reduce(function (a, b) { return a + +b; }, 0);
  var r = s.match(/\((\d+)~(\d+)\)/); if (r) return +r[2];
  return firstInt(s);
}
// Source problems recorded in data/sources.js (flags[fighter][move]): check, conflict, derived, tested.
function moveFlag(slug, name) { var s = (window.HUB_DATA || {}).sources; return s && s.flags && s.flags[slug] ? s.flags[slug][name] || null : null; }
function condTag(m) { var k = 'frames.cond.' + m[11]; return m[11] && hasKey(k) ? ' <span class="ft-tag">' + B(k) + '</span>' : ''; }
function isAir(num) { return /(^|\s)j\.|^[789]/.test(String(num || '')); }
function fmtCell(v) {
  if (v == null || v === '') return '<span class="muted">—</span>';
  if (typeof v === 'number') return fmtAdv(v);
  var s = String(v), n = s.match(/^[-+]?\d+$/);
  if (n) return fmtAdv(+s);
  var lead = s.match(/^([-+]?\d+)/);
  var cls = lead ? (+lead[1] < 0 ? 'minus' : (+lead[1] > 0 ? 'plus' : '')) : '';
  return '<span class="adv ' + cls + '">' + esc(s.replace(/^-/, '−')) + '</span>';
}
function frameSectionHTML(slug) {
  var f = FRAMES[slug]; if (!f) return '';
  var st = f.s || {};
  var h = '<details class="ft-details"><summary><span class="ft-sum-t">' + B('frames.full-frame-data') + '</span> <span class="muted small">' +
    B('frames.moves-fastest-normal-best-reversal', [f.m.length, esc(st.fastestNormal || '—'), esc(st.bestReversal || '—')]) + '</span></summary>' +
    '<div class="ft" data-ft="' + slug + '"><div class="ft-tools"><div class="chips" role="group">';
  FT_CATS.forEach(function (c) { h += '<button type="button" class="chip" data-ftcat="' + c + '" aria-pressed="' + (ftState.cat === c) + '">' + B('frames.cat.' + c) + '</button>'; });
  h += '</div><div class="search-row"><input type="search" class="ft-q" id="ft-q" autocomplete="off" aria-label="Search moves" data-i18n-ph="frames.search-a-move-or-input" placeholder="' + tr('frames.search-a-move-or-input') + '" value="' + esc(ftState.q) + '">' +
    '<label class="ft-toggle"><input type="checkbox" class="ft-unsafe" id="ft-unsafe"' + (ftState.unsafe ? ' checked' : '') + '> ' + B('frames.only-unsafe-on-block-4-or') + '</label></div></div>' +
    '<div class="table-wrap"><table class="ft-table"><thead><tr><th>' + B('roster.move') + '</th><th>' + B('roster.input') + '</th><th>Startup</th><th>' + B('frames.active') + '</th><th>' + B('frames.recovery') + '</th><th>' + B('widgets.on-hit') + '</th><th>' + B('widgets.on-block') + '</th><th>' + B('frames.damage') + '</th><th>Cancel</th><th>' + B('frames.range') + '</th><th>' + B('frames.scaling') + '</th></tr></thead><tbody></tbody></table></div>' +
    '<p class="small muted ft-count"></p>' +
    '<p class="small muted">' + B('frames.source-fat-frame-assistant-tool-community') + '</p></div></details>';
  return h;
}
function fillFrameTable(box) {
  if (!box) return;
  var f = FRAMES[box.getAttribute('data-ft')]; if (!f) return;
  var q = norm(ftState.q.trim()), rows = '', n = 0;
  f.m.forEach(function (m) {
    if (ftState.cat !== 'all' && m[3] !== ftState.cat) return;
    if (q && norm(m[0] + ' ' + (m[1] || '') + ' ' + (m[2] || '')).indexOf(q) === -1) return;
    if (ftState.unsafe) { var b = safestBlock(m[8]); if (b == null || b > -4 || isAir(m[1]) || m[11] === 'air') return; }
    n++;
    var xx = (m[10] || '').split(/\s+/).filter(Boolean).map(function (k) { return XX[k] || k.toUpperCase(); }).join(' ');
    var fl = moveFlag(box.getAttribute('data-ft'), m[0]);
    rows += '<tr' + (fl && fl.status !== 'derived' ? ' class="ft-flagged"' : '') + '><td><b>' + esc(m[0]) + '</b>' + condTag(m) + (fl ? ' <span class="ft-tag ft-flag-' + fl.status + '">' + B('frames.flag.' + fl.status) + '</span><span class="ft-note">' + BO(fl.detail) + '</span>' : '') +
      (m[15] ? '<span class="ft-note"><span>' + B('frames.inv') + '</span> <span lang="en">' + esc(m[15]) + '</span></span>' : '') + '</td><td class="inp">' + esc(m[1] || '') + '</td><td class="inp">' + (m[4] == null ? '<span class="muted">—</span>' : esc(m[4])) +
      '</td><td class="inp">' + esc(m[5] == null ? '—' : m[5]) + '</td><td class="inp">' + esc(m[6] == null ? '—' : m[6]) + '</td><td class="inp">' + fmtCell(m[7]) +
      '</td><td class="inp">' + fmtCell(m[8]) + '</td><td class="inp">' + esc(m[9] == null ? '—' : m[9]) + '</td><td class="inp small">' + esc(xx) + '</td><td class="inp">' + (m[13] == null ? '<span class="muted">—</span>' : esc(m[13])) + '</td><td class="small">' + (m[14] ? esc(m[14]) : '<span class="muted">—</span>') + '</td></tr>';
  });
  box.querySelector('tbody').innerHTML = rows || '<tr><td colspan="11" class="muted">' + tr('frames.no-moves-match-these-filters') + '</td></tr>';
  box.querySelector('.ft-count').innerHTML = B('frames.of-moves-shown', [n, f.m.length]);
  box.querySelectorAll('[data-ftcat]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-ftcat') === ftState.cat)); });
}
document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-ftcat]'); if (!b) return;
  ftState.cat = b.getAttribute('data-ftcat'); fillFrameTable(b.closest('.ft'));
});
document.addEventListener('input', function (e) {
  if (e.target.classList && e.target.classList.contains('ft-q')) { ftState.q = e.target.value; fillFrameTable(e.target.closest('.ft')); }
});
document.addEventListener('change', function (e) {
  if (e.target.classList && e.target.classList.contains('ft-unsafe')) { ftState.unsafe = e.target.checked; fillFrameTable(e.target.closest('.ft')); }
});
