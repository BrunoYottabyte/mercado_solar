import moment from "moment/moment";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../../../../components/DesignSystem/Card";
import { Title } from "../../../../components/DesignSystem/Headings";
import { InputDate } from "../../../../components/DesignSystem/InputDate";
import { SelectComponent } from "../../../../components/DesignSystem/SelectComponent";
import Table from "../../../../components/DesignSystem/Table";
import { GlobalFilter } from "../../../../components/DesignSystem/Table/GlobalFilter";
import SvgUse from "../../../../components/svg/svgUse";
import { api } from "../../../../services/api";
import { GLOBAL } from "../../../../utils/GLOBAL";

const columns = [
	{
		Header: () => (
			<h2 className="font-semibold text-sm text-neutral-80">Produtos</h2>
		),
		accessor: "produto",
		Cell: (v) => (
			<div className="flex gap-10 items-center">
				<SvgUse id="#icon-eggs" classe="w-18 h-18" />{" "}
				<SvgUse id="#icon-milk" classe="w-18 h-18" />
				<p className="text-sm text-neutral-80 font-normal">{v.value}</p>
			</div>
		),
	},
	{
		Header: "Unidade de Compra",
		accessor: "unidade_compra",
	},
	{
		Header: "Qnt. por Embalagem",
		accessor: "qtd_embalagem",
	},
	{
		Header: "Custo por embalagem",
		accessor: "custo_embalagem",
	},
	{
		Header: "Custo/Medida",
		accessor: "custo_kg",
	},
	{
		Header: "Data",
		accessor: "data_criacao",
	},
	{
		Header: "Custo total",
		accessor: "preco",
	},
	{
		Header: () => <p className="text-center">NF</p>,
		accessor: "nf",
		noFilter: true,
		classTH: "not-filter",
		Cell: (v) => (
			<SvgUse
				id="#icon-download"
				classe="w-32 h-32 transition-all duration-300 hover:brightness-90"
			/>
		),
	},
	{
		Header: "Opções",
		accessor: "options",
		noFilter: true,
		classTH: "not-filter",
		Cell: (v) => (
			<div className="flex gap-8 ">
				<SvgUse
					id="#icon-edit"
					classe="w-32 h-32 transition-all duration-300 hover:brightness-90"
				/>{" "}
				<SvgUse
					id="#icon-search-estoque"
					classe="w-32 h-32 transition-all duration-300 hover:brightness-90"
				/>
			</div>
		),
	},
];

