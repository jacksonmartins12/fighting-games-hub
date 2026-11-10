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
      ["Stand LP","5LP","LP","n",4,3,10,4,-1,300,"ch sp su","",0],
      ["Stand MP","5MP","MP","n",7,4,15,2,-2,600,"sp su tc","",0],
      ["Stand HP","5HP","HP","n",10,4,20,0,-3,800,"su tc","",0],
      ["Stand LK","5LK","LK","n",5,2,12,2,-2,300,"sp su","",0],
      ["Stand MK","5MK","MK","n",10,3,18,0,-5,600,"sp su","",0],
      ["Stand HK","5HK","HK","n",15,3,"26(23)",1,-6,900,"","",0],
      ["Crouch LP","2LP","d+LP","n",4,2,11,3,-2,300,"ch sp su","",0],
      ["Crouch MP","2MP","d+MP","n",7,3,"11(15)",6,-1,600,"sp su","",0],
      ["Crouch HP","2HP","d+HP","n",10,5,21,-2,-8,600,"tc","",0],
      ["Crouch LK","2LK","d+LK","n",5,2,13,-1,-3,200,"ch","",0],
      ["Crouch MK","2MK","d+MK","n",8,4,16,4,-2,600,"","",0],
      ["Crouch HK","2HK","d+HK","n",11,2,27,"KD +29",-12,900,"","",0],
      ["Jump LP","8LP","u+LP","n",5,10,null,"5~9","1~5",300,"","",0],
      ["Jump MP","8MP","u+MP","n",8,4,null,"9~11 (KD)","5~7",700,"","",0],
      ["Jump HP","8HP","u+HP","n",9,4,null,"8~15 (KD)","4~11",800,"","",0],
      ["Jump LK","8LK","u+LK","n",6,9,null,"3~10","-1~6",300,"","",0],
      ["Jump MK","8MK","u+MK","n",7,6,null,"8~13","4~9",500,"","",0],
      ["Jump HK","8HK","u+HK","n",11,5,null,"8~15","4~11",800,"","",0],
      ["Révérence","4HP","b+HP","n",8,6,17,3,1,800,"sp su","",0],
      ["Tomoe Derrière","3HK","df+HK","n",11,9,32,"KD +26",-23,1000,"","",0],
      ["Back MK","4MK","b+MK","n",10,4,19,-1,-3,600,"tc","",0],
      ["En Haut","4MK > MK","b+MK > MK","n",14,5,21,-3,-11,500,"sp su","",0],
      ["À Terre","5MP > MK","MP > MK","n",10,2,17,2,-5,500,"","",0],
      ["Temps Lié","5HP > HP","HP > HP","n",5,5,"17(19)",3,-8,600,"","",0],
      ["Allongé","2HP > HP","d+HP > HP","n",4,4,26,"1 (KD ~)",-10,500,"","",0],
      ["Ouchi Gari","LPLK","LP+LK","t",5,3,23,"KD +16",null,"1200(2040)","","",0],
      ["Uchi Mata","4LPLK","b+LP+LK","t",5,3,23,"KD +18",null,"1200(2040)","","",0],
      ["Drive Impact: Glissade","HPHK","HP+HK","d",26,2,35,"KD (notes)",-3,800,"","",0],
      ["Drive Reversal: Écarté","6HPHK","f+HP+HK","d","20(18)",3,26,"KD +23",-6,500,"","",0],
      ["Drive Parry","MPMK","MP+MK","d",1,"12(2)","33(1)notes",null,null,null,"","",0],
      ["Drive Rush","MPMK / 66 (cancel)","MP+MK / f,f (cancel)","d","9(11)","45(46)","24(23)",null,null,null,"","var",0],
      ["LP Manège Doré","624LP","hcb+LP","s",10,3,48,"HKD +19",null,"2000-3700","","",0],
      ["MP Manège Doré","624MP","hcb+MP","s",8,3,50,"HKD +19",null,"2000-3700","","",0],
      ["HP Manège Doré","624HP","hcb+HP","s",5,3,53,"HKD +19",null,"2000-3700","","",0],
      ["OD Manège Doré","624PP","hcb+PP","s",8,3,50,"HKD +19",null,"2000-3700","","",0],
      ["LK Rond-point","236LK","qcf+LK","s",9,"3(2)2",29,3,-15,"900 (400*500)","su3","",0],
      ["MK Rond-point","236MK","qcf+MK","s",11,"3(3)3",27,"KD +34",-14,"1000 (400*600)","su3","",0],
      ["HK Rond-point","236HK","qcf+HK","s",14,"3(3)3","22(24)","KD +37",-11,"800 (400*400)","su3","",0],
      ["OD Rond-point","236KK","qcf+KK","s",8,"4(2)3","25(30)","KD +45",-19,"800 (500*300)","su2 su3","",0],
      ["LK Dégagé","214LK","qcb+LK","s",16,"2(10)4",36,"KD +21",-24,"1000 (300*700)","","",0],
      ["MK Dégagé","214MK","qcb+MK","s",16,"4(14)6",22,"KD +33",-13,"1200 (400*800)","","",0],
      ["HK Dégagé","214HK","qcb+HK","s","20(21)","3(2)",24,3,-9,1000,"","",0],
      ["OD Dégagé","214KK","qcb+KK","s","22(23)",3,22,"6(7)",-3,800,"","",0],
      ["LP Renversé","236LP","qcf+LP","s",22,2,37,"HKD +15",-23,"1350-1950","su3","",0],
      ["MP Renversé","236MP","qcf+MP","s",25,2,34,"HKD +15",-20,"1400-2000","su3","",0],
      ["HP Renversé","236HP","qcf+HP","s",29,2,30,"HKD +15",-16,"1500-2100","su3","",0],
      ["OD Renversé","236PP","qcf+PP","s",25,2,34,"HKD +15",-20,"1500-2100","","",0],
      ["Grand Fouetté","236P > K","qcf+P > K","s","16(18)+10",6,20,"KD +53(+58)","-3(2)",800,"su3","",0],
      ["Renversé Feint","236P (hold)","qcf+P (hold)","s",null,null,"31(33)",null,null,null,"","var",0],
      ["OD Grand Fouetté","236PP > K","qcf+PP > K","s","15+10",6,22,"KD +58(+63)","-12(-7)",800,"su2 su3","",0],
      ["OD Renversé Feint","236PP (hold)","qcf+PP (hold)","s",null,null,27,null,null,null,"","var",0],
      ["Arabesque","236236K","qcf,qcf+K","u",10,4,65,"KD +7",-49,2000,"","",0],
      ["Étoile","214214K","qcb,qcb+K","u",7,"3(11)6(45)9","38+34","KD +32","-61(-118)",2800,"","",0],
      ["Pas de Deux","236236P","qcf,qcf+P","u","6+1",2,72,"HKD +16",null,"4000(4600)","","",0],
      ["Pas de Deux (Critical Art)","236236P (CA)","qcf,qcf+P (CA)","u","6+1",2,72,"HKD +16",null,"4500(5100)","","",0]
    ],
  "s": {
      "fastestNormal": "4f",
      "bestReversal": "Étoile",
      "fDash": "21",
      "bDash": "25",
      "health": "10000"
    }
  }
};
