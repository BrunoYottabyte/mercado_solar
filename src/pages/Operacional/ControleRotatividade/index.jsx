import React from 'react'
import { Card } from '../../../components/DesignSystem/Card'
import { Title } from '../../../components/DesignSystem/Headings'
import SvgUse from '../../../components/svg/svgUse'
import Charts from 'react-apexcharts'

const ControleRotatividade = () => {
	// const series = [{
	// 	name: "sales",
	// 	data: [{
	// 		x: '2019/01/01',
	// 		y: 400
	// 	}, {
	// 		x: '2019/04/01',
	// 		y: 430
	// 	}, {
	// 		x: '2019/07/01',
	// 		y: 448
	// 	}, {
	// 		x: '2019/10/01',
	// 		y: 470
	// 	}, {
	// 		x: '2020/01/01',
	// 		y: 540
	// 	}, {
	// 		x: '2020/04/01',
	// 		y: 580
	// 	}, {
	// 		x: '2020/07/01',
	// 		y: 690
	// 	}, {
	// 		x: '2020/10/01',
	// 		y: 690
	// 	}]
	// }]

	const options = {
		chart: {
			id: "basic-bar"
		},
		plotOptions: {
			bar: {
				borderRadius: 4,
				horizontal: false,
			}
		},
		fill: {
			colors: ['#ADB5BD']
		},
		xaxis: {
			categories: [1991, 1992, 1993, 1994]
		},
		yaxis: {
			labels: {
				style: {
					colors: '#495057'
				}
			}
		}
	}
	const series = [
		{
			name: "series-1",
			data: [30, 40, 45, 50]
		}
	]

	const series2 = [{
		data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
	}]

	const options2 = {
		chart: {
			type: 'bar',
			height: 350,
			
		},
		fill: {
			colors: ['#ADB5BD']
		},
		plotOptions: {
			bar: {
				borderRadius: 4,
				horizontal: true,
			}
		},
		dataLabels: {
			enabled: false
		},
		
		xaxis: {
			categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
				'United States', 'China', 'Germany'
			],
			labels: {
				style: {
					colors:'#495057',
					fontSize: '12px',
					fontFamily: 'Helvetica, Arial, sans-serif',
					fontWeight: 400,
					cssClass: 'apexcharts-xaxis-label',
			},
			}
		},
		yaxis: {
			labels: {
				style: {
					colors: '#495057'
				}
			}
		}
	}

	const series3 = [44, 55, 13, 33]

	const options3 = {
		chart: {
			width: 380,
			type: 'donut',
		},
		dataLabels: {
			enabled: false
		},
		
		legend: {
			position: 'right',
			fontSize: '12px',
			labels: {
				colors: '#495057'
			},
			fontFamily: 500,
			offsetY: 0,
			height: 230,
		}
	}


	return (
		<div className='container'>
	
				{/* Informação introdutória */}
				<section className='flex md2:flex-col md2: items-center mt-64 gap-16'>
					<div className='flex flex-1 md2:w-full bg-white gap-16 p-24 rounded-md shadow-md'>
						<div className='w-64 h-64 grid place-items-center rounded bg-neutral-30'>
							<SvgUse id="#icon-func-controle-rotatividade" classe="w-40 h-40" />
						</div>
						<div className='flex flex-col gap-8'>
							<h1 className='text-primary-pure font-normal text-2xl'>359</h1>
							<span className='font-medium text-xs text-neutral-90' >Rotatividade de funcionários</span>
						</div>
					</div>
					<div className='flex flex-1 md2:w-full bg-white gap-16 p-24 rounded-md shadow-md'>
						<div className='w-64 h-64 grid place-items-center rounded bg-neutral-30'>
							<SvgUse id="#icon-porcentage-controle-rotatividade" classe="w-40 h-40" />
						</div>
						<div className='flex flex-col gap-8'>
							<h1 className='text-primary-pure font-normal text-2xl'>18%</h1>
							<span className='font-medium text-xs text-neutral-90' >Taxa de rotatividade</span>
						</div>
					</div>
					<div className='flex flex-1 md2:w-full bg-white gap-16 p-24 rounded-md shadow-md'>
						<div className='w-64 h-64 grid place-items-center rounded bg-neutral-30'>
							<SvgUse id="#icon-time-controle-rotatividade" classe="w-40 h-40" />
							
						</div>
						<div className='flex flex-col gap-8'>
							<h1 className='text-primary-pure font-normal text-2xl'>2.2</h1>
							<span className='font-medium text-xs text-neutral-90' >Média em anos de mandato</span>
						</div>
					</div>
				</section>

				{/* Gráficos */}
				<section className='mt-28 mb-64'>
						<Title>
							<SvgUse id="#icon-wallet-controle-rotatividade" />
							<h1>
								Detalhes do faturamento
							</h1>
						</Title>

						<div className='flex flex-wrap gap-16 md2:flex-col md2:items-center mt-16 '>
							<Card classe='flex flex-1 flex-col p-24 h-[470px] min-w-[30%]'>
								 <div>
										<h2 className='font-semibold text-lg text-neutral-100'>Volume de négócios por trimestre</h2>
								 		<p className='font-normal text-sm text-neutral-80'>Em que trimestre os funcionários saíram?</p>
								 </div>
								 <Charts options={options} series={series} type="bar" height={380}/>
							</Card>

							<Card classe='flex flex-1 flex-col p-24 h-[470px] min-w-[30%]'>
								 <div>
										<h2 className='font-semibold text-lg text-neutral-100'>% de faturamento por departamento</h2>
								 		<p className='font-normal text-sm text-neutral-80'>Quais departamentos tem a maior taxa de rotatividade?</p>
								 </div>
								 <Charts options={options2} series={series2} type="bar" height={380}/>
							</Card>

							<Card classe='flex flex-1 flex-col items-center p-24 h-[470px] min-w-[30%]'>
								 <div>
										<h2 className='font-semibold text-lg text-neutral-100'>Tipo de Volume de Negócios - Voluntário ou Involuntário</h2>
								 		<p className='font-normal text-sm text-neutral-80'>Um funcionário saiu voluntária ou involuntariamente?</p>
								 </div>
								 <div className='flex items-center h-full'>
								 	<Charts options={options3} series={series3} type="donut" height={380}/>
								 </div>
							</Card>

							<Card classe='flex flex-1 flex-col p-24 h-[470px] min-w-[30%]'>
								 <div>
										<h2 className='font-semibold text-lg text-neutral-100'>Baldes de Volume de Negócios</h2>
								 		<p className='font-normal text-sm text-neutral-80'>Quanto tempo os funcionários ficaram na empresa?</p>
								 </div>
								 <Charts options={options2} series={series2} type="bar" height={380}/>
							</Card>
							<Card classe='flex flex-1 flex-col p-24 h-[470px] min-w-[30%]'>
								 <div>
										<h2 className='font-semibold text-lg text-neutral-100'>% de rotatividade por posição</h2>
								 		<p className='font-normal text-sm text-neutral-80'>Quais cargos têm a maior taxa de rotatividade?</p>
								 </div>
								 <Charts options={options2} series={series2} type="bar" height={380}/>
							</Card>
							<Card classe='flex flex-1 flex-col p-24 h-[470px] min-w-[30%]'>
								 <div>
										<h2 className='font-semibold text-lg text-neutral-100'>% de rotatividade por posição</h2>
								 		<p className='font-normal text-sm text-neutral-80'>Quais cargos têm a maior taxa de rotatividade?</p>
								 </div>
								 <Charts options={options2} series={series2} type="bar" height={380}/>
							</Card>
						</div>
				</section>
		
		</div>
	)
}

export default ControleRotatividade