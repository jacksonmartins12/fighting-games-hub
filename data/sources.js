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
  "note": "Every move of the 32 fighters matches this FAT commit in startup, active, recovery, on hit, on block, damage and cancels (checked with tools/fat_sync.py on 2026-11-11). FAT updated existing fighters on 2026-08-10, a week after the 2026-08-03 balance patch, and again on 2026-10-22. On 2026-11-11, 46 values in 41 moves where Capcom's official pages differed from FAT were changed to Capcom's values (listed in data/patches.js and marked in the tables)."
 },
 "otherSources": [
  {
   "name": "Capcom – official frame data pages",
   "url": "https://www.streetfighter.com/6/",
   "used": "compared move by move with tools/capcom_compare.py: 1994 of the 2133 moves from FAT matched, 6848 values compared; the 65 that differed now follow Capcom. The 366 rows only Capcom lists were added by tools/capcom_add.py and are named in capcomRows",
   "saved": "2026-11-11",
   "controls": "Classic",
   "status": "official"
  },
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
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) confirms the values shown (on block −8, on hit +3). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026) confirma os valores mostrados (no block −8, no hit +3). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   },
   "OD Jus Cool > Waning Moon": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11, as \"OD Waning Moon\") confirms the values shown (on block −2, on hit +7). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026, como \"OD Waning Moon\") confirma os valores mostrados (no block −2, no hit +7). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   }
  },
  "guile": {
   "Crouch MK": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) confirms the values shown (on block −5, on hit +4). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026) confirma os valores mostrados (no block −5, no hit +4). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   },
   "Knee Bazooka": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 4 (FAT had 5).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 4 (o FAT tinha 5)."
    }
   }
  },
  "ingrid": {
   "Sun Veil": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) confirms the values shown (on block −3). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026) confirma os valores mostrados (no block −3). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   },
   "OD Sun Veil": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) confirms the values shown (on block −3). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026) confirma os valores mostrados (no block −3). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   }
  },
  "jamie": {
   "LK Arrow Kick": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on block −45 (FAT had −44).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no block −45 (o FAT tinha −44)."
    }
   },
   "OD Arrow Kick": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): recovery 53 (FAT had 51).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): recovery 53 (o FAT tinha 51)."
    }
   },
   "OD Freeflow Kicks 2": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): startup 14 (FAT had 16).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): startup 14 (o FAT tinha 16)."
    }
   },
   "OD Freeflow Kicks 3": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): startup 18 (FAT had 19).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): startup 18 (o FAT tinha 19)."
    }
   }
  },
  "juri": {
   "Stand LK": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) confirms the values shown (on block −3, on hit +2). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026) confirma os valores mostrados (no block −3, no hit +2). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   },
   "Kaisen Dankai Raku": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on block −31 (FAT had −36).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no block −31 (o FAT tinha −36)."
    }
   },
   "Death Crest 1": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): startup 12 (FAT had 16); recovery 19 (FAT had 20).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): startup 12 (o FAT tinha 16); recovery 19 (o FAT tinha 20)."
    }
   },
   "Kaisen Dankai Raku (Critical Art)": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on block −31 (was −36). Where the cell lists versions, the alternates in parentheses are still FAT's.",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no block −31 (era −36). Onde a célula lista versões, as alternativas entre parênteses continuam sendo do FAT."
    }
   }
  },
  "ken": {
   "Chin Buster 2nd": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11, as \"Chin Buster\") confirms the values shown (on block −14). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026, como \"Chin Buster\") confirma os valores mostrados (no block −14). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   }
  },
  "kimberly": {
   "MP Vagabond Edge": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) confirms the values shown (on block −12). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026) confirma os valores mostrados (no block −12). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   },
   "HP Vagabond Edge": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) confirms the values shown (on block −12). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026) confirma os valores mostrados (no block −12). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   },
   "OD Vagabond Edge": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) confirms the values shown (on block −12). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026) confirma os valores mostrados (no block −12). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   },
   "Arc Step > Bushin Hojin Kick": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11, as \"Bushin Hojin Kick\") confirms the values shown (on block −8). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026, como \"Bushin Hojin Kick\") confirma os valores mostrados (no block −8). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   },
   "OD Arc Step > Bushin Hojin Kick": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11, as \"OD Bushin Hojin Kick\") confirms the values shown (on block −8). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026, como \"OD Bushin Hojin Kick\") confirma os valores mostrados (no block −8). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   },
   "Bushin Beats (0 stock)": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11, as \"SA1 Bushin Beats\") confirms the values shown (on block −25). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026, como \"SA1 Bushin Beats\") confirma os valores mostrados (no block −25). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   },
   "Bushin Beats (1 stock)": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11, as \"Bushin Thunderous Beats\", input 236236 hold K) confirms the values shown (startup 10, recovery 40, on block −25, damage 2200). FAT's blockstun figure gives −39 by the formula; the hub doesn't display blockstun.",
     "pt": "A página da Capcom (salva em 11/11/2026, como \"Bushin Thunderous Beats\", comando 236236 segurando K) confirma os valores mostrados (startup 10, recovery 40, no block −25, dano 2200). O blockstun do FAT dá −39 pela conta; o hub não mostra o blockstun."
    }
   },
   "Bushin Hellchain 2": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): startup 10 (FAT had 15); active frames 2 (FAT had 3); recovery 25 (FAT had 24); on block −10 (FAT had −12).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): startup 10 (o FAT tinha 15); frames ativos 2 (o FAT tinha 3); recovery 25 (o FAT tinha 24); no block −10 (o FAT tinha −12)."
    }
   },
   "Aerial Bushin Senpukyaku": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on hit 5(8) / KD +38(42) (was 4(8) / KD +38(42)); on block 1(4) (was −1(4)). Where the cell lists versions, the alternates in parentheses are still FAT's.",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no hit 5(8) / KD +38(42) (era 4(8) / KD +38(42)); no block 1(4) (era −1(4)). Onde a célula lista versões, as alternativas entre parênteses continuam sendo do FAT."
    }
   },
   "OD Aerial Bushin Senpukyaku": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on hit 5(8) / KD +46(51) (was 4(8) / KD +46(51)); on block 1(4) (was −1(4)). Where the cell lists versions, the alternates in parentheses are still FAT's.",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no hit 5(8) / KD +46(51) (era 4(8) / KD +46(51)); no block 1(4) (era −1(4)). Onde a célula lista versões, as alternativas entre parênteses continuam sendo do FAT."
    }
   },
   "Bushin Scramble": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on block −25(−20) (was −26(−20)). Where the cell lists versions, the alternates in parentheses are still FAT's.",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no block −25(−20) (era −26(−20)). Onde a célula lista versões, as alternativas entre parênteses continuam sendo do FAT."
    }
   },
   "Sprint > Arc Step": {
    "status": "check",
    "detail": {
     "en": "Capcom counts this startup differently (from the follow-up itself, or as several separate hits), so the numbers were not compared one to one and the table keeps FAT's value.",
     "pt": "A Capcom conta esse startup de outro jeito (a partir da própria continuação, ou como vários hits separados), então os números não foram comparados um a um e a tabela mantém o valor do FAT."
    }
   },
   "OD Sprint > Arc Step": {
    "status": "check",
    "detail": {
     "en": "Capcom counts this startup differently (from the follow-up itself, or as several separate hits), so the numbers were not compared one to one and the table keeps FAT's value.",
     "pt": "A Capcom conta esse startup de outro jeito (a partir da própria continuação, ou como vários hits separados), então os números não foram comparados um a um e a tabela mantém o valor do FAT."
    }
   }
  },
  "lily": {
   "Desert Storm Final": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11, as \"Desert Storm (3)\") confirms the values shown (startup 20, recovery 39, on block −23, damage 800). FAT's blockstun figure gives −25 by the formula; the hub doesn't display blockstun.",
     "pt": "A página da Capcom (salva em 11/11/2026, como \"Desert Storm (3)\") confirma os valores mostrados (startup 20, recovery 39, no block −23, dano 800). O blockstun do FAT dá −25 pela conta; o hub não mostra o blockstun."
    }
   }
  },
  "luke": {
   "Stand LK": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) confirms the values shown (on block −2, on hit +3). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026) confirma os valores mostrados (no block −2, no hit +3). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   },
   "Rawhide": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) confirms the values shown (on block −3, on hit +2). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026) confirma os valores mostrados (no block −3, no hit +2). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   },
   "Outlaw Kick": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) confirms the values shown (on block −3, on hit +4). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026) confirma os valores mostrados (no block −3, no hit +4). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   },
   "LP Sand Blast": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 5 (FAT had 6).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 5 (o FAT tinha 6)."
    }
   },
   "OD Flash Knuckle": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 1 (FAT had 3).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 1 (o FAT tinha 3)."
    }
   },
   "Avenger > Impaler": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 1 (was 8). Where the cell lists versions, the alternates in parentheses are still FAT's.",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 1 (era 8). Onde a célula lista versões, as alternativas entre parênteses continuam sendo do FAT."
    }
   },
   "OD Avenger > Impaler": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 1 (was 8). Where the cell lists versions, the alternates in parentheses are still FAT's.",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 1 (era 8). Onde a célula lista versões, as alternativas entre parênteses continuam sendo do FAT."
    }
   }
  },
  "ryu": {
   "Stand HK": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) confirms the values shown (on block +1, on hit +9). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026) confirma os valores mostrados (no block +1, no hit +9). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   },
   "Crouch HP": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): recovery 22 (FAT had 21).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): recovery 22 (o FAT tinha 21)."
    }
   },
   "LK High Blade Kick": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) confirms the values shown (on block −11). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026) confirma os valores mostrados (no block −11). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
    }
   },
   "OD High Blade Kick": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) lists −18 on block, the same as FAT; dood.gg's −11 is the outlier.",
     "pt": "A página da Capcom (salva em 11/11/2026) lista −18 no block, igual ao FAT; o −11 do dood.gg é o valor fora."
    }
   },
   "Short Uppercut": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): recovery 26 (FAT had 25).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): recovery 26 (o FAT tinha 25)."
    }
   },
   "HP Shoryuken": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on block −36 (FAT had −39).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no block −36 (o FAT tinha −39)."
    }
   },
   "OD Hashogeki": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 5 (FAT had 6).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 5 (o FAT tinha 6)."
    }
   },
   "Shin Shoryuken": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on block −52(−54) (was −50(−54)). Where the cell lists versions, the alternates in parentheses are still FAT's.",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no block −52(−54) (era −50(−54)). Onde a célula lista versões, as alternativas entre parênteses continuam sendo do FAT."
    }
   },
   "Shin Shoryuken (Critical Art)": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on block −52(−54) (was −50(−54)). Where the cell lists versions, the alternates in parentheses are still FAT's.",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no block −52(−54) (era −50(−54)). Onde a célula lista versões, as alternativas entre parênteses continuam sendo do FAT."
    }
   }
  },
  "sagat": {
   "High Step Kick": {
    "status": "official",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) confirms the values shown (on block +4, on hit +7). The inconsistency was only in FAT's stun value, which the hub doesn't display.",
     "pt": "A página da Capcom (salva em 11/11/2026) confirma os valores mostrados (no block +4, no hit +7). A inconsistência estava só no valor de stun do FAT, que o hub não mostra."
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
   },
   "Justice Beyond": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): startup 11 (FAT had 15).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): startup 11 (o FAT tinha 15)."
    }
   }
  },
  "akuma": {
   "OD Gou Shoryuken": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on block −39 (FAT had −41).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no block −39 (o FAT tinha −41)."
    }
   },
   "Shun Goku Satsu": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 22 (FAT had 21).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 22 (o FAT tinha 21)."
    }
   },
   "Demon Raid > Demon Low Slash": {
    "status": "check",
    "detail": {
     "en": "Capcom counts this startup differently (from the follow-up itself, or as several separate hits), so the numbers were not compared one to one and the table keeps FAT's value.",
     "pt": "A Capcom conta esse startup de outro jeito (a partir da própria continuação, ou como vários hits separados), então os números não foram comparados um a um e a tabela mantém o valor do FAT."
    }
   }
  },
  "alex": {
   "Sweep Combination 1": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): recovery 43 (FAT had 30).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): recovery 43 (o FAT tinha 30)."
    }
   },
   "Sweep Combination 2": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): recovery 46 (FAT had 33).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): recovery 46 (o FAT tinha 33)."
    }
   }
  },
  "blanka": {
   "Jump HP": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 1 (FAT had 4).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 1 (o FAT tinha 4)."
    }
   },
   "LK Vertical Rolling Attack": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 20 (FAT had 19).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 20 (o FAT tinha 19)."
    }
   },
   "MK Vertical Rolling Attack": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 20 (FAT had 19).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 20 (o FAT tinha 19)."
    }
   },
   "HK Vertical Rolling Attack": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 20 (FAT had 19).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 20 (o FAT tinha 19)."
    }
   },
   "HP Rolling Attack": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): recovery 26 (was 2+23). Where the cell lists versions, the alternates in parentheses are still FAT's.",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): recovery 26 (era 2+23). Onde a célula lista versões, as alternativas entre parênteses continuam sendo do FAT."
    }
   },
   "LK Backstep Rolling Attack": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on hit 9(14) (was 8(14)); on block 3(8) (was 2(8)). Where the cell lists versions, the alternates in parentheses are still FAT's.",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no hit 9(14) (era 8(14)); no block 3(8) (era 2(8)). Onde a célula lista versões, as alternativas entre parênteses continuam sendo do FAT."
    }
   },
   "MK Backstep Rolling Attack": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on hit 8(14) (was 7(14)); on block 2(8) (was 1(8)). Where the cell lists versions, the alternates in parentheses are still FAT's.",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no hit 8(14) (era 7(14)); no block 2(8) (era 1(8)). Onde a célula lista versões, as alternativas entre parênteses continuam sendo do FAT."
    }
   },
   "HK Backstep Rolling Attack": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on hit 8(13) (was 7(13)); on block 4(9) (was 3(9)). Where the cell lists versions, the alternates in parentheses are still FAT's.",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no hit 8(13) (era 7(13)); no block 4(9) (era 3(9)). Onde a célula lista versões, as alternativas entre parênteses continuam sendo do FAT."
    }
   }
  },
  "chun-li": {
   "Jump HK": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 7 (FAT had 5).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 7 (o FAT tinha 5)."
    }
   },
   "Neutral Jump HK": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 5 (FAT had 7).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 5 (o FAT tinha 7)."
    }
   },
   "Soaring Eagle Punches": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): startup 6 (FAT had 16).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): startup 6 (o FAT tinha 16)."
    }
   },
   "Lightning Kick Barrage": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): startup 11 (FAT had 10).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): startup 11 (o FAT tinha 10)."
    }
   }
  },
  "dhalsim": {
   "MP Yoga Flame": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 16 (FAT had 15).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 16 (o FAT tinha 15)."
    }
   },
   "HK Yoga Blast": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on block −3 (FAT had −1).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no block −3 (o FAT tinha −1)."
    }
   }
  },
  "jp": {
   "LK Torbalan": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): startup 22 (FAT had 14).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): startup 22 (o FAT tinha 14)."
    }
   },
   "MK Torbalan": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): startup 26 (FAT had 14).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): startup 26 (o FAT tinha 14)."
    }
   },
   "HK Torbalan": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): startup 26 (FAT had 14).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): startup 26 (o FAT tinha 14)."
    }
   },
   "OD Torbalan": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): startup 22 (FAT had 14).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): startup 22 (o FAT tinha 14)."
    }
   },
   "Lovushka": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): startup 29 (FAT had 1).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): startup 29 (o FAT tinha 1)."
    }
   }
  },
  "marisa": {
   "MP Dimachaerus": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 5 (FAT had 4).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 5 (o FAT tinha 4)."
    }
   }
  },
  "mai": {
   "Kagerou no Mai": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): recovery 51 (FAT had 59).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): recovery 51 (o FAT tinha 59)."
    }
   },
   "Midare Kachousen": {
    "status": "check",
    "detail": {
     "en": "Capcom counts this startup differently (from the follow-up itself, or as several separate hits), so the numbers were not compared one to one and the table keeps FAT's value.",
     "pt": "A Capcom conta esse startup de outro jeito (a partir da própria continuação, ou como vários hits separados), então os números não foram comparados um a um e a tabela mantém o valor do FAT."
    }
   }
  },
  "rashid": {
   "OD Spinning Mixer": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on block −42 (FAT had −53).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no block −42 (o FAT tinha −53)."
    }
   }
  },
  "terry": {
   "Jump MP": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 6 (FAT had 4).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 6 (o FAT tinha 4)."
    }
   },
   "Jump MK": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): active frames 4 (FAT had 6).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): frames ativos 4 (o FAT tinha 6)."
    }
   },
   "LP Rising Tackle": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on block −25 (FAT had −23).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no block −25 (o FAT tinha −23)."
    }
   }
  },
  "zangief": {
   "Tundra Storm": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): startup 5 (FAT had 6); active frames 51 (FAT had 50).",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): startup 5 (o FAT tinha 6); frames ativos 51 (o FAT tinha 50)."
    }
   }
  },
  "e-honda": {
   "OD Sumo Headbutt": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): recovery 20(37) (was 30(37)). Where the cell lists versions, the alternates in parentheses are still FAT's.",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): recovery 20(37) (era 30(37)). Onde a célula lista versões, as alternativas entre parênteses continuam sendo do FAT."
    }
   }
  },
  "yasmine": {
   "Pamumukadkad ng Sampaguita (Critical Art)": {
    "status": "official",
    "detail": {
     "en": "Value from Capcom's official page (saved 2026-11-11): on block −45 (was −48). Where the cell lists versions, the alternates in parentheses are still FAT's.",
     "pt": "Valor da página oficial da Capcom (salva em 11/11/2026): no block −45 (era −48). Onde a célula lista versões, as alternativas entre parênteses continuam sendo do FAT."
    }
   }
  },
  "m-bison": {
   "Somersault Skull Diver": {
    "status": "check",
    "detail": {
     "en": "Capcom lists 29 frames of recovery; FAT lists 10 frames of landing recovery. They measure different things, so the table keeps FAT's value.",
     "pt": "A Capcom lista 29 frames de recovery; o FAT lista 10 frames de recovery na aterrissagem. Eles medem coisas diferentes, então a tabela mantém o valor do FAT."
    }
   }
  },
  "manon": {
   "Grand Fouetté": {
    "status": "check",
    "detail": {
     "en": "Capcom counts this startup differently (from the follow-up itself, or as several separate hits), so the numbers were not compared one to one and the table keeps FAT's value.",
     "pt": "A Capcom conta esse startup de outro jeito (a partir da própria continuação, ou como vários hits separados), então os números não foram comparados um a um e a tabela mantém o valor do FAT."
    }
   }
  }
 },
 "capcomRows": {
  "a-k-i": [
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "akuma": [
   "Demon Gou Zanku",
   "Demon Gou Rasen",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "alex": [
   "Heavy Lariat (hold)",
   "Hyper Bomb",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "arjun": [
   "Breathing Shockwave(projectile)",
   "OD Breathing Shockwave(projectile)",
   "Divine Pillar(projectile)",
   "OD Divine Pillar(projectile)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "blanka": [
   "Electric Thunder (Lightning Beast)",
   "OD Electric Thunder (Lightning Beast)",
   "LP Rolling Attack (Lightning Beast)",
   "MP Rolling Attack (Lightning Beast)",
   "HP Rolling Attack (Lightning Beast)",
   "OD Rolling Attack (Lightning Beast)",
   "LK Vertical Rolling Attack (Lightning Beast)",
   "MK Vertical Rolling Attack (Lightning Beast)",
   "HK Vertical Rolling Attack (Lightning Beast)",
   "OD Vertical Rolling Attack (Lightning Beast)",
   "LK Backstep Rolling Attack (Lightning Beast)",
   "MK Backstep Rolling Attack (Lightning Beast)",
   "HK Backstep Rolling Attack (Lightning Beast)",
   "OD Backstep Rolling Attack (Lightning Beast)",
   "LP Aerial Rolling Attack (Lightning Beast)",
   "MP Aerial Rolling Attack (Lightning Beast)",
   "HP Aerial Rolling Attack (Lightning Beast)",
   "OD Aerial Rolling Attack (Lightning Beast)",
   "Blanka-chan Bomb (Activated)",
   "OD Blanka-chan Bomb (Activated)",
   "Rolling Cannon",
   "Shout of Earth (Lightning Beast)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "c-viper": [
   "High Jump (Forward)",
   "High Jump (Neutral)",
   "Feint (Thunder Dash)",
   "Feint (Seismic Hammer)",
   "Forward Dash (Focus Force)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "cammy": [
   "Razor's Edge Slicer",
   "Razor's Edge Slicer (hold)",
   "OD Razor's Edge Slicer",
   "Cannon Strike (hold)",
   "Reverse Edge (hold)",
   "Fatal Leg Twister (hold)",
   "Silent Step (hold)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "chun-li": [
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "dee-jay": [
   "OD Air Slasher (projectile)",
   "Climactic Strike (Marvelous)",
   "Climactic Strike (Headliner)",
   "Encore Beat (Marvelous)",
   "Encore Beat (Headliner)",
   "Sunrise Festival 2 (failed version)",
   "Sunrise Festival 3 (failed version)",
   "Sunrise Festival 4 (failed version)",
   "Sunrise Festival 5 (failed version)",
   "Sunrise Festival 6 (failed version)",
   "Sunrise Festival 7 (failed version)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "dhalsim": [
   "LP Yoga Comet",
   "MP Yoga Comet",
   "HP Yoga Comet",
   "Yoga Float(immediately)",
   "Yoga Float(Forward)",
   "P Yoga Teleport (Forward)",
   "K Yoga Teleport (Forward)",
   "P Aerial Yoga Teleport (Forward)",
   "K Aerial Yoga Teleport (Forward)",
   "Yoga Teleport (Backward)",
   "P Aerial Yoga Teleport (Backward)",
   "K Aerial Yoga Teleport (Backward)",
   "MP Yoga Inferno",
   "HP Yoga Inferno",
   "Yoga Sunburst (lvl 2)",
   "Yoga Sunburst (lvl 3)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "e-honda": [
   "LP Hundred Hand Slap (Sumo Spirit)",
   "MP Hundred Hand Slap (Sumo Spirit)",
   "HP Hundred Hand Slap (Sumo Spirit)",
   "OD Hundred Hand Slap (Sumo Spirit)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "ed": [
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "elena": [
   "Leopard Snap (Boosted)",
   "Harvest Circle (Boosted)",
   "Mallet Smash (Boosted)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "guile": [
   "LP Sonic Cross (perfect timing)",
   "MP Sonic Cross (perfect timing)",
   "HP Sonic Cross (perfect timing)",
   "OD Sonic Cross1",
   "OD Sonic Cross2",
   "Sonic Break(Single shot)",
   "Sonic Break(Variation)",
   "OD Sonic Break",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "ingrid": [
   "Sun Flare (lvl 1)",
   "Solar Burst (lvl 1)",
   "Shining Sun (lvl 2)",
   "Shining Sun (lvl 3)",
   "Order of the Sun (lvl 2)",
   "Order of the Sun (lvl 3)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "jamie": [
   "Bitter Strikes 1",
   "Bitter Strikes 2",
   "Bitter Strikes 3",
   "Full Moon Kick 2",
   "Full Moon Kick 3",
   "Intoxicated Assault 1",
   "Intoxicated Assault 2",
   "Intoxicated Assault 3",
   "Ransui Haze 1",
   "Ransui Haze 2",
   "Ransui Haze(3rd hit / immediate)",
   "Ransui Haze(3rd hit / delayed)",
   "Ransui Haze(3rd hit / longest possible delay)",
   "LP Freeflow Strikes 1 (Drink level 4)",
   "MP Freeflow Strikes 1 (Drink level 4)",
   "HP Freeflow Strikes 1 (Drink level 4)",
   "OD Freeflow Strikes 1 (Drink level 4)",
   "Freeflow Strikes 2 (Drink level 4)",
   "Freeflow Strikes 3 (Drink level 4)",
   "OD Freeflow Strikes 3 (Drink level 4)",
   "LK Luminous Dive Kick",
   "MK Luminous Dive Kick",
   "HK Luminous Dive Kick",
   "OD Luminous Dive Kick",
   "LK Bakkai",
   "MK Bakkai",
   "HK Bakkai",
   "OD Bakkai",
   "Tenshin",
   "OD Tenshin",
   "Swagger Hermit Punch",
   "OD Swagger Hermit Punch",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "jp": [
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "juri": [
   "Stand LP (Chain combo)",
   "Stand LK (Chain combo)",
   "Stand MP (Chain combo)",
   "Stand MK (Chain combo)",
   "Stand HP (Chain combo)",
   "Stand HK (Chain combo)",
   "Crouch LP (Chain combo)",
   "Crouch LK (Chain combo)",
   "Crouch MP (Chain combo)",
   "Crouch MK (Chain combo)",
   "Crouch HP (Chain combo)",
   "Crouch HK (Chain combo)",
   "Jump LP (Chain combo)",
   "Jump LK (Chain combo)",
   "Jump MP (Chain combo)",
   "Jump MK (Chain combo)",
   "Neutral Jump HK (Chain combo)",
   "Jump HK (Chain combo)",
   "Kyosesho (Chain combo)",
   "Senkai Kick (Chain combo)",
   "Renko Kicks (Chain combo)",
   "Korenzan (Chain combo)",
   "Saihasho (Boosted)",
   "Ankensatsu (Boosted)",
   "Go Ohsatsu (Boosted)",
   "OD Shiren-sen",
   "Feng Shui Engine(Rush)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "ken": [
   "Shoryuken (Quick Dash)",
   "Tatsumaki Senpu-kyaku (Quick Dash)",
   "Dragonlash Kick (Quick Dash)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "kimberly": [
   "Step Up",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "lily": [
   "LK Condor Spire (Windclad)",
   "MK Condor Spire (Windclad)",
   "HK Condor Spire (Windclad)",
   "OD L Condor Spire (Windclad)",
   "OD H Condor Spire (Windclad)",
   "LP Tomahawk Buster (Windclad)",
   "MP Tomahawk Buster (Windclad)",
   "HP Tomahawk Buster (Windclad)",
   "OD Tomahawk Buster (Windclad)",
   "Condor Dive (Windclad)",
   "OD Condor Dive (Windclad)",
   "Thunderbird (Windclad)",
   "Soaring Thunderbird (Windclad)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "luke": [
   "OD Chaser",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "m-bison": [
   "LP Psycho Crusher Attack (when Psycho Mine is embedded)",
   "MP Psycho Crusher Attack (when Psycho Mine is embedded)",
   "HP Psycho Crusher Attack (when Psycho Mine is embedded)",
   "OD Psycho Crusher Attack (when Psycho Mine is embedded)",
   "LP Backfist Combo (when Psycho Mine is embedded)",
   "MP Backfist Combo (when Psycho Mine is embedded)",
   "HP Backfist Combo (when Psycho Mine is embedded)",
   "OD Backfist Combo (when Psycho Mine is embedded)",
   "Devil Reverse (when Psycho Mine is embedded)",
   "OD Devil Reverse (when Psycho Mine is embedded)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "manon": [
   "OD Manège Doré(Attack changes according to Medal level)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "marisa": [
   "Scutum(Physical counter version)",
   "OD Scutum(Physical counter version)",
   "Javelin of Marisa(Physical counter version)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "mai": [
   "LP Kachousen (Boosted)",
   "LP Kachousen (hold) (Boosted)",
   "MP Kachousen (Boosted)",
   "MP Kachousen (hold) (Boosted)",
   "HP Kachousen (Boosted)",
   "HP Kachousen (hold) (Boosted)",
   "OD Kachousen (Boosted)",
   "OD Kachousen (hold) (Boosted)",
   "Midare Kachousen (Boosted)",
   "LK Hishou Ryuuenjin (Boosted)",
   "MK Hishou Ryuuenjin (Boosted)",
   "HK Hishou Ryuuenjin (Boosted)",
   "OD Hishou Ryuuenjin (Boosted)",
   "LP Ryuuenbu (Boosted)",
   "MP Ryuuenbu (Boosted)",
   "HP Ryuuenbu (Boosted)",
   "OD Ryuuenbu (Boosted)",
   "LK Hissatsu Shinobi Bachi (Boosted)",
   "MK Hissatsu Shinobi Bachi (Boosted)",
   "HK Hissatsu Shinobi Bachi (Boosted)",
   "OD Hissatsu Shinobi Bachi (Boosted)",
   "Musasabi no Mai (Boosted)",
   "OD Musasabi no Mai (Boosted)",
   "Kagerou no Mai (Boosted)",
   "Chou Hissatsu Shinobi Bachi (Boosted)",
   "Air Chou Hissatsu Shinobi Bachi (Boosted)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "rashid": [
   "Tempest Moon (Air Current Boosted)",
   "LP Spinning Mixer (Air Current Boosted)",
   "MP Spinning Mixer (Air Current Boosted)",
   "HP Spinning Mixer (Air Current Boosted)",
   "OD Spinning Mixer (Air Current Boosted)",
   "LK Eagle Spike (Air Current Boosted)",
   "MK Eagle Spike (Air Current Boosted)",
   "HK Eagle Spike (Air Current Boosted)",
   "OD Eagle Spike (Air Current Boosted)",
   "LK Whirlwind Shot (hold)",
   "LK Whirlwind Shot(Longest possible button hold)",
   "MK Whirlwind Shot (hold)",
   "MK Whirlwind Shot(Longest possible button hold)",
   "HK Whirlwind Shot (hold)",
   "HK Whirlwind Shot(Longest possible button hold)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "ryu": [
   "Hadoken (Denjin Charge)",
   "OD Hadoken (Denjin Charge)",
   "Hashogeki (Denjin Charge)",
   "OD Hashogeki (Denjin Charge)",
   "Shinku Hadoken (Denjin Charge)",
   "Shin Hashogeki (lvl 2)",
   "Shin Hashogeki (lvl 3)",
   "Shin Hashogeki (lvl 1) (Denjin Charge)",
   "Shin Hashogeki (lvl 2) (Denjin Charge)",
   "Shin Hashogeki (lvl 3) (Denjin Charge)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "sagat": [
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "terry": [
   "Triple Geyser (Dud)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "yasmine": [
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ],
  "zangief": [
   "Stand LP (rapid cancel version)",
   "Crouch LP (rapid cancel version)",
   "Crouch LK (rapid cancel version)",
   "Cyclone Lariat(immediately)",
   "Cyclone Lariat(Movement)",
   "Perfect Parry (strike)",
   "Perfect Parry (projectile)",
   "Parry Drive Rush",
   "Cancel Drive Rush"
  ]
 }
};
