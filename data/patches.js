// Frame data changes after balance patches, one entry per update (written by tools/fat_sync.py apply).
// Each entry: date, source, status, changes: [{char, move, field, old, new}]. Old values stay here so they are never mistaken for current ones.
(window.HUB_DATA = window.HUB_DATA || {}).patches = [
 {
  "date": "2026-11-11",
  "source": "Capcom official frame data pages (Classic), saved 2026-11-11; compared with tools/capcom_compare.py",
  "status": "official",
  "note": "Not a balance patch: values where FAT (commit a8101eb) and Capcom differed now follow Capcom. \"old\" is the FAT value.",
  "changes": [
   {
    "char": "akuma",
    "move": "OD Gou Shoryuken",
    "field": "onBlock",
    "old": -41,
    "new": -39
   },
   {
    "char": "akuma",
    "move": "Shun Goku Satsu",
    "field": "active",
    "old": 21,
    "new": 22
   },
   {
    "char": "alex",
    "move": "Sweep Combination 1",
    "field": "recovery",
    "old": 30,
    "new": 43
   },
   {
    "char": "alex",
    "move": "Sweep Combination 2",
    "field": "recovery",
    "old": 33,
    "new": 46
   },
   {
    "char": "arjun",
    "move": "Justice Beyond",
    "field": "startup",
    "old": 15,
    "new": 11
   },
   {
    "char": "blanka",
    "move": "Jump HP",
    "field": "active",
    "old": 4,
    "new": 1
   },
   {
    "char": "blanka",
    "move": "LK Vertical Rolling Attack",
    "field": "active",
    "old": 19,
    "new": 20
   },
   {
    "char": "blanka",
    "move": "MK Vertical Rolling Attack",
    "field": "active",
    "old": 19,
    "new": 20
   },
   {
    "char": "blanka",
    "move": "HK Vertical Rolling Attack",
    "field": "active",
    "old": 19,
    "new": 20
   },
   {
    "char": "chun-li",
    "move": "Jump HK",
    "field": "active",
    "old": 5,
    "new": 7
   },
   {
    "char": "chun-li",
    "move": "Neutral Jump HK",
    "field": "active",
    "old": 7,
    "new": 5
   },
   {
    "char": "chun-li",
    "move": "Soaring Eagle Punches",
    "field": "startup",
    "old": 16,
    "new": 6
   },
   {
    "char": "chun-li",
    "move": "Lightning Kick Barrage",
    "field": "startup",
    "old": 10,
    "new": 11
   },
   {
    "char": "dhalsim",
    "move": "MP Yoga Flame",
    "field": "active",
    "old": 15,
    "new": 16
   },
   {
    "char": "dhalsim",
    "move": "HK Yoga Blast",
    "field": "onBlock",
    "old": -1,
    "new": -3
   },
   {
    "char": "guile",
    "move": "Knee Bazooka",
    "field": "active",
    "old": 5,
    "new": 4
   },
   {
    "char": "jamie",
    "move": "OD Freeflow Kicks 2",
    "field": "startup",
    "old": 16,
    "new": 14
   },
   {
    "char": "jamie",
    "move": "OD Freeflow Kicks 3",
    "field": "startup",
    "old": 19,
    "new": 18
   },
   {
    "char": "jamie",
    "move": "LK Arrow Kick",
    "field": "onBlock",
    "old": -44,
    "new": -45
   },
   {
    "char": "jamie",
    "move": "OD Arrow Kick",
    "field": "recovery",
    "old": 51,
    "new": 53
   },
   {
    "char": "jp",
    "move": "LK Torbalan",
    "field": "startup",
    "old": 14,
    "new": 22
   },
   {
    "char": "jp",
    "move": "MK Torbalan",
    "field": "startup",
    "old": 14,
    "new": 26
   },
   {
    "char": "jp",
    "move": "HK Torbalan",
    "field": "startup",
    "old": 14,
    "new": 26
   },
   {
    "char": "jp",
    "move": "OD Torbalan",
    "field": "startup",
    "old": 14,
    "new": 22
   },
   {
    "char": "jp",
    "move": "Lovushka",
    "field": "startup",
    "old": 1,
    "new": 29
   },
   {
    "char": "juri",
    "move": "Death Crest 1",
    "field": "startup",
    "old": 16,
    "new": 12
   },
   {
    "char": "juri",
    "move": "Death Crest 1",
    "field": "recovery",
    "old": 20,
    "new": 19
   },
   {
    "char": "juri",
    "move": "Kaisen Dankai Raku",
    "field": "onBlock",
    "old": -36,
    "new": -31
   },
   {
    "char": "kimberly",
    "move": "Bushin Hellchain 2",
    "field": "startup",
    "old": 15,
    "new": 10
   },
   {
    "char": "kimberly",
    "move": "Bushin Hellchain 2",
    "field": "active",
    "old": 3,
    "new": 2
   },
   {
    "char": "kimberly",
    "move": "Bushin Hellchain 2",
    "field": "recovery",
    "old": 24,
    "new": 25
   },
   {
    "char": "kimberly",
    "move": "Bushin Hellchain 2",
    "field": "onBlock",
    "old": -12,
    "new": -10
   },
   {
    "char": "luke",
    "move": "LP Sand Blast",
    "field": "active",
    "old": 6,
    "new": 5
   },
   {
    "char": "luke",
    "move": "OD Flash Knuckle",
    "field": "active",
    "old": 3,
    "new": 1
   },
   {
    "char": "marisa",
    "move": "MP Dimachaerus",
    "field": "active",
    "old": 4,
    "new": 5
   },
   {
    "char": "mai",
    "move": "Kagerou no Mai",
    "field": "recovery",
    "old": 59,
    "new": 51
   },
   {
    "char": "rashid",
    "move": "OD Spinning Mixer",
    "field": "onBlock",
    "old": -53,
    "new": -42
   },
   {
    "char": "ryu",
    "move": "Crouch HP",
    "field": "recovery",
    "old": 21,
    "new": 22
   },
   {
    "char": "ryu",
    "move": "Short Uppercut",
    "field": "recovery",
    "old": 25,
    "new": 26
   },
   {
    "char": "ryu",
    "move": "HP Shoryuken",
    "field": "onBlock",
    "old": -39,
    "new": -36
   },
   {
    "char": "ryu",
    "move": "OD Hashogeki",
    "field": "active",
    "old": 6,
    "new": 5
   },
   {
    "char": "terry",
    "move": "Jump MP",
    "field": "active",
    "old": 4,
    "new": 6
   },
   {
    "char": "terry",
    "move": "Jump MK",
    "field": "active",
    "old": 6,
    "new": 4
   },
   {
    "char": "terry",
    "move": "LP Rising Tackle",
    "field": "onBlock",
    "old": -23,
    "new": -25
   },
   {
    "char": "zangief",
    "move": "Tundra Storm",
    "field": "startup",
    "old": 6,
    "new": 5
   },
   {
    "char": "zangief",
    "move": "Tundra Storm",
    "field": "active",
    "old": 50,
    "new": 51
   }
  ]
 }
];
