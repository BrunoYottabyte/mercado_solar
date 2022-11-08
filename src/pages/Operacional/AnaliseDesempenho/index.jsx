import { Card } from "../../../components/DesignSystem/Card"
import { Title } from "../../../components/DesignSystem/Headings"
import { InputDate } from "../../../components/DesignSystem/InputDate"
import Svg from "../../../components/svg/svg"
import SvgUse from "../../../components/svg/svgUse"
import Charts from 'react-apexcharts'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const series = [{
	name: 'Cumpridas',
	data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
}, {
	name: 'Parcialmente cumpridas',
	data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}, {
	name: 'Não cumpridas',
	data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
}]
const options = {
	chart: {
		type: 'bar',
		height: 'auto',
		width: '100%',
		stacked: true,
		toolbar: {
			show: true
		},
		zoom: {
			enabled: true
		}
	},
	grid: {
		show: true,
		borderColor: '#E9ECEF',
		strokeDashArray: 0,
		position: 'back',
		xaxis: {
			lines: {
				show: true
			}
		},
		yaxis: {
			lines: {
				show: true
			}
		},
	},

	plotOptions: {
		bar: {
			horizontal: false,
			borderRadius: 6,
			columnWidth: '70%',
		},
	},
	xaxis: {
		type: 'category',
		categories: ['01/06', '02/06', '03/06', '04/06',
			'05/06', '06/06', '07/06', '08/06', '09/06', '10/06',
			'11/06', '12/06'
		],
		labels: {
			style: {
				colors: '#868E96',
				fontSize: '12px',
				fontFamily: 'Helvetica, Arial, sans-serif',
				fontWeight: 400,
				cssClass: 'apexcharts-xaxis-label',
			},
			offsetY: -5
		},
	},
	yaxis: {
		labels: {
			style: {
				colors: '#868E96',
				fontSize: '12px',
				fontFamily: 'Helvetica, Arial, sans-serif',
				fontWeight: 400,
				cssClass: 'apexcharts-xaxis-label',
			},
			offsetY: -5,
			offsetX: -18
		},
	},
	legend: {
		show: true,
		position: 'bottom',
		offsetY: 8,
		fontWeight: 700,
		labels: {
			colors: '#495057',
		},
		itemMargin: {
			horizontal: 16
		},
		markers: {
			width: 12,
			height: 12,
			strokeWidth: 0,
			strokeColor: '#fff',
			fillColors: ['#1CC066', '#D2AF00', '#EC3539'],
			radius: 4,
			customHTML: undefined,
			onClick: undefined,
			offsetX: 0,
			offsetY: 0
		},
	},

	fill: {
		opacity: 1,
		colors: ['#1CC066', '#D2AF00', '#EC3539']
	},
	dataLabels: {
		enabled: false,
	}
}

const OBJTABS = [
	{
		atividade: "Atividade 1",
		categoria: "Categoria 1",
		status: 85,
		entrega: '15:00'
	},
	{
		atividade: "Atividade 2",
		categoria: "Categoria 2",
		status: 60,
		entrega: '17:00'
	},
	{
		atividade: "Atividade 3",
		categoria: "Categoria 3",
		status: 48,
		entrega: '12:00'
	},
	{
		atividade: "Entregar cardápio direcionado",
		categoria: "Categoria 1",
		status: 100,
		entrega: '16:00'
	},
	{
		atividade: "Entregar tela de historico",
		categoria: "Categoria 3",
		status: 100,
		entrega: '10:00'
	}

]


