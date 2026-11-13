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

1. **Dados oficiais da Capcom**: comparados em 11/11/2026 (seções 10 a 12); os 65 valores divergentes agora seguem a Capcom. O que ficou sem comparação está descrito na seção 12.
2. **Contagem do meaty**: confirmada no jogo em 11/11/2026 (−4 no block; seção 15). Falta testar um meaty seguro direto contra um reversal gravado para resolver a diferença de um frame com a regra do dood.gg.
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
| 4 | `data_note` de Akuma, Dhalsim, JP, Mai, Yasmine e Lily | Contraditório: as notas diziam que golpes "ficaram de fora" ou "não têm números", mas todos estão na tabela completa (que vem do FAT). A nota da Lily dizia que o 5LK no hit estava em branco, mas o guia e a tabela mostram +5, e citava só o snapshot de junho do FAT | Cada nota agora diz que o texto do guia não traz números para esses golpes e que a tabela completa usa os valores do FAT (commit a8101eb, 22/10/2026). A da Lily diz que a página oficial divergia do FAT no 5LK no hit e que o hub mostra o +5 do FAT | `data/chars/akuma.js`, `dhalsim.js`, `jp.js`, `mai.js`, `yasmine.js`, `lily.js` | "regression: data notes of Akuma, Dhalsim, JP, Mai, Yasmine and Lily match their tables" | O +5 do 5LK da Lily foi confirmado pela página da Capcom de 11/11/2026 (seção 14) |

**Efeito da correção do dano:** 127 golpes tinham o dano total lido errado; o startup mudou só no Ed Stand HP. Como o buscador de punish escolhe o golpe de maior dano, algumas sugestões mudaram, agora para melhor. Exemplo: Chun-Li contra M. Bison passa a sugerir HK Spinning Bird Kick (1400) em vez de HK Hazanshu (1200). O dano mostrado também mudou, por exemplo Tainted Talons da A.K.I., de 1200 para 2500. Na comparação com a versão anterior do site, 6 tabelas de punish mudaram, todas por esse motivo.

**Observação sobre as notas:** outras notas mencionam algo "deixado de fora", mas se referem a combos ou ao texto do guia, não à tabela: Blanka, Cammy, Ed, Jamie e Kimberly (danos de combos anteriores ao patch), Ingrid (comando do Vanishing Sun), Juri (invencibilidade do Tensenrin), Manon (2MK fora dos normais principais) e Marisa (5HP carregado). Não mexi nelas. A da Marisa é a única ambígua: diz que o valor "ficou de fora" sem dizer de onde, e a tabela completa mostra o valor do FAT.

## 10. Comparação com as páginas oficiais da Capcom (11/11/2026)

**Fonte:** páginas de frame data dos 32 personagens no site da Capcom (streetfighter.com/6), controle Clássico, salvas em HTML pelo autor do hub em 11/11/2026. As páginas não mostram versão nem data de patch. A comparação é refeita com `python3 tools/capcom_compare.py PASTA` e não altera nenhum dado.

**Resultado:**
- 2.518 linhas nas páginas da Capcom; 1.648 golpes casados com o hub (77% dos 2.133 golpes do hub).
- 5.106 valores comparados (startup, frames ativos, recovery, no hit, no block), sempre que os dois lados têm um número simples.
- **5.060 iguais e 46 diferentes, em 41 golpes.**
- 137 linhas da Capcom são estados de personagem que o hub não lista separadamente (Denjin Charge, Lightning Beast, Sumo Spirit etc.) e cerca de 700 não foram casadas (dashes, parries, continuações, versões de Critical Art e golpes com nome diferente). Esses não foram comparados.

