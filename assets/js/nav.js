'use strict';
// ---------- menu ----------
function openMenu() {
  sidebar.classList.add('open'); scrim.hidden = false; openBtn.setAttribute('aria-expanded', 'true');
  var cur = sidebar.querySelector('.chap[aria-current="true"]'); if (cur) cur.focus();
}
function closeMenu() {
  if (!sidebar.classList.contains('open')) return;
  sidebar.classList.remove('open'); scrim.hidden = true; openBtn.setAttribute('aria-expanded', 'false');
}

// ---------- chapters ----------
var onShow = {};   // chapter id -> function called every time that chapter is shown
var onLang = [];   // functions called after every language switch
function show(id, scroll, keepHash) {
  if (ORDER.indexOf(id) === -1) return;
  current = id;
  var secs = main.querySelectorAll(':scope > section');
  for (var i = 0; i < secs.length; i++) secs[i].classList.toggle('active', secs[i].id === id);
  sidebar.querySelectorAll('.chap').forEach(function (b) {
    b.setAttribute('aria-current', b.getAttribute('data-go') === id ? 'true' : 'false');
  });
  main.setAttribute('data-group', GROUP[id]);
  sideGroups(GROUP[id]);
  mTitle.textContent = tr('chapter.' + id);
  LS.set('fgc-last-chapter', id);
  if (!keepHash) { try { history.replaceState(null, '', '#' + id); } catch (e) {} }
  if (id === 'roster' && !keepHash) { roster.open = null; renderRoster(); }
  if (id === 'punish') renderPunish();   // loads the two fighters it needs the first time it is shown
  if (id === 'matchup') renderMatchup();
  if (onShow[id]) onShow[id]();
  closeMenu();
  if (scroll) reader.scrollIntoView({ behavior: behavior, block: 'start' });
}
// sidebar: only the current group is open; any group opens on tap, and the current chapter stays in view
function setGroupOpen(g, on) {
  g.classList.toggle('collapsed', !on);
  var h = g.querySelector('.group-head'); if (h) h.setAttribute('aria-expanded', on ? 'true' : 'false');
}
function sideGroups(active) {
  sidebar.querySelectorAll('.group').forEach(function (g) { setGroupOpen(g, g.getAttribute('data-group') === active); });
  var cur = sidebar.querySelector('.chap[aria-current="true"]');
  if (!cur) return;
  var s = sidebar.getBoundingClientRect(), c = cur.getBoundingClientRect();
  if (c.top < s.top + 8 || c.bottom > s.bottom - 8) sidebar.scrollTop += c.top - s.top - s.height / 3;
}
sidebar.querySelectorAll('.group-head').forEach(function (h) {
  h.setAttribute('role', 'button'); h.setAttribute('tabindex', '0'); h.setAttribute('aria-expanded', 'true');
  function flip() { var g = h.parentNode; setGroupOpen(g, g.classList.contains('collapsed')); }
  h.addEventListener('click', flip);
  h.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });
});
function resolveTarget(hash) {
  if (!hash) return null;
  return (lang === 'pt' && document.getElementById(hash + '-pt')) || document.getElementById(hash) ||
    document.getElementById(hash.replace(/-pt$/, ''));
}

// ---------- language ----------
function setLang(l, persist) {
  lang = l === 'pt' ? 'pt' : 'en';
  root.setAttribute('data-lang', lang);
  root.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-lang-set]').forEach(function (b) {
    b.setAttribute('aria-pressed', b.getAttribute('data-lang-set') === lang ? 'true' : 'false');
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function (i) {
    i.setAttribute('placeholder', tr(i.getAttribute('data-i18n-ph')));
  });
  document.querySelectorAll('[data-i18n-text]').forEach(function (i) {
    i.textContent = tr(i.getAttribute('data-i18n-text'));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (i) {
    i.setAttribute('aria-label', tr(i.getAttribute('data-i18n-aria')));
  });
  if (mTitle) mTitle.textContent = tr('chapter.' + current);
  placeWidgets();
  onLang.forEach(function (f) { try { f(); } catch (e) {} });
  if (persist) LS.set('fgc-lang', lang);
  renderChart();
  if (dg.el) drawGauge();
  if (glossaryInput) runGlossarySearch();
  if (rangeEls.input) drawRange();
}

// ---------- pick up where you left off (this browser only) ----------
function resumeHeads(id) {
  var box = document.querySelector('#' + id + ' > .l-' + lang);
  if (!box) return [];
  return Array.prototype.filter.call(box.querySelectorAll('h3'), function (h) { return !h.closest('.widget, .toc, details, [hidden]'); });
}
var resumeTimer = null;
function saveSpot() {
  if (!current || reader.getBoundingClientRect().top > window.innerHeight * 0.5) return;   // still on the cover
  var spot = { c: current, h: -1, ch: null };
  if (current === 'roster' && roster.open) spot.ch = roster.open;
  else resumeHeads(current).forEach(function (h, i) { if (h.getBoundingClientRect().top < 140) spot.h = i; });
  LS.set('fgc-last-spot', spot);
}
window.addEventListener('scroll', function () {
  if (resumeTimer) clearTimeout(resumeTimer);
  resumeTimer = setTimeout(function () { resumeTimer = null; saveSpot(); renderResume(); }, 400);
}, { passive: true });
function renderResume() {
  var b = document.querySelector('[data-resume]'); if (!b) return;
  var s = LS.get('fgc-last-spot');
  if (!s || ORDER.indexOf(s.c) === -1 || (s.c === 'intro' && s.h < 1)) { b.hidden = true; return; }
  var t = tr('chapter.' + s.c);
  if (s.ch && ROSTER[s.ch]) t += ' · ' + ROSTER[s.ch].name;
  else if (s.h >= 0) { var h = resumeHeads(s.c)[s.h]; if (h) t += ' · ' + h.textContent.replace(/\s+/g, ' ').trim(); }
  b.querySelector('.resume-t').textContent = t;
  b.hidden = false;
}
document.addEventListener('click', function (e) {
  if (!e.target.closest('[data-resume]')) return;
  var s = LS.get('fgc-last-spot'); if (!s) return;
  if (s.ch && ROSTER[s.ch]) { openChar(s.ch); return; }
  var h;
  show(s.c, false);
  h = resumeHeads(s.c)[s.h];
  (h || reader).scrollIntoView({ behavior: behavior, block: 'start' });
});
onLang.push(renderResume);
window.addEventListener('pagehide', saveSpot);
document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') saveSpot(); });
