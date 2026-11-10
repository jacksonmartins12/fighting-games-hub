'use strict';
// Loaded before this file: i18n/*.js (HUB_I18N) and data/roster.js, data/upcoming.js, data/quiz.js (HUB_DATA).
var HUB_I18N = window.HUB_I18N || {};
var HUB_DATA = window.HUB_DATA || {};
var ROSTER = HUB_DATA.roster || {};      // slug -> { slug, name, archetype, difficulty }
var UPCOMING = HUB_DATA.upcoming || [];
var QUIZ = HUB_DATA.quiz || {};
var CHARS = {};                           // full guides, filled on demand by needChar()
var FRAMES = {};                          // full frame data, filled on demand by needChar()
var ORDER = [], GROUP = {};               // chapter order and groups, read from the page
document.querySelectorAll('#content > section').forEach(function (s) { ORDER.push(s.id); GROUP[s.id] = s.getAttribute('data-group'); });

var root = document.documentElement;
var main = document.getElementById('content');
var reader = document.getElementById('reader');
var sidebar = document.getElementById('sidebar');
var scrim = document.getElementById('scrim');
var openBtn = document.getElementById('open-menu');
var mTitle = document.getElementById('mbar-title');
var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var behavior = reduce ? 'auto' : 'smooth';
var lang = 'en';
var current = 'intro';

// ---------- helpers ----------
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}
// ---------- i18n: every interface string lives in i18n/<lang>.js under a key ----------
function K(key) { return { k: key }; }   // a variable that is itself a translated string
function tx(l, key, vars) {
  var s = (HUB_I18N[l] || {})[key];
  if (s == null) s = (HUB_I18N.en || {})[key];
  if (s == null) return key;
  return vars ? s.replace(/\{(\d+)\}/g, function (_, i) { var v = vars[i]; return v && v.k ? tx(l, v.k) : v; }) : s;
}
function hasKey(key) { return (HUB_I18N.en || {})[key] != null; }
function B2(en, pt) {   // both languages side by side; CSS shows the active one
  return '<span class="l-en" lang="en">' + en + '</span><span class="l-pt" lang="pt-BR">' + (pt == null ? en : pt) + '</span>';
}
function B(key, vars) { return B2(tx('en', key, vars), tx('pt', key, vars)); }   // interface string, both languages
function tr(key, vars) { return tx(lang, key, vars); }                           // interface string, active language
function BO(o) { return o ? B2(esc(o.en || ''), esc(o.pt || o.en || '')) : ''; } // { en, pt } field from the data files

// ---------- on-demand data ----------
var scriptCache = {};
function loadScript(src) {
  if (!scriptCache[src]) {
    scriptCache[src] = new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = src; s.async = true;
      s.onload = function () { res(); };
      s.onerror = function () { delete scriptCache[src]; s.remove(); rej(new Error('load ' + src)); };
      document.head.appendChild(s);
    });
  }
  return scriptCache[src];
}
function needChar(slug) {   // resolves once CHARS[slug] and FRAMES[slug] are available
  if (!ROSTER[slug]) return Promise.reject(new Error('unknown fighter ' + slug));
  if (CHARS[slug]) return Promise.resolve(CHARS[slug]);
  return loadScript('data/chars/' + slug + '.js').then(function () {
    var d = (window.HUB_DATA.chars || {})[slug];
    if (!d) throw new Error('no data for ' + slug);
    CHARS[slug] = d.guide; FRAMES[slug] = d.frames;
    return d.guide;
  });
}
function rosterList() { return Object.keys(ROSTER).map(function (k) { return ROSTER[k]; }).sort(function (a, b) { return a.name.localeCompare(b.name); }); }
function loadingHTML() { return '<p class="muted data-loading" role="status">' + B('data.loading') + '</p>'; }
function loadErrorHTML(retry) { return '<p class="muted" role="alert">' + B('data.load-error') + ' <button type="button" class="linkbtn" ' + retry + '>' + B('data.retry') + '</button></p>'; }
var LS = {
  get: function (k) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } },
  set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
function clone(o) { return JSON.parse(JSON.stringify(o || {})); }
function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }
function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
