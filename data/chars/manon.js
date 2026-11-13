// Manon: guide + full frame data.
(window.HUB_DATA = window.HUB_DATA || {});
(HUB_DATA.chars = HUB_DATA.chars || {})["manon"] = {
  "guide": {
    "slug": "manon",
    "name": "Manon",
    "release": {
      "en": "Base game (June 2023)",
      "pt": "Jogo base (junho de 2023)"
    },
    "archetype": "grappler",
    "difficulty": 3,
    "difficulty_why": {
      "en": "Her inputs are simple (no 360), but managing medal levels and using her long-range buttons well takes game knowledge.",
      "pt": "Os comandos são simples (sem 360), mas gerenciar o nível de medalha e usar bem os botões longos exige conhecimento de jogo."
    },
    "summary": {
      "en": "Manon is a judo grappler with long, graceful normals and a command throw (Manège Doré) that grows stronger every time it lands via her medal system. She wins by controlling space with pokes, then forcing strike/throw guesses that scale up as her medals rise.",
      "pt": "A Manon é uma grappler de judô com normais longos e um command throw (Manège Doré) que fica mais forte a cada acerto graças ao sistema de medalhas. Ela vence controlando o espaço com pokes e forçando adivinhações de golpe ou agarrão que crescem conforme as medalhas sobem."
    },
    "strengths": [
      {
        "en": "Command throw damage scales with medals: Manège Doré goes from 2000 (level 1) to 3700 (level 5).",
        "pt": "O dano do command throw cresce com as medalhas: o Manège Doré vai de 2000 (nível 1) a 3700 (nível 5)."
      },
      {
        "en": "Long, strong pokes and target combos make her neutral solid for a grappler.",
        "pt": "Pokes longos e fortes e target combos deixam o neutral dela sólido para uma grappler."
      },
      {
        "en": "Excellent anti-airs: 2HP and Rond-point both have air-invincible hurtboxes.",
        "pt": "Anti-airs excelentes: o 2HP e o Rond-point têm hurtbox invencível a aéreos."
      }
    ],
    "weaknesses": [
      {
        "en": "Her command grabs cannot be special-canceled into, so she cannot buffer them from buttons like Zangief.",
        "pt": "Os command grabs dela não saem de cancel, então ela não consegue bufferizar a partir de botões como o Zangief."
      },
      {
        "en": "Many specials are very unsafe on block (Rond-point -11 to -15, Renversé -16 to -23).",
        "pt": "Muitos especiais são bem inseguros no block (Rond-point -11 a -15, Renversé -16 a -23)."
      },
      {
        "en": "Low medal levels mean low damage early; she needs to land throws to become scary.",
        "pt": "Com medalha baixa o dano é baixo no começo; ela precisa acertar agarrões para ficar perigosa."
      }
    ],
    "gameplan": {
      "en": "Play footsies at mid range with 2MP, 5MP and 4HP (Révérence), and anti-air jumps with 2HP or Rond-point. Your goal is to land a knockdown, then walk up and threaten Manège Doré (HP version is 5 frames) against a meaty 4HP or 5MP, which are safe or plus. Each Manège Doré or Renversé hit raises her medal, so early rounds are about getting levels and later rounds about cashing in. On defense, her best reversal is SA2 Étoile (fully invincible frames 1-9); otherwise block and use her fast 4-frame jabs (5LP, 2LP) to escape pressure.",
      "pt": "Jogue footsies na média distância com 2MP, 5MP e 4HP (Révérence) e faça anti-air com 2HP ou Rond-point. O objetivo é conseguir um knockdown, chegar perto e ameaçar o Manège Doré (a versão HP sai em 5 frames) alternando com um 4HP ou 5MP meaty, que são seguros ou plus. Cada acerto de Manège Doré ou Renversé sobe a medalha, então os primeiros rounds são para ganhar níveis e os últimos para faturar. Na defesa, o melhor reversal é o SA2 Étoile (totalmente invencível nos frames 1-9); fora isso, defenda e use os jabs de 4 frames (5LP, 2LP) para sair da pressão."
    },
    "key_moves": [
      {
        "name": "Manège Doré",
        "input": "63214P",
        "classic": "HCB+P",
        "role": {
          "en": "Command throw that raises her medal level. LP has the most range (10f), HP is fastest (5f) but shortest.",
          "pt": "Command throw que sobe o nível de medalha. O LP tem mais alcance (10f), o HP é o mais rápido (5f) mas tem menos alcance."
        }
      },
      {
        "name": "Renversé",
        "input": "236P",
        "classic": "QCF+P",
        "role": {
          "en": "Strike-grab that can be combo'd into and raises medals; projectile-invincible but very unsafe on block. Hold P to feint.",
          "pt": "Golpe-agarrão que entra em combo e sobe medalha; invencível a projéteis mas muito inseguro no block. Segure P para fazer feint."
        }
      },
      {
        "name": "Rond-point",
        "input": "236K",
        "classic": "QCF+K",
        "role": {
          "en": "Spinning kick: strong anti-air (air-invincible upper body) and main combo ender (236HK).",
          "pt": "Chute giratório: anti-air forte (parte de cima invencível a aéreos) e principal finalizador de combo (236HK)."
        }
      },
      {
        "name": "Dégagé",
        "input": "214K",
        "classic": "QCB+K",
        "role": {
          "en": "MK version is a far-reaching combo ender; HK version is an overhead that low-crushes (-9 on block).",
          "pt": "A versão MK é um finalizador de longo alcance; a versão HK é um overhead que passa por golpes baixos (-9 no block)."
        }
      },
      {
        "name": "SA1 Arabesque",
        "input": "236236K",
        "classic": "QCFx2+K",
        "role": {
          "en": "Low-hitting super, strike and throw invincible frames 1-13.",
          "pt": "Super baixo, invencível a golpes e agarrões nos frames 1-13."
        }
      },
      {
        "name": "SA2 Étoile",
        "input": "214214K",
        "classic": "QCBx2+K",
        "role": {
          "en": "Fully invincible (1-9) 7-frame super; her best reversal.",
          "pt": "Super de 7 frames totalmente invencível (1-9); melhor reversal dela."
        }
      },
      {
        "name": "SA3 Pas de Deux",
        "input": "236236P",
        "classic": "QCFx2+P",
        "role": {
          "en": "Command-grab super that can be combo'd into; damage rises with medals (4000 to 4600).",
          "pt": "Super de command grab que entra em combo; o dano sobe com as medalhas (4000 a 4600)."
        }
      }
    ],
    "key_normals": [
      {
        "move": "2MP",
        "classic": "c.MP",
        "startup": 7,
        "on_block": -1,
        "on_hit": 6,
        "role": {
          "en": "Main combo starter and Drive Rush buffer.",
          "pt": "Principal starter de combo e buffer de Drive Rush."
        }
      },
      {
        "move": "4HP",
        "classic": "b.HP (Révérence)",
        "startup": 8,
        "on_block": 1,
        "on_hit": 3,
        "role": {
          "en": "Plus on block, cancelable: her core pressure, oki and combo tool.",
          "pt": "Plus no block e cancelável: ferramenta central de pressão, oki e combo."
        }
      },
      {
        "move": "5MP",
        "classic": "s.MP",
        "startup": 7,
        "on_block": -2,
        "on_hit": 2,
        "role": {
          "en": "Forward-moving poke with many active frames; starts the 5MP > MK target combo and checks Drive Rush.",
          "pt": "Poke que avança com muitos frames ativos; inicia o target combo 5MP > MK e pega quem vem de Drive Rush."
        }
      },
      {
        "move": "2HP",
        "classic": "c.HP",
        "startup": 10,
        "on_block": -8,
        "on_hit": -2,
        "role": {
          "en": "Anti-air: arm and head invincible to air attacks frames 7-34, with a follow-up (2HP > HP) for knockdown.",
          "pt": "Anti-air: braço e cabeça invencíveis a aéreos nos frames 7-34, com continuação (2HP > HP) para knockdown."
        }
      }
    ],
    "anti_air": {
      "en": "2HP is her most reliable normal anti-air (air-invincible arm/head frames 7-34), and you can press HP again for a knockdown. LK Rond-point (9f, air-invincible frames 5-15) is the fast special anti-air; HK Rond-point (14f) does more but needs earlier reaction. Neither Rond-point hits cross-ups.",
      "pt": "O 2HP é o anti-air normal mais confiável dela (braço/cabeça invencíveis a aéreos nos frames 7-34), e dá para apertar HP de novo para knockdown. O LK Rond-point (9f, invencível a aéreos nos frames 5-15) é o anti-air especial rápido; o HK Rond-point (14f) dá mais dano, mas exige reação mais cedo. Nenhum Rond-point pega cross-up."
    },
    "combos": [
      {
        "label": {
          "en": "Low light confirm",
          "pt": "Confirm low com golpe fraco"
        },
        "route": "2LK, 5LP > 236HK",
        "notes": {
          "en": "Meterless, 1000 damage, low starter.",
          "pt": "Sem barra, 1000 de dano, começa com golpe baixo."
        }
      },
      {
        "label": {
          "en": "Medium punish",
          "pt": "Punish médio"
        },
        "route": "2MP, 5LK > 236HK",
        "notes": {
          "en": "Meterless, 1540 damage.",
          "pt": "Sem barra, 1540 de dano."
        }
      },
      {
        "label": {
          "en": "Drive Rush confirm with oki",
          "pt": "Confirm com Drive Rush e oki"
        },
        "route": "2MP > DR 2MP, 5HP > HP",
        "notes": {
          "en": "3 Drive bars, 2008 damage; 5HP's extra reach lets it combo and leaves great oki.",
          "pt": "3 barras de Drive, 2008 de dano; o alcance extra do 5HP faz o combo funcionar e deixa ótimo oki."
        }
      }
    ],
    "tips": [
      {
        "en": "Prioritize landing Manège Doré or Renversé early: higher medals make every later command throw and SA3 hurt more.",
        "pt": "Priorize acertar Manège Doré ou Renversé cedo: com medalha alta, todo command throw e SA3 seguintes doem mais."
      },
      {
        "en": "Use HP Manège Doré (5f) point blank and LP Manège Doré (10f) when slightly farther away.",
        "pt": "Use o Manège Doré HP (5f) colado e o LP (10f) quando estiver um pouco mais longe."
      },
      {
        "en": "4HP is +1 on block: blocked 4HP, then choose between Manège Doré, another button, or a short wait to catch jumps.",
        "pt": "O 4HP é +1 no block: depois de um 4HP defendido, escolha entre Manège Doré, outro botão ou esperar um pouco para pegar o pulo."
      }
    ],
    "counterplay": {
      "en": "Block and punish her unsafe specials (Rond-point, Renversé, 3HK sweep -23). Avoid jumping in on her: 2HP and Rond-point are strong anti-airs. Watch her medal count; at high levels respect the command throw by jumping or backdashing after her plus 4HP, and do not let her get easy medals early.",
      "pt": "Defenda e puna os especiais inseguros dela (Rond-point, Renversé, sweep 3HK -23). Evite pular nela: o 2HP e o Rond-point são anti-airs fortes. Fique de olho nas medalhas; em nível alto, respeite o command throw pulando ou dando backdash depois do 4HP com vantagem, e não dê medalha fácil no começo."
    },
    "sources": [
      "https://www.streetfighter.com/6/character/manon/frame",
      "https://github.com/D4RKONION/FAT/blob/master/src/js/constants/framedata/SF6FrameData.json",
      "https://github.com/D4RKONION/FAT/blob/master/src/js/constants/combos/SF6Combos.json"
    ],
    "data_note": {
      "en": "Frame data from the FAT open data (D4RKONION/FAT, v5.9.0, repo snapshot 2026-06-14), cross-checked against the official Capcom frame data page (read 2026-10-02; the page shows no patch date). Combos are taken from FAT's SF6 combo list. Official page lists 2MK as +4 on hit vs +3 in FAT, so 2MK was left out of key normals (likely a post-June 2026 change). Values may change with patches; check in training mode. Rechecked on October 23, 2026 against FAT's post-patch data (October 22 update): every key normal value matches, and the combos that use moves changed by the August 2026 patch were checked against the new numbers.",
      "pt": "Frame data do FAT (dados abertos D4RKONION/FAT, v5.9.0, snapshot de 14/06/2026), conferida com a página oficial de frame data da Capcom (lida em 02/10/2026; a página não mostra data de patch). Combos tirados da lista de combos SF6 do FAT. A página oficial mostra 2MK +4 no hit contra +3 no FAT, então o 2MK ficou fora dos normais principais (provável mudança depois de junho de 2026). Os valores podem mudar com patches; confira no training mode. Revisado em 23 de outubro de 2026 com os dados pós-patch do FAT (atualização de 22 de outubro): todos os valores dos normais principais conferem, e os combos que usam golpes alterados pelo patch de agosto de 2026 foram conferidos com os números novos."
    }
  },
  "frames": {
    "m": [
      ["Stand LP","5LP","LP","n",4,3,10,4,-1,300,"ch sp su","",0,1.01,"20% Start",null],
      ["Stand MP","5MP","MP","n",7,4,15,2,-2,600,"sp su tc","",0,1.48,null,null],
      ["Stand HP","5HP","HP","n",10,4,20,0,-3,800,"su tc","",0,1.66,null,null],
      ["Stand LK","5LK","LK","n",5,2,12,2,-2,300,"sp su","",0,1.35,"20% Start",null],
      ["Stand MK","5MK","MK","n",10,3,18,0,-5,600,"sp su","",0,"1.578~1.587",null,null],
      ["Stand HK","5HK","HK","n",15,3,"26(23)",1,-6,900,"","",0,"2.241~2.28",null,"The brief extended leg hurtbox on frame 14 of start-up (1F before active) is strike invincible (cannot counter-poke projectiles)"],
      ["Crouch LP","2LP","d+LP","n",4,2,11,3,-2,300,"ch sp su","",0,1.09,"20% Start",null],
      ["Crouch MP","2MP","d+MP","n",7,3,"11(15)",6,-1,600,"sp su","",0,1.29,null,null],
      ["Crouch HP","2HP","d+HP","n",10,5,21,-2,-8,600,"tc","",0,0.89,null,"Manon's extended arm and head hurtbox are invincible to airborne strikes on frames 7-34"],
      ["Crouch LK","2LK","d+LK","n",5,2,13,-1,-3,200,"ch","",0,1.33,"20% Start",null],
      ["Crouch MK","2MK","d+MK","n",8,4,16,4,-2,600,"","",0,"1.60~1.62","20% Start",null],
      ["Crouch HK","2HK","d+HK","n",11,2,27,"KD +29",-12,900,"","",0,2.01,null,null],
      ["Jump LP","8LP","u+LP","n",5,10,null,"5~9","1~5",300,"","",0,0.67,null,null],
      ["Jump MP","8MP","u+MP","n",8,4,null,"9~11 (KD)","5~7",700,"","",0,1.01,null,"Projectile invincible on her lower body on frames 8-22 (can help Manon avoid projectiles below)"],
      ["Jump HP","8HP","u+HP","n",9,4,null,"8~15 (KD)","4~11",800,"","",0,0.8,null,null],
      ["Jump LK","8LK","u+LK","n",6,9,null,"3~10","-1~6",300,"","",0,0.56,null,null],
      ["Jump MK","8MK","u+MK","n",7,6,null,"8~13","4~9",500,"","",0,1.23,null,"Projectile invincible on her lower body on frames 7-20 (can help Manon avoid projectiles below)"],
      ["Jump HK","8HK","u+HK","n",11,5,null,"8~15","4~11",800,"","",0,1.13,null,null],
      ["Révérence","4HP","b+HP","n",8,6,17,3,1,800,"sp su","",0,"1.077~1.09",null,null],
      ["Tomoe Derrière","3HK","df+HK","n",11,9,32,"KD +26",-23,1000,"","",0,2.04,null,"Manon's kicking leg is invincible to airborne strikes on frames 9-19"],
      ["Back MK","4MK","b+MK","n",10,4,19,-1,-3,600,"tc","",0,1.22,null,null],
      ["En Haut","4MK > MK","b+MK > MK","n",14,5,21,-3,-11,500,"sp su","",0,"1.63~1.68",null,null],
      ["À Terre","5MP > MK","MP > MK","n",10,2,17,2,-5,500,"","",0,1.12,null,null],
      ["Temps Lié","5HP > HP","HP > HP","n",5,5,"17(19)",3,-8,600,"","",0,"1.44~1.52","Combo (2 hits)",null],
      ["Allongé","2HP > HP","d+HP > HP","n",4,4,26,"1 (KD ~)",-10,500,"","",0,"1.084~1.124",null,null],
      ["Ouchi Gari","LPLK","LP+LK","t",5,3,23,"KD +16",null,"1200(2040)","","",0,0.8,"20% Immediate",null],
      ["Uchi Mata","4LPLK","b+LP+LK","t",5,3,23,"KD +18",null,"1200(2040)","","",0,0.8,"20% Immediate",null],
      ["Drive Impact: Glissade","HPHK","HP+HK","d",26,2,35,"KD (notes)",-3,800,"","",0,2.5,"20% Start",null],
      ["Drive Reversal: Écarté","6HPHK","f+HP+HK","d","20(18)",3,26,"KD +23",-6,500,"","",0,1.665,null,"Fully invincible on frames 1-22 (blockstun) / frames 1-20 (reversal) Guaranteed to interrupt any Drive Rush canceled normal if performed immediately out of blockstun (unless the opponent reacts with an invincible move or counter)"],
      ["Drive Parry","MPMK","MP+MK","d",1,"12(2)","33(1)notes",null,null,null,"","",0,null,"50% Multiplier (Perfect)","Throw invincible during the recovery of a successful parry (just like during blockstun) Fully invincible for 6F after a successful Perfect Parry against a strike, which carries over to any attack you perform (ensuring a 5F or faster punish will always interrupt multi-hit attacks)"],
      ["Drive Rush","MPMK / 66 (cancel)","MP+MK / f,f (cancel)","d","9(11)","45(46)","24(23)",null,null,null,"","var",0,null,"15% Multiplier (Mid-Combo)",null],
      ["Perfect Parry (strike)","MPMK","MPMK","d",1,null,1,null,null,0,"","",0,null,"Starter scaling 50%","Perfect Parry activates when an attack is absorbed on the frame a parry is input, or on the next frame. (For high and overhead attacks, the player must press the direction away from the opponent. For low attacks, down and back) If no direction is inputted the result will be a regular parry with an additional Drive increase of 3000. Fully invincible for 5 frames once recovery is over (invincibility not granted if you continue the parry) The player on the receiving end of a Perfect Parry cannot cancel and is forced into a Punish Counter state until their move is finished"],
      ["Perfect Parry (projectile)","MPMK","MPMK","d",1,null,10,null,null,0,"","",0,null,"Starter scaling 50%",null],
      ["Parry Drive Rush","66","f,f","d",null,null,"45 total",null,null,0,"","",0,null,"Multiplier scaling 15%",null],
      ["Cancel Drive Rush","66 or (5 or 6) MPMK","66 or (5 or 6) MPMK","d",null,null,"46 total",null,null,0,"","",0,null,"Multiplier scaling 15%",null],
      ["LP Manège Doré","624LP","hcb+LP","s",10,3,48,"HKD +19",null,"2000-3700","","",0,"1.511~1.529",null,null],
      ["MP Manège Doré","624MP","hcb+MP","s",8,3,50,"HKD +19",null,"2000-3700","","",0,"1.296~1.374",null,null],
      ["HP Manège Doré","624HP","hcb+HP","s",5,3,53,"HKD +19",null,"2000-3700","","",0,"1.126~1.144",null,null],
      ["OD Manège Doré","624PP","hcb+PP","s",8,3,50,"HKD +19",null,"2000-3700","","",0,"1.506~1.524",null,null],
      ["LK Rond-point","236LK","qcf+LK","s",9,"3(2)2",29,3,-15,"900 (400*500)","su3","",0,"1.453 (1st)",null,"Invincible to airborne strikes on upper body and extended leg on frames 5-15"],
      ["MK Rond-point","236MK","qcf+MK","s",11,"3(3)3",27,"KD +34",-14,"1000 (400*600)","su3","",0,"1.633 (1st)",null,"Invincible to airborne strikes on upper body and extended leg on frames 7-19"],
      ["HK Rond-point","236HK","qcf+HK","s",14,"3(3)3","22(24)","KD +37",-11,"800 (400*400)","su3","",0,"1.833 (1st)",null,"Invincible to airborne strikes on upper body and extended leg on frames 9-22"],
      ["OD Rond-point","236KK","qcf+KK","s",8,"4(2)3","25(30)","KD +45",-19,"800 (500*300)","su2 su3","",0,"1.48 (1st)",null,"Invincible to airborne strikes on frames 4-16"],
      ["LK Dégagé","214LK","qcb+LK","s",16,"2(10)4",36,"KD +21",-24,"1000 (300*700)","","",0,"2.691~3.23",null,null],
      ["MK Dégagé","214MK","qcb+MK","s",16,"4(14)6",22,"KD +33",-13,"1200 (400*800)","","",0,"2.751~3.614",null,null],
      ["HK Dégagé","214HK","qcb+HK","s","20(21)","3(2)",24,3,-9,1000,"","",0,2.893,null,null],
      ["OD Dégagé","214KK","qcb+KK","s","22(23)",3,22,"6(7)",-3,800,"","",0,"2.395~2.919","20% Start","Throw invincible on frames 11-24"],
      ["LP Renversé","236LP","qcf+LP","s",22,2,37,"HKD +15",-23,"1350-1950","su3","",0,"1.858~1.882",null,"Projectile invincible on frames 3-23"],
      ["MP Renversé","236MP","qcf+MP","s",25,2,34,"HKD +15",-20,"1400-2000","su3","",0,"2.178~2.202",null,"Projectile invincible on frames 3-26"],
      ["HP Renversé","236HP","qcf+HP","s",29,2,30,"HKD +15",-16,"1500-2100","su3","",0,"2.353~2.377",null,"Projectile invincible on frames 3-30"],
      ["OD Renversé","236PP","qcf+PP","s",25,2,34,"HKD +15",-20,"1500-2100","","",0,"2.47~2.494",null,"Fully projectile invincible as well as Strike invincible on all body except her feet (susceptible to low attacks) on frames 3-26"],
      ["Grand Fouetté","236P > K","qcf+P > K","s","16(18)+10",6,20,"KD +53(+58)","-3(2)",800,"su3","",0,"Spin + 1.99","10% Immediate / 20% Start","Projectile invincible during the spin on frames 3-16 (up to frame 22 if the Kick follow-up is delayed on HP Spin)"],
      ["Renversé Feint","236P (hold)","qcf+P (hold)","s",null,null,"31(33)",null,null,null,"","var",0,null,null,"Distance traveled, Projectile invincibility window, and overall duration of feint depends on the strength of button used LP Feint: Projectile invincible on frames 3-15 | 31F total | 0.85 distance MP Feint: Projectile invincible on frames 3-16 | 32F total | 1.10 distance HP Feint: Projectile invincible on frames 3-17 | 33F total | 1.14 distance"],
      ["OD Grand Fouetté","236PP > K","qcf+PP > K","s","15+10",6,22,"KD +58(+63)","-12(-7)",800,"su2 su3","",0,"Spin + 1.99","10% Immediate / 10% Start (applies to 3rd hit)","Fully projectile invincible as well as Strike invincible on all body except her feet during the spin on frames 3-15 (up to frame 19 if the Kick follow-up is delayed)"],
      ["OD Renversé Feint","236PP (hold)","qcf+PP (hold)","s",null,null,27,null,null,null,"","var",0,null,null,"Fully projectile invincible as well as Strike invincible on all body except her feet (susceptible to low attacks) on frames 3-16"],
      ["OD Manège Doré(Attack changes according to Medal level)","63214PP","hcb+PP","s",8,2,51,"KD",null,"*2000","","",0,null,null,null],
      ["Arabesque","236236K","qcf,qcf+K","u",10,4,65,"KD +7",-49,2000,"","",0,"1.859~3.083","30% Minimum","Strike and Throw invincible on frames 1-13"],
      ["Étoile","214214K","qcb,qcb+K","u",7,"3(11)6(45)9","38+34","KD +32","-61(-118)",2800,"","",0,"1.918~2.383","40% Minimum","Fully invincible on frames 1-9"],
      ["Pas de Deux","236236P","qcf,qcf+P","u","6+1",2,72,"HKD +16",null,"4000(4600)","","",0,"1.463~1.489","50% Minimum / 5% Immediate (special)","Fully invincible on frames 1-8"],
      ["Pas de Deux (Critical Art)","236236P (CA)","qcf,qcf+P (CA)","u","6+1",2,72,"HKD +16",null,"4500(5100)","","",0,"1.463~1.489","50% Minimum / 5% Immediate (special)","Fully invincible on frames 1-8"]
    ],
  "s": {
      "fastestNormal": "4f",
      "bestReversal": "Étoile",
      "fDash": "21",
      "bDash": "25",
      "health": "10000",
      "jump": "4+38+3",
      "throwRange": "0.8"
    }
  },
  "lab": {"by":"Iori (SF6 Lab)","url":"https://sf6-lab.net/en/fighters/manon/combo","updated":"2026-08-31","balance":"2026-08-03","secs":[{"t":"Basic combos to learn first","arts":[{"h":"1 st.MP starter / basic","ps":[{"k":"r","l":[{"r":"st.MP > DR > cr.MP > 4HP > M Renversé"}]},{"k":"p","l":["When to use it:","• After st.MP connects in neutral","• Your first Drive Rush combo to learn","• A basic route for increasing Medal Level"]}]},{"h":"2 st.MK starter","ps":[{"k":"r","l":[{"r":"st.MK > DR > cr.MP > 4HP > M Renversé"}]},{"k":"p","l":["When to use it:","• A st.MK whiff punish or preemptive poke","• A midrange hit confirm"]}]},{"h":"3 jump attack starter","ps":[{"k":"r","l":[{"r":"j.MK > cr.LP > cr.LP > H Rond-point"}]},{"k":"p","l":["When to use it:","• After a successful jump-in","• When consistency is the priority"]}]},{"h":"4 Jump-in into Medal gain","ps":[{"k":"r","l":[{"r":"j.HP or j.HK > 4HP > M Renversé"}]},{"k":"p","l":["When to use it:","• A higher-reward jump-in route","• When you want to gain a Medal with Renversé"]}]},{"h":"5 Light starter","ps":[{"k":"r","l":[{"r":"cr.LP > cr.LP > H Rond-point"}]},{"k":"p","l":["When to use it:","• Frame traps","• Guaranteed punishes","• A reliable point-blank combo"]}]},{"h":"6. DR cr.MP starter","ps":[{"k":"r","l":[{"r":"DR > cr.MP > 4HP > M Renversé"}]},{"k":"p","l":["When to use it:","• From raw DR","• During okizeme","• When approaching from midrange"]}]},{"h":"7 Spend OD meter to gain a Medal","ps":[{"k":"r","l":[{"r":"… > OD Rond-point > 4HP > H Renversé"}]},{"k":"p","l":["When to use it:","• Spend Drive Gauge for both damage and a Medal","• Increase the reward from an anti-air or punish"]}]},{"h":"8 Drive Impact Punish Counter","ps":[{"k":"r","l":[{"r":"DI (Punish Counter) > forward dash > 4HP > OD Rond-point > M Renversé"}]},{"k":"p","l":["When to use it:","• Countering DI","• A large guaranteed opening","• Gaining a Medal"]}]},{"h":"9 Corner DI","ps":[{"k":"r","l":[{"r":"DI (wall splat) > 4HP > M Renversé"}]},{"k":"p","l":["When to use it:","• Corner DI wall splat","• An easy, reliable option"]}]},{"h":"10 Corner DI / meter","ps":[{"k":"r","l":[{"r":"DI (wall splat) > 4HP > OD Rond-point > 4HP > H Renversé"}]},{"k":"p","l":["When to use it:","• Combine damage with Medal gain in the corner","• When you have meter to spare"]}]}]},{"t":"Super Art combos","arts":[{"h":"SA3 routes","ps":[{"k":"r","l":[{"r":"… > OD Rond-point > Renversé > SA3"}]},{"k":"p","l":["Key points:","• Some routes connect SA3 from the grabbing portion of Renversé.","• If you can score a KO, prioritize finishing the round over gaining a Medal.","• SA3 after an anti-air OD Rond-point also gives high reward."]}]},{"h":"When to use a Super Art","ps":[{"k":"r","l":[{"s":"• If it will finish the opponent, prioritize the Super Art."},{"s":"• If it will not finish the round and Medal Level is low, prioritize gaining a Medal with Renversé."},{"s":"• At high Medal Level, command throws already offer high reward; you do not need to force Medal-building combos every time."}]}]}]},{"t":"anti-air","arts":[{"h":"basicanti-air","ps":[{"k":"p","l":["cr.HP"]}]},{"h":["From farther away","De mais longe"],"ps":[{"k":"p","l":["H Rond-point","3HK anti-air move"]}]},{"h":"High-reward anti-airs","ps":[{"k":"r","l":[{"r":"anti-air > OD Rond-point > Renversé"}]}]},{"h":"Air-to-air","ps":[{"k":"r","l":[{"r":"j.MP > OD Rond-point > Renversé"}]},{"k":"p","l":["Key points:","• Repeated jumps weaken Manon's grounded command-throw threat, so establish reliable anti-airs.","• With meter to spare, converting an anti-air into a Medal is valuable."]}]}]},{"t":"After an H Rond-point ender","arts":[{"h":"","ps":[{"k":"p","l":["Dash forward after H Rond-point to make okizeme easier."]},{"k":"r","l":[{"r":"The reference material describes a setup where H Rond-point > forward dash leaves Manon at a large advantage."}]},{"k":"p","l":["basic mix-up:"]}]}]},{"t":"The situation after a command throw","arts":[{"h":"","ps":[{"k":"p","l":["After a command throw such as Manège Doré, dashing forward does not necessarily give frame-advantaged okizeme. The source describes a situation where a forward dash leaves Manon at -2F."]},{"k":"p","l":["Dashing forward therefore does not automatically make it Manon's turn."]},{"k":"p","l":["If the opponent hesitates, however, you can exploit that hesitation to land another command throw."]}]}]},{"t":"Setplay after a command throw","arts":[{"h":"1 Forward dash > command throw","ps":[{"k":"p","l":["Aim:","• Catch an opponent who hesitates","• Raise Medal Level quickly"]},{"k":"p","l":["Risks:","• May lose to an immediate button press","• Dangerous to repeat every time"]}]},{"h":"2 forward dash > strike","ps":[{"k":"p","l":["Aim:","• Catch an opponent pressing buttons to avoid a command throw","• Catch a jump attempt"]},{"k":"p","l":["Options:","• MP-based attacks","• Drive Rush MP-based attacks"]}]},{"h":"3 H Dégagé","ps":[{"k":"p","l":["Aim:","• Catch jumps","• Open crouching guard","• Challenge light-attack button presses"]},{"k":"p","l":["Caution:","• Dangerous if it runs into DI or a similar response","• Do not overuse it"]}]},{"h":"4 Forward dash > wait and watch","ps":[{"k":"p","l":["Look for:","• Invincible OD reversals","• Super Arts","• Drive Reversal and similar defensive responses"]},{"k":"p","l":["If you block an invincible reversal, use your highest-damage Punish Counter route."]}]},{"h":"5 forward dash > shimmy","ps":[{"k":"p","l":["Aim:","• Catch throw techs","• Catch delayed throw techs"]},{"k":"r","l":[{"r":"Basic sequence: forward dash > walk back slightly > confirm the whiffed throw > heavy-attack starter"}]}]}]},{"t":"Okizeme basic mix-up","arts":[{"h":"","ps":[{"k":"p","l":["Choose based on the opponent's response."]},{"k":"r","l":[{"r":"Opponent blocks > command throw"}]},{"k":"r","l":[{"r":"Opponent presses buttons > meaty strike"}]},{"k":"r","l":[{"r":"Opponent jumps > strike or jump-catching option"}]},{"k":"r","l":[{"r":"Opponent attempts a throw tech > shimmy"}]},{"k":"r","l":[{"r":"Opponent uses an invincible reversal > block and use your strongest punish"}]},{"k":"r","l":[{"r":"Opponent repeatedly uses DI > counter with DI or mix in options that let you block"}]}]}]},{"t":"Pressure from raw DR","arts":[{"h":"basic","ps":[{"k":"r","l":[{"r":"DR > cr.MP"}]},{"k":"r","l":[{"r":"hit: > 4HP > M Renversé"}]},{"k":"r","l":[{"s":"On block, choose a command throw, strike, or shimmy."}]}]}]},{"t":"Corner Setplay","arts":[{"h":"","ps":[{"k":"p","l":["In the corner, the opponent cannot retreat, making Manon's strike / command-throw mix-up especially threatening."]},{"k":"p","l":["Basic options:"]}]},{"h":"strike meaty","ps":[{"k":"r","l":[{"s":"On hit, confirm into a Renversé route."}]}]},{"h":"Command throw","ps":[{"k":"r","l":[{"s":"Increase Medal Level."}]}]},{"h":"shimmy","ps":[{"k":"r","l":[{"s":"Catch a throw-tech attempt."}]}]},{"h":"DI","ps":[{"k":"r","l":[{"s":"Use against Burnout or an opponent committed to blocking."}]}]},{"h":"Wait and watch","ps":[{"k":"r","l":[{"s":"Block an invincible reversal or Super Art, then use your strongest punish."}]}]}]},{"t":"Adjust your plan to Medal Level","arts":[{"h":"Lv1…2","ps":[{"k":"p","l":["First priority: gain Medals through Renversé or command throws."]},{"k":"p","l":["Increasing the reward of your next command throw matters more than immediate damage alone."]}]},{"h":"Lv3","ps":[{"k":"p","l":["Balance combo damage with Medal gain."]},{"k":"p","l":["Do not force command throws. Use strikes to catch jumps and button presses."]}]},{"h":"Lv4…5","ps":[{"k":"p","l":["Command throws themselves now deal very high damage."]},{"k":"p","l":["The opponent is more likely to jump, press buttons, or use an invincible reversal. Establish the command-throw threat, then exploit those responses with strikes."]}]}]},{"t":"Practical Training Priorities","arts":[{"h":"First priority","ps":[{"k":"r","l":[{"r":"1. Light attacks > H Rond-point"},{"r":"2. st.MP > DR > cr.MP > 4HP > Renversé"},{"r":"3. Jumping attack > 4HP > Renversé"},{"r":"4. DI Punish Counter > Medal-building combo"},{"s":"5. cr.HP anti-air"}]}]},{"h":"Next priorities","ps":[{"k":"r","l":[{"r":"6. H Rond-point ender > forward-dash okizeme"},{"r":"7. After a command throw > forward dash > strike / throw / wait"},{"s":"8. Shimmy"},{"s":"9. Corner DI combos"},{"r":"10. OD anti-air > Renversé"}]}]},{"h":"Advanced priorities","ps":[{"k":"p","l":["11. Finish rounds with SA3","12. Assess reward by Medal Level","13. Wait on a read of an invincible reversal","14. Include corner DI in your options against Burnout"]}]}]},{"t":"Recommended Training Mode Recordings","arts":[{"h":"","ps":[{"k":"p","l":["Recording 1: immediate LP on wake-up"]},{"k":"p","l":["Recording 2: jump on wake-up"]},{"k":"p","l":["Recording 3: throw on wake-up"]},{"k":"p","l":["Recording 4: invincible OD reversal on wake-up"]},{"k":"p","l":["Recording 5: DI on wake-up"]},{"k":"p","l":["Randomly play these 5 recordings and practice choosing among:"]},{"k":"p","l":["• Meaty strike","• Command throw","• Shimmy","• Block"]},{"k":"p","l":["Practicing the appropriate response makes the drill useful in matches."]}]}]},{"t":"Important notes","arts":[{"h":"","ps":[{"k":"p","l":["• Dashing after a command throw does not always give frame advantage. Treat it as a way to exploit an opponent's hesitation."]},{"k":"p","l":["• Older videos and articles may predate balance changes. Recheck frame values and guaranteed situations in Training Mode."]},{"k":"p","l":["• Damage varies with Medal Level, starter scaling, Drive Gauge spent, and Super Art scaling."]},{"k":"p","l":["• Decide by situation whether to gain a Medal with Renversé or prioritize okizeme, corner carry, or a round-ending Super Art."]}]}]},{"t":"Reference material","arts":[{"h":"","ps":[{"k":"p","l":["• STREET FIGHTER 6 Wiki: Manon basic data and combos","• Ultimate Frame Data — Manon","• Beginner Manon combo articles","• Manon okizeme and post-command-throw setplay explanations","• Guide material available as of 2026-8"]}]}]},{"t":"Quick reference","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"st.MP hit > DR > cr.MP > 4HP > Renversé"}]},{"k":"r","l":[{"s":"Light attacks"},{"s":"> H Rond-point"}]},{"k":"r","l":[{"r":"Jump-in > 4HP > Renversé"}]},{"k":"r","l":[{"r":"DI Punish Counter > forward dash > 4HP > OD Rond-point > Renversé"}]},{"k":"r","l":[{"s":"Anti-air: cr.HP"},{"r":"With meter: OD Rond-point > Renversé"}]},{"k":"r","l":[{"r":"After a command throw > forward dash > command throw / strike / shimmy / wait"}]},{"k":"r","l":[{"r":"After H Rond-point > forward-dash okizeme"}]},{"k":"r","l":[{"s":"Corner options: strike / command throw / shimmy / DI / wait"}]}]}]}]}
};
