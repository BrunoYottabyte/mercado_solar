export const menuItems = [
	{
		title: 'Home',
		nivel: 1,
		svg: '#icon_settings_ms',
		link: '/',
	},
	{
		title: 'Financeiro',
		nivel: 1,
		svg: '#icon_dollar_ms',
		link: '/financeiro',
	},

	{
		title: 'Gestão de Produção',
		nivel: 1,
		svg: "#icon_dollar_ms",

		submenu: [
			{
				title: 'Estoque',
				nivel: 2,
				svg: "#icon_dollar_ms",

				submenu: [
					{
						title: 'Estoque',
						nivel: 3,
						link: '/gestao-producao/estoque'
					},
					{
						title: 'Entradas de Estoque',
						nivel: 3,
						link: '/gestao-producao/entradas-estoque'
					},
				
					
				]
			},
			{
				title: 'Previsão e controle de estoque',
				link: '/gestao-producao/previsao-controle-estoque',
				nivel: 2,
			},
			{
				title: 'Calendário de Produção (Em breve)',
				link: '/gestao-producao/calendario',
				nivel: 2,
			},
			{
				title: 'Produtos',
				nivel: 2,
				submenu: [
					{
						title: 'Matéria Prima',
						link: '/gestao-producao/materia-prima',
						nivel: 3,
					},
					{
						title: 'Embalagem',
						link: '/gestao-producao/embalagem',
						nivel: 3,
					},
					{
						title: 'Produtos comercializáveis',
						link: '/gestao-producao/produto-comercializaveis',
						nivel: 3,
					},
		
					{
						title: 'Sub Produtos (Em breve)',
						nivel: 3
					},
					{
						title: 'Insumo (Em breve)',
						nivel: 3
					}

				]
			},
			{
				title: 'Previsão de Consumo (Em breve)',
				// link: 'https://www.google.com',
				nivel: 2,
				submenu: [
					{
						title: 'Previsão de Consumo (Em breve)',
						// link: 'https://www.google.com',
						nivel: 3,
					}
				]
			},
			{
				title: 'NF de entrada (Em breve)',
				link: '/gestao-producao/materia-prima',
				nivel: 2,
				submenu: [
					{
						title: 'NF de entrada (Em breve)',
						link: '/gestao-producao/materia-prima',
						nivel: 3,
					}
				]
			},
			
		]
	}, 
]