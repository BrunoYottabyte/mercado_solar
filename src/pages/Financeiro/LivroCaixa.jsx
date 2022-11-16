import React, {useEffect} from 'react';
import Button from '../../components/DesignSystem/Button';
import {Card} from '../../components/DesignSystem/Card';
import {Title} from '../../components/DesignSystem/Headings';
import SvgUse from '../../components/svg/svgUse';
import Charts from 'react-apexcharts';
import Table from '../../components/DesignSystem/Table';
import Dropdowns from '../../components/DesignSystem/Dropdowns';
import DropdownItem from '../../components/DesignSystem/Dropdowns/DropdownItem';
import DropdownContainer from '../../components/DesignSystem/Dropdowns/DropdownContainer';
import {SelectComponent} from '../../components/DesignSystem/SelectComponent';
import {useState} from 'react';
import {InputDate} from '../../components/DesignSystem/InputDate';
import {GlobalFilter} from '../../components/DesignSystem/Table/GlobalFilter';
import {api} from '../../services/api';

const LivroCaixa = () => {
	const [inputs, setInputs] = useState([]);
	const series = [
		{
			name: 'Receitas',
			data: [150, 300, 400, 580, 770],
		},
		{
			name: 'Despesas',
			data: [0, 0, 120, 0, 200],
		},
	];
	const options = {
		chart: {
			height: 350,
			type: 'line',
			dropShadow: {
				enabled: true,
				color: '#000',
				top: 18,
				left: 7,
				blur: 10,
				opacity: 0.2,
			},
			toolbar: {
				show: false,
			},
			zoom: false,
			offsetY: 10,
		},
		colors: ['rgba(28, 192, 102, 1)', 'rgba(236, 53, 57, 1)'],
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
			width: [2, 2],
		},
		grid: {
			show: true,
			borderColor: '#E9ECEF',
			strokeDashArray: 0,
			// position: 'back',
			xaxis: {
				lines: {
					show: true,
				},
			},
			yaxis: {
				lines: {
					show: true,
				},
			},
		},
		xaxis: {
			categories: ['05/2022', '06/2022', '07/2022', '08/2022', '09/2022'],
		},
		yaxis: {
			// min: 5,
			// max: 40
		},
		markers: {
			size: 3,
			strokeColors: '',
			hover: {
				size: 3,
			},
		},
		legend: {
			show: true,

			position: 'top',
			horizontalAlign: 'left',
			floating: true,
			offsetY: -22,
			formatter: function (seriesName, opts) {
				console.log(seriesName);
				if (seriesName === 'Receitas') {
					return `<div class="markerCustom">
                            <svg><use xlink:href="#icon-green-legend"></use></svg>
                            ${seriesName}
                        </div>
                    `;
				}
				if (seriesName === 'Despesas') {
					return `
                        <div class="markerCustom">
                            <svg><use xlink:href="#icon-red-legend"></use></svg>
                            ${seriesName}
                        </div>
                     `;
				}
			},
			markers: {
				width: 0,
				height: 0,
			},
		},
		responsive: [
			{
				breakpoint: 1000,
				options: {
					chart: {
						width: '105%',
						offsetX: -15,
					},
					xaxis: {
						labels: {
							style: {
								fontSize: '8.5px',
							},
						},
					},
					yaxis: {
						labels: {
							style: {
								fontSize: '8.5px',
							},
						},
					},
					markers: {
						size: 2,
						strokeColors: '',
						hover: {
							size: 2,
						},
					},
					legend: {
						fontSize: '10.5px',
					},
				},
			},
		],
	};

	const series2 = [
		{
			name: 'series1',
			data: [0, 10, 20, 17, 23, 20, 25],
		},
	];

	const receitasOptions = {
		chart: {
			type: 'area',
			toolbar: false,
			offsetY: 45,
			offsetX: 12,
		},
		grid: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
			lineCap: 'square',
			width: 3,
		},
		xaxis: {
			show: false,
			labels: {
				show: false,
			},

			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
		},
		yaxis: {
			show: false,
			labels: {
				show: false,
			},
		},
		colors: ['rgba(28, 192, 102, 1)'],
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				inverseColors: false,
				opacityFrom: 0.7,
				opacityTo: 0.3,
			},
		},
		tooltip: {
			show: false,
		},
	};

	const despesasOptions = {
		chart: {
			type: 'area',
			toolbar: false,
			offsetY: 45,
			offsetX: 12,
		},
		grid: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
			lineCap: 'square',
			width: 3,
		},
		xaxis: {
			show: false,
			labels: {
				show: false,
			},

			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
		},
		yaxis: {
			show: false,
			labels: {
				show: false,
			},
		},
		colors: ['rgba(236, 53, 57, 1)'],
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				inverseColors: false,
				opacityFrom: 0.7,
				opacityTo: 0.7,
			},
		},
		tooltip: {
			show: false,
			// x: {
			//     format: 'dd/MM/yy HH:mm'
			// },
		},
	};

	const columns = [
		{
			Header: 'Data de vencimento',
			accessor: 'expected_date',
		},
		{
			Header: 'Data de pagamento',
			accessor: 'payment_date',
		},
		{
			Header: 'Origem',
			accessor: 'provider',
		},
		{
			Header: 'Destino',
			accessor: 'destino',
		},
		{
			Header: 'Valor',
			accessor: 'value',
		},
	];

	const data = [
		{
			unidade: 'TESTE',
			contabil: 'Conta MR Sistemas RJ',
			vencimento: '16/07/2022',
			pagamento: '16/06/2022',
			tipo: 'Receita',
			descrição: 'Parcela de tal pedido',
			origem: 'MR Sistemas',
			destino: 'Itaú',
			valor: '4.054.024,04',
		},
		{
			unidade: 'Brasil - Rio de Janeiro',
			contabil: 'Conta MR Sistemas RJ',
			vencimento: '16/07/2022',
			pagamento: '16/06/2022',
			tipo: 'Receita',
			descrição: 'Parcela de tal pedido',
			origem: 'MR Sistemas',
			destino: 'Itaú',
			valor: '4.054.024,04',
		},
		{
			unidade: 'Brasil - Rio de Janeiro',
			contabil: 'Conta MR Sistemas RJ',
			vencimento: '16/07/2022',
			pagamento: '16/06/2022',
			tipo: 'Receita',
			descrição: 'Parcela de tal pedido',
			origem: 'MR Sistemas',
			destino: 'Itaú',
			valor: '4.054.024,04',
		},
		{
			unidade: 'Brasil - Rio de Janeiro',
			contabil: 'Conta MR Sistemas RJ',
			vencimento: '16/07/2022',
			pagamento: '16/06/2022',
			tipo: 'Receita',
			descrição: 'Parcela de tal pedido',
			origem: 'MR Sistemas',
			destino: 'Itaú',
			valor: '4.054.024,04',
		},
		{
			unidade: 'Brasil - Rio de Janeiro',
			contabil: 'Conta MR Sistemas RJ',
			vencimento: '16/07/2022',
			pagamento: '16/06/2022',
			tipo: 'Receita',
			descrição: 'Parcela de tal pedido',
			origem: 'MR Sistemas',
			destino: 'Itaú',
			valor: '4.054.024,04',
		},
		{
			unidade: 'Brasil - Rio de Janeiro',
			contabil: 'Conta MR Sistemas RJ',
			vencimento: '16/07/2022',
			pagamento: '16/06/2022',
			tipo: 'Receita',
			descrição: 'Parcela de tal pedido',
			origem: 'MR Sistemas',
			destino: 'Itaú',
			valor: '4.054.024,04',
		},
		{
			unidade: 'Brasil - Rio de Janeiro',
			contabil: 'Conta MR Sistemas RJ',
			vencimento: '16/07/2022',
			pagamento: '16/06/2022',
			tipo: 'Receita',
			descrição: 'Parcela de tal pedido',
			origem: 'MR Sistemas',
			destino: 'Itaú',
			valor: '4.054.024,04',
		},
		{
			unidade: 'Brasil - Rio de Janeiro',
			contabil: 'Conta MR Sistemas RJ',
			vencimento: '16/07/2022',
			pagamento: '16/06/2022',
			tipo: 'Receita',
			descrição: 'Parcela de tal pedido',
			origem: 'MR Sistemas',
			destino: 'Itaú',
			valor: '4.054.024,04',
		},
		{
			unidade: 'Brasil - Rio de Janeiro',
			contabil: 'Conta MR Sistemas RJ',
			vencimento: '16/07/2022',
			pagamento: '16/06/2022',
			tipo: 'Receita',
			descrição: 'Parcela de tal pedido',
			origem: 'MR Sistemas',
			destino: 'Itaú',
			valor: '4.054.024,04',
		},
		{
			unidade: 'Brasil - Rio de Janeiro',
			contabil: 'Conta MR Sistemas RJ',
			vencimento: '16/07/2022',
			pagamento: '16/06/2022',
			tipo: 'Receita',
			descrição: 'Parcela de tal pedido',
			origem: 'MR Sistemas',
			destino: 'Itaú',
			valor: '4.054.024,04',
		},
		{
			unidade: 'Brasil - Rio de Janeiro',
			contabil: 'Conta MR Sistemas RJ',
			vencimento: '16/07/2022',
			pagamento: '16/06/2022',
			tipo: 'Receita',
			descrição: 'Parcela de tal pedido',
			origem: 'MR Sistemas',
			destino: 'Itaú',
			valor: '4.054.024,04',
		},
		{
			unidade: 'Brasil - Rio de Janeiro',
			contabil: 'Conta MR Sistemas RJ',
			vencimento: '16/07/2022',
			pagamento: '16/06/2022',
			tipo: 'Receita',
			descrição: 'Parcela de tal pedido',
			origem: 'MR Sistemas',
			destino: 'Itaú',
			valor: '4.054.024,04',
		},
		{
			unidade: 'Brasil - Rio de Janeiro',
			contabil: 'Conta MR Sistemas RJ',
			vencimento: '16/07/2022',
			pagamento: '16/06/2022',
			tipo: 'Receita',
			descrição: 'Parcela de tal pedido',
			origem: 'MR Sistemas',
			destino: 'Itaú',
			valor: '4.054.024,04',
		},
	];

	const dataSelect = [
		{
			value: 'recentes',
			label: 'Recentes',
		},
		{
			value: 'antigos',
			label: 'Antigos',
		},
	];
	const [selected, setSelected] = useState();

	const dataReceita = [
		{
			value: 'receita',
			label: 'Receita',
		},
		{
			value: 'despesa',
			label: 'Despesa',
		},
	];

	const [receita, setReceita] = useState();

	const dataContabil = [
		{
			value: 'mr',
			label: 'MR sistemas',
		},
		{
			value: 'siqueiras',
			label: 'Siqueiras',
		},
	];

	const [contabil, setContabil] = useState();

	const dataBanco = [
		{
			value: 'itau',
			label: 'Itaú',
		},
		{
			value: 'bradesco',
			label: 'Bradesco',
		},
	];
	const [banco, setBanco] = useState();

	const dataUnidade = [
		{
			value: 'rio',
			label: 'Centro - Rio de Janeiro',
		},
		{
			value: 'botafogo',
			label: 'Botafogo',
		},
		{
			value: 'raca',
			label: 'Flamengo',
		},
	];
	const [unidade, setUnidade] = useState();

	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();

	const [inputUnidade, setInputUnidade] = useState();

	const handleClick = () => {
		let datePickerArr = [
			...document.querySelectorAll('.datepicker-container.caixa-geral'),
		];

		datePickerArr.map(datePicker => {
			if (datePicker.querySelector('.react-datepicker-ignore-onclickoutside')) {
				datePicker.classList.add('!z-[999]');
			} else {
				datePicker.classList.remove('!z-[999]');
			}
		});
	};

	const overrideDatePicker = () => {
		let arrSelects = [
			...document.querySelectorAll('.dropdown-body .select-container'),
		];
		let last = arrSelects[arrSelects.length - 1];
		last.classList.add('z-[999]');
	};

	const onClose = () => {
		let arrSelects = [
			...document.querySelectorAll('.dropdown-body .select-container'),
		];
		let last = arrSelects[arrSelects.length - 1];
		last.classList.remove('z-[999]');
	};

	const closeFilter = () => {
		document.querySelector('.dropdowns-container').classList.remove('active');
	};

	const openFilter = () => {
		document.querySelector('.dropdowns-container').classList.add('active');
	};

	// HEADER PERSONALIZADO
	const HeaderLivroCaixa = ({filter, setFilter, pageSize, setPageSize}) => {
		return (
			<div className="flex justify-between mb-24 md2:flex-col md2:gap-16">
				<GlobalFilter
					classe="min-w-[22rem] md2:min-w-[0rem] md2:min-w-full"
					placeholder={'Pesquise por nome, tipo...'}
					filter={filter}
					setFilter={setFilter}
				/>

				<div className="ml-32 md:ml-0 flex items-center gap-8 md:self-end">
					<SelectComponent
						classe="md min-w-[4.625rem]"
						data={[10, 25, 50].map(v => ({value: v, label: v}))}
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
		);
	};

	useEffect(() => {
		api
			.get('cash_book/')
			.then(response => {
				setInputs(response.data.results);
			})
			.catch(() => {});
	}, []);

	return (
		<div className="container">
			<Card classe="my-64 px-24 py-32">
				<header className="flex justify-between md2:flex-col md2:gap-16 mb-20">
					<Title classe="text-neutral-90 gap-8 font-medium">
						<div>
							<div className="flex items-center gap-8">
								<SvgUse id="#icon-title-caixa-geral" classe="w-20" />
								<p className="block text-neutral-90 font-medium">
									Livro caixa-geral
								</p>
							</div>
						</div>
					</Title>

					<div className="flex items-center gap-16">
						<Dropdowns>
							<DropdownItem classe="h-40">
								<Button
									iconID="#icon_config_filter"
									classe="secondary"
									onClick={openFilter}>
									Filtrar
								</Button>
							</DropdownItem>

							<DropdownContainer classe="!max-w-[370px] md:left-0 md:!w-[85vw] md2:!w-[85vw] !w-[370px] !p-0 rounded-tr-md rounded-tl-md mt-4 shadow-sm border border-neutral-30">
								<div className="flex flex-col gap-16 p-16 w-[370px] md:!w-[85vw] md2:!w-[85vw] max-w-[370px]">
									<label className="text-neutral-80 font-medium">
										Agrupar por período
										<SelectComponent
											setStateCurrent={setSelected}
											state={selected}
											data={dataSelect}
											classe="w-full"
										/>
									</label>

									<label className="text-neutral-80 font-medium">
										Receita/despesa
										<SelectComponent
											setStateCurrent={setReceita}
											state={receita}
											data={dataReceita}
											classe="w-full"
										/>
									</label>

									<label className="text-neutral-80 font-medium">
										Conta contábil
										<SelectComponent
											setStateCurrent={setContabil}
											state={contabil}
											data={dataContabil}
											classe="w-full"
										/>
									</label>

									<label className="text-neutral-80 font-medium">
										Banco
										<SelectComponent
											setStateCurrent={setBanco}
											state={banco}
											data={dataBanco}
											classe="w-full"
										/>
									</label>

									<div
										onClick={handleClick}
										className="text-neutral-80 font-medium">
										Unidade
										<SelectComponent
											setStateCurrent={setUnidade}
											state={unidade}
											data={dataUnidade}
											classe="w-full  relative unidade"
											onMenuOpen={overrideDatePicker}
											onMenuClose={onClose}
										/>
									</div>

									<div className="flex gap-16 ">
										<div
											onClick={handleClick}
											className="text-neutral-80 font-medium">
											De
											<InputDate
												classe="w-full"
												containerClass="w-[100%] z-[20] caixa-geral"
												startDate={startDate}
												setStartDate={setStartDate}
												placeholder="dd/mm/aaaa"
											/>
										</div>

										<div
											className="text-neutral-80 font-medium"
											onClick={handleClick}>
											Até
											<InputDate
												classe="w-full"
												containerClass="w-[100%] z-[20] caixa-geral"
												startDate={startDate}
												setStartDate={setStartDate}
												placeholder="dd/mm/aaaa"
											/>
										</div>
									</div>

									{/* <p className='text-neutral-70 font-semibold text-center'>* Os filtros são referentes à data de pagamento*</p> */}

									<div className="mt-24 flex gap-16">
										<Button
											classe="btn-cancel secondary !h-48 flex-1 justify-center"
											onClick={() => {
												closeFilter();
											}}>
											Cancelar
										</Button>

										<Button classe="!h-48 flex-1 justify-center">
											Filtrar
										</Button>
									</div>
								</div>
							</DropdownContainer>
						</Dropdowns>
						<p className="font-medium text-primary-pure cursor-pointer">
							Limpar filtros
						</p>
					</div>
				</header>

				<div className="flex gap-24 md2:flex-col overflow-hidden">
					<div className="flex-1">
						<Charts options={options} series={series} height={400} />
					</div>
					<div className="flex flex-col gap-8 w-[272px] md2:flex-row md2:w-full md:flex-col">
						<div className="md2:flex-1 h-max flex gap-16 relative border min-h-[130px] max-h-[130px] border-neutral-20 rounded-md shadow overflow-hidden">
							<div className="w-[50%] flex items-center">
								<div className="absolute px-24 bg-[#fff]">
									<h1 className="tracking-wider text-alert-green font-bold mb-16">
										RECEITAS
									</h1>
									<p className="flex gap-8">
										<span className="text-neutral-70 font-semibold">R$</span>
										<span className="text-neutral-90 text-2xl"> 10.000,00</span>
									</p>
								</div>
							</div>
							<div className="!flex-[70%]">
								<Charts
									options={receitasOptions}
									series={series2}
									height={100}
									type="area"
								/>
							</div>
						</div>

						<div className="md2:flex-1 h-max flex gap-16 relative border min-h-[130px] max-h-[130px] border-neutral-20 rounded-md shadow overflow-hidden">
							<div className="w-[50%] flex items-center">
								<div className="absolute px-24 bg-[#fff]">
									<h1 className="tracking-wider text-alert-red-100 font-bold mb-16">
										DESPESAS
									</h1>
									<p className="flex gap-8">
										<span className="text-neutral-70 font-semibold">R$</span>
										<span className="text-neutral-90 text-2xl"> 100,00</span>
									</p>
								</div>
							</div>
							<div className="!flex-[70%]">
								<Charts
									options={despesasOptions}
									series={series2}
									height={100}
									type="area"
								/>
							</div>
						</div>

						<div className="md2:flex-1 h-max flex gap-16 relative border min-h-[130px] max-h-[130px] border-neutral-20 rounded-md shadow overflow-hidden">
							<div className="w-[50%] flex items-center">
								<div className="absolute px-24 bg-[#fff]">
									<h1 className="tracking-wider text-primary-pure font-bold mb-16">
										SALDO
									</h1>
									<p className="flex gap-8">
										<span className="text-neutral-70 font-semibold">R$</span>
										<span className="text-neutral-90 text-2xl">9.900,00</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-32">
					<Table
						options={{
							download: false,
							headerChildren: true,
						}}
						HeaderCustom={HeaderLivroCaixa}
						arrData={inputs}
						arrColumns={columns}
					/>
				</div>
			</Card>
		</div>
	);
};

export default LivroCaixa;
