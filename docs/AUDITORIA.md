# Auditoria técnica do Fighting Games Resource Hub

Data: 11/11/2026 · Branch: `feature/auditoria` (sobre `feature/cores`) · Fonte do frame data: FAT, commit `a8101eb` (22/10/2026)

## 1. Resumo executivo

O código do hub está em bom estado: sem erros de JavaScript, sem links internos quebrados, sem estouro de largura em celular, tablet ou desktop, e as versões EN e PT têm exatamente a mesma estrutura nos 32 capítulos. O frame data dos 32 personagens é uma cópia fiel do FAT: os 2.133 golpes batem em todos os campos principais.

O ponto fraco era a **rastreabilidade**: o hub não dizia de qual versão do FAT vinham os dados, não tinha como validar os dados nem como registrar mudanças de patch, e o README afirmava uma comparação com as páginas oficiais da Capcom que nunca foi feita. Também havia três problemas de conta: o exemplo de blockstun em Fundamentos, a regra do meaty seguro (um frame mais generosa que a contagem do próprio hub) e o buscador de punish, que apresentava golpes que só cabem pelos frames sem avisar que o alcance não é garantido.

Tudo isso foi corrigido. Ficam pendentes a comparação com os dados oficiais da Capcom, que não podem ser lidos automaticamente daqui, e dois testes no jogo (contagem do meaty e safe jump contra outros reversals).

## 2. Diagnóstico inicial (Fase 1)

**Arquitetura.** Site estático gerado pelo `build.py` a partir de `src/` (texto dos capítulos por idioma), `i18n/` (textos de interface) e `src/site.json` (ordem e grupos). Os 32 personagens ficam em `data/chars/<slug>.js` e só carregam quando abertos (`needChar`). As ferramentas (punish, matchup, flashcards, calculadoras do Avançado) leem esses mesmos dados. O progresso fica no `localStorage`, com nuvem opcional. Funciona offline pelo `sw.js`.

| Gravidade | Problema | Situação |
|---|---|---|
| Crítico | Nenhum encontrado | — |
| Alto | Frame data sem versão nem fonte rastreável por golpe; README dizia que foi conferido na Capcom | Corrigido |
| Alto | Regra do meaty seguro um frame mais generosa que a contagem do hub: podia marcar como seguro um meaty que não é | Corrigido |
| Alto | Buscador de punish sem justificativa e sem aviso de alcance | Corrigido |
| Médio | Exemplo de blockstun em Fundamentos contava os frames de um jeito diferente do frame data do SF6 | Corrigido |
| Médio | 23 golpes em que o FAT contradiz a si mesmo; 1 golpe em que FAT e dood.gg divergem | Marcados no site |
| Médio | Sem validação de dados, sem testes no repositório, sem CI, sem histórico de patches | Corrigido |
| Médio | Contagem do meaty (oponente acertável no frame N + 1) não confirmada no jogo | Teste descrito no site |
| Baixo | Arjun sem melhor reversal ("?"); dois valores de dano da Yasmine com colchete trocado (`{600)`) | Corrigido |
| Baixo | "block stun" e "hit stun" escritos de dois jeitos no inglês; glossário sem "Frame Data" e "Fuzzy Guard" | Corrigido |
| Baixo | Única dependência externa: Google Fonts (o site usa fontes do sistema sem ela; o README dizia que não havia dependência externa) | Documentado |
| Opcional | Hitstun e blockstun não aparecem nas tabelas; notas de invencibilidade só em inglês | Pendente |

Acessibilidade conferida: sem IDs duplicados, toda imagem com `alt`, todo botão e campo com nome acessível, `lang` da página muda com o idioma, regiões `aria-live` nas calculadoras, foco visível e `prefers-reduced-motion`. Desempenho: `index.html` com 1,2 MB (346 KB com gzip), porque os dois idiomas ficam no HTML por decisão de projeto; os personagens carregam sob demanda.

## 3. Auditoria dos 32 personagens (Fase 2)

