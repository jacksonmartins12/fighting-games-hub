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
   "used": "compared move by move with tools/capcom_compare.py: 1856 of 2133 hub moves matched, 6542 values compared; the 65 that differed now follow Capcom",
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
    "status": "check",
    "detail": {
     "en": "FAT lists on block -25, but blockstun 16 − active 15 − recovery 40 = -39. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter). Not found on Capcom's page under a matching name, so it stays to check.",
     "pt": "O FAT lista no block -25, mas blockstun 16 − ativos 15 − recovery 40 = -39. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque). Não aparece na página da Capcom com um nome correspondente, então continua a conferir."
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
    "status": "check",
    "detail": {
     "en": "FAT lists on block -23, but blockstun 19 − active 5 − recovery 39 = -25. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter). Not found on Capcom's page under a matching name, so it stays to check.",
     "pt": "O FAT lista no block -23, mas blockstun 19 − ativos 5 − recovery 39 = -25. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque). Não aparece na página da Capcom com um nome correspondente, então continua a conferir."
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
 }
};
