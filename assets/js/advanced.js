'use strict';
// ---------- advanced tools: okizeme calculator, string checker, break-even calculator ----------
// Frame conventions match the Mechanics chapter: after a knockdown of KD +N (or any situation of +N),
// you act on frame 1 and the opponent on frame N+1. A move with startup S pressed on frame p is active
// from frame p+S-1. Hitting on active frame k improves its on-block and on-hit numbers by k-1.
var adv = LS.get('fgc-adv') || {};
function advSave() { LS.set('fgc-adv', adv); }
function advDefault(key, val) { if (adv[key] == null) adv[key] = val; }
advDefault('okiChar', 'ryu'); advDefault('okiDash', 0); advDefault('okiWalk', 0); advDefault('okiRev', '');
advDefault('strChar', 'ryu'); advDefault('strOpp', 'ken'); advDefault('strDr', false); advDefault('strBo', false); advDefault('strExtra', 0);
advDefault('beGain', 1400); advDefault('beLoss', 3000); advDefault('beP', 60);

function advNum(v) {   // a plain integer, or null when the data has a range, several values or nothing
  if (typeof v === 'number') return v;
  if (v == null) return null;
  return /^\s*[-+]?\d+\s*$/.test(String(v)) ? +v : null;
}
function advActive(v) {   // first block of active frames; flags multi-hit moves
  if (typeof v === 'number') return { n: v, multi: false };
  var s = String(v == null ? '' : v), m = s.match(/^\d+/);
  return m ? { n: +m[0], multi: !/^\d+$/.test(s) } : null;
}
// Ground strikes that start from neutral: no air, follow-up, held, stance or conditional versions, no projectiles.
function advStrikes(slug) {
  return (FRAMES[slug] ? FRAMES[slug].m : []).filter(function (m) {
    var num = String(m[1] || '');
    return /[ns]/.test(m[3]) && !m[11] && !m[12] && !isAir(num) && !/[>~]|during|after|\(hold|hold\)|charged|lvl|\(air\)/i.test(num + ' ' + m[0]) &&
      suEff(m[4]) != null && suEff(m[4]) > 0 && advActive(m[5]);
  });
}
function advCharOpts(sel) { return rosterList().map(function (c) { return '<option value="' + c.slug + '"' + (c.slug === sel ? ' selected' : '') + '>' + esc(c.name) + '</option>'; }).join(''); }
function advNeed(slugs, box, done) {   // load fighters, show loading / error inside `box`
  var missing = slugs.filter(function (s) { return !FRAMES[s]; });
  if (!missing.length) return true;
  box.innerHTML = loadingHTML();
  Promise.all(missing.map(needChar)).then(done, function () { box.innerHTML = loadErrorHTML('data-adv-retry'); });
  return false;
}