- **Personagens auditados:** 32 de 32.
- **Golpes verificados:** 2.133 (todos), em startup, active, recovery, vantagem no hit, vantagem no block, dano, cancels e comando. Diferenças em relação ao FAT: **0**. As 64 diferenças de comando são a notação de carga do hub (`[4]6`), escolha intencional; os 37 golpes do FAT ausentes no hub são taunts.
- **Consistência interna do FAT:** nos dados do SF6, vantagem no block = blockstun − frames ativos − recovery. 733 golpes têm os quatro números; 68 quebram a regra, dos quais 45 são projéteis e Drive Reversals (esperado). Os **23 restantes** foram marcados "a conferir".
- **Segunda fonte:** dood.gg para o Ryu (15 golpes): 12 batem, 1 diverge (OD High Blade Kick), 1 variante que o hub não tem (OD Hashogeki com Denjin Charge). Os outros 31 personagens não puderam ser lidos no dood.gg daqui.
- **Pulos, dashes e vida:** os 32 batem com o FAT e com a SuperCombo Wiki (Game Data).
- **Versão:** o FAT atualizou os personagens existentes em 10/08/2026 (uma semana depois do patch de 03/08) e em 22/10/2026. Os dados do hub são os de 22/10/2026.
- **Não verificado:** dados oficiais da Capcom (as páginas não abrem por acesso automático) e as páginas de golpe da SuperCombo (bloqueadas para leitura automática). Por isso o rótulo dos dados no site é "Ferramenta", não "Oficial".

### Divergências e marcações

Nenhum valor foi alterado sem confirmação da fonte. Cada linha abaixo aparece no site com ⚠ e a explicação embaixo do golpe.

