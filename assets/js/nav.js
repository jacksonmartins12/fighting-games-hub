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
