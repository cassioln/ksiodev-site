# Redesign da ksio.dev — Design

## Contexto

A ksio.dev é uma landing page estática voltada a apresentar serviços de software sob medida. A versão atual usa um carrossel em tela cheia, estética escura com azul, nomes de serviços em inglês e contato concentrado no último slide. A página precisa explicar melhor seu valor a pequenos negócios e negócios locais, dar evidências do trabalho e facilitar o primeiro contato.

As decisões abaixo foram aprovadas pelo usuário em 15/10/2026.

## Objetivos

- Posicionar a ksio.dev como um estúdio digital ousado que fala de problemas reais de negócio em linguagem direta.
- Comunicar que os projetos são variados e definidos conforme a necessidade do cliente.
- Mostrar trabalho autorizado, com evidências reais e sem inventar resultados.
- Facilitar o contato por e-mail em qualquer ponto da página.
- Atualizar a identidade visual, incluindo um símbolo vetorial original e favicon correspondente.
- Melhorar acessibilidade, responsividade e controle de navegação.

## Público e proposta

Público principal: pequenas empresas e negócios locais que precisam melhorar processos, conectar ferramentas ou criar uma solução digital específica.

Proposta de valor: tecnologia personalizada para destravar o dia a dia do negócio. A página deve começar pelo resultado e pela forma de trabalhar, em vez de tratar a lista de tecnologias como oferta principal.

## Direção visual

- Personalidade: estúdio digital ousado, expressivo e profissional, sem pressupor que o visitante seja técnico.
- Paleta proposta: base clara e quente, marinho para contraste e laranja vivo como acento. Validar contraste de todos os pares de texto e controles antes de fechar os valores finais.
- Usar tipografia expressiva nos títulos e uma família muito legível no corpo; reduzir efeitos de terminal, brilho e decoração que não apoiem a mensagem.
- Criar símbolo vetorial modular baseado em um “K” abstrato, acompanhado pelo wordmark ksio.dev. Não reutilizar brackets nem ícones literais de programação. O símbolo deve funcionar sozinho como favicon e avatar.
- Usar o logo em SVG no site e gerar favicon a partir do mesmo sistema vetorial.

## Estrutura e conteúdo

Substituir o carrossel por uma página de rolagem contínua:

1. **Hero:** promessa clara sobre melhorar o dia a dia dos negócios, texto curto em português e CTA visível para contato@ksio.dev.
2. **Soluções:** três necessidades reconhecíveis, sem limitar a oferta: automatizar rotinas, integrar ferramentas e criar sistemas sob medida.
3. **Projetos:** Uônix como caso B2B principal e KOB como caso complementar de ecossistema digital.
4. **Como funciona:** diagnóstico do contexto, proposta da solução e entrega, deixando claro como um projeto começa.
5. **Contato:** repetir a CTA por e-mail ao final e reduzir a incerteza sobre a primeira conversa.

Manter navegação curta por âncoras para soluções, projetos, processo e contato. Remover avanço automático de slides, conteúdo oculto em etapas e a necessidade de usar setas ou pontos para descobrir a oferta.

## Projetos e evidências

### Uônix — caso principal

A página pública da Uônix apresenta um fabricante B2B de dispositivos de ancoragem predial. O conteúdo demonstra organização de produtos, serviços de instalação/manutenção, documentação técnica e captação de leads. Apresentar o trabalho como site e experiência de geração de contatos para um negócio industrial.

Referência pública: [uonix.com.br](https://uonix.com.br/).

Não afirmar aumento de conversão, vendas ou qualquer resultado quantitativo sem dados fornecidos pelo usuário. A imagem de screenshot do tema no repositório é um placeholder genérico; usar a experiência pública como referência visual do case.

### KOB — ecossistema digital complementar

Apresentar como solução conectada para a operação de um evento, sem posicionar cruzeiros como público-alvo da ksio.dev:

- [Site do evento](https://kriativosonboard.com.br/): narrativa e conversão, agenda/informações, preço, depoimentos, FAQ e suporte a português, inglês e espanhol.
- [Manual de bordo](https://manualdebordo.kriativosonboard.com.br/): informação operacional organizada em cronograma, checklist, jogos, regras, FAQ e contato.
- [Busão](https://busao.kriativosonboard.com.br/): jornada guiada de reserva, registro de passageiros, termos e pagamento via Pix.
- [Painel](https://painel.kriativosonboard.com.br/): ferramenta privada de operação. A página pública exige chave de acesso; não tentar entrar. O material do repositório documenta acompanhamento de reservas, alocação de passageiros e exportação de manifestos. Descrever somente essas capacidades em alto nível, sem mostrar dados ou telas restritas.

Usar capturas ou imagens públicas autorizadas para ilustrar o site e o manual. Explicar o que foi construído sem declarar resultados de venda, volume de usuários ou métricas não fornecidas. Não incorporar o painel protegido à página.

## Comportamento, acessibilidade e responsividade

- Layout de rolagem normal; nenhuma seção pode depender de altura fixa que corte conteúdo.
- Alvos interativos com área de toque adequada, foco de teclado claramente visível e navegação por teclado previsível.
- Contraste mínimo WCAG AA para texto e controles.
- Respeitar a preferência prefers-reduced-motion; animações devem ser discretas, opcionais e não carregar informação essencial.
- Reordenar blocos de forma legível em telas estreitas; CTA de contato permanece fácil de encontrar.
- Links de cases levam aos sites públicos correspondentes.

## Arquitetura técnica

Manter o site estático em HTML, CSS e JavaScript existentes. Não introduzir framework, bundler, dependência de runtime ou backend. Manter estrutura de hospedagem e domínio; atualizar somente os arquivos necessários para o conteúdo, identidade e favicon.

## Fora de escopo

- Alterar ou publicar os sites Uônix e KOB.
- Acessar o painel KOB com credenciais ou coletar dados operacionais.
- Criar métricas, depoimentos, logos de clientes ou afirmações de resultado sem evidência fornecida.
- Adicionar formulário, CRM, WhatsApp ou outro canal novo; a CTA principal aprovada é o e-mail existente.
- Mudar a proposta comercial para um catálogo fechado de serviços.

## Critérios de sucesso

- A primeira dobra explica para quem a ksio.dev trabalha, qual tipo de melhoria oferece e como iniciar uma conversa.
- O contato para contato@ksio.dev aparece sem exigir navegação por carrossel e também no final da página.
- Uônix e KOB são descritos conforme evidências públicas, com a Uônix como prova B2B e o KOB como ecossistema de software sob medida.
- Nenhuma métrica, depoimento ou dado privado é inventado ou exposto.
- O símbolo e o wordmark são vetoriais, funcionam em claro/escuro e mantêm legibilidade em tamanhos pequenos.
- A página funciona em desktop e celular, com conteúdo acessível via rolagem e navegação por teclado.

## Revisão de especificação

- Sem placeholders de conteúdo comercial: resultados quantitativos permanecem fora até que o usuário forneça evidência.
- A estratégia de cases é consistente com o público principal: Uônix demonstra experiência B2B; KOB demonstra capacidade de construir fluxos e ferramentas além de uma landing.
- A arquitetura mantém a implantação estática atual e não adiciona serviços ou dependências.
- O painel KOB permanece descrito em alto nível por ser uma interface restrita.
