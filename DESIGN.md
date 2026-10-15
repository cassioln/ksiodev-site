---
name: ksio.dev
description: Desenvolvimento, integração e inovação em uma identidade escura com cyan.
colors:
  bg: "#080d12"
  surface: "#0d151e"
  fg: "#edf4f8"
  secondary: "#a7b8c6"
  muted: "#8297a8"
  line: "#283948"
  cyan: "#00c9eb"
  cyan-light: "#80e9fa"
  cyan-dark: "#06141c"
typography:
  display:
    fontFamily: '"Sora", "Avenir Next", sans-serif'
    fontSize: "clamp(44px, 4.8vw, 70px)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-.04em"
  headline:
    fontFamily: '"Sora", "Avenir Next", sans-serif'
    fontSize: "clamp(36px, 4.4vw, 58px)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-.035em"
  title:
    fontFamily: '"Sora", "Avenir Next", sans-serif'
    fontSize: "23px"
    fontWeight: 500
    letterSpacing: "-.02em"
  body:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", sans-serif'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", sans-serif'
    fontSize: "14px"
  process-index:
    fontFamily: '"IBM Plex Mono", ui-monospace, monospace'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  button: "4px"
spacing:
  gap-small: "12px"
  gap-medium: "24px"
  gap-large: "32px"
  gutter: "clamp(22px, 5vw, 76px)"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.cyan-dark}"
    rounded: "{rounded.button}"
    padding: "13px 20px"
  button-primary-hover:
    backgroundColor: "{colors.cyan-light}"
  text-link:
    textColor: "{colors.secondary}"
  navigation:
    textColor: "{colors.secondary}"
    typography: "{typography.label}"
  map-selector:
    textColor: "{colors.muted}"
    padding: "11px 1px"
  map-selector-selected:
    textColor: "{colors.cyan-light}"
  process-step:
    textColor: "{colors.secondary}"
    padding: "25px 0 29px"
---

# Design System: ksio.dev

## Overview

**Creative North Star: "Oficina de conexões"**

Uma identidade de desenvolvimento e experimentação, ancorada no K branco entre delimitadores cyan. A base escura e a tipografia clara dão espaço ao conteúdo; linhas finas e conexões tornam a organização técnica visível sem simular um terminal.

A composição combina títulos expressivos, texto direto e superfícies planas. O acento cyan orienta ações e estados. A linguagem visual acompanha uma voz de marca acessível, com foco nas soluções e sem primeira pessoa singular.

**Key Characteristics:**

- Base escura com branco frio e um único acento cyan.
- Títulos geométricos, corpo legível e mono restrito aos índices do processo.
- Superfícies planas, divisórias finas e conexões funcionais.

## Colors

Uma paleta de grafite azulado e branco frio, com cyan vivo como único acento. Os valores normativos estão no frontmatter e correspondem às variáveis CSS de `index.html`.

### Primary

- **Cyan de conexão** (`cyan`): marca, ação principal, ramificação selecionada e índices do processo.
- **Cyan claro** (`cyan-light`): hover, foco e links de navegação.
- **Tinta de ação** (`cyan-dark`): texto sobre a ação cyan e seleção de texto.

### Neutral

- **Noite azulada** (`bg`): fundo contínuo e cabeçalho.
- **Grafite de superfície** (`surface`): área de contato.
- **Branco frio** (`fg`): títulos, marca e texto de maior hierarquia.
- **Cinza de leitura** (`secondary`): parágrafos e links auxiliares.
- **Cinza de apoio** (`muted`): legendas e estados inativos.
- **Linha azulada** (`line`): divisórias, conexões e contornos.

**The Accent with purpose Rule.** O cyan sinaliza identidade, ação ou estado; não preenche todas as superfícies.

## Typography

**Display Font:** Sora, com Avenir Next e sans-serif como fallbacks.

**Body Font:** IBM Plex Sans, com Helvetica Neue e sans-serif como fallbacks.

**Label/Mono Font:** IBM Plex Mono, com ui-monospace e monospace; exclusivo dos índices do processo.

A geometria de Sora dá personalidade aos títulos; IBM Plex Sans mantém o corpo direto e legível. As fontes são carregadas pelo Google Fonts com `display=swap`; os fallbacks permanecem ativos quando o serviço não está disponível. A implementação solicita Sora (400/500/600), IBM Plex Sans (400/500/600) e IBM Plex Mono (400/500).

### Hierarchy

- **Display:** título principal em três linhas; escala normativa no frontmatter. Até (1000px), usa `clamp(32px, 4.6vw, 46px)`; até (760px), `clamp(34px, 7.8vw, 56px)`.
- **Headline:** títulos de seção com quebra balanceada. O contato usa `clamp(40px, 4.4vw, 60px)`.
- **Title:** etapa do processo; capacidades usam (27px).
- **Body:** parágrafos secundários variam entre (13px) e (18px). Introdução do hero tem entrelinha (1.75) e largura máxima (54ch).
- **Label:** navegação e links; sem caixa alta compulsória ou etiquetas decorativas.