| Personagem | Golpe | Valor no hub | Valor verificado | Fonte | Versão | Problema | Correção |
|---|---|---|---|---|---|---|---|
| Dee Jay | Threebeat Combo 2 | no block -8 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -8, mas blockstun 16 − ativos 3 − recovery 19 = -6; no hit +3, mas hitstun 27 − ativos 3 − recovery 19 = +5 | Nenhuma no valor; marcado "a conferir" |
| Dee Jay | OD Jus Cool > Waning Moon | no block -2 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -2, mas blockstun 18 − ativos 5 − recovery 17 = -4 | Nenhuma no valor; marcado "a conferir" |
| Guile | Crouch MK | no block -5 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -5, mas blockstun 18 − ativos 3 − recovery 18 = -3 | Nenhuma no valor; marcado "a conferir" |
| Ingrid | Sun Veil | no block -3 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -3, mas blockstun 21 − ativos 15 − recovery 35 = -29 | Nenhuma no valor; marcado "a conferir" |
| Ingrid | OD Sun Veil | no block -3 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -3, mas blockstun 24 − ativos 20 − recovery 35 = -31 | Nenhuma no valor; marcado "a conferir" |
| Jamie | LK Arrow Kick | no block -44 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -44, mas blockstun 17 − ativos 10 − recovery 52 = -45 | Nenhuma no valor; marcado "a conferir" |
| Juri | Stand LK | no block -3 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -3, mas blockstun 7 − ativos 3 − recovery 9 = -5; no hit +2, mas hitstun 13 − ativos 3 − recovery 9 = +1 | Nenhuma no valor; marcado "a conferir" |
| Ken | Chin Buster 2nd | no block -14 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -14, mas blockstun 15 − ativos 3 − recovery 27 = -15 | Nenhuma no valor; marcado "a conferir" |
| Kimberly | MP Vagabond Edge | no block -12 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -12, mas blockstun 21 − ativos 2 − recovery 28 = -9 | Nenhuma no valor; marcado "a conferir" |
| Kimberly | HP Vagabond Edge | no block -12 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -12, mas blockstun 21 − ativos 2 − recovery 28 = -9 | Nenhuma no valor; marcado "a conferir" |
| Kimberly | OD Vagabond Edge | no block -12 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -12, mas blockstun 21 − ativos 2 − recovery 28 = -9 | Nenhuma no valor; marcado "a conferir" |
| Kimberly | Arc Step > Bushin Hojin Kick | no block -8 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -8, mas blockstun 15 − ativos 6 − recovery 20 = -11 | Nenhuma no valor; marcado "a conferir" |
| Kimberly | OD Arc Step > Bushin Hojin Kick | no block -8 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -8, mas blockstun 15 − ativos 6 − recovery 20 = -11 | Nenhuma no valor; marcado "a conferir" |
| Kimberly | Bushin Beats (0 stock) | no block -25 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -25, mas blockstun 16 − ativos 15 − recovery 40 = -39 | Nenhuma no valor; marcado "a conferir" |
| Kimberly | Bushin Beats (1 stock) | no block -25 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -25, mas blockstun 16 − ativos 15 − recovery 40 = -39 | Nenhuma no valor; marcado "a conferir" |
| Lily | Desert Storm Final | no block -23 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -23, mas blockstun 19 − ativos 5 − recovery 39 = -25 | Nenhuma no valor; marcado "a conferir" |
| Luke | Stand LK | no block -2 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -2, mas blockstun 22 − ativos 2 − recovery 12 = +8 | Nenhuma no valor; marcado "a conferir" |
| Luke | Rawhide | no block -3 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -3, mas blockstun 21 − ativos 2 − recovery 21 = -2 | Nenhuma no valor; marcado "a conferir" |
| Luke | Outlaw Kick | no block -3 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -3, mas blockstun 22 − ativos 4 − recovery 24 = -6 | Nenhuma no valor; marcado "a conferir" |
| Ryu | Stand HK | no block +1 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block +1, mas blockstun 24 − ativos 4 − recovery 20 = +0 | Nenhuma no valor; marcado "a conferir" |
| Ryu | Crouch HP | no block -7 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -7, mas blockstun 19 − ativos 6 − recovery 21 = -8 | Nenhuma no valor; marcado "a conferir" |
| Ryu | LK High Blade Kick | no block -11 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block -11, mas blockstun 20 − ativos 6 − recovery 22 = -8 | Nenhuma no valor; marcado "a conferir" |
| Ryu | OD High Blade Kick | −18 no block | não verificado (dood.gg: −11) | FAT a8101eb; dood.gg | FAT 22/10/2026; dood.gg sem data | Fontes divergem | Nenhuma no valor; marcado "fontes divergem" |
| Sagat | High Step Kick | no block +4 | não verificado | FAT a8101eb | FAT 22/10/2026 | FAT: no block +4, mas blockstun 26 − ativos 4 − recovery 21 = +1 | Nenhuma no valor; marcado "a conferir" |
| Arjun | melhor reversal | "?" | Howling Destruction (SA1), invencível 1–8 | Notas de golpe do FAT | FAT 22/10/2026 | Campo vazio | Preenchido e marcado "preenchido pelo hub" |

## 4. Revisão matemática (Fases 2 e 3)

**Punish (3.1).** A regra `startup ≤ −vantagem no block` está certa, e os casos com faixa de valores usam o lado mais conservador (vantagem menos negativa, startup mais lento). O que faltava era deixar claro que isso garante só o tempo, não o alcance: o frame data não traz pushback nem distância. Agora cada linha mostra a janela ("precisa de ≤ 6f"), cada golpe sugerido mostra a conta ("5f ≤ 6: cabe pelos frames") e o alcance (do FAT), e um aviso explica a diferença entre caber pelos frames e alcançar. As escolhas de golpe não mudaram (comparação com a versão anterior: nenhuma diferença).

**Meaty (3.2).** `ativo de p + S − 1 até p + S + A − 2` e "acerta no frame N + 1" estão consistentes com a regra de link do SF6 (+5 no hit liga num golpe de 5f, confirmada pela Game Data da SuperCombo). A contagem do primeiro frame acertável no wakeup ainda não foi confirmada no jogo; o exemplo do Akuma no capítulo virou o teste (−4 confirma a contagem, −5 a desloca em um frame).

