'use strict';
// ---------- 30-day plan ----------
// The days come from data/plan30.js (loaded the first time the chapter opens).
// Done days are saved in the progress document: store.docs.progress.plan = { d1: true, ... }.
var planApp = document.getElementById('plan-app');
function planLink(id) {
  var target = document.getElementById(id), sec = target && (target.tagName === 'SECTION' ? target : target.closest('section'));
  if (!sec) return '';
  return '<a href="#' + id + '">' + B('chapter.' + sec.id) + '</a>';
}
function renderPlan() {
  if (!planApp) return;
  var weeks = window.HUB_DATA.plan30;
  if (!weeks) {
    planApp.innerHTML = loadingHTML();
    loadScript('data/plan30.js').then(renderPlan, function () { planApp.innerHTML = loadErrorHTML('data-plan-retry'); });
    return;
  }
  var done = store.docs.progress.plan, n = 0, total = 0, next = 0, h = '', body = '';
  weeks.forEach(function (w) {
    body += '<h3>' + BO(w.week) + '</h3><ol class="plan-days">';
    w.days.forEach(function (d) {
      total++;
      var key = 'd' + total, ok = !!done[key];
      if (ok) n++; else if (!next) next = total;
      body += '<li class="plan-day' + (ok ? ' done' : '') + '" id="plan-day-' + total + '"><input type="checkbox" id="plan-cb-' + total + '" data-plan="' + key + '"' + (ok ? ' checked' : '') + '>' +
        '<div><label for="plan-cb-' + total + '"><span class="plan-n">' + B('plan.day', [total]) + '</span> <b>' + BO(d.t) + '</b></label>' +
        '<p>' + BO(d.do) + '</p><p class="small muted">' + B('plan.read') + ' ' + d.go.map(planLink).filter(Boolean).join(' · ') + '</p></div></li>';
    });
    body += '</ol>';
  });
  h += '<div class="widget" data-group="training"><div class="plan-bar"><div class="plan-meter" role="img" aria-label="' + n + ' / ' + total + '"><i style="width:' + (100 * n / total) + '%"></i></div>' +
    '<span class="plan-count">' + B('plan.count', [n, total]) + '</span></div><div class="tr-actions">' +
    (next ? '<button type="button" class="btn" data-plan-next="' + next + '">' + B(n ? 'plan.continue' : 'plan.start', [next]) + '</button>' : '<b>' + B('plan.finished') + '</b>') +
    (n ? '<span class="confirm"><button type="button" class="linkbtn" data-plan-reset>' + B('plan.reset') + '</button></span>' : '') + '</div></div>';
  planApp.innerHTML = h + body;
  planApp.querySelectorAll('.plan-day').forEach(function (li, i) { li.classList.toggle('next', i + 1 === next); });
}
if (planApp) {
  onShow.plan30 = renderPlan;
  onStore(function () { if (window.HUB_DATA.plan30) renderPlan(); });
  planApp.addEventListener('change', function (e) {
    var k = e.target.getAttribute('data-plan'); if (!k) return;
    if (e.target.checked) store.docs.progress.plan[k] = true; else delete store.docs.progress.plan[k];
    saveDoc('progress'); renderPlan();
    var cb = planApp.querySelector('[data-plan="' + k + '"]'); if (cb) cb.focus();
  });
  planApp.addEventListener('click', function (e) {
    if (e.target.closest('[data-plan-retry]')) { renderPlan(); return; }
    var nx = e.target.closest('[data-plan-next]');
    if (nx) { var li = document.getElementById('plan-day-' + nx.getAttribute('data-plan-next')); if (li) li.scrollIntoView({ behavior: behavior, block: 'center' }); return; }
    var rs = e.target.closest('[data-plan-reset]');
    if (rs) { rs.parentNode.innerHTML = B('plan.reset-confirm') + ' <button type="button" class="linkbtn" data-plan-reset-yes>' + B('plan.yes') + '</button> <button type="button" class="linkbtn" data-plan-reset-no>' + B('plan.no') + '</button>'; return; }
    if (e.target.closest('[data-plan-reset-yes]')) { store.docs.progress.plan = {}; saveDoc('progress'); renderPlan(); return; }
    if (e.target.closest('[data-plan-reset-no]')) renderPlan();
  });
}
