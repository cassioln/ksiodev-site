# Redesign da ksio.dev — Design

## Contexto

A ksio.dev é uma página estática para apresentar desenvolvimento de software sob medida e aplicações concretas. O carrossel original foi substituído por rolagem contínua. Após a primeira versão em papel quente e laranja, o usuário pediu uma linguagem menos comercial e mais ligada a desenvolvimento, inovação e tecnologia, com uma nova referência de logo em branco e cyan sobre fundo escuro.

As decisões refletem as aprovações e os ajustes pedidos pelo usuário em 15/10/2026, que delegou a execução criativa ao agente.

## Objetivos

- Apresentar a ksio.dev como um espaço de desenvolvimento e experimentação, com linguagem direta, técnica e acessível.
- Comunicar que os projetos são variados e definidos conforme a necessidade do cliente.
- Explicar aplicações concretas sem citar clientes ou publicar cases na página inicial; reservar portfólio e/ou clientes para uma página futura.
- Facilitar o contato por e-mail em qualquer ponto da página.
- Atualizar a identidade visual, incluindo um símbolo vetorial original e favicon correspondente.
- Melhorar acessibilidade, responsividade e controle de navegação.

## Público e proposta

Público principal: pequenas empresas e negócios locais que precisam melhorar processos, conectar ferramentas ou criar uma solução digital específica.

Proposta: apresentar o que é construído, como os sistemas se conectam e quais aplicações são possíveis na prática. O texto deve apresentar a prática de desenvolvimento, preservando compreensão para quem não é técnico.

## Direção visual

- Personalidade: desenvolvimento, integração e experimentação; tom de portfólio pessoal, com menos chamadas de venda.
- Paleta: base quase preta, superfícies em grafite azulado, branco frio e cyan vivo como acento. Esta direção substitui a anterior de papel quente e laranja.
- Títulos em Sora e corpo em IBM Plex Sans; IBM Plex Mono apenas nos índices de sequência. Remover etiquetas decorativas sobre títulos, partículas e efeitos de terminal.
- Usar a referência enviada em `/Users/cassio/Downloads/Logo minimalista ksio.dev em neon cyan.png`: K branco entre sinais de código cyan. Criar uma adaptação vetorial simples e um favicon correspondente.
- Usar o logo em SVG no site e gerar favicon a partir do mesmo sistema vetorial.
- Composição principal: título com três áreas de atuação e diagrama interativo de conexões. Selecionar web, automação ou integração destaca uma ramificação e atualiza a explicação, sem dados fictícios ou requisições externas.

## Estrutura e conteúdo

Substituir o carrossel por uma página de rolagem contínua:

1. **Hero:** desenvolvimento, integração e experimentação, texto curto em português, acesso às soluções e contato por e-mail.
2. **Desenvolvimento:** aplicações web, automação e integração, IA aplicada e protótipos, sem limitar a oferta a pacotes fechados.
3. **Como funciona:** diagnóstico do contexto, proposta da solução e entrega, deixando claro como um projeto começa.
4. **Contato:** conversa direta por e-mail, com apresentação simples e sem discurso de venda.

Manter navegação curta por âncoras para soluções, processo e contato. Remover avanço automático de slides, conteúdo oculto em etapas e a necessidade de usar setas ou pontos para descobrir a oferta.

## Referências internas para futuro portfólio

Os projetos Uônix e KOB foram analisados e o usuário confirmou autorização, mas pediu para reservar nomes, links e cases para uma página futura de portfólio e/ou clientes. A página inicial não deve exibir essas referências.

É permitido descrever anonimamente as soluções aplicadas: catálogos e informação técnica, manuais digitais, reservas, painéis de gestão, cadastros e fluxos de pagamento via Pix. Não inventar métricas, depoimentos ou resultados. Não acessar ou incorporar telas de painéis restritos.

## Comportamento, acessibilidade e responsividade

- Layout de rolagem normal; nenhuma seção pode depender de altura fixa que corte conteúdo.
- Alvos interativos com área de toque adequada, foco de teclado claramente visível e navegação por teclado previsível.
- Contraste mínimo WCAG AA para texto e controles.
- Respeitar a preferência prefers-reduced-motion; animações devem ser discretas, opcionais e não carregar informação essencial.
- Reordenar blocos de forma legível em telas estreitas; CTA de contato permanece fácil de encontrar.
- A navegação e a ação principal levam a seções existentes; não há nomes ou links de clientes na página inicial.

## Arquitetura técnica

Manter o site estático em HTML, CSS e JavaScript existentes. Não introduzir framework, bundler, dependência de runtime ou backend. Manter estrutura de hospedagem e domínio; atualizar somente os arquivos necessários para o conteúdo, identidade e favicon.

## Fora de escopo

- Alterar ou publicar os sites Uônix e KOB.
- Acessar o painel KOB com credenciais ou coletar dados operacionais.
- Criar métricas, depoimentos, logos de clientes ou afirmações de resultado sem evidência fornecida.
- Adicionar formulário, CRM, WhatsApp ou outro canal novo; a CTA principal aprovada é o e-mail existente.
- Mudar a proposta comercial para um catálogo fechado de serviços.

## Critérios de sucesso

- A primeira dobra explica os tipos de desenvolvimento, permite explorar as soluções e oferece contato direto.
- O contato para contato@ksio.dev aparece sem exigir navegação por carrossel e também no final da página.
- As áreas de desenvolvimento mostram exemplos concretos sem identificar os clientes que os inspiraram.
- Nenhuma métrica, depoimento ou dado privado é inventado ou exposto.
- O símbolo e o favicon são vetoriais; o wordmark acompanha a referência em branco e cyan e mantém legibilidade em tamanhos pequenos.
- A página funciona em desktop e celular, com conteúdo acessível via rolagem e navegação por teclado.

## Revisão de especificação

- Sem placeholders de conteúdo comercial: resultados quantitativos permanecem fora até que o usuário forneça evidência.
- O portfólio fica reservado para uma página futura; as referências internas orientam somente exemplos anônimos na página inicial.
- A arquitetura mantém a implantação estática atual e não adiciona serviços ou dependências.
- Painéis restritos não são acessados ou incorporados à página.