**Meaty seguro (3.3).** Derivação: com o meaty encontrando o primeiro frame do oponente, você volta a defender no frame primeiro + preso + 1 e o reversal fica ativo em primeiro + R − 1, então é seguro se **preso + 2 ≤ R**. A regra do dood.gg (preso + 1 ≤ R) é um frame mais generosa. A calculadora agora usa a conta do hub e marca como "dúvida de 1 frame" o caso em que só a regra do dood.gg passa. As condições estão escritas no site: reversal no primeiro frame, invencível durante os frames ativos e defensável (uma Super que agarra não é).

**Safe jump (3.4).** Os quatro resultados de training mode contra os reversals do Ryu (+42 defende 5f e 6f; +41 perde para 5f e defende 6f) seguem uma regra: **N + R ≥ J + 5**, com J = pré-pulo + tempo no ar (42 no pulo padrão). Na contagem do hub isso equivale a "o pulo começa um frame depois do comando, você aterrissa em J + 2 a J + 4 e defende a partir de J + 5". Essa última parte é ajustada aos testes, não documentada por nenhuma fonte, e o site diz isso. A regra prevê +43 (Zangief), +44 (Lily e A.K.I.), +46 (Chun-Li e High Jump da C. Viper) e +72 (Dhalsim) contra reversal de 5f. O site traz os setups para reproduzir (HP Flash Knuckle da Luke, KD +42; HK Tiger Knee Crush do Sagat, KD +41) e avisa que só os reversals do Ryu foram testados.

**Damage scaling (3.5).** A sequência 100/100/80/70/60/50/40/30/20/10 agora aparece como sequência básica, não como regra universal. As penalidades (starter de golpe fraco ou Crouch MK, Drive Rush, Perfect Parry, Drive Impact, throw encaixado, SA3 cancelada de especial) seguem a Game Data da SuperCombo, e o scaling próprio de cada golpe aparece na nova coluna "Scaling" das tabelas (do FAT). A interação de Counter Hit e Punish Counter com o scaling não foi verificada, e o texto diz isso.

**Blockstun (Fundamentos).** O exemplo dizia: golpe com 3 ativos e 12 de recovery, blockstun de 16, então o atacante fica +2. Pela forma como o frame data do SF6 conta (o blockstun começa no frame do acerto; vantagem = blockstun − ativos − recovery), isso dá +1. O exemplo agora usa blockstun de 17 e explica a conta.

## 5. O que foi implementado

| Área | Mudança | Arquivos |
|---|---|---|
| Validação | `tools/validate.py`: estrutura dos 32 arquivos, 16 campos por golpe, tipos, valores plausíveis, colchetes balanceados, golpes duplicados, quizzes completos nos dois idiomas, marcações que apontam para golpes existentes. O `build.py` para se houver erro. | `tools/validate.py`, `build.py` |
| Sincronização | `tools/fat_sync.py`: `check` lista diferenças com um FAT novo sem mudar nada; `apply` aplica e registra no histórico, sem tocar em golpes testados ou com fontes divergentes; `extras` copia alcance, scaling, invencibilidade, pulo e alcance de throw. | `tools/fat_sync.py` |
| Rastreabilidade | Fonte, commit, data, rótulos de confiança, testes feitos no jogo e as 25 marcações. Histórico de patches vazio, pronto para o próximo balance patch. Seção "Como os Dados do Hub São Conferidos" no capítulo Ler e Medir. | `data/sources.js`, `data/patches.js`, `src/content/*/adv-data.html` |
| Tabelas de frame data | Colunas Alcance e Scaling; notas de invencibilidade do FAT; ⚠ nos golpes marcados, com o motivo. | `assets/js/frames.js`, `data/chars/*.js`, `i18n/*.js`, `assets/css/hub.css` |
| Punish, matchup, flashcards | Janela, conta e alcance em cada sugestão; aviso de alcance. Matchup com pulo, knockdown para safe jump, alcance de throw e ▲ no lado com vantagem em cada número. | `assets/js/punish.js`, `assets/js/matchup.js`, `assets/js/flashcards.js` |
| Calculadoras | Meaty seguro com três estados (seguro, dúvida, perde); funções puras `safeMeaty`, `gapGroup`, `breakeven`, `safeJumpNeed`. | `assets/js/advanced.js`, `assets/js/matchup.js` |
| Texto | Okizeme (contagem, meaty seguro, +41/+42), Mecânicas (scaling), Fundamentos (blockstun), Glossário (Frame Data, Fuzzy Guard), grafia de blockstun/hitstun. | `src/content/en/*`, `src/content/pt/*` |
| Testes e CI | 18 testes no navegador; GitHub Actions com validação, build, arquivos gerados atualizados e testes. | `tests/run.mjs`, `.github/workflows/checks.yml`, `package.json` |
| Documentação | README com fontes, atualização depois de patch e testes; este relatório. | `README.md`, `docs/AUDITORIA.md` |