**O que mudou no site, sem alterar nenhum valor:**
- **15 das 25 marcações anteriores passaram a "✓ confirmado pela Capcom".** A Capcom confirma os valores mostrados, incluindo o OD High Blade Kick do Ryu em −18; o −11 do dood.gg era o valor fora. Nesses golpes, a inconsistência estava só no valor de stun do FAT, que o hub não mostra.
- **As 46 diferenças estão marcadas "⚠ fontes divergem"** nas tabelas, com os dois números (2 dessas marcações já existiam: Crouch HP do Ryu e LK Arrow Kick da Jamie). A tabela continua mostrando o valor do FAT até a decisão.
- 7 marcações continuam "a conferir", porque a Capcom não lista esses golpes com um nome correspondente.
- A metodologia (capítulo Ler e Medir), a linha de fonte das tabelas, o README e `data/sources.js` registram a comparação.

**Decisão pendente: Ryu, HP Shoryuken.** A Capcom diz −36 no block e o FAT, −39. Na seção 9, o texto de counterplay foi alterado de −36 para −39 para bater com a tabela. Pela fonte oficial, o −36 original estava certo, e quem está diferente é a tabela.

**Por que nenhum valor foi trocado:** parte das diferenças pode ser de definição e não de número. Exemplos: o startup de golpes com projétil ou contra-ataque (JP Torbalan 14 contra 22/26, JP Lovushka 1 contra 29), os frames ativos de golpes no ar e de golpes com vários hits, e o recovery de sequências. Para cada uma, a escolha é: seguir a Capcom, seguir o FAT ou testar no frame meter.

### As 46 diferenças

| Personagem | Golpe (hub) | Golpe (Capcom) | Campo | FAT / hub | Capcom |
|---|---|---|---|---|---|
| Akuma | OD Gou Shoryuken | OD Gou Shoryuken | no block | -41 | -39 |
| Akuma | Shun Goku Satsu | CA Shun Goku Satsu | frames ativos | 21 | 22 |
| Alex | Sweep Combination 1 | Sweep Combination(1) | recovery | 30 | 43 |
| Alex | Sweep Combination 2 | Sweep Combination(2) | recovery | 33 | 46 |
| Arjun | Justice Beyond | Justice Beyond | startup | 15 | 11 |
| Blanka | Jump HP | Jumping Heavy Punch | frames ativos | 4 | 1 |
| Blanka | LK Vertical Rolling Attack | L Vertical Rolling Attack | frames ativos | 19 | 20 |
| Blanka | MK Vertical Rolling Attack | M Vertical Rolling Attack | frames ativos | 19 | 20 |
| Blanka | HK Vertical Rolling Attack | H Vertical Rolling Attack | frames ativos | 19 | 20 |
| Chun-Li | Jump HK | Jumping Heavy Kick | frames ativos | 5 | 7 |
| Chun-Li | Neutral Jump HK | Neutral Jumping Heavy Kick | frames ativos | 7 | 5 |
| Chun-Li | Soaring Eagle Punches | Soaring Eagle Punches | startup | 16 | 6 |
| Chun-Li | Lightning Kick Barrage | Lightning Kick Barrage | startup | 10 | 11 |
| Dhalsim | MP Yoga Flame | M Yoga Flame | frames ativos | 15 | 16 |
| Dhalsim | HK Yoga Blast | H Yoga Blast | no block | -1 | -3 |
| Guile | Knee Bazooka | Knee Bazooka | frames ativos | 5 | 4 |
| Jamie | LK Arrow Kick | L Arrow Kick | no block | -44 | -45 |
| Jamie | OD Arrow Kick | OD Arrow Kick | recovery | 51 | 53 |
| Jamie | OD Freeflow Kicks 2 | OD Freeflow Kicks(2) | startup | 16 | 14 |
| Jamie | OD Freeflow Kicks 3 | OD Freeflow Kicks(3) | startup | 19 | 18 |
| JP | LK Torbalan | L Torbalan | startup | 14 | 22 |
| JP | MK Torbalan | M Torbalan | startup | 14 | 26 |
| JP | HK Torbalan | H Torbalan | startup | 14 | 26 |
| JP | OD Torbalan | OD Torbalan | startup | 14 | 22 |
| JP | Lovushka | SA2 Lovushka | startup | 1 | 29 |
| Juri | Kaisen Dankai Raku | SA3 Kaisen Dankai Raku | no block | -36 | -31 |
| Juri | Death Crest 1 | Death Crest(2) | startup | 16 | 12 |
| Juri | Death Crest 1 | Death Crest(2) | recovery | 20 | 19 |
| Kimberly | Bushin Hellchain 2 | Bushin Hellchain(3) | startup | 15 | 10 |
| Kimberly | Bushin Hellchain 2 | Bushin Hellchain(3) | frames ativos | 3 | 2 |
| Kimberly | Bushin Hellchain 2 | Bushin Hellchain(3) | recovery | 24 | 25 |
| Kimberly | Bushin Hellchain 2 | Bushin Hellchain(3) | no block | -12 | -10 |
| Luke | LP Sand Blast | L Sand Blast | frames ativos | 6 | 5 |
| Luke | OD Flash Knuckle | OD Flash Knuckle | frames ativos | 3 | 1 |
| Marisa | MP Dimachaerus | M Dimachaerus(1) | frames ativos | 4 | 5 |
| Mai Shiranui | Kagerou no Mai | SA1 Kagerou no Mai | recovery | 59 | 51 |
| Rashid | OD Spinning Mixer | OD Spinning Mixer | no block | -53 | -42 |
| Ryu | Crouch HP | Crouching Heavy Punch | recovery | 21 | 22 |
| Ryu | Short Uppercut | Short Uppercut | recovery | 25 | 26 |
| Ryu | HP Shoryuken | H Shoryuken | no block | -39 | -36 |
| Ryu | OD Hashogeki | OD Hashogeki | frames ativos | 6 | 5 |
| Terry Bogard | Jump MP | Jumping Medium Punch | frames ativos | 4 | 6 |
| Terry Bogard | Jump MK | Jumping Medium Kick | frames ativos | 6 | 4 |
| Terry Bogard | LP Rising Tackle | L Rising Tackle | no block | -23 | -25 |
| Zangief | Tundra Storm | Tundra Storm | startup | 6 | 5 |
| Zangief | Tundra Storm | Tundra Storm | frames ativos | 50 | 51 |

