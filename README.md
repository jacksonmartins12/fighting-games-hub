# Fighting Games Resource Hub

A bilingual (English / Português do Brasil) study guide for fighting games, with Street Fighter 6 covered in depth.

**Criado e mantido por Jackson.**

## O que tem aqui

- **O Caminho:** fundamentos universais — espaço, frames, defesa, estratégia, psicologia e progressão.
- **O Treino:** planos de treino, exercícios de lab, autodiagnóstico, erros comuns e um tracker de progresso.
- **O Arquivo:** famílias de jogos de luta (2D, anime, tag, 3D), jogos 3D, mapa visual, estudo de caso, glossário com 150+ termos e recursos.
- **Street Fighter 6:** Sistema Drive, ranked, matchups, guias dos 32 personagens e uma calculadora de punish.

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
| `assets/css/hub.css`, `assets/js/*.js` | Visual e comportamento (navegação, quizzes, tracker, guias, calculadora de punish). |
| `img/` | Imagens. |

Depois de editar qualquer arquivo em `src/` ou `i18n/`, rode:

```
python3 build.py
```

Todos os caminhos são relativos, então o site funciona em qualquer pasta (o GitHub Pages serve em `/fighting-games-hub/`) e não depende de nenhum serviço externo.

## Fontes e créditos

O conteúdo foi escrito com base em materiais da comunidade e livros sobre aprendizado e competição, todos creditados dentro do guia (rodapé e capítulo de Recursos), entre eles: *Street Fighter Footsies Handbook*, *From Masher to Master 2*, os materiais de gootecks, *The Fighting Game Glossary* do Infil, *Playing to Win* (David Sirlin), *The Inner Game of Tennis* (W. Timothy Gallwey), *Mastery* (George Leonard) e *Peak* (Anders Ericsson e Robert Pool). Frame data do SF6 conferido nas páginas oficiais da Capcom e no FAT.

Street Fighter, os nomes e as imagens dos personagens são marcas e propriedade da Capcom. Este é um projeto de fã, sem fins lucrativos e sem afiliação com a Capcom ou com os demais jogos citados.
