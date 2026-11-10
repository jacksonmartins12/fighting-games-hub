'use strict';
// ---------- widgets: one node, moved into the visible language ----------
var widgets = {};
function placeWidgets() {
  Object.keys(widgets).forEach(function (name) {
    var slot = document.querySelector('.l-' + lang + ' > [data-widget="' + name + '"], .l-' + lang + ' [data-widget="' + name + '"]');
    if (slot && widgets[name].parentNode !== slot) slot.appendChild(widgets[name]);
  });
}

// Frame bar: Ryu 2MK
widgets.framebar = (function () {
  var cells = '', axis = '';
  for (var f = 1; f <= 29; f++) {
    var c = f < 8 ? 's' : (f <= 10 ? 'a' : 'r');
    cells += '<span class="fb-cell ' + c + '" title="' + f + '"></span>';
    axis += '<span' + (f === 10 ? ' class="fb-tight"' : '') + '>' + ([1, 8, 10, 11, 29].indexOf(f) > -1 ? f : '') + '</span>';
  }
  return el('<div class="widget" data-group="path">' +
    '<p class="widget-label">' + B('widgets.frame-data-drawn-ryu-2mk-c') + '</p>' +
    '<div class="fb-row" role="img" aria-label="Frames 1 to 7 startup, 8 to 10 active, 11 to 29 recovery" data-i18n-aria="widgets.frames-1-to-7-startup-8">' + cells + '</div>' +
    '<div class="fb-axis" aria-hidden="true">' + axis + '</div>' +
    '<div class="fb-legend"><span><i style="background:color-mix(in srgb, var(--ink) 22%, var(--sheet))"></i>' + B('widgets.startup-frames-1-7') + '</span>' +
    '<span><i style="background:var(--crimson)"></i>' + B('widgets.active-frames-8-10') + '</span>' +
    '<span><i style="background:var(--indigo)"></i>' + B('widgets.recovery-frames-11-29') + '</span></div>' +
    '<div class="fb-stats">' +
    '<div class="fb-stat"><b>8f</b><span>' + B('widgets.startup-frame-8-is-the-first') + '</span></div>' +
    '<div class="fb-stat"><b>29f</b><span>' + B('widgets.total-almost-half-a-second-committed') + '</span></div>' +
    '<div class="fb-stat"><b class="adv minus">−6</b><span>' + B('widgets.on-block-the-opponent-acts-6') + '</span></div>' +
    '<div class="fb-stat"><b class="adv plus">+1</b><span>' + B('widgets.on-hit-ryu-acts-1-frame') + '</span></div></div>' +
    '<p class="small" style="margin-top:14px">' + B('widgets.read-it-like-this-a-move') + '</p>' +
    '<p class="small muted">' + B('widgets.source-capcom-official-frame-data-classic') +
    '<button type="button" class="linkbtn" data-char="ryu">' + B('widgets.open-ryu-s-full-guide') + '</button></p></div>');
})();

