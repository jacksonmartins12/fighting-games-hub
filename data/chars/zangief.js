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
  }
};
