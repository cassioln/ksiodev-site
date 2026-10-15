# ksio.dev Site Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Reformular a ksio.dev como estúdio digital ousado para pequenos negócios, com logo vetorial, cases reais e contato simples.

**Architecture:** Preservar o site estático em um único HTML com CSS e JavaScript existentes. Trocar o carrossel por seções contínuas, criar assets SVG para marca/favicon e incluir capturas otimizadas das páginas públicas Uônix e KOB.

**Tech Stack:** HTML5 semântico, CSS responsivo, JavaScript vanilla, SVG; ferramentas locais de captura e otimização de imagem, navegador Playwright e detector Impeccable.

## Global Constraints

- Manter HTML, CSS e JavaScript estáticos; não adicionar framework, bundler, backend ou dependência de runtime.
- Atender pequenas empresas e negócios locais; apresentar projetos variados como soluções sob medida, não como catálogo fechado.
- Usar base clara e quente, marinho para contraste e laranja vivo como acento; validar contraste WCAG AA para texto e controles.
- Criar símbolo vetorial modular baseado em um “K” abstrato, sem brackets nem ícones literais de código.
- Manter contato principal por e-mail em contato@ksio.dev, com CTA no hero e no final da página.
- Apresentar Uônix como case B2B principal e KOB como ecossistema digital complementar.
- Não inventar métricas, depoimentos ou resultados; não expor dados privados do painel KOB.
- Remover autoplay e preservar conteúdo acessível por rolagem, teclado, telas pequenas e preferência por movimento reduzido.

---

### Task 1: Criar o sistema de logo vetorial

**Files:**
- Create: assets/brand/ksio-lockup.svg
- Modify: favicon.svg
- Modify: index.html

**Interfaces:**
- O SVG horizontal fornece o símbolo modular e o wordmark ksio.dev.
- favicon.svg usa somente a forma compacta do símbolo.

- [ ] Criar assets/brand/ksio-lockup.svg com viewBox próprio, formas simples, preenchimento marinho/laranja e wordmark legível sem raster.
- [ ] Atualizar favicon.svg para a versão compacta do mesmo monograma, sem criar uma identidade separada.
- [ ] Atualizar o cabeçalho em index.html para apontar ao novo lockup vetorial e definir texto alternativo acessível.
- [ ] Conferir lockup em fundo claro e escuro, além do favicon em 16×16 e 32×32; ajustar geometria se perder legibilidade.

### Task 2: Reestruturar a página e a mensagem

**Files:**
- Modify: index.html

**Interfaces:**
- Âncoras públicas: #solucoes, #projetos, #processo, #contato.
- CTAs usam o link mailto:contato@ksio.dev.

- [ ] Substituir os três slides do carrossel por cabeçalho e seções contínuas com os quatro IDs de âncora definidos acima.
- [ ] Escrever o hero para pequenas empresas, com promessa orientada ao resultado e explicação breve de que cada solução é definida conforme a necessidade.
- [ ] Agrupar a oferta em automatizar rotinas, integrar ferramentas e criar sistemas sob medida.
- [ ] Descrever o processo em diagnóstico, proposta da solução e entrega; explicar que o primeiro passo é uma conversa por e-mail.
- [ ] Remover código de autoplay, navegação por slides, persistência da página ativa, controles de pontos e teclado que só serviam ao carrossel; manter navegação sem bloqueios de teclado.

### Task 3: Construir a identidade visual e os estados responsivos

**Files:**
- Modify: index.html

**Interfaces:**
- Tokens CSS: base warm-white, texto navy, acento orange e estados de foco/hover acessíveis.
- Layout usa fluxo normal e não depende de 100dvh nem overflow: hidden.

- [ ] Criar tokens CSS para fundo quente claro, superfícies, navy, laranja, tipografia, espaçamento e raios; usar navy para texto sobre a cor de fundo.
- [ ] Aplicar títulos expressivos e corpo legível; reduzir gradientes, efeitos de terminal e decoração que não carregue significado.
- [ ] Estilizar cabeçalho com links de âncora e CTA de e-mail visível; mostrar hover e foco por mais de uma pista visual.
- [ ] Criar layout fluido para desktop e celular; permitir que a página cresça com o conteúdo e que cards refluam sem cortes.
- [ ] Remover canvas/partículas e animações contínuas antigas; se houver entrada animada, torná-la curta e desativável por prefers-reduced-motion.
- [ ] Garantir texto normal com contraste mínimo 4.5:1, foco de teclado claramente visível e alvos de toque com pelo menos 44×44 px.

### Task 4: Adicionar os cases Uônix e KOB

**Files:**
- Create: assets/cases/uonix-home.webp
- Create: assets/cases/kob-ecosystem.webp
- Modify: index.html

**Interfaces:**
- Card Uônix liga para https://uonix.com.br/.
- Card KOB liga para https://kriativosonboard.com.br/; links secundários levam ao manual, ao Busão e ao painel público de acesso restrito.
- Capturas devem mostrar somente interfaces públicas e não podem conter cookies identificáveis ou informações privadas.

- [ ] Capturar uma composição representativa da home Uônix e uma composição do site/manual KOB em páginas públicas; evitar o placeholder genérico do tema Uônix.
- [ ] Redimensionar e comprimir as imagens para WebP responsivo mantendo boa leitura visual; usar alt que descreva cada captura sem repetir a legenda.
- [ ] Criar case Uônix com segmento industrial, catálogo de ancoragem, instalação/manutenção, documentação técnica e captação de leads.
- [ ] Criar case KOB como ecossistema com site de evento multilíngue, manual, reserva do transporte/Pix e painel operacional documentado.
- [ ] Linkar o painel apenas à tela pública de acesso; não tentar autenticação, embutir tela privada nem incluir dados operacionais.
- [ ] Remover qualquer afirmação de aumento de venda/conversão, volume ou depoimento que não tenha comprovação fornecida.

### Task 5: Revisar a experiência com Impeccable e navegador

**Files:**
- Modify if needed: index.html, assets/brand/ksio-lockup.svg, favicon.svg, assets/cases/*

**Interfaces:**
- Nenhuma alteração em Uônix, KOB ou backend.
- O resultado deve funcionar com o servidor estático local e nos navegadores desktop/celular.

- [ ] Aplicar a revisão Impeccable de clareza à mensagem e revisão de polish/hardening à hierarquia, contraste, movimento e áreas interativas.
- [ ] Executar impeccable detect index.html; revisar cada achado e corrigir problemas confirmados sem mudar escolhas intencionais documentadas.
- [ ] Abrir a página local em desktop e viewport estreita; inspecionar primeira dobra, rolagem, cases, contato, menu/âncoras e ausência de conteúdo cortado.
- [ ] Navegar com teclado, conferir todos os links/CTAs e observar a versão com movimento reduzido.
- [ ] Fazer revisão visual independente em aba nova; integrar comentários confirmados sem ceder decisões de produto ao agente revisor.
- [ ] Conferir git diff --check e git status; incluir somente os arquivos do redesign no commit final.

## Cobertura da especificação

- Identidade, logo e favicon: Task 1.
- Nova estrutura, copy e contato: Task 2.
- Cor, movimento, responsividade e acessibilidade: Task 3.
- Cases e restrição do painel privado: Task 4.
- Detector e revisão ao vivo: Task 5.
- Restrições de arquitetura, não fabricação de resultados e escopo: Global Constraints e Tasks 2–5.