## 6. Testes executados

- `tests/run.mjs`: **18 de 18 passaram** (22 de 22 depois das confirmações da seção 9) localmente e no GitHub Actions (run 43067544886, sucesso). Na primeira execução, 4 falharam por erro meu nas expectativas dos testes, não no site: uma conta errada do momento de apertar (35, não 37), o startup de um golpe com faixa (o código usa de propósito o lado lento), um seletor de tabela e a chamada de troca de idioma sem o parâmetro que salva a escolha. Corrigi os testes, não o código.
- Scripts de regressão anteriores: navegação e links (64 visões de capítulo, 299 links internos, 0 quebrados), largura a 390 e 1280 px, modo offline, flashcards (40 cartões), ferramentas do Avançado, tracker: sem erros.
- Buscador de punish comparado com a versão anterior do site: mesmas escolhas para todos os pares testados.
- `tools/validate.py`: 0 erros, 1 aviso (Blanka-chan Bomb com 1000 frames ativos, que é real).
- `tools/fat_sync.py check` contra o FAT `a8101eb`: 0 diferenças.

## 7. Problemas não resolvidos

1. **Dados oficiais da Capcom** não foram comparados. É o próximo passo para mudar o rótulo de "Ferramenta" para "Oficial".
2. **Contagem do meaty**: rodar o teste do Akuma (throw, dash, Crouch MK; −4 ou −5 no block).
3. **Safe jump**: testado só contra reversals do Ryu; testar contra um reversal só antiaéreo, um contra-ataque e uma Super que agarra.
4. **As 25 marcações** precisam de uma segunda fonte ou de teste no jogo.
5. **dood.gg** só pôde ser comparado para o Ryu.
6. **Counter Hit e Punish Counter** no damage scaling: não verificado.
7. **Hitstun e blockstun** não aparecem nas tabelas; **notas de invencibilidade** estão em inglês.
8. **Google Fonts** continua sendo uma dependência externa (o site funciona sem ela).

## 8. Recomendações

- Depois de cada balance patch: atualizar o FAT, rodar `fat_sync.py check`, revisar, `apply`, `build.py`, conferir os golpes marcados.
- Trazer os dados oficiais da Capcom para o hub (copiar ou exportar as páginas por personagem) e comparar com o mesmo script.
- Registrar em `data/sources.js` cada teste feito no jogo, com data e situação.
- Se quiser o hub 100% offline, hospedar as fontes junto com o site.

## 9. Confirmações complementares (11/11/2026)

Quatro problemas apontados depois do relatório foram conferidos no estado do repositório. Nenhum deles tinha sido corrigido pela auditoria anterior: os quatro estavam pendentes e foram corrigidos agora. Cada correção tem um teste de regressão em `tests/run.mjs`. Rodei os quatro testes contra o código anterior e os quatro falharam; contra o código atual, os 22 testes passam.

