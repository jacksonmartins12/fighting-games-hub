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
   "name": "Capcom – official frame data pages",
   "url": "https://www.streetfighter.com/6/",
   "used": "compared move by move with tools/capcom_compare.py: 1648 moves matched, 5106 values compared, 46 differences in 41 moves",
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
    "status": "check",
    "detail": {
     "en": "FAT lists on block -2, but blockstun 18 − active 5 − recovery 17 = -4. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter). Not found on Capcom's page under a matching name, so it stays to check.",
     "pt": "O FAT lista no block -2, mas blockstun 18 − ativos 5 − recovery 17 = -4. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque). Não aparece na página da Capcom com um nome correspondente, então continua a conferir."
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
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: active frames: Capcom 4, FAT 5. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: frames ativos: Capcom 4, FAT 5. A tabela mostra o valor do FAT até isso ser testado no jogo."
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
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: on block: Capcom −45, FAT −44. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: no block: Capcom −45, FAT −44. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "OD Arrow Kick": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: recovery: Capcom 53, FAT 51. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: recovery: Capcom 53, FAT 51. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "OD Freeflow Kicks 2": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: startup: Capcom 14, FAT 16. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: startup: Capcom 14, FAT 16. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "OD Freeflow Kicks 3": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: startup: Capcom 18, FAT 19. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: startup: Capcom 18, FAT 19. A tabela mostra o valor do FAT até isso ser testado no jogo."
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
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: on block: Capcom −31, FAT −36. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: no block: Capcom −31, FAT −36. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "Death Crest 1": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: startup: Capcom 12, FAT 16; recovery: Capcom 19, FAT 20. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: startup: Capcom 12, FAT 16; recovery: Capcom 19, FAT 20. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   }
  },
  "ken": {
   "Chin Buster 2nd": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -14, but blockstun 15 − active 3 − recovery 27 = -15. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter). Not found on Capcom's page under a matching name, so it stays to check.",
     "pt": "O FAT lista no block -14, mas blockstun 15 − ativos 3 − recovery 27 = -15. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque). Não aparece na página da Capcom com um nome correspondente, então continua a conferir."
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
    "status": "check",
    "detail": {
     "en": "FAT lists on block -8, but blockstun 15 − active 6 − recovery 20 = -11. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter). Not found on Capcom's page under a matching name, so it stays to check.",
     "pt": "O FAT lista no block -8, mas blockstun 15 − ativos 6 − recovery 20 = -11. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque). Não aparece na página da Capcom com um nome correspondente, então continua a conferir."
    }
   },
   "OD Arc Step > Bushin Hojin Kick": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -8, but blockstun 15 − active 6 − recovery 20 = -11. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter). Not found on Capcom's page under a matching name, so it stays to check.",
     "pt": "O FAT lista no block -8, mas blockstun 15 − ativos 6 − recovery 20 = -11. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque). Não aparece na página da Capcom com um nome correspondente, então continua a conferir."
    }
   },
   "Bushin Beats (0 stock)": {
    "status": "check",
    "detail": {
     "en": "FAT lists on block -25, but blockstun 16 − active 15 − recovery 40 = -39. One of the two FAT values is wrong, or the move has a property the formula misses (multi-hit, teleport, counter). Not found on Capcom's page under a matching name, so it stays to check.",
     "pt": "O FAT lista no block -25, mas blockstun 16 − ativos 15 − recovery 40 = -39. Um dos dois valores do FAT está errado, ou o golpe tem uma propriedade que a conta não pega (vários hits, teleporte, contra-ataque). Não aparece na página da Capcom com um nome correspondente, então continua a conferir."
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
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: startup: Capcom 10, FAT 15; active frames: Capcom 2, FAT 3; recovery: Capcom 25, FAT 24; on block: Capcom −10, FAT −12. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: startup: Capcom 10, FAT 15; frames ativos: Capcom 2, FAT 3; recovery: Capcom 25, FAT 24; no block: Capcom −10, FAT −12. A tabela mostra o valor do FAT até isso ser testado no jogo."
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
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: active frames: Capcom 5, FAT 6. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: frames ativos: Capcom 5, FAT 6. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "OD Flash Knuckle": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: active frames: Capcom 1, FAT 3. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: frames ativos: Capcom 1, FAT 3. A tabela mostra o valor do FAT até isso ser testado no jogo."
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
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: recovery: Capcom 22, FAT 21. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: recovery: Capcom 22, FAT 21. A tabela mostra o valor do FAT até isso ser testado no jogo."
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
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: recovery: Capcom 26, FAT 25. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: recovery: Capcom 26, FAT 25. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "HP Shoryuken": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: on block: Capcom −36, FAT −39. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: no block: Capcom −36, FAT −39. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "OD Hashogeki": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: active frames: Capcom 5, FAT 6. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: frames ativos: Capcom 5, FAT 6. A tabela mostra o valor do FAT até isso ser testado no jogo."
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
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: startup: Capcom 11, FAT 15. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: startup: Capcom 11, FAT 15. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   }
  },
  "akuma": {
   "OD Gou Shoryuken": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: on block: Capcom −39, FAT −41. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: no block: Capcom −39, FAT −41. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "Shun Goku Satsu": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: active frames: Capcom 22, FAT 21. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: frames ativos: Capcom 22, FAT 21. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   }
  },
  "alex": {
   "Sweep Combination 1": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: recovery: Capcom 43, FAT 30. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: recovery: Capcom 43, FAT 30. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "Sweep Combination 2": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: recovery: Capcom 46, FAT 33. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: recovery: Capcom 46, FAT 33. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   }
  },
  "blanka": {
   "Jump HP": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: active frames: Capcom 1, FAT 4. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: frames ativos: Capcom 1, FAT 4. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "LK Vertical Rolling Attack": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: active frames: Capcom 20, FAT 19. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: frames ativos: Capcom 20, FAT 19. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "MK Vertical Rolling Attack": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: active frames: Capcom 20, FAT 19. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: frames ativos: Capcom 20, FAT 19. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "HK Vertical Rolling Attack": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: active frames: Capcom 20, FAT 19. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: frames ativos: Capcom 20, FAT 19. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   }
  },
  "chun-li": {
   "Jump HK": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: active frames: Capcom 7, FAT 5. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: frames ativos: Capcom 7, FAT 5. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "Neutral Jump HK": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: active frames: Capcom 5, FAT 7. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: frames ativos: Capcom 5, FAT 7. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "Soaring Eagle Punches": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: startup: Capcom 6, FAT 16. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: startup: Capcom 6, FAT 16. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "Lightning Kick Barrage": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: startup: Capcom 11, FAT 10. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: startup: Capcom 11, FAT 10. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   }
  },
  "dhalsim": {
   "MP Yoga Flame": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: active frames: Capcom 16, FAT 15. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: frames ativos: Capcom 16, FAT 15. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "HK Yoga Blast": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: on block: Capcom −3, FAT −1. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: no block: Capcom −3, FAT −1. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   }
  },
  "jp": {
   "LK Torbalan": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: startup: Capcom 22, FAT 14. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: startup: Capcom 22, FAT 14. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "MK Torbalan": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: startup: Capcom 26, FAT 14. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: startup: Capcom 26, FAT 14. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "HK Torbalan": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: startup: Capcom 26, FAT 14. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: startup: Capcom 26, FAT 14. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "OD Torbalan": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: startup: Capcom 22, FAT 14. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: startup: Capcom 22, FAT 14. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "Lovushka": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: startup: Capcom 29, FAT 1. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: startup: Capcom 29, FAT 1. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   }
  },
  "marisa": {
   "MP Dimachaerus": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: active frames: Capcom 5, FAT 4. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: frames ativos: Capcom 5, FAT 4. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   }
  },
  "mai": {
   "Kagerou no Mai": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: recovery: Capcom 51, FAT 59. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: recovery: Capcom 51, FAT 59. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   }
  },
  "rashid": {
   "OD Spinning Mixer": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: on block: Capcom −42, FAT −53. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: no block: Capcom −42, FAT −53. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   }
  },
  "terry": {
   "Jump MP": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: active frames: Capcom 6, FAT 4. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: frames ativos: Capcom 6, FAT 4. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "Jump MK": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: active frames: Capcom 4, FAT 6. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: frames ativos: Capcom 4, FAT 6. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   },
   "LP Rising Tackle": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: on block: Capcom −25, FAT −23. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: no block: Capcom −25, FAT −23. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   }
  },
  "zangief": {
   "Tundra Storm": {
    "status": "conflict",
    "detail": {
     "en": "Capcom's page (saved 2026-11-11) and FAT differ: startup: Capcom 5, FAT 6; active frames: Capcom 51, FAT 50. The table shows FAT's value until this is tested in game.",
     "pt": "A página da Capcom (salva em 11/11/2026) e o FAT divergem: startup: Capcom 5, FAT 6; frames ativos: Capcom 51, FAT 50. A tabela mostra o valor do FAT até isso ser testado no jogo."
    }
   }
  }
 }
};
