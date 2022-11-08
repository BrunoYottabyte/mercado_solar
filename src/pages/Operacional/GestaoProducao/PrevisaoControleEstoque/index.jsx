
import React from 'react'
import {Link} from 'react-router-dom'
import Badge from '../../../../components/DesignSystem/Badge'
import Button from '../../../../components/DesignSystem/Button'
import { Card } from '../../../../components/DesignSystem/Card'
import { Title } from '../../../../components/DesignSystem/Headings'
import { Modal } from '../../../../components/DesignSystem/Modal/Modal'
import { ModalContent } from '../../../../components/DesignSystem/Modal/ModalContent'
import { ModalHeader } from '../../../../components/DesignSystem/Modal/ModalHeader'
import Table from '../../../../components/DesignSystem/Table'
import SvgUse from '../../../../components/svg/svgUse'
import { useGlobalContext } from '../../../../context/GlobalContext'
import Charts from 'react-apexcharts';
import { GlobalFilter } from '../../../../components/DesignSystem/Table/GlobalFilter'
import { useState } from 'react'
import { InputDate } from '../../../../components/DesignSystem/InputDate'
import { SelectComponent } from '../../../../components/DesignSystem/SelectComponent'
import { api } from '../../../../services/api'
import { useEffect } from 'react'


const data = [
	{
		produto: 'Farinha de Trigo',
		unidade: 'Kilograma',
		estoque: '12.000',
		consumoPrev: 10058,
		status: 'Insuficiente',
		options: '',
	},
	{

		produto: 'Farinha de Trigo',
		unidade: 'Kilograma',
		estoque: '12.000',
		consumoPrev: 10058,
		status: 'Suficiente',
		options: '',
	},
	{

		produto: 'Farinha de Trigo',
		unidade: 'Kilograma',
		estoque: 12.000,
		consumoPrev: 10058,
		status: 'Suficiente',
		options: '',
	},
	{

		produto: 'Farinha de Trigo',
		unidade: 'Kilograma',
		estoque: 12.000,
		consumoPrev: 10058,
		status: 'Suficiente',
		options: '',
	},
	{

		produto: 'Farinha de Trigo',
		unidade: 'Kilograma',
		estoque: 12.000,
		consumoPrev: 10058,
		status: 'Preocupante',
		options: '',
	},
	{

		produto: 'Farinha de Trigo',
		unidade: 'Kilograma',
		estoque: 12.000,
		consumoPrev: 10058,
		status: 'Preocupante',
		// options: '',
	},
]
const columns = [
	{
		Header: () => <h2 className="font-semibold text-sm text-neutral-80 w-full">Matéria prima</h2>,
		accessor: "nome",
	},
	{
		Header: "Unidade",
		accessor: "unidade_venda",
	},
	{
		Header: "Em estoque",
		accessor: "em_estoque",
	},
	{
		Header: "Consumo previsto",
		accessor: "consumoPrev",
	},
	{
		Header: "Status",
		accessor: "status",
		Cell: (v) => {
			switch (v.value) {
				case 'Insuficiente':
					return <Badge classe="text-alert-warning-100 font-medium bg-alert-warning-10" title={v.value} />
				case 'Suficiente':
					return <Badge classe="text-alert-green font-medium bg-alert-green/10" title={v.value} />
				case 'Preocupante':
					return <Badge classe="text-alert-red-100 font-medium " title={v.value} />
					// bg-alert-red-100/10
				default:
					return <Badge classe="text-alert-red-100 font-medium " title={v.value} />
										// bg-alert-red-100/10
					break;
			}
		}
	},
	{
		Header: "Opções",
		accessor: "options",
		noFilter: true,
		classTH: 'not-filter',
		Cell: (v) => 
		<div className='flex gap-8'>
			<SvgUse id="#icon-edit" classe="w-32 h-32 transition-all duration-300 hover:brightness-90"  />
			 <SvgUse id="#icon-search-estoque" classe="w-32 h-32 transition-all duration-300 hover:brightness-90" onClick={() => setmodalOpen({open: true, id:"confirm"})} /></div>
	},


];

const PrevisaoControleEstoque = () => {
const { setmodalOpen } = useGlobalContext();
const [dataInitial, setDataInitial] = useState([]);
const requestMateriasPrimas = async () => {
		const { data } = await api.get('/api/producao/materias_primas');
		console.log(data);
		// Iniciando com valores mais recente
		setDataInitial(data)
}

	useEffect(() => {
		requestMateriasPrimas();
	}, [])

/////////////////////////// CHARTS //////////////////////////
const series = [{
	name: 'Cash Flow',
	data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07]
}]
const options = {
	chart: {
		type: 'bar',
		height: 350,
			width: '100%',
		toolbar: {
			show: false
		}
	},
	plotOptions: {
		bar: {
			borderRadius: 6,
			colors: {
				ranges: [{
					from: 0,
					to: 100,
					color: '#1A2E77'
				}, {
					from: -100,
					to: 0,
					color: '#1A2E77'
				}]
			},
			columnWidth: '80%',
		}
	},
	dataLabels: {
		enabled: false,
	},
	yaxis: {
		// title: {
		// 	text: 'Growth',
		// },
		labels: {
			formatter: function (y) {
				return y.toFixed(0) + "%";
			}
		},
		offsetX: -28
	},
	xaxis: {
		type: 'text',
		categories: [
			'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
			'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',
		],
		labels: {
			rotate: -90
		}
	}
}
////////////////////////// END CHARTS /////////////////////////////////