| # | Problema | Estado antes | Correção | Arquivo | Teste | Pendência |
|---|---|---|---|---|---|---|
| 1 | `dmgVal()` com dano de vários hits | Errado: lia só o primeiro "AxB" ou o primeiro número. Ken HP Shoryuken dava 600, Jamie Stand HP 180, Sagat Tiger Monolith 200, Yasmine HK Lipad ng Agila 90 | Um número inicial é o total ("1400 (800*300x2)" = 1400); sem ele, os hits são somados ("200*600" = 800, "300x3" = 900). Agora: Ken 1400, Jamie 810, Sagat 800, Yasmine 1300 | `assets/js/frames.js` | "regression: multi-hit damage totals (dmgVal) on the real data rows" | Nenhuma |
| 2 | `suEff()` com `10(4~8)` (Ed Stand HP) | Errado: tratava como 8 frames, porque pegava o lado lento de qualquer faixa entre parênteses | O valor entre parênteses só aumenta o startup, nunca diminui: `10(4~8)` = 10 (4~8 só vale depois de segurar o botão, segundo o FAT), `5(9~10)` = 10, `20 (62~96)` = 96 | `assets/js/frames.js` | "regression: Ed Stand HP 10(4~8) counts as 10 frames for punishes (suEff)" | Nenhuma |
| 3 | Counterplay do Ryu citava HP Shoryuken −36 | Errado nos dois idiomas; a tabela diz −39. A mesma frase citava o Shin Shoryuken em −52 (SF6 Lab), enquanto a tabela diz −50(−54) | Texto agora diz −23/−32/−39 e OD −40, e Shin Shoryuken −50 (−54 na versão alternativa), em EN e PT | `data/chars/ryu.js` | "regression: Ryu counterplay quotes the Shoryuken block values of the table (EN and PT)" | Nenhuma |
| 4 | `data_note` de Akuma, Dhalsim, JP, Mai, Yasmine e Lily | Contraditório: as notas diziam que golpes "ficaram de fora" ou "não têm números", mas todos estão na tabela completa (que vem do FAT). A nota da Lily dizia que o 5LK no hit estava em branco, mas o guia e a tabela mostram +5, e citava só o snapshot de junho do FAT | Cada nota agora diz que o texto do guia não traz números para esses golpes e que a tabela completa usa os valores do FAT (commit a8101eb, 22/10/2026). A da Lily diz que a página oficial divergia do FAT no 5LK no hit e que o hub mostra o +5 do FAT | `data/chars/akuma.js`, `dhalsim.js`, `jp.js`, `mai.js`, `yasmine.js`, `lily.js` | "regression: data notes of Akuma, Dhalsim, JP, Mai, Yasmine and Lily match their tables" | O +5 do 5LK da Lily continua precisando de teste no jogo |

**Efeito da correção do dano:** 127 golpes tinham o dano total lido errado; o startup mudou só no Ed Stand HP. Como o buscador de punish escolhe o golpe de maior dano, algumas sugestões mudaram, agora para melhor. Exemplo: Chun-Li contra M. Bison passa a sugerir HK Spinning Bird Kick (1400) em vez de HK Hazanshu (1200). O dano mostrado também mudou, por exemplo Tainted Talons da A.K.I., de 1200 para 2500. Na comparação com a versão anterior do site, 6 tabelas de punish mudaram, todas por esse motivo.

**Observação sobre as notas:** outras notas mencionam algo "deixado de fora", mas se referem a combos ou ao texto do guia, não à tabela: Blanka, Cammy, Ed, Jamie e Kimberly (danos de combos anteriores ao patch), Ingrid (comando do Vanishing Sun), Juri (invencibilidade do Tensenrin), Manon (2MK fora dos normais principais) e Marisa (5HP carregado). Não mexi nelas. A da Marisa é a única ambígua: diz que o valor "ficou de fora" sem dizer de onde, e a tabela completa mostra o valor do FAT.
