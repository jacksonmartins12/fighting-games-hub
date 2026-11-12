# Fighting Games Resource Hub

A bilingual (English / Português do Brasil) study guide for fighting games, with Street Fighter 6 covered in depth.

**Criado e mantido por Jackson.**

## O que tem aqui

- **O Caminho:** fundamentos universais — espaço, frames, defesa, estratégia, psicologia e progressão.
- **Avançado:** como achar, medir, calcular e testar sozinho (frame data, okizeme, pressão, decisões e teoria dos jogos), com uma calculadora de okizeme, um verificador de sequências, uma calculadora de risco e um resolvedor de matrizes de payoff (equilíbrio de soma zero, loops e exploração de hábitos).
- **O Treino:** planos de treino, um plano de 30 dias, exercícios de lab, autodiagnóstico, erros comuns, um tracker de progresso e uma ficha de revisão de replay.
- **O Arquivo:** famílias de jogos de luta (2D, anime, tag, 3D), jogos 3D, mapa visual, estudo de caso, glossário com 150+ termos e recursos.
- **Street Fighter 6:** Sistema Drive, ranked, matchups, guias dos 32 personagens, uma calculadora de punish, flashcards de punish e uma ferramenta de matchup (link direto: `#matchup/ryu/ken`).
- **Busca:** uma busca única para capítulos, personagens, golpes e glossário (tecla `/`).

## Como usar

Acesse a versão publicada no GitHub Pages ou abra `index.html` no navegador. O progresso do tracker, dos checklists e dos quizzes fica salvo só no navegador de quem usa.

## Estrutura

| Onde | O que é |
| --- | --- |
| `index.html` | A página publicada. **É gerada pelo `build.py`**: não edite à mão. |
| `src/content/en/` e `src/content/pt/` | Texto dos capítulos, um arquivo por capítulo e por idioma. |
| `src/shell.html`, `src/sidebar-top.html` | Moldura da página (capa, menu, rodapé). `{{t:chave}}` insere um texto de interface nos dois idiomas. |
| `src/site.json` | Ordem dos capítulos e grupos. O menu, as etiquetas e os botões anterior/próximo saem daqui. |
| `i18n/en.js`, `i18n/pt.js` | Todos os textos de interface, por chave. As duas listas têm sempre as mesmas chaves. |
| `data/roster.js`, `data/quiz.js`, `data/upcoming.js` | Índice de personagens, perguntas dos quizzes e próximos lançamentos. |
| `data/sources.js` | De onde vem o frame data (FAT, commit e data), o status de verificação, os testes feitos no jogo e os golpes marcados como "a conferir". |
| `data/patches.js` | Histórico de mudanças de frame data por balance patch (valor antigo, novo, fonte, data). |
| `tools/validate.py`, `tools/fat_sync.py` | Validação dos dados (roda em todo build) e comparação/sincronização com o FAT. |
| `tools/capcom_compare.py`, `tools/capcom_add.py` | Comparação com as páginas oficiais da Capcom e inclusão dos golpes que só ela lista. |
| `tests/run.mjs`, `.github/workflows/checks.yml` | Testes no navegador e a integração contínua do GitHub Actions. |
| `data/chars/<personagem>.js` | Guia e frame data de cada personagem. Só é baixado quando alguém abre o personagem. |
| `data/plan30.js` | Os 30 dias do plano de treino. |
| `data/moves-index.js` | Nomes e comandos de todos os golpes, para a busca. **Gerado pelo `build.py`.** |
| `assets/css/hub.css`, `assets/js/*.js` | Visual e comportamento (navegação, quizzes, tracker, guias, calculadora de punish, resolvedor de matrizes em `games.js`). |
| `img/` | Imagens. |
| `sw.js`, `manifest.webmanifest` | Fazem o hub abrir sem internet e ser instalável no celular. O `sw.js` é **gerado pelo `build.py`** a partir de `src/sw.template.js`. |

Depois de editar qualquer arquivo em `src/`, `i18n/` ou `data/chars/`, rode:

```
python3 build.py
```

O `build.py` também gera o `sw.js` com uma versão nova a cada mudança. É essa versão que faz os visitantes receberem a atualização, então **sempre rode o build antes de publicar**; quem já tem o hub salvo offline vê a versão nova na segunda vez que abrir.

Todos os caminhos são relativos, então o site funciona em qualquer pasta (o GitHub Pages serve em `/fighting-games-hub/`). O único serviço externo são as fontes do Google Fonts; sem elas o site usa as fontes do sistema e continua funcionando.

O `build.py` roda o `tools/validate.py` antes de gerar a página e para se encontrar erro nos dados (campo faltando, valor impossível, golpe duplicado, marcação apontando para golpe que não existe).

## Frame data: de onde vem e como atualizar

O frame data dos 32 personagens vem do [FAT (Frame Assistant Tool)](https://github.com/D4RKONION/FAT), commit `a8101eb` (22/10/2026), e foi comparado golpe a golpe em 11/11/2026. A metodologia, os rótulos de confiança e o que ainda não foi verificado estão no capítulo **Ler e Medir**, seção "Como os Dados do Hub São Conferidos".

Depois de um balance patch, com o FAT atualizado clonado em algum lugar:

```
python3 tools/fat_sync.py check  CAMINHO/SF6FrameData.json   # lista as diferenças, não muda nada
python3 tools/fat_sync.py apply  CAMINHO/SF6FrameData.json --commit SHA --date AAAA-MM-DD
python3 tools/fat_sync.py extras CAMINHO/SF6FrameData.json   # alcance, scaling, invencibilidade, pulo
python3 tools/capcom_compare.py PASTA_COM_OS_HTML_DA_CAPCOM    # compara com as páginas oficiais salvas, não muda nada
python3 tools/capcom_add.py PASTA_COM_OS_HTML_DA_CAPCOM [--dry-run]   # acrescenta os golpes que só a Capcom lista
python3 build.py
```

O `apply` não mexe em golpes marcados como testados ou com fontes divergentes em `data/sources.js` e registra cada mudança em `data/patches.js`. Atualize também o commit e a data em `data/sources.js`.

## Testes

```
npm install
npx playwright install chromium
npm test
```

O `tests/run.mjs` sobe um servidor local, abre o site num navegador e confere as fórmulas (meaty, meaty seguro, safe jump, punish, gaps, breakeven, scaling, equilíbrios do resolvedor de matrizes), a integridade dos 32 personagens, a troca de idioma, a busca, a ferramenta de matchup, o buscador de punish, a navegação e a largura da página em celular, tablet e desktop. O GitHub Actions roda a validação, o build e os testes em todo push.

## Fontes e créditos

O conteúdo foi escrito com base em materiais da comunidade e livros sobre aprendizado e competição, todos creditados dentro do guia (rodapé e capítulo de Recursos), entre eles: *Street Fighter Footsies Handbook*, *From Masher to Master 2*, os materiais de gootecks, *The Fighting Game Glossary* do Infil, *Playing to Win* (David Sirlin), *The Inner Game of Tennis* (W. Timothy Gallwey), *Mastery* (George Leonard) e *Peak* (Anders Ericsson e Robert Pool). Frame data do SF6 do FAT (Frame Assistant Tool), comparado com as páginas oficiais da Capcom salvas em 11/11/2026 (veja a metodologia no capítulo Ler e Medir).

Street Fighter, os nomes e as imagens dos personagens são marcas e propriedade da Capcom. Este é um projeto de fã, sem fins lucrativos e sem afiliação com a Capcom ou com os demais jogos citados.