// Footsies range diagram
var rangeEls = {};
widgets.range = (function () {
  var w = el('<div class="widget" data-group="path">' +
    '<p class="widget-label">' + B('widgets.interactive-whose-poke-reaches') + '</p>' +
    '<svg class="range-svg" viewBox="0 0 800 210" role="img" aria-label="Spacing diagram" data-i18n-aria="widgets.spacing-diagram"></svg>' +
    '<div class="range-controls"><label for="range-dist" class="small"><b>' + B('widgets.distance') + '</b></label>' +
    '<input id="range-dist" type="range" min="30" max="100" value="56" step="1">' +
    '<span class="search-count" id="range-val"></span></div>' +
    '<div class="range-verdict" id="range-verdict"></div>' +
    '<p class="small muted">' + B('widgets.schematic-units-your-character-s-poke') + '</p></div>');
  rangeEls.svg = w.querySelector('svg'); rangeEls.input = w.querySelector('#range-dist');
  rangeEls.val = w.querySelector('#range-val'); rangeEls.verdict = w.querySelector('#range-verdict');
  rangeEls.input.addEventListener('input', drawRange);
  return w;
})();
function drawRange() {
  var d = +rangeEls.input.value, YOU = 60, THEM = 50;
  var sx = 7, x0 = 90, ground = 170;
  var you = x0, them = x0 + d * sx;
  var zone = d <= THEM ? 'both' : (d <= YOU ? 'yours' : 'none');
  function body(x, cls, flip) {
    return '<rect x="' + (x - 18) + '" y="' + (ground - 96) + '" width="36" height="96" style="fill:var(--sheet);stroke:var(--ink);stroke-width:3"/>' +
      '<circle cx="' + x + '" cy="' + (ground - 112) + '" r="15" style="fill:var(--sheet);stroke:var(--ink);stroke-width:3"/>';
  }
  var s = '';
  // zone bands on the ground
  s += '<rect x="' + (x0) + '" y="' + (ground + 8) + '" width="' + (THEM * sx) + '" height="10" style="fill:color-mix(in srgb, var(--bad) 35%, transparent)"/>';
  s += '<rect x="' + (x0 + THEM * sx) + '" y="' + (ground + 8) + '" width="' + ((YOU - THEM) * sx) + '" height="10" style="fill:color-mix(in srgb, var(--ok) 55%, transparent)"/>';
  s += '<rect x="' + (x0 + YOU * sx) + '" y="' + (ground + 8) + '" width="' + ((100 - YOU) * sx) + '" height="10" style="fill:color-mix(in srgb, var(--ink) 12%, transparent)"/>';
  s += '<line x1="20" x2="790" y1="' + ground + '" y2="' + ground + '" style="stroke:var(--ink);stroke-width:2"/>';
  // reach arrows
  var yy = ground - 60, ty = ground - 34;
  s += '<line x1="' + you + '" x2="' + (you + YOU * sx) + '" y1="' + yy + '" y2="' + yy + '" style="stroke:var(--crimson);stroke-width:5"/>';
  s += '<polygon points="' + (you + YOU * sx) + ',' + (yy - 8) + ' ' + (you + YOU * sx + 12) + ',' + yy + ' ' + (you + YOU * sx) + ',' + (yy + 8) + '" style="fill:var(--crimson)"/>';
  s += '<line x1="' + them + '" x2="' + (them - THEM * sx) + '" y1="' + ty + '" y2="' + ty + '" style="stroke:var(--indigo);stroke-width:5"/>';
  s += '<polygon points="' + (them - THEM * sx) + ',' + (ty - 8) + ' ' + (them - THEM * sx - 12) + ',' + ty + ' ' + (them - THEM * sx) + ',' + (ty + 8) + '" style="fill:var(--indigo)"/>';
  s += body(you) + body(them);
  s += '<text x="' + you + '" y="' + (ground + 36) + '" text-anchor="middle" class="rname">' + tr('widgets.you') + '</text>';
  s += '<text x="' + them + '" y="' + (ground + 36) + '" text-anchor="middle" class="rname">' + tr('widgets.opponent') + '</text>';
  s += '<text x="' + (you + 26) + '" y="' + (yy - 12) + '" class="rlab">' + tr('widgets.your-c-mk-reach') + '</text>';
  s += '<text x="' + (them - 26) + '" y="' + (ty - 12) + '" text-anchor="end" class="rlab">' + tr('widgets.their-c-mk-reach') + '</text>';
  rangeEls.svg.innerHTML = s;
  rangeEls.val.textContent = d;
  var msg = {
    both: [tr('widgets.both-pokes-reach-whoever-presses-first'), 'bad'],
    yours: [tr('widgets.your-poke-reaches-and-theirs-doesn'), 'good'],
    none: [tr('widgets.neither-poke-reaches-walk-to-adjust'), 'mid']
  }[zone];
  rangeEls.verdict.textContent = msg[0];
  rangeEls.verdict.style.color = msg[1] === 'good' ? 'var(--ok)' : (msg[1] === 'bad' ? 'var(--bad)' : 'var(--ink)');
}

