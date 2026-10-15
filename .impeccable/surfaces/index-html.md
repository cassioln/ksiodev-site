---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["assets/js/hero-field.js"]
---

# index.html — Surface brief

## Scope and visitor mode

Página inicial de rolagem contínua. Estratégia **Persuade**: apresentar o trabalho de desenvolvimento a pequenas empresas e negócios locais, apresentando soluções concretas de forma anônima e oferecendo uma conversa por e-mail.

## Visitor path

O visitante entende as áreas de desenvolvimento e seus exemplos de aplicação, conhece o processo e encontra contato@ksio.dev. A ação do hero explora soluções; o contato também aparece no hero, na navegação e no fechamento. A página inicial não identifica clientes nem mostra nomes, links ou cases. Portfólio e/ou clientes ficam reservados para uma página futura. Não há métricas ou depoimentos inventados.

## Direction contract

**THESIS:** Desenvolvimento, integração e inovação com voz de marca, sem primeira pessoa singular; exemplos anônimos de aplicação tornam as capacidades concretas. Linguagem próxima, sem venda agressiva.

**OWN-WORLD:** Identidade vigente em DESIGN.md: fundo escuro, cyan funcional, K branco com delimitadores, tipografia geométrica e superfícies planas com divisórias.

**STORY:** Entender o que é construído, reconhecer aplicações nas soluções e iniciar uma conversa sobre uma ideia.

**FIRST VIEWPORT:** Título em três linhas à esquerda, explicação curta e ação para soluções; diagrama SVG de conexões à direita, com seleção de web, automação e integração. Em telas estreitas, o diagrama segue o texto.

**FORM:** Página contínua com áreas de desenvolvimento, exemplos anônimos, processo e contato. Direção delegada pelo usuário; não há seed key registrado nesta documentação e nenhum novo sorteio foi executado.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Finish record

Revisão independente concluída com disposition **ship**, cobrindo fullpage desktop de 1440, 1280 e 892px, mobile de 390px e detalhes do hero, sem falhas materiais. DESIGN.md e .impeccable/design.json registram a implementação. O site não usa raster de produção: símbolo, favicon e diagrama são vetoriais. Capturas em .impeccable/review são artefatos de revisão.

## Atualização de escopo

O usuário pediu a remoção integral de #projetos. A navegação e a ação principal passam a levar a #solucoes. As capacidades citam aplicações como catálogos, manuais, reservas, painéis e fluxos de pagamento sem nomes ou links de clientes. O registro de revisão acima corresponde à direção visual anterior a essa redução de escopo.

## Campo de sinais na hero

Pedido explícito: criar um background que interaja com os movimentos do mouse e acrescentar elementos tecnológicos. A malha em perspectiva reage à proximidade, carrega pulsos sobre trilhas e acompanha o diagrama com inclinação suave. Símbolos nas capacidades e uma trilha no processo estendem a linguagem técnica. Nenhum cliente ou case foi reintroduzido.

A animação é suspensa fora da tela e com aba oculta; celular, ponteiro impreciso e movimento reduzido usam uma versão estática. Inspeção de navegador em 1440, 892 e 390px: sem overflow; cursor altera a inclinação, saída de tela congela o canvas, movimento reduzido mantém pixels estáticos. Não foi medido desempenho em um aparelho físico intermediário. Detector: aviso de padding no contato não procede visualmente, pois o conteúdo fica no contêiner .wrap; avisos de escala tipográfica são anteriores a esta alteração.

Revisão independente desta interação: **ship**, sem problemas materiais nas três capturas e no código; confirmou hierarquia, responsividade, limites de renderização e respeito às preferências de movimento.

## Conferência com produção em 15/10/2026

Os três slides de https://ksio.dev/ foram inspecionados no navegador. A produção apresenta UI/UX Design, Web Development, Custom Software, AI Integration, Workflow Automation e Hosting Solutions, além de contato@ksio.dev. Design de interfaces (UI/UX), software sob medida, publicação e hospedagem ficam explícitos no bloco de aplicações web. IA, automação, integrações e contato já estavam contemplados. O antigo foco exclusivo em B2B foi ampliado conforme o público definido pelo usuário. Claims genéricos de produtividade e escala não são tratados como resultados comprovados.
