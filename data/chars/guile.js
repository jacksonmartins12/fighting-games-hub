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
  "lab": {"by":"Iori (SF6 Lab)","url":"https://sf6-lab.net/en/fighters/guile/combo","updated":"2026-08-31","balance":"2026-08-03","secs":[{"t":"Notation","arts":[{"h":"","ps":[{"k":"p","l":["DR = Parry Drive Rush","CDR = Cancel Drive Rush","PC = Punish Counter","CH = Counter Hit","J Sonic = Just Sonic Boom"]},{"k":"p","l":["Sonic Boom = [4]6P","Somersault Kick = [2]8K","Sonic Blade = 214P","Sonic Cross = 6P after Sonic Blade"]},{"k":"p","l":["SA1 Sonic Hurricane = [4]6・4・6P","SA2 Solid Puncher = 214214P","SA3 Crossfire Somersault = [4]6・4・6K"]}]}]},{"t":"Key changes in the 2026-8-3 version","arts":[{"h":"st.HK","ps":[{"k":"r","l":[{"s":"Startup changed from 13F to 12F."}]}]},{"h":"OD Sonic Blade","ps":[{"k":"r","l":[{"s":"Block advantage changed from -4F to +1F, improving block pressure as well as combo applications."}]}]},{"h":"SA1 Sonic Hurricane","ps":[{"k":"r","l":[{"s":"The horizontal version gained improved combo utility and coverage higher up. The upward HP version connects more reliably against standing opponents. Against a standing opponent, HP SA1 (upward) can now combo into LP/MP SA1 (horizontal)."}]}]},{"h":"cr.HP","ps":[{"k":"p","l":["The March 2026 adjustments made cr.HP cancelable into special moves and Super Arts."]},{"k":"p","l":["Because st.HK's startup changed, older corner Sonic Boom loops may need different timing."]}]}]},{"t":"10 essential starter combos","arts":[{"h":"1. cr.LK starter","ps":[{"k":"r","l":[{"r":"cr.LK > cr.LP > H Somersault Kick"}]},{"k":"r","l":[{"r":"If the extra light attack reaches: cr.LK > cr.LP > st.LK > H Somersault Kick"}]},{"k":"p","l":["Return the direction to neutral before st.LK, or you may get 4LK Knee Bazooka instead."]}]},{"h":"2 Basic st.MP route","ps":[{"k":"r","l":[{"r":"st.MP > cr.MP > H Somersault Kick"}]},{"k":"p","l":["Start charging down immediately after pressing st.MP."]}]},{"h":"3. Basic target combo","ps":[{"k":"r","l":[{"r":"st.MP > 4HP > H Somersault Kick"}]},{"k":"p","l":["A basic Recoil Cannon route. Begin the down charge from st.MP."]}]},{"h":"4. Single cr.MP starter","ps":[{"k":"r","l":[{"r":"cr.MP > H Somersault Kick"}]},{"k":"p","l":["cr.MP starts in 6F. It is useful for close-range confirms and punishes."]}]},{"h":"5. cr.HP combo","ps":[{"k":"r","l":[{"r":"cr.HP > H Somersault Kick"}]},{"k":"p","l":["An important route since March 2026: cr.HP can cancel into special moves and Super Arts."]}]},{"h":"6. Reliable DR MP route","ps":[{"k":"r","l":[{"r":"DR > st.MP > cr.HP > H Somersault Kick"}]}]},{"h":"7. Higher-damage DR MP route","ps":[{"k":"r","l":[{"r":"DR > st.MP > st.MP > cr.MP > H Somersault Kick"}]}]},{"h":"8. Drive Rush overhead","ps":[{"k":"r","l":[{"r":"DR > 6MP > cr.MP > H Somersault Kick"}]},{"k":"p","l":["6MP is an overhead. Drive Rush's added advantage lets it start a combo."]}]},{"h":"9 st.HP Punish Counter","ps":[{"k":"r","l":[{"r":"st.HP PC > st.MP > 4HP > H Somersault Kick"}]},{"k":"p","l":["Use after blocking an invincible reversal, after a successful shimmy, or in similar punish situations."]}]},{"h":"10 6HP Punish Counter","ps":[{"k":"r","l":[{"r":"6HP PC > st.MP > cr.MP > H Somersault Kick"}]},{"k":"p","l":["6HP is +3F on block. It whiffs against crouching opponents, so this route requires a standing opponent."]}]}]},{"t":"SA3 Combo","arts":[{"h":"basic","ps":[{"k":"r","l":[{"r":"cr.MP > H Somersault Kick > SA3"}]}]},{"h":"Easy route","ps":[{"k":"r","l":[{"r":"st.MP > 4HP > SA3"}]},{"k":"r","l":[{"r":"Note: st.MP > 4HP > H Somersault Kick > SA3"}]},{"k":"p","l":["That route may not give all of SA3's hits. Also learn the direct cancel from 4HP into SA3."]}]}]},{"t":"New SA1 combo: August 2026 version","arts":[{"h":"","ps":[{"k":"p","l":["Standing opponents only"]},{"k":"r","l":[{"r":"st.MP > 4HP > HP SA1 (upward) > LP/MP SA1 (horizontal)"}]},{"k":"p","l":["Uses 2 Super bars. A new damage route in the version described here."]},{"k":"p","l":["Earlier option"]},{"k":"r","l":[{"r":"st.MP > 4HP > HP version SA1 > OD Somersault Kick"}]},{"k":"p","l":["HP SA1 can miss a crouching opponent, so confirm that the opponent is standing."]}]}]},{"t":"2 HK Punish Counter","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"cr.HK PC > 3HK > H Somersault Kick"}]},{"k":"p","l":["Then"]},{"k":"r","l":[{"s":"> L/M SA1"}]},{"k":"p","l":["The combo can extend this far."]},{"k":"r","l":[{"r":"cr.HK > 3HK only combos when the first hit is a Punish Counter."}]}]}]},{"t":["6HK Punish Counter","6HK em Punish Counter"],"arts":[{"h":"","ps":[{"k":"r","l":[{"r":"6HK PC > L or M SA1"}]},{"k":"p","l":["6HK Punish Counter causes a large stagger, allowing an efficient direct combo into SA1."]}]}]},{"t":"High-damage st.HP / 6HP Punish Counter routes","arts":[{"h":"st.HP PC","ps":[{"k":"r","l":[{"r":"st.HP PC > st.HP > CDR > st.HK > cr.MP > H Somersault Kick > SA3"}]}]},{"h":"6HP PC: high-damage option","ps":[{"k":"r","l":[{"r":"6HP PC > st.HP > CDR > st.HK > st.HP > CDR > st.HK > cr.MP > H Somersault Kick > SA3"}]},{"k":"p","l":["st.HK starts in 12F in this version, so input timing may differ from older videos."]}]}]},{"t":"Corner combos","arts":[{"h":"Stable route","ps":[{"k":"r","l":[{"r":"6HP PC > st.MP > 4HP > L Sonic Blade > H Somersault Kick"}]}]},{"h":"Using OD Sonic Blade","ps":[{"k":"r","l":[{"r":"6HP PC > st.HP > OD Sonic Blade > Sonic Cross > H Somersault Kick"}]},{"k":"p","l":["OD Sonic Blade is +1F on block in the version described here."]}]}]},{"t":"Just Sonic Boom","arts":[{"h":"","ps":[{"k":"r","l":[{"s":"After completing the charge, press forward and P within 2F of each other to get Just Sonic Boom."}]},{"k":"p","l":["The Just version has 1F more advantage on hit and block than the regular version."]},{"k":"p","l":["On hit, this can allow a follow-up normal in some situations."]}]}]},{"t":"Practical Just Sonic Boom combos","arts":[{"h":"Midscreen","ps":[{"k":"r","l":[{"r":"6HP PC > cr.MP > L Just Sonic Boom > cr.LP > H Somersault Kick"}]}]},{"h":"Corner: relatively reliable route","ps":[{"k":"r","l":[{"r":"j.HP > cr.HP > L Just Sonic Boom > cr.LP > st.LK > H Somersault Kick"}]}]}]},{"t":"Sonic Boom loops","arts":[{"h":"","ps":[{"k":"p","l":["Example against a standing opponent"]},{"k":"r","l":[{"r":"st.MP > cr.MP > delayed L Just Sonic Boom > cr.MP > delayed L Just Sonic Boom > 3HK > H Somersault Kick"}]},{"k":"p","l":["Requirements: recognize standing versus crouching hits, use Just inputs, connect on later active frames, and maintain charge."]},{"k":"p","l":["An advanced option."]}]}]},{"t":"SA2 Solid Puncher","arts":[{"h":"easy","ps":[{"k":"r","l":[{"r":"st.HK > SA2 > OD Sonic Boom > Sonic Break"}]}]},{"h":"Example of a long corner-carry route","ps":[{"k":"r","l":[{"r":"st.HK > SA2 > 6HP > st.LP > cr.LP > st.LK > H Sonic Boom > repeated Sonic Break > forward dash > late-active 6HP > cr.MP target combo > H Somersault Kick"}]},{"k":"p","l":["SA2 also serves corner carry, Drive recovery, and chip damage against a burned-out opponent."]}]}]},{"t":"Key Frame Advantage by Ender","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"L Somersault Kick > +36F…"}]},{"k":"r","l":[{"r":"M Somersault Kick > +37F…"}]},{"k":"r","l":[{"r":"H Somersault Kick > +37F…"}]},{"k":"r","l":[{"r":"OD Somersault Kick > +29F…"}]},{"k":"r","l":[{"r":"cr.HK > +34F"}]},{"k":"r","l":[{"r":"OD Sonic Boom > at least approximately +48F"}]},{"k":"r","l":[{"r":"OD Sonic Blade > +54F or more"}]},{"k":"r","l":[{"r":"forward throw > +15F"}]},{"k":"r","l":[{"r":"back throw > +18F"}]},{"k":"r","l":[{"r":"Horizontal SA1 > +41F"}]},{"k":"r","l":[{"r":"Upward HP SA1 > +70F"}]},{"k":"r","l":[{"r":"SA3 > +16F"}]},{"k":"p","l":["Somersault Kick's advantage varies with hit height. H Somersault Kick does not always leave +42F."]}]}]},{"t":"Setplay","arts":[{"h":"1. Midscreen: after H Somersault Kick","ps":[{"k":"r","l":[{"s":"After H Somersault Kick: approximately +39–41F in common situations."}]},{"k":"p","l":["Midscreen"]},{"k":"r","l":[{"r":"H Somersault Kick > L Sonic Blade"}]},{"k":"p","l":["This is a reliable option."]},{"k":"p","l":["From there:"]},{"k":"p","l":["Options: L Sonic Cross, crouch and wait, or anti-air a jump."]},{"k":"p","l":["At midscreen, instead of forcing your way into point-blank range:"]},{"k":"r","l":[{"r":"Score a knockdown > set Sonic Blade > resume your game plan behind the projectile."}]},{"k":"p","l":["These are your basic options."]}]},{"h":"2. Midscreen H Sonic Blade setup","ps":[{"k":"r","l":[{"r":"H Somersault Kick > H Sonic Blade"}]},{"k":"r","l":[{"s":"If the opponent stays grounded, fire Sonic Boom to produce Sonic Cross."}]},{"k":"r","l":[{"s":"If the opponent jumps, do not fire Sonic Boom; anti-air instead."}]},{"k":"p","l":["basic"]},{"k":"r","l":[{"s":"Set Sonic Blade, then anti-air a jump or use Sonic Cross against a grounded opponent."}]}]},{"h":"3 corner / H Somersault Kick > Guile High Kickwhiff","ps":[{"k":"p","l":["corner"]},{"k":"r","l":[{"r":"H Somersault Kick > 3HK whiff"}]},{"k":"r","l":[{"s":"> +4F"}]},{"k":"p","l":["From there:"]},{"k":"p","l":["• throw","• strike","• walk-back shimmy"]},{"k":"p","l":["An important corner setplay sequence."]}]},{"h":"4 corner / H Somersault Kick > Sonic Blade meaty","ps":[{"k":"r","l":[{"r":"H Somersault Kick > L or H Sonic Blade"}]},{"k":"p","l":["Make the later active frames overlap the opponent's wake-up."]},{"k":"p","l":["Afterward"]},{"k":"p","l":["Follow-up options: strike, throw, shimmy, or Sonic Cross."]},{"k":"p","l":["Continue into these options."]},{"k":"p","l":["Sonic Blade is a projectile, so it can also cover some strike-invincible SA1 moves and counters."]},{"k":"p","l":["Watch out for Perfect Parry."]}]},{"h":"5. Important Year 4 change: OD Sonic Blade at +1","ps":[{"k":"r","l":[{"r":"OD Sonic Blade > +1F even on a regular block"}]},{"k":"p","l":["From there:"]},{"k":"r","l":[{"s":"cr.LP makes it easier to beat a 4F interrupt."}]},{"k":"p","l":["Other options:"]},{"k":"r","l":[{"r":"OD Sonic Blade > Sonic Cross"}]},{"k":"r","l":[{"r":"OD Sonic Blade > throw"}]},{"k":"r","l":[{"r":"OD Sonic Blade > wait and observe"}]},{"k":"p","l":["Choose among these options to match the opponent's response."]}]},{"h":"6. H Somersault Kick into a late-active overhead","ps":[{"k":"p","l":["corner"]},{"k":"r","l":[{"r":"H Somersault Kick > st.LK whiff > 6MP"}]},{"k":"p","l":["Connect 6MP on a later active frame."]},{"k":"r","l":[{"s":"On hit, this can leave enough advantage to combo into cr.LP."}]},{"k":"p","l":["An overhead option against opponents watching for a throw."]}]},{"h":"7. Midscreen: Drive Rush after M Somersault Kick","ps":[{"k":"r","l":[{"r":"cr.MP > M Somersault Kick"}]},{"k":"p","l":["Afterward"]},{"k":"r","l":[{"s":"• DR > cr.MP"},{"s":"• DR > 6MP"},{"s":"• DR > throw"}]},{"k":"p","l":["Choose among these options to match the opponent's response."]},{"k":"p","l":["At midscreen, recovery choices change the spacing. Setting Sonic Blade is often more reliable."]}]},{"h":"8 forward throw after","ps":[{"k":"r","l":[{"r":"forward throw > +15F"}]},{"k":"p","l":["This does not give a meterless throw loop."]},{"k":"p","l":["Options"]},{"k":"r","l":[{"s":"Options: L Sonic Boom; whiff LP and check for an invincible reversal; DR into throw; or DR into a strike."}]},{"k":"p","l":["Repeating DR throw every time is vulnerable to an invincible reversal on reaction to the rush."]}]},{"h":"9 HP version SA1 after +70F","ps":[{"k":"r","l":[{"r":"HP version SA1 > +70F"}]},{"k":"r","l":[{"r":"two forward dashes > 70 - 21 - 21 > +28F"}]},{"k":"p","l":["From there:"]},{"k":"p","l":["Prepare Sonic Blade, Drive Rush, or a meaty projectile."]},{"k":"p","l":["These options can be prepared from this situation."]}]},{"h":"10 +42F approximately safe jump","ps":[{"k":"p","l":["If the combo's hit height leaves approximately +42F after H Somersault Kick or a similar ender:"]},{"k":"r","l":[{"s":"> immediateforward jump attack"}]},{"k":"p","l":["An immediate forward jump attack is the basic safe-jump timing."]},{"k":"p","l":["Somersault Kick's advantage varies with hit height. Always confirm +42F using Training Mode's frame meter."]}]}]},{"t":"After Drive Rush MP is blocked","arts":[{"h":"","ps":[{"k":"p","l":["Key sequence"]},{"k":"r","l":[{"r":"4HP > CDR > st.MP"}]},{"k":"p","l":["If the opponent blocks through st.MP:"]},{"k":"p","l":["You are point-blank, at approximately +4F, and within throw range."]},{"k":"p","l":["From there:"]}]},{"h":"throw","ps":[{"k":"r","l":[{"s":"An immediate throw leaves no gap for an interrupt."}]}]},{"h":"st.MP","ps":[{"k":"r","l":[{"s":"At +4F, the 7F move beats a 4F interrupt."}]}]},{"h":"walk back","ps":[{"k":"r","l":[{"s":"Walk back to bait a throw tech with a shimmy."}]},{"k":"p","l":["An important part of Guile's pressure."]}]}]},{"t":"After 6HP is blocked","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"6HP > block +3F > hit +5F"}]},{"k":"p","l":["From there:"]},{"k":"p","l":["• cr.LP","• st.MP","• throw"]},{"k":"p","l":["Continue into these options."]},{"k":"p","l":["This whiffs against a crouching opponent."]}]}]},{"t":"Pressure against a burned-out opponent","arts":[{"h":"","ps":[{"k":"p","l":["When the opponent is in Burnout, normals and projectiles give more advantage on block."]},{"k":"p","l":["Example"]},{"k":"r","l":[{"r":"DR Knee Bazooka > cr.LP > Sonic Boom"}]},{"k":"p","l":["Sequences like this more easily form true blockstrings."]},{"k":"p","l":["In the corner, make the opponent block L Sonic Boom on a later active frame, then use:"]},{"k":"r","l":[{"r":"cr.LP > another Sonic Boom"}]},{"k":"p","l":["This is also strong for chip damage."]}]}]},{"t":"Invincible-Reversal Punishes","arts":[{"h":["stable route","rota estável"],"ps":[{"k":"r","l":[{"r":"st.HP PC > st.MP > 4HP > H Somersault Kick"}]}]},{"h":["lethal route","rota letal"],"ps":[{"k":"r","l":[{"r":"st.HP PC > st.HP > CDR > st.HK > cr.MP > H Somersault Kick > SA3"}]},{"k":"p","l":["In the corner, continue with:"]},{"k":"r","l":[{"r":"H Somersault Kick > 3HK whiff > shimmy"}]},{"k":"p","l":["Practice the follow-up situation as part of the sequence."]}]}]},{"t":"10 Practical Starter Routes","arts":[{"h":"","ps":[{"k":"r","l":[{"s":"1."},{"r":"cr.LK > cr.LP > H Somersault Kick"}]},{"k":"r","l":[{"s":"2."},{"r":"st.MP > cr.MP > H Somersault Kick"}]},{"k":"r","l":[{"s":"3."},{"r":"st.MP > 4HP > H Somersault Kick"}]},{"k":"r","l":[{"s":"4."},{"r":"DR st.MP > cr.HP > H Somersault Kick"}]},{"k":"r","l":[{"s":"5."},{"r":"DR 6MP > cr.MP > H Somersault Kick"}]},{"k":"r","l":[{"s":"6."},{"r":"cr.MP > H Somersault Kick > SA3"}]},{"k":"r","l":[{"s":"7."},{"r":"st.HP PC > st.MP > 4HP > H Somersault Kick"}]},{"k":"r","l":[{"s":"8."},{"s":"corner"},{"r":"H Somersault Kick > 3HK whiff > +4F > throw / strike / shimmy"}]},{"k":"r","l":[{"r":"9. H Somersault Kick > set Sonic Blade > anti-air a jump, or use Sonic Cross if the opponent stays grounded."}]},{"k":"r","l":[{"s":"10."},{"r":"4HP > CDR > st.MP block > +4F > throw / st.MPframe trap / shimmy"}]}]}]},{"t":"Current Game Plan","arts":[{"h":"","ps":[{"k":"p","l":["Make the opponent move with Sonic Boom > anti-air jumps with Somersault Kick > combo from medium attacks > set Sonic Blade at midscreen > use +4F shimmies or meaty Sonic Blade in the corner > land strikes and throws > return to Sonic Boom pressure."]}]}]},{"t":"Notes for Older Guides","arts":[{"h":"","ps":[{"k":"p","l":["Use the following current-version replacements."]},{"k":"r","l":[{"s":"OD Sonic Blade is +1F on block."}]},{"k":"r","l":[{"s":"st.HK starts in 12F."}]},{"k":"r","l":[{"s":"HP SA1 can be followed by horizontal SA1."}]},{"k":"r","l":[{"s":"cr.HP can cancel into special moves and Super Arts."}]},{"k":"r","l":[{"s":"Older Sonic Boom loops using st.HK may require different input timing."}]},{"k":"r","l":[{"s":"Advantage after Somersault Kick varies with hit height; do not treat it as a fixed value."}]}]}]},{"t":"References","arts":[{"h":"","ps":[{"k":"p","l":["Sources: official Street Fighter 6 battle adjustments; Ultimate Frame Data; Year 4 Guile combo material; Guile-specific setplay testing; 2026-8-3 adjustment information."]},{"k":"p","l":["Combo and setplay conditions can vary with spacing, late-active hits, hit height, recovery choice, and position relative to the corner."]},{"k":"p","l":["Recheck in Training Mode before using these routes in matches."]}]}]}],"ov":"<h5>Character overview</h5><p>Guile turns space into a decision between Sonic Boom on the ground and an anti-air when the opponent jumps. Charge management connects those two threats. He also has straightforward punch-to-Somersault conversions, so learning him does not have to begin with long projectile loops.</p><h5>Strengths</h5><ul><li>Sonic Boom and Somersault Kick give his range control a clear ground-and-air structure.</li><li>The combo material includes compact punch confirms and Sonic Blade follow-ups, allowing a defensive opening to become an offensive setup.</li></ul><h5>Weaknesses</h5><ul><li>Movement changes the charge you have available. Walking backward can preserve back charge without preserving down charge for Somersault Kick.</li><li>Watching only projectile timing can leave you late to an approaching opponent. Charge awareness and an alternative anti-air decision need practice together.</li></ul><h5>Best range / preferred gameplan</h5><p>Hold a distance where a Boom asks the opponent to act and you can still watch for a jump. Move when the space is useful rather than crouching solely to keep charge. After a confirmed Somersault finish, use the listed Sonic Blade sequence when its conditions fit instead of assuming you must retreat.</p><h5>Key tools to learn first</h5><h6>Sonic Boom</h6><p>Learn consistent charge release first. Perfect timing can be an improvement task after you can watch the opponent while throwing it.</p><h6>Somersault Kick</h6><p>Track down charge separately from back charge. The move is also a core combo ender, so practice charging during the preceding punches.</p><h6>Standing medium punch</h6><p>The guide starts with medium punch into crouching medium punch and heavy Somersault. Begin down charge immediately after the standing punch.</p><h5>Beginner practice order</h5><ol><li><h6>See charge and movement together</h6><p>Alternate crouching, walking backward and returning to down-back. Check input history and whether Somersault is available at each point.</p></li><li><h6>Complete one punch confirm</h6><p>Repeat the medium-punch route into Somersault without resetting the stick to neutral between the charged portions.</p></li><li><h6>Turn a finish into a setup</h6><p>Reproduce the guide’s Sonic Blade follow-up after heavy Somersault. Compare it with simply holding space and watching a wake-up jump.</p></li></ol><h5>Common mistakes</h5><ul><li>Assuming back charge alone guarantees an immediate Somersault anti-air.</li><li>Practicing projectile execution in isolation while never recording a jump or ground approach to react to.</li></ul><h5>Earn the distance where a Sonic Boom read can matter</h5><p>Clearing a Sonic Boom is not the same as reaching Guile before his anti-air. Iori’s Japanese matchup guide separates getting closer from attacking once you arrive. Keep the ground you gain, notice Guile’s posture, and make him respond to a threat that actually reaches. Repeated full-distance jump-ins let him defend the same situation over and over.</p><h5>Decisions by distance</h5><h6>Full screen: travel and attack are different goals</h6><p>The Japanese demonstration sometimes jumps over a distant Boom to gain ground. That jump is a way to travel; it is not a promise of a jump-in hit. Reassess the distance on landing before repeating it closer to Somersault Kick range.</p><h6>Mid-range: find your jump-in boundary</h6><p>Compare the distance where Guile recovers in time to anti-air with the distance where a read on Boom lets your attack reach. Keep a grounded approach available while you look for that opportunity. Jumping merely because you saw a projectile ignores the timing of its release.</p><h6>Within reach: observe the answer to your pressure</h6><p>Make a reaching attack count, then look for Guile’s response. Against a poke, practice stepping out and punishing its whiff. Against Drive Impact, leave room in your offense to react. Continuing to press solely because the first heavy attack was blocked makes the next one easier to target.</p><h5>Situation to identify first</h5><h6>The recovery distance behind Sonic Boom</h6><p>The Japanese guide describes a distance where Guile can throw Sonic Boom and still anti-air the jump that follows. If you keep landing on Somersault Kick, shorten the approach before trying again. The boundary depends on your character and the jump timing.</p><h5>Response to practise</h5><h6>Every blocked Boom pushes your approach back</h6><p>The original guide suggests mixing parry with walking between projectiles to retain more of your progress. Compare the ground gained with walk-and-block in practice. Make the next step depend on the next Boom; remaining in place and repeating parry is not the approach you are trying to build.</p><h5>Common mistakes</h5><ul><li>Counting every cleared Sonic Boom as a successful jump even when Somersault Kick catches the landing.</li><li>Using backward walking as a guaranteed jump signal and forgetting Guile’s normal anti-airs.</li></ul><h5>Matchup-specific practice</h5><ol><li><h6>Compare two ways of gaining ground</h6><p>Record repeated Sonic Booms from a fixed position. Approach once with walking and blocking, then with parry and short walks between projectiles. Compare your position after the same number of Booms. Add a pause in Guile’s firing pattern so your forward movement follows the projectile rather than a memorized rhythm.</p></li><li><h6>Map the anti-air boundary</h6><p>Record Sonic Boom followed by the earliest available Somersault Kick. Test your character’s forward jump from several starting positions. Add a wait-and-anti-air recording before randomizing playback. Distinguish a read that reaches during Boom recovery from a jump that only works when the dummy forgets to defend.</p></li></ol><p>This section keeps the matchup-specific decisions from the former Counter page. Frame Data remains the source for complete numerical values.</p><h5>GUILE video lessons</h5><p>This collection separates approaching a defensive Guile from playing Guile yourself. Sonic Boom matchup lessons sit alongside coaching and footage about offense, defense and burnout.</p><p>Original video titles and Japanese commentary are preserved. Balance-update opinions and numerical examples belong to the version recorded; use the official Frame Data link and current combo guide for verification.</p><h6>Moves and lessons (2)</h6><h6>【スト６/ガイル】バーンアウトも大丈夫！？守りも攻めも強い！ #ストリートファイター6 #スト6 #streetfighter6 #sf6</h6><p>Guile footage discussing offense, defense and burnout.</p><a href=\"https://www.youtube.com/watch?v=GlW4Cot-644\" target=\"_blank\" rel=\"noopener\">Watch on YouTube ↗</a><h6>【スト６／コーチング企画】ガイルは攻めも守りもできるキャラ！【Street Fighter 6】</h6><p>Guile coaching with attention to both offense and defense.</p><a href=\"https://www.youtube.com/watch?v=44fgVMJ_8Sc\" target=\"_blank\" rel=\"noopener\">Watch on YouTube ↗</a><p>Read the character overview →</p><h6>Matchup lessons (2)</h6><h6>【スト６】\"待ちガイル\"の倒し方！ソニックの対処方法を解説！！【キャラ対策】</h6><p>Approaching a defensive Guile and dealing with Sonic Boom.</p><a href=\"https://www.youtube.com/watch?v=8xyPqLhrje8\" target=\"_blank\" rel=\"noopener\">Watch on YouTube ↗</a><h6>【スト６】ガイル戦◯◯できてない人多いです！！【ガイル対策】 #streetfighter6 #ストリートファイター6 #スト6</h6><p>A focused Guile matchup lesson.</p><a href=\"https://www.youtube.com/watch?v=vwAo4omFtk0\" target=\"_blank\" rel=\"noopener\">Watch on YouTube ↗</a><p>Read the matchup guide →</p>","ovDate":"2026-08-27","vs":"<h5>Against a defensive Guile, first create the distance where your jump reaches</h5><p>You jump over a Sonic Boom and get knocked down by Somersault Kick. You try to get close and get pushed back every time you block a boom. When that happens, review at which distance, and on seeing what, you moved, before worrying about how often you attack.</p><p>Based on Iori's matchup video, this splits the stage of closing distance from the stage of breaking his defense once you're close. <a href=\"https://www.youtube.com/watch?v=8xyPqLhrje8\" target=\"_blank\" rel=\"noopener\">Watch the video (in Japanese)</a> · <a href=\"https://www.youtube.com/watch?v=8xyPqLhrje8&amp;t=451s\" target=\"_blank\" rel=\"noopener\">7:31 The forward jump after a Perfect Parry</a></p><p>The source is a video published on September 1, 2023, demonstrated mostly with Ken. Reach and what is guaranteed change with your character and with balance updates, so check numbers in CAPCOM's official Frame Data and results in training mode.</p><h5>How to approach a defensive Guile: one jump doesn't solve it</h5><p>The video calls the range where his anti-air still makes it in time after a Sonic Boom the \"safe Sonic\" distance. Repeat forward jumps from there and you get anti-aired even after clearing the boom. The first goal is the distance where, jumping at the next Sonic Boom, your attack reaches. (<a href=\"https://www.youtube.com/watch?v=8xyPqLhrje8&amp;t=187s\" target=\"_blank\" rel=\"noopener\">Video 3:07 to 5:57</a>)</p><p>The example of closing in on the ground is parrying the Sonic Boom and walking forward between booms. The video notes that a parry pushes you back less than a normal block. So think of the parry as a way to keep the ground you gained, not only to get through the boom.</p><p><strong>Try this first.</strong> Record an opponent throwing Sonic Booms in a row and compare closing in by blocking with closing in by parrying. With your character, find the border between \"the distance where a jump gets anti-aired\" and \"the distance where a jump reaches\".</p><h5>Dealing with Sonic Boom: long range and mid range are different</h5><p>From full screen, the video also shows jumping forward over booms to gain ground. Jumping the same way inside Somersault Kick range is another matter. Separate \"the jump to get closer from far away\" from \"the jump that reads a Sonic Boom to land an attack\". (<a href=\"https://www.youtube.com/watch?v=8xyPqLhrje8&amp;t=315s\" target=\"_blank\" rel=\"noopener\">Video 5:15 to 8:32</a>)</p><p>A little closer, there's a distance where your jump-in gets blocked. There the video demonstrates Drive Impact timed against the next Sonic Boom: it arrives at a different speed than a jump-in, so it's a different option. It isn't guaranteed at every distance, and it misses if he doesn't throw the boom, so choose it by watching how he repeats his booms.</p><h6>Treat the forward jump after a Perfect Parry as an advanced technique</h6><p><a href=\"https://www.youtube.com/watch?v=8xyPqLhrje8&amp;t=426s\" target=\"_blank\" rel=\"noopener\">Video 7:06 to 8:32</a> demonstrates entering a forward jump after the parry so that you only jump if it was a Perfect Parry. That is an input example from when the video was published. Don't assume the same input and timing in the current version: first learn to advance with a normal parry, then test it in your own environment.</p><h6>When he sets a Sonic Blade</h6><p><a href=\"https://www.youtube.com/watch?v=8xyPqLhrje8&amp;t=714s\" target=\"_blank\" rel=\"noopener\">Video 11:54 to 12:22</a> shows hitting, with Ken's moves, the hurtbox that extends forward when the Blade comes out. Don't give up because it looks out of reach: check the move in the official Frame Data and practice finding where your character's long moves reach.</p><h5>Getting a jump through: watch for the walk back and for which anti-air he uses</h5><p>The first idea shown is jumping when Guile walks backward and gives up his down charge. Don't jump blindly at a crouching opponent: use his movement as the trigger. But besides Somersault Kick he has anti-airs with normals such as cr.HP, so a walk back doesn't mean the jump always works. (<a href=\"https://www.youtube.com/watch?v=8xyPqLhrje8&amp;t=16s\" target=\"_blank\" rel=\"noopener\">Video 0:16 to 1:16 and 2:15 to 3:07</a>)</p><p>The video also covers the empty jump from a little further away, with no attack: choose an arc that lands right in front of Guile, to create a situation cr.HP alone handles poorly. It also shows him anti-airing with another normal, so learn it as an option that makes him choose between anti-airs.</p><p><strong>How to review when you get anti-aired.</strong> Don't file it under \"I jumped, so I failed\". Check whether he was crouching or walking back, and which move knocked you down. That tells you how to change the next jump.</p><h5>What not to do against Guile</h5><p>From the video's explanation, what to avoid is repeating the same answer (<a href=\"https://www.youtube.com/watch?v=8xyPqLhrje8&amp;t=199s\" target=\"_blank\" rel=\"noopener\">Video 3:19 to 5:13</a>):</p><ul><li><strong>Jumping forward whenever you see a boom, at any distance.</strong> If his anti-air makes it in time even when you clear the boom, change how you advance first.</li><li><strong>Only walking and blocking while being pushed back.</strong> Mix in parries and aim to keep ground little by little.</li><li><strong>Jumping the same way every time he walks back.</strong> His normal anti-airs are still there. Review the distance you jump from and whether you press a button.</li><li><strong>Swinging a long move over and over because it worked, without watching his reaction.</strong> From 11:24 the video explains Guile's Drive Impact answer. Besides swinging, create moments where you wait and answer.</li></ul><h5>Breaking his defense: against an opponent who won't move, pressure the gauge</h5><p>When you're close and Guile stays crouching, the plan in the video is to make him block long-reaching moves and drain his Drive Gauge. Even without taking health right away, you make him choose between keeping on waiting and pressing something to stop you. (<a href=\"https://www.youtube.com/watch?v=8xyPqLhrje8&amp;t=513s\" target=\"_blank\" rel=\"noopener\">Video 8:33 to 11:53</a>)</p><p>Ken's demonstration compares the reward when a long heavy attack hits with the reward of Guile's poke. Ken's moves and combos can't be applied to every character as they are: with your character, combine a move that reaches with the basic combo after it hits.</p><h6>When Guile changes his reaction, change yours</h6><p>If he starts stopping you with long normals, the advanced answer is the whiff punish: look like you're going forward, step back, and hit the whiff. If he starts fishing for Drive Impact, stop swinging and get ready to answer it. Build it in this order: make him block a move, watch his answer, change your next action to match.</p><p><a href=\"https://www.youtube.com/watch?v=8xyPqLhrje8&amp;t=77s\" target=\"_blank\" rel=\"noopener\">Video 1:17 to 2:14</a> also explains showing a Drive Impact now and then against Guile's long moves so they're harder for him to use. Check the target move and whether it can be canceled in the official Frame Data and in practice, and don't turn it into \"always press Drive Impact\".</p><h5>Summary for beginners: three things first</h5><ol><li><strong>Parry Sonic Booms and get closer one step at a time.</strong> The goal is to advance to the distance where your jump reaches, not only to get through the booms.</li><li><strong>Before jumping, look at his posture and the distance.</strong> A walk back is a reason to consider a jump. He has normal anti-airs, so don't assume it works.</li><li><strong>If you're close and he waits, make him block a move that reaches.</strong> After pressuring his gauge, watch whether he tries to stop you with a move or with Drive Impact.</li></ol><p>The input after a Perfect Parry and the whiff punish are advanced things to try after that.</p>","jp":1}
};
