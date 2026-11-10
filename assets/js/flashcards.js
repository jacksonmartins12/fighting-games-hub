'use strict';
// ---------- punish flashcards ----------
// Cards come from the same data and rules as the Punish Finder. Each card sits in a box (1 = repeat often,
// 3 = known); wrong answers go back to box 1. Boxes are saved in this browser only (localStorage "fgc-flash").
var flashApp = document.getElementById('flash-app');
var flash = LS.get('fgc-flash') || {};
if (!flash.me) flash.me = (LS.get('fgc-punish') || {}).me || 'ryu';
if (!flash.opp) flash.opp = (LS.get('fgc-punish') || {}).opp || 'ken';
if (!flash.box) flash.box = {};
var flashCard = null, flashShown = false, flashSession = { right: 0, wrong: 0 };
function flashKey(opp, t) { return flash.me + '|' + opp + '|' + t.name + '|' + (t.num || ''); }
function flashSave() { LS.set('fgc-flash', flash); }
function flashDeck(opp) { return unsafeMoves(opp).map(function (t) { return { opp: opp, t: t, key: flashKey(opp, t) }; }); }
function flashPick() {   // lower boxes come up more often; never the same card twice in a row
  var opp = flash.opp === '*' ? flashCard.opp : flash.opp;
  var deck = flashDeck(opp); if (!deck.length) return null;
  var pool = deck.filter(function (c) { return !flashCard || !flashCard.key || c.key !== flashCard.key; });
  if (!pool.length) pool = deck;
  var weights = pool.map(function (c) { return [8, 6, 3, 1][flash.box[c.key] || 0]; });
  var sum = weights.reduce(function (a, b) { return a + b; }, 0), r = Math.random() * sum;
  for (var i = 0; i < pool.length; i++) { r -= weights[i]; if (r <= 0) return pool[i]; }
  return pool[pool.length - 1];
}
function flashNext() {
  flashShown = false;
  if (flash.opp === '*') {   // random opponent: choose one, load it, then pick a card
    var others = rosterList(), o = others[Math.floor(Math.random() * others.length)].slug;
    flashCard = { opp: o };
    renderFlash();
    needChar(o).then(function () { if (flash.opp === '*' && flashCard && flashCard.opp === o && !flashCard.key) { flashCard = flashPick() || { opp: o, empty: true }; renderFlash(); } }, function () { flashApp.querySelector('.flash-card').innerHTML = loadErrorHTML('data-flash-retry'); });
    return;
  }
  flashCard = flashPick();
  renderFlash();
}
function renderFlash() {
  if (!flashApp) return;
  var list = rosterList();
  if (!ROSTER[flash.me]) flash.me = list[0].slug;
  if (flash.opp !== '*' && !ROSTER[flash.opp]) flash.opp = list[1].slug;
  var opts = function (sel, any) { return (any ? '<option value="*" data-i18n-text="flash.any"' + (sel === '*' ? ' selected' : '') + '>' + esc(tr('flash.any')) + '</option>' : '') + list.map(function (c) { return '<option value="' + c.slug + '"' + (c.slug === sel ? ' selected' : '') + '>' + esc(c.name) + '</option>'; }).join(''); };
  var oppFace = flash.opp === '*' ? (flashCard && flashCard.opp) || flash.me : flash.opp;
  var h = '<div class="pf-pick widget"><div class="pf-side"><img class="pf-face" src="img/fighters/' + flash.me + '.webp" alt="" width="160" height="160"><div class="field"><label for="fl-me">' + B('punish.you-play') + '</label><select id="fl-me">' + opts(flash.me) + '</select></div></div>' +
    '<span class="pf-vs" aria-hidden="true">VS</span>' +
    '<div class="pf-side"><img class="pf-face" src="img/fighters/' + oppFace + '.webp" alt="" width="160" height="160"><div class="field"><label for="fl-opp">' + B('punish.opponent') + '</label><select id="fl-opp">' + opts(flash.opp, true) + '</select></div></div></div>';
  var need = [flash.me].concat(flash.opp === '*' ? [] : [flash.opp]).filter(function (s) { return !FRAMES[s]; });
  if (need.length) {
    var want = flash.me + '/' + flash.opp;
    flashApp.innerHTML = h + '<div class="flash-card">' + loadingHTML() + '</div>';
    Promise.all(need.map(needChar)).then(function () { if (want === flash.me + '/' + flash.opp) { flashCard = null; startFlash(); } }, function () {
      if (want === flash.me + '/' + flash.opp) flashApp.querySelector('.flash-card').innerHTML = loadErrorHTML('data-flash-retry');
    });
    return;
  }
  h += '<div class="flash-card">';
  if (!flashCard || flashCard.empty || !flashCard.key) {
    h += flashCard && !flashCard.empty && !flashCard.key ? loadingHTML() : '<p class="muted">' + B('punish.no-unsafe-moves-found') + '</p>' + (flash.opp === '*' ? '<p><button type="button" class="btn" data-flash-skip>' + B('flash.next') + '</button></p>' : '');
  } else {
    var t = flashCard.t, oppN = esc(ROSTER[flashCard.opp].name), meN = esc(ROSTER[flash.me].name), box = flash.box[flashCard.key] || 0;
    h += '<p class="flash-meta">' + B('flash.box.' + box) + '</p>' +
      '<p class="flash-q">' + B('flash.question', [oppN, '<b>' + esc(t.name) + '</b>' + (t.num ? ' <span class="inp muted">' + esc(t.num) + '</span>' : ''), fmtCell(t.raw)]) + condTag(t.m) + (t.m[12] ? ' <span class="ft-tag">' + B('punish.projectile-punish-only-up-close') + '</span>' : '') + '</p>' +
      '<p class="flash-ask">' + B('flash.ask', [meN]) + '</p>';
    if (!flashShown) h += '<p><button type="button" class="btn" data-flash-show>' + B('flash.show') + '</button></p>';
    else {
      var bp = bestPunishes(punishers(flash.me), t.blk);
      h += '<div class="flash-a"><p class="small muted">' + B('flash.window', [-t.blk]) + '</p><div class="flash-grid">' +
        '<div><span class="flabel">' + B('punish.your-best-normal') + '</span>' + punishCell(bp.normal) + '</div>' +
        '<div><span class="flabel">' + B('punish.your-best-special-no-meter') + '</span>' + punishCell(bp.special) + '</div>' +
        '<div><span class="flabel">' + B('punish.with-meter-od-super-art') + '</span>' + punishCell(bp.meter) + '</div></div>' +
        '<div class="tr-actions"><button type="button" class="btn danger" data-flash-grade="0">' + B('flash.wrong') + '</button><button type="button" class="btn" data-flash-grade="1">' + B('flash.right') + '</button></div></div>';
    }
  }
  h += '</div>';
  if (flash.opp !== '*') {
    var deck = flashDeck(flash.opp), known = deck.filter(function (c) { return flash.box[c.key] === 3; }).length, seen = deck.filter(function (c) { return flash.box[c.key]; }).length;
    h += '<p class="small muted flash-stats">' + B('flash.deck', [deck.length, seen, known]) + ' · ' + B('flash.session', [flashSession.right, flashSession.wrong]) +
      (seen ? ' · <span class="confirm"><button type="button" class="linkbtn" data-flash-reset>' + B('flash.reset') + '</button></span>' : '') + '</p>';
  } else h += '<p class="small muted flash-stats">' + B('flash.session', [flashSession.right, flashSession.wrong]) + '</p>';
  h += '<p class="small muted">' + B('flash.note') + '</p>';
  flashApp.innerHTML = h;
}
function startFlash() {
  if (!flashApp) return;
  var valid = flashCard && flashCard.key && flashCard.key.indexOf(flash.me + '|') === 0 && (flash.opp === '*' || flashCard.opp === flash.opp);
  if (!valid) { flashCard = null; flashShown = false; }
  var ready = FRAMES[flash.me] && (flash.opp === '*' || FRAMES[flash.opp]);
  if (!ready || valid) { renderFlash(); return; }   // when fighters are missing, renderFlash loads them and calls back
  flashNext();
}
if (flashApp) {
  onShow.flashcards = startFlash;
  flashApp.addEventListener('change', function (e) {
    if (e.target.id === 'fl-me') flash.me = e.target.value; else if (e.target.id === 'fl-opp') flash.opp = e.target.value; else return;
    flashSave(); flashCard = null; flashSession = { right: 0, wrong: 0 }; startFlash();
  });
  flashApp.addEventListener('click', function (e) {
    if (e.target.closest('[data-flash-retry]')) { flashCard = null; startFlash(); return; }
    if (e.target.closest('[data-flash-skip]')) { flashNext(); return; }
    if (e.target.closest('[data-flash-show]')) { flashShown = true; renderFlash(); var g = flashApp.querySelector('[data-flash-grade="1"]'); if (g) g.focus(); return; }
    var gr = e.target.closest('[data-flash-grade]');
    if (gr && flashCard && flashCard.key) {
      var ok = gr.getAttribute('data-flash-grade') === '1', b = flash.box[flashCard.key] || 0;
      flash.box[flashCard.key] = ok ? Math.min(3, Math.max(1, b) + 1) : 1;
      flashSession[ok ? 'right' : 'wrong']++; flashSave(); flashNext();
      var s = flashApp.querySelector('[data-flash-show]'); if (s) s.focus();
      return;
    }
    var rs = e.target.closest('[data-flash-reset]');
    if (rs) { rs.parentNode.innerHTML = B('flash.reset-confirm') + ' <button type="button" class="linkbtn" data-flash-reset-yes>' + B('plan.yes') + '</button> <button type="button" class="linkbtn" data-flash-reset-no>' + B('plan.no') + '</button>'; return; }
    if (e.target.closest('[data-flash-reset-yes]')) {
      Object.keys(flash.box).forEach(function (k) { if (k.indexOf(flash.me + '|' + flash.opp + '|') === 0) delete flash.box[k]; });
      flashSave(); flashSession = { right: 0, wrong: 0 }; flashCard = null; startFlash(); return;
    }
    if (e.target.closest('[data-flash-reset-no]')) renderFlash();
  });
}