**The Mono for sequence Rule.** IBM Plex Mono aparece apenas nos índices numéricos do processo.

## Layout

Contêiner central de até (1200px), com largura calculada por `min(1200px, 100% - 2 × gutter)`. O gutter fluido está no frontmatter. A página usa fluxo contínuo, seções de (110px) no desktop e (76px) até (760px), separadas por linhas e mudanças tonais.

Hero, cabeçalhos de seção, capacidades e processo usam duas colunas assimétricas. Até (1000px), os intervalos diminuem e o contato empilha. Até (760px), os demais blocos viram uma coluna, o processo deixa de ser sticky e a navegação mantém Soluções e Contato. O cabeçalho sticky tem altura mínima (88px), reduzida para (76px) e (70px) nesses dois últimos limites.

## Elevation & Depth

Não há sombras. A profundidade vem da alternância entre fundo e superfície, das divisórias de (1px) e da hierarquia de cor. O contorno de foco usa cyan claro (2px) com afastamento (5px). A variável `--surface-raised` existe no CSS, mas não é aplicada a elementos e não integra os tokens efetivos documentados.

**The Flat surfaces Rule.** A profundidade vem de contraste tonal e divisórias; não há sombras na implementação.

## Shapes

Forma predominantemente reta, com cantos discretos nas ações preenchidas e no controle do fundo. Divisórias organizam linhas de conteúdo em vez de criar caixas individuais. Setas são SVG de traço fino e o símbolo vetorial mantém o K claro entre delimitadores cyan. Arquivos da marca: `assets/brand/ksio-mark.svg` e `favicon.svg`, adaptados da referência fornecida pelo usuário.

## Components

### Buttons

A ação principal é compacta, preenchida em cyan, com texto escuro, borda da mesma cor e altura mínima (50px). Hover clareia preenchimento e borda. Links auxiliares permanecem leves, com altura mínima (44px), sublinhado e mudança para cyan no hover. Ambos recebem o foco global visível.

### Navigation

Cabeçalho opaco, sticky, com linha inferior e links de corpo em (14px). Contato recebe cyan; hover e foco clareiam os demais links. No celular, a redução dos links preserva acesso às soluções e ao contato sem introduzir menu oculto.

### Capabilities

Linhas editoriais com símbolos SVG de navegador, conexões e chip, seguidos do tipo de desenvolvimento, descrição e exemplos concretos de aplicação. Catálogos, manuais digitais, reservas, painéis, pagamentos e fluxos operacionais enriquecem o conteúdo sem identificar clientes. A página inicial não contém seção de projetos; essa apresentação fica reservada para uma página futura.

### Process

Lista numerada de quatro etapas, com coluna estreita (46px) para o índice, divisórias e título em Sora. O texto usa entrelinha (1.7). O índice mantém numerais tabulares e a única aplicação de mono. Uma trilha vertical conecta pequenas portas quadradas sob cada índice.

### Connection map

Diagrama SVG com traços e portas discretos. A seleção entre aplicações web, automação e integração colore uma ramificação, marca o botão com borda inferior e atualiza uma descrição acessível (`aria-live="polite"`). Os controles usam `aria-pressed` e aparecem com JavaScript; sem JavaScript, o conteúdo inicial continua disponível. Há transições de (0.18s) em ações, (0.3s) nas conexões e traçado de (0.7s) ao selecionar. Movimento reduzido desativa animações, transições e rolagem suave. Não há troca automática.

### Signal field

A hero contém uma malha de sinais em Canvas 2D: trilhas em perspectiva, conexões esparsas e pequenos pulsos que percorrem as próprias linhas. O cursor deforma e ilumina trechos próximos; o diagrama acompanha com uma inclinação suave de até poucos graus. Um scrim escuro preserva a leitura dos textos e ações.

O efeito usa um único requestAnimationFrame, coordenadas pré-alocadas e resolução limitada a DPR 1.5 e aproximadamente dois milhões de pixels. A animação para fora da hero e com a aba oculta. Em telas de até 760px, dispositivos sem ponteiro preciso e com prefers-reduced-motion, a malha é estática. Sem Canvas ou JavaScript, o conteúdo permanece disponível sobre o fundo escuro.

## Do's and Don'ts

### Do:

- **Do** preservar o K branco e os delimitadores cyan da marca vetorial.
- **Do** reservar cyan para identidade, ações e estados significativos.
- **Do** manter foco visível e respeitar movimento reduzido.
- **Do** usar as famílias e os fallbacks efetivos da implementação.

### Don't:

- **Don't** espalhar tipografia mono por títulos, navegação ou texto corrido.
- **Don't** adicionar efeitos que concorram com a malha interativa da hero, partículas soltas ou simulações de terminal.
- **Don't** substituir a hierarquia tipográfica por cartões decorativos repetidos.
