'use strict';
// ---------- personal progress store (account when available, device otherwise) ----------
var store = {
  mode: 'local', db: null, uid: null,
  docs: {
    tracker: LS.get('fgc-tracker') || { entries: {} },
    progress: LS.get('fgc-progress') || { quiz: {}, labs: {} }
  },
  listeners: []
};
if (!store.docs.tracker.entries) store.docs.tracker.entries = {};
if (!store.docs.progress.quiz) store.docs.progress.quiz = {};
if (!store.docs.progress.labs) store.docs.progress.labs = {};
if (!store.docs.progress.plan) store.docs.progress.plan = {};       // 30-day plan: { d1: true, ... }
if (!store.docs.tracker.reviews) store.docs.tracker.reviews = {};   // replay reviews: { id: {...} }
function fillDocDefaults() {   // documents written by an older version of the hub may lack the newer fields
  var t = store.docs.tracker, p = store.docs.progress;
  if (!t.entries) t.entries = {}; if (!t.reviews) t.reviews = {};
  if (!p.quiz) p.quiz = {}; if (!p.labs) p.labs = {}; if (!p.plan) p.plan = {};
}
function onStore(fn) { store.listeners.push(fn); }
function emit() { store.listeners.forEach(function (f) { try { f(); } catch (e) {} }); }
var chains = {};
function saveDoc(name) {
  var data = clone(store.docs[name]);
  LS.set('fgc-' + name, data);
  if (store.mode !== 'cloud') return Promise.resolve('local');
  chains[name] = (chains[name] || Promise.resolve()).then(function () {
    return store.db.doc('data/users/' + store.uid + '/' + name).set(data).then(function () { return 'cloud'; });
  }).catch(function (e) {
    var code = e && e.code;
    if (code === 'unavailable') {
      return new Promise(function (r) { setTimeout(r, 600 + Math.random() * 600); }).then(function () {
        return store.db.doc('data/users/' + store.uid + '/' + name).set(data).then(function () { return 'cloud'; });
      }).catch(function () { return 'local'; });
    }
    if (code === 'quota_exceeded') return 'quota';
    store.mode = 'local'; emit();
    return 'local';
  });
  return chains[name];
}
function mergeDocs(name, a, b) { // a = cloud, b = local
  if (name === 'tracker') {
    var out = { entries: clone(b.entries) };
    Object.keys(a.entries || {}).forEach(function (k) { out.entries[k] = a.entries[k]; });
    out.reviews = clone(b.reviews);
    Object.keys(a.reviews || {}).forEach(function (k) { out.reviews[k] = a.reviews[k]; });
    return out;
  }
  var q = clone(b.quiz), l = clone(b.labs);
  Object.keys(a.quiz || {}).forEach(function (k) { q[k] = Math.max(q[k] || 0, a.quiz[k] || 0); });
  Object.keys(a.labs || {}).forEach(function (k) { if (a.labs[k]) l[k] = true; });
  var pl = clone(b.plan);
  Object.keys(a.plan || {}).forEach(function (k) { if (a.plan[k]) pl[k] = true; });
  return { quiz: q, labs: l, plan: pl };
}
function initCloud() {
  if (!window.claude || typeof window.claude.use !== 'function') return;   // outside Claude: this browser only
  store.canSync = true;
  Promise.all([window.claude.use('db'), window.claude.use('user')]).then(function (r) {
    var db = r[0], user = r[1];
    if (!db || !user) return null;
    return user.id().then(function (uid) {
      if (!uid) return null;
      store.db = db; store.uid = uid;
      return Promise.all(['tracker', 'progress'].map(function (name) {
        var ref = db.doc('data/users/' + uid + '/' + name);
        return ref.get().then(function (snap) {
          var local = store.docs[name];
          var cloud = snap.exists ? snap.data() : null;
          var merged = cloud ? mergeDocs(name, cloud, local) : clone(local);
          store.docs[name] = merged;
          var needsWrite = JSON.stringify(merged) !== JSON.stringify(cloud);
          var hasContent = name === 'tracker' ? (Object.keys(merged.entries).length || Object.keys(merged.reviews).length) : (Object.keys(merged.quiz).length || Object.keys(merged.labs).length || Object.keys(merged.plan).length);
          return (needsWrite && hasContent) ? ref.set(clone(merged)) : null;
        }).then(function () {
          ref.onSnapshot(function (s) {
            if (!s.exists || s.metadata.hasPendingWrites) return;
            var d = clone(s.data());
            if (JSON.stringify(d) === JSON.stringify(store.docs[name])) return;
            store.docs[name] = d; fillDocDefaults(); LS.set('fgc-' + name, d); emit();
          }, function () {});
        });
      })).then(function () { store.mode = 'cloud'; emit(); });
    });
  }).catch(function () { /* stay on device storage */ });
}
