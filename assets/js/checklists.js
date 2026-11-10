'use strict';
// ---------- lab checklists ----------
function setupChecklists() {
  ['en', 'pt'].forEach(function (lg) {
    var box = document.querySelector('#lab > .l-' + lg);
    if (!box) return;
    box.querySelectorAll('.deep-dive ol').forEach(function (ol, k) {
      ol.classList.add('checklist');
      var items = ol.querySelectorAll(':scope > li');
      items.forEach(function (li, i) {
        var key = 'lab' + k + '-' + i, id = 'cl-' + lg + '-' + k + '-' + i;
        var lab = document.createElement('label'); lab.setAttribute('for', id);
        while (li.firstChild) lab.appendChild(li.firstChild);
        var cb = document.createElement('input'); cb.type = 'checkbox'; cb.id = id; cb.setAttribute('data-key', key);
        li.appendChild(cb); li.appendChild(lab);
        cb.addEventListener('change', function () {
          if (cb.checked) store.docs.progress.labs[key] = true; else delete store.docs.progress.labs[key];
          saveDoc('progress'); syncChecklists();
        });
      });
      var bar = el('<div class="checklist-bar"><span class="cl-count" data-ol="' + k + '"></span>' +
        '<button type="button" class="linkbtn" data-reset="' + k + '">' + B('checklists.reset-this-drill') + '</button></div>');
      ol.after(bar);
      bar.querySelector('[data-reset]').addEventListener('click', function () {
        Object.keys(store.docs.progress.labs).forEach(function (x) { if (x.indexOf('lab' + k + '-') === 0) delete store.docs.progress.labs[x]; });
        saveDoc('progress'); syncChecklists();
      });
    });
  });
  syncChecklists();
}
function syncChecklists() {
  var labs = store.docs.progress.labs;
  document.querySelectorAll('#lab input[data-key]').forEach(function (cb) {
    cb.checked = !!labs[cb.getAttribute('data-key')];
    cb.closest('li').classList.toggle('done', cb.checked);
  });
  document.querySelectorAll('#lab .cl-count').forEach(function (c) {
    var k = c.getAttribute('data-ol');
    var ol = c.parentNode.previousElementSibling;
    var n = ol.querySelectorAll('input[data-key]').length, m = ol.querySelectorAll('input[data-key]:checked').length;
    c.innerHTML = B('checklists.of-steps-done', [m, n]);
  });
}