// Concept map
widgets['concept-map'] = (function () {
  var cols = [
    [['cmap.foundation'], ['cmap.month-1-2'], [
      ['cmap.attack-block-throw', 'fundamentals'],
      ['cmap.movement-and-blocking', 'fundamentals'],
      ['cmap.execution-basics', 'execution']]],
    [['cmap.intermediate'], ['cmap.month-2-3'], [
      ['cmap.frame-data', 'fundamentals'],
      ['cmap.anti-airs', 'lab'],
      ['cmap.hit-confirming', 'execution']]],
    [['cmap.advanced'], ['cmap.month-4-6'], [
      ['chapter.footsies', 'footsies'],
      ['cmap.drive-gauge-management', 'drive'],
      ['cmap.okizeme-and-pressure', 'mechanics']]],
    [['cmap.mastery'], ['cmap.month-6'], [
      ['cmap.adaptation', 'strategy'],
      ['cmap.matchups', 'roster'],
      ['cmap.mental-game', 'mindset']]]
  ];
  var h = '<div class="widget"><p class="widget-label">' + B('widgets.each-layer-rests-on-the-one') + '</p><div class="cmap">';
  cols.forEach(function (c) {
    h += '<div class="cmap-col"><div class="cmap-head"><b>' + B(c[0][0]) + '</b>' + B(c[1][0]) + '</div>';
    c[2].forEach(function (n) {
      h += '<button type="button" class="cmap-node" data-go="' + n[1] + '">' + B(n[0]) +
        '<small>' + B('chapter.' + n[1]) + '</small></button>';
    });
    h += '</div>';
  });
  return el(h + '</div></div>');
})();


// Drive Gauge simulator
var dg = { units: 12, burnout: false, el: null, msg: null };
widgets['drive-gauge'] = (function () {
  var acts = [
    ['di', 2, true],
    ['parry', 1, true],
    ['pdr', 2, false],
    ['cdr', 6, false],
    ['rev', 4, false],
    ['od', 4, false],
    ['refund', -2, false]
  ];
  var h = '<div class="widget" data-group="path"><p class="widget-label">' + B('widgets.interactive-spend-the-gauge') + '</p>' +
    '<div class="dg-bar" aria-hidden="true">';
  for (var i = 0; i < 6; i++) h += '<span class="dg-seg"><i></i><i></i></span>';
  h += '</div><p class="dg-count" id="dg-count" aria-live="polite"></p><div class="dg-acts">';
  acts.forEach(function (a) {
    h += '<button type="button" class="chip dg-act" data-act="' + a[0] + '">' + B('dg.act.' + a[0]) + ' <small>' + B('dg.cost.' + a[0]) + '</small></button>';
  });
  h += '<button type="button" class="chip" data-act="reset">' + B('widgets.new-round-6-bars') + '</button></div>' +
    '<p class="dg-msg" id="dg-msg"></p></div>';
  var w = el(h);
  dg.el = w; dg.msg = w.querySelector('#dg-msg');
  w.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]'); if (!b) return;
    var k = b.getAttribute('data-act');
    if (k === 'reset') { dg.units = 12; dg.burnout = false; dg.msg.innerHTML = B('widgets.full-gauge-every-drive-tool-is'); drawGauge(); return; }
    var a = acts.filter(function (x) { return x[0] === k; })[0];
    if (dg.burnout) {
      dg.msg.innerHTML = B('widgets.you-re-in-burnout-no-drive');
      return;
    }
    if (k === 'refund') {
      dg.units = Math.min(12, dg.units + 2);
      dg.msg.innerHTML = B('widgets.a-successful-parry-on-a-strike');
      drawGauge(); return;
    }
    if (dg.units < a[1] && !a[2]) {
      dg.msg.innerHTML = B('widgets.not-enough-gauge-needs', [K('dg.act.' + a[0]), K('dg.cost.' + a[0])]);
      return;
    }
    dg.units = Math.max(0, dg.units - a[1]);
    if (dg.units === 0) {
      dg.burnout = true;
      dg.msg.innerHTML = '<b>' + B('widgets.burnout') + '</b> ' + B('widgets.no-drive-tools-4-frames-of');
    } else {
      dg.msg.innerHTML = B('dg.tip.' + k);
    }
    drawGauge();
  });
  return w;
})();
function drawGauge() {
  var cells = dg.el.querySelectorAll('.dg-seg i');
  cells.forEach(function (c, i) { c.className = i < dg.units ? 'on' : ''; });
  dg.el.classList.toggle('burnout', dg.burnout);
  var bars = (dg.units / 2).toString().replace('.', lang === 'pt' ? ',' : '.');
  dg.el.querySelector('#dg-count').innerHTML = dg.burnout ? B('widgets.0-bars-burnout') : B('widgets.of-6-bars', [bars]);
}

