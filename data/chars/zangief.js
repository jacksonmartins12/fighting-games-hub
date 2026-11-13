// Zangief: guide + full frame data.
(window.HUB_DATA = window.HUB_DATA || {});
(HUB_DATA.chars = HUB_DATA.chars || {})["zangief"] = {
  "guide": {
    "slug": "zangief",
    "name": "Zangief",
    "release": {
      "en": "Base game (June 2023)",
      "pt": "Jogo base (junho de 2023)"
    },
    "archetype": "grappler",
    "difficulty": 3,
    "difficulty_why": {
      "en": "The 360 motion takes practice (jump-cancel or buffer it), and his gameplan is mostly reads and patience against faster, longer-ranged characters.",
      "pt": "O movimento de 360 exige prática (cancelar no pulo ou bufferizar), e o gameplan depende de leitura e paciência contra personagens mais rápidos e de mais alcance."
    },
    "summary": {
      "en": "Zangief is the classic grappler: slow, huge health (11000) and the most damaging command throws in the game. He wins by walking in, making the opponent afraid to press buttons, and landing a 5-frame Screw Piledriver.",
      "pt": "O Zangief é o grappler clássico: lento, com muita vida (11000) e os command throws mais fortes do jogo. Ele vence andando para frente, deixando o oponente com medo de apertar botão e acertando um Screw Piledriver de 5 frames."
    },
    "strengths": [
      {
        "en": "Screw Piledriver starts in 5 frames and leaves a hard knockdown, so every close-range guess pays big.",
        "pt": "O Screw Piledriver sai em 5 frames e deixa hard knockdown, então cada adivinhação de perto rende muito."
      },
      {
        "en": "Plus-on-block lights (5LP +2, 2LP +1) create a true strike/throw mixup up close.",
        "pt": "Golpes fracos com vantagem no block (5LP +2, 2LP +1) criam um mixup real de golpe ou throw de perto."
      },
      {
        "en": "Highest health in the cast and SA3 Bolshoi Storm Buster is effectively unreactable once the super freeze starts.",
        "pt": "Maior vida do elenco, e o SA3 Bolshoi Storm Buster é praticamente impossível de reagir depois que o super congela a tela."
      }
    ],
    "weaknesses": [
      {
        "en": "Slow walk and no projectile: zoners and runaway characters make him work to get in.",
        "pt": "Anda devagar e não tem projétil: zoners e personagens que fogem o fazem suar para chegar perto."
      },
      {
        "en": "Several big buttons are very punishable (2HP -20, 2HK -13, Double Lariat -12 on block).",
        "pt": "Vários botões grandes são muito puníveis (2HP -20, 2HK -13, Double Lariat -12 no block)."
      },
      {
        "en": "No fast invincible special reversal; on defense he relies on Drive Reversal and supers.",
        "pt": "Não tem especial invencível rápido para reversal; na defesa, ele depende de Drive Reversal e das supers."
      }
    ],
    "gameplan": {
      "en": "In neutral, walk forward behind 2MK (the longest-reaching crouching MK in the game per FAT) and 5HK, and use Double Lariat (projectile-invincible) or Drive Rush to get past fireballs. Once close, your turn is built on 5LP and 2LP being plus on block: block a jab and Zangief can either hit again or grab with Screw Piledriver, and 6HP Headbutt is +4 on block for extra pressure. If the opponent starts pressing, hit them; if they hold block, grab them; if they jump, Double Lariat or SA1 catches them. Every command throw gives a hard knockdown, so walk back in and repeat. On defense, block patiently, use 2LK (4 frames) to interrupt gaps, and save meter for SA3 or Drive Reversal.",
      "pt": "No neutral, ande para frente usando o 2MK (o chute médio agachado de maior alcance do jogo, segundo o FAT) e o 5HK, e use o Double Lariat (invencível a projéteis) ou Drive Rush para passar das fireballs. De perto, o seu turno se baseia no 5LP e no 2LP terem vantagem no block: depois de um jab defendido, o Zangief pode bater de novo ou agarrar com o Screw Piledriver, e o 6HP Headbutt é +4 no block para mais pressão. Se o oponente apertar botão, bata; se ele segurar o block, agarre; se ele pular, o Double Lariat ou o SA1 pegam. Cada command throw dá hard knockdown, então ande de volta e repita. Na defesa, defenda com paciência, use o 2LK (4 frames) para interromper gaps e guarde barra para o SA3 ou para o Drive Reversal."
    },
    "key_moves": [
      {
        "name": "Screw Piledriver",
        "input": "360P",
        "classic": "360+P",
        "role": {
          "en": "5-frame command throw, the core of his offense. LP has the most range, HP the most damage. Buffer the 360 during a jab or blockstring.",
          "pt": "Command throw de 5 frames, o núcleo do ataque dele. O LP tem mais alcance, o HP, mais dano. Bufferize o 360 durante um jab ou blockstring."
        }
      },
      {
        "name": "Double Lariat",
        "input": "PP",
        "classic": "PP",
        "role": {
          "en": "Projectile-invincible (frames 6-45) and air-invincible (6-16) spin; goes through fireballs, anti-airs and ends combos. -12 on block.",
          "pt": "Giro invencível a projéteis (frames 6-45) e a ataques aéreos (6-16); atravessa fireballs, faz anti-air e fecha combos. -12 no block."
        }
      },
      {
        "name": "Russian Suplex / Siberian Express",
        "input": "63214K",
        "classic": "HCB+K",
        "role": {
          "en": "Up close it is a 10-frame command throw that switches sides (corner carry); from far it becomes the slow running Siberian Express (55f), a rare surprise read.",
          "pt": "De perto é um command throw de 10 frames que troca de lado (leva ao canto); de longe vira o Siberian Express, corrida lenta (55f), só como leitura surpresa."
        }
      },
      {
        "name": "Borscht Dynamite",
        "input": "j.360K",
        "classic": "j.360+K",
        "role": {
          "en": "Air command throw (4f) that can be done right as you leave the ground; a jump-in mixup against players who block.",
          "pt": "Command throw aéreo (4f) que pode sair logo que ele deixa o chão; mixup no pulo contra quem fica defendendo."
        }
      },
      {
        "name": "SA1 Aerial Russian Slam",
        "input": "236236K",
        "classic": "QCFx2+K",
        "role": {
          "en": "Anti-air grab super, fully invincible frames 1-17; only hits airborne opponents.",
          "pt": "Super de agarrão anti-air, totalmente invencível nos frames 1-17; só pega oponente no ar."
        }
      },
      {
        "name": "SA2 Cyclone Lariat",
        "input": "236236P",
        "classic": "QCFx2+P",
        "role": {
          "en": "Invincible (1-18) spinning super that pulls the opponent in; good to blow through projectiles, but too slow to reversal fast buttons.",
          "pt": "Super giratório invencível (1-18) que puxa o oponente; bom contra projéteis, mas lento demais como reversal contra botões rápidos."
        }
      },
      {
        "name": "SA3 Bolshoi Storm Buster",
        "input": "720P",
        "classic": "720+P",
        "role": {
          "en": "Command-grab super whose startup happens before the freeze, so it is effectively unescapable once activated up close. His best reversal.",
          "pt": "Super de command grab cujo startup acontece antes do congelamento, então é praticamente inescapável quando ativado de perto. É o melhor reversal dele."
        }
      }
    ],
    "key_normals": [
      {
        "move": "5LP",
        "classic": "s.LP",
        "startup": 7,
        "on_block": 2,
        "on_hit": 4,
        "role": {
          "en": "+2 on block jab that sets up the strike/throw mixup with Screw Piledriver; chains into his other lights.",
          "pt": "Jab +2 no block que monta o mixup golpe/throw com o Screw Piledriver; faz chain nos outros golpes fracos."
        }
      },
      {
        "move": "2MK",
        "classic": "c.MK",
        "startup": 9,
        "on_block": -2,
        "on_hit": 3,
        "role": {
          "en": "Long low poke with great hitbox; main footsies tool.",
          "pt": "Poke baixo longo com ótimo hitbox; principal ferramenta de footsies."
        }
      },
      {
        "move": "6HP",
        "classic": "f.HP (Headbutt)",
        "startup": 14,
        "on_block": 4,
        "on_hit": 8,
        "role": {
          "en": "+4 on block, cancelable heavy for pressure, oki and combos (6HP, 3MP > PP).",
          "pt": "Golpe forte cancelável e +4 no block para pressão, oki e combos (6HP, 3MP > PP)."
        }
      },
      {
        "move": "5HK",
        "classic": "s.HK",
        "startup": 13,
        "on_block": 1,
        "on_hit": 3,
        "role": {
          "en": "Plus on block long kick; also a horizontal anti-air (leg air-invincible) but cannot hit crouchers.",
          "pt": "Chute longo com vantagem no block; também é anti-air horizontal (perna invencível a aéreos), mas não pega agachado."
        }
      }
    ],
    "anti_air": {
      "en": "Against jumps from mid range use 5HK (leg invincible to air attacks frames 13-22, launches on Punish Counter) or Double Lariat (air-invincible frames 6-16, but slow). With meter, SA1 Aerial Russian Slam is a fully invincible anti-air grab. Do not use 2LP as an anti-air: its upper hurtbox is deliberately vulnerable to air attacks.",
      "pt": "Contra pulos da média distância, use o 5HK (perna invencível a ataques aéreos nos frames 13-22, lança em Punish Counter) ou o Double Lariat (invencível a aéreos nos frames 6-16, mas lento). Com barra, o SA1 Aerial Russian Slam é um agarrão anti-air totalmente invencível. Não use o 2LP como anti-air: a hurtbox de cima dele é vulnerável a aéreos de propósito."
    },
    "combos": [
      {
        "label": {
          "en": "Basic light confirm",
          "pt": "Confirm básico com golpe fraco"
        },
        "route": "2LK, 2LP > PP",
        "notes": {
          "en": "Meterless, 1470 damage, ends in Double Lariat for a knockdown.",
          "pt": "Sem barra, 1470 de dano, termina em Double Lariat para knockdown."
        }
      },
      {
        "label": {
          "en": "Headbutt punish",
          "pt": "Punish com Headbutt"
        },
        "route": "6HP, 3MP > PP",
        "notes": {
          "en": "Meterless, 2510 damage. 3MP (Hellstab) links after Headbutt.",
          "pt": "Sem barra, 2510 de dano. O 3MP (Hellstab) linka depois do Headbutt."
        }
      },
      {
        "label": {
          "en": "Drive Rush medium confirm",
          "pt": "Confirm médio com Drive Rush"
        },
        "route": "2MP > DR 2MP, 3MP > PP",
        "notes": {
          "en": "3 Drive bars, 2665 damage; midscreen medium buffer.",
          "pt": "3 barras de Drive, 2665 de dano; buffer de médio no meio da tela."
        }
      }
    ],
    "tips": [
      {
        "en": "Buffer the 360 inside a jab (5LP or 2LP) or do it as a jump-cancel: 2 then a circle ending in up, pressing P before you leave the ground.",
        "pt": "Bufferize o 360 dentro de um jab (5LP ou 2LP) ou faça cancelando o pulo: vá para 2, gire terminando em cima e aperte P antes de sair do chão."
      },
      {
        "en": "Tundra Storm (22HK) counters grounded kicks (active frames 5-55); use it only as a read against an opponent who loves low kicks.",
        "pt": "O Tundra Storm (22HK) dá counter em chutes no chão (ativo nos frames 5-55); use só como leitura contra quem abusa de chute baixo."
      },
      {
        "en": "After a Screw Piledriver (HKD +28 to +30), walk forward and meaty 5LP or repeat the guess; the opponent has to respect both.",
        "pt": "Depois do Screw Piledriver (HKD +28 a +30), ande para frente e dê 5LP meaty ou repita a adivinhação; o oponente tem que respeitar os dois."
      }
    ],
    "counterplay": {
      "en": "Keep him out with fireballs and long pokes, and back up instead of pressing when he is close. When you expect Screw Piledriver, jump or backdash; when you expect a button, block. Punish his big moves: 2HP is -20, 2HK -13, Double Lariat -12 on block. Do not throw fireballs point blank into Double Lariat.",
      "pt": "Mantenha ele longe com fireballs e pokes longos, e recue em vez de apertar botão quando ele estiver perto. Se espera Screw Piledriver, pule ou dê backdash; se espera golpe, defenda. Puna os golpes grandes: o 2HP é -20, 2HK -13, Double Lariat -12 no block. Não solte fireball colado contra o Double Lariat."
    },
    "sources": [
      "https://www.streetfighter.com/6/character/zangief/frame",
      "https://github.com/D4RKONION/FAT/blob/master/src/js/constants/framedata/SF6FrameData.json",
      "https://github.com/D4RKONION/FAT/blob/master/src/js/constants/combos/SF6Combos.json"
    ],
    "data_note": {
      "en": "Frame data from the FAT open data (D4RKONION/FAT, v5.9.0, repo snapshot 2026-06-14), cross-checked against the official Capcom frame data page (read 2026-10-02; the page shows no patch date). Combos are taken from FAT's SF6 combo list. Values may change with patches; check in training mode. Rechecked on October 23, 2026 against FAT's post-patch data (October 22 update): every key normal value matches, and the combos that use moves changed by the August 2026 patch were checked against the new numbers.",
      "pt": "Frame data do FAT (dados abertos D4RKONION/FAT, v5.9.0, snapshot de 14/06/2026), conferida com a página oficial de frame data da Capcom (lida em 02/10/2026; a página não mostra data de patch). Combos tirados da lista de combos SF6 do FAT. Os valores podem mudar com patches; confira no training mode. Revisado em 23 de outubro de 2026 com os dados pós-patch do FAT (atualização de 22 de outubro): todos os valores dos normais principais conferem, e os combos que usam golpes alterados pelo patch de agosto de 2026 foram conferidos com os números novos."
    }
  },
  "frames": {
    "m": [
      ["Stand LP","5LP","LP","n",7,3,9,4,2,400,"ch sp su","",0,"1.51~1.56","20% Start",null],
      ["Stand MP","5MP","MP","n",9,4,17,2,-2,700,"tc","",0,1.66,null,null],
      ["Stand HP","5HP","HP","n",16,3,"22(24)",3,-3,1000,"","",0,"2.136~2.186",null,null],
      ["Stand HP (hold)","5HP (hold)","HP (hold)","n","32(10)",3,"22(24)","KD +40",3,1400,"","var",0,"2.396~2.446",null,null],
      ["Stand LK","5LK","LK","n",7,2,17,-2,-4,400,"sp su","",0,"1.657~1.668","20% Start",null],
      ["Stand MK","5MK","MK","n",10,4,19,1,-4,900,"","",0,1.778,null,null],
      ["Stand HK","5HK","HK","n",13,4,21,3,1,1000,"","",0,1.892,null,"Zangief's kicking leg is invincible to airborne strikes on frames 13-22 The brief extended leg hurtbox on frame 12 of start-up (1F before active) is strike invincible (cannot counter-poke projectiles)"],
      ["Crouch LP","2LP","d+LP","n",6,2,8,6,1,300,"ch sp su","",0,1.52,"20% Start",null],
      ["Crouch MP","2MP","d+MP","n",8,3,16,3,-1,700,"sp su","",0,1.49,null,"Topmost hurtboxes on frames 1-7 are vulnerable only to airborne attacks (this is to discourage its use as an anti-air) and Projectile invincible on frames 1-15 (avoids Sagat's MP/HP Tiger Shot)"],
      ["Crouch HP","2HP","d+HP","n",11,9,35,"KD +20",-20,1000,"","",0,1.68,null,"Zangief's head hurtbox is invincible to airborne strikes on frames 10-19 (helps with anti-airing)"],
      ["Crouch LK","2LK","d+LK","n",4,3,12,0,-3,250,"ch","",0,1.39,"20% Start",null],
      ["Crouch MK","2MK","d+MK","n",9,3,18,3,-2,700,"","",0,1.777,"20% Start",null],
      ["Crouch HK","2HK","d+HK","n",12,3,27,"KD +36",-13,1000,"","",0,1.955,null,null],
      ["Jump LP","8LP","u+LP","n",5,7,null,11,8,300,"","",0,1.34,null,null],
      ["Jump MP","8MP","u+MP","n",8,5,null,"10~14","7~11",700,"","",0,1.33,null,null],
      ["Jump HP","8HP","u+HP","n",9,6,null,"15~21 (KD)","7~13",800,"","",0,1.27,null,null],
      ["Jump LK","8LK","u+LK","n",5,10,null,"2~11","-1~8",300,"","",0,0.64,null,null],
      ["Jump MK","8MK","u+MK","n",8,8,null,"6~14","3~11",500,"","",0,1.12,null,null],
      ["Jump HK","8HK","u+HK","n",10,7,null,"12~15","8~11",800,"","",0,1.26,null,null],
      ["Jump HK (hold)","8HK (hold)","u+HK (hold)","n",32,6,"12(20)","Wall Splat +1(+33)","-30(-43)",1500,"","var",0,1.32,null,null],
      ["Flying Body Press","7 or 8 or 9 > 2HP","u,d+HP","n",9,9,8,"14~18","10~14",800,"","",0,0.81,"Combo (2 hits)",null],
      ["Flying Headbutt","8 > 8HP","Neutral Jump > u+HP","n",8,4,null,"18~21","13~16",900,"sp","",0,0.98,null,null],
      ["Hellstab","3MP","df+MP","n",7,3,21,-1,-3,800,"sp su","",0,1.334,null,"Extended arm is invincible to airborne strikes on frames 7-12 (not an ideal anti-air since there's still a head hurtbox)"],
      ["Knee Hammer","6MK","f+MK","n",14,7,13,"1(7)","-4(2)",700,"","",0,"1.451~1.734",null,null],
      ["Headbutt","6HP","f+HP","n",14,5,"15(17)",8,4,1000,"sp su","",0,"1.521~1.601","25% Start / Combo (2 hits)",null],
      ["Cyclone Wheel Kick","6HK","f+HK","n","22(24)","7(5)",25,"KD +28(32)","-9(-5)",1300,"","",0,"2.56~2.936",null,null],
      ["Smetana Dropkick","3HK","df+HK","n",16,4,40,"KD +21",-18,1000,"","",0,"1.874~1.964",null,"Throw invincible and low crushes on frames 5-26"],
      ["Machine Gun Chops 1","5MP > MP","MP > MP","n",9,4,20,2,-6,600,"tc","",0,1.66,null,null],
      ["Machine Gun Chops 2","5MP > MP > MP","MP > MP > MP","n",15,3,32,"KD +27",-17,900,"","",0,1.9,null,null],
      ["Stomp","22MK","d,d+MK","n",9,3,17,4,-3,500,"sp su tc","",0,1.304,"20% Start",null],
      ["Power Stomps 1","22MK > MK","d,d+MK > MK","n",9,3,19,-3,-4,500,"sp su tc","",0,1.384,null,null],
      ["Power Stomps 2","22MK > MK > MK","d,d+MK > MK > MK","n",10,3,24,-2,-10,700,"sp su","",0,1.646,null,null],
      ["Stand LP (rapid cancel version)","5LP","LP","n",4,3,9,4,2,400,"sp su","state",0,null,"Starter scaling 20%",null],
      ["Crouch LP (rapid cancel version)","2LP","d+LP","n",3,2,8,6,1,300,"sp su","state",0,null,"Starter scaling 20%",null],
      ["Crouch LK (rapid cancel version)","2LK","d+LK","n",3,3,12,0,-3,250,"","state",0,null,"Starter scaling 20%",null],
      ["Bodyslam","5LPLK","LP+LK","t",5,3,23,"KD +22(0)",null,"1200(1200*600)","","",0,1.02,"20% Immediate",null],
      ["German Suplex","6LPLK","f+LP+LK","t",5,3,23,"KD +10",null,1500,"","",0,1.02,"20% Immediate",null],
      ["Capture Suplex","4LPLK","b+LP+LK","t",5,3,23,"KD +8",null,1400,"","",0,1.02,"20% Immediate",null],
      ["Brain Buster","2LPLK","d+LP+LK","t",5,3,23,"KD +14",null,1500,"","",0,1.02,"20% Immediate",null],
      ["Spinebuster","3LPLK","df+LP+LK","t",5,3,23,"KD +28",null,1200,"","",0,1.02,"20% Immediate",null],
      ["Russian Drop","1LPLK","db+LP+LK","t",5,3,23,"KD +9",null,1500,"","",0,1.02,"20% Immediate",null],
      ["Drive Impact: Double Russian Chop","HPHK","HP+HK","d",26,2,35,"KD (notes)",-3,800,"","",0,2.496,"20% Start",null],
      ["Drive Reversal: Reverse Russian Kick","6HPHK","f+HP+HK","d","20(18)",3,26,"KD +23",-6,500,"","",0,2.1,null,"Fully invincible on frames 1-22 (blockstun) / frames 1-20 (reversal) Guaranteed to interrupt any Drive Rush canceled normal if performed immediately out of blockstun (unless the opponent reacts with an invincible move or counter)"],
      ["Drive Parry","MPMK","MP+MK","d",1,"12(2)","33(1)notes",null,null,null,"","",0,null,"50% Multiplier (Perfect)","Throw invincible during the recovery of a successful parry (just like during blockstun) Fully invincible for 6F after a successful Perfect Parry against a strike, which carries over to any attack you perform (ensuring a 5F or faster punish will always interrupt multi-hit attacks)"],
      ["Drive Rush","MPMK / 66 (cancel)","MP+MK / f,f (cancel)","d","9(11)","45(46)","24(23)",null,null,null,"","var",0,null,"15% Multiplier (Mid-Combo)",null],
      ["Perfect Parry (strike)","MPMK","MPMK","d",1,null,1,null,null,0,"","",0,null,"Starter scaling 50%","Perfect Parry activates when an attack is absorbed on the frame a parry is input, or on the next frame. (For high and overhead attacks, the player must press the direction away from the opponent. For low attacks, down and back) If no direction is inputted the result will be a regular parry with an additional Drive increase of 3000. Fully invincible for 5 frames once recovery is over (invincibility not granted if you continue the parry) The player on the receiving end of a Perfect Parry cannot cancel and is forced into a Punish Counter state until their move is finished"],
      ["Perfect Parry (projectile)","MPMK","MPMK","d",1,null,10,null,null,0,"","",0,null,"Starter scaling 50%",null],
      ["Parry Drive Rush","66","f,f","d",null,null,"45 total",null,null,0,"","",0,null,"Multiplier scaling 15%",null],
      ["Cancel Drive Rush","66 or (5 or 6) MPMK","66 or (5 or 6) MPMK","d",null,null,"46 total",null,null,0,"","",0,null,"Multiplier scaling 15%",null],
      ["Double Lariat","PP","PP","s",15,"2(3)2(4)2(8)2(6)2",27,"KD +27(56)","-12(-41)",1400,"su3","",0,"1.17~1.38 (5PP) / 1.24~1.90 (6PP)",null,"Invincible to airborne strikes on frames 6-16 (great anti-air tool on the first hit, although slow in start-up) Projectile invincible on frames 6-45"],
      ["OD Double Lariat","PPP","PPP","s",12,"2(1)3(3)2(6)2(4)2",26,"KD +38(57)","-11(-30)","1700 (700*1000)","su2 su3","",0,"1.17~1.38 (5PPP) / 1.32~2.06 (6PPP)",null,"Invincible to airborne strikes on frames 6-13 (great anti-air tool on the first hit) Projectile invincible on frames 1-36"],
      ["LP Screw Piledriver","4268LP","360+LP","s",5,3,54,"HKD +30",null,"2500(2875)","","",0,1.62,"10% Immediate",null],
      ["MP Screw Piledriver","4268MP","360+MP","s",5,3,54,"HKD +28",null,"2900(3335)","","",0,1.47,"10% Immediate",null],
      ["HP Screw Piledriver","4268HP","360+HP","s",5,3,54,"HKD +28",null,"3300(3795)","","",0,1.22,"10% Immediate",null],
      ["OD Screw Piledriver","4268PP","360+PP","s",5,3,54,"HKD +28",null,"3400(3910)","","",0,1.58,null,null],
      ["Borscht Dynamite","4268K (air)","360+K (air)","s",4,3,16,"HKD +19",null,"2900(3260)","","air",0,1.46,"20% Immediate",null],
      ["OD Borscht Dynamite","4268KK (air)","360+KK (air)","s",4,3,16,"HKD +19",null,"3000(3375)","","air",0,1.64,"10% Immediate",null],
      ["Russian Suplex (close)","624HK / 624K (close)","hcb+HK / hcb+K (close)","s",10,2,50,"HKD +26",null,"2600~2900(2990~3335)","","",0,1.14,"10% Immediate",null],
      ["OD Russian Suplex (close)","624KK (close)","hcb+KK (close)","s",10,2,50,"HKD +27",null,"3200(3680)","","",0,1.14,null,null],
      ["Siberian Express (near)","624K (near)","hcb+K (near)","s",28,2,41,"HKD +29",null,"2700(3105)","","",0,2.93,null,null],
      ["OD Siberian Express (near)","624KK (near)","hcb+KK (near)","s",23,2,44,"HKD +29",null,"3000(3450)","","",0,2.93,null,null],
      ["Siberian Express (far)","624K (far)","hcb+K (far)","s","55(81)",2,40,"HKD +29",null,"2700(3105)","","var",0,"Run + 1.64",null,null],
      ["OD Siberian Express (far)","624KK (far)","hcb+KK (far)","s","54(81)",2,40,"HKD +29",null,"3000(3450)","","var",0,"Run + 1.64",null,null],
      ["Tundra Storm","22HK","d,d+HK","s",5,51,24,"HKD +5",null,2400,"","ctr",0,null,null,"A successful counter results in a throw hitbox, which can make this attack whiff on airborne or throw invincible opponents)"],
      ["Aerial Russian Slam","236236K","qcf,qcf+K","u",11,7,"13+47","HKD +29",null,"3500 (1100*2400)","","",0,"2.215~2.764","30% Minimum / 20% Immediate","Fully invincible on frames 1-17"],
      ["Cyclone Lariat","236236P","qcf,qcf+P","u",18,"91(8)3",52,"HKD +5(1)",-35,"3160 (3060)","","",0,"2.913~3.00","40% Minimum","Fully invincible on frames 1-18 Projectile invincible on frames 19-119"],
      ["Cyclone Lariat (hold)","236236P (hold)","qcf,qcf+P","u",18,"94(8)3","52(25)","KD +87",-35,"1100 (0*60x9*560)","","var",0,"2.913~3.00","40% Minimum","Fully invincible on frames 1-18 Projectile invincible on frames 19-122"],
      ["Bolshoi Storm Buster","42684268P","720+P","u","6+0",2,116,"HKD +26",null,4800,"","",0,"1.56~1.60","50% Minimum / 10% Immediate","Fully invincible on frames 1-7"],
      ["Bolshoi Storm Buster (Critical Art)","42684268P (CA)","720+P (CA)","u","6+0",2,116,"HKD +26",null,5300,"","",0,"1.61~1.65","50% Minimum / 10% Immediate","Fully invincible on frames 1-7"],
      ["Cyclone Lariat(immediately)","236236P","qcf,qcf+P","u",null,null,null,"KD",null,3100,"","",0,null,null,null],
      ["Cyclone Lariat(Movement)","236236P","qcf,qcf+P","u",null,null,null,"KD",null,3000,"","",0,null,null,null]
    ],
  "s": {
      "fastestNormal": "4f",
      "bestReversal": "Bolshoi Storm Buster",
      "fDash": "22",
      "bDash": "25",
      "health": "11000",
      "jump": "5+38+3",
      "throwRange": "1.02"
    }
  },
  "lab": {"by":"Iori (SF6 Lab)","url":"https://sf6-lab.net/en/fighters/zangief/combo","updated":"2026-08-31","balance":"2026-08-03","secs":[{"t":"Notation","arts":[{"h":"","ps":[{"k":"p","l":["DR = Parry Drive Rush","CDR = Cancel Drive Rush","PC = Punish Counter","CH = Counter Hit"]},{"k":"r","l":[{"s":"Hellstab = 3MP ー ー = 6MK"},{"s":"Headbutt = 6HP"},{"r":"Power Stomps = 2cr.MK > MK > MK"},{"s":"Double Lariat = PP"},{"s":"ODDouble Lariat = PPP"},{"s":"Screw Piledriver = +P"},{"s":"Borscht Dynamite = during +K"},{"s":"Russian Suplex /"},{"s":"Siberian Express = 63214K"}]}]}]},{"t":"Key changes in the 2026-8-3 version","arts":[{"h":"Power Stomps","ps":[{"k":"p","l":["• The first hit can now be canceled into special moves.","• First hit: 9F startup / +4 on hit / -3 on block","• 20% starter scaling on the first hit","• Smaller hurtbox around the feet"]}]},{"h":"Double Lariat","ps":[{"k":"p","l":["• Forward/back input adjusts position during the attack.","• More reliable in combos near the tip of its range."]}]},{"h":"Heavy Russian Suplex","ps":[{"k":"p","l":["• Easier to get Russian Suplex regardless of distance, reducing accidental Siberian Express inputs."]}]}]},{"t":"10 essential starter combos","arts":[{"h":"1 Light attacks into OD Double Lariat","ps":[{"k":"r","l":[{"r":"cr.LK > st.LP > OD Double Lariat"},{"s":["• Approximately +38F after OD Double Lariat","• Aproximadamente +38F depois do OD Double Lariat"]}]}]},{"h":"2 Light attacks into Drive Rush and regular Double Lariat","ps":[{"k":"r","l":[{"r":"cr.LK > st.LP > CDR > cr.LP > 3MP > Double Lariat"},{"s":["• Approximately +27F after the ender","• Aproximadamente +27F depois do final"]}]}]},{"h":"3 st.LK Counter Hit confirm","ps":[{"k":"r","l":[{"r":"st.LK CH / PC > CDR > cr.MP > 3MP > Double Lariat"}]}]},{"h":"4 Basic Hellstab route","ps":[{"k":"r","l":[{"r":"3MP > Double Lariat"},{"s":["• 7F startup","• Startup de 7F"]},{"s":["• Forces standing","• Força o oponente a ficar em pé"]},{"s":["• Special-cancelable","• Cancela em especial"]}]}]},{"h":"5 Basic Headbutt route","ps":[{"k":"r","l":[{"r":"6HP > 3MP > Double Lariat"},{"s":["• +8F on hit","• +8F no hit"]},{"s":["• +4F on block","• +4F no block"]}]}]},{"h":"6 DR MP target combo","ps":[{"k":"r","l":[{"r":"DR > st.MP > MP > MP"}]}]},{"h":"7 DR Knee Hammer on a later active frame","ps":[{"k":"r","l":[{"r":"DR > 6MK on a later active frame > 3MP > Double Lariat"}]}]},{"h":"8 6HK Punish Counter","ps":[{"k":"r","l":[{"r":"6HK PC > 3MP > Double Lariat"}]}]},{"h":"9 Jump-in basic","ps":[{"k":"r","l":[{"r":"Jcr.HP > 6HP > 3MP > Double Lariat"}]}]},{"h":"10 Round-ending light-attack route","ps":[{"k":"r","l":[{"r":"cr.LK > st.LP > CDR > cr.LP > 3MP > CDR > cr.MP > 3MP > SA2"}]},{"k":"r","l":[{"r":"Simpler alternative: … > 3MP > OD Double Lariat > SA2"}]}]}]},{"t":"Finish the round with SA3","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"cr.LK > st.LP > OD Double Lariat > SA3"}]},{"k":"p","l":[["Alternatively:","Como alternativa:"]]},{"k":"r","l":[{"r":"cr.LK > st.LP > CDR > cr.LP > 3MP > OD Double Lariat > SA3"}]}]}]},{"t":"Invincible-Reversal Punishes","arts":[{"h":"","ps":[{"k":"p","l":["If spacing allows: H Screw Piledriver"]},{"k":"r","l":[{"s":["Prioritizes okizeme","Prioriza o okizeme"]},{"r":"6HK PC > 3MP > Double Lariat"}]},{"k":"r","l":[{"r":"With meter: 6HK PC > 3MP > OD Double Lariat > SA2 / SA3"}]}]}]},{"t":["DI Punish Counter","DI em Punish Counter"],"arts":[{"h":"","ps":[{"k":"r","l":[{"r":"DI PC > H Screw Piledriver"}]},{"k":"p","l":[["Alternatively:","Como alternativa:"]]},{"k":"r","l":[{"r":"DI PC > 6HP > 3MP > Double Lariat"}]}]}]},{"t":"Corner DI wall splat","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"DI wall splat > 3MP > Double Lariat"}]}]}]},{"t":"Specialized stun combo","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"Stun > adjust spacing > hold forward and connect the later part of Double Lariat > low-height 3MP > OD Double Lariat > OD Borscht Dynamite"}]}]}]},{"t":"Power Stomps: new Year4 options","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"Power Stomps (first hit) > special move"},{"r":"Alternatively: Power Stomps (first hit) > CDR"}]},{"k":"p","l":["• First-hit starter scaling: 20%","• Better suited to creating a favorable situation than maximizing damage"]}]}]},{"t":"Key Frame Advantage by Ender","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"L Screw Piledriver > approximately +30F"},{"r":"M Screw Piledriver > approximately +28F"},{"r":"H Screw Piledriver > approximately +28F"},{"r":"OD Screw Piledriver > approximately +28F"},{"r":"Double Lariat > approximately +27–56F"},{"r":"OD Double Lariat > approximately +38–57F"},{"r":"cr.HK > approximately +36F"},{"r":"Russian Suplex > approximately +26F"},{"r":"Siberian Express > approximately +29F"},{"r":"SA1 > approximately +29F"},{"r":"SA3 > approximately +26F"}]},{"k":"p","l":["Lariat frame advantage varies with where it hits."]}]}]},{"t":"Setplay","arts":[{"h":"1 OD Double Lariat at +38F: first priority","ps":[{"k":"r","l":[{"r":"OD Double Lariat > +38F > DR > 6HP late-active-frame meaty"}]},{"k":"p","l":["At +4F after the opponent blocks, choose:","• 3MP","• M Screw Piledriver","• Block"]}]},{"h":"2 OD Double Lariat +38 > DR cr.MK","ps":[{"k":"r","l":[{"r":"OD Double Lariat > DR > cr.MK > 3MP > Double Lariat"}]}]},{"h":"3 OD Double Lariat at +38 > DR Screw Piledriver","ps":[{"k":"r","l":[{"r":"OD Double Lariat > DR > M Screw Piledriver"}]},{"k":"p","l":["Mix this with DR Headbutt and DR into block."]}]},{"h":"4 After OD Double Lariat: block an invincible reversal","ps":[{"k":"r","l":[{"r":"OD Double Lariat +38 > DR > block"},{"s":"If you block an invincible reversal, use H Screw Piledriver or a PC combo."}]}]},{"h":"5 Safe-jump-style option from +38","ps":[{"k":"r","l":[{"r":"OD Double Lariat +38 > j.MP > 3MP > Double Lariat"},{"s":"• Can allow landing in time to block invincible reversals with 10F or slower startup."}]}]},{"h":"6 Double Lariat +27F","ps":[{"k":"r","l":[{"r":"Regular Double Lariat > +27F"},{"s":"Options: DR st.MP target combo / DR cr.HK / DR L Screw Piledriver"}]}]},{"h":"7 After cr.HK","ps":[{"k":"r","l":[{"r":"cr.HK > +36F"},{"s":"Options: DR into block / DR 6MK / DR L Screw Piledriver"}]}]},{"h":"8 After Screw Piledriver","ps":[{"k":"p","l":["L Screw Piledriver: +30F","M / H / OD: +28F"]},{"k":"p","l":["At midscreen, the distance opens up. Close it again with DR st.MP / DR 6MK / DR cr.HK / DR 6HP, or DR and wait."]}]},{"h":"9 Corner Double Lariat > Headbutt","ps":[{"k":"r","l":[{"r":"Corner: Double Lariat > adjust timing slightly > 6HP"},{"s":"At +4F on block, choose 3MP / Screw Piledriver / shimmy / block."}]}]},{"h":"10 After the corner down-forward throw","ps":[{"k":"r","l":[{"r":"Normal throw with direction 3 > approximately +28F"}]},{"k":"r","l":[{"s":"Corner options include walking into the direction-3 throw, 6HP, or H Screw Piledriver."}]}]}]},{"t":"After Headbutt is blocked","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"6HP on block > +4F"}]},{"k":"p","l":["• 3MP: frame trap against a 4F button","• Screw Piledriver: open up blocking","• Another 6HP: catch escape attempts","• Block: read an invincible reversal"]},{"k":"r","l":[{"r":"At +8F on hit, 6HP > 3MP > Double Lariat combos."}]}]}]},{"t":"After st.HK is blocked","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"st.HK > block +1F"}]},{"k":"r","l":[{"s":"• st.HK > cr.LP"},{"s":"• st.HK > Screw Piledriver"},{"s":"Other options are also possible."}]}]}]},{"t":"6MK on a later active frame","arts":[{"h":"","ps":[{"k":"p","l":["6MK on a later active frame","Approximately +7F on hit","Approximately +2F on block"]},{"k":"r","l":[{"r":"DR 6MK on a later active frame > 3MP / Screw Piledriver"}]}]}]},{"t":"Catch jumps with SA1","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"Light attack > CDR to approach > read the opponent's jump > SA1 Aerial Russian Slam"}]}]}]},{"t":"How to use SA2","arts":[{"h":"","ps":[{"k":"p","l":["• Combos","• Going through projectiles","• Finishing the round"]},{"k":"r","l":[{"r":"Example: 3MP > held SA2 > airborne follow-up"}]}]}]},{"t":"When expecting an invincible reversal","arts":[{"h":"","ps":[{"k":"p","l":["Especially:","• +38F after OD Double Lariat","• +4F after Headbutt is blocked","• After corner Double Lariat"]},{"k":"p","l":["Mix strikes, Screw Piledriver, and blocking in these situations."]}]}]},{"t":"10 Practical Starter Routes","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"1. 3MP > Double Lariat"},{"r":"2. 6HP > 3MP > Double Lariat"},{"r":"3. cr.LK > st.LP > OD Double Lariat"},{"r":"4. cr.LK > st.LP > CDR > cr.LP > 3MP > Double Lariat"},{"r":"5. DR st.MP > MP > MP"},{"r":"6. DR 6MK on a later active frame > 3MP > Double Lariat"},{"r":"7. OD Double Lariat +38 > DR 6HP > strike / Screw Piledriver / block"},{"r":"8. 6HP on block +4 > 3MP / Screw Piledriver / wait"},{"r":"9. Corner: Double Lariat > 6HP meaty > strike / Screw Piledriver / shimmy"},{"r":"10. Block an invincible reversal > H Screw Piledriver"},{"r":"Alternatively: 6HK PC > 3MP > Double Lariat"}]}]}]},{"t":"Current Game Plan","arts":[{"h":"","ps":[{"k":"r","l":[{"s":"Walk forward"},{"s":"↓"},{"s":"Approach with Headbutt or DR Knee Hammer"},{"s":"↓"},{"r":"Hellstab > Double Lariat"},{"s":"↓"},{"s":"Drive Rush to close the distance again"},{"s":"↓"},{"s":"Establish strikes"},{"s":"↓"},{"s":"Land Screw Piledriver"},{"s":"↓"},{"s":"Catch jumps with Double Lariat or SA1"}]}]}]},{"t":"Notes for Older Guides","arts":[{"h":"","ps":[{"k":"p","l":["• Power Stomps' first hit is special-cancelable.","• Power Stomps' first hit has 20% starter scaling.","• Regular Double Lariat connects more reliably in combos.","• Forward/back input adjusts regular Double Lariat's position.","• Heavy Russian Suplex helps avoid accidental Siberian Express.","• Frame advantage after Double Lariat varies with hit position."]}]}]},{"t":"References","arts":[{"h":"","ps":[{"k":"p","l":["• Official Street Fighter 6 balance update information","• Ultimate Frame Data","• Zangief combo and setplay references for 2026-8-3","• Year4 strategy references"]},{"k":"p","l":["Combo and setplay conditions can vary with spacing, active-frame timing, hit position, and position relative to the corner."]},{"k":"p","l":["Recheck in Training Mode before using these routes in matches."]}]}]}],"ov":"<h5>Character overview</h5><p>Zangief’s command throw matters because the opponent also has to respect his strikes. Getting close is only the first decision: you then need to recognize whether the defender stays grounded, jumps or challenges. A Screw Piledriver finish and a Lariat finish lead to different next situations.</p><h5>Strengths</h5><ul><li>Screw Piledriver gives a close-range answer to a defender who keeps guarding, while Headbutt and Hellstab support the strike side of that decision.</li><li>The Lariat combo material provides a way to convert a small grounded opening into damage and a planned approach instead of relying solely on raw throws.</li></ul><h5>Weaknesses</h5><ul><li>A command throw that misses a jumping opponent does not deliver its reward. Throw attempts need to be balanced with strikes and waiting.</li><li>Midscreen Screw Piledriver leaves a new spacing problem. Treating the next approach as automatic can waste the hit you just earned.</li></ul><h5>Best range / preferred gameplan</h5><p>Advance into a range where a grounded strike matters before forcing the throw decision. Watch how the opponent escapes that range. After landing a grab, reassess the separation; after a practiced Lariat route, use the corresponding approach rather than borrowing the grab follow-up.</p><h5>Key tools to learn first</h5><h6>Screw Piledriver</h6><p>Learn the command without an accidental jump, then practice recognizing its usable distance. Do not confuse it with the running-grab situation.</p><h6>Headbutt and Hellstab</h6><p>The combo guide connects these strikes to Double Lariat. They give you an offensive task when the opponent is trying to avoid a throw.</p><h6>OD Double Lariat</h6><p>Start with the listed light-attack conversion. Its knockdown is the entry point for a separate Drive Rush strike/throw/wait practice sequence.</p><h5>Beginner practice order</h5><ol><li><h6>Separate strike and throw range</h6><p>Use a guarding dummy to compare where Headbutt reaches and where your chosen Piledriver connects. Keep input history visible.</p></li><li><h6>Convert the light hit</h6><p>Practice crouching light kick, standing light punch and OD Double Lariat as listed, then learn the approach after the finish.</p></li><li><h6>Respond to an escape</h6><p>Record guard, jump and a wake-up attack. From the practiced knockdown, choose a grounded strike, a throw or waiting based on the recording.</p></li></ol><h5>Common mistakes</h5><ul><li>Trying to repeat a command throw immediately without checking the distance left by the first one.</li><li>Treating every opponent’s jump as a reason to stop threatening throws instead of adjusting the strike side of the mix-up.</li></ul><h5>After the command throw, read the new situation</h5><p>A Screw Piledriver takes a large chunk of life, but the next decision still depends on distance and how Zangief approaches. Iori’s counter guide asks you to separate the damage already taken from the pressure that actually follows. Do not alternate between panic jumping and freezing simply because the previous choice lost. Identify the throw, the screen position, and the next approach.</p><h5>Decisions by distance</h5><h6>Outside his approach: prepare for one route</h6><p>Pick the approach the opponent repeats most: a jump, Drive Rush, or Knee Hammer. Practice responding to that first. Trying to react to every possible route at once can leave you late to the one Zangief has already shown repeatedly.</p><h6>At normal range: watch the charge and reach</h6><p>The Japanese guide distinguishes standing heavy punch from its charged version and discusses whiff punishment. Establish the range of one normal with your own character. Do not turn a punish on a whiff into a button you throw out while Zangief is still outside that distance.</p><h6>Close: separate a read from an automatic escape</h6><p>Guarding a prepared strike and jumping an expected throw are different commitments. After a loss, note whether you guessed the wrong option or recognized the throw but jumped too late. Those failures need different practice; neither is fixed by jumping on every wake-up.</p><h5>Situation to identify first</h5><h6>Which throw ended the exchange</h6><p>Screw Piledriver, Russian Suplex, and Borscht Dynamite are separate situations. The older video compares their follow-ups; the current combo guide also notes the space left after a midscreen Screw Piledriver. Start by naming the throw instead of assuming all command grabs lead to the same wake-up pressure.</p><h5>Response to practise</h5><h6>You have just taken Screw Piledriver</h6><p>Look at the space between you before deciding to jump or press. The current guide lists several ways to close that space again, including Drive Rush attacks and a wait. Recreate the strength and position that caused trouble. “He threw me” describes the previous exchange, not a guarantee that his next throw is already in range.</p><h5>Common mistakes</h5><ul><li>Treating every command-throw animation as if it leaves Zangief at the same distance and advantage.</li><li>Jumping immediately on every wake-up because the last Screw Piledriver hurt, even after the opponent shows a strike.</li></ul><h5>Matchup-specific practice</h5><ol><li><h6>Finish the command-throw punish</h6><p>Record Zangief approaching and using Screw Piledriver, then guarding after recovery. Neutral jump the throw and complete one stable punish for your own character. Confirm the punish and combo displays. Learn a backdash punish separately, because the resulting distance is different.</p></li><li><h6>Study the exact throw from your replay</h6><p>Match the throw strength, screen position, and your recovery choice. Record the follow-up strike that beat you, then a second slot with an approach into throw. Test guard and jump individually before trying a delayed jump. Add a later strike to see when that delayed timing breaks down.</p></li></ol><p>This section keeps the matchup-specific decisions from the former Counter page. Frame Data remains the source for complete numerical values.</p><h5>ZANGIEF video lessons</h5><p>Zangief’s collection pairs throw demonstrations and command-throw lessons with a matchup video about what happens after being thrown. Follow the matchup guide for written defensive practice.</p><p>Original video titles and Japanese commentary are preserved. Balance-update opinions and numerical examples belong to the version recorded; use the official Frame Data link and current combo guide for verification.</p><h6>Moves and lessons (3)</h6><h6>【スト６／ザンギエフ】通常投げが６種類！！全部で投げが１０種類以上ある投げキャラ！！【Street Fighter 6】</h6><p>A demonstration of Zangief’s move and throw repertoire.</p><a href=\"https://www.youtube.com/watch?v=Bv95FLl-YeM\" target=\"_blank\" rel=\"noopener\">Watch on YouTube ↗</a><h6>【スト６】強みは投げ！弱みはたくさん！！ロマンキャラのザンギエフ【STREET FIGHTER6】</h6><p>Zangief’s throw-based strengths and his weaknesses.</p><a href=\"https://www.youtube.com/watch?v=-2FGwhboa7E\" target=\"_blank\" rel=\"noopener\">Watch on YouTube ↗</a><h6>【スト６】15分で使えるザンギエフ講座！！色々なコマ投げの決め方解説！！【Street Fighter 6】</h6><p>An introductory Zangief lesson covering ways to land command throws.</p><a href=\"https://www.youtube.com/watch?v=rzfuLDvzWnU\" target=\"_blank\" rel=\"noopener\">Watch on YouTube ↗</a><p>Read the character overview →</p><h6>Matchup lessons (1)</h6><h6>【スト６】１５分ザンギエフ対策！コマ投げは食らった後が大切！！！ #スト6 #ストリートファイター6</h6><p>A Zangief matchup lesson centered on what happens after a command throw.</p><a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0\" target=\"_blank\" rel=\"noopener\">Watch on YouTube ↗</a><p>Read the matchup guide →</p>","ovDate":"2026-08-27","vs":"<h5>With command throws, what matters is what you do after eating one</h5><p>After eating a Screw Piledriver you fear the next throw and want to jump at once. Or you freeze and get thrown again. Against Zangief, before swinging between those two by mood, check which throw you took and how he approaches next.</p><p>Based on Iori's matchup video, this organizes the situation after each throw, the punish when you read correctly, and the answers by distance. Learn one situation first, and aim to make the decision when it comes up in a match. <a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0\" target=\"_blank\" rel=\"noopener\">Watch the video (in Japanese)</a> · <a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0&amp;t=414s\" target=\"_blank\" rel=\"noopener\">6:54 The situation after a throw</a></p><p><strong>What the video showed then, and what to check now.</strong> The source is a video published on February 14, 2024, demonstrated mostly with Ken. The sequences and punishes after throws below are what was explained at the time; they aren't stated to work with the same timing now. Damage and frame advantage from the video aren't reproduced: check numbers in CAPCOM's official Frame Data first.</p><p>The site's current data also includes Drive Reversal on wakeup, which the video doesn't cover, so don't assume the video's Super Art answers cover all of Zangief's reversal options. Distance after a throw and whether a meaty works can't be read from a frame table: check them in training mode on the version you play.</p><h5>After eating a command throw: think about each throw separately</h5><p>The video stresses telling apart \"is this really a strike/throw guess?\" and \"do I have time to move before he gets close?\". Losing a lot of health and being unable to do anything on wakeup are different things. When the throw animation ends, look again at the distance and at how he approaches. (<a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0&amp;t=414s\" target=\"_blank\" rel=\"noopener\">Video 6:54 to 8:49</a>)</p><h6>The situations after each throw compared in the video, as of then</h6><ul><li><strong>After Russian Suplex or SA1.</strong> An example of meatying Knee Hammer out of Drive Rush on wakeup and going for a guess after it's blocked. Notice the order: he first lays a strike on you to start the offense. (<a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0&amp;t=429s\" target=\"_blank\" rel=\"noopener\">Video 7:09 to 8:00</a>)</li><li><strong>After Screw Piledriver.</strong> It explains the option of meatying cr.HK and the option of running up and throwing an opponent who stopped moving out of respect for it. It looks like the same throw again, but there's a step where he makes you respect the strike. (<a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0&amp;t=482s\" target=\"_blank\" rel=\"noopener\">Video 8:02 to 8:25</a>)</li><li><strong>After Borscht Dynamite.</strong> In the video the offense doesn't continue as easily as after the two above, and a light attack is shown stopping the attack out of Drive Rush. A comparison that keeps you from lumping it all into \"I got thrown, so I keep blocking everything\". (<a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0&amp;t=506s\" target=\"_blank\" rel=\"noopener\">Video 8:26 to 8:49</a>)</li></ul><p>These aren't a list of guaranteed sequences in the current version. Pick one throw that troubles you in matches and start by reproducing the same situation, with the same recovery, screen position and move strength.</p><h5>Don't fear the command throw too much: have a punish ready for when you read it</h5><p>The first answer the video gives is to land a big punish when you read and avoid the command throw. If you only avoid it, he doesn't pay enough for whiffing. Have one punish combo you can do reliably with your character. (<a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0&amp;t=34s\" target=\"_blank\" rel=\"noopener\">Video 0:34 to 2:03</a>)</p><p>The video demonstrates punishes from a neutral jump and from a backdash, and explains that a back jump can escape without leading to a punish. None of them is safe unconditionally. Choose them when you read the throw, and learn them together with the distance from which your move reaches after you avoid it.</p><p><strong>From \"I'm scared, so I run\" to \"I read it, so I avoid it and hit back\".</strong> At first, a punish you won't drop beats a hard maximum combo. Once you're used to it, prepare a route that spends gauge too, and choose by remaining health and gauge.</p><h5>Defending up close: separate the time to block from the time to avoid the throw</h5><p>After Screw Piledriver, the video explains the flow of holding down jumps and buttons with a meaty cr.HK and then going for the real throw on the next approach. Jump at once on every wakeup and you give up answering the strike; stay frozen and the throw is hard to answer. (<a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0&amp;t=530s\" target=\"_blank\" rel=\"noopener\">Video 8:50 to 9:53</a>)</p><h6>Advanced: the fuzzy jump</h6><p>A defense where you block until the moment the first strike would arrive and enter the jump a little late. In the video's demonstration, you block if it's cr.HK and jump away if it's the throw that comes a bit later.</p><p><strong>It doesn't avoid every strike and every throw.</strong> The video presents it as an answer to sequences that aren't tightly built. If he delays the strike or changes the move or the timing of his approach, the same input can fail. Beginners should first learn the normal block and the jump on a read, and then practice this as an answer to a specific sequence.</p><h5>Managing distance: look at one approach and one move at a time</h5><p>At the start the video lists anti-airing jumps, stopping Drive Rush, and answering st.HP and Knee Hammer, and says that doing all of it from the start is hard. Pick the one approach he uses most and start by waiting for it when \"this is probably coming next\". (<a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0&amp;t=125s\" target=\"_blank\" rel=\"noopener\">Video 2:05 to 5:10</a>)</p><ul><li><strong>An opponent who repeats st.HP.</strong> The video shows whiff punishing it, sticking out a low, and timing Drive Impact against the charged version. Don't spam any single one: watch whether it's charged and the distance. (<a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0&amp;t=125s\" target=\"_blank\" rel=\"noopener\">Video 2:05 to 3:18</a>)</li><li><strong>An opponent who stops you with st.MP and st.MK.</strong> There's an example of touching him from outside their reach with Ken's long moves. It goes on to explain that leaning only on that makes the charged HP harder to answer. Your character may not have the same kind of move. (<a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0&amp;t=199s\" target=\"_blank\" rel=\"noopener\">Video 3:19 to 4:15</a>)</li><li><strong>An opponent who closes in with Knee Hammer.</strong> Watch for the approach from mid range and for a throw after it whiffs. Even when you block it, the situation changes with whether it hit deep or at the tip or late, so don't assume \"always punish after Knee Hammer\". (<a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0&amp;t=256s\" target=\"_blank\" rel=\"noopener\">Video 4:16 to 5:10</a>)</li></ul><p>For move names and the current startup and advantage, go to Zangief's official Frame Data. Besides the numbers, check the distance from which your punish reaches.</p><h5>The strike/throw guess: don't decide from the last time only</h5><p>To apply the video's explanation of the situation after Screw Piledriver to matches, look in this order: \"did a strike stop me last time?\" and \"is he running in this time?\". Jumping because you were just thrown, then blocking forever because the jump got caught, only alternates and loses track of what he's doing.</p><p>When he's laying strikes on you, block as the basic answer; when you read the approach for a throw, think of avoiding and punishing. When it fails, review the decision and the input separately: \"I read the throw but jumped late\" and \"I thought it was a throw but it was a strike\" call for different practice.</p><h5>What not to do against Zangief</h5><ul><li><strong>Freezing the same way after every throw.</strong> Check each throw and the approach after it separately.</li><li><strong>Jumping on every wakeup out of fear of the throw.</strong> Keep the meaty strike from the video in mind and jump only when you read the throw.</li><li><strong>Being satisfied with avoiding the throw and missing the punish.</strong> Practice avoiding through to the combo as one sequence.</li><li><strong>Treating the fuzzy jump or Drive Impact as a universal answer.</strong> When the move, distance or timing changes, the same answer may not work.</li><li><strong>Deciding today's punishes from an old video's frame values.</strong> Check with current data and your own character.</li></ul><h5>Three situations to practice in training mode</h5><p>Steps that turn the video's demonstrations into drills. Play them one at a time first, and move to random playback once you understand what is happening.</p><ol><li><strong>Avoid the command throw and finish the punish.</strong> Record the opponent walking up and doing Screw Piledriver. Avoid it with a neutral jump and go into your reliable combo. If you use a backdash, check separately which move reaches after it. (<a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0&amp;t=34s\" target=\"_blank\" rel=\"noopener\">Original demonstration 0:34 to 2:03</a>)</li><li><strong>Compare the strike after Screw Piledriver with the approach into a throw.</strong> From the same throw and position, prepare one recording that meaties cr.HK and one that walks up and throws. First check the block and the throw escape one by one. Then try the delayed jump, and test whether it also survives a recording with different strike timing. Don't assume it beats every recording: learn the conditions where it works. (<a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0&amp;t=530s\" target=\"_blank\" rel=\"noopener\">Original demonstration 8:50 to 9:53</a>)</li><li><strong>Find the punish that reaches at each distance of a blocked Knee Hammer.</strong> Separate a close recording from one near the tip, and judge with the frame meter and the dummy's guard. It's practice in not pressing the same move at ranges where the punish isn't guaranteed. (<a href=\"https://www.youtube.com/watch?v=1i8yQE3Y0d0&amp;t=256s\" target=\"_blank\" rel=\"noopener\">Original demonstration 4:16 to 5:10</a>)</li></ol><p>After practice, review one match and note \"after which throw, with which answer, did I fail\": that decides the next situation to practice.</p><h5>Beginners: keep these three things in mind first</h5><ol><li><strong>When you get thrown, look at which throw it was and at the next distance.</strong> Don't lump together what comes after \"eating a throw\".</li><li><strong>When you read and avoid a throw, hit back with the combo you learned.</strong> Besides practicing escapes, have one punish for when you read right.</li><li><strong>Don't try to react to everything: wait for the one thing that comes often.</strong> Add answers starting from what this opponent repeats: jumps, Drive Rush, Knee Hammer.</li></ol>","jp":1}
};
