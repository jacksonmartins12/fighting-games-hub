'use strict';
// ---------- global clicks ----------
document.addEventListener('click', function (e) {
  var ls = e.target.closest('[data-lang-set]');
  if (ls) { setLang(ls.getAttribute('data-lang-set'), true); return; }
  var go = e.target.closest('[data-go]');
  if (go) { e.preventDefault(); show(go.getAttribute('data-go'), true); return; }
  var a = e.target.closest('a[href^="#"]');
  if (a) {
    var target = resolveTarget(a.getAttribute('href').slice(1));
    if (!target) return;
    e.preventDefault();
    var sec = target.tagName === 'SECTION' ? target : target.closest('section');
    if (sec) { show(sec.id, target === sec); if (target !== sec) target.scrollIntoView({ behavior: behavior, block: 'start' }); }
  }
});
openBtn.addEventListener('click', openMenu);
document.getElementById('close-menu').addEventListener('click', closeMenu);
scrim.addEventListener('click', closeMenu);
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

// ---------- boot ----------
var storedLang = LS.get('fgc-lang');
var navPt = (navigator.language || '').toLowerCase().indexOf('pt') === 0;
setupChecklists();
renderAllQuizzes();
renderRoster();
drawRange();
drawGauge();
drawMeaty();
renderTracker();
setLang(storedLang || (navPt ? 'pt' : 'en'), false);
if (glossaryInput) runGlossarySearch();
onStore(function () { renderTracker(); syncChecklists(); renderAllQuizzes(); });

function routeHash(initial) {
  var hash = (location.hash || '').slice(1);
  if (/^char-/.test(hash) && ROSTER[hash.slice(5)]) {
    openChar(hash.slice(5), false);
    setTimeout(function () { reader.scrollIntoView({ block: 'start' }); }, 0);
    return;
  }
  var target = resolveTarget(hash);
  if (target) {
    var sec = target.tagName === 'SECTION' ? target : target.closest('section');
    if (sec) { show(sec.id, false, true); setTimeout(function () { (target !== sec ? target : reader).scrollIntoView({ block: 'start' }); }, 0); }
    return;
  }
  if (initial) {
    var last = LS.get('fgc-last-chapter');
    if (last && ORDER.indexOf(last) !== -1 && last !== 'intro') show(last, false, true);
  }
}
routeHash(true);
window.addEventListener('hashchange', function () { routeHash(false); });
initCloud();