// Meaty timing (Ryu 2MK)
var meaty = { k: 1, el: null };
widgets.meaty = (function () {
  var h = '<div class="widget" data-group="path"><p class="widget-label">' + B('widgets.interactive-meaty-timing-on-ryu-s') + '</p>' +
    '<div class="chips" role="group">' +
    [1, 2, 3].map(function (k) {
      return '<button type="button" class="chip" data-meaty="' + k + '" aria-pressed="' + (k === 1) + '">' +
        B('widgets.hits-on-active-frame-frame', [k, (7 + k)]) + '</button>';
    }).join('') + '</div><div class="fb-row mt-row" aria-hidden="true"></div>' +
    '<div class="fb-stats"><div class="fb-stat"><b class="adv" id="meaty-block"></b><span>' + B('widgets.on-block') + '</span></div>' +
    '<div class="fb-stat"><b class="adv" id="meaty-hit"></b><span>' + B('widgets.on-hit') + '</span></div>' +
    '<div class="fb-stat"><b id="meaty-left"></b><span>' + B('widgets.frames-left-in-ryu-s-move') + '</span></div></div>' +
    '<p class="small" id="meaty-note" style="margin-top:12px"></p></div>';
  var w = el(h); meaty.el = w;
  w.addEventListener('click', function (e) {
    var b = e.target.closest('[data-meaty]'); if (!b) return;
    meaty.k = +b.getAttribute('data-meaty'); drawMeaty();
  });
  return w;
})();
function drawMeaty() {
  var k = meaty.k, hitF = 7 + k, w = meaty.el, row = w.querySelector('.mt-row'), cells = '';
  for (var f = 1; f <= 29; f++) {
    var c = f < 8 ? 's' : (f <= 10 ? 'a' : 'r');
    var extra = f < hitF ? ' past' : (f === hitF ? ' hit' : '');
    cells += '<span class="fb-cell ' + c + extra + '"></span>';
  }
  row.innerHTML = cells;
  w.querySelectorAll('[data-meaty]').forEach(function (b) { b.setAttribute('aria-pressed', String(+b.getAttribute('data-meaty') === k)); });
  var blk = -6 + (k - 1), hit = 1 + (k - 1);
  var bE = w.querySelector('#meaty-block'), hE = w.querySelector('#meaty-hit');
  bE.textContent = (blk > 0 ? '+' : (blk < 0 ? '−' : '')) + Math.abs(blk); bE.className = 'adv ' + (blk < 0 ? 'minus' : 'plus');
  hE.textContent = '+' + hit; hE.className = 'adv plus';
  w.querySelector('#meaty-left').textContent = (29 - hitF) + 'f';
  w.querySelector('#meaty-note').innerHTML = k === 1
    ? B('widgets.hitting-on-the-first-active-frame')
    : B('widgets.hitting-frame-later-skips-frame-of', [(k - 1), (k > 2 ? 's' : '')]);
}

// Glossary search
var glossaryInput;
widgets['glossary-search'] = (function () {
  var w = el('<div class="widget" data-group="archive"><div class="search-row">' +
    '<label for="gloss-q" class="widget-label" style="margin:0">' + B('widgets.search-terms') + '</label>' +
    '<input id="gloss-q" type="search" autocomplete="off" data-i18n-ph="widgets.try-frame-trap-oki-burnout" placeholder="Try: frame trap, oki, Burnout, 対空…">' +
    '<span class="search-count" id="gloss-count" aria-live="polite"></span></div></div>');
  glossaryInput = w.querySelector('#gloss-q');
  glossaryInput.addEventListener('input', runGlossarySearch);
  return w;
})();
function runGlossarySearch() {
  var q = norm(glossaryInput.value.trim());
  var box = document.querySelector('#glossary > .l-' + lang);
  if (!box) return;
  var total = 0, shown = 0;
  box.querySelectorAll('.deep-dive').forEach(function (dd) {
    var any = false;
    dd.querySelectorAll('dt').forEach(function (dt) {
      var d = dt.nextElementSibling;
      var hit = !q || norm(dt.textContent + ' ' + (d ? d.textContent : '')).indexOf(q) > -1;
      dt.hidden = !hit; if (d) d.hidden = !hit;
      total++; if (hit) { shown++; any = true; }
    });
    dd.hidden = !any;
    var h = dd.previousElementSibling;
    while (h && h.tagName !== 'H3') h = h.previousElementSibling;
    if (h) h.hidden = !any;
  });
  document.getElementById('gloss-count').textContent = q ? (shown + ' / ' + total) : (total + tr('widgets.terms'));
}