## 11. Valores alinhados com a Capcom (11/11/2026)

Por decisão do autor do hub, a fonte oficial prevalece. Os **46 valores em 41 golpes** listados na seção 10 passaram a usar o número da Capcom.

- **Dados:** `data/chars/*.js` (19 personagens). Cada troca está registrada em `data/patches.js` (valor antigo do FAT, valor novo, fonte, data) e marcada nas tabelas como "✓ confirmado pela Capcom", com o valor antigo do FAT na explicação.
- **Proteção:** o `tools/fat_sync.py apply` não sobrescreve golpes com status `official`, então uma atualização futura do FAT não desfaz essas trocas. O `check` vai continuar listando esses 46 valores como diferentes do FAT, o que é esperado.
- **Textos dos guias ajustados para os novos números:**
  - Ryu: HP Shoryuken volta a −36 no counterplay, desfazendo a mudança da seção 9, que tinha seguido o FAT.
  - Jamie: Arrow Kick "−43/−45".
  - Zangief: Tundra Storm "ativo nos frames 5–55".
  - Akuma: o guia já dizia −39 para o OD Gou Shoryuken, igual à Capcom.
- **Verificação:** `tools/capcom_compare.py` agora encontra 0 diferenças. 23 de 23 testes passam, incluindo o novo "regression: values that differed from Capcom follow Capcom and are logged" e os testes do Ryu e do quadro de frame data atualizados para os valores da Capcom.
- **Pendências:** as 7 marcações que a Capcom não lista com nome comparável continuam "a conferir"; as linhas não comparadas da Capcom (seção 10) continuam apoiadas só no FAT.

## 12. Segunda passada: os golpes que ficaram sem comparação (11/11/2026)

O `tools/capcom_compare.py` ganhou uma segunda passada para as linhas que a primeira não casou. Ela casa:
- versões de Critical Art ("CA X" ↔ "X (Critical Art)");
- Drive Reversal saindo da defesa e da recuperação (o hub escreve "20(18)");
- níveis e versões carregadas ("(Lv2)" ↔ "(lvl 2)", "(Charged)" ↔ "(hold)");
- continuações (o hub escreve "Jus Cool > Waning Moon", a Capcom só "Waning Moon"); quando o hub soma os startups, compara a parte da continuação;
- versões aéreas, OD com direção ("OD M Yoga Fire") e golpes com mesmo comando e força, mas nome diferente;
- dashes, comparados com os números de dash do hub.

