// Frame data changes after balance patches, one entry per update (written by tools/fat_sync.py apply).
// Each entry: date, source, status, changes: [{char, move, field, old, new}]. Old values stay here so they are never mistaken for current ones.
(window.HUB_DATA = window.HUB_DATA || {}).patches = [];
