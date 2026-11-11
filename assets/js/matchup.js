'use strict';
// ---------- matchup tool: my fighter vs. the opponent ----------
// Everything here is read from data/chars/<slug>.js (guide + frame data). Nothing is estimated:
// when a value is missing in the data, the screen says so.
var muApp = document.getElementById('matchup-app');
var mu = LS.get('fgc-matchup') || { me: 'ryu', opp: 'ken', sa: false };
function muHash() { return '#matchup/' + mu.me + '/' + mu.opp; }
function muSet(me, opp) {
  if (ROSTER[me]) mu.me = me;
  if (ROSTER[opp]) mu.opp = opp;
  LS.set('fgc-matchup', mu);
}
function muMissing() { return '<span class="muted">' + B('mu.no-data') + '</span>'; }
function muVal(v, suffix) { return v == null || v === '' ? muMissing() : esc(v) + (suffix && /^\d+$/.test(String(v)) ? suffix : ''); }
// Ground moves the opponent can use without being punished on block (better than -4).
function muSafeMoves(slug) {
  return (FRAMES[slug] ? FRAMES[slug].m : []).filter(function (m) {
    var b = safestBlock(m[8]);
    return b != null && b > -4 && !isAir(m[1]) && m[11] !== 'air' && m[3] !== 't';
  }).map(function (m) { return { name: m[0], num: m[1], su: m[4], blk: safestBlock(m[8]), raw: m[8], hit: m[7], m: m }; })
    .sort(function (a, b) { return b.blk - a.blk || firstInt(a.su) - firstInt(b.su); });
}
// Strikes with no on-block value in the data (not counted as safe or unsafe).
function muUnknownBlock(slug) {
  return (FRAMES[slug] ? FRAMES[slug].m : []).filter(function (m) {
    return /[nsu]/.test(m[3]) && m[8] == null && dmgVal(m[9]) > 0 && !isAir(m[1]) && m[11] !== 'air';
  });
}
function muMoveCell(t) {
  return '<b>' + esc(t.name) + '</b>' + condTag(t.m) + (t.m[12] ? ' <span class="ft-tag">' + B('mu.projectile') + '</span>' : '') +
    '<br><span class="inp muted">' + esc(t.num || '') + '</span>';
}
function muSafeTable(rows) {
  var h = '<div class="table-wrap"><table class="pf-table"><thead><tr><th>' + B('roster.move') + '</th><th>Startup</th><th>' + B('widgets.on-block') + '</th><th>' + B('widgets.on-hit') + '</th></tr></thead><tbody>';
  rows.forEach(function (t) {
    h += '<tr><td>' + muMoveCell(t) + '</td><td class="inp">' + (t.su == null ? muMissing() : esc(t.su)) + '</td><td class="inp">' + fmtCell(t.raw) + '</td><td class="inp">' + (t.hit == null ? muMissing() : fmtCell(t.hit)) + '</td></tr>';
  });
  return h + '</tbody></table></div>';
}
function muTools(c) {
  var h = '<h4>' + esc(c.name) + '</h4>';
  if (!(c.key_moves || []).length && !(c.key_normals || []).length) return h + '<p>' + muMissing() + '</p>';
  h += '<ul class="mu-keys">';
  (c.key_moves || []).forEach(function (m) {
    h += '<li><b>' + esc(m.name) + '</b> <span class="inp muted">' + esc(m.input) + '</span><br>' + BO(m.role) + '</li>';
  });
  (c.key_normals || []).forEach(function (n) {
    h += '<li><b class="inp">' + esc(n.move) + '</b> <span class="inp muted">' + (n.startup == null ? '' : esc(n.startup) + 'f · ') + B('mu.on-block-short') + ' ' + fmtAdv(n.on_block) + '</span><br>' + BO(n.role) + '</li>';
  });
  return h + '</ul>';
}
function muText(o) { return o && (o.en || o.pt) ? '<p>' + BO(o) + '</p>' : '<p>' + muMissing() + '</p>'; }
function renderMatchup() {
  if (!muApp) return;
  var list = rosterList();
  if (!ROSTER[mu.me]) mu.me = list[0].slug; if (!ROSTER[mu.opp]) mu.opp = list[1].slug;
  if (current === 'matchup') { try { history.replaceState(null, '', muHash()); } catch (e) {} }
  var opts = function (sel) { return list.map(function (c) { return '<option value="' + c.slug + '"' + (c.slug === sel ? ' selected' : '') + '>' + esc(c.name) + '</option>'; }).join(''); };
  var h = '<div class="pf-pick widget"><div class="pf-side"><img class="pf-face" src="img/fighters/' + mu.me + '.webp" alt="" width="160" height="160"><div class="field"><label for="mu-me">' + B('punish.you-play') + '</label><select id="mu-me">' + opts(mu.me) + '</select></div></div>' +
    '<span class="pf-vs" aria-hidden="true">VS</span>' +
    '<div class="pf-side"><img class="pf-face" src="img/fighters/' + mu.opp + '.webp" alt="" width="160" height="160"><div class="field"><label for="mu-opp">' + B('punish.opponent') + '</label><select id="mu-opp">' + opts(mu.opp) + '</select></div></div>' +
    '<div class="mu-bar"><button type="button" class="btn ghost" data-mu-swap>' + B('mu.swap') + '</button>' +
    '<button type="button" class="btn ghost" data-mu-copy>' + B('mu.copy-link') + '</button><span class="small muted mu-msg" role="status"></span></div></div>';
  if (!FRAMES[mu.me] || !FRAMES[mu.opp]) {
    var want = muHash();
    muApp.innerHTML = h + loadingHTML();
    Promise.all([needChar(mu.me), needChar(mu.opp)]).then(function () { if (want === muHash()) renderMatchup(); }, function () {
      if (want === muHash()) muApp.innerHTML = h + loadErrorHTML('data-mu-retry');
    });
    return;
  }
  var me = CHARS[mu.me], opp = CHARS[mu.opp], fm = FRAMES[mu.me].s || {}, fo = FRAMES[mu.opp].s || {};
  var meN = esc(me.name), oppN = esc(opp.name);

  // at a glance
  h += '<h3>' + B('mu.at-a-glance') + '</h3><div class="table-wrap"><table class="mu-stats"><thead><tr><th></th><th>' + meN + '</th><th>' + oppN + '</th></tr></thead><tbody>' +
    [['mu.health', 'health', ''], ['mu.fastest-normal', 'fastestNormal', ''], ['mu.best-reversal', 'bestReversal', ''], ['mu.forward-dash', 'fDash', 'f'], ['mu.back-dash', 'bDash', 'f']].map(function (r) {
      return '<tr><th scope="row">' + B(r[0]) + '</th><td class="inp">' + muVal(fm[r[1]], r[2]) + '</td><td class="inp">' + muVal(fo[r[1]], r[2]) + '</td></tr>';
    }).join('') + '</tbody></table></div>';

  // what to punish
  var mine = punishers(mu.me), theirs = unsafeMoves(mu.opp);
  h += '<h3>' + B('mu.punish-title', [oppN]) + '</h3><p>' + B('mu.punish-lede', [theirs.length, oppN, meN]) + '</p>' +
    '<label class="ft-toggle"><input type="checkbox" id="mu-sa"' + (mu.sa ? ' checked' : '') + '> ' + B('punish.also-show-options-that-cost-meter') + '</label>';
  if (theirs.length) {
    h += '<div class="table-wrap"><table class="pf-table"><thead><tr><th>' + B('punish.s-move', [oppN]) + '</th><th>' + B('widgets.on-block') + '</th><th>' + B('punish.your-best-normal') + '</th><th>' + B('punish.your-best-special-no-meter') + '</th>' + (mu.sa ? '<th>' + B('punish.with-meter-od-super-art') + '</th>' : '') + '</tr></thead><tbody>';
    theirs.forEach(function (t) {
      var bp = bestPunishes(mine, t.blk);
      h += '<tr><td>' + muMoveCell(t) + '</td><td class="inp">' + fmtCell(t.raw) + (String(t.raw).match(/[^\d\s+-]/) ? '<br><span class="small muted">' + B('punish.using') + t.blk + '</span>' : '') +
        '</td><td>' + punishCell(bp.normal, -t.blk) + '</td><td>' + punishCell(bp.special, -t.blk) + '</td>' + (mu.sa ? '<td>' + punishCell(bp.meter, -t.blk) + '</td>' : '') + '</tr>';
    });
    h += '</tbody></table></div>';
    h += '<p class="small muted">' + B('punish.reach-short') + '</p>';
  } else h += '<p class="muted">' + B('punish.no-unsafe-moves-found') + '</p>';
  h += '<p class="small muted">' + B('mu.punish-note') + '</p>';

  // what to respect
  var safe = muSafeMoves(mu.opp), plus = safe.filter(function (t) { return t.blk > 0; }), even = safe.filter(function (t) { return t.blk <= 0; });
  var unknown = muUnknownBlock(mu.opp);
  h += '<h3>' + B('mu.respect-title', [oppN]) + '</h3><p>' + B('mu.respect-lede', [oppN]) + '</p>' +
    '<h4>' + B('mu.plus-title', [plus.length]) + '</h4>' + (plus.length ? '<p class="small muted">' + B('mu.plus-note') + '</p>' + muSafeTable(plus) : '<p class="muted">' + B('mu.plus-none') + '</p>') +
    '<details class="ft-details"><summary><span class="ft-sum-t">' + B('mu.safe-title', [even.length]) + '</span> <span class="muted small">' + B('mu.safe-note') + '</span></summary><div class="mu-ft">' +
    (even.length ? muSafeTable(even) : '<p class="muted">' + muMissing() + '</p>') + '</div></details>';
  if (unknown.length) {
    h += '<p class="small muted">' + B('mu.unknown-block', [unknown.length, oppN]) + ' ' + unknown.map(function (m) { return esc(m[0]); }).join(', ') + '.</p>';
  }

  // anti-airs and main tools
  h += '<h3>' + B('mu.anti-air-title') + '</h3><div class="cg-two"><div><h4>' + meN + '</h4>' + muText(me.anti_air) + '</div><div><h4>' + oppN + '</h4>' + muText(opp.anti_air) + '</div></div>' +
    '<h3>' + B('mu.tools-title') + '</h3><div class="cg-two"><div>' + muTools(me) + '</div><div>' + muTools(opp) + '</div></div>';

  // counterplay from the guides
  h += '<h3>' + B('mu.vs-title', [oppN]) + '</h3>' + muText(opp.counterplay) +
    '<div class="cg-two"><div><h4>' + B('mu.their-weaknesses', [oppN]) + '</h4>' + ((opp.weaknesses || []).length ? '<ul class="cg-list minus">' + li(opp.weaknesses) + '</ul>' : '<p>' + muMissing() + '</p>') + '</div>' +
    '<div><h4>' + B('mu.their-strengths', [oppN]) + '</h4>' + ((opp.strengths || []).length ? '<ul class="cg-list plus">' + li(opp.strengths) + '</ul>' : '<p>' + muMissing() + '</p>') + '</div></div>' +
    '<h3>' + B('mu.expect-title', [oppN, meN]) + '</h3><p class="small muted">' + B('mu.expect-note', [meN]) + '</p>' + muText(me.counterplay) +
    '<div class="card"><p class="small">' + B('mu.source-note') + '</p><p><button type="button" class="linkbtn" data-char="' + mu.me + '">' + B('punish.open-s-guide', [meN]) + '</button> · <button type="button" class="linkbtn" data-char="' + mu.opp + '">' + B('punish.open-s-guide', [oppN]) + '</button></p></div>';
  muApp.innerHTML = h;
}
if (muApp) {
  muApp.addEventListener('change', function (e) {
    if (e.target.id === 'mu-me') mu.me = e.target.value;
    else if (e.target.id === 'mu-opp') mu.opp = e.target.value;
    else if (e.target.id === 'mu-sa') mu.sa = e.target.checked;
    else return;
    LS.set('fgc-matchup', mu); renderMatchup();
  });
  muApp.addEventListener('click', function (e) {
    if (e.target.closest('[data-mu-retry]')) { renderMatchup(); return; }
    if (e.target.closest('[data-mu-swap]')) { muSet(mu.opp, mu.me); renderMatchup(); return; }
    if (e.target.closest('[data-mu-copy]')) {
      var url = location.href.split('#')[0] + muHash(), msg = muApp.querySelector('.mu-msg');
      var done = function () { msg.innerHTML = B('mu.link-copied'); }, fail = function () { msg.textContent = url; };
      try { navigator.clipboard.writeText(url).then(done, fail); } catch (er) { fail(); }
    }
  });
}