// ----- okizeme calculator -----
function okiKnockdowns(slug) {
  var out = [];
  (FRAMES[slug] ? FRAMES[slug].m : []).forEach(function (m, i) {
    var hit = String(m[7] == null ? '' : m[7]), kd = hit.match(/\b(H?KD)\s*\+([\d*()~]+)/);
    if (!kd || /crumple|wall/i.test(hit)) return;
    var nums = kd[2].match(/\d+/g) || [];
    nums.forEach(function (n, j) {
      if (nums.indexOf(n) !== j) return;
      out.push({ id: i + ':' + n, m: m, n: +n, hard: kd[1] === 'HKD', raw: hit, alt: nums.length > 1 });
    });
  });
  return out;
}
function okiMeaty(N, spent, S, A) {
  var pmin = spent + 1, plo = N + 3 - S - A, phi = N + 2 - S;
  if (phi < pmin) return null;
  var p = Math.max(pmin, plo);
  return { delay: p - pmin, k: N + 3 - S - p };
}
widgets['adv-oki'] = el('<div class="widget adv-tool" data-group="advanced"></div>');
function renderOki() {
  var w = widgets['adv-oki'];
  if (!ROSTER[adv.okiChar]) adv.okiChar = 'ryu';
  var slug = adv.okiChar;
  w.innerHTML = '<div class="tr-grid"><div class="field"><label for="oki-char">' + B('punish.you-play') + '</label><select id="oki-char">' + advCharOpts(slug) + '</select></div>' +
    '<div class="field wide"><label for="oki-kd">' + B('adv.oki.knockdown') + '</label><select id="oki-kd"></select></div>' +
    '<div class="field"><label for="oki-dash">' + B('adv.oki.dashes') + '</label><select id="oki-dash">' +
    [0, 1, 2].map(function (n) { return '<option value="' + n + '"' + (+adv.okiDash === n ? ' selected' : '') + '>' + esc(tr('adv.oki.dash.' + n)) + '</option>'; }).join('') + '</select></div>' +
    '<div class="field"><label for="oki-walk">' + B('adv.oki.walk') + '</label><input id="oki-walk" type="number" inputmode="numeric" min="0" max="120" step="1" value="' + (+adv.okiWalk || 0) + '"><span class="hint">' + B('adv.oki.walk-hint') + '</span></div>' +
    '<div class="field"><label for="oki-rev">' + B('adv.oki.rev') + '</label><input id="oki-rev" type="number" inputmode="numeric" min="1" max="60" step="1" value="' + esc(String(adv.okiRev == null ? '' : adv.okiRev)) + '"><span class="hint">' + B('adv.oki.rev-hint') + '</span></div></div>' +
    '<div class="adv-out" aria-live="polite"></div>';
  var out = w.querySelector('.adv-out');
  if (!advNeed([slug], out, renderOki)) return;
  var kds = okiKnockdowns(slug), sel = w.querySelector('#oki-kd');
  if (!kds.some(function (k) { return k.id === adv.okiKd; })) adv.okiKd = (kds.filter(function (k) { return /2HK$|^Crouch HK$/.test(k.m[1] + '') || k.m[0] === 'Crouch HK'; })[0] || kds[0] || {}).id;
  sel.innerHTML = kds.map(function (k) {
    return '<option value="' + k.id + '"' + (k.id === adv.okiKd ? ' selected' : '') + '>' + esc(k.m[0] + (k.m[1] ? ' (' + k.m[1] + ')' : '') + ' · ' + (k.hard ? 'HKD' : 'KD') + ' +' + k.n + (k.alt ? ' · ' + k.raw : '')) + '</option>';
  }).join('');
  okiResults();
}
function okiResults() {
  var w = widgets['adv-oki'], out = w.querySelector('.adv-out'), slug = adv.okiChar;
  if (!FRAMES[slug]) return;
  var kd = okiKnockdowns(slug).filter(function (k) { return k.id === adv.okiKd; })[0];
  if (!kd) { out.innerHTML = '<p class="muted">' + B('mu.no-data') + '</p>'; return; }
  var st = FRAMES[slug].s || {}, fd = advNum(st.fDash), dashes = +adv.okiDash || 0, walk = Math.max(0, Math.min(120, Math.round(+adv.okiWalk || 0)));
  if (dashes && fd == null) { out.innerHTML = '<p class="muted">' + B('adv.oki.no-dash-data') + '</p>'; return; }
  var spent = dashes * (fd || 0) + walk, left = kd.n - spent;
  var h = '<p class="adv-sum">' + B('adv.oki.summary', [kd.n, kd.n + 1, spent, Math.max(0, left)]) + '</p>';
  if (kd.hard) h += '<p class="small muted">' + B('adv.oki.hard') + '</p>';
  if (kd.alt) h += '<p class="small muted">' + B('adv.oki.alt', [esc(kd.raw)]) + '</p>';
  if (left < 0) { out.innerHTML = h + '<p class="tr-empty">' + B('adv.oki.too-much') + '</p>'; return; }
  var rows = [], tooSlow = 0;
  advStrikes(slug).forEach(function (m) {
    var S = suEff(m[4]), A = advActive(m[5]), r = okiMeaty(kd.n, spent, S, A.n);
    if (!r) { tooSlow++; return; }
    var blk = advNum(m[8]), hit = advNum(m[7]);
    var rec = advNum(m[6]);   // safe meaty: frames you stay stuck = active frames left after the hit + recovery
    rows.push({ m: m, S: S, A: A, r: r, blk: blk == null ? null : blk + r.k - 1, hit: hit == null ? null : hit + r.k - 1,
      stuck: rec == null || A.multi ? null : A.n - r.k + rec });
  });
  rows.sort(function (a, b) { return a.r.delay - b.r.delay || (b.blk == null ? -99 : b.blk) - (a.blk == null ? -99 : a.blk); });
  if (!rows.length) { out.innerHTML = h + '<p class="tr-empty">' + B('adv.oki.none') + '</p>'; return; }
  var rev = Math.round(+adv.okiRev);
  if (!(adv.okiRev !== '' && rev >= 1 && rev <= 60)) rev = null;
  if (rev) {
    var known = rows.filter(function (x) { return x.stuck != null; });
    h += '<p class="adv-sum">' + B('adv.oki.safe-sum', [known.filter(function (x) { return x.stuck + 1 <= rev; }).length, known.length, rev]) + '</p>';
  }
  h += '<div class="table-wrap"><table class="pf-table adv-table"><thead><tr><th>' + B('roster.move') + '</th><th>Startup</th><th>' + B('adv.oki.press') + '</th><th>' + B('adv.oki.hits-on') + '</th><th>' + B('widgets.on-block') + '</th><th>' + B('widgets.on-hit') + '</th><th>' + B('adv.oki.stuck') + '</th></tr></thead><tbody>';
  rows.forEach(function (x) {
    h += '<tr' + (x.r.delay === 0 ? ' class="adv-easy"' : '') + '><td><b>' + esc(x.m[0]) + '</b><br><span class="inp muted">' + esc(x.m[1] || '') + '</span></td><td class="inp">' + x.S + 'f</td>' +
      '<td>' + (x.r.delay === 0 ? B('adv.oki.asap') : B('adv.oki.wait', [x.r.delay])) + '</td>' +
      '<td class="inp">' + B('adv.oki.active-of', [x.r.k, x.A.n]) + (x.A.multi ? '<br><span class="small muted">' + B('adv.oki.multi') + '</span>' : '') + '</td>' +
      '<td class="inp">' + (x.blk == null ? '<span class="muted">' + B('mu.no-data') + '</span>' : fmtAdv(x.blk)) + '</td><td class="inp">' + (x.hit == null ? fmtCell(x.m[7]) : fmtAdv(x.hit)) + '</td>' +
      '<td class="inp">' + (x.stuck == null ? '<span class="muted">' + B('mu.no-data') + '</span>' : x.stuck + 'f' +
        (rev ? '<br><span class="small ' + (x.stuck + 1 <= rev ? 'adv-ok">' + B('adv.oki.safe', [rev]) : 'adv-bad">' + B('adv.oki.unsafe', [rev])) + '</span>' : '')) + '</td></tr>';
  });
  h += '</tbody></table></div>';
  if (tooSlow) h += '<p class="small muted">' + B('adv.oki.too-slow', [tooSlow]) + '</p>';
  h += '<p class="small muted">' + B('adv.oki.note') + '</p>';
  out.innerHTML = h;
}
widgets['adv-oki'].addEventListener('change', function (e) {
  var id = e.target.id;
  if (id === 'oki-char') { adv.okiChar = e.target.value; adv.okiKd = null; advSave(); renderOki(); return; }
  if (id === 'oki-kd') adv.okiKd = e.target.value; else if (id === 'oki-dash') adv.okiDash = +e.target.value; else return;
  advSave(); okiResults();
});
widgets['adv-oki'].addEventListener('input', function (e) { if (e.target.id === 'oki-walk') adv.okiWalk = e.target.value; else if (e.target.id === 'oki-rev') adv.okiRev = e.target.value; else return; advSave(); okiResults(); });

