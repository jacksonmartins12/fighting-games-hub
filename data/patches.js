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
 },
 {
  "date": "2026-11-11",
  "source": "Capcom official frame data pages (Classic), saved 2026-11-11; second comparison pass (moves the hub names differently and values that list several versions)",
  "status": "official",
  "note": "Where the hub listed several versions, only the main value was replaced and FAT's alternates in parentheses were kept. \"old\" is the previous value.",
  "changes": [
   {
    "char": "blanka",
    "move": "HP Rolling Attack",
    "field": "recovery",
    "old": "2+23",
    "new": 26
   },
   {
    "char": "blanka",
    "move": "LK Backstep Rolling Attack",
    "field": "onHit",
    "old": "8(14)",
    "new": "9(14)"
   },
   {
    "char": "blanka",
    "move": "LK Backstep Rolling Attack",
    "field": "onBlock",
    "old": "2(8)",
    "new": "3(8)"
   },
   {
    "char": "blanka",
    "move": "MK Backstep Rolling Attack",
    "field": "onHit",
    "old": "7(14)",
    "new": "8(14)"
   },
   {
    "char": "blanka",
    "move": "MK Backstep Rolling Attack",
    "field": "onBlock",
    "old": "1(8)",
    "new": "2(8)"
   },
   {
    "char": "blanka",
    "move": "HK Backstep Rolling Attack",
    "field": "onHit",
    "old": "7(13)",
    "new": "8(13)"
   },
   {
    "char": "blanka",
    "move": "HK Backstep Rolling Attack",
    "field": "onBlock",
    "old": "3(9)",
    "new": "4(9)"
   },
   {
    "char": "e-honda",
    "move": "OD Sumo Headbutt",
    "field": "recovery",
    "old": "30(37)",
    "new": "20(37)"
   },
   {
    "char": "juri",
    "move": "Kaisen Dankai Raku (Critical Art)",
    "field": "onBlock",
    "old": -36,
    "new": -31
   },
   {
    "char": "kimberly",
    "move": "Aerial Bushin Senpukyaku",
    "field": "onHit",
    "old": "4(8) / KD +38(42)",
    "new": "5(8) / KD +38(42)"
   },
   {
    "char": "kimberly",
    "move": "Aerial Bushin Senpukyaku",
    "field": "onBlock",
    "old": "-1(4)",
    "new": "1(4)"
   },
   {
    "char": "kimberly",
    "move": "OD Aerial Bushin Senpukyaku",
    "field": "onHit",
    "old": "4(8) / KD +46(51)",
    "new": "5(8) / KD +46(51)"
   },
   {
    "char": "kimberly",
    "move": "OD Aerial Bushin Senpukyaku",
    "field": "onBlock",
    "old": "-1(4)",
    "new": "1(4)"
   },
   {
    "char": "kimberly",
    "move": "Bushin Scramble",
    "field": "onBlock",
    "old": "-26(-20)",
    "new": "-25(-20)"
   },
   {
    "char": "luke",
    "move": "Avenger > Impaler",
    "field": "active",
    "old": 8,
    "new": 1
   },
   {
    "char": "luke",
    "move": "OD Avenger > Impaler",
    "field": "active",
    "old": 8,
    "new": 1
   },
   {
    "char": "ryu",
    "move": "Shin Shoryuken",
    "field": "onBlock",
    "old": "-50(-54)",
    "new": "-52(-54)"
   },
   {
    "char": "ryu",
    "move": "Shin Shoryuken (Critical Art)",
    "field": "onBlock",
    "old": "-50(-54)",
    "new": "-52(-54)"
   },
   {
    "char": "yasmine",
    "move": "Pamumukadkad ng Sampaguita (Critical Art)",
    "field": "onBlock",
    "old": -48,
    "new": -45
   }
  ]
 }
];