A segunda passada também compara as células do hub que listam várias versões (ex.: −50(−54)): o valor da Capcom concorda quando aparece entre os listados.

**Resultado:**
- Golpes do hub comparados: de 1.648 para **1.856 de 2.133** (87%).
- Valores comparados: de 5.106 para **6.542**.
- **19 valores novos divergiam e agora seguem a Capcom.** Onde a célula do hub lista versões, só o valor principal mudou e as alternativas entre parênteses continuam sendo do FAT. Todos estão em `data/patches.js` (segunda entrada) e marcados "✓ confirmado pela Capcom". Entre eles:
  - Ryu: Shin Shoryuken (SA3 e CA) passa de −50 para −52 no block. O texto de counterplay foi ajustado para −52.
  - Juri: Kaisen Dankai Raku (CA) passa de −36 para −31.
  - Yasmine: Pamumukadkad ng Sampaguita (CA) passa de −48 para −45.
  - Luke: Impaler com 1 frame ativo.
  - Kimberly: Aerial Bushin Senpukyaku +1 no block, Bushin Scramble −25.
  - Blanka: Backstep Rolling Attack e HP Rolling Attack.
  - E. Honda: OD Sumo Headbutt.
- **5 marcações "a conferir" resolvidas:** a Capcom confirma Dee Jay OD Jus Cool > Waning Moon, Ken Chin Buster 2nd, Kimberly (OD) Arc Step > Bushin Hojin Kick e Bushin Beats (0 stock).
- **6 golpes ficaram marcados "a conferir", sem troca**, porque a Capcom mede outra coisa e não dá para comparar um a um:
  - Akuma Demon Low Slash: startup contado a partir da continuação.
  - Kimberly (OD) Arc Step: idem.
  - Manon Grand Fouetté: idem.
  - Mai Midare Kachousen: hits separados.
  - M. Bison Somersault Skull Diver: recovery total contra recovery na aterrissagem.
- Continuam "a conferir", por não aparecerem na página da Capcom: Kimberly Bushin Beats (1 stock) e Lily Desert Storm Final.

**O que continua sem comparação, e por quê:**

| Lado | Quantidade | O que é |
|---|---|---|
| Capcom | 137 | Estados de personagem que o hub não lista separadamente (Denjin Charge, Lightning Beast, Sumo Spirit…) |
| Capcom | 128 | Variantes de parry e Drive Rush (Perfect Parry contra golpe e contra projétil, Parry Drive Rush, Cancel Drive Rush) |
| Capcom | 37 | Etapas de Supers e combos (ex.: cada golpe do Sunrise Festival da Dee Jay) |
| Capcom | ~165 | Golpes que o hub não tem como linha própria: versões carregadas (Cammy), projéteis listados à parte (Arjun), tempos perfeitos (Guile), golpes que o FAT agrupa |
| Hub | 277 | Golpes do hub sem linha correspondente na Capcom (versões que o FAT separa e a Capcom não, linhas genéricas como Drive Rush) |

Para cobrir esses, o caminho é **acrescentar ao hub as linhas que só a Capcom tem** (por exemplo, os golpes com Denjin Charge do Ryu), com a Capcom como fonte. Isso acrescenta dados novos ao hub, em vez de conferir os existentes, e ficou para uma próxima etapa.

Testes: 23 de 23 passam. Os testes do Ryu, do quadro de frame data e dos valores da Capcom foram atualizados para os novos números.

## 13. Golpes que só a Capcom lista (11/11/2026)

As linhas da Capcom que não tinham par no hub foram acrescentadas às tabelas com a Capcom como fonte, pelo `tools/capcom_add.py`. Cada uma leva a marca "da Capcom" na tabela e o nome fica registrado em `data/sources.js` (`capcomRows`). A ferramenta pode rodar de novo sem duplicar nada.

