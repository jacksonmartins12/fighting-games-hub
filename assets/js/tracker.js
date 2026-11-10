'use strict';
// ---------- tracker ----------
var METRICS = [   // labels: tracker.metric.<k> and tracker.metric.<k>.short in i18n
  { k: 'combos',max: 100, unit: '%' },
  { k: 'antiair',max: 100, unit: '%' },
  { k: 'footsies',max: 10, unit: '/10' },
  { k: 'adapt',max: 10, unit: '/10' },
  { k: 'calm',max: 20, unit: '/20' },
  { k: 'hours',max: null, unit: 'h' }
];
var NOTES = [   // labels: tracker.note.<k> in i18n
  { k: 'well' },
  { k: 'improve' },
  { k: 'pattern' },
  { k: 'question' },
  { k: 'focus' }
];
var chartMetric = 'combos';
var trEls = {};
function mondayISO(d) {
  d = d ? new Date(d) : new Date();
  var day = (d.getDay() + 6) % 7; d.setDate(d.getDate() - day);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function fmtDate(iso, long) {
  var p = iso.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]);
  try { return d.toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', long ? { day: 'numeric', month: 'short', year: 'numeric' } : { day: 'numeric', month: 'short' }); }
  catch (e) { return iso; }
}
widgets.tracker = (function () {
  var charOpts = '<option value="">' + tr('tracker.x') + '</option>' + rosterList()
    .sort(function (a, b) { return a.name.localeCompare(b.name); })
    .map(function (c) { return '<option value="' + c.slug + '">' + esc(c.name) + '</option>'; }).join('');
  var h = '<div class="widget" data-group="training" id="tracker-widget">' +
    '<div class="tr-status" id="tr-status"><i></i><span></span></div>' +
    '<form id="tr-form" novalidate><div class="tr-grid">' +
    '<div class="field"><label for="tr-week">' + B('tracker.week-starting') + '</label><input id="tr-week" type="date" required></div>' +
    '<div class="field"><label for="tr-char">' + B('tracker.character') + '</label><select id="tr-char">' + charOpts + '</select></div>' +
    '<div class="field"><label for="tr-rank">' + B('tracker.ranked-rank') + '</label><input id="tr-rank" type="text" maxlength="40" data-i18n-ph="tracker.e-g-gold-3" placeholder="e.g. Gold 3"></div>';
  METRICS.forEach(function (m) {
    h += '<div class="field"><label for="tr-' + m.k + '">' + B('tracker.metric.' + m.k) + '</label><input id="tr-' + m.k + '" type="number" inputmode="decimal" min="0"' + (m.max ? ' max="' + m.max + '"' : ' max="200"') + ' step="' + (m.k === 'hours' ? '0.5' : '1') + '"></div>';
  });
  NOTES.forEach(function (n) {
    h += '<div class="field wide"><label for="tr-' + n.k + '">' + B('tracker.note.' + n.k) + '</label><textarea id="tr-' + n.k + '" maxlength="600"></textarea></div>';
  });
  h += '</div><div class="tr-actions"><button type="submit" class="btn" id="tr-save"></button>' +
    '<button type="button" class="btn ghost" id="tr-clear">' + B('tracker.clear-form') + '</button>' +
    '<span class="tr-msg" id="tr-msg" role="status"></span></div></form>' +
    '<div class="tr-chart-head"><h4>' + B('tracker.your-trend') + '</h4><div class="field" style="min-width:min(100%,260px)"><label for="tr-metric" class="flabel">' + B('tracker.metric') + '</label><select id="tr-metric">' +
    METRICS.map(function (m) { return '<option value="' + m.k + '">' + esc(tr('tracker.metric.' + m.k)) + '</option>'; }).join('') +
    '</select></div></div><div class="chart-wrap" id="tr-chart"></div>' +
    '<div class="tr-history" id="tr-history"></div></div>';
  var w = el(h);
  ['week', 'char', 'rank', 'save', 'clear', 'msg', 'metric', 'chart', 'history', 'status', 'form'].forEach(function (k) { trEls[k] = w.querySelector('#tr-' + k); });
  METRICS.concat(NOTES).forEach(function (m) { trEls[m.k] = w.querySelector('#tr-' + m.k); });
  trEls.week.value = mondayISO();
  trEls.week.addEventListener('change', function () { loadWeek(trEls.week.value); });
  trEls.metric.addEventListener('change', function () { chartMetric = trEls.metric.value; renderChart(); });
  trEls.clear.addEventListener('click', function () { fillForm({}); trEls.msg.textContent = ''; });
  trEls.form.addEventListener('submit', function (e) {
    e.preventDefault();
    var wk = trEls.week.value;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(wk)) { trEls.msg.textContent = tr('tracker.pick-the-week-s-start-date'); trEls.week.focus(); return; }
    wk = mondayISO(wk.replace(/-/g, '/'));
    var entry = { week: wk, char: trEls.char.value, rank: trEls.rank.value.trim().slice(0, 40), savedAt: new Date().toISOString() };
    var bad = null;
    METRICS.forEach(function (m) {
      var v = trEls[m.k].value.trim();
      if (v === '') return;
      var n = Number(v.replace(',', '.'));
      if (isNaN(n) || n < 0 || (m.max && n > m.max)) { bad = bad || m; return; }
      entry[m.k] = n;
    });
    if (bad) { trEls.msg.textContent = tr('tracker.must-be-between-0-and', [K('tracker.metric.' + bad.k), bad.max]); trEls[bad.k].focus(); return; }
    NOTES.forEach(function (n) { var v = trEls[n.k].value.trim(); if (v) entry[n.k] = v.slice(0, 600); });
    store.docs.tracker.entries[wk] = entry;
    trEls.week.value = wk;
    trEls.msg.textContent = tr('tracker.saving');
    renderTracker();
    saveDoc('tracker').then(function (res) {
      trEls.msg.textContent = res === 'quota' ? tr('tracker.storage-is-full-delete-an-old')
        : tr('tracker.saved-week-of', [fmtDate(wk, true)]);
    });
  });
  return w;
})();
function fillForm(e) {
  trEls.char.value = e.char || ''; trEls.rank.value = e.rank || '';
  METRICS.forEach(function (m) { trEls[m.k].value = e[m.k] != null ? e[m.k] : ''; });
  NOTES.forEach(function (n) { trEls[n.k].value = e[n.k] || ''; });
}
function loadWeek(wk) {
  if (!wk) return;
  var key = mondayISO(wk.replace(/-/g, '/'));
  fillForm(store.docs.tracker.entries[key] || {});
  updateSaveLabel();
}
function updateSaveLabel() {
  var wk = trEls.week.value ? mondayISO(trEls.week.value.replace(/-/g, '/')) : '';
  trEls.save.innerHTML = store.docs.tracker.entries[wk] ? B('tracker.update-this-week') : B('tracker.save-this-week');
}
function renderTracker() {
  var st = trEls.status;
  st.classList.toggle('cloud', store.mode === 'cloud');
  st.querySelector('span').innerHTML = store.mode === 'cloud'
    ? B('tracker.saved-to-your-account-only-you')
    : B(store.canSync ? 'tracker.saved-on-this-device-only-open' : 'tracker.saved-in-this-browser-only-your');
  updateSaveLabel();
  renderChart();
  var keys = Object.keys(store.docs.tracker.entries).sort().reverse();
  var h = '<h4>' + B('tracker.logged-weeks') + ' (' + keys.length + ')</h4>';
  if (!keys.length) h += '<p class="muted small">' + B('tracker.nothing-logged-yet-your-saved-weeks') + '</p>';
  keys.forEach(function (k) {
    var e = store.docs.tracker.entries[k];
    var kp = METRICS.filter(function (m) { return e[m.k] != null; }).map(function (m) {
      return '<span>' + B('tracker.metric.' + m.k + '.short') + ': ' + e[m.k] + (m.unit === '%' ? '%' : (m.unit === 'h' ? 'h' : m.unit)) + '</span>';
    }).join('');
    var notes = NOTES.filter(function (n) { return e[n.k]; }).map(function (n) {
      return '<p><b>' + B('tracker.note.' + n.k) + ':</b> ' + esc(e[n.k]) + '</p>';
    }).join('');
    h += '<div class="tr-entry" data-week="' + k + '"><div class="tr-entry-head"><b>' + esc(fmtDate(k, true)) + '</b><span class="small muted">' +
      esc(e.char && ROSTER[e.char] ? ROSTER[e.char].name : '') + (e.rank ? ' · ' + esc(e.rank) : '') + '</span>' +
      '<span class="confirm"><button type="button" class="linkbtn" data-tr-edit="' + k + '">' + B('tracker.edit') + '</button>' +
      '<button type="button" class="linkbtn" data-tr-del="' + k + '">' + B('tracker.delete') + '</button></span></div>' +
      (kp ? '<div class="tr-kpis">' + kp + '</div>' : '') + (notes ? '<div class="tr-notes">' + notes + '</div>' : '') + '</div>';
  });
  trEls.history.innerHTML = h;
}
trEls.history.addEventListener('click', function (e) {
  var ed = e.target.closest('[data-tr-edit]');
  if (ed) { var k = ed.getAttribute('data-tr-edit'); trEls.week.value = k; loadWeek(k); trEls.form.scrollIntoView({ behavior: behavior, block: 'start' }); return; }
  var del = e.target.closest('[data-tr-del]');
  if (del) {
    var wk = del.getAttribute('data-tr-del');
    var box = del.parentNode;
    box.innerHTML = '<span>' + B('tracker.delete-this-week') + '</span>' +
      '<button type="button" class="btn danger" data-tr-yes="' + wk + '">' + B('tracker.delete') + '</button>' +
      '<button type="button" class="btn ghost" data-tr-no>' + B('tracker.keep') + '</button>';
    return;
  }
  var yes = e.target.closest('[data-tr-yes]');
  if (yes) { delete store.docs.tracker.entries[yes.getAttribute('data-tr-yes')]; saveDoc('tracker'); renderTracker(); return; }
  if (e.target.closest('[data-tr-no]')) renderTracker();
});
function renderChart() {
  if (!trEls.chart) return;
  trEls.metric.querySelectorAll('option').forEach(function (o) { o.textContent = tr('tracker.metric.' + o.value); });
  var m = METRICS.filter(function (x) { return x.k === chartMetric; })[0];
  var pts = Object.keys(store.docs.tracker.entries).sort().map(function (k) { return store.docs.tracker.entries[k]; })
    .filter(function (e) { return e[m.k] != null; });
  if (!pts.length) {
    trEls.chart.innerHTML = '<div class="tr-empty">' + B('tracker.log-a-week-with-this-number') + '</div>';
    return;
  }
  var W = 760, Hh = 240, pl = 44, pr = 56, pt = 16, pb = 34;
  var max = m.max || Math.max(5, Math.ceil(Math.max.apply(null, pts.map(function (p) { return p[m.k]; })) / 5) * 5);
  var n = pts.length;
  function x(i) { return n === 1 ? pl + (W - pl - pr) / 2 : pl + i * (W - pl - pr) / (n - 1); }
  function y(v) { return pt + (1 - v / max) * (Hh - pt - pb); }
  var s = '';
  [0, .25, .5, .75, 1].forEach(function (f) {
    var v = Math.round(max * f * 10) / 10;
    s += '<line x1="' + pl + '" x2="' + (W - pr) + '" y1="' + y(v) + '" y2="' + y(v) + '" style="stroke:var(--chart-grid);stroke-width:1"/>' +
      '<text x="' + (pl - 8) + '" y="' + (y(v) + 4) + '" text-anchor="end" style="fill:var(--ink-soft);font:12px var(--mono)">' + v + '</text>';
  });
  var step = Math.max(1, Math.ceil(n / 6));
  pts.forEach(function (p, i) {
    if (i % step === 0 || i === n - 1) s += '<text x="' + x(i) + '" y="' + (Hh - 10) + '" text-anchor="middle" style="fill:var(--ink-soft);font:12px var(--mono)">' + esc(fmtDate(p.week)) + '</text>';
  });
  if (n > 1) s += '<polyline fill="none" style="stroke:var(--tone);stroke-width:2;stroke-linejoin:round;stroke-linecap:round" points="' + pts.map(function (p, i) { return x(i) + ',' + y(p[m.k]); }).join(' ') + '"/>';
  pts.forEach(function (p, i) {
    s += '<circle cx="' + x(i) + '" cy="' + y(p[m.k]) + '" r="5" style="fill:var(--tone);stroke:var(--sheet);stroke-width:2"/>';
  });
  var last = pts[n - 1];
  s += '<text x="' + (x(n - 1) + 10) + '" y="' + (y(last[m.k]) + 4) + '" style="fill:var(--ink);font:500 13px var(--mono)">' + last[m.k] + (m.unit === '%' ? '%' : (m.unit === 'h' ? 'h' : '')) + '</text>';
  s += '<line id="tr-cross" x1="0" x2="0" y1="' + pt + '" y2="' + (Hh - pb) + '" style="stroke:var(--ink-soft);stroke-width:1;stroke-dasharray:3 3;visibility:hidden"/>';
  s += '<rect id="tr-hit" x="' + pl + '" y="' + pt + '" width="' + (W - pl - pr) + '" height="' + (Hh - pt - pb) + '" style="fill:transparent"/>';
  trEls.chart.innerHTML = '<svg viewBox="0 0 ' + W + ' ' + Hh + '" role="img" aria-label="' + esc(tr('tracker.metric.' + m.k)) + '">' + s + '</svg><div class="chart-tip" hidden></div>';
  var svg = trEls.chart.querySelector('svg'), tip = trEls.chart.querySelector('.chart-tip'), cross = svg.querySelector('#tr-cross');
  function move(ev) {
    var r = svg.getBoundingClientRect(), sx = (ev.clientX - r.left) * W / r.width;
    var best = 0, bd = Infinity;
    pts.forEach(function (p, i) { var dd = Math.abs(x(i) - sx); if (dd < bd) { bd = dd; best = i; } });
    var p = pts[best];
    cross.setAttribute('x1', x(best)); cross.setAttribute('x2', x(best)); cross.style.visibility = 'visible';
    tip.hidden = false;
    tip.textContent = fmtDate(p.week, true) + ' · ' + p[m.k] + (m.unit === '%' ? '%' : (m.unit === 'h' ? 'h' : ' ' + m.unit));
    tip.style.left = (x(best) * r.width / W) + 'px'; tip.style.top = (y(p[m.k]) * r.height / Hh) + 'px';
  }
  svg.addEventListener('pointermove', move);
  svg.addEventListener('pointerleave', function () { tip.hidden = true; cross.style.visibility = 'hidden'; });
}
