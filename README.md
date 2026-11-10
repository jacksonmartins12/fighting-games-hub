# Fighting Games Resource Hub

A bilingual (English / Português do Brasil) study guide for fighting games, with Street Fighter 6 covered in depth.

**Criado e mantido por Jackson.**

## O que tem aqui

- **O Caminho:** fundamentos universais — espaço, frames, defesa, estratégia, psicologia e progressão.
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
| `data/chars/<personagem>.js` | Guia e frame data de cada personagem. Só é baixado quando alguém abre o personagem. |
| `data/plan30.js` | Os 30 dias do plano de treino. |
| `data/moves-index.js` | Nomes e comandos de todos os golpes, para a busca. **Gerado pelo `build.py`.** |
| `assets/css/hub.css`, `assets/js/*.js` | Visual e comportamento (navegação, quizzes, tracker, guias, calculadora de punish). |
| `img/` | Imagens. |
| `sw.js`, `manifest.webmanifest` | Fazem o hub abrir sem internet e ser instalável no celular. O `sw.js` é **gerado pelo `build.py`** a partir de `src/sw.template.js`. |

Depois de editar qualquer arquivo em `src/`, `i18n/` ou `data/chars/`, rode:

```
python3 build.py
```

O `build.py` também gera o `sw.js` com uma versão nova a cada mudança. É essa versão que faz os visitantes receberem a atualização, então **sempre rode o build antes de publicar**; quem já tem o hub salvo offline vê a versão nova na segunda vez que abrir.

Todos os caminhos são relativos, então o site funciona em qualquer pasta (o GitHub Pages serve em `/fighting-games-hub/`) e não depende de nenhum serviço externo.

## Fontes e créditos

O conteúdo foi escrito com base em materiais da comunidade e livros sobre aprendizado e competição, todos creditados dentro do guia (rodapé e capítulo de Recursos), entre eles: *Street Fighter Footsies Handbook*, *From Masher to Master 2*, os materiais de gootecks, *The Fighting Game Glossary* do Infil, *Playing to Win* (David Sirlin), *The Inner Game of Tennis* (W. Timothy Gallwey), *Mastery* (George Leonard) e *Peak* (Anders Ericsson e Robert Pool). Frame data do SF6 conferido nas páginas oficiais da Capcom e no FAT.

Street Fighter, os nomes e as imagens dos personagens são marcas e propriedade da Capcom. Este é um projeto de fã, sem fins lucrativos e sem afiliação com a Capcom ou com os demais jogos citados.
