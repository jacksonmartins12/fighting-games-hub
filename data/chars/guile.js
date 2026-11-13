// Guile: guide + full frame data.
(window.HUB_DATA = window.HUB_DATA || {});
(HUB_DATA.chars = HUB_DATA.chars || {})["guile"] = {
  "guide": {
    "slug": "guile",
    "name": "Guile",
    "release": {
      "en": "Base game (June 2023)",
      "pt": "Jogo base (junho de 2023)"
    },
    "archetype": "zoner",
    "difficulty": 3,
    "difficulty_why": {
      "en": "His plan is simple to understand, but every special is a charge move, so you must learn to keep back-charge and down-charge while walking, blocking and pressing buttons. Charge management and patience are the real skill test.",
      "pt": "O plano de jogo é fácil de entender, mas todo especial é de carga, então você precisa aprender a manter a carga para trás e para baixo enquanto anda, defende e aperta botões. Gerenciar a carga e ter paciência é o verdadeiro teste."
    },
    "summary": {
      "en": "Guile is the classic charge zoner: he controls the screen with fast-recovering Sonic Booms and swats jumps with Somersault Kick. He wins by making the opponent come to him, poking them with long, fast normals and punishing every bad jump.",
      "pt": "Guile é o zoner de carga clássico: controla a tela com Sonic Booms que recuperam rápido e derruba pulos com o Somersault Kick. Ele vence fazendo o oponente vir até ele, cutucando com normais longos e rápidos e punindo cada pulo mal feito."
    },
    "strengths": [
      {
        "en": "Sonic Boom starts in 10 frames, is only -3 on block, and the OD version is +3 on block, so he can zone and also advance behind it.",
        "pt": "O Sonic Boom sai em 10 frames, é só -3 no block e a versão OD é +3 no block, então ele consegue fazer zoning e também avançar atrás dele."
      },
      {
        "en": "Fast, long normals: 2MP (6f), 5MP (7f, 0 on block) and 5HK (12f) win a lot of footsies.",
        "pt": "Normais rápidos e longos: 2MP (6f), 5MP (7f, 0 no block) e 5HK (12f) ganham muitas trocas de footsies."
      },
      {
        "en": "Excellent anti-air: L Somersault Kick starts in 5 frames.",
        "pt": "Anti-air excelente: o L Somersault Kick sai em 5 frames."
      }
    ],
    "weaknesses": [
      {
        "en": "Without charge he loses Sonic Boom and Somersault Kick; walking forward or standing up gives away his best tools.",
        "pt": "Sem carga ele perde Sonic Boom e Somersault Kick; andar para frente ou ficar em pé entrega as melhores ferramentas dele."
      },
      {
        "en": "Somersault Kick is -30 or worse on block, a huge punish if you guess wrong.",
        "pt": "O Somersault Kick é -30 ou pior no block, um punish enorme se você errar a leitura."
      },
      {
        "en": "Once cornered and under pressure, his charge-based defense is easier to bait than a motion-input Shoryuken.",
        "pt": "Quando ele está encurralado e sob pressão, a defesa baseada em carga é mais fácil de baitar do que um Shoryuken de meia-lua."
      }
    ],
    "gameplan": {
      "en": "Sit in down-back, throw Sonic Booms at a pace that makes jumping risky, and keep down-charge ready so any jump meets Somersault Kick. Check forward walks and dashes with 2MP, 5MP and 5HK. When you want to push, throw a Sonic Boom or OD Sonic Blade (+1 on block) and walk or Drive Rush behind it; 5MP is 0 on block, so you can keep your turn with throws and frame traps. On defense, block patiently while holding charge: down-back keeps both charges, so you can anti-air or Sonic Boom the moment the opponent gives you a gap.",
      "pt": "Fique segurando baixo-trás, solte Sonic Booms num ritmo que deixe o pulo arriscado e mantenha a carga para baixo pronta para qualquer pulo tomar Somersault Kick. Cheque o andar e os dashes do oponente com 2MP, 5MP e 5HK. Quando quiser avançar, solte um Sonic Boom ou um OD Sonic Blade (+1 no block) e ande ou dê Drive Rush atrás dele; o 5MP é 0 no block, então dá para manter o turno com throws e frame traps. Sob pressão, defenda com paciência segurando a carga: baixo-trás mantém as duas cargas, então você pode fazer anti-air ou soltar Sonic Boom assim que o oponente der uma brecha."
    },
    "key_moves": [
      {
        "name": "Sonic Boom",
        "input": "[4]6P",
        "classic": "charge B,F+P",
        "role": {
          "en": "Main projectile and neutral tool: 10f startup in every strength, -3 on block; OD ([4]6PP) is +3 on block. Use it to control space and to walk in behind it.",
          "pt": "Projétil principal e ferramenta de neutral: 10f de startup em todas as forças, -3 no block; o OD ([4]6PP) é +3 no block. Use para controlar espaço e para andar atrás dele."
        }
      },
      {
        "name": "Somersault Kick",
        "input": "[2]8K",
        "classic": "charge D,U+K",
        "role": {
          "en": "Anti-air and combo ender (L 5f, M 6f, H 7f). Extremely unsafe on block (L -30), so don't throw it out as a guess on the ground.",
          "pt": "Anti-air e finalizador de combo (L 5f, M 6f, H 7f). Muito inseguro no block (L -30), então não solte no chão na base do chute."
        }
      },
      {
        "name": "Sonic Blade",
        "input": "214P",
        "classic": "QCB+P",
        "role": {
          "en": "Stationary projectile that covers space and extends combos (e.g. after Drive Impact). OD Sonic Blade (214PP) is +1 on block and is a strong way to start pressure.",
          "pt": "Projétil parado que ocupa espaço e estende combos (ex.: depois do Drive Impact). O OD Sonic Blade (214PP) é +1 no block e é um ótimo jeito de começar pressão."
        }
      },
      {
        "name": "Sonic Hurricane (SA1)",
        "input": "[4]646P",
        "classic": "charge B,F,B,F+P",
        "role": {
          "en": "Level 1 Super Art, used as a combo ender when the opponent is low on life.",
          "pt": "Super Art nível 1, usada como finalizador de combo quando o oponente está com pouca vida."
        }
      },
      {
        "name": "Solid Puncher (SA2)",
        "input": "214214P",
        "classic": "QCB x2+P",
        "role": {
          "en": "Level 2 Super Art that powers up his zoning with extra Sonic Break projectiles.",
          "pt": "Super Art nível 2 que turbina o zoning com projéteis extras de Sonic Break."
        }
      },
      {
        "name": "Crossfire Somersault (SA3)",
        "input": "[4]646K",
        "classic": "charge B,F,B,F+K",
        "role": {
          "en": "Level 3 Super Art: big-damage combo ender and reversal; stronger as a Critical Art at 25% life or less.",
          "pt": "Super Art nível 3: finalizador de combo de muito dano e reversal; mais forte como Critical Art com 25% de vida ou menos."
        }
      }
    ],
    "key_normals": [
      {
        "move": "2MP",
        "classic": "c.MP",
        "startup": 6,
        "on_block": -2,
        "on_hit": 4,
        "role": {
          "en": "Fast mid-range check that keeps down-charge; cancelable, and 2MP, 2MP is a target combo.",
          "pt": "Cutucada rápida de média distância que mantém a carga para baixo; cancelável, e 2MP, 2MP é um target combo."
        }
      },
      {
        "move": "5MP",
        "classic": "s.MP",
        "startup": 7,
        "on_block": 0,
        "on_hit": 6,
        "role": {
          "en": "Even on block and cancelable: his main pressure and frame-trap button.",
          "pt": "Neutro no block e cancelável: principal botão de pressão e frame trap."
        }
      },
      {
        "move": "5HK",
        "classic": "s.HK",
        "startup": 12,
        "on_block": -4,
        "on_hit": 4,
        "role": {
          "en": "Long-range poke to stop forward movement; only Super Art cancelable.",
          "pt": "Poke de longo alcance para parar quem avança; só cancela em Super Art."
        }
      },
      {
        "move": "2LP",
        "classic": "c.LP",
        "startup": 4,
        "on_block": -2,
        "on_hit": 5,
        "role": {
          "en": "Fastest button: interrupts pressure and starts light confirms.",
          "pt": "Botão mais rápido: interrompe pressão e começa confirms de golpes fracos."
        }
      }
    ],
    "anti_air": {
      "en": "Somersault Kick ([2]8K) is the best anti-air whenever you have down-charge; L version is the fastest (5f). Without charge, use a normal such as Guile High Kick (3HK) or air-to-air, and just block if you are not sure. Keep crouching between Sonic Booms so the charge is always ready.",
      "pt": "O Somersault Kick ([2]8K) é o melhor anti-air sempre que você tiver carga para baixo; a versão L é a mais rápida (5f). Sem carga, use um normal como o Guile High Kick (3HK) ou air-to-air, e se não tiver certeza, apenas defenda. Fique agachado entre os Sonic Booms para a carga estar sempre pronta."
    },
    "combos": [
      {
        "label": {
          "en": "Light confirm",
          "pt": "Confirm de golpes fracos"
        },
        "route": "2LK > 2LP, 5LK > [2]8HK",
        "notes": {
          "en": "Start crouching to build down-charge, then cancel the last light into H Somersault Kick.",
          "pt": "Comece agachado para juntar a carga para baixo e cancele o último golpe fraco em H Somersault Kick."
        }
      },
      {
        "label": {
          "en": "Punish Counter",
          "pt": "Punish Counter"
        },
        "route": "2MP (PC) > 5MP > 2MP > [2]8HK",
        "notes": {
          "en": "Standard Punish Counter route; the last 2MP keeps you crouching so Somersault Kick is charged.",
          "pt": "Rota padrão de Punish Counter; o último 2MP deixa você agachado para o Somersault Kick estar carregado."
        }
      },
      {
        "label": {
          "en": "Drive Impact wall splat",
          "pt": "Drive Impact com wall splat"
        },
        "route": "DI > 5HP > 214LP > [2]8HK",
        "notes": {
          "en": "After Drive Impact splats the opponent on the wall: 5HP into L Sonic Blade, then H Somersault Kick.",
          "pt": "Depois que o Drive Impact gruda o oponente na parede: 5HP em L Sonic Blade e depois H Somersault Kick."
        }
      }
    ],
    "tips": [
      {
        "en": "Practice moving while holding down-back: you keep both charges and can still anti-air or throw a Sonic Boom.",
        "pt": "Treine se mover segurando baixo-trás: você mantém as duas cargas e ainda pode fazer anti-air ou soltar Sonic Boom."
      },
      {
        "en": "Don't spam Sonic Boom; throw it when the opponent is at a distance where jumping over it lands them in Somersault Kick range.",
        "pt": "Não fique spammando Sonic Boom; solte quando o oponente estiver numa distância em que pular por cima o deixa no alcance do Somersault Kick."
      },
      {
        "en": "Use OD Sonic Blade or OD Sonic Boom with Drive gauge to take your turn; both are plus on block.",
        "pt": "Use OD Sonic Blade ou OD Sonic Boom com Drive Gauge para pegar o seu turno; os dois são plus no block."
      }
    ],
    "counterplay": {
      "en": "Make Guile lose his charge. Get close with Drive Rush or Drive Impact behind a well-timed read, and once you are in, stay there: block and punish a blocked Somersault Kick hard (it is -30 or worse). Don't jump from the distance where Sonic Boom is usually thrown; instead walk forward and block booms, use Drive Parry, or jump only when he commits to a Sonic Boom from close range. In the corner, bait his reversal and pressure with plus moves.",
      "pt": "Faça o Guile perder a carga. Chegue perto com Drive Rush ou Drive Impact numa boa leitura e, quando entrar, fique lá: defenda e puna forte um Somersault Kick defendido (é -30 ou pior). Não pule da distância em que ele costuma soltar Sonic Boom; ande para frente defendendo os booms, use Drive Parry ou pule só quando ele soltar Sonic Boom de perto. No canto, baite o reversal e pressione com golpes plus."
    },
    "sources": [
      "https://www.streetfighter.com/6/character/guile/frame",
      "https://www.eventhubs.com/moves/sf6/guile/",
      "https://www.sportskeeda.com/esports/street-fighter-6-guile-complete-combo-guide-bnb-drive-punish-counters"
    ],
    "data_note": {
      "en": "Frame data read from the official Capcom frame data page (classic controls) on 2026-10-02; values may change with patches. Super Art inputs from EventHubs' move list. Combos from Sportskeeda's Guile combo guide (undated, launch era) and not re-tested on the current patch. All 12 key-normal frame values were verified. Rechecked on October 23, 2026 against FAT's post-patch data (October 22 update): every key normal value matches, and the combos that use moves changed by the August 2026 patch were checked against the new numbers.",
      "pt": "Frame data lida na página oficial da Capcom (controle Clássico) em 02/10/2026; os valores podem mudar com patches. Inputs das Super Arts da lista de golpes do EventHubs. Combos do guia de combos do Guile da Sportskeeda (sem data, da época do lançamento), não testados no patch atual. Os 12 valores de frame dos normais foram verificados. Revisado em 23 de outubro de 2026 com os dados pós-patch do FAT (atualização de 22 de outubro): todos os valores dos normais principais conferem, e os combos que usam golpes alterados pelo patch de agosto de 2026 foram conferidos com os números novos."
    }
  },
  "frames": {
    "m": [
      ["Stand LP","5LP","LP","n",5,3,7,4,-2,300,"ch sp su","",0,1.07,"20% Start",null],
      ["Stand MP","5MP","MP","n",7,3,15,6,0,600,"sp su tc","",0,0.94,null,null],
      ["Stand HP","5HP","HP","n",7,3,23,-1,-6,900,"sp su","",0,"1.251~1.408","20% Start","There is a brief extended hurtbox on frame 6 of start-up (1F before active) that is strike invincible (cannot counter-poke projectiles)"],
      ["Stand LK","5LK","LK","n",5,2,12,3,-1,300,"sp su","",0,1.27,"20% Start",null],
      ["Stand MK","5MK","MK","n",7,5,18,1,-4,700,"","",0,1.436,null,null],
      ["Stand HK","5HK","HK","n",12,3,21,4,-4,800,"su","",0,1.906,"20% Start",null],
      ["Crouch LP","2LP","d+LP","n",4,3,8,5,-2,300,"ch sp su","",0,1.03,"20% Start",null],
      ["Crouch MP","2MP","d+MP","n",6,3,"13(16)",4,-2,600,"sp su tc","",0,1.22,null,null],
      ["Crouch HP","2HP","d+HP","n",9,5,20,0,-9,900,"sp su","",0,0.91,null,null],
      ["Crouch LK","2LK","d+LK","n",5,2,12,1,-3,200,"ch","",0,1.17,"20% Start",null],
      ["Crouch MK","2MK","d+MK","n",8,3,18,4,-5,500,"tc","",0,"1.423~1.593","20% Start",null],
      ["Crouch HK","2HK","d+HK","n",9,"2(16)3",21,"KD +34",-12,"900 (450*450)","tc","",0,"1.739~2.077","20% Start",null],
      ["Jump LP","8LP","u+LP","n",4,10,null,"4~9","0~5",300,"","",0,1.05,null,null],
      ["Jump MP","8MP","u+MP","n",7,3,null,"9~11 (KD)","5~7",700,"","",0,1.11,null,"Projectile invincible on lower body (legs) on frames 7-22"],
      ["Jump HP","8HP","u+HP","n",9,4,null,"9~15","5~11",800,"","",0,1.24,null,"Projectile invincible on lower body (legs) on frames 9-23"],
      ["Jump LK","8LK","u+LK","n",6,10,null,"5~10","1~6",300,"","",0,0.55,null,null],
      ["Jump MK","8MK","u+MK","n",7,7,null,"11~13","7~9",600,"","",0,1.09,null,"Projectile invincible on lower body (legs) on frames 7-20"],
      ["Jump HK","8HK","u+HK","n",10,5,null,"10~15","6~11",800,"","",0,1.14,null,null],
      ["Full Bullet Magnum","6MP","f+MP","n",20,3,19,2,-3,800,"","",0,1.465,null,null],
      ["Spinning Back Knuckle","6HP","f+HP","n",16,3,20,5,3,800,"","",0,"1.856~1.921",null,null],
      ["Burning Straight","4HP","b+HP","n",9,3,21,1,-4,800,"sp su","",0,1.49,null,null],
      ["Knee Bazooka","4LK","b+LK","n",8,4,15,"0(4)","-4(0)",500,"","",0,"1.323~1.587",null,null],
      ["Rolling Sobat","4 or 6+MK","b or f+MK","n",11,3,"18(21)",3,-6,700,"","",0,"1.863 Fwd / 0.767 Back",null,null],
      ["Reverse Spin Kick","6HK","f+HK","n",17,3,26,"-1 (KD +29)",-8,1000,"","",0,2.086,null,"Throw invincible and crushes lows on frames 4-28 The brief extended leg hurtbox on frame 16 of start-up (1F before active) is strike invincible (cannot counter-poke projectiles)"],
      ["Guile High Kick","3HK","df+HK","n",10,3,23,0,-9,1000,"sp su","",0,1.559,null,"The brief extended leg hurtbox on frame 9 of start-up (1F before active) is strike invincible (cannot counter-poke projectiles)"],
      ["Recoil Cannon","5MP > 4HP","MP > b+HP","n",16,3,26,"KD +35",-9,"1200 (600*600)","sp su","",0,null,null,null],
      ["Double Shot","2MP > 2MP","d+MP > d+MP","n",12,3,16,"KD +44",-6,"960 (600*360)","sp su","",0,null,"10% Immediate",null],
      ["Drake Fang","2MK > 6MP","d+MK > f+MP","n",20,3,21,1,-5,800,"","",0,null,null,null],
      ["Phantom Cutter","2HK > 3HK","d+HK > df+HK","n",10,3,25,"KD +33","-12(-30)",600,"sp su","",0,null,null,null],
      ["Dragon Suplex","LPLK","LP+LK","t",5,3,23,"KD +15",null,"1200(2040)","","",0,0.8,"20% Immediate",null],
      ["Judo Throw","4LPLK","b+LP+LK","t",5,3,23,"KD +18",null,"1200(2040)","","",0,0.8,"20% Immediate",null],
      ["Flying Mare","LPLK (air)","LP+LK (air)","t",5,3,null,"KD +21(23)",null,"1200(2040)","","air",0,0.67,null,null],
      ["Flying Buster Drop","4LPLK (air)","b+LP+LK (air)","t",5,3,null,"KD +15",null,"1200(2040)","","air",0,0.67,null,null],
      ["Drive Impact: Blitz Combination","HPHK","HP+HK","d",26,2,35,"KD (notes)",-3,800,"","",0,2.481,"20% Start",null],
      ["Drive Reversal: Strike Eagle","6HPHK","f+HP+HK","d","20(18)",3,26,"KD +23",-6,500,"","",0,1.013,null,"Fully invincible on frames 1-22 (blockstun) / frames 1-20 (reversal) Guaranteed to interrupt any Drive Rush canceled normal if performed immediately out of blockstun (unless the opponent reacts with an invincible move or counter)"],
      ["Drive Parry","MPMK","MP+MK","d",1,"12(2)","33(1)notes",null,null,null,"","",0,null,"50% Multiplier (Perfect)","Throw invincible during the recovery of a successful parry (just like during blockstun) Fully invincible for 6F after a successful Perfect Parry against a strike, which carries over to any attack you perform (ensuring a 5F or faster punish will always interrupt multi-hit attacks)"],
      ["Drive Rush","MPMK / 66 (cancel)","MP+MK / f,f (cancel)","d","9(11)","45(46)","24(23)",null,null,null,"","var",0,null,"15% Multiplier (Mid-Combo)",null],
      ["Perfect Parry (strike)","MPMK","MPMK","d",1,null,1,null,null,0,"","",0,null,"Starter scaling 50%","Perfect Parry activates when an attack is absorbed on the frame a parry is input, or on the next frame. (For high and overhead attacks, the player must press the direction away from the opponent. For low attacks, down and back) If no direction is inputted the result will be a regular parry with an additional Drive increase of 3000. Fully invincible for 5 frames once recovery is over (invincibility not granted if you continue the parry) The player on the receiving end of a Perfect Parry cannot cancel and is forced into a Punish Counter state until their move is finished"],
      ["Perfect Parry (projectile)","MPMK","MPMK","d",1,null,10,null,null,0,"","",0,null,"Starter scaling 50%",null],
      ["Parry Drive Rush","66","f,f","d",null,null,"45 total",null,null,0,"","",0,null,"Multiplier scaling 15%",null],
      ["Cancel Drive Rush","66 or (5 or 6) MPMK","66 or (5 or 6) MPMK","d",null,null,"46 total",null,null,0,"","",0,null,"Multiplier scaling 15%",null],
      ["LP Sonic Boom","[4]6LP","b,f+LP","s",10,null,30,"3(4)",-3,"550(600)","su3","",1,null,null,null],
      ["MP Sonic Boom","[4]6MP","b,f+MP","s",10,null,30,"3(4)",-3,"550(600)","su3","",1,null,null,null],
      ["HP Sonic Boom","[4]6HP","b,f+HP","s",10,null,30,"3(4)",-3,"550(600)","su3","",1,null,null,null],
      ["OD Sonic Boom","[4]6PP","b,f+PP","s",10,null,28,"KD +48",3,"1000 (500*500)","su2 su3","",1,null,"20% Start",null],
      ["LK Somersault Kick","[2]8LK","d,u+LK","s",5,6,"26+15","KD +36",-30,"1000(1200)","su3","",0,"1.095 (1st)","30% Start","Invincible to airborne strike attacks on frames 1-7"],
      ["MK Somersault Kick","[2]8MK","d,u+MK","s",6,6,"27+15","KD +37",-31,"1100(1300)","su3","",0,"1.249 (1st)","30% Start","Invincible to airborne strike attacks on frames 1-8"],
      ["HK Somersault Kick","[2]8HK","d,u+HK","s",7,6,"28+15","KD +39",-32,"1200(1400)","su3","",0,"1.42 (1st)","30% Start","Invincible to airborne strike attacks on frames 1-9"],
      ["OD Somersault Kick","[2]8KK","d,u+KK","s",6,"4*2","26+20","KD +29","-33(-37)","1600 (1000*600)","","",0,"1.33 (1st)",null,"Fully invincible on frames 1-11 (holds charge for 15F after leaving charge)"],
      ["LP Sonic Blade","214LP","qcb+LP","s",16,45,26,-3,-4,400,"","",1,"?",null,null],
      ["MP Sonic Blade","214MP","qcb+MP","s",21,85,29,-6,-7,400,"","",1,"?",null,null],
      ["HP Sonic Blade","214HP","qcb+HP","s",31,100,23,1,-1,"500 (250*250)","","",1,"?",null,null],
      ["Sonic Blade > Sonic Cross","214P > 6P","qcb+P > f+P","s","Blade*10",null,28,"KD ~",-1,"1000(1200)","su3","",1,null,null,null],
      ["Sonic Blade > OD Sonic Cross","214P > 6PP","qcb+P > f+PP","s","Blade*10",null,28,"KD ~",1,"1300 (400x2*500)","su2 su3","",1,null,null,null],
      ["OD Sonic Blade","214PP","qcb+PP","s",15,100,24,"KD +57",1,"600 (300*300)","su2 su3","",1,"?",null,null],
      ["OD Sonic Blade > Sonic Cross","214PP > 6PP","qcb+PP > f+P","s","15*10",null,28,"KD ~",null,"1300 (400x2*500)","su2 su3","",1,null,null,null],
      ["OD Sonic Blade > OD Sonic Cross","214PP > 6PP","qcb+PP > f+PP","s","15*10",null,28,"KD ~ (Spin+Splat)",null,"1700 (400x3*500)","su2 su3","",1,null,null,null],
      ["LP Sonic Cross (perfect timing)","6LP","f+LP","s",10,null,"38 total","KD",-1,1200,"","state",0,null,null,null],
      ["MP Sonic Cross (perfect timing)","6MP","f+MP","s",10,null,"38 total","KD",-1,1200,"","state",0,null,null,null],
      ["HP Sonic Cross (perfect timing)","6HP","f+HP","s",10,null,"38 total","KD",-1,1200,"","state",0,null,null,null],
      ["OD Sonic Cross1","6PP or (During OD Sonic Blade) 6P","6PP or (During OD Sonic Blade) 6P","s",10,null,"38 total","KD",6,1300,"","state",0,null,null,null],
      ["OD Sonic Cross2","6PP","f+PP","s",10,null,"38 total","KD",6,1700,"","",0,null,null,null],
      ["Sonic Break(Single shot)","5PP","PP","s",11,null,"36 total",2,-2,600,"","state",0,null,null,null],
      ["Sonic Break(Variation)","5P","P","s",11,null,"*36 total",2,-2,600,"","state",0,null,null,null],
      ["OD Sonic Break","5P","P","s",11,null,"35 total","KD",3,1000,"","state",0,null,null,null],
      ["Sonic Hurricane","[4]646P","b,f,b,f+P","u","8(7)","51(52)","81(68)","KD +41","-26(-2)","2000(1800)","","",1,"?","30% Minimum","Strike and Throw invincible on frames 1-8 No invincibility on the HP (Classic) / L (Modern) version"],
      ["Solid Puncher","214214P","qcb,qcb+P","u",1,null,5,null,null,null,"","",0,null,null,"No form of invincibility whatsoever"],
      ["Crossfire Somersault","[4]646K","b,f,b,f+K","u",9,6,"30+40","HKD +16",-59,"4000(3000)","","",0,"1.394 (1st)","50% Minimum / 10% Immediate (special)","Fully invincible on frames 1-14"],
      ["Crossfire Somersault (Critical Art)","[4]646K (CA)","b,f,b,f+K (CA)","u",9,6,"30+40","HKD +16",-59,"4500(3500)","","",0,"1.394 (1st)","50% Minimum / 10% Immediate (special)","Fully invincible on frames 1-14"]
    ],
  "s": {
      "fastestNormal": "4f",
      "bestReversal": "OD Somersault Kick",
      "fDash": "21",
      "bDash": "23",
      "health": "10000",
      "jump": "4+38+3",
      "throwRange": "0.8"
    }
  },
  "lab": {"by":"Iori (SF6 Lab)","url":"https://sf6-lab.net/en/fighters/guile/combo","updated":"2026-08-31","balance":"2026-08-03","items":[{"h":{"en":"cr.LK starter","pt":"Início com cr.LK"},"rows":[{"route":["cr.LK > cr.LP > H Somersault Kick"]},{"route":["If the extra light attack reaches: cr.LK > cr.LP > st.LK > H Somersault Kick"]}]},{"h":{"en":"Basic st.MP route","pt":"Rota básica de st.MP"},"rows":[{"route":["st.MP > cr.MP > H Somersault Kick"]}]},{"h":{"en":"Basic target combo","pt":"Target combo básico"},"rows":[{"route":["st.MP > 4HP > H Somersault Kick"]}]},{"h":{"en":"Single cr.MP starter","pt":"Início com um único cr.MP"},"rows":[{"route":["cr.MP > H Somersault Kick"]}]},{"h":{"en":"cr.HP combo","pt":"Combo de cr.HP"},"rows":[{"route":["cr.HP > H Somersault Kick"]}]},{"h":{"en":"Reliable DR MP route","pt":"Rota confiável de DR MP"},"rows":[{"route":["DR > st.MP > cr.HP > H Somersault Kick"]}]},{"h":{"en":"Higher-damage DR MP route","pt":"Rota de DR MP com mais dano"},"rows":[{"route":["DR > st.MP > st.MP > cr.MP > H Somersault Kick"]}]},{"h":{"en":"Drive Rush overhead","pt":"Overhead com Drive Rush"},"rows":[{"route":["DR > 6MP > cr.MP > H Somersault Kick"]}]},{"h":{"en":"st.HP Punish Counter","pt":"st.HP em Punish Counter"},"rows":[{"route":["st.HP PC > st.MP > 4HP > H Somersault Kick"]}]},{"h":{"en":"6HP Punish Counter","pt":"6HP em Punish Counter"},"rows":[{"route":["6HP PC > st.MP > cr.MP > H Somersault Kick"]}]}]}
};
