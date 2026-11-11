// Marisa: guide + full frame data.
(window.HUB_DATA = window.HUB_DATA || {});
(HUB_DATA.chars = HUB_DATA.chars || {})["marisa"] = {
  "guide": {
    "slug": "marisa",
    "name": "Marisa",
    "release": {
      "en": "Base game (June 2023)",
      "pt": "Jogo base (junho de 2023)"
    },
    "archetype": "midrange",
    "difficulty": 2,
    "difficulty_why": {
      "en": "Simple motion inputs, short combos and huge damage make her easy to start with; the hard part is spacing slow heavies and knowing when to use armor.",
      "pt": "Inputs simples, combos curtos e dano enorme a tornam fácil para começar; a parte difícil é o espaçamento dos golpes fortes lentos e saber quando usar a armadura."
    },
    "summary": {
      "en": "Marisa is a powerful forward-moving fighter with slow but damaging buttons and armored attacks. She wins by walking you down, armoring through your pokes with Gladius, and turning a few big hits and knockdowns into strike/throw pressure.",
      "pt": "A Marisa é uma lutadora poderosa que avança muito, com botões lentos mas de muito dano e ataques com armadura. Ela vence encurtando a distância, atravessando seus pokes com o Gladius e transformando poucos hits grandes e knockdowns em pressão de golpe/throw."
    },
    "strengths": [
      {
        "en": "Very high damage from simple combos and punishes.",
        "pt": "Dano muito alto com combos e punishes simples."
      },
      {
        "en": "Gladius has super armor (OD: 2 hits with armor break), so she can push through pokes.",
        "pt": "O Gladius tem super armor (OD: 2 hits com armor break), então ela atravessa pokes."
      },
      {
        "en": "Charged heavies and Magna Bunker (charged, +4) let her keep her turn on block.",
        "pt": "Golpes fortes carregados e o Magna Bunker (carregado, +4) permitem que ela mantenha o turno no block."
      }
    ],
    "weaknesses": [
      {
        "en": "Slow normals: 5LP is 6f and many heavies start in 12-15f, so she loses fast exchanges.",
        "pt": "Normais lentos: o 5LP sai em 6f e vários golpes fortes saem em 12-15f, então ela perde trocas rápidas."
      },
      {
        "en": "Reactive anti-airing is difficult for her.",
        "pt": "Fazer anti-air no reflexo é difícil para ela."
      },
      {
        "en": "Many specials are punishable (Dimachaerus -16, Gladius -5) and she can be zoned out.",
        "pt": "Vários especiais são puníveis (Dimachaerus -16, Gladius -5) e ela pode ser zoneada."
      }
    ],
    "gameplan": {
      "en": "Walk forward and poke with 5MP, 2MK and Magna Bunker (4HP). When the opponent keeps pressing buttons in front of you, Gladius (236P) armors through and lands a big hit; OD Gladius breaks armor and absorbs two hits. Against fireballs, use Drive Rush or careful walking to get in. After a knockdown, mix throws, frame traps with 5MP (-1) and her 4f 2LP, and charged heavies that are plus on block. Scutum (214K) is a guard stance with strike and throw follow-ups. Her damage means one good read or punish can swing the round.",
      "pt": "Ande para frente e dê poke com 5MP, 2MK e Magna Bunker (4HP). Quando o oponente insiste em apertar botões na sua frente, o Gladius (236P) atravessa com armadura e acerta um hit grande; o OD Gladius quebra a armadura e absorve dois hits. Contra fireballs, use Drive Rush ou ande com cuidado para entrar. Depois de um knockdown, misture throws, frame traps com 5MP (-1) e o 2LP de 4f, e golpes fortes carregados que têm vantagem no block. O Scutum (214K) é uma stance de guarda com follow-ups de golpe e de throw. O dano dela faz com que uma boa leitura ou punish vire o round."
    },
    "key_moves": [
      {
        "name": "Gladius",
        "input": "236P",
        "classic": "QCF+P",
        "role": {
          "en": "Armored punch: L has 1 hit of upper-body armor (frames 5-10), OD has 2 hits with armor break (frames 1-22). Hold the button to charge. -5 on block (OD -2).",
          "pt": "Soco com armadura: o L tem 1 hit de armadura na parte de cima (frames 5-10), o OD tem 2 hits com armor break (frames 1-22). Segure o botão para carregar. -5 no block (OD -2)."
        }
      },
      {
        "name": "Dimachaerus",
        "input": "214P > 6P",
        "classic": "QCB+P, F+P",
        "role": {
          "en": "Combo tool with a follow-up; L version is air-invincible on frames 5-15, so it also works as an anti-air. -16 on block.",
          "pt": "Ferramenta de combo com follow-up; a versão L é invencível contra ataques aéreos nos frames 5-15, então também serve de anti-air. -16 no block."
        }
      },
      {
        "name": "Phalanx",
        "input": "623P",
        "classic": "DP+P",
        "role": {
          "en": "Slow overhead attack (25f for L) that is +3 on block.",
          "pt": "Ataque overhead lento (25f no L) que é +3 no block."
        }
      },
      {
        "name": "Quadriga",
        "input": "236K",
        "classic": "QCF+K",
        "role": {
          "en": "Advancing kick; H is +1 on block, L is -6.",
          "pt": "Chute que avança; o H é +1 no block, o L é -6."
        }
      },
      {
        "name": "Scutum",
        "input": "214K",
        "classic": "QCB+K",
        "role": {
          "en": "Guard stance with follow-ups: Tonitrus (P), Procella (K) and Enfold (LP+LK throw near the opponent).",
          "pt": "Stance de guarda com follow-ups: Tonitrus (P), Procella (K) e Enfold (LP+LK, throw perto do oponente)."
        }
      },
      {
        "name": "Javelin of Marisa / Meteorite / Goddess of the Hunt",
        "input": "SA1 236236P / SA2 214214P / SA3 236236K",
        "classic": "SA1 QCFx2+P / SA2 QCBx2+P / SA3 QCFx2+K",
        "role": {
          "en": "Super Arts for combo enders; SA1 can be held to change its effect; SA3 is stronger below 25% health.",
          "pt": "Super Arts para finalizar combos; o SA1 pode ser segurado para mudar o efeito; o SA3 fica mais forte abaixo de 25% de vida."
        }
      }
    ],
    "key_normals": [
      {
        "move": "5MP",
        "classic": "s.MP",
        "startup": 7,
        "on_block": -1,
        "on_hit": 2,
        "role": {
          "en": "Main pressure button and starter of the 5MP 5MP target combo.",
          "pt": "Principal botão de pressão e início do target combo 5MP 5MP."
        }
      },
      {
        "move": "2MK",
        "classic": "c.MK",
        "startup": 9,
        "on_block": -2,
        "on_hit": 5,
        "role": {
          "en": "Low poke that is only -2 on block.",
          "pt": "Poke low que é só -2 no block."
        }
      },
      {
        "move": "4HP",
        "classic": "b.HP (Magna Bunker)",
        "startup": 8,
        "on_block": -1,
        "on_hit": 3,
        "role": {
          "en": "Fast heavy-damage poke and combo starter; the charged version (20f) is +4 on block.",
          "pt": "Poke rápido de muito dano e início de combo; a versão carregada (20f) é +4 no block."
        }
      },
      {
        "move": "2LP",
        "classic": "c.LP",
        "startup": 4,
        "on_block": -1,
        "on_hit": 4,
        "role": {
          "en": "Her fastest button: use it to interrupt pressure and start light confirms.",
          "pt": "O botão mais rápido dela: use para interromper a pressão e iniciar confirms com golpes fracos."
        }
      }
    ],
    "anti_air": {
      "en": "L Dimachaerus (214LP) is invincible to air attacks on frames 5-15 and is her most reliable special anti-air, but it is -16 if blocked. Reactive anti-airing is hard for Marisa, so practise it in training mode and don't let opponents jump freely.",
      "pt": "O L Dimachaerus (214LP) é invencível contra ataques aéreos nos frames 5-15 e é o anti-air especial mais confiável dela, mas é -16 se for defendido. Fazer anti-air no reflexo é difícil para a Marisa, então treine no training mode e não deixe o oponente pular à vontade."
    },
    "combos": [
      {
        "label": {
          "en": "Light confirm",
          "pt": "Confirm com golpe fraco"
        },
        "route": "2LK 2LP 2LP > 214LP > 6P",
        "notes": {
          "en": "Lights into L Dimachaerus and its follow-up.",
          "pt": "Golpes fracos em L Dimachaerus e o follow-up."
        }
      },
      {
        "label": {
          "en": "Medium starter",
          "pt": "Starter médio"
        },
        "route": "5MP 5MP > 236MP",
        "notes": {
          "en": "Medium Two Hitter target combo cancelled into M Gladius.",
          "pt": "Target combo Medium Two Hitter cancelado em M Gladius."
        }
      },
      {
        "label": {
          "en": "Meterless corner combo",
          "pt": "Combo de canto sem barra"
        },
        "route": "4HP > 214HP > 6HP",
        "notes": {
          "en": "Magna Bunker into H Dimachaerus and its follow-up.",
          "pt": "Magna Bunker em H Dimachaerus e o follow-up."
        }
      }
    ],
    "tips": [
      {
        "en": "Use Gladius when you expect a poke, not against throws or lows: its armor is only on the upper body.",
        "pt": "Use o Gladius quando esperar um poke, não contra throws ou lows: a armadura é só na parte de cima."
      },
      {
        "en": "Respect your slow lights: 2LP (4f) is your only fast button to escape pressure.",
        "pt": "Respeite a lentidão dos seus golpes fracos: o 2LP (4f) é o único botão rápido para sair da pressão."
      },
      {
        "en": "Pick one Dimachaerus conversion and learn it well before adding more versions.",
        "pt": "Escolha uma conversão com Dimachaerus e aprenda bem antes de adicionar outras versões."
      }
    ],
    "counterplay": {
      "en": "Don't press buttons carelessly in front of her: Gladius armors through. Use throws, lows or multi-hit moves against armor, and Drive Rush or fast buttons to beat her slow heavies. Punish blocked Dimachaerus (-16) and Gladius (-5) up close. Her lights are slow (5LP 6f), so keep your pressure tight. Zone her and jump against her when you can, because anti-airing is hard for her.",
      "pt": "Não aperte botões sem cuidado na frente dela: o Gladius atravessa com armadura. Use throws, lows ou golpes de vários hits contra a armadura, e Drive Rush ou botões rápidos para ganhar dos golpes fortes lentos. Puna de perto o Dimachaerus (-16) e o Gladius (-5) defendidos. Os golpes fracos dela são lentos (5LP de 6f), então mantenha a pressão apertada. Faça zoning e pule quando puder, porque anti-air é difícil para ela."
    },
    "sources": [
      "https://www.streetfighter.com/6/character/marisa/frame",
      "https://www.streetfighter.com/6/ja-jp/character/marisa/frame",
      "https://www.streetfighter.com/6/en-us/character/marisa/movelist",
      "https://dashfight.com/sf6/characters/marisa-1687/combos",
      "https://sf6-lab.net/en/fighters/marisa",
      "https://www.ggrecon.com/guides/street-fighter-6-marisa-character-guide/"
    ],
    "data_note": {
      "en": "Frame data from Capcom's official frame data page (EN and JP agree on the values used, Classic controls), read Oct 2026 after the Aug 2026 patch. Charged 5HP block value differed between reads (+4/+5) and was left out. Combos from DashFight (July 2023), not lab-tested on the current patch. Values may change with patches. Rechecked on October 23, 2026 against FAT's post-patch data (October 22 update): every key normal value matches, and the combos that use moves changed by the August 2026 patch were checked against the new numbers.",
      "pt": "Frame data da página oficial da Capcom (EN e JP batem nos valores usados, controle Clássico), lida em out/2026 depois do patch de ago/2026. O valor no block do 5HP carregado divergiu entre leituras (+4/+5) e foi deixado de fora. Combos da DashFight (julho/2023), não testados no patch atual. Os valores podem mudar com patches. Revisado em 23 de outubro de 2026 com os dados pós-patch do FAT (atualização de 22 de outubro): todos os valores dos normais principais conferem, e os combos que usam golpes alterados pelo patch de agosto de 2026 foram conferidos com os números novos."
    }
  },
  "frames": {
    "m": [
      ["Stand LP","5LP","LP","n",6,3,11,0,-2,400,"tc","",0,1.216,"20% Start",null],
      ["Stand MP","5MP","MP","n",7,4,"15(17)",2,-1,700,"tc","",0,1.356,null,null],
      ["Stand HP","5HP","HP","n",12,2,23,3,-3,1000,"tc","",0,1.958,"10% Start",null],
      ["Stand HP (hold)","5HP (hold)","HP (hold)","n","23(5)",2,"21(22)",7,5,1200,"tc","var",0,2.188,"10% Start",null],
      ["Stand LK","5LK","LK","n",6,2,14,0,-2,400,"sp su","",0,1.433,"20% Start",null],
      ["Stand MK","5MK","MK","n",11,4,16,4,-2,800,"","",0,1.749,null,null],
      ["Stand HK","5HK","HK","n",15,2,25,1,-3,1000,"","",0,"2.016~2.045","10% Start","The brief extended leg hurtbox extension 1F before active frames is strike invincible (cannot counter-poke projectiles)"],
      ["Stand HK (hold)","5HK (hold)","HK (hold)","n","24(10)",2,25,"KD +36",1,1200,"","var",0,"2.206~2.235","10% Start",null],
      ["Crouch LP","2LP","d+LP","n",4,2,10,4,-1,300,"ch sp su","",0,1.17,"20% Start",null],
      ["Crouch MP","2MP","d+MP","n",8,3,16,3,-2,700,"sp su","",0,1.45,null,"Topmost hurtboxes on frames 8-15 are projectile invincible (avoids Sagat's MP/HP Tiger Shot)"],
      ["Crouch HP","2HP","d+HP","n",9,5,23,"KD +35",-6,900,"","",0,1.103,null,"Head hurtbox is invincible to airborne strikes on frames 10-13"],
      ["Crouch HP (hold)","2HP (hold)","d+HP (hold)","n","21(4)",6,21,"KD +52",-3,1000,"su","var",0,1.103,null,"Head hurtbox is invincible to airborne strikes on frames 20-31"],
      ["Crouch LK","2LK","d+LK","n",5,3,12,2,-3,300,"ch","",0,1.34,"20% Start",null],
      ["Crouch MK","2MK","d+MK","n",9,3,"17(18)",5,-2,600,"","",0,1.623,"20% Start","Topmost head hurtbox on frames 9-16 is projectile invincible (avoids Sagat's MP/HP Tiger Shot but becomes vulnerable from frame 17 onward)"],
      ["Crouch HK","2HK","d+HK","n",11,3,26,"KD +29",-11,1000,"","",0,1.856,null,"Topmost hurtboxes on frames 1-7 are projectile invincible (avoids Sagat's MP/HP Tiger Shot)"],
      ["Crouch HK (hold)","2HK (hold)","d+HK (hold)","n","20(4)",3,"20(23)","KD +35",-3,1200,"","var",0,1.956,null,"Topmost hurtboxes on frames 1-7 are projectile invincible (avoids Sagat's MP/HP Tiger Shot but becomes vulnerable from frame 8 onward)"],
      ["Jump LP","8LP","u+LP","n",4,7,null,"9~11","6~8",300,"","",0,1.24,null,null],
      ["Jump MP","8MP","u+MP","n",7,4,null,"8~11 (KD)","4~7",700,"tc","",0,1.26,null,null],
      ["Jump HP","8HP","u+HP","n",10,7,null,"9~15 (KD)","5~11",800,"","",0,1.14,null,null],
      ["Jump HP (hold)","8HP (hold)","u+HP (hold)","n","28(5)",6,null,"HKD +69(75)","12~18",1500,"","var",0,1.14,null,null],
      ["Jump LK","8LK","u+LK","n",5,10,null,"4~11","1~8",300,"","",0,0.64,null,null],
      ["Jump MK","8MK","u+MK","n",8,8,null,"9~14","6~11",500,"","",0,1.31,null,null],
      ["Jump HK","8HK","u+HK","n",10,7,null,"10~15","6~11",800,"","",0,1.19,null,null],
      ["Jump HK (hold)","8HK (hold)","u+HK (hold)","n","29(3)",6,null,"HKD +70(75)","13~18",1500,"","var",0,1.19,null,null],
      ["Caelum Arc","8 > 2HP","u > d+HP","n",9,9,null,"11~15 (KD)","7~11",800,"","",0,0.93,null,null],
      ["Caelum Arc (hold)","8 > 2HP (hold)","u > u+HP (hold)","n","28(4)",9,null,"HKD +71(75)","14~18",1500,"","var",0,0.93,null,null],
      ["Volare Combo","8MP > 8MP","u+MP > u+MP","n",10,3,null,"KD",null,800,"tc","",0,1.36,null,null],
      ["Novacula","6MP","f+MP","n",9,2,20,2,-3,800,"tc","",0,1.893,null,null],
      ["Novacula Swipe","6MP > HP","f+MP > HP","n",11,2,26,"KD +31",-12,800,"","",0,1.612,null,null],
      ["Novacula Thrust","6MP > HK","f+MP > HK","n",11,4,23,"KD +39","-10(-26)",800,"su","",0,"2.053~2.07",null,null],
      ["Magna Bunker","4HP","b+HP","n",8,2,"21(24)",3,-1,900,"sp su","",0,1.323,null,null],
      ["Magna Bunker (hold)","4HP (hold)","b+HP (hold)","n","20(3)",2,"19(24)",13,4,1000,"sp su","var",0,"1.361~1.413",null,null],
      ["Malleus","3HP","df+HP","n",21,2,21,0,-3,900,"tc","",0,1.717,null,null],
      ["Malleus (hold)","3HP (hold)","df+HP (hold)","n","28(14)",2,19,5,2,1000,"tc","var",0,1.907,null,null],
      ["Malleus Breaker","3HP > 3HP","df+HP > df+HP","n",18,2,24,"KD +29",-12,900,"","",0,0.85,null,null],
      ["Knee","6HK","f+HK","n",14,4,20,4,-2,900,"tc sp su","",0,1.912,null,null],
      ["Knee (hold)","6HK (hold)","f+HK (hold)","n","27(7)",4,19,10,3,1000,"tc sp su","var",0,2.212,null,null],
      ["Falx Crusher","6HK > 6HK","f+HK > f+HK","n",16,5,25,"KD +52",-12,1000,"","",0,"1.528~1.719",null,null],
      ["Light Two Hitter","5LP > LP","LP > LP","n",14,3,22,-3,-6,600,"sp su","",0,1.64,"10% Start / Combo (5% Extra)",null],
      ["Medium Two Hitter","5MP > MP","MP > MP","n",14,2,23,-3,-8,600,"sp su","",0,1.779,null,null],
      ["Heavy Two Hitter","5HP > HP","HP > HP","n",24,3,19,"KD +42","2(4)",1000,"","",0,"1.608 (1.878)",null,null],
      ["Mounted Grace","LPLK","LP+LK","t",5,3,23,"KD +23",null,"1200(2040)","","",0,0.9,"20% Immediate",null],
      ["Ponte Milvio","4LPLK","b+LP+LK","t",5,3,23,"KD +33",null,"1200(2040)","","",0,0.9,"20% Immediate",null],
      ["Drive Impact: Secutor","HPHK","HP+HK","d",26,2,35,"KD (notes)",-3,800,"","",0,2.527,"20% Start",null],
      ["Drive Reversal: Love Tap","6HPHK","f+HP+HK","d","20(18)",3,26,"KD +23",-6,500,"","",0,1.798,null,"Fully invincible on frames 1-22 (blockstun) / frames 1-20 (reversal) Guaranteed to interrupt any Drive Rush canceled normal if performed immediately out of blockstun (unless the opponent reacts with an invincible move or counter)"],
      ["Drive Parry","MPMK","MP+MK","d",1,"12(2)","33(1)notes",null,null,null,"","",0,null,"50% Multiplier (Perfect)","Throw invincible during the recovery of a successful parry (just like during blockstun) Fully invincible for 6F after a successful Perfect Parry against a strike, which carries over to any attack you perform (ensuring a 5F or faster punish will always interrupt multi-hit attacks)"],
      ["Drive Rush","MPMK / 66 (cancel)","MP+MK / f,f (cancel)","d","9(11)","45(46)","24(23)",null,null,null,"","var",0,null,"15% Multiplier (Mid-Combo)",null],
      ["Perfect Parry (strike)","MPMK","MPMK","d",1,null,1,null,null,0,"","",0,null,"Starter scaling 50%","Perfect Parry activates when an attack is absorbed on the frame a parry is input, or on the next frame. (For high and overhead attacks, the player must press the direction away from the opponent. For low attacks, down and back) If no direction is inputted the result will be a regular parry with an additional Drive increase of 3000. Fully invincible for 5 frames once recovery is over (invincibility not granted if you continue the parry) The player on the receiving end of a Perfect Parry cannot cancel and is forced into a Punish Counter state until their move is finished"],
      ["Perfect Parry (projectile)","MPMK","MPMK","d",1,null,10,null,null,0,"","",0,null,"Starter scaling 50%",null],
      ["Parry Drive Rush","66","f,f","d",null,null,"45 total",null,null,0,"","",0,null,"Multiplier scaling 15%",null],
      ["Cancel Drive Rush","66 or (5 or 6) MPMK","66 or (5 or 6) MPMK","d",null,null,"46 total",null,null,0,"","",0,null,"Multiplier scaling 15%",null],
      ["LP Gladius","236LP","qcf+LP","s",17,4,21,"KD +36",-5,1200,"su3","",0,"1.659~1.856",null,null],
      ["LP Gladius (hold)","236LP (hold)","qcf+LP (hold)","s","30(4-5)",4,20,"HKD +40",4,"2400 (1200*1000*200)","su3","var",0,"1.869~2.075",null,null],
      ["MP Gladius","236MP","qcf+MP","s",19,4,21,"KD +36",-5,1400,"su3","",0,"1.779~1.985",null,null],
      ["MP Gladius (hold)","236MP (hold)","qcf+MP (hold)","s","35(6-7)",4,20,"HKD +40",4,"2600 (1400*1000*200)","su3","var",0,"2.049~2.255",null,null],
      ["HP Gladius","236HP","qcf+HP","s",22,4,21,"KD +36",-5,1600,"su3","",0,"1.899~2.105",null,null],
      ["HP Gladius (hold)","236HP (hold)","qcf+HP (hold)","s","41(8-10)",4,20,"HKD +40",4,"2800 (1600*1000*200)","su3","var",0,"2.169~2.375",null,null],
      ["OD Gladius","236PP","qcf+PP","s",19,4,21,"KD +36",-2,1700,"su2 su3","",0,"1.899~2.105","30% Start",null],
      ["OD Gladius (hold)","236PP (hold)","qcf+PP (hold)","s","35(6-8)",4,20,"HKD +40",4,"2900 (1700*1000*200)","su2 su3","var",0,"2.169~2.269","30% Start",null],
      ["LP Dimachaerus","214LP","qcb+LP","s",12,4,30,-3,-16,600,"su3","",0,"1.395~1.535",null,"Invincible to airborne strikes on frames 5-15"],
      ["MP Dimachaerus","214MP","qcb+MP","s",16,5,30,0,-16,700,"su3","",0,"1.266~1.356",null,"Invincible to airborne strikes on frames 6-19 on head and upper body"],
      ["HP Dimachaerus","214HP","qcb+HP","s",22,4,30,"KD +38",-16,800,"su3","",0,"1.266~1.356",null,"Invincible to airborne strikes on frames 10-25 on head and shoulders only"],
      ["OD Dimachaerus","214PP","qcb+PP","s",16,4,26,"KD +42",-12,600,"su2 su3","",0,"1.266~1.356",null,"Invincible to airborne strikes on frames 5-19"],
      ["LP Dimachaerus Follow-up","214LP > 6P","qcb+LP > f+P","s",13,5,23,"KD +31",null,"1200 (600*600)","","",0,"2.375~2.397",null,null],
      ["MP Dimachaerus Follow-up","214MP > 6P","qcb+MP > f+P","s",13,5,24,"KD +36",null,"1300 (700*600)","","",0,"2.246~2.268","Combo (2 hits)",null],
      ["HP Dimachaerus Follow-up","214HP > 6P","qcb+HP > f+P","s",18,5,23,"KD +56",null,"1400 (800*600)","","",0,"2.246~2.268","Combo (2 hits)",null],
      ["OD Dimachaerus Follow-up","214PP > 6P","qcb+PP > f+P","s",13,5,23,"KD +58",null,"1200 (600*600)","","",0,"2.246~2.268","Combo (2 hits)",null],
      ["LP Phalanx","623LP","f,d,df+LP","s",25,6,15,"KD +42(43)","3(4)",1500,"","",0,"2.537~2.571",null,"Low crush and lower body projectile invincible on frames 12-27"],
      ["MP Phalanx","623MP","f,d,df+MP","s",28,6,15,"KD +42(43)","3(4)",1600,"","",0,"2.817~2.871",null,"Low crush and lower body projectile invincible on frames 12-30"],
      ["HP Phalanx","623HP","f,d,df+HP","s",32,6,15,"KD +42(43)","3(4)",1700,"","",0,"3.332~3.386",null,"Low crush and lower body projectile invincible on frames 9-34"],
      ["OD Phalanx","623PP","f,d,df+PP","s",28,6,15,"KD +70 (Tumble) (HKD +138 Wall Splat)","4(5)",1400,"","",0,"3.182~3.246",null,"Low crush and lower body projectile invincible on frames 12-30"],
      ["LK Quadriga","236LK","qcf+LK","s",20,4,24,"KD +35",-6,1400,"su3","",0,2.885,null,null],
      ["MK Quadriga","236MK","qcf+MK","s",24,4,22,"KD +37",-3,1500,"su3","",0,3.22,null,null],
      ["HK Quadriga","236HK","qcf+HK","s",29,4,21,"KD +37",1,1600,"su3","",0,3.735,null,null],
      ["OD Quadriga","236KK","qcf+KK","s",24,4,24,"Wall Splat +50(68)",-6,1500,"su2 su3","",0,3.54,null,null],
      ["Scutum","214K","qcb+K","s","3(8)","26(116)",26,null,null,null,"","",0,null,null,null],
      ["Scutum (absorb)","214K (absorb)","qcb+K (absorb)","s",7,4,20,-1,-3,700,"","var",0,1.916,null,null],
      ["OD Scutum","214KK","qcb+KK","s","1(8)","28(58)",29,null,null,null,"","",0,null,null,null],
      ["OD Scutum (absorb)","214KK (absorb)","qcb+KK (absorb)","s",7,4,20,-1,-3,700,"","var",0,1.816,null,null],
      ["Tonitrus 1","214K > P","qcb+K > P","s","8+15","3(2)","23(25)",1,-3,900,"","",0,2.253,null,null],
      ["Tonitrus 2","214K > P > P","qcb+K > P > P","s","8+15+19","3(19)4",35,"KD +31",-21,"1900 (900*1000)","","",0,null,null,null],
      ["Procella","214K > K","qcb+K > K","s","8+16",3,37,"HKD +22",-24,1200,"","",0,"2.666~2.711",null,null],
      ["Enfold","214K > LPLK","qcb+K > LP+LK","s","8+5",3,54,"HKD +18",null,2500,"","",0,"1.109~1.164",null,null],
      ["Scutum(Physical counter version)","","","s",7,4,20,-1,-3,700,"","state",0,null,null,null],
      ["OD Scutum(Physical counter version)","","","s",7,4,20,-1,-3,700,"","state",0,null,null,null],
      ["Javelin of Marisa","236236P","qcf,qcf+P","u",19,5,60,"KD +14",-43,2200,"","",0,"2.694~3.215","30% Minimum","Strike and Throw invincible on frame 1 (during screen freeze)"],
      ["Javelin of Marisa (Hold)","236236P (hold)","qcf,qcf+P (hold)","u","42(6)",6,60,"HKD +35(KD +17)",-42,"2900(2600)","","var",0,"2.504~3.075","30% Minimum","Strike and Throw invincible on frame 1 (during screen freeze)"],
      ["Javelin of Marisa (Counter)","236236P (counter)","qcf,qcf+P (counter)","u",6,3,54,"KD +46",-37,2400,"","var",0,null,"30% Minimum","Fully invincible on frames 1-10"],
      ["Meteorite","214214P","qcb,qcb+P","u",9,"8(32)3",59,"HKD +17","-44(-77)","3000(2500)","","",0,"1.16 / 1.56 / 1.76 (1st)","40% Minimum / 15% Immediate","Fully invincible on frames 1-16"],
      ["Goddess of the Hunt","236236K","qcf,qcf+K","u",13,7,60,"HKD +14","-39(-33)",4000,"","",0,"2.289~2.911","50% Minimum / 10% Immediate (special)","Fully invincible on frames 1-19"],
      ["Goddess of the Hunt (Critical Art)","236236K (CA)","qcf,qcf+K (CA)","u",13,7,60,"HKD +14","-39(-33)",4500,"","",0,"2.289~2.911","50% Minimum / 10% Immediate (special)","Fully invincible on frames 1-19"],
      ["Javelin of Marisa(Physical counter version)","236236P","qcf,qcf+P","u",7,3,54,"KD",-37,2400,"","state",0,null,null,"Completely invincible from frames 1 - 10"]
    ],
  "s": {
      "fastestNormal": "4f",
      "bestReversal": "Goddess of the Hunt",
      "fDash": "22",
      "bDash": "25",
      "health": "10500",
      "jump": "4+38+3",
      "throwRange": "0.9"
    }
  }
};