**O que entrou: 366 linhas.**
- **197 só existem num estado do personagem ou como continuação.** Exemplos: as versões com Denjin Charge do Ryu, os golpes de Drink Level 4 da Jamie, os normais de rapid cancel do Zangief, as continuações do Hooligan Combination da Cammy e do Demon Raid do Akuma. Levam a condição nova `state` ("só num estado ou como continuação"). O Buscador de Punições não usa linhas com condição como punição; um teste garante isso.
- **128 linhas do Drive System**, 4 por personagem: Perfect Parry contra golpe e contra projétil, Parry Drive Rush e Cancel Drive Rush.
- **4 golpes aéreos**, marcados como aéreos quando o FAT já lista o golpe no ar (ex.: Yoga Comet do Dhalsim).
- **37 versões que o hub listava juntas**, como os níveis de Super Art (Shin Hashogeki nível 2 e 3, Yoga Sunburst nível 2 e 3) e o Bushin Thunderous Beats.

**O que não entrou, e por quê.** Antes de acrescentar, a ferramenta procura o mesmo golpe com outro nome. Conta como o mesmo golpe quando:
- o comando e o startup são iguais;
- o recovery, o no block e o dano batem até onde a Capcom informa. Um recovery "N total" ou um no block vazio não contam como divergência. O dano pode estar dentro do texto do hub ("800(900)", "1350-1950") ou ser o valor da Jamie no Drink Level 0 (90%, a convenção do hub).

Na primeira tentativa, 403 linhas entravam, e uma verificação achou 19 que repetiam golpes do hub com outro nome. Exemplos: Long Sliding Kick / Crouch HK do Dhalsim, Psycho Crusher Attack / Psycho Crusher do M. Bison, Round Wave / HP Round Wave do Terry. Essas repetições foram desfeitas antes do commit.

**Efeito na comparação.** As linhas acrescentadas vieram da própria Capcom, então compará-las com a Capcom não prova nada: o `capcom_compare.py` deixa essas linhas fora das passadas e só as associa pelo nome. Ele ganhou uma terceira passada, que casa as linhas restantes com golpes do hub de mesmo comando e mesmos números, e compara os outros valores. Também foi corrigido um defeito: etapas de combo que o hub numera de outro jeito (ex.: "Desert Storm (3)" da Capcom e "Desert Storm Final" do hub) eram descartadas sem aparecer nem como casadas nem como sem par.

| | Antes | Agora |
|---|---|---|
| Golpes do hub vindos do FAT com linha da Capcom | 1.856 de 2.133 | **1.994 de 2.133** |
| Valores comparados | 6.542 | **6.848** |
| Diferenças | 6 (de definição, marcadas "a conferir") | **as mesmas 6, nenhuma nova** |
| Linhas da Capcom sem par | 330 + 137 de estado | **43** |

**Duas marcações "a conferir" resolvidas.** A Capcom confirma os valores mostrados de:
- Lily Desert Storm Final: na Capcom, "Desert Storm (3)"; −23 no block.
- Kimberly Bushin Beats (1 stock): na Capcom, "Bushin Thunderous Beats", comando 236236 segurando K; −25 no block, 2200 de dano.

Nos dois casos, a conta com o blockstun do FAT dava outro número, mas o hub não mostra o blockstun. Continuam "a conferir" só os 6 golpes de definição da seção 12.

**As 43 linhas da Capcom que continuam sem par** são etapas que o hub lista como um golpe só:
- as etapas do Sunrise Festival do Dee Jay (18);
- as continuações do Alon da Yasmine (9; o hub lista cada Alon com a continuação, e as turbinadas como "Bayani Mode");
- as etapas do Kasai Thrust Kick do Ken (3);
- as continuações do Arjun (3);
- dez etapas avulsas (Chun-Li 2, E. Honda 2, Luke 2, Cammy, Jamie, Kimberly e Zangief).