// ----- string checker -----
widgets['adv-string'] = el('<div class="widget adv-tool" data-group="advanced"></div>');
function strFirst(slug) {   // moves that can start a string: ground strikes with a usable on-block value
  return advStrikes(slug).filter(function (m) { return firstInt(m[8]) != null; });
}
function renderString() {
  var w = widgets['adv-string'];
  if (!ROSTER[adv.strChar]) adv.strChar = 'ryu'; if (!ROSTER[adv.strOpp]) adv.strOpp = 'ken';
  w.innerHTML = '<div class="tr-grid"><div class="field"><label for="str-char">' + B('punish.you-play') + '</label><select id="str-char">' + advCharOpts(adv.strChar) + '</select></div>' +
    '<div class="field"><label for="str-opp">' + B('punish.opponent') + '</label><select id="str-opp">' + advCharOpts(adv.strOpp) + '</select></div>' +
    '<div class="field wide"><label for="str-a">' + B('adv.str.first') + '</label><select id="str-a"></select></div>' +
    '<div class="field"><label for="str-extra">' + B('adv.str.extra') + '</label><input id="str-extra" type="number" inputmode="numeric" min="0" max="10" step="1" value="' + (+adv.strExtra || 0) + '"><span class="hint">' + B('adv.str.extra-hint') + '</span></div>' +
    '<div class="field adv-checks"><label class="ft-toggle"><input type="checkbox" id="str-dr"' + (adv.strDr ? ' checked' : '') + '> ' + B('adv.str.dr') + '</label>' +
    '<label class="ft-toggle"><input type="checkbox" id="str-bo"' + (adv.strBo ? ' checked' : '') + '> ' + B('adv.str.bo') + '</label></div></div>' +
    '<div class="adv-out" aria-live="polite"></div>';
  var out = w.querySelector('.adv-out');
  if (!advNeed([adv.strChar, adv.strOpp], out, renderString)) return;
  var list = strFirst(adv.strChar), sel = w.querySelector('#str-a');
  if (!list.some(function (m) { return m[0] === adv.strA; })) adv.strA = (list.filter(function (m) { return m[0] === 'Stand MP'; })[0] || list[0] || [])[0];
  sel.innerHTML = list.map(function (m) { return '<option value="' + esc(m[0]) + '"' + (m[0] === adv.strA ? ' selected' : '') + '>' + esc(m[0] + ' (' + (m[1] || '') + ') · ' + String(m[8])) + '</option>'; }).join('');
  stringResults();
}
function stringResults() {
  var w = widgets['adv-string'], out = w.querySelector('.adv-out');
  if (!FRAMES[adv.strChar] || !FRAMES[adv.strOpp]) return;
  var A = strFirst(adv.strChar).filter(function (m) { return m[0] === adv.strA; })[0];
  if (!A) { out.innerHTML = '<p class="muted">' + B('mu.no-data') + '</p>'; return; }
  var base = firstInt(A[8]), extra = Math.max(0, Math.min(10, Math.round(+adv.strExtra || 0)));
  var a = base + (adv.strDr ? 4 : 0) + (adv.strBo ? 4 : 0) + extra;
  var F = firstInt((FRAMES[adv.strOpp].s || {}).fastestNormal), oppN = esc(ROSTER[adv.strOpp].name);
  var h = '<p class="adv-sum">' + B('adv.str.summary', [esc(A[0]), fmtAdv(a), oppN, F == null ? '?' : F]) + '</p>';
  if (String(A[8]).replace(/^[-+]?\d+/, '')) h += '<p class="small muted">' + B('adv.str.first-value', [esc(String(A[8])), base]) + '</p>';
  var groups = { 'true': [], trap: [], trade: [], hole: [] };
  advStrikes(adv.strChar).forEach(function (m) {
    var S = suEff(m[4]), gap = S - a, g;
    if (gap <= 0) g = 'true'; else if (F == null || gap < F) g = 'trap'; else if (gap === F) g = 'trade'; else g = 'hole';
    groups[g].push({ m: m, S: S, gap: gap });
  });
  ['trap', 'true', 'trade', 'hole'].forEach(function (g) {
    var rows = groups[g].sort(function (x, y) { return x.gap - y.gap || x.S - y.S; });
    h += '<h4 class="adv-g adv-g-' + g + '">' + B('adv.str.group.' + g, [rows.length]) + '</h4><p class="small muted">' + B('adv.str.why.' + g, [oppN, F == null ? '?' : F]) + '</p>';
    if (!rows.length) return;
    h += '<details class="ft-details adv-det"' + (g === 'trap' ? ' open' : '') + '><summary><span class="ft-sum-t">' + B('adv.str.show', [rows.length]) + '</span></summary><div class="mu-ft"><div class="table-wrap"><table class="pf-table adv-table"><thead><tr><th>' + B('adv.str.next') + '</th><th>Startup</th><th>' + B('adv.str.gap') + '</th><th>' + B('adv.str.ends') + '</th></tr></thead><tbody>';
    rows.forEach(function (x) {
      h += '<tr><td><b>' + esc(x.m[0]) + '</b><br><span class="inp muted">' + esc(x.m[1] || '') + '</span></td><td class="inp">' + x.S + 'f</td><td class="inp">' + (x.gap <= 0 ? '0' : x.gap) + '</td><td class="inp">' + fmtCell(x.m[8]) + '</td></tr>';
    });
    h += '</tbody></table></div></div></details>';
  });
  h += '<p class="small muted">' + B('adv.str.note') + '</p>';
  out.innerHTML = h;
}
widgets['adv-string'].addEventListener('change', function (e) {
  var id = e.target.id;
  if (id === 'str-char') { adv.strChar = e.target.value; adv.strA = null; advSave(); renderString(); return; }
  if (id === 'str-opp') { adv.strOpp = e.target.value; advSave(); renderString(); return; }
  if (id === 'str-a') adv.strA = e.target.value; else if (id === 'str-dr') adv.strDr = e.target.checked; else if (id === 'str-bo') adv.strBo = e.target.checked; else return;
  advSave(); stringResults();
});
widgets['adv-string'].addEventListener('input', function (e) { if (e.target.id === 'str-extra') { adv.strExtra = e.target.value; advSave(); stringResults(); } });

