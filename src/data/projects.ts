import type { Project } from '@/types/project';

export const projects: Project[] = [
	{
		id: 300554,
		name: 'Cioccolato Store',
		class: 'principal',
		descriptionCover:
			'Este projeto foi desenvolvido para oferecer uma experiência de compra completa e intuitiva para uma loja de chocolates, doces e confeitos. Tudo para uma grande e agradável experiência.',
		descriptionProject:
			'A aplicação permite que os usuários explorem o cardápio, escolham produtos com diferentes opções de personalização, e finalizem suas compras com pagamento via QR Code Pix. O projeto conta com um site para apresentação da loja e uma página de menu/cardápio onde os usuários podem: navegar entre as categorias de produtos; escolher um produto e personalizá-lo com sabor, recheio, massa, cobertura e adicionais; adicionar produtos ao carrinho, revisar o pedido e realizar o checkout; gerar um QR Code para pagamento via Pix; enviar o pedido finalizado para o WhatsApp da loja.',
		imgUrlCover:
			'https://utfs.io/f/T771UCDelI3GUl6bdSxVNBHw5xf7rWMGhq1Sgnli8Qz0YdkJ',
		imgUrlTech:
			'https://utfs.io/f/T771UCDelI3GzD8WoNGHVCyZXr20zDs6jpEFMGfJ3QtkT5hO',
		imgUrlFunc:
			'https://utfs.io/f/T771UCDelI3Gtu6vvzZ8Sk3WVKUucl27IhLAOR0Y5FvqsegH',
		githubURL: 'https://github.com/patricklimax/react-store-cioccolato',
		onlineURL: 'https://cioccolato.vercel.app/',
		technologies: [
			'React + Next.js: estrutura principal da aplicação.',
			'Tailwind CSS: estilização rápida e responsiva.',
			'TypeScript: segurança e consistência de código.',
			'ShadCN UI: biblioteca de componentes UI altamente customizável.',
			'Lucide Icon: biblioteca de ícones flexível.',
			'Next Themes: alternância entre temas claro e escuro.',
			'Pix-utils: utilitário para gerar QR Codes Pix para pagamento.',
			'qrcode.react: biblioteca para geração de QR Codes.',
			'React Copy Clipboard: cópia de dados para a área de transferência (ex. chave Pix).',
			'Zod: validação e formatação de dados dos formulários.',
			'React Hook Form: gerencia e valida os dados de formulários.',
			'Zustand: gerenciador de estado global leve e intuitivo.',
			'LocalStorage: persistência de dados no navegador.'
		],
		functionalities: [
			'Exploração e Navegação no Cardápio.',
			'Navegação entre categorias de produtos.',
			'Exibição de informações detalhadas de cada produto.',
			'Personalização de Produtos: Seleção de sabor, recheio, massa, cobertura e adicionais.',
			'Carrinho de Compras: Adição de produtos ao carrinho, com possibilidade de revisão do pedido.',
			'Checkout e Pagamento: Formulário para dados do usuário e endereço.',
			'Geração automática de QR Code Pix para pagamento.',
			'Envio para WhatsApp: O pedido, contendo descrição minuciosa de cada item, cópia do qrcode-PIX, valor total e forma de pagamento, fazem parte da mensagem do pedido, que é enviada para o WhatsApp da loja.'
		]
	},
	{
		id: 300454,
		name: 'Gerador de Rifa',
		class: 'principal',
		descriptionCover:
			'Este é um projeto de Gerador de Rifas, desenvolvido com carinho a pedido do meu afilhado. A aplicação permite gerar cartelas de rifas personalizadas em PDF.',
		descriptionProject:
			'Este é um projeto de Gerador de Rifas, desenvolvido com carinho a pedido do meu afilhado. A aplicação permite gerar cartelas de rifas personalizadas em PDF, prontas para impressão, com campos para controle de venda, prêmios, e detalhes do sorteio.',
		imgUrlCover:
			'https://utfs.io/f/T771UCDelI3GKNLGYhi4h0GislgS1QwHX5axkVqnrPM9KbjB',
		imgUrlTech:
			'https://utfs.io/f/T771UCDelI3Ge3dN3dav3GYCdaRDVTjlzpQeA7bXgPc0HsxN',
		imgUrlFunc:
			'https://utfs.io/f/T771UCDelI3GKNLGYhi4h0GislgS1QwHX5axkVqnrPM9KbjB',
		githubURL: 'https://github.com/patricklimax/raffle-generator',
		onlineURL: 'https://raffle-generator.vercel.app/',
		technologies: [
			'React: Biblioteca JavaScript para construção de interfaces interativas.',
			'Vite: Ferramenta de build rápida para desenvolvimento frontend.',
			'Tailwind CSS: Framework de CSS utilitário para estilização rápida e responsiva.',
			'TypeScript: Superset de JavaScript que adiciona tipagem estática ao código.',
			'Zod: Biblioteca para validação de esquemas de dados, garantindo a integridade dos formulários.',
			'React Hook Form: Biblioteca para gerenciamento de formulários em React, com foco em performance e experiência do usuário.',
			'jsPDF: Biblioteca JavaScript para gerar PDFs diretamente no navegador.'
		],
		functionalities: [
			'Gerar Cartelas de Rifa: Crie rifas personalizadas com informações de sorteio, descrição, prêmios, e valor.',
			'Layout Personalizado: Cada cartela inclui campos de controle para o vendedor e informações detalhadas para o comprador.',
			'Exportação para PDF: Imprima as cartelas em PDF, com layout ajustado para conter várias rifas por página.',
			'Validação com Zod: Garantia de que todos os campos obrigatórios sejam preenchidos corretamente.'
		]
	},
	{
		id: 300354,
		name: 'Agendar Services',
		class: 'principal',
		descriptionCover:
			'Agendar é uma aplicação moderna e intuitiva desenvolvida para facilitar a gestão de agendamentos, permitindo que os usuários organizem compromissos de maneira prática e eficiente.',
		descriptionProject:
			'Agendar é uma aplicação moderna e intuitiva desenvolvida para facilitar a gestão de agendamentos, permitindo que os usuários organizem compromissos de maneira prática e eficiente. O sistema oferece integração com o Google para login, proporcionando uma experiência segura e simplificada.',
		imgUrlCover:
			'https://utfs.io/f/T771UCDelI3G7eVDMXKgQ2VzS3hjaNufUwstC56v1dKDyxTI',
		imgUrlTech:
			'https://utfs.io/f/T771UCDelI3GyjGUuO4fPxJ8QgktRqj6UE7hcyb9FWN2XSY0',
		imgUrlFunc:
			'https://utfs.io/f/T771UCDelI3GEOCzsxJLfckiPmzZJgFBweQnrhGxEvy5KAqM',
		githubURL: 'https://github.com/patricklimax/react-agendar',
		onlineURL: 'https://agendar-dev.vercel.app/',
		technologies: [
			'React: Biblioteca JavaScript para construção de interfaces interativas.',
			'Next.js: Framework React para aplicações web rápidas e otimizadas.',
			'TypeScript: Superset de JavaScript que adiciona tipagem estática ao código.',
			'Tailwind CSS: Framework de estilização utilitária para criação de designs responsivos e modernos.',
			'ShadCN UI: Biblioteca de componentes para React, proporcionando uma interface visual consistente.',
			'Prisma: ORM moderno para integração com banco de dados, garantindo consultas e manipulação eficientes.',
			'NextAuth.js: Solução para autenticação no Next.js, usada para login seguro via conta Google.',
			'Vercel: Plataforma de hospedagem para aplicações frontend de alta performance.'
		],
		functionalities: [
			'Login com Google: Autenticação segura e prática utilizando NextAuth.js.',
			'Gestão de agendamentos: Criação, edição, visualização e exclusão de compromissos.',
			'Design responsivo e acessível: Interface amigável e adaptável para diferentes dispositivos.',
			'Integração com banco de dados: Persistência de dados de agendamentos utilizando Prisma.',
			'Desempenho otimizado: A aplicação é hospedada na Vercel, garantindo alta performance.',
			'Interface rica e estilizada: Uso de Tailwind CSS e ShadCN UI para uma experiência visual moderna.'
		]
	},
	{
		id: 300254,
		name: 'Gerador de Recibo',
		class: 'principal',
		descriptionCover:
			'O Gerador de Recibo em PDF é uma aplicação web que permite aos usuários criar recibos personalizados e baixá-los em formato PDF. ',
		descriptionProject:
			'O Gerador de Recibo em PDF é uma aplicação web que permite aos usuários criar recibos personalizados e baixá-los em formato PDF. Desenvolvido com React, Next.js, Tailwind CSS, TypeScript, e utilizando a biblioteca React-to-PDF para a geração dos arquivos, este projeto oferece uma solução rápida e eficiente para a criação de recibos digitais. A aplicação é hospedada na Vercel, garantindo alta disponibilidade e desempenho.',
		imgUrlCover:
			'https://utfs.io/f/T771UCDelI3Gg8gdLirvlIWGquR926c75zYMtHUZNrja3JyT',
		imgUrlTech:
			'https://utfs.io/f/T771UCDelI3GjEazatOK1UuNrpisqlWBgD7jb3TJ9Xzdxo6C',
		imgUrlFunc:
			'https://utfs.io/f/T771UCDelI3GBaNEFFtHVmIWsSNfLcZ4nPDg9bwRCTkv2jAF',
		githubURL: 'https://github.com/patricklimax/react-receipt-pdf',
		onlineURL: 'https://receipt-pdf.vercel.app/',
		technologies: [
			'React: Biblioteca JavaScript para construção de interfaces de usuário. ',
			'Next.js: Framework React que facilita a renderização do lado do servidor (SSR) e a geração de sites estáticos (SSG).',
			'Shadcn UI: Biblioteca de componentes React para estilização de interfaces.',
			'React-to-PDF: Biblioteca para gerar arquivos PDF a partir de componentes React.',
			'Tailwind CSS: Framework de CSS utilitário para estilização rápida e responsiva.',
			'TypeScript: Superset do JavaScript que adiciona tipagem estática ao projeto.'
		],
		functionalities: [
			'Criação de Recibos: Insira informações como nome, valor, data e descrição para gerar um recibo personalizado.',
			'Geração de PDF: Converta o recibo gerado em um arquivo PDF com um único clique.',
			'Download de Recibos: Baixe o recibo em PDF diretamente para o seu dispositivo.',
			'Interface Responsiva: Desfrute de uma experiência de usuário otimizada para dispositivos móveis e desktops.',
			'Design Personalizável: Estilize o recibo utilizando Tailwind CSS para atender às suas necessidades.'
		]
	},
	{
		id: 300154,
		name: 'Lista de Compras',
		class: 'principal',
		descriptionCover:
			'O Lista de Compras é um projeto que permite aos usuários criar uma lista de compras, adicionar, editar, remover itens e marcar aqueles que já foram adicionados ao carrinho. ',
		descriptionProject:
			'O Lista de Compras é um projeto desenvolvido utilizando React com TypeScript, como parte de um sistema de gerenciamento de listas de compras. A aplicação permite aos usuários adicionar, editar, remover itens e marcar aqueles que já foram adicionados ao carrinho. O projeto foi construído com uma interface moderna e intuitiva, utilizando a biblioteca de componentes Shadcn UI e ícones do Lucide. O Vite foi utilizado como ferramenta de build para otimizar o desenvolvimento.',
		imgUrlCover:
			'https://utfs.io/f/T771UCDelI3G5EaOs5Y8WGPg23LRczhOAiMs6EIuHeCfqlmB',
		imgUrlTech:
			'https://utfs.io/f/T771UCDelI3G1wpPDuDzNbyzc2HDfUjBWkOCpLXE4twYe30s',
		imgUrlFunc:
			'https://utfs.io/f/T771UCDelI3GBVnFw4tHVmIWsSNfLcZ4nPDg9bwRCTkv2jAF',
		githubURL: 'https://github.com/patricklimax/react-vite-shopping-list',
		onlineURL: 'https://shopping-list-patricklimax.vercel.app/',
		technologies: [
			'React: Biblioteca JavaScript para construção de interfaces de usuário. ',
			'Vite: Ferramenta de build rápida e leve para desenvolvimento com React.',
			'Shadcn UI: Biblioteca de componentes React para estilização de interfaces.',
			'Lucide: Pacote de ícones utilizados na aplicação para melhorar a experiência do usuário.',
			'Tailwind CSS: Framework de CSS utilitário para estilização rápida e responsiva.',
			'TypeScript: Superset do JavaScript que adiciona tipagem estática ao projeto.'
		],
		functionalities: [
			'Adicionar itens: Permite adicionar novos produtos à lista de compras.',
			'Editar itens: Opção de editar os produtos já existentes na lista.',
			'Remover itens: Funcionalidade para excluir itens da lista de compras.',
			'Marcar itens como comprados: Opção de marcar produtos que já foram colocados no carrinho, diferenciando visualmente na interface.',
			'Armazenamento Local com localStorage: A lista de compras é salva diretamente no navegador do usuário, garantindo que as informações permaneçam disponíveis mesmo após o fechamento do navegador.',
			'Interface Responsiva: A aplicação se adapta a diferentes tamanhos de tela, oferecendo uma experiência consistente em dispositivos móveis e desktop.'
		]
	},
	{
		id: 300153,
		name: 'Calculadora IMC',
		class: 'principal',
		descriptionCover:
			'A Calculadora IMC é uma aplicação web desenvolvida com o objetivo de calcular o Índice de Massa Corporal (IMC) com base no peso e altura fornecidos pelo usuário.',
		descriptionProject:
			'A Calculadora IMC é uma aplicação web desenvolvida com o objetivo de calcular o Índice de Massa Corporal (IMC) com base no peso e altura fornecidos pelo usuário. Esta ferramenta permite uma análise rápida da condição física de uma pessoa, categorizando o resultado em diferentes faixas de IMC (baixo peso, normal, sobrepeso, etc.).',
		imgUrlCover:
			'https://utfs.io/f/T771UCDelI3G39ShJ77QzqXABGsan7Vp06lJZ8cQ4iwmKgDb',
		imgUrlTech:
			'https://utfs.io/f/T771UCDelI3GWfJTX0XE3cf2LaGX6QySE5KkneIzsD4mUqp7',
		imgUrlFunc:
			'https://utfs.io/f/T771UCDelI3GRvbDPKYXoMbS78dArzlfUg6DnVaqtejIxQkO',
		githubURL: 'https://github.com/patricklimax/react-next-imc-calculator',
		onlineURL: '',
		technologies: [
			'React: Biblioteca JavaScript para a construção de interfaces de usuário.',
			'Next.js: Framework React para renderização do lado do servidor (SSR) e construção de aplicações web modernas.',
			'Tailwind CSS: Um framework CSS utilitário para estilização rápida e consistente.',
			'TypeScript: Superset do JavaScript que adiciona tipagem estática ao código, garantindo maior segurança e eficiência no desenvolvimento.'
		],
		functionalities: [
			'Cálculo do IMC: O usuário pode inserir seu peso (em kg) e altura (em metros), e o sistema calculará automaticamente o IMC.',
			'Classificação do IMC: O resultado do IMC será classificado em categorias como: baixo peso, peso normal, sobrepeso e obesidade.',
			'Feedback visual: A interface ajusta sua exibição para destacar a categoria correspondente ao IMC calculado.',
			'Responsividade: A aplicação é responsiva, garantindo uma experiência fluida em dispositivos móveis e desktops.'
		]
	},
	{
		id: 103901,
		name: 'Awax Clone',
		class: 'others',
		descriptionCover:
			'Este projeto é um clone do site Awax, desenvolvido como parte dos meus estudos em desenvolvimento web.',
		descriptionProject:
			'Este projeto é um clone do site Awax, desenvolvido como parte dos meus estudos em desenvolvimento web. O objetivo do projeto é praticar habilidades de HTML, CSS e layout responsivo utilizando Flexbox. O projeto foi implementado para replicar o design e a funcionalidade do site original, oferecendo uma experiência visualmente agradável e moderna.',
		imgUrlCover:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/3a0077ed-eff5-4c45-a54a-f32d32d47be4-1ji3tw.png',
		imgUrlTech:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/13251a48-0c0b-44f1-9446-192b9680a9b0-1ji3tx.png',
		imgUrlFunc:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/6d45c235-8df6-400f-903b-7f6e55750c3e-1ji3ty.png',
		technologies: [
			'HTML: Utilizado para estruturar o conteúdo do site.',
			'CSS: Usado para estilizar o site, com foco na criação de um design responsivo.',
			'Flexbox: Implementado para gerenciar o layout de forma eficiente, garantindo uma distribuição adequada dos elementos na página.'
		],
		githubURL: 'https://github.com/patricklimax/html-css-js-site-awax',
		onlineURL: '',
		functionalities: [
			'Design Responsivo: O site é totalmente responsivo, adaptando-se a diferentes tamanhos de tela e dispositivos.',
			'Clonagem de Layout: Replicação fiel do layout original do site Awax, incluindo elementos visuais como cabeçalhos, seções de conteúdo e rodapés.',
			'Estruturação Semântica: O código HTML foi estruturado de forma semântica, facilitando a compreensão e a manutenção do código.'
		]
	},
	{
		id: 300152,
		name: 'Patrick FirstSite',
		class: 'principal',
		descriptionCover:
			'O projeto "PATRICKFIRST" é um site desenvolvido como parte dos meus estudos em desenvolvimento web, focado em práticas de HTML, CSS, JavaScript e animações.',
		descriptionProject:
			'O projeto "PATRICKFIRST" é um site desenvolvido como parte dos meus estudos em desenvolvimento web, focado em práticas de HTML, CSS, JavaScript e animações. Este projeto foi criado para reforçar conceitos de design responsivo, layout com Flexbox e implementação de interatividade com JavaScript. O site também inclui um menu animado com rolagem de tela, proporcionando uma experiência de navegação fluida e dinâmica.',
		imgUrlCover:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/a73b50b9-2ccf-452b-90ca-d8d6c136521d-mb01dv.png',
		imgUrlTech:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/dbede9dc-a779-4637-af91-c57c60ce1a5b-mb01dx.png',
		imgUrlFunc:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/f26b30a7-dece-41f3-b6d7-3c474b6e7ca4-mb01dw.png',
		technologies: [
			'HTML: Estrutura básica do site, definindo a organização e o conteúdo das páginas.',
			'CSS: Utilizado para estilização do site, com foco em design responsivo e animações visuais.',
			'Flexbox: Ferramenta principal para a criação de layouts flexíveis e alinhados, garantindo uma disposição eficiente dos elementos.',
			'JavaScript: Implementado para adicionar interatividade, como o menu animado e a rolagem suave na navegação.'
		],
		githubURL:
			'https://github.com/patricklimax/html-css-js-site-patricklimax-first',
		onlineURL: '',
		functionalities: [
			'Design Responsivo: O site adapta-se perfeitamente a diferentes tamanhos de tela e dispositivos, proporcionando uma experiência de usuário consistente.',
			'Layout com Flexbox: Organização eficiente dos elementos da página utilizando Flexbox, garantindo um layout flexível e harmonioso.',
			'Animações CSS: Inclusão de animações visuais para melhorar a experiência do usuário, adicionando dinamismo ao design.',
			'Menu Animado com Rolagem de Tela: Implementação de um menu de navegação animado, que se ajusta conforme o usuário rola a página, facilitando o acesso a diferentes seções.',
			'Interatividade com JavaScript: Adição de funcionalidades interativas ao site, como a rolagem suave e comportamentos dinâmicos do menu de navegação.'
		]
	},
	{
		id: 109303,
		name: 'Site Meelink',
		class: 'others',
		descriptionCover:
			'O projeto "Site Meelink" é uma recriação de um site fictício, desenvolvida com o intuito de praticar habilidades em HTML, CSS e Grid Layout.',
		descriptionProject:
			'O projeto "Site Meelink" é uma recriação de um site fictício, desenvolvida com o intuito de praticar habilidades em HTML, CSS e Grid Layout. Este projeto foi parte dos meus estudos em desenvolvimento web, focando na criação de layouts modernos e responsivos. O objetivo principal era replicar o design e a funcionalidade de um site profissional, utilizando técnicas avançadas de CSS e Grid.',
		imgUrlCover:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/415fe097-002e-41a2-a09d-3da64c8c55d5-edgaie.png',
		imgUrlTech:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/44e3eaa7-f9e4-4aad-82a8-cd2c25827fbc-edgaid.png',
		imgUrlFunc:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/cff5ed90-0ea3-40db-b6c5-2ffd48e67547-edgaic.png',
		technologies: [
			'HTML: Estrutura básica do site, organizando o conteúdo de forma lógica e acessível.',
			'CSS: Responsável pela estilização e aparência do site, aplicando design moderno e adaptável.',
			'Grid Layout: Ferramenta principal para criar o layout do site, permitindo uma organização eficiente dos elementos na página.'
		],
		githubURL: 'https://github.com/patricklimax/html-css-js-site-meelink',
		onlineURL: '',
		functionalities: [
			'Design Responsivo: O site é projetado para ser completamente responsivo, adaptando-se a diferentes resoluções de tela e dispositivos.',
			'Layout com CSS Grid: Implementação de um layout avançado utilizando CSS Grid, garantindo uma disposição flexível e ordenada dos elementos.',
			'Estruturação Semântica: O HTML foi estruturado de maneira semântica, promovendo a acessibilidade e a facilidade de manutenção do código.'
		]
	},
	{
		id: 300150,
		name: 'Starbucks Clone',
		class: 'others',
		descriptionCover:
			'O Clone do Starbucks é um projeto de front-end que recria a interface do site da Starbucks, utilizando apenas HTML e CSS.',
		descriptionProject:
			'O Clone do Starbucks é um projeto de front-end que recria a interface do site da Starbucks, utilizando apenas HTML e CSS. O objetivo é praticar habilidades de layout com Flexbox e Grid, além de aplicar estilos e interações usando CSS e JavaScript. Este projeto é uma réplica visual do site da Starbucks, focando em design responsivo e em recriar a experiência do usuário do site original.',
		imgUrlCover:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/35f64a71-7926-471c-8301-3a18cb63751c-y7mi1h.png',
		imgUrlTech:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/a561a8c2-25aa-4b73-b137-c66ef6a6d170-y7mi1g.png',
		imgUrlFunc:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/5cc6b8ea-f6ce-46b0-bceb-7e9324d1a155-y7mi1f.png',
		technologies: [
			'HTML5: Estruturação das páginas web.',
			'CSS3: Estilização e layout, utilizando Flexbox e Grid.',
			'JavaScript: Interatividade e manipulação do DOM.'
		],
		githubURL:
			'https://github.com/patricklimax/html-css-js-site-starbucks-clone',
		onlineURL: '',
		functionalities: [
			'Interface Responsiva: O layout se adapta a diferentes tamanhos de tela, proporcionando uma boa experiência tanto em dispositivos móveis quanto em desktops.',
			'Navegação Simulada: Links e menus recriados para simular a navegação do site original.',
			'Animações e Transições: Uso de animações CSS para transições suaves e efeitos visuais.',
			'Interatividade com JavaScript: Scripts para manipulação de elementos e simulação de interações do usuário.'
		]
	},
	{
		id: 111405,
		name: 'Design Clone',
		class: 'others',
		descriptionCover:
			'O projeto "Design Clone" é uma recriação de um site fictício, desenvolvido durante meus estudos em desenvolvimento web.',
		descriptionProject:
			'O projeto "Design Clone" é uma recriação de um site fictício, desenvolvido durante meus estudos em desenvolvimento web. Este projeto teve como objetivo praticar e aprimorar habilidades em HTML, CSS e Flexbox, além de implementar um menu fixo para melhorar a navegação do usuário. O foco principal foi replicar um design profissional, criando uma página responsiva e visualmente atraente.',
		imgUrlCover:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/3c4e6934-3381-4576-944b-18be289074e3-pr0njn.png',
		imgUrlTech:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/0733ae17-7379-47e3-870e-adf61173d988-pr0njo.png',
		imgUrlFunc:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/c1364fa7-6dc3-4d6d-a547-04c9d917ee22-pr0njp.png',
		technologies: [
			'HTML: Estruturação do conteúdo da página, criando uma base sólida para o design.',
			'CSS: Estilização completa do site, com ênfase em design moderno e responsivo.',
			'Flexbox: Ferramenta utilizada para o layout, permitindo uma organização flexível e alinhada dos elementos na página.',
			'Menu Fixo: Implementação de um menu de navegação fixo que permanece visível durante a rolagem, facilitando a navegação do usuário.'
		],
		githubURL: 'https://github.com/patricklimax/html-css-js-todesign-clone',
		onlineURL: '',
		functionalities: [
			'Design Responsivo: O site adapta-se a diferentes tamanhos de tela e dispositivos, proporcionando uma experiência consistente.',
			'Layout com Flexbox: Organização eficiente dos elementos da página utilizando Flexbox, assegurando uma estrutura flexível e bem distribuída.',
			'Menu Fixo: Implementação de um menu de navegação que permanece fixo no topo da página durante a rolagem, facilitando o acesso às diferentes seções do site.',
			'Estilização Avançada com CSS: Uso de CSS para criar um design moderno e atraente, com atenção aos detalhes visuais.'
		]
	},
	{
		id: 155006,
		name: 'Hover Page - Clone',
		class: 'others',
		descriptionCover:
			'"HoverPage" é um projeto de estudo em desenvolvimento web, criado para praticar e aprofundar conhecimentos em HTML, CSS, Flexbox, e JavaScript.',
		descriptionProject:
			'"HoverPage" é um projeto de estudo em desenvolvimento web, criado para praticar e aprofundar conhecimentos em HTML, CSS, Flexbox, e JavaScript. O foco principal deste projeto foi a implementação de animações dinâmicas de página, que são acionadas ao passar o mouse sobre os elementos. Este site foi desenvolvido para explorar técnicas avançadas de animação e interatividade, proporcionando uma experiência de usuário envolvente e visualmente interessante.',
		imgUrlCover:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/fdcd2ed7-04a3-4ae1-a8f7-4e7d5b57b708-k18ozv.png',
		imgUrlTech:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/828065dd-3af9-49fe-8617-20bba3accf28-k18ozu.png',
		imgUrlFunc:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/e94908c2-828d-45af-b5b5-56d81e4bad4a-k18ozt.png',
		technologies: [
			'HTML: Usado para estruturar a base do conteúdo do site de forma semântica e organizada.',
			'CSS: Utilizado para estilizar o site, focando em design responsivo e integração de efeitos visuais.',
			'Flexbox: Implementado para criar um layout flexível e eficiente, garantindo uma boa distribuição dos elementos na página.',
			'JavaScript: Utilizado para adicionar animações e interatividade, com foco em efeitos de hover que trazem dinamismo ao site.'
		],
		githubURL: 'https://github.com/patricklimax/html-css-js-hoverslider-clone',
		onlineURL: '',
		functionalities: [
			'Design Responsivo: O site foi desenvolvido para ser totalmente responsivo, adaptando-se a diferentes dispositivos e tamanhos de tela.',
			'Layout com Flexbox: Utilização de Flexbox para organizar e alinhar os elementos da página de maneira flexível e visualmente equilibrada.',
			'Animações de Hover: Implementação de animações que são ativadas ao passar o mouse sobre os elementos, criando uma experiência de usuário interativa e envolvente.',
			'Interatividade com JavaScript: Uso de JavaScript para controlar e personalizar as animações de página, garantindo uma navegação dinâmica.'
		]
	},
	{
		id: 160510,
		name: 'Calculadora Simples',
		class: 'others',
		descriptionCover:
			'Este projeto é uma calculadora simples e funcional desenvolvida com HTML, CSS e JavaScript puro.',
		descriptionProject:
			'Este projeto é uma calculadora simples e funcional desenvolvida com HTML, CSS e JavaScript puro. O objetivo é oferecer uma ferramenta básica para realizar operações matemáticas, com uma interface amigável e responsiva. Este projeto é ideal para quem deseja aprender mais sobre como construir uma calculadora do zero utilizando tecnologias web fundamentais.',
		imgUrlCover:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/64938ba9-659e-4ade-8736-9271f6dfc4f7-hs136q.png',
		imgUrlTech:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/341d17b3-6e1a-4ecd-900e-e7fd65d90c83-hs136r.png',
		imgUrlFunc:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/1f78aa80-d1fe-42a9-8e32-c8453b2fd170-hs136s.png',
		technologies: [
			'HTML: Marca a estrutura do conteúdo da calculadora.',
			'CSS: Estiliza a interface, garantindo que a calculadora seja visualmente agradável e funcional em diferentes dispositivos.',
			'CSS Grid: Utilizado para criar o layout responsivo e organizado da calculadora.',
			'JavaScript Puro: Manipula a lógica das operações matemáticas e a interação do usuário com a interface.'
		],
		githubURL: 'https://github.com/patricklimax/js-simple-calculator',
		onlineURL: '',
		functionalities: [
			'Operações Básicas: Realiza operações matemáticas simples como adição, subtração, multiplicação e divisão.',
			'Interface Responsiva: A calculadora é projetada para funcionar bem em diferentes tamanhos de tela, desde desktops até dispositivos móveis.',
			'Teclado Virtual: Botões que representam os dígitos e operadores matemáticos, facilitando a interação do usuário.',
			'Feedback Visual: Destaques visuais ao pressionar botões, proporcionando uma experiência de uso intuitiva e agradável.'
		]
	},
	{
		id: 161809,
		name: 'Gerador de Senha',
		class: 'others',
		descriptionCover:
			'O Gerador de Senha é uma aplicação web simples e eficaz para criar senhas seguras e personalizadas.',
		descriptionProject:
			'O Gerador de Senha é uma aplicação web simples e eficaz para criar senhas seguras e personalizadas. Com ele, você pode gerar senhas aleatórias de diferentes comprimentos e com várias combinações de caracteres, como letras maiúsculas, minúsculas, números e símbolos. Desenvolvido com HTML, CSS e JavaScript, este projeto oferece uma interface intuitiva e responsiva para que qualquer pessoa possa gerar senhas fortes e seguras rapidamente.',
		imgUrlCover:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/e878e35c-49c7-4e57-843e-5f152ee378db-fcleyy.png',
		imgUrlTech:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/652eb882-1c2a-4eb6-98ac-be1e986fceaf-fcleyx.png',
		imgUrlFunc:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/8041bf6e-7528-4e6c-ac10-232f8dbc571c-fcleyw.png',
		technologies: [
			'HTML5: Utilizado para estruturar o conteúdo da aplicação.',
			'CSS3: Utilizado para estilizar a aplicação e criar layouts responsivos, utilizando Flexbox e Grid.',
			'JavaScript: Implementação da lógica de geração de senhas e manipulação do DOM para interação do usuário.'
		],
		githubURL: '',
		onlineURL: '',
		functionalities: [
			'Geração de Senhas Aleatórias: Crie senhas seguras com base em diferentes critérios definidos pelo usuário.',
			'Opções de Personalização: Defina o comprimento da senha.',
			'Escolha incluir ou excluir letras maiúsculas, minúsculas, números e símbolos.',
			'Grau de segurança da senha: tenha uma senha: Muita Fraca, Fraca, Boa, Forte, Muito Forte.',
			'Cópia para Área de Transferência: Copie a senha gerada diretamente para a área de transferência com um clique.',
			'Design Simples e Intuitivo: Interface limpa e fácil de usar, focada na usabilidade e acessibilidade.'
		]
	},
	{
		id: 199478,
		name: 'Menu Pizza Cart',
		class: 'others',
		descriptionCover:
			'O Menu Pizza Cart é uma aplicação web simples que permite aos usuários navegar por um menu de pizzas, visualizar detalhes como preço, tamanho e quantidade, e adicionar pizzas ao carrinho de compras.',
		descriptionProject:
			'O Menu Pizza Cart é uma aplicação web simples que permite aos usuários navegar por um menu de pizzas, visualizar detalhes como preço, tamanho e quantidade, e adicionar pizzas ao carrinho de compras. A aplicação inclui funcionalidades interativas como a confirmação do produto via modal antes de adicionar ao carrinho, e a possibilidade de ajustar as quantidades de pizza no carrinho, seja aumentando ou removendo itens. O projeto foi desenvolvido com HTML, CSS e JavaScript puro, proporcionando uma experiência de usuário intuitiva e responsiva.',
		imgUrlCover:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/cd580992-4914-497a-ae45-953f27dd59fd-ljhza0.png',
		imgUrlTech:
			'https://utfs.io/f/981f9ee8-d80d-4502-95c6-0127cf90444d-ljhz9y.png',
		imgUrlFunc:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/83141fe7-1f5f-45d4-af55-43df4b2858c4-ljhz9z.png',
		technologies: [
			'HTML: Define a estrutura da aplicação, organizando o conteúdo e os elementos do menu e do carrinho.',
			'CSS: Estiliza a interface do usuário, garantindo que o menu de pizzas seja atraente e fácil de usar.',
			'CSS Grid: Utilizado para criar um layout organizado e responsivo, facilitando a disposição dos elementos na página.',
			'JavaScript Puro: Implementa a lógica de interatividade, como o gerenciamento do carrinho, abertura de modais e atualização dinâmica das quantidades.'
		],
		githubURL: '',
		onlineURL: '',
		functionalities: [
			'Visualização do Menu: Exibe uma lista de pizzas com detalhes como preço, tamanho disponível e opção para escolher a quantidade.',
			'Modal de Confirmação: Ao adicionar uma pizza ao carrinho, um modal é aberto para confirmar a seleção, garantindo que o usuário tenha certeza da escolha antes de prosseguir.',
			'Gerenciamento do Carrinho: No carrinho, os usuários podem ajustar as quantidades de cada pizza, adicionando mais unidades ou removendo-as conforme necessário.',
			'Atualização Dinâmica: As alterações no carrinho são refletidas em tempo real, proporcionando uma experiência de compra fluida e sem interrupções.',
			'Interface Responsiva: O layout e os elementos da aplicação são ajustados automaticamente para diferentes tamanhos de tela, garantindo uma boa experiência de uso em dispositivos móveis e desktops.'
		]
	},
	{
		id: 190012,
		name: 'Relógio Análogico Digital',
		class: 'others',
		descriptionCover:
			'Este projeto é um relógio que combina uma exibição analógica e digital, desenvolvido utilizando HTML, CSS e JavaScript puro.',
		descriptionProject:
			'Este projeto é um relógio que combina uma exibição analógica e digital, desenvolvido utilizando HTML, CSS e JavaScript puro. A interface elegante e responsiva permite que os usuários visualizem o tempo de duas maneiras distintas, simulando um relógio clássico com ponteiros ao lado de uma exibição digital. Este projeto é uma excelente demonstração de como usar tecnologias web fundamentais para criar componentes interativos e visualmente atraentes.',
		imgUrlCover:
			'https://utfs.io/f/bee23d3b-0655-4c0f-b561-85d92c3a4e3a-mg8pb1.png',
		imgUrlTech:
			'https://utfs.io/f/bee23d3b-0655-4c0f-b561-85d92c3a4e3a-mg8pb1.png',
		imgUrlFunc:
			'https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/aaddd1ff-f58c-4547-84e4-f52db66e1d0f-mg8pb0.png',
		technologies: [
			'HTML: Estrutura a marcação do relógio, definindo os elementos da interface.',
			'CSS: Estiliza o relógio, criando um design atraente e garantindo que a interface seja responsiva.',
			'JavaScript Puro: Implementa a lógica que faz o relógio funcionar em tempo real, atualizando tanto os ponteiros quanto a exibição digital com base na hora atual.'
		],
		githubURL: 'https://github.com/patricklimax/js-clock-digital-analogic',
		onlineURL: '',
		functionalities: [
			'Relógio Analógico: Exibe a hora atual com ponteiros para horas, minutos e segundos, simulando um relógio físico.',
			'Relógio Digital: Mostra a hora atual em formato digital (HH:MM), oferecendo uma visualização alternativa do tempo.',
			'Atualização em Tempo Real: O relógio é atualizado automaticamente em tempo real, garantindo que as horas exibidas estejam sempre corretas.',
			'Interface Responsiva: O layout do relógio se adapta a diferentes tamanhos de tela, proporcionando uma boa experiência de uso em dispositivos móveis e desktops.'
		]
	}
];
