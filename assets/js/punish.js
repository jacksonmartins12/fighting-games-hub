'use strict';
// ---------- punish finder ----------
var punishApp = document.getElementById('punish-app');
var pf = LS.get('fgc-punish') || { me: 'ryu', opp: 'ken', sa: false };
function punishers(slug) {
  return (FRAMES[slug] ? FRAMES[slug].m : []).filter(function (m) {
    var num = String(m[1] || '');
    // only moves you can always use: no Shin Akuma / low-health / air-only / counter / stock-or-state variants, and they must deal damage
    return /[nsut]/.test(m[3]) && !m[11] && !isAir(num) && !/[>~]|during|after|\(hold|hold\)/i.test(num) && suEff(m[4]) != null && suEff(m[4]) > 0 && dmgVal(m[9]) > 0;
  }).filter(function (m) { return !/critical art|\(CA\)/i.test(m[0] + ' ' + (m[1] || '')); }).map(function (m) { return { name: m[0], num: m[1], type: m[3], su: suEff(m[4]), dmg: dmgVal(m[9]), xx: String(m[10] || '') }; });
}
// Moves of a fighter that are -4 or worse on block (ground moves; uses the least punishable version listed).
function unsafeMoves(slug) {
  return (FRAMES[slug] ? FRAMES[slug].m : []).filter(function (m) {
    var b = safestBlock(m[8]); return b != null && b <= -4 && !isAir(m[1]) && m[11] !== 'air' && m[3] !== 't' && !/critical art|\(CA\)/i.test(m[0] + ' ' + (m[1] || ''));
  }).map(function (m) { return { name: m[0], num: m[1], type: m[3], blk: safestBlock(m[8]), raw: m[8], m: m }; })
    .sort(function (a, b) { return a.blk - b.blk; });
}
function punishCell(m) { return m ? '<b>' + esc(m.name) + '</b><br><span class="inp muted">' + esc(m.num || '') + ' · ' + m.su + 'f · ' + m.dmg + '</span>' : '<span class="muted">' + B('punish.nothing-fast-enough') + '</span>'; }
function isODMove(m) { return /^OD\b/.test(m.name) || /PP|KK/.test(String(m.num || '')); }
function bestByDamage(arr) { return arr.slice().sort(function (a, b) { return b.dmg - a.dmg || a.su - b.su; })[0]; }
// Best answers among `mine` (from punishers()) to a move that is `blk` on block.
function bestPunishes(mine, blk) {
  var w = -blk;
  var ok = mine.filter(function (m) { return m.su <= w; });
  var norms = ok.filter(function (m) { return m.type === 'n'; });
  var comboable = norms.filter(function (m) { return /sp|tc/.test(m.xx); });
  var bn = bestByDamage(comboable.length ? comboable : norms);
  var bs = bestByDamage(ok.filter(function (m) { return m.type === 's' && !isODMove(m); }));
  var bm = bestByDamage(ok.filter(function (m) { return m.type === 'u' || (m.type === 's' && isODMove(m)); }));
  return { normal: bn, special: bs, meter: bm };
}
function renderPunish() {
  if (!punishApp) return;
  var list = rosterList();
  if (!ROSTER[pf.me]) pf.me = list[0].slug; if (!ROSTER[pf.opp]) pf.opp = list[1].slug;
  var opts = function (sel) { return list.map(function (c) { return '<option value="' + c.slug + '"' + (c.slug === sel ? ' selected' : '') + '>' + esc(c.name) + '</option>'; }).join(''); };
  var h = '<div class="pf-pick widget"><div class="pf-side"><img class="pf-face" src="img/fighters/' + pf.me + '.webp" alt="" width="160" height="160"><div class="field"><label for="pf-me">' + B('punish.you-play') + '</label><select id="pf-me">' + opts(pf.me) + '</select></div></div>' +
    '<span class="pf-vs" aria-hidden="true">VS</span>' +
    '<div class="pf-side"><img class="pf-face" src="img/fighters/' + pf.opp + '.webp" alt="" width="160" height="160"><div class="field"><label for="pf-opp">' + B('punish.opponent') + '</label><select id="pf-opp">' + opts(pf.opp) + '</select></div></div>' +
    '<label class="ft-toggle pf-sa"><input type="checkbox" id="pf-sa"' + (pf.sa ? ' checked' : '') + '> ' + B('punish.also-show-options-that-cost-meter') + '</label></div>';
  if (!FRAMES[pf.me] || !FRAMES[pf.opp]) {   // fetch the two fighters, then draw the table
    var want = pf.me + '/' + pf.opp;
    punishApp.innerHTML = h + loadingHTML();
    Promise.all([needChar(pf.me), needChar(pf.opp)]).then(function () { if (want === pf.me + '/' + pf.opp) renderPunish(); }, function () {
      if (want === pf.me + '/' + pf.opp) punishApp.innerHTML = h + loadErrorHTML('data-pf-retry');
    });
    return;
  }
  var mine = punishers(pf.me);
  var theirs = unsafeMoves(pf.opp);
  var me = ROSTER[pf.me].name, opp = ROSTER[pf.opp].name;
  h += '<p class="pf-summary">' + B('punish.moves-of-are-4-or-worse', [theirs.length, esc(opp), esc(me), esc((FRAMES[pf.me].s || {}).fastestNormal || '—')]) + '</p>';
  h += '<div class="table-wrap"><table class="pf-table"><thead><tr><th>' + B('punish.s-move', [esc(opp)]) + '</th><th>' + B('widgets.on-block') + '</th><th>' + B('punish.your-best-normal') + '</th><th>' + B('punish.your-best-special-no-meter') + '</th>' + (pf.sa ? '<th>' + B('punish.with-meter-od-super-art') + '</th>' : '') + '</tr></thead><tbody>';
  theirs.forEach(function (t) {
    var bp = bestPunishes(mine, t.blk), bn = bp.normal, bs = bp.special, bm = bp.meter;
    h += '<tr><td><b>' + esc(t.name) + '</b>' + condTag(t.m) + (t.m[12] ? ' <span class="ft-tag">' + B('punish.projectile-punish-only-up-close') + '</span>' : '') + '<br><span class="inp muted">' + esc(t.num || '') + '</span></td><td class="inp">' + fmtCell(t.raw) + (String(t.raw).match(/[^\d\s+-]/) ? '<br><span class="small muted">' + B('punish.using') + t.blk + '</span>' : '') +
      '</td><td>' + punishCell(bn) + '</td><td>' + punishCell(bs) + '</td>' + (pf.sa ? '<td>' + punishCell(bm) + '</td>' : '') + '</tr>';
  });
  if (!theirs.length) h += '<tr><td colspan="5" class="muted">' + B('punish.no-unsafe-moves-found') + '</td></tr>';
  h += '</tbody></table></div><p class="small muted">' + B('punish.each-cell-shows-the-move-its') +
    ' <button type="button" class="linkbtn" data-char="' + pf.opp + '">' + B('punish.open-s-guide', [esc(opp)]) + '</button></p>';
  punishApp.innerHTML = h;
}
if (punishApp) {
  punishApp.addEventListener('click', function (e) { if (e.target.closest('[data-pf-retry]')) renderPunish(); });
  punishApp.addEventListener('change', function (e) {
    if (e.target.id === 'pf-me') pf.me = e.target.value;
    else if (e.target.id === 'pf-opp') pf.opp = e.target.value;
    else if (e.target.id === 'pf-sa') pf.sa = e.target.checked;
    else return;
    LS.set('fgc-punish', pf); renderPunish();
  });
}