const Estoque = () => {
	//general itens in stock
	const [dataInitial, setDataInitial] = useState([]);

	const [product, setProduct] = useState(null);
	const [optionSelect, setOptionSelect] = useState(null);
	// Options Stock
	const [optionsStock, setOptionsStock] = useState(null);

	// Stock Selected
	const [stockSelected, setStockSelect] = useState(null);
	const [dashIntroduction, setDashIntroduction] = useState({});

	const countTotalPerCategories = (arr) => {
		return arr.reduce((ac, va) => {
			ac[va.status] ? ac[va.status] : ac[va.status] = 0;
			ac[va.status]++
		
			return ac;
		}, {})
	}

	const initRequest = async () => {
		// General itens - First Request
		const { data: itens } = await api.get("/api/item_estoque");
		setDataInitial(
			itens.map((obj) => ({
				...obj.produto,
				produto: obj.produto.nome,
				data_criacao: moment(obj.produto.data_criacao).format('DD-MM-YYYY'),
				qtd_embalagem: obj.quantidade,
			}))
		);

		setDashIntroduction(countTotalPerCategories(itens))

		// Categories Filter Stock
		const { data: estoques } = await api.get("/api/estoque");
	
		setOptionsStock(
			estoques.map((obj) => ({ value: obj.id, label: obj.nome }))
		);
	};

	useEffect(() => {
		initRequest();
	}, []);

	useEffect(() => {
		if(stockSelected){
			api.get(`/api/estoque/${stockSelected}`).then(({ data }) => {
				setDataInitial(
					data.itemestoque_set.map((obj) => ({
						...obj.produto,
						qtd_embalagem: obj.quantidade,
					}))
				);
				setDashIntroduction(countTotalPerCategories(data.itemestoque_set))
			});
		}
	}, [stockSelected]);

	// HEADER PERSONALIZADO
	const dataFilterPor = [
		{ value: "recentes", label: "Mais Recentes" },
		{ value: "antiga", label: "Mais Antigas" },
	];
	const [filterPor, setFilterPor] = useState();
	const [startDate, setStartDate] = useState();

	// Iniciando com valores mais recentes
	useEffect(() => {
		const arrUpdated = GLOBAL.recentDate("data", dataInitial);
		setFilterPor(dataFilterPor[0].value);
		setDataInitial([...arrUpdated]);
	}, []);

	const HeaderEstoque = ({ filter, setFilter, pageSize, setPageSize }) => {
		return (
			<div className="flex justify-between mb-24 md2:flex-col md2:gap-16">
				<GlobalFilter
					classe="min-w-[22rem] md2:min-w-[0rem] md2:min-w-full"
					placeholder={"Pesquise por nome, tipo..."}
					filter={filter}
					setFilter={setFilter}
				/>

				<div className="flex md:flex-col md:gap-16">
					<label className="inline-flex gap-8  items-center select-none md2:flex-1">
						<p className="text-sm font-medium text-neutral-80 md2:hidden">
							Filtrar por
						</p>

						<SelectComponent
							classe="md min-w-[16rem] md2:min-w-[0] md2:w-full"
							data={dataFilterPor}
							setStateCurrent={setFilterPor}
							onChange={(e) => {
								if (e.value == "antiga") {
									const arrUpdated = GLOBAL.oldDate("data_criacao", dataInitial);
									setFilterPor(e.value);
									setDataInitial([...arrUpdated]);
								} else {
									const arrUpdated = GLOBAL.recentDate("data_criacao", dataInitial);
									setFilterPor(e.value);
									setDataInitial([...arrUpdated]);
								}
							}}
							state={filterPor}
							value={filterPor}
							placeholder={"Mais recentes"}
						/>
					</label>
					{/* <InputDate
						containerClass="ml-8 md:ml-0 md2:flex-1"
						setStartDate={setStartDate}
						startDate={startDate}
						placeholderText={"Válido até"}
						noIcon={true}
						arrowIcon={true}
					/> */}
					<div className="ml-32 flex items-center gap-8 md:self-end">
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
		);
	};

	return (
		<div className="container ">
			<Card classe="my-64 px-24 py-32">
				<header className="flex justify-between md2:flex-col md2:gap-16">
					<Title classe="text-neutral-90 flex gap-8 font-medium">
						<SvgUse id="#icon-estoque" />
						Estoque
					</Title>
					<div className="flex items-center gap-8">
						<span className="font-semibold text-sm  text-neutral-80 ">
							Visualizar estoque do
						</span>
						<SelectComponent
							classeSelect="select-tela-estoque"
							classe="md2:flex-1"
							placeholder="Nome do estoque"
							data={optionsStock ? optionsStock : []}
							state={stockSelected}
							setStateCurrent={setStockSelect}
						/>
					</div>
				</header>

				{/* Informação introdutória */}
				<div className="mt-[36px] flex gap-10 md2:flex-col">
					<Card
						classe={
							"p-16 relative overflow-hidden w-[200px] md2:w-full md2:text-center"
						}
					>
						<div className="flex items-center md2:justify-center">
							<p className="w-12 h-12 rounded-xl bg-primary-pure absolute -left-[.3125rem]"></p>{" "}
							<p className="text-primary-pure font-bold text-xs">
								COMPRA PRÓXIMA
							</p>
						</div>
						<h1 className="text-2xl text-neutral-90 font-normal">{dashIntroduction.compra_proxima || 0}</h1>
					</Card>
					<Card
						classe={
							"p-16 relative overflow-hidden w-[200px] md2:w-full  md2:text-center"
						}
					>
						<div className="flex items-center  md2:justify-center">
							<p className="w-12 h-12 rounded-xl bg-primary-pure absolute -left-[.3125rem]"></p>{" "}
							<p className="text-primary-pure font-bold text-xs">
								ABAIXO DO NÍVEL
							</p>
						</div>
						<h1 className="text-2xl text-neutral-90 font-normal">{dashIntroduction.abaixo_nivel || 0}</h1>
					</Card>
					<Card
						classe={
							"p-16 relative overflow-hidden w-[200px] md2:w-full  md2:text-center"
						}
					>
						<div className="flex items-center  md2:justify-center">
							<p className="w-12 h-12 rounded-xl bg-primary-pure absolute -left-[.3125rem]"></p>{" "}
							<p className="text-primary-pure font-bold text-xs">EM FALTA</p>
						</div>
						<h1 className="text-2xl text-neutral-90 font-normal">{dashIntroduction.em_falta || 0}</h1>
					</Card>
					<Card
						classe={
							"p-16 relative overflow-hidden w-[200px] md2:w-full  md2:text-center"
						}
					>
						<div className="flex items-center  md2:justify-center">
							<p className="w-12 h-12 rounded-xl bg-primary-pure absolute -left-[.3125rem]"></p>{" "}
							<p className="text-primary-pure font-bold text-xs">OK</p>
						</div>
						<h1 className="text-2xl text-neutral-90 font-normal">{dashIntroduction.ok || 0}</h1>
					</Card>
				</div>

				<main className="mt-32 ">
					<Table
						options={{
							download: true,
							headerChildren: true,
						}}
						HeaderCustom={HeaderEstoque}
						arrData={dataInitial}
						arrColumns={columns}
					/>
				</main>
			</Card>
		</div>
	);
};

export default Estoque;
