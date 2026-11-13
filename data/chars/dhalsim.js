// Dhalsim: guide + full frame data.
(window.HUB_DATA = window.HUB_DATA || {});
(HUB_DATA.chars = HUB_DATA.chars || {})["dhalsim"] = {
  "guide": {
    "slug": "dhalsim",
    "name": "Dhalsim",
    "release": {
      "en": "Base game (June 2023)",
      "pt": "Jogo base (junho de 2023)"
    },
    "archetype": "zoner",
    "difficulty": 5,
    "difficulty_why": {
      "en": "His limbs reach very far but his normals are slow (5MP is 14f), so he lives on spacing and reads. He has many projectiles, teleports and a float to manage, and his close-range defense is weak, so mistakes are punished hard.",
      "pt": "Os membros dele alcançam muito longe, mas os normais são lentos (5MP sai em 14f), então ele vive de espaçamento e de leitura. São muitos projéteis, teleportes e um float para administrar, e a defesa de perto é fraca, então erros são punidos com força."
    },
    "summary": {
      "en": "Dhalsim is the ultimate keep-away character: stretchy limbs, Yoga Fire, the arcing Yoga Arch and an air fireball let him control the screen from almost anywhere. He wins by keeping the opponent at long range, chipping away with pokes and projectiles, and teleporting out of bad situations.",
      "pt": "O Dhalsim é o keep-away definitivo: membros elásticos, Yoga Fire, o Yoga Arch em arco e uma bola de fogo aérea deixam ele controlar a tela de quase qualquer lugar. Ele vence mantendo o oponente longe, desgastando com pokes e projéteis e se teleportando para sair de situações ruins."
    },
    "strengths": [
      {
        "en": "Huge reach on normals like 5MP, 2MP and 2MK lets him poke from distances most characters can't touch.",
        "pt": "O alcance enorme de normais como 5MP, 2MP e 2MK deixa ele cutucar de distâncias que a maioria não alcança."
      },
      {
        "en": "Many projectile angles (Yoga Fire, Yoga Arch, air Yoga Comet) make approaching very hard.",
        "pt": "Muitos ângulos de projétil (Yoga Fire, Yoga Arch, Yoga Comet no ar) tornam a aproximação muito difícil."
      },
      {
        "en": "Yoga Teleport and Yoga Float give him unusual movement to escape or to start a mixup.",
        "pt": "Yoga Teleport e Yoga Float dão a ele uma movimentação incomum para fugir ou começar um mixup."
      }
    ],
    "weaknesses": [
      {
        "en": "Slow normals with extended hurtboxes: a whiffed long poke is easy to whiff punish.",
        "pt": "Normais lentos com hurtbox estendida: um poke longo que erra é fácil de tomar whiff punish."
      },
      {
        "en": "Weak up close: no invincible reversal special, so his best escape costs Super meter or Drive Reversal.",
        "pt": "Fraco de perto: não tem reversal especial invencível, então a melhor fuga custa barra de Super ou Drive Reversal."
      },
      {
        "en": "Raw teleports are very punishable if the opponent reacts or guesses right.",
        "pt": "Teleportes crus são muito puníveis se o oponente reagir ou acertar a leitura."
      }
    ],
    "gameplan": {
      "en": "Control the screen from long range: Yoga Fire to make the opponent block or jump, Yoga Arch and anti-airs to punish the jump, and 5MP/2MK to check anyone walking in. Each time they gain ground, push them back with a poke or a projectile instead of letting them reach mid-range. When you score a knockdown, use the big advantage from OD Yoga Fire or Yoga Flame to set up another wall of fireballs or a teleport mixup. On defense, keep your cool: block, use 4MP up close against jumps, and spend Drive Reversal or SA2 to escape the corner rather than mashing slow normals.",
      "pt": "Controle a tela de longe: Yoga Fire para o oponente defender ou pular, Yoga Arch e anti-airs para punir o pulo, e 5MP/2MK para checar quem anda para frente. Toda vez que ele ganhar terreno, empurre de volta com um poke ou projétil em vez de deixar ele chegar na média distância. Quando conseguir um knockdown, use a vantagem grande do OD Yoga Fire ou do Yoga Flame para montar outra parede de bolas de fogo ou um mixup de teleporte. Na defesa, mantenha a calma: defenda, use 4MP de perto contra pulos e gaste Drive Reversal ou SA2 para sair do canto, em vez de ficar apertando normais lentos."
    },
    "key_moves": [
      {
        "name": "Yoga Fire",
        "input": "236P",
        "classic": "QCF+P",
        "role": {
          "en": "Main projectile (L 15f, -6 on block). Hold the button for a slower charged version. Use it to control the ground and force jumps.",
          "pt": "Projétil principal (L 15f, -6 no block). Segure o botão para uma versão carregada mais lenta. Use para controlar o chão e forçar pulos."
        }
      },
      {
        "name": "Yoga Arch",
        "input": "236K",
        "classic": "QCF+K",
        "role": {
          "en": "Arcing projectile that comes down from above; covers the air and the space in front of you (L -1 on block).",
          "pt": "Projétil em arco que cai de cima; cobre o ar e o espaço na sua frente (L -1 no block)."
        }
      },
      {
        "name": "Yoga Flame",
        "input": "63214P",
        "classic": "HCB+P",
        "role": {
          "en": "Main combo ender with good knockdown advantage (e.g. 4MK > M Yoga Flame). L is -4 on block.",
          "pt": "Principal finalizador de combo com boa vantagem no knockdown (ex.: 4MK > M Yoga Flame). O L é -4 no block."
        }
      },
      {
        "name": "Yoga Blast",
        "input": "63214K",
        "classic": "HCB+K",
        "role": {
          "en": "Upward flame used as a special anti-air and combo piece; M version into a teleport sets up oki.",
          "pt": "Chama para cima usada como anti-air especial e peça de combo; a versão M com teleporte monta oki."
        }
      },
      {
        "name": "Yoga Comet",
        "input": "j.63214P",
        "classic": "air HCB+P",
        "role": {
          "en": "Air fireball that comes down at an angle; covers approaches from a different angle.",
          "pt": "Bola de fogo aérea que desce na diagonal; cobre aproximações por outro ângulo."
        }
      },
      {
        "name": "Yoga Teleport",
        "input": "4PPP / 6PPP / 4KKK / 6KKK",
        "classic": "B or F+PPP/KKK",
        "role": {
          "en": "Teleports forward or back (also in the air). Use after knockdowns or to escape, not raw in neutral.",
          "pt": "Teleporta para frente ou para trás (também no ar). Use depois de knockdowns ou para fugir, não cru no neutral."
        }
      },
      {
        "name": "Yoga Sunburst (SA2)",
        "input": "214214K",
        "classic": "QCB x2+K",
        "role": {
          "en": "Level 2 Super; his main meter option to break pressure and a big projectile.",
          "pt": "Super nível 2; principal opção com barra para quebrar pressão, e um projétil grande."
        }
      }
    ],
    "key_normals": [
      {
        "move": "5MP",
        "classic": "s.MP",
        "startup": 14,
        "on_block": -5,
        "on_hit": 0,
        "role": {
          "en": "Long horizontal poke to stop walk-ins at long range.",
          "pt": "Poke horizontal longo para parar quem anda para frente de longe."
        }
      },
      {
        "move": "2MP",
        "classic": "c.MP",
        "startup": 12,
        "on_block": -4,
        "on_hit": 0,
        "role": {
          "en": "Long cancelable poke; 2MP > DRC > 4MK > Yoga Flame is a documented route.",
          "pt": "Poke longo cancelável; 2MP > DRC > 4MK > Yoga Flame é uma rota documentada."
        }
      },
      {
        "move": "2MK",
        "classic": "c.MK",
        "startup": 10,
        "on_block": -10,
        "on_hit": -3,
        "role": {
          "en": "Long low poke with many active frames; space it so it hits at the tip.",
          "pt": "Poke low longo com muitos frames ativos; acerte com a ponta, no espaçamento certo."
        }
      },
      {
        "move": "4MK",
        "classic": "b.MK (Divine Kick)",
        "startup": 7,
        "on_block": 0,
        "on_hit": 3,
        "role": {
          "en": "Fast close-range button, 0 on block and cancelable: his main close hit-confirm into Yoga Flame.",
          "pt": "Botão rápido de perto, 0 no block e cancelável: principal hit-confirm de perto em Yoga Flame."
        }
      }
    ],
    "anti_air": {
      "en": "Up close, Yoga Uppercut (4MP, 8f, cancelable) is the quickest answer. For jumps from farther away, Yoga Lance (4HP, 14f) hits diagonally upward but is -16 on block, so use it only on clear jumps. Yoga Blast (63214K) is the special anti-air, and Yoga Arch thrown early catches people who like to jump over Yoga Fire.",
      "pt": "De perto, o Yoga Uppercut (4MP, 8f, cancelável) é a resposta mais rápida. Para pulos de mais longe, o Yoga Lance (4HP, 14f) acerta na diagonal para cima, mas é -16 no block, então use só em pulos claros. O Yoga Blast (63214K) é o anti-air especial, e o Yoga Arch solto cedo pega quem gosta de pular por cima do Yoga Fire."
    },
    "combos": [
      {
        "label": {
          "en": "Light confirm",
          "pt": "Confirm de golpes fracos"
        },
        "route": "5LP > 2LP > 236PP",
        "notes": {
          "en": "Ends in OD Yoga Fire and leaves about +49 or more; can be ended with SA3 instead to kill.",
          "pt": "Termina em OD Yoga Fire e deixa cerca de +49 ou mais; pode terminar com SA3 para matar."
        }
      },
      {
        "label": {
          "en": "Close-range BnB",
          "pt": "BnB de perto"
        },
        "route": "4MK > 63214MP",
        "notes": {
          "en": "Divine Kick into M Yoga Flame leaves about +33 for oki. With Drive: 2MP > DRC > 4MK > 63214HP (about +45).",
          "pt": "Divine Kick em M Yoga Flame deixa cerca de +33 para oki. Com Drive: 2MP > DRC > 4MK > 63214HP (cerca de +45)."
        }
      },
      {
        "label": {
          "en": "Punish Counter",
          "pt": "Punish Counter"
        },
        "route": "5HK (PC) > 1HP > 63214PP > 2HK",
        "notes": {
          "en": "5HK on Punish Counter lets Nirvana Punch (1HP) link, then OD Yoga Flame launches for a 2HK juggle.",
          "pt": "O 5HK em Punish Counter deixa o Nirvana Punch (1HP) linkar, e o OD Yoga Flame lança para um juggle com 2HK."
        }
      }
    ],
    "tips": [
      {
        "en": "Don't throw out long normals at random: each whiff is a whiff punish waiting to happen. Poke where the opponent will walk into.",
        "pt": "Não solte normais longos à toa: cada um que erra é um whiff punish esperando acontecer. Cutuque onde o oponente vai entrar."
      },
      {
        "en": "Yoga Fire is -6 on block; throw it from far away, not right in the opponent's face.",
        "pt": "O Yoga Fire é -6 no block; solte de longe, não na cara do oponente."
      },
      {
        "en": "Learn one oki loop (e.g. after 4MK > Yoga Flame) so each knockdown sends the opponent back to full screen or into a mixup.",
        "pt": "Aprenda um loop de oki (ex.: depois de 4MK > Yoga Flame) para cada knockdown mandar o oponente de volta para longe ou para um mixup."
      }
    ],
    "counterplay": {
      "en": "Be patient and take ground steadily: walk and block fireballs instead of jumping from far, and whiff punish his slow, extended pokes (his limbs have hurtboxes) with your own long buttons or Drive Rush. Once you get close, stay close; he has no meterless invincible reversal, so keep pressure with plus moves and throws. React to raw teleports: they are very punishable.",
      "pt": "Tenha paciência e ganhe terreno aos poucos: ande e defenda as bolas de fogo em vez de pular de longe, e dê whiff punish nos pokes lentos e esticados dele (os membros têm hurtbox) com seus botões longos ou Drive Rush. Quando chegar perto, fique perto; ele não tem reversal invencível sem barra, então mantenha a pressão com golpes plus e throws. Reaja aos teleportes crus: eles são muito puníveis."
    },
    "sources": [
      "https://www.streetfighter.com/6/character/dhalsim/frame",
      "https://www.streetfighter.com/6/character/dhalsim/movelist",
      "https://www.eventhubs.com/moves/sf6/dhalsim/",
      "https://sf6-lab.net/en/fighters/dhalsim/combo"
    ],
    "data_note": {
      "en": "Frame data read from the official Capcom frame data page (classic controls) on 2026-10-02; values may change with patches. Inputs from the official command list. Combos and frame advantage after knockdowns from SF6 Lab (updated 2026-08-31, after the Aug 2026 patch). Yoga Blast and Yoga Teleport couldn't be confirmed on the official page, so the guide text quotes no numbers for them; the full frame data table lists FAT's values for them (commit a8101eb, October 22, 2026). All 12 key-normal frame values were verified. Rechecked on October 23, 2026 against FAT's post-patch data (October 22 update): every key normal value matches, and the combos that use moves changed by the August 2026 patch were checked against the new numbers.",
      "pt": "Frame data lida na página oficial da Capcom (controle Clássico) em 02/10/2026; os valores podem mudar com patches. Inputs da lista de comandos oficial. Combos e vantagem após knockdown do SF6 Lab (atualizado em 31/08/2026, depois do patch de agosto de 2026). Yoga Blast e Yoga Teleport não puderam ser confirmados na página oficial, então o texto do guia não traz números para eles; a tabela completa de frame data lista os valores do FAT (commit a8101eb, 22 de outubro de 2026). Os 12 valores de frame dos normais foram verificados. Revisado em 23 de outubro de 2026 com os dados pós-patch do FAT (atualização de 22 de outubro): todos os valores dos normais principais conferem, e os combos que usam golpes alterados pelo patch de agosto de 2026 foram conferidos com os números novos."
    }
  },
  "frames": {
    "m": [
      ["Stand LP","5LP","LP","n",4,3,8,4,-1,300,"ch sp su","",0,0.88,"20% Start",null],
      ["Stand MP","5MP","MP","n",14,3,19,0,-5,700,"","",0,2.983,null,null],
      ["Stand HP","5HP","HP","n",16,4,27,-6,-11,1000,"","",0,"2.604~3.624",null,null],
      ["Stand LK","5LK","LK","n",9,4,11,2,-6,300,"sp su","",0,1.55,"20% Start",null],
      ["Stand MK","5MK","MK","n",12,3,18,-2,-6,600,"","",0,2.5,null,null],
      ["Stand HK","5HK","HK","n",17,3,20,3,-6,800,"sp su","",0,3.34,null,"The brief extended leg hurtbox on frame 15 of start-up (2F before active) is strike invincible (cannot counter-poke projectiles) The foot hurtbox is air strike invincible on frames 16-23"],
      ["Crouch LP","2LP","d+LP","n",5,3,9,4,-1,300,"ch sp su","",0,1.14,"20% Start",null],
      ["Crouch MP","2MP","d+MP","n",12,3,16,0,-4,600,"sp su","",0,1.96,null,null],
      ["Crouch HP","2HP","d+HP","n",19,4,"20(24)",3,-8,800,"","",0,2.95,null,"Projectile invincible on upper body on frames 11-39"],
      ["Crouch LK","2LK","d+LK","n",4,7,16,"-5(1)","-10(-4)",200,"","",0,"0.814~1.44",null,"Projectile invincible (ducks under most projectiles) on frames 4-10"],
      ["Crouch MK","2MK","d+MK","n",10,13,14,"-3(9)","-10(2)",500,"","",0,"1.302~2.51","20% Start","Projectile invincible (ducks under most projectiles) on frames 10-28, with last 6 frames only projectile invincible on foot"],
      ["Crouch HK","2HK","d+HK","n",12,16,20,"HKD +22(37)","-16(-1)",900,"","",0,"1.50~3.057",null,"Projectile invincible (ducks under most projectiles) on frames 8-27"],
      ["Jump LP","8LP","u+LP","n",4,4,null,"8~13","0~5",300,"","",0,0.84,null,null],
      ["Jump MP","8MP","u+MP","n",9,6,null,"9~13","3~7",700,"sp","",0,2.36,"20% Start","Lower body is Projectile invincible on frames 9-25 (helps going over Projectiles)"],
      ["Jump HP","8HP","u+HP","n",13,4,null,"up to 19 (KD)","up to 15",800,"","",0,"1.22~1.68","20% Start",null],
      ["Jump LK","8LK","u+LK","n",6,4,null,"-6~8","-9~5",300,"","",0,1.03,null,null],
      ["Jump MK","8MK","u+MK","n",11,6,null,"-7~13","-11~9",500,"","",0,1.76,"20% Start",null],
      ["Jump HK","8HK","u+HK","n",10,10,null,"9~15","5~11",800,"","",0,"0.94~2.82","20% Start","Lower body is Projectile invincible on frames 10-22 (helps going over Projectiles)"],
      ["LK Drill Kick","1 or 2 or 3LK (air)","d+LK or db+LK or df+LK (air)","n",9,"until land","6(11)","-23(12)","-30(5)",500,"","air",0,null,"20% Start",null],
      ["MK Drill Kick","1 or 2 or 3MK (air)","d+MK or db+MK or df+MK (air)","n",9,"until land","6(11)","-15(10)","-20(5)",500,"","air",0,null,"20% Start",null],
      ["HK Drill Kick","1 or 2 or 3HK (air)","d+HK or db+HK or df+HK (air)","n",9,"until land","6(11)","-17(10)","-22(5)",500,"","air",0,null,"20% Start",null],
      ["Yoga Mummy","2LP (air)","d+LP (air)","n",10,"until land",9,"-18(8)","-22(4)",500,"sp","air",0,null,null,null],
      ["Yoga Uppercut","4MP","b+MP","n",8,6,16,2,-3,700,"sp su","",0,1.079,null,"Head and extended arm hurtboxes are air strike invincible on frames 8-13"],
      ["Yoga Lance","4HP","b+HP","n",14,7,29,-9,-16,900,"sp su","",0,"1.50~2.52","20% Start",null],
      ["Nirvana Punch","1HP","db+HP","n",10,4,20,3,-3,800,"sp su","",0,1.46,null,null],
      ["Agile Kick","1LK","db+LK","n",5,3,10,1,-3,200,"ch","",0,1.05,"20% Start",null],
      ["Divine Kick","4MK","b+MK","n",7,4,17,3,0,600,"sp su","",0,1.18,null,null],
      ["Thrust Kick","1MK","db+MK","n",8,3,20,-3,-7,500,"sp su","",0,1.19,"20% Start",null],
      ["Yoga Mountain","4HK","b+HK","n",14,6,20,0,-9,1000,"","",0,0.8,null,"Extended leg is air strike invincible on frames 14-27"],
      ["Karma Kick","1HK","db+HK","n",9,3,22,"KD +33",-7,900,"","",0,1.29,null,null],
      ["Yoga Smash","LPLK","LP+LK","t",5,3,23,"KD +31",null,1200,"","",0,0.8,"20% Immediate",null],
      ["Yoga Throw","4LPLK","b+LP+LK","t",5,3,23,"KD +19",null,1200,"","",0,0.8,"20% Immediate",null],
      ["Yoga Splash","2LPLK","d+LP+LK","t",5,3,23,"KD +35",null,1200,"","",0,0.8,"20% Immediate",null],
      ["Drive Impact: Yoga Rise","HPHK","HP+HK","d",26,2,35,"KD (notes)",-3,800,"","",0,2.258,"20% Start",null],
      ["Drive Reversal: Yoga Illusion","6HPHK","f+HP+HK","d","20(18)",3,26,"KD +24",-6,500,"","",0,1.3,null,"Fully invincible on frames 1-22 (blockstun) / frames 1-20 (reversal) Guaranteed to interrupt any Drive Rush canceled normal if performed immediately out of blockstun (unless the opponent reacts with an invincible move or counter)"],
      ["Drive Parry","MPMK","MP+MK","d",1,"12(2)","33(1)notes",null,null,null,"","",0,null,"50% Multiplier (Perfect)","Throw invincible during the recovery of a successful parry (just like during blockstun) Fully invincible for 6F after a successful Perfect Parry against a strike, which carries over to any attack you perform (ensuring a 5F or faster punish will always interrupt multi-hit attacks)"],
      ["Drive Rush","MPMK / 66 (cancel)","MP+MK / f,f (cancel)","d","9(11)","45(46)","24(23)",null,null,null,"","var",0,null,"15% Multiplier (Mid-Combo)",null],
      ["Perfect Parry (strike)","MPMK","MPMK","d",1,null,1,null,null,0,"","",0,null,"Starter scaling 50%","Perfect Parry activates when an attack is absorbed on the frame a parry is input, or on the next frame. (For high and overhead attacks, the player must press the direction away from the opponent. For low attacks, down and back) If no direction is inputted the result will be a regular parry with an additional Drive increase of 3000. Fully invincible for 5 frames once recovery is over (invincibility not granted if you continue the parry) The player on the receiving end of a Perfect Parry cannot cancel and is forced into a Punish Counter state until their move is finished"],
      ["Perfect Parry (projectile)","MPMK","MPMK","d",1,null,10,null,null,0,"","",0,null,"Starter scaling 50%",null],
      ["Parry Drive Rush","66","f,f","d",null,null,"45 total",null,null,0,"","",0,null,"Multiplier scaling 15%",null],
      ["Cancel Drive Rush","66 or (5 or 6) MPMK","66 or (5 or 6) MPMK","d",null,null,"46 total",null,null,0,"","",0,null,"Multiplier scaling 15%",null],
      ["Yoga Float","2 or 3KK","d or df+KK","s",30,91,"20+3",null,null,null,"","",0,null,null,"Projectile invincible on lower legs frame 17 onwards"],
      ["Aerial Yoga Float (air)","2KK (air)","d+KK (air)","s",15,81,"18+3",null,null,null,"","air",0,null,null,"Projectile invincible on lower legs frame 1 onwards"],
      ["Yoga Teleport","4 or 6PPP or KKK","b or f+PPP or KKK","s",4,null,"24(31)",null,null,null,"","",0,null,null,"No form of invincibility during teleport startup Fully invincible on frames 5-15"],
      ["Aerial Yoga Teleport (air)","4 or 6PPP or KKK (air)","b or f+PPP or KKK (air)","s",10,null,null,null,null,null,"","air",0,null,null,"No form of invincibility during teleport startup Fully invincible on frames 10-15"],
      ["Yoga Fire","236P","qcf+P","s","15(9)",null,33,-2,-6,600,"su3","",1,null,null,"Extended head hurtbox on frames 15-39 is Projectile invincible"],
      ["Yoga Fire (hold)","236P (hold)","qcf+P (hold)","s",43,null,30,"KD +51",-1,"800 (400*400)","su3","var",1,null,null,"Extended head hurtbox on frames 43-73 is Projectile invincible"],
      ["OD Yoga Fire","236PP","qcf+PP","s",12,null,33,"KD +49",-3,"1000 (500*500)","su2 su3","",1,null,null,"Extended head hurtbox on frames 13-41 is Projectile invincible"],
      ["Yoga Arch","236K (Arch)","qcf+K (Arch)","s",18,"~(81)+10",27,1,-1,600,"su3","var",1,null,null,null],
      ["OD Yoga Arch","236KK (Arch)","qcf+KK (Arch)","s",18,"~(190)+10",27,1,-3,"1000 (500*500)","su2 su3","var",1,null,"20% Start / Combo (2 hits)",null],
      ["LP Yoga Flame","63214LP","hcb+LP","s",16,15,15,"KD +33",-4,800,"su3","",1,"?",null,null],
      ["MP Yoga Flame","63214MP","hcb+MP","s",20,16,17,"KD +33",-4,"900 (450*450)","su3","",1,"?",null,null],
      ["HP Yoga Flame","63214HP","hcb+HP","s",26,17,16,"KD +45(47)","-4(-2)","1200 (400x3)","su3","",1,"?",null,null],
      ["OD Yoga Flame","63214PP","hcb+PP","s",18,"5*5*5*5*5","19(24)","KD +51",-11,"800 (100x2*200x3)","su2 su3","",1,"?",null,null],
      ["LK Yoga Blast","63214LK","hcb+LK","s",12,10,23,"KD +39",-6,1000,"su3","",1,"?",null,null],
      ["MK Yoga Blast","63214MK","hcb+MK","s",15,10,20,"KD +42",-3,1200,"su3","",1,"?",null,null],
      ["HK Yoga Blast","63214HK","hcb+HK","s",17,10,18,"KD +47",-3,1200,"su3","",1,"?","Combo (2 hits)",null],
      ["OD Yoga Blast","63214KK","hcbk+KK","s",12,10,20,"KD +42",0,"1000 (500*500)","su2 su3","",1,"?",null,"Upper body (not the legs) is invincible to airborne attacks on frames 12-21"],
      ["Yoga Comet (air)","63214P (Air)","hcb+P (Air)","s",30,"~(55)","8 land","-4~","-2~",800,"","air",1,null,null,null],
      ["OD Yoga Comet (air)","63214PP (Air)","hcb+PP (Air)","s",30,null,"3 land","5~","9~","1200 (600*600)","","air",1,null,"20% Start",null],
      ["LP Yoga Comet","63214LP","hcb+LP","s",30,null,"8 frame(s) after landing",null,null,800,"","air",0,null,null,null],
      ["MP Yoga Comet","63214MP","hcb+MP","s",30,null,"8 frame(s) after landing",null,null,800,"","air",0,null,null,null],
      ["HP Yoga Comet","63214HP","hcb+HP","s",30,null,"8 frame(s) after landing",null,null,800,"","air",0,null,null,null],
      ["Yoga Float(immediately)","2KK","d+KK","s",null,null,"35 total",null,null,0,"","",0,null,null,null],
      ["Yoga Float(Forward)","3KK","df+KK","s",null,null,"35 total",null,null,0,"","",0,null,null,null],
      ["P Yoga Teleport (Forward)","6PPP","f+PPP","s",null,null,"39 total",null,null,0,"","",0,null,null,"Completely invincible from frames 5 - 15"],
      ["K Yoga Teleport (Forward)","6KKK","f+KKK","s",null,null,"39 total",null,null,0,"","",0,null,null,"Completely invincible from frames 5 - 15"],
      ["P Aerial Yoga Teleport (Forward)","6PPP","f+PPP","s",null,null,"29 total",null,null,0,"","",0,null,null,"Completely invincible from frames 10 - 15 Can perform moves from frame 30"],
      ["K Aerial Yoga Teleport (Forward)","6KKK","f+KKK","s",null,null,"29 total",null,null,0,"","",0,null,null,"Completely invincible from frames 10 - 15 Can perform moves from frame 30"],
      ["Yoga Teleport (Backward)","4PPP or 4KKK","4PPP or 4KKK","s",null,null,"46 total",null,null,0,"","",0,null,null,"Completely invincible from frames 5 - 15"],
      ["P Aerial Yoga Teleport (Backward)","4PPP","b+PPP","s",null,null,"34 total",null,null,0,"","",0,null,null,"Completely invincible from frames 10 - 15 Can perform moves from frame 35"],
      ["K Aerial Yoga Teleport (Backward)","4KKK","b+KKK","s",null,null,"34 total",null,null,0,"","",0,null,null,"Completely invincible from frames 10 - 15 Can perform moves from frame 35"],
      ["Yoga Inferno","236236P","qcf,qcf+P","u",10,"104(84)","15(40)","KD +24(27)","-10(-22)","1920~2100 (2040)","","",1,"?","30% Minimum","Throw invincible on frames 1-11"],
      ["Yoga Sunburst","214214K","qcb,qcb+K","u",7,"~(142)+20",60,"KD +50",-4,"2800 (450x4*1000)","","",1,"?","40% Minimum","Fully invincible on frames 1-9"],
      ["Yoga Sunburst (hold)","214214K (hold)","qcb,qcb+K (hold)","u","23(71)",null,58,"KD",null,"3100(4000)","","var",1,"?","40% Minimum","Fully invincible on frames 1-9"],
      ["Merciless Yoga","236236K","qcf,qcf+K","u",10,5,75,"HKD +19",-62,4000,"","",0,1.356,"50% Minimum / 10% Immediate (special)","Fully invincible on frames 1-14"],
      ["Merciless Yoga (Critical Art)","236236K (CA)","qcf,qcf+K (CA)","u",10,5,75,"HKD +19",-62,4500,"","",0,1.356,"50% Minimum / 10% Immediate (special)","Fully invincible on frames 1-14"],
      ["MP Yoga Inferno","236236MP","qcf,qcf+MP","u",10,84,"128 total","KD",-10,2100,"","",0,null,null,"Invincible to throws from frames 1 - 11 Minimum guaranteed damage is 30% Values do not change on counter or Punish Counter Deals 792 of recoverable damage on block"],
      ["HP Yoga Inferno","236236HP","qcf,qcf+HP","u",10,84,"133 total","KD",-22,2040,"","",0,null,null,"Invincible to throws from frames 1 - 11 Minimum guaranteed damage is 30% Values do not change on counter or Punish Counter Deals 792 of recoverable damage on block"],
      ["Yoga Sunburst (lvl 2)","214214 (hold) K","qcb,qcb+ (hold) K","u",7,null,"80 total",null,null,3100,"","",0,null,null,"Completely invincible from frames 1 - 9 Minimum guaranteed damage is 40% Values do not change on counter or Punish Counter Hold the button for over 140 frames to activate the Level 2 version"],
      ["Yoga Sunburst (lvl 3)","214214 (hold) K","qcb,qcb+ (hold) K","u",7,null,"128 total",null,null,4000,"","",0,null,null,"Completely invincible from frames 1 - 9 Minimum guaranteed damage is 40% Values do not change on counter or Punish Counter Hold the button for over 188 frames to activate the Level 2 version"]
    ],
  "s": {
      "fastestNormal": "4f",
      "bestReversal": "Merciless Yoga",
      "fDash": "25",
      "bDash": "23",
      "health": "10000",
      "jump": "4+68+3",
      "throwRange": "0.8"
    }
  },
  "lab": {"by":"Iori (SF6 Lab)","url":"https://sf6-lab.net/en/fighters/dhalsim/combo","updated":"2026-08-31","balance":"2026-08-03","secs":[{"t":"Notation","arts":[{"h":"","ps":[{"k":"p","l":["DR = Parry Drive Rush","CDR = Cancel Drive Rush","PC = Punish Counter","CH = Counter Hit"]},{"k":"p","l":["Yoga Fire = 236P","Yoga Arch = 236K","Yoga Flame = 63214P","Yoga Blast = 63214K","Yoga Comet = airborne 63214P","Yoga Float = 2KK / 3KK","Yoga Teleport = 4/6+PPP or KKK"]},{"k":"r","l":[{"s":"PPP teleport travels farther and can cross behind in some situations."}]},{"k":"r","l":[{"s":"KKK teleport travels a shorter distance and generally does not cross behind."}]}]}]},{"t":"Key changes in the 2026-8-3 version","arts":[{"h":"Multiple projectiles on screen","ps":[{"k":"r","l":[{"s":"Regular Yoga Arch can be used while OD Yoga Fire is on screen."}]},{"k":"r","l":[{"s":"Regular Yoga Fire can be used while OD Yoga Arch is on screen."}]},{"k":"p","l":["Yoga Comet can also be used alongside them."]},{"k":"p","l":["Result"]},{"k":"p","l":["A horizontal projectile + a falling projectile + an aerial projectile"]},{"k":"p","l":["These projectiles can be deployed together."]}]},{"h":"st.LP","ps":[{"k":"p","l":["The upper hitbox was expanded. Startup: 4F; on hit: +4; on block: -1."]}]},{"h":"OD Yoga Comet","ps":[{"k":"p","l":["Dhalsim can act sooner afterward, improving teleport, float, and retreat options after placing the projectile."]}]},{"h":"March 2026 adjustments","ps":[{"k":"p","l":["OD Yoga Flame gained stronger launch-and-follow-up utility. j.MP can cancel into Yoga Mummy or Drill Kick. j.HP and j.HK were also adjusted to work more easily as aerial combo enders."]}]}]},{"t":"10 essential starter combos","arts":[{"h":"1 Basic light-attack route","ps":[{"k":"r","l":[{"r":"st.LP > cr.LP > OD Yoga Fire"}]},{"k":"p","l":["A basic knockdown from light attacks. OD Yoga Fire leaves approximately +49F or more."]},{"k":"p","l":["To finish the round"]},{"k":"r","l":[{"r":"st.LP > cr.LP > OD Yoga Fire > SA3"}]}]},{"h":"2. Light attacks into wake-up pressure","ps":[{"k":"r","l":[{"r":"cr.LP > CDR > st.LP > 4MP (Yoga Uppercut) > M Yoga Blast > immediate forward PPP teleport"}]},{"k":"r","l":[{"r":"M Yoga Blast > +42F"}]},{"k":"r","l":[{"s":"After the immediate forward teleport: point-blank behind the opponent, at approximately +3F."}]},{"k":"p","l":["This more easily covers both normal recovery and back recovery."]}]},{"h":"3. Basic 4MK route","ps":[{"k":"r","l":[{"r":"4MK > M Yoga Flame"}]},{"k":"p","l":["M Yoga Flame leaves approximately +33F. A basic part of Dhalsim's combos."]}]},{"h":"4 cr.MP starter","ps":[{"k":"r","l":[{"r":"cr.MP > CDR > 4MK > H Yoga Flame"}]},{"k":"p","l":["H Yoga Flame leaves approximately +45F. Continue with Yoga Fire, Yoga Arch, or Yoga Float."]}]},{"h":"5 Nirvana Punch starter","ps":[{"k":"r","l":[{"r":"1HP > M or H Yoga Flame"}]},{"k":"p","l":["Use for close-range punishes or after a low Yoga Float j.HP, for example."]}]},{"h":"6 Aerial Yoga Float starter","ps":[{"k":"r","l":[{"r":"Aerial Yoga Float > j.HP > 1HP > M Yoga Flame"}]},{"k":"p","l":["A basic combo from an important opening tool."]}]},{"h":"7 OD Yoga Flame starter","ps":[{"k":"r","l":[{"r":"OD Yoga Flame > cr.HK"}]},{"k":"p","l":["OD Yoga Flame launches the opponent. This route uses Drive meter efficiently."]}]},{"h":"8 OD Yoga Flame SA1","ps":[{"k":"r","l":[{"r":"OD Yoga Flame > SA1"}]},{"k":"p","l":["In the corner or at point-blank range:"]},{"k":"r","l":[{"r":"OD Yoga Flame > st.HK > HP version SA1"}]}]},{"h":"9 st.HK Punish Counter","ps":[{"k":"r","l":[{"r":"st.HK PC > 1HP > OD Yoga Flame > cr.HK"}]},{"k":"p","l":["In the corner with Super meter"]},{"k":"r","l":[{"r":"st.HK PC > 1HP > OD Yoga Flame > st.HK > H SA1"}]}]},{"h":"10. Corner H Yoga Blast route","ps":[{"k":"r","l":[{"r":"4MK > H Yoga Blast > L Yoga Blast"}]},{"k":"p","l":["The L Yoga Blast ender leaves approximately +37F and leads into corner setplay."]}]}]},{"t":"Choosing between M and H Yoga Blast","arts":[{"h":"M Yoga Blast","ps":[{"k":"p","l":["Startup: 15F; damage: 1200; advantage: +42F. Prioritizes reliability and efficient damage."]}]},{"h":"H Yoga Blast","ps":[{"k":"p","l":["Startup: 17F; damage: 1200; advantage: +42F. Applies 20% scaling afterward. Its longer launch time suits follow-ups and setplay."]},{"k":"p","l":["basic"]},{"k":"r","l":[{"s":"Choose M Yoga Blast for reliability and damage."}]},{"k":"r","l":[{"s":"Choose H Yoga Blast for more follow-up time or specific situations."}]}]}]},{"t":"anti-air Combo","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"DR > 4MP CH > M / H Yoga Blast"}]},{"k":"p","l":["Depending on hit height:"]},{"k":"r","l":[{"s":"Options include Yoga Blast into another DR Yoga Uppercut, Yoga Blast into a slide, OD Yoga Blast, or a Super Art."}]},{"k":"p","l":["Choose an appropriate follow-up."]}]}]},{"t":"Aerial combos since March 2026","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"j.MPairborne hit > Yoga Mummy"}]},{"k":"p","l":[["Alternatively:","Como alternativa:"]]},{"k":"r","l":[{"r":"j.MPairborne hit > Drill Kick"}]},{"k":"p","l":["Use these to follow up against opponents launched by OD Yoga Flame, Yoga Arch, or similar moves."]},{"k":"p","l":["j.HP and j.HK are also aerial combo ender options."]}]}]},{"t":"Key Frame Advantage by Ender","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"L Yoga Flame > +33F"}]},{"k":"r","l":[{"r":"M Yoga Flame > +33F"}]},{"k":"r","l":[{"r":"H Yoga Flame > +45F"}]},{"k":"r","l":[{"r":"OD Yoga Flame > +51F"}]},{"k":"r","l":[{"r":"L Yoga Blast > +39F"}]},{"k":"r","l":[{"r":"M Yoga Blast > +42F"}]},{"k":"r","l":[{"r":"H Yoga Blast > +42F"}]},{"k":"r","l":[{"r":"OD Yoga Blast > +42F"}]},{"k":"r","l":[{"r":"OD Yoga Fire > +49F…"}]},{"k":"r","l":[{"r":"forward throw > +31F"}]},{"k":"r","l":[{"r":"back throw > +19F"}]},{"k":"r","l":[{"r":"L / M SA1 > +24F"}]},{"k":"r","l":[{"r":"H SA1 > +27F"}]},{"k":"r","l":[{"r":"SA3 > +19F"}]},{"k":"p","l":["The advantage from regular Yoga Fire, Yoga Arch, and Yoga Comet varies considerably with where the projectile connects."]}]}]},{"t":"Setplay","arts":[{"h":"1. M Yoga Blast into cross-up teleport: key setup","ps":[{"k":"r","l":[{"r":"Grounded M Yoga Blast hit > immediate forward PPP teleport > point-blank at approximately +3F"}]},{"k":"p","l":["From there: st.LP, throw, low Yoga Float j.HK, or wait briefly and block an invincible reversal."]}]},{"h":"2. M Yoga Blast into Yoga Arch and cr.HK","ps":[{"k":"r","l":[{"r":"M Yoga Blast ender > Yoga Arch > cr.HK"}]},{"k":"p","l":["Push the opponent while the delayed Yoga Arch falls. This setup maintains screen control."]}]},{"h":"3. H Yoga Blast into st.MK and Yoga Fire / Yoga Arch","ps":[{"k":"r","l":[{"r":"H Yoga Blast > st.MK follow-up > approximately +11F"}]},{"k":"p","l":["From there:","/ Yoga Fire","/ Yoga Arch"]}]},{"h":"4. Yoga Blast ender at +42F","ps":[{"k":"r","l":[{"r":"M / H / OD Yoga Blast > +42F"}]},{"k":"p","l":["In the corner, use this as the baseline for a safe jump."]},{"k":"p","l":["Armor, counters, and unusual anti-airs need separate responses."]}]},{"h":"5. Forward throw into DR medium slide","ps":[{"k":"r","l":[{"r":"forward throw > +31F"}]},{"k":"r","l":[{"r":"DR > cr.MK active frames"}]},{"k":"p","l":["Approximate values","hit: +12F","block: +5F"]},{"k":"p","l":["From there:","/ strike","/ throw"]},{"k":"p","l":["If the opponent is looking for a Perfect Parry, throw directly from DR."]}]},{"h":"6 corner / forward throw","ps":[{"k":"r","l":[{"r":"forward throw > cr.LK whiff > +5F"}]},{"k":"p","l":[["Alternative option","Opção alternativa"]]},{"k":"r","l":[{"r":"forward throw > cr.LK whiff > 4MKactive frames > +3F approximately"}]}]},{"h":"7 corner / 4MK > H Yoga Arch","ps":[{"k":"r","l":[{"r":"4MK > H Yoga Arch"}]},{"k":"r","l":[{"s":"Make the opponent block Yoga Arch to remain within throw range at approximately +3F."}]},{"k":"p","l":["From there: throw, st.LP, Drill Kick, or shimmy."]}]},{"h":"8 corner / Karma Kick ender > L Yoga Arch","ps":[{"k":"r","l":[{"r":"1HK > L Yoga Arch > point-blank +3F approximately"}]},{"k":"r","l":[{"s":"From there: throw, or st.LP into teleport."}]}]},{"h":"9 corner / H Yoga Blast > L Yoga Blast +37F","ps":[{"k":"r","l":[{"r":"H Yoga Blast > L Yoga Blast > +37F"}]},{"k":"p","l":["From there:"]},{"k":"r","l":[{"r":"Light slide > point-blank at approximately +4F"}]},{"k":"r","l":[{"r":"cr.MK whiff > +7F > shimmy"}]},{"k":"r","l":[{"r":"Whiff st.LP > L Yoga Fire > approximately +3F on block with a meaty projectile"}]}]},{"h":"10. Corner Drill Kick after a Karma Kick ender","ps":[{"k":"r","l":[{"r":"1HK ender > st.LP whiff > H Drill Kick"}]},{"k":"r","l":[{"s":"After the opponent blocks"},{"s":"> +4F"}]}]},{"h":"11 corner / H Yoga Flame meaty","ps":[{"k":"r","l":[{"r":"Knock down with 1HK or a similar move > meaty H Yoga Flame"}]},{"k":"r","l":[{"s":"Blocking the later active frames leaves approximately +11F."}]},{"k":"r","l":[{"r":"From there, resume pressure with 1MK > H Yoga Arch or a similar sequence."}]}]},{"h":"12 OD Yoga Arch Okizeme","ps":[{"k":"r","l":[{"r":"Yoga Blast knockdown > OD Yoga Arch on the M / H trajectory > heavy slide"}]},{"k":"p","l":["Approach behind Yoga Arch. After it is blocked, continue with a throw or strike."]}]},{"h":"13. Yoga Arch into a teleport side mix-up","ps":[{"k":"r","l":[{"r":"Place Yoga Arch above the opponent > forward teleport"}]},{"k":"p","l":["While the opponent blocks Yoga Arch, choose a same-side jumping attack or a teleport cross-up jumping attack."]},{"k":"p","l":["This requires the projectile to keep the opponent occupied."]}]},{"h":"14 OD Yoga Flame > cr.HKafter","ps":[{"k":"r","l":[{"r":"OD Yoga Flame > cr.HK"}]},{"k":"r","l":[{"r":"Pick up as early as possible > approximately +33F"}]},{"k":"r","l":[{"r":"Midscreen: forward dash > approximately +8F > 4MK on a later active frame"}]},{"k":"r","l":[{"s":"Alternatively, walk forward slightly and throw."}]}]},{"h":"15. Bait throw techs with Drill Kick","ps":[{"k":"r","l":[{"r":"With advantage at point-blank range: low Yoga Float / back jump > Drill Kick"}]},{"k":"p","l":["Drill Kick gives more advantage when it connects lower, reaching approximately +5F on block at best."]},{"k":"p","l":["Establish the throw threat, then punish throw-tech attempts with Yoga Float j.HK or Drill Kick."]}]}]},{"t":"Year 4 projectile barrage: “Bowser's Castle”","arts":[{"h":"","ps":[{"k":"p","l":["Example1","OD Yoga Fire","↓ Yoga Arch","↓","Yoga Comet"]},{"k":"p","l":["Example2","OD Yoga Arch","↓ Yoga Fire","↓","Yoga Comet"]},{"k":"p","l":["A horizontal projectile, a falling projectile, and an aerial projectile can share the screen."]},{"k":"p","l":["Combine them with forward teleport, DR slide, Yoga Float, or long-reaching normals."]},{"k":"p","l":["Restrict jumps, forward movement, and parries before approaching with Dhalsim himself."]}]}]},{"t":"Corner pressure against Burnout","arts":[{"h":"","ps":[{"k":"r","l":[{"r":"Against a burned-out opponent in the corner, 1MK > H Yoga Arch gives more advantage."}]},{"k":"p","l":["This is not an infinite true blockstring."]},{"k":"p","l":["Use H Yoga Arch for chip damage, read the opponent's attempts to interrupt, then choose a strike, throw, or more projectiles."]}]}]},{"t":"Invincible-Reversal Punishes","arts":[{"h":"","ps":[{"k":"r","l":[{"s":"basic"},{"r":"st.HK PC > 1HP > OD Yoga Flame"}]},{"k":"r","l":[{"r":"From there: cr.HK, SA1, or in the corner, st.HK > H SA1."}]},{"k":"p","l":["For Dhalsim, returning to setplay through OD Yoga Flame or Yoga Blast can be as important as maximizing damage."]}]}]},{"t":"10 Practical Starter Routes","arts":[{"h":"","ps":[{"k":"r","l":[{"s":"1."},{"r":"st.LP > cr.LP > OD Yoga Fire"}]},{"k":"r","l":[{"r":"2. cr.LP > CDR > st.LP > 4MP > M Yoga Blast > immediate forward teleport > +3F"}]},{"k":"r","l":[{"s":"3."},{"r":"4MK > M Yoga Flame"}]},{"k":"r","l":[{"s":"4."},{"r":"Aerial Yoga Floatj.HP > 1HP > M Yoga Flame"}]},{"k":"r","l":[{"s":"5."},{"r":"cr.MP > CDR > 4MK > H Yoga Flame"}]},{"k":"r","l":[{"s":"6."},{"r":"OD Yoga Flame > cr.HK or > SA1"}]},{"k":"r","l":[{"s":"7."},{"r":"corner: H Yoga Blast > L Yoga Blast > +37F Setplay"}]},{"k":"r","l":[{"r":"8. Forward throw > DR medium slide > +5F on block > strike / throw"}]},{"k":"r","l":[{"r":"9. Corner: 4MK > H Yoga Arch > +3F within throw range"}]},{"k":"r","l":[{"r":"10. OD Yoga Fire + regular Yoga Arch + Yoga Comet > teleport / DR / Yoga Float"}]}]}]},{"t":"Current Game Plan","arts":[{"h":"","ps":[{"k":"p","l":["Keep the opponent out with long-reaching attacks and projectiles > respond to movement with anti-airs or whiff punishes > knock down with Yoga Blast > apply teleport / Yoga Arch wake-up pressure > use Yoga Arch, throws, and Drill Kick in the corner > restore screen control with multiple projectiles if separated."]}]}]},{"t":"Notes for Older Guides","arts":[{"h":"","ps":[{"k":"r","l":[{"s":"H Yoga Blast starts in 17F and applies 20% scaling afterward."}]},{"k":"r","l":[{"s":"OD Yoga Flame's follow-up potential was substantially improved in March 2026."}]},{"k":"r","l":[{"s":"OD Yoga Fire and regular Yoga Arch can coexist from August 2026 onward."}]},{"k":"r","l":[{"s":"OD Yoga Arch and regular Yoga Fire can coexist from August 2026 onward."}]},{"k":"r","l":[{"s":"OD Yoga Comet allows Dhalsim to act sooner afterward."}]},{"k":"r","l":[{"s":"st.LP's upper hitbox was improved."}]}]}]},{"t":"References","arts":[{"h":"","ps":[{"k":"p","l":["Sources: official Street Fighter 6 battle adjustments; Ultimate Frame Data; Year 4 Dhalsim guide material; testing after the March / August 2026 adjustments; Season 4 Dhalsim matchup and setplay testing."]},{"k":"p","l":["Combo and setplay conditions can vary with spacing, late-active hits, hit height, recovery choice, and position relative to the corner."]},{"k":"p","l":["Recheck in Training Mode before using these routes in matches."]}]}]}]}
};
