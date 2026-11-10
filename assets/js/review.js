'use strict';
// ---------- replay review sheet ----------
// Reviews are saved in the tracker document: store.docs.tracker.reviews = { <id>: { date, me, opp, result, kind, ...answers, savedAt } }.
var reviewApp = document.getElementById('review-app');
var REVIEW_Q = ['better', 'worse', 'moment', 'reads', 'next'];   // labels: review.q.<k> and review.hint.<k> in i18n
var reviewEdit = null;
function todayISO() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
function reviewDate(iso) {
  var p = String(iso || '').split('-'); if (p.length !== 3) return esc(iso || '');
  try { return new Date(+p[0], +p[1] - 1, +p[2]).toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) { return iso; }
}
function renderReview() {
  if (!reviewApp) return;
  var all = store.docs.tracker.reviews, cur = reviewEdit && all[reviewEdit] ? all[reviewEdit] : {};
  var opts = function (sel) { return '<option value="">—</option>' + rosterList().map(function (c) { return '<option value="' + c.slug + '"' + (c.slug === sel ? ' selected' : '') + '>' + esc(c.name) + '</option>'; }).join(''); };
  var pick = function (id, key, vals, sel) { return '<div class="field"><label for="' + id + '">' + B(key) + '</label><select id="' + id + '"><option value="">—</option>' + vals.map(function (v) { return '<option value="' + v + '" data-i18n-text="' + key + '.' + v + '"' + (v === sel ? ' selected' : '') + '>' + esc(tr(key + '.' + v)) + '</option>'; }).join('') + '</select></div>'; };
  var h = '<div class="widget" data-group="training"><div class="tr-status' + (store.mode === 'cloud' ? ' cloud' : '') + '"><i></i><span>' +
    B(store.mode === 'cloud' ? 'tracker.saved-to-your-account-only-you' : (store.canSync ? 'tracker.saved-on-this-device-only-open' : 'review.saved-here')) + '</span></div>' +
    '<form id="rv-form" novalidate><div class="tr-grid">' +
    '<div class="field"><label for="rv-date">' + B('review.date') + '</label><input id="rv-date" type="date" value="' + esc(cur.date || todayISO()) + '"></div>' +
    '<div class="field"><label for="rv-me">' + B('punish.you-play') + '</label><select id="rv-me">' + opts(reviewEdit ? cur.me : mu.me) + '</select></div>' +
    '<div class="field"><label for="rv-opp">' + B('punish.opponent') + '</label><select id="rv-opp">' + opts(cur.opp) + '</select></div>' +
    pick('rv-result', 'review.result', ['win', 'loss'], cur.result);
  REVIEW_Q.forEach(function (k) {
    if (k === 'moment') h += pick('rv-kind', 'review.kind', ['skill', 'luck', 'mix'], cur.kind);
    h += '<div class="field wide"><label for="rv-' + k + '">' + B('review.q.' + k) + '</label><textarea id="rv-' + k + '" maxlength="600">' + esc(cur[k] || '') + '</textarea><span class="hint">' + B('review.hint.' + k) + '</span></div>';
  });
  h += '</div><div class="tr-actions"><button type="submit" class="btn">' + B(reviewEdit ? 'review.update' : 'review.save') + '</button>' +
    (reviewEdit ? '<button type="button" class="btn ghost" data-rv-cancel>' + B('review.cancel') + '</button>' : '') +
    '<span class="tr-msg" id="rv-msg" role="status"></span></div></form></div>';
  var keys = Object.keys(all).sort(function (a, b) { return (all[b].date || '').localeCompare(all[a].date || '') || b.localeCompare(a); });
  h += '<h3>' + B('review.history', [keys.length]) + '</h3>';
  if (!keys.length) h += '<p class="tr-empty">' + B('review.empty') + '</p>';
  keys.forEach(function (id) {
    var r = all[id], who = (ROSTER[r.me] ? ROSTER[r.me].name : '—') + ' vs ' + (ROSTER[r.opp] ? ROSTER[r.opp].name : '—');
    h += '<div class="tr-entry"><div class="tr-entry-head"><b>' + esc(reviewDate(r.date)) + '</b><span class="small muted">' + esc(who) +
      (r.result ? ' · ' + B('review.result.' + r.result) : '') + (r.kind ? ' · ' + B('review.kind.' + r.kind) : '') + '</span>' +
      '<span class="confirm"><button type="button" class="linkbtn" data-rv-edit="' + id + '">' + B('tracker.edit') + '</button> <button type="button" class="linkbtn" data-rv-del="' + id + '">' + B('tracker.delete') + '</button></span></div><div class="tr-notes">' +
      REVIEW_Q.filter(function (k) { return r[k]; }).map(function (k) { return '<p><b>' + B('review.q.' + k) + '</b><br>' + esc(r[k]) + '</p>'; }).join('') + '</div></div>';
  });
  reviewApp.innerHTML = h;
}
if (reviewApp) {
  onShow.review = renderReview;
  onStore(function () { if (current === 'review' && !reviewApp.querySelector('textarea:focus, select:focus, input:focus')) renderReview(); });
  reviewApp.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (id) { return (document.getElementById(id).value || '').trim(); };
    var r = { date: v('rv-date') || todayISO(), me: v('rv-me'), opp: v('rv-opp'), result: v('rv-result'), kind: v('rv-kind'), savedAt: new Date().toISOString() };
    var any = false;
    REVIEW_Q.forEach(function (k) { var t = v('rv-' + k).slice(0, 600); if (t) { r[k] = t; any = true; } });
    if (!any) { document.getElementById('rv-msg').innerHTML = B('review.need-one'); return; }
    var id = reviewEdit || ('r' + Date.now());
    store.docs.tracker.reviews[id] = r; reviewEdit = null;
    saveDoc('tracker').then(function (where) {
      renderReview();
      var m = document.getElementById('rv-msg'); if (m) m.innerHTML = B(where === 'quota' ? 'review.quota' : 'review.saved');
    });
  });
  reviewApp.addEventListener('click', function (e) {
    var ed = e.target.closest('[data-rv-edit]');
    if (ed) { reviewEdit = ed.getAttribute('data-rv-edit'); renderReview(); reviewApp.scrollIntoView({ behavior: behavior, block: 'start' }); return; }
    if (e.target.closest('[data-rv-cancel]')) { reviewEdit = null; renderReview(); return; }
    var del = e.target.closest('[data-rv-del]');
    if (del) { var id = del.getAttribute('data-rv-del'); del.parentNode.innerHTML = B('review.delete-confirm') + ' <button type="button" class="linkbtn" data-rv-yes="' + id + '">' + B('plan.yes') + '</button> <button type="button" class="linkbtn" data-rv-no>' + B('plan.no') + '</button>'; return; }
    var yes = e.target.closest('[data-rv-yes]');
    if (yes) { delete store.docs.tracker.reviews[yes.getAttribute('data-rv-yes')]; if (reviewEdit === yes.getAttribute('data-rv-yes')) reviewEdit = null; saveDoc('tracker'); renderReview(); return; }
    if (e.target.closest('[data-rv-no]')) renderReview();
  });
}