**Testes:** validação sem erros (2.499 golpes); 24 testes em `tests/run.mjs`. Um teste novo confere que:
- toda linha listada em `capcomRows` existe;
- não há nomes repetidos;
- nenhum golpe com condição aparece como punição;
- o Hadoken (Denjin Charge) do Ryu e o 2LP de rapid cancel do Zangief têm a condição `state`.

## 14. Duas pendências resolvidas pelas páginas da Capcom (11/11/2026)

As páginas salvas em 11/11/2026 respondem a duas perguntas que estavam abertas. Nenhum valor mudou; só as marcações.

- **Arjun, melhor reversal:** o hub preencheu o campo com o Howling Destruction (SA1), a partir das notas de golpe do FAT, e marcou "preenchido pelo hub". A Capcom confirma: startup 8, invencível a golpes e agarrões nos frames 1–8. O Instant Oblivion (SA2, startup 9) é totalmente invencível nos frames 1–12, e nenhum especial dele, nem os OD, tem invencibilidade completa. A marcação passou a "✓ confirmado pela Capcom".
- **Lily, 5LK:** a página lida em 02/10/2026 divergia do FAT no valor no hit. A página salva em 11/11/2026 dá startup 4, +5 no hit e −1 no block, os mesmos valores do hub. O golpe ganhou a marcação "✓ confirmado pela Capcom", e a nota de dados da Lily deixou de pedir teste no jogo.

## 15. Teste da contagem do meaty (11/11/2026)

Feito pelo autor no training mode, com Akuma contra Ken e o frame meter ligado. A sequência foi throw para frente (Goshoha, KD +28), dash para frente (19 frames) e Crouch MK (8 de startup, 3 ativos, −6 no block).

**O que o print mostra:**
- O histórico de comandos mostra o Crouch MK apertado um frame antes do fim do dash.
- No frame meter, o startup do Crouch MK começa logo depois do último frame do dash, sem nenhum frame parado entre os dois.
- O resultado no block foi **−4**: o golpe acertou no terceiro frame ativo (−6 + 2), que é o frame 29 = N + 1.

**Conclusão:** a contagem da fórmula do meaty está certa. O oponente derrubado com KD +N pode ser acertado a partir do frame N + 1, que é o primeiro frame em que ele pode agir, e não antes. A calculadora de oki não muda.

**Meaty seguro:** a regra do hub (preso + 2 ≤ R) parte exatamente dessa suposição, e a regra prática do dood.gg (preso + 1 ≤ R) só coincidiria com ela se o oponente pudesse ser acertado um frame antes de agir, o que o teste descarta. Mesmo assim, a calculadora continua marcando o caso de um frame como "dúvida" até um meaty seguro ser testado direto contra um reversal gravado. O teste foi registrado em `data/sources.js` (`tested`), e os capítulos em inglês e português foram atualizados.

## 16. Revisão de uma auditoria externa (12/11/2026)

Uma auditoria externa, feita sobre um ZIP do site, apontou quatro problemas. Cada um foi conferido contra o repositório antes de qualquer mudança.

**O pacote analisado.** O ZIP tinha os mesmos arquivos da pré-visualização no Claude (101 arquivos): sem `sw.js`, `manifest.webmanifest`, `build.py`, `tools/`, `tests/`, `docs/` e `README.md`. Esses arquivos existem no repositório e no site publicado.