///////// HEADER PERSONALIZADO ///////////////////

	const [startDate, setStartDate] = useState();

const HeaderPrevisaoControleEstoque = ({ filter, setFilter, pageSize, setPageSize }) => {
	return (
		<div className='flex justify-between mb-24 md2:flex-col md2:gap-16'>
			<GlobalFilter
				classe="min-w-[22rem] md2:min-w-[0rem] md2:min-w-full"
				placeholder={"Pesquise por nome, tipo..."}
				filter={filter}
				setFilter={setFilter}
			/>

			<div className='flex items-center md:flex-col md:gap-16'>
				<p>Filtrar por</p>
				<InputDate
					containerClass="ml-8 md:ml-0 md2:flex-1"
					setStartDate={setStartDate}
					startDate={startDate}
					placeholderText={"Selecione a data"}
					noIcon={true}
					arrowIcon={true}
				/>
				<div className='ml-32 flex items-center gap-8 md:self-end'>
			
					<SelectComponent
						classe="md min-w-[4.625rem]"
						data={[10, 25, 50].map((v) => ({ value: v, label: v }))}
						setStateCurrent={setPageSize}
						state={pageSize}
						value={pageSize}
						placeholder={pageSize}
					/>
					<p className="text-sm font-medium text-neutral-80">
						Linhas por página
					</p>
				</div>
			</div>
		</div>
	)
}

////////////////// END HEADER /////////////////////
	return (
		<>
			<Modal className={`w-[400px]  md2:max-w-[400px] md2:w-[95vw]`}>
				<ModalContent id="confirm">
					<ModalHeader text="Detalhes - Farinha de trigo" />

					<Charts series={series} options={options} type="bar" height={350} />
				
				</ModalContent>

				<ModalContent id="animation">
					<div className="p-24">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="120"
							height="120"
							fill="none"
							className="svg-animate-check mx-auto mb-24 mt-16"
							viewBox="0 0 120 120"
						>
							<path
								fill="#1a2e77"
								stroke="#e8eaf1"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="15"
								d="M7.5 60.128c0 28.634 23.212 51.847 51.847 51.847h1.306c28.634 0 51.847-23.213 51.847-51.847S89.287 8.281 60.653 8.281h-1.306C30.712 8.281 7.5 31.494 7.5 60.128z"
								className="path-1"
							></path>
							<path
								stroke="#fff"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="8"
								d="M45 60.13l11.25 11.086L75 52.738"
								className="path-2"
							></path>
						</svg>
						<p className="text-base font-semibold text-center mx-auto mt-8 text-primary-pure">
							Salvo com Sucesso
						</p>
						<Link to="/vendas-b2b/list" 
						// onClick={() => closeModal()}
						>
							<Button
								classe="mt-16 w-full h-56 text-center justify-center"
								svgClass="rotate-180"
								iconID="#icon_arrow_left"
							>
								Voltar para lista
							</Button>
						</Link>
					</div>
				</ModalContent>
			</Modal>
		<div className='container'>
			<Card classe="my-64 px-24 py-32">
				<header className='flex justify-between md2:flex-col md2:gap-16'>
					<Title classe="text-neutral-90 flex gap-8 font-medium">
						<SvgUse id="#icon-checklist-previsao-estoque" />
						Previsão e Controle de Estoque
					</Title>
				</header>
				{/* Informação introdutória */}
				<div className='mt-[36px]  flex gap-10 md2:flex-col'>
					<Card classe={'p-16 relative overflow-hidden w-[200px] md2:w-full md2:text-center'}>
						<div className="flex items-center md2:justify-center"><p className='w-12 h-12 rounded-xl bg-alert-green absolute -left-[.3125rem]'></p> <p className='text-alert-green font-bold text-xs'>SUFICIENTE</p></div>
						<h1 className='text-2xl text-neutral-90 font-normal'>15 <span className='font-normal text-sm text-neutral-70'>SKUs</span></h1>
					</Card>
					<Card classe={'p-16 relative overflow-hidden w-[200px] md2:w-full  md2:text-center'}>
						<div className="flex items-center  md2:justify-center"><p className='w-12 h-12 rounded-xl bg-alert-warning-100 absolute -left-[.3125rem]'></p> <p className='text-alert-warning-100 font-bold text-xs' >ABAIXO DO NÍVEL</p></div>
						<h1 className='text-2xl text-neutral-90 font-normal'>4 <span className='font-normal text-sm text-neutral-70'>SKUs</span></h1>
					</Card>
					<Card classe={'p-16 relative overflow-hidden w-[200px] md2:w-full  md2:text-center'}>
						<div className="flex items-center  md2:justify-center"><p className='w-12 h-12 rounded-xl  absolute -left-[.3125rem]'></p> <p className='text-alert-red-100 font-bold text-xs'>EM FALTA</p></div>
						{/* bg-alert-red-100 */}
						<h1 className='text-2xl text-neutral-90 font-normal'>1 <span className='font-normal text-sm text-neutral-70'>SKUs</span></h1>
					</Card>

				</div>

				<div className='mt-24'>
					<Table
						options={{
							download: true,
							headerChildren: true,
						}}
						HeaderCustom={HeaderPrevisaoControleEstoque}
						arrData={dataInitial}
						arrColumns={columns}
					/>
				</div>
			</Card>
		</div>
		</>
	)
}

export default PrevisaoControleEstoque