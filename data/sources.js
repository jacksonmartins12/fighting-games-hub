// Where the hub's data comes from and how far it is verified. Read by the frame tables (flags) and by tools/validate.py.
// status: official = Capcom; tool = FAT; community = wiki/guides; tested = checked in training mode; unverified.
// flags[fighter][move].status: check = the source contradicts itself; conflict = two sources disagree; derived = filled in by the hub.
(window.HUB_DATA = window.HUB_DATA || {}).sources = {
 "checked": "2026-11-11",
 "frameData": {
  "name": "FAT – Frame Assistant Tool",
  "url": "https://github.com/D4RKONION/FAT",
  "file": "src/js/constants/framedata/SF6FrameData.json",
  "commit": "a8101eb",
  "commitDate": "2026-10-22",
  "status": "tool",
  "note": "Every move of the 32 fighters matches this FAT commit in startup, active, recovery, on hit, on block, damage and cancels (checked with tools/fat_sync.py on 2026-11-11). FAT updated existing fighters on 2026-08-10, a week after the 2026-08-03 balance patch, and again on 2026-10-22."
 },
 "otherSources": [
  {
   "name": "SuperCombo Wiki – Game Data",
   "url": "https://wiki.supercombo.gg/w/Street_Fighter_6/Game_Data",
   "used": "jump frames, dashes, health, damage scaling, input buffer, throw/strike priority",
   "status": "community"
  },
  {
   "name": "dood.gg",
   "url": "https://dood.gg/",
   "used": "safe meaty rule, fuzzy guard, option selects; spot check of Ryu's on-block values",
   "status": "community"
  }
 ],
 "statuses": [
  "official",
  "tool",
  "community",
  "tested",
  "unverified"
 ],
 "tested": [
  {
   "date": "2026-11-10",
   "what": "Standard jump (4+38+3): at KD +42 a jump-in with an attack blocks Ryu's 5-frame Light Shoryuken and 6-frame OD Shoryuken and level 1 Supers.",
   "where": "adv-oki"
  },
  {
   "date": "2026-11-11",
   "what": "At KD +41 a jump-in with an attack loses to a 5-frame reversal (Ryu's Light Shoryuken) but blocks 6-frame ones; an empty jump at +41 blocks the 5-frame reversal.",
   "where": "adv-oki"
  },
  {
   "date": "2026-11-11",
   "what": "Drive Reversal does not KO, even against an opponent with less than 500 health left.",
   "where": "drive"
  }
 ],
 "flags": {
  "dee-jay": {
   "Threebeat Combo 2": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -8, but blockstun 16 − active 3 − recovery 19 = -6; on hit +3, but hitstun 27 − active 3 − recovery 19 = +5. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -8, mas blockstun 16 − ativos 3 − recovery 19 = -6; no hit +3, mas hitstun 27 − ativos 3 − recovery 19 = +5. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   },
   "OD Jus Cool > Waning Moon": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -2, but blockstun 18 − active 5 − recovery 17 = -4. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -2, mas blockstun 18 − ativos 5 − recovery 17 = -4. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   }
  },
  "guile": {
   "Crouch MK": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -5, but blockstun 18 − active 3 − recovery 18 = -3. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -5, mas blockstun 18 − ativos 3 − recovery 18 = -3. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   }
  },
  "ingrid": {
   "Sun Veil": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -3, but blockstun 21 − active 15 − recovery 35 = -29. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -3, mas blockstun 21 − ativos 15 − recovery 35 = -29. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   },
   "OD Sun Veil": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -3, but blockstun 24 − active 20 − recovery 35 = -31. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -3, mas blockstun 24 − ativos 20 − recovery 35 = -31. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   }
  },
  "jamie": {
   "LK Arrow Kick": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -44, but blockstun 17 − active 10 − recovery 52 = -45. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -44, mas blockstun 17 − ativos 10 − recovery 52 = -45. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   }
  },
  "juri": {
   "Stand LK": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -3, but blockstun 7 − active 3 − recovery 9 = -5; on hit +2, but hitstun 13 − active 3 − recovery 9 = +1. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -3, mas blockstun 7 − ativos 3 − recovery 9 = -5; no hit +2, mas hitstun 13 − ativos 3 − recovery 9 = +1. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   }
  },
  "ken": {
   "Chin Buster 2nd": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -14, but blockstun 15 − active 3 − recovery 27 = -15. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -14, mas blockstun 15 − ativos 3 − recovery 27 = -15. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   }
  },
  "kimberly": {
   "MP Vagabond Edge": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -12, but blockstun 21 − active 2 − recovery 28 = -9. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -12, mas blockstun 21 − ativos 2 − recovery 28 = -9. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   },
   "HP Vagabond Edge": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -12, but blockstun 21 − active 2 − recovery 28 = -9. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -12, mas blockstun 21 − ativos 2 − recovery 28 = -9. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   },
   "OD Vagabond Edge": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -12, but blockstun 21 − active 2 − recovery 28 = -9. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -12, mas blockstun 21 − ativos 2 − recovery 28 = -9. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   },
   "Arc Step > Bushin Hojin Kick": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -8, but blockstun 15 − active 6 − recovery 20 = -11. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -8, mas blockstun 15 − ativos 6 − recovery 20 = -11. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   },
   "OD Arc Step > Bushin Hojin Kick": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -8, but blockstun 15 − active 6 − recovery 20 = -11. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -8, mas blockstun 15 − ativos 6 − recovery 20 = -11. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   },
   "Bushin Beats (0 stock)": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -25, but blockstun 16 − active 15 − recovery 40 = -39. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -25, mas blockstun 16 − ativos 15 − recovery 40 = -39. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   },
   "Bushin Beats (1 stock)": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -25, but blockstun 16 − active 15 − recovery 40 = -39. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -25, mas blockstun 16 − ativos 15 − recovery 40 = -39. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   }
  },
  "lily": {
   "Desert Storm Final": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -23, but blockstun 19 − active 5 − recovery 39 = -25. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -23, mas blockstun 19 − ativos 5 − recovery 39 = -25. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   }
  },
  "luke": {
   "Stand LK": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -2, but blockstun 22 − active 2 − recovery 12 = +8. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -2, mas blockstun 22 − ativos 2 − recovery 12 = +8. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   },
   "Rawhide": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -3, but blockstun 21 − active 2 − recovery 21 = -2. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -3, mas blockstun 21 − ativos 2 − recovery 21 = -2. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   },
   "Outlaw Kick": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -3, but blockstun 22 − active 4 − recovery 24 = -6. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -3, mas blockstun 22 − ativos 4 − recovery 24 = -6. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   }
  },
  "ryu": {
   "Stand HK": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block +1, but blockstun 24 − active 4 − recovery 20 = +0. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block +1, mas blockstun 24 − ativos 4 − recovery 20 = +0. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   },
   "Crouch HP": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -7, but blockstun 19 − active 6 − recovery 21 = -8. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block -7, mas blockstun 19 − ativos 6 − recovery 21 = -8. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   },
   "LK High Blade Kick": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -11, but blockstun 20 − active 6 − recovery 22 = -8. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter). dood.gg also lists −11 on block, so the advantage is probably right and the stun value is not.",
     "pt": "O FAT lista no block -11, mas blockstun 20 − ativos 6 − recovery 22 = -8. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque). O dood.gg também lista −11 no block, então a vantagem deve estar certa e o valor de stun não."
    }
   },
   "OD High Blade Kick": {
    "status": "conflict",
    "detail": {
     "en": "Sources disagree: FAT −18 on block, dood.gg −11 on block. The table shows FAT's value; test it in training mode.",
     "pt": "As fontes divergem: FAT −18 no block, dood.gg −11 no block. A tabela mostra o valor do FAT; teste no training mode."
    }
   }
  },
  "sagat": {
   "High Step Kick": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block +4, but blockstun 26 − active 4 − recovery 21 = +1. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter).",
     "pt": "O FAT lista no block +4, mas blockstun 26 − ativos 4 − recovery 21 = +1. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque)."
    }
   }
  },
  "arjun": {
   "(best reversal)": {
    "status": "derived",
    "detail": {
     "en": "FAT has no best reversal for Arjun. The hub lists Howling Destruction (SA1, 8 frames, strike and throw invincible on frames 1–8 per FAT's move notes); his OD moves have no full invincibility.",
     "pt": "O FAT não indica o melhor reversal da Arjun. O hub lista o Howling Destruction (SA1, 8 frames, invencível a golpes e throws nos frames 1–8 pelas notas do FAT); os golpes OD dela não têm invencibilidade total."
    }
   }
  }
 }
};