1. **Service worker ausente: não procede para o site.** O `sw.js` está na raiz, é gerado pelo `build.py`, e a verificação do GitHub falha se ele estiver desatualizado. Dentro do Claude o registro nem é tentado (`!window.claude`). Fora dele, sem o arquivo, o registro falha em silêncio de propósito: o aviso "Salvo para uso offline" só aparece quando a cópia offline está pronta, então o site não promete nada que não cumpre. Nada foi alterado.
2. **Contagens da comparação com a Capcom: procede em parte.** A soma do auditor confere com o `data/patches.js`: 46 valores em 41 golpes na primeira passada, 19 em outros 14 na segunda, 65 valores em 55 golpes no total. As duas passadas são da mesma comparação (mesmas páginas, mesmo dia), e o "nenhuma diferença nova" se referia à terceira etapa (os 50 golpes com outro nome, seção 13), não aos 19. O que estava errado: a nota do FAT em `data/sources.js` ainda dizia 46 em 41, e o capítulo Ler e Medir dava 65 sem dizer que vinham de duas passadas nem que eram 55 golpes. Os dois agora trazem a divisão e o total, e um teste liga essas contagens ao `data/patches.js`.
3. **Ferramentas fora do pacote: não procede para o repositório.** Todas estão no repositório e rodam na verificação do GitHub. O capítulo, porém, citava os arquivos sem dizer onde encontrá-los. Agora um parágrafo (EN e PT) aponta o repositório público e diz que o site funciona sem eles.
4. **Texto do Arjun: procede.** O aviso do roster dizia que o Arjun usava só os dados do FAT, e a nota de dados dele dizia que toda a frame data vinha do FAT. Os quatro normais principais do guia (5LP 4/+1/+4, 5MP 11/−2/+4, 2HP 10/−5/−1, 2HK 14/−11/derruba), o Cruel Shoulder (fraco/médio −4, forte +1 no block) e o Indomitable Defense (3f) batem com a página da Capcom salva em 11/11/2026, e o startup do Justice Beyond já seguia a Capcom (11). Os dois textos foram corrigidos e dizem que os combos não foram testados no jogo. Um teste confere que o guia e a tabela dão os mesmos valores.

Os 24 testes passam.

## 17. Capítulo de teoria dos jogos (12/11/2026)

Capítulo novo no Avançado, "Teoria dos Jogos Aplicada", com o resolvedor de matrizes de payoff (`assets/js/games.js`).

**De onde vêm os números.** O dano tirado das tabelas do hub é o do Ryu: 1.200 dos throws e 1.600 do OD Shoryuken (totalmente invencível nos frames 1–8). O punish de um OD Shoryuken defendido usa os mesmos 3.000 aproximados de Decisões em Números. As relações entre as opções seguem as tabelas de opções do hub (Okizeme em Frames e Pressão e Defesa). Todos os outros números são valores de exemplo, e o texto diz isso em cada caso.

**Como foi conferido.**
- O resolvedor foi testado contra equilíbrios conhecidos (pedra-papel-tesoura, a fórmula do 2 × 2, um ponto de sela, um caso de dominância estrita), contra a solução fechada do throw loop (V² + 1.200 V − 2.160.000 = 0) e em 400 matrizes aleatórias, onde as duas garantias (maximin e minimax) se encontram no valor.
- Todos os números citados no capítulo (valores, mixes, a tabela de exploração, a análise de sensibilidade, a estimativa de Laplace e os intervalos de Wilson) são recalculados pelo resolvedor num teste, que também confere que eles aparecem no texto em inglês e em português.
- As referências (von Neumann 1928, Nash 1950, Shapley 1953, Wilson 1927, Ganzfried e Sandholm 2015) são citadas pelo título e pelo periódico; a de Ganzfried e Sandholm foi conferida na lista de referências de um artigo que a cita (arXiv 2307.12338).

Os 26 testes passam.

## 18. Oki e pressão por personagem (12/11/2026)

Cada guia de personagem ganhou a seção "Oki e pressão, calculados" (`assets/js/setups.js`).

**Meaties depois de cada knockdown.**
- Para cada vantagem de knockdown do personagem, a seção lista os normais que acertam meaty sem espera depois de nenhum dash, um ou dois.
- Para cada um: o frame ativo que acerta, os valores no block e no hit com o bônus do meaty, e o startup de reversal contra o qual o meaty é seguro pela regra do hub (preso + 2).
- As contas usam as mesmas funções da calculadora de oki (`okiKnockdowns`, `okiMeaty`), cuja contagem foi confirmada no jogo (seção 15).

**Block strings e frame traps.**
- A partir de cada golpe que deixa o personagem em vantagem no block, com e sem Drive Rush (+4 no primeiro normal), a seção lista os links que formam uma block string verdadeira (gap ≤ 0) e os frame traps contra um normal de 4 frames (gap de 1 a 3).
- O normal mais rápido de todos os 32 personagens nos dados é de 4 frames.
- As contas usam a mesma regra do verificador de sequências (`gapGroup`).