// ----- break-even calculator -----
widgets['adv-breakeven'] = el('<div class="widget adv-tool" data-group="advanced"></div>');
function renderBreakeven() {
  var w = widgets['adv-breakeven'];
  w.innerHTML = '<div class="tr-grid">' +
    '<div class="field"><label for="be-gain">' + B('adv.be.gain') + '</label><input id="be-gain" type="number" inputmode="numeric" min="0" max="20000" step="100" value="' + esc(adv.beGain) + '"></div>' +
    '<div class="field"><label for="be-loss">' + B('adv.be.loss') + '</label><input id="be-loss" type="number" inputmode="numeric" min="0" max="20000" step="100" value="' + esc(adv.beLoss) + '"></div>' +
    '<div class="field"><label for="be-p">' + B('adv.be.p') + '</label><input id="be-p" type="number" inputmode="numeric" min="0" max="100" step="5" value="' + esc(adv.beP) + '"><span class="hint">' + B('adv.be.p-hint') + '</span></div></div>' +
    '<div class="adv-out" aria-live="polite"></div>';
  breakevenResults();
}
function breakevenResults() {
  var w = widgets['adv-breakeven'], out = w.querySelector('.adv-out');
  var g = Math.max(0, +adv.beGain || 0), l = Math.max(0, +adv.beLoss || 0), p = Math.max(0, Math.min(100, +adv.beP || 0)) / 100;
  if (!g && !l) { out.innerHTML = '<p class="muted">' + B('adv.be.empty') + '</p>'; return; }
  var need = l / (g + l), ev = p * g - (1 - p) * l;
  var fmt = function (n) { return Math.round(n).toLocaleString(lang === 'pt' ? 'pt-BR' : 'en-US'); };
  var pct = function (x) { return (Math.round(x * 1000) / 10).toString().replace('.', lang === 'pt' ? ',' : '.'); };
  var h = '<div class="adv-big"><span>' + B('adv.be.need') + '</span><b>' + pct(need) + '%</b><small>' + B('adv.be.need-in', [Math.max(1, Math.round(need * 10))]) + '</small></div>' +
    '<p class="adv-sum">' + B(ev >= 0 ? 'adv.be.ev-good' : 'adv.be.ev-bad', [Math.round(p * 100), fmt(Math.abs(ev)), fmt(Math.abs(ev) * 10)]) + '</p>' +
    '<p class="small muted">' + B('adv.be.note') + '</p>';
  out.innerHTML = h;
}
widgets['adv-breakeven'].addEventListener('input', function (e) {
  var k = { 'be-gain': 'beGain', 'be-loss': 'beLoss', 'be-p': 'beP' }[e.target.id]; if (!k) return;
  adv[k] = e.target.value; advSave(); breakevenResults();
});

document.addEventListener('click', function (e) {
  if (!e.target.closest('[data-adv-retry]')) return;
  if (e.target.closest('[data-widget="adv-oki"], .adv-tool') === widgets['adv-oki']) renderOki();
  else if (e.target.closest('.adv-tool') === widgets['adv-string']) renderString();
});
onShow['adv-oki'] = renderOki;
onShow['adv-pressure'] = renderString;
onShow['adv-decisions'] = renderBreakeven;
onLang.push(function () {
  if (current === 'adv-oki') renderOki();
  else if (current === 'adv-pressure') renderString();
  else if (current === 'adv-decisions') renderBreakeven();
});
