import React, { useEffect, useRef, useState } from 'react'
import { Card } from '../../../components/DesignSystem/Card'
import { Title } from '../../../components/DesignSystem/Headings'
import { InputDate } from '../../../components/DesignSystem/InputDate'
import Table from '../../../components/DesignSystem/Table'
import 'moment/locale/pt-br'
import moment from 'moment/moment'
import ru from 'date-fns/esm/locale/ru/index.js'
import Badge from '../../../components/DesignSystem/Badge'
import Button from '../../../components/DesignSystem/Button'
import SvgUse from '../../../components/svg/svgUse'
import gsap from "gsap/dist/gsap";
import { api } from '../../../services/api';

moment.locale('pt-br')

const rupturas = [
	{
		relatorio: {
			data: moment().format('DD[/]MMMM'),
			horarios: [
				'17h', '12h', '8h',
			],
			produtos: [
				{
					nome: 'Bolo de Chocolate',
					categoria: 'Bolos',
					disponibilidade: [
						['Disponível', 'Indisponível', 'Disponível'],
						['Indisponível', 'Disponível'],
						['Disponível', 'Disponível', 'Indisponível', 'Disponivel']
					],
				},
				{
					nome: 'Bolo de Laranja',
					categoria: 'Bolos',
					disponibilidade: [
						['Disponível', 'Indisponível', 'Disponível'],
						['Indisponível', 'Disponível'],
						['Disponível', 'Disponível', 'Indisponível', 'Disponivel']
					],
				},
			],
			categorias: [
				'Bolos', 'Broas'
			]
		},
	},
	{
		relatorio: {
			data: moment().subtract(1, 'day').format('DD[/]MMMM'),
			horarios: [
				'16h', '12h',
			],
			produtos: [
				{
					nome: 'Broa',
					categoria: 'Pães',
					disponibilidade: [
						['Disponível', 'Indisponível', 'Disponível'],
						['Indisponível', 'Disponível'],
						['Disponível', 'Disponível', 'Indisponível', 'Disponivel']
					],
				},

			],
			categorias: [
				'Pães', 'Frios'
			]
		},
	},
	{
		relatorio: {
			data: moment().subtract(2, 'day').format('DD[/]MMMM'),
			horarios: [
				'16h', '12h', '9h', '7h	'
			],
			produtos: [
				{
					nome: 'Pizza',
					categoria: 'Salgados',
					disponibilidade: [
						['Disponível', 'Indisponível', 'Disponível'],
						['Indisponível', 'Disponível'],
						['Disponível', 'Disponível', 'Indisponível', 'Disponivel']
					],
				}
			],
			categorias: [
				'Salgados',
			]
		},
	}
]