const AnaliseDesempenho = () => {
	return (
		<div className="container">
			<Card classe="mt-64 shadow-none bg-primary-90 relative h-[185px]">
				<div className="h-full relative z-10 overflow-hidden  rounded-md p-0">
					<SvgUse id="#icon_cevada_2" classe="h-[200px]  absolute -bottom-64 -left-[100px]  rotate-[30deg]" />
					<SvgUse id="#icon_cevada_2" classe="h-[200px]  absolute -bottom-56 -right-32" />
				</div>

				<Card classe="bg-white absolute w-[50%] left-0 right-0 z-[100] -bottom-20 mx-auto flex items-center p-24 gap-20 md2:flex-col">
					<img className="w-120 h-120 rounded-md object-cover" src="https://www.showmetech.com.br/wp-content/uploads//2021/02/capa-dog-1920x1024.png" alt="retrato" />
					<div>
						<h1 className="font-medium text-2xl">Bob Marley</h1>
						<p className="md2:hidden font-normal text-sm text-neutral-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque velit molestiae voluptatibus dicta eaque. Eligendi reiciendis at sed nobis minus officia?</p>
					</div>
				</Card>

			</Card>
			<Card classe="mt-[36px] mb-64 p-24">
				<header className="flex justify-between md2:flex-col md2:gap-16">
					<Title classe="text-neutral-80 flex gap-16 md2:justify-center">
						<SvgUse id="#icon-checklist-analise-desempenho" />	Atividades diárias
					</Title>
					<InputDate classe="w-[256px] md2:w-full" />
				</header>
				{/* Feedback introdutório */}
				<div className="flex gap-10 mt-32 md2:flex-col ">
					<div className="p-16 shadow-xs w-[215px] rounded md2:w-full">
						<h3 className="font-bold text-primary-pure tracking-[3%] ">Presenças</h3>
						<p>16</p>
					</div>
					<div className="p-16 shadow-xs w-[215px] rounded md2:w-full">
						<h3 className="font-bold text-primary-pure tracking-[3%]">Faltas Justificadas</h3>
						<p>8</p>
					</div>
					<div className="p-16 shadow-xs w-[215px] rounded md2:w-full">
						<h3 className="font-bold text-primary-pure tracking-[3%]">Faltas não Justificadas</h3>
						<p>12</p>
					</div>
				</div>

				{/* CHART */}
				<div className="mt-32 pb-40 border-transparent border border-b-neutral-30">
					<Charts options={options} series={series} type="bar" height={380} />
				</div>

				<div className="mt-20 tabs-container">
					<Tabs>
						<TabList >
							<Tab>Abertas</Tab>
							<Tab>Concluídas</Tab>
							{/* <div className="w-full h-1 bg-neutral-70 -mt-8"></div> */}
						</TabList>

						<TabPanel>
							<table className="border border-neutral-20  w-full" >
								<thead className="h-48 text-left bg-neutral-20">
									<tr className="w-full whitespace-nowrap">
										<th className="px-16 pl-8 md2:py-12" >Atividade</th>
										<th className="px-16 pl-8 md2:py-12">Categoria</th>
										<th className="px-16 pl-8 md2:py-12">Status %</th>
										<th className="px-16 pl-8 md2:py-12">Hora prevista</th>

									</tr>
								</thead>
								<tbody className="">
									{
										OBJTABS.filter(ativ => ativ.status < 100).map(ativ => (
											<tr className="h-48 border border-transparent border-b-neutral-30 last:border-b-0">
												<td className="px-16 pl-8 md2:py-12" >{ativ.atividade}</td>
												<td className="px-16 pl-8 md2:py-12" >{ativ.categoria}</td>
												<td className="px-16 pl-8 md2:py-12" >{ativ.status}%</td>
												<td className="px-16 pl-8 md2:py-12" >{ativ.entrega}</td>
											</tr>
										))
									}
								</tbody>


							</table>
						</TabPanel>

						<TabPanel>
							<table className="border border-neutral-20  w-full" >
								<thead className="h-48 text-left bg-neutral-20">
									<tr className="w-full whitespace-nowrap">
										<th className="px-16 pl-8 md2:py-12" >Atividade</th>
										<th className="px-16 pl-8 md2:py-12">Categoria</th>
										<th className="px-16 pl-8 md2:py-12">Status %</th>
										<th className="px-16 pl-8 md2:py-12">Hora prevista</th>

									</tr>
								</thead>
								<tbody className="">
									{
										OBJTABS.filter(ativ => ativ.status === 100).map(ativ => (
											<tr className="h-48 border border-transparent border-b-neutral-30 last:border-b-0">
												<td className="px-16 pl-8 md2:py-12" >{ativ.atividade}</td>
												<td className="px-16 pl-8 md2:py-12" >{ativ.categoria}</td>
												<td className="px-16 pl-8 md2:py-12" >{ativ.status}%</td>
												<td className="px-16 pl-8 md2:py-12" >{ativ.entrega}</td>
											</tr>
										))
									}
								</tbody>


							</table>
						</TabPanel>
					</Tabs>
				</div>
			</Card>
		</div>
	)
}

export default AnaliseDesempenho