'use strict';
// ---------- roster ----------
var ARCH = ['shoto', 'rushdown', 'zoner', 'grappler', 'midrange', 'special'];   // labels: arch.<id> in i18n
var MONO = { 'dee-jay': 'DJ', 'chun-li': 'CHUN', 'e-honda': 'HONDA', 'm-bison': 'BISON', 'c-viper': 'VIPER', 'a-k-i': 'A.K.I.' };
function mono(c) { return MONO[c.slug] || c.name.split(/\s+/)[0].toUpperCase(); }
function dots(n) { var s = '<span class="dots" aria-hidden="true">'; for (var i = 1; i <= 5; i++) s += '<i class="' + (i <= n ? 'on' : '') + '"></i>'; return s + '</span>'; }
var roster = { filter: 'all', q: '', open: null };
var rosterApp = document.getElementById('roster-app');
function fmtAdv(v) {
  if (v == null || v === '') return '<span class="muted">—</span>';
  if (typeof v === 'string') return '<span class="adv">' + esc(v) + '</span>';
  var cls = v > 0 ? 'plus' : (v < 0 ? 'minus' : '');
  return '<span class="adv ' + cls + '">' + (v > 0 ? '+' : (v < 0 ? '−' : '')) + Math.abs(v) + '</span>';
}
function renderRoster() {
  if (!rosterApp) return;
  if (roster.open && ROSTER[roster.open]) {
    var slug = roster.open;
    if (CHARS[slug]) { rosterApp.innerHTML = charHTML(CHARS[slug]); fillFrameTable(rosterApp.querySelector('.ft')); return; }
    var back = '<button type="button" class="btn ghost cg-back" data-roster-back>' + B('roster.all-fighters') + '</button>';
    rosterApp.innerHTML = '<div class="cg">' + back + '<h3>' + esc(ROSTER[slug].name) + '</h3>' + loadingHTML() + '</div>';
    needChar(slug).then(function () { if (roster.open === slug) renderRoster(); }, function () {
      if (roster.open === slug) rosterApp.innerHTML = '<div class="cg">' + back + '<h3>' + esc(ROSTER[slug].name) + '</h3>' + loadErrorHTML('data-char="' + slug + '"') + '</div>';
    });
    return;
  }
  var list = rosterList();
  var h = '<div class="roster-tools"><div class="chips" role="group" data-i18n-aria="roster.filter-by-archetype" aria-label="Filter by archetype">' +
    '<button type="button" class="chip" data-arch-f="all" aria-pressed="' + (roster.filter === 'all') + '">' + B('roster.all') + ' (' + list.length + ')</button>';
  ARCH.forEach(function (a) {
    var n = list.filter(function (c) { return c.archetype === a; }).length;
    h += '<button type="button" class="chip" data-arch="' + a + '" data-arch-f="' + a + '" aria-pressed="' + (roster.filter === a) + '"><i></i>' + B('arch.' + a) + ' (' + n + ')</button>';
  });
  h += '</div><div class="search-row"><label for="roster-q" class="widget-label" style="margin:0">' + B('roster.find-a-fighter') + '</label>' +
    '<input id="roster-q" type="search" autocomplete="off" value="' + esc(roster.q) + '" data-i18n-ph="roster.name" placeholder="' + tr('roster.name') + '"></div></div>';
  var shown = list.filter(function (c) {
    return (roster.filter === 'all' || c.archetype === roster.filter) && (!roster.q || norm(c.name).indexOf(norm(roster.q)) > -1);
  });
  if (!shown.length) h += '<p class="r-empty">' + B('roster.no-fighter-matches-that-search') + '</p>';
  h += '<div class="rgrid">';
  shown.forEach(function (c) {
    h += '<button type="button" class="rcard" data-arch="' + c.archetype + '" data-char="' + c.slug + '">' +
      '<img class="portrait" src="img/fighters/' + c.slug + '.webp" width="160" height="160" alt="" loading="lazy"><b>' + esc(c.name) + '</b>' +
      '<small>' + B('arch.' + c.archetype) + '</small>' + dots(c.difficulty) + '</button>';
  });
  h += '</div><div class="upcoming"><h3>' + B('roster.coming-next') + '</h3><div class="upc-grid">';
  UPCOMING.forEach(function (u) {
    var us = u.name.split(' ')[0].toLowerCase();
    h += '<div class="upc"><img class="upc-portrait" src="img/fighters/' + us + '.webp" width="160" height="160" alt="" loading="lazy"><div><b>' + esc(u.name) + '</b><small>' + BO(u.when) + '</small><p>' + BO(u.desc) + '</p></div></div>';
  });
  h += '</div><p class="small muted" style="margin-top:10px">' + B('roster.guides-for-these-fighters-will-be') + '</p></div>';
  rosterApp.innerHTML = h;
  var q = rosterApp.querySelector('#roster-q');
  q.addEventListener('input', function () {
    roster.q = q.value; var pos = q.selectionStart; renderRoster();
    var nq = rosterApp.querySelector('#roster-q'); nq.focus(); try { nq.setSelectionRange(pos, pos); } catch (e) {}
  });
}
function li(arr) { return (arr || []).map(function (x) { return '<li>' + BO(x) + '</li>'; }).join(''); }
function charHTML(c) {
  var h = '<div class="cg" data-arch="' + c.archetype + '">' +
    '<button type="button" class="btn ghost cg-back" data-roster-back>' + B('roster.all-fighters') + '</button>' +
    '<div class="cg-head"><img class="cg-portrait" src="img/fighters/' + c.slug + '.webp" width="160" height="160" alt="' + esc(c.name) + '"><div><h3>' + esc(c.name) + '</h3>' +
    '<div class="cg-meta"><span class="arch">' + B('arch.' + c.archetype) + '</span><span>' + BO(c.release) + '</span><span>' + dots(c.difficulty) + ' ' + B('diff.' + c.difficulty) + '</span></div></div></div>' +
    '<p class="sheet-row"><button type="button" class="btn" data-sheet="' + c.slug + '">' + B('roster.download-pocket-sheet-png') + '</button> <span class="sheet-msg small muted" role="status"></span></p>' +
    '<p style="margin-top:14px">' + BO(c.summary) + '</p>' +
    '<p class="small muted">' + B('roster.difficulty') + BO(c.difficulty_why) + '</p>' +
    '<div class="cg-two"><div><h4>' + B('roster.strengths') + '</h4><ul class="cg-list plus">' + li(c.strengths) + '</ul></div>' +
    '<div><h4>' + B('roster.weaknesses') + '</h4><ul class="cg-list minus">' + li(c.weaknesses) + '</ul></div></div>' +
    '<h4>' + B('roster.gameplan') + '</h4><p>' + BO(c.gameplan) + '</p>' +
    '<h4>' + B('roster.key-moves') + '</h4><div class="table-wrap"><table><tr><th>' + B('roster.move') + '</th><th>' + B('roster.input') + '</th><th>' + B('roster.classic') + '</th><th>' + B('roster.what-it-s-for') + '</th></tr>';
  (c.key_moves || []).forEach(function (m) {
    h += '<tr><td><b>' + esc(m.name) + '</b></td><td class="inp">' + esc(m.input) + '</td><td class="inp">' + esc(m.classic) + '</td><td>' + BO(m.role) + '</td></tr>';
  });
  h += '</table></div><h4>' + B('roster.key-normals-and-frame-data') + '</h4><div class="table-wrap"><table><tr><th>' + B('roster.normal') + '</th><th>Startup</th><th>' + B('widgets.on-block') + '</th><th>' + B('widgets.on-hit') + '</th><th>' + B('roster.use') + '</th></tr>';
  (c.key_normals || []).forEach(function (n) {
    h += '<tr><td class="inp"><b>' + esc(n.move) + '</b><br><span class="muted">' + esc(n.classic) + '</span></td><td class="inp">' + (n.startup == null ? '<span class="muted">—</span>' : esc(n.startup) + 'f') + '</td><td class="inp">' + fmtAdv(n.on_block) + '</td><td class="inp">' + fmtAdv(n.on_hit) + '</td><td>' + BO(n.role) + '</td></tr>';
  });
  h += '</table></div><h4>' + B('roster.anti-air') + '</h4><p>' + BO(c.anti_air) + '</p><h4>' + B('roster.combos-to-start-with') + '</h4>';
  (c.combos || []).forEach(function (k) {
    h += '<div class="combo"><p class="combo-label">' + BO(k.label) + '</p><div class="route">' + esc(k.route) + '</div><p class="small muted">' + BO(k.notes) + '</p></div>';
  });
  h += frameSectionHTML(c.slug) + (typeof setupsHTML === 'function' ? setupsHTML(c.slug) : '');
  h += '<h4>' + B('roster.tips') + '</h4><ul>' + li(c.tips) + '</ul>' +
    '<h4>' + B('roster.playing-against') + esc(c.name) + '</h4><p>' + BO(c.counterplay) + '</p>' +
    '<div class="card"><p class="small">' + BO(c.data_note) + '</p><p class="cg-sources">' + B('roster.sources') +
    (c.sources || []).map(function (u) { var url = typeof u === 'string' ? u : u.url; return /^https?:\/\//.test(url) ? '<a href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(url.replace(/^https?:\/\/(www\.)?/, '')) + '</a>' : esc(url); }).join(' · ') +
    '</p></div><p><button type="button" class="btn ghost" data-roster-back>' + B('roster.all-fighters') + '</button></p></div>';
  return h;
}
function openChar(slug, scroll) {
  if (!ROSTER[slug]) return;
  roster.open = slug;
  show('roster', false, true);
  renderRoster();
  try { history.replaceState(null, '', '#char-' + slug); } catch (e) {}
  if (scroll !== false) reader.scrollIntoView({ behavior: behavior, block: 'start' });
}
document.addEventListener('click', function (e) {
  var c = e.target.closest('[data-char]');
  if (c) { e.preventDefault(); openChar(c.getAttribute('data-char')); return; }
  if (e.target.closest('[data-roster-back]')) {
    roster.open = null; renderRoster();
    try { history.replaceState(null, '', '#roster'); } catch (er) {}
    reader.scrollIntoView({ behavior: behavior, block: 'start' }); return;
  }
  var f = e.target.closest('[data-arch-f]');
  if (f) { roster.filter = f.getAttribute('data-arch-f'); renderRoster(); }
});