const TelaRupturas = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [allRupturas, setAllRupturas] = useState([]);
	const [allProducts, setAllProducts] = useState([]);
	const [categorias, setCategorias] = useState([]);
	const [dataHeader, setDataHeader] = useState([]);
	const [qtdObjCurrentDate, setQtdObjCurrentDate] = useState([]);

	function compare(a,b){
		return Number(b.replaceAll(':', '')) - Number(a.replaceAll(':', ''))
	}

	useEffect(() => {
		const end = moment(startDate).format('DD-MM-YYYY');
		const start = moment(startDate, 'DD-MM-YYYY').subtract(2, 'days').format('DD-MM-YYYY')
		api.get(`/api/producao/ruptura/horarios/?data_inicial=${start}&data_final=${end}&ordering=-data`).then(({ data }) => {
			 data.horario_data.map(current => current.horarios.sort(compare));
			setDataHeader(data);
			
		});
		api.get(`/api/producao/ruptura/?data_inicial=${start}&data_final=${end}&ordering=-data`).then(({ data }) => {
			let dias = [];
			let allProducts = [];
			setQtdObjCurrentDate([]);
			data.map(response => {
				//tirando datas duplicadas
				const hasData = dias.find(obj => obj.data === response.data);
				if (!hasData) {
					dias.push({
						data: response.data,
						horarios_ruptura: response.horarios_ruptura
					});
				}
				//tirando categorias duplicadas
				
				setCategorias(categorias => [...new Set([...categorias, response.produto.get_categoria_produto.nome])])
				
				//tirando duplicação no arr de produtos
				const hasProduct = allProducts.find(product => product.produto_id === response.produto_id)
	
				if(!hasProduct) {
					allProducts.push(response);
				}
			
			})
			data.map(current => setQtdObjCurrentDate(prev => [...new Set([...prev, current.data])]))
			setAllProducts(allProducts);
			setAllRupturas(data);
			console.log(data, allProducts)
		}).catch(err => console.log)
	}, [startDate])


	
	useEffect(() => {
		if (dataHeader.horario_data?.length  >= 3 && qtdObjCurrentDate.length >= 3) {
			// HEADER
			const headerGrid = document.querySelector('.header-grid');
			const horariosHeader = document.querySelectorAll('.horarios-header');
			const lastChildHeader = headerGrid.lastChild;
			lastChildHeader.style.gridColumn = '4';

			// BODY
			const gridProducts = document.querySelectorAll('.grid-produtos');
			Array.from(gridProducts).map(container => {
				container.lastChild.style.gridColumn = '4'
			})

			const containerDisponibilidade = document.querySelectorAll('.container-disponibilidade');

			//setando valores
			let qtdHorarios = [];
			Array.from(horariosHeader).map((container) => {
				if (container.children.length > 0) {
					qtdHorarios.push(container.children.length);
					container.lastChild.style.gridColumn = container.children.length;
				}
			})

			let count = 0;
			Array.from(containerDisponibilidade).map((container) => {
				if (container.children.length > 0) {
				if (count > 2) count = 0;
				container.lastChild.style.gridColumn = qtdHorarios[count];
				count++;
				}
			})
		}

	}, [allRupturas])

	const handleClick = (e) => {
		const categoriaClicada = e.target.closest('.categoria-content');
		const headerCategoria = e.target.closest('.header-categoria');
		const produtos = [...categoriaClicada.querySelectorAll('.produtosRef')];
		let heightTotal = 0;

		produtos.map(produto => {
			heightTotal += produto.scrollHeight
		});

		heightTotal += headerCategoria.scrollHeight;

		if (!categoriaClicada.classList.contains("active")) {
			gsap.to(categoriaClicada, { duration: 0.9, ease: "power3", height: heightTotal });
		} else {
			gsap.to(categoriaClicada, { duration: 0.9, ease: "power3", height: headerCategoria.scrollHeight });

		}

		categoriaClicada.classList.toggle("active");

		const hasCategoryOpen = [...document.querySelectorAll('.categoria-content.active')]
		if (hasCategoryOpen.length === 0) {
			document.querySelector('section.rupturas').style.overflowX = 'hidden';
		} else {
			document.querySelector('section.rupturas').style.overflowX = 'auto'
		}


	};

	useEffect(() => {
		if (dataHeader.horario_data?.length  >= 3 && qtdObjCurrentDate.length >= 3) {
			const container = document.querySelectorAll('.categoria-content');
			container.forEach((categorias) => {
				const heightHeader = document.querySelector('.header-categoria').scrollHeight;
				gsap.to(categorias, { duration: 0.25, ease: "power3", height: heightHeader });
			})
			document.querySelectorAll('.categoria-content').forEach(categoria => {
				categoria.classList.remove('active');
			})
			const hasCategoryOpen = [...document.querySelectorAll('.categoria-content.active')]
			if (hasCategoryOpen.length === 0) {
				document.querySelector('section.rupturas').scrollTo({ left: 0 })
				document.querySelector('section.rupturas').style.overflowX = 'hidden';
			}
		}
	}, [allRupturas])

	return (
		<>
			<div className='container'>
				<Card classe="rounded-lg p-24 my-64 md2:px-10">
					<div className="flex justify-between items-center mb-24 md:flex-col md:gap-10">
						<Title iconID={"#icon_lista_cardapio"} classe="flex-row-reverse text-lg">
							Tela de Rupturas
						</Title>
						<InputDate
							classe="min-w-[300px] md:min-w-0 md:w-full"
							placeholderText="Selecionar data"
							svgID={"#icon_arrow_left"}
							startDate={startDate}
							setStartDate={setStartDate}
							id="date-input"
						/>
					</div>

					{/* SECTION DE RUPTURAS */}

					{qtdObjCurrentDate.length >= 3 ? <section className='my-32 rupturas overflow-y-hidden  overflow-x-auto scrollbar-thin scrollbar-track-neutral-30 scrollbar-thumb-primary-pure pb-8'>
						{/* Header */}
						<div className='border border-neutral-30 w-min '>
							
								<div id="headerRef" className=' header-grid grid grid-cols-[200px] md2:grid-cols-[150px] auto-cols-[1fr] items-center'>
									<p className='pl-16'>Produtos</p>

									
									{dataHeader.horario_data.length > 0 && dataHeader.horario_data.map((dia, i) => (
										<div className=' bg-neutral-10' key={i}>
											<div className='h-48 flex justify-center items-center'>
												<p className='text-center'>{moment(dia.data, 'YYYY-MM-DD').format('DD/MMMM')}</p>
											</div>
											<div className='grid auto-cols-[110px] horarios-header  h-40 bg-white'>
												{dia.horarios.map((h, i) => <p key={i} className='flex items-center justify-center flex-1 h-full border border-neutral-30 border-r-0 border-b-0'>{h}</p>)}
											</div>
										</div>
									))}

								</div>
							
							{/* CATEGORIAS E CONTEUDOS */}

							{categorias.map((categoria, i) => {
								return (
									<div key={i}>
										{/* Categoria e produtos */}


										<div className='categoria-content' >
											<div onClick={(e) => handleClick(e)} className='header-categoria pl-16 bg-neutral-10 h-48 flex gap-10 items-center border border-transparent border-t-neutral-30'>
												<Button classe="secondary h-32 ">
													<SvgUse id={'#icon_arrow_left'} />
												</Button>
												<h1>{categoria}</h1>
											</div>
											{/* Produtos */}
											{
												allProducts.filter(item => item.produto.get_categoria_produto.nome === categoria).map((item, i) => {
													

													return (
														<div key={i} className='produtosRef grid-produtos place-items-center auto-rows-[48px]  grid grid-cols-[200px] md2:grid-cols-[150px] auto-cols-[1fr] border border-transparent border-t-neutral-30'>
															<div className='relative w-full  '>
																<h2 className='title-produto pl-16'>{item.produto.nome}</h2>
															</div>
															{
																dataHeader.horario_data.map((current, i) => {
												
																	const disCurrentDate = allRupturas.find(obj => obj.data === moment(current.data).format('YYYY-MM-DD') && obj.produto.id === item.produto.id)
																	

																	if(disCurrentDate){
																		console.log('entrei')
																		function compareItem(a,b){
																			return Number(b.horario.replaceAll(':', '')) - Number(a.horario.replaceAll(':', ''))
																		}
																		disCurrentDate.horarios_ruptura.sort(compareItem);
																		return (
																			<div className={`container-disponibilidade grid auto-cols-[110px] h-full `} key={i}>
																				{
																					disCurrentDate.horarios_ruptura.map((item, i) => {
																						// if(moment(disCurrentDate.data).format('YYYY-MM-DD') === '2022-08-19' && disCurrentDate.produto_id == 7){
																					
																						// }
																					
																						return (
																							<div key={i} className='border border-transparent border-l-neutral-30 flex items-center justify-center'>
																								<Badge title={item.disponibilidade ? 'Disponível' : 'Indisponível'} />
																							</div>
																						)
																					})
																				}
	
	
																			</div>
																		)
																	}
																})
															}
						
														</div>
													)
												})
											}
										</div>


									</div>
								)

							})}
						</div>
					</section>
						: <p>Nenhuma configuração para a data selecionada.</p>}

				</Card>
			</div>
		</>
	)
}

export default TelaRupturas