**Limites declarados na própria seção:**
- não confere alcance, pushback, posição depois de back rise nem combos;
- os valores de knockdown são do golpe isolado;
- golpes com valor no block que não é um número único ficam de fora;
- só links, não chains, target combos nem cancels.

**Testes:**
- O resultado do teste no jogo com o Akuma (throw para frente, dash, Crouch MK no 3º frame ativo, −4) aparece na folha dele.
- Todo meaty listado, nos 32 personagens, cobre o frame N + 1 quando apertado no primeiro frame livre.
- O exemplo do capítulo Pressão e Defesa (Stand MP do Ryu depois de Drive Rush: +3; Stand LP com gap 1, Crouch MP com gap 3) sai igual da folha.
- Toda entrada de pressão é coerente com a regra do gap, e os 32 guias mostram a seção.

Os 28 testes passam.

## 19. Revisão da seção avançada nova (12/11/2026)

Revisão do capítulo de teoria dos jogos e das folhas de oki e pressão antes do merge. Quatro problemas encontrados e corrigidos:

1. **Isca contra tech (teoria dos jogos).** No oki de quatro opções, a linha "defender e esperar" valia 0 contra o tech. Mas dar tech é apertar throw: contra quem fica parado defendendo, o throw de quem defende sai e agarra. A célula passou a −1.200 (throw do Ryu, num espelho de Ryu). O equilíbrio mudou: todas as opções dos dois lados entram no mix, e o valor passou de uns 315 para uns 295. O texto, a análise de sensibilidade e a tabela dos dez wakeups foram recalculados, e o teste rejeita os números antigos.
2. **Knockdowns condicionais.**
   - A leitura do knockdown pegava "KD +N" em qualquer ponto do valor no hit. Golpes como o Axe Kick do Ryu ("0 (KD +14)") apareciam como knockdown normal, mas esse knockdown só acontece em algumas situações.
   - Agora, quando o knockdown não é o primeiro valor, ele é marcado como condicional. A calculadora continua listando, com o aviso de mais de um valor; as folhas dos personagens deixam de fora.
   - Saíram das folhas: o Axe Kick do Ryu, o Reverse Spin Kick do Guile, o Ankensatsu da Juri, o (OD) Aerial Bushin Senpukyaku da Kimberly, o OD Backstep Rolling Attack do Blanka e o OD Tiger Knee Crush do Sagat.
   - A leitura também passou a aceitar "KD + 28" (OD Vertical Rolling Attack do Blanka) e "HKD +12/17/20" (Shining Sun da Ingrid), que antes ficavam de fora ou só com o primeiro valor.
3. **Bônus do meaty no knockdown.** Um meaty que acerta no frame ativo k ganha k − 1 no block e no hit, e o mesmo vale para a vantagem de knockdown. A calculadora e as folhas mostravam o "KD +N" da tabela sem esse bônus; agora mostram "KD +(N + k − 1)" quando o valor é simples.
4. **Pressão.** O texto agora diz que um frame trap ainda perde para reversal invencível e para Drive Parry, e quanto custa o Drive Rush (1 barra saindo de um parry, 3 cancelando um golpe), como no capítulo do Sistema Drive.

Os 28 testes passam.

## 20. Teoria dos jogos em linguagem prática (13/11/2026)

O capítulo foi reescrito num nível mais acessível. O texto principal agora usa linguagem de jogador e começa pelos exemplos. As fórmulas, a notação, o programa linear, os jogos estocásticos, a regra de Laplace, o intervalo de Wilson e as referências foram para sete quadros recolhidos, "Para quem quer a matemática", iguais nos dois idiomas. Nenhum número mudou, e o resolvedor ficou igual. O teste do capítulo continua recalculando cada número citado e agora também confere os quadros recolhidos e os dois exemplos novos do texto. Duas perguntas do quiz foram reescritas sem o jargão (maximin/minimax e regra de Laplace).
