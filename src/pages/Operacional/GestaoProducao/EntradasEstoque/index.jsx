import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../../../../components/DesignSystem/Button";
import { Card } from "../../../../components/DesignSystem/Card";
import { Title } from "../../../../components/DesignSystem/Headings";
import { Modal } from "../../../../components/DesignSystem/Modal/Modal";
import { ModalContent } from "../../../../components/DesignSystem/Modal/ModalContent";
import { ModalHeader } from "../../../../components/DesignSystem/Modal/ModalHeader";
import { SelectComponent } from "../../../../components/DesignSystem/SelectComponent";
import Table from "../../../../components/DesignSystem/Table";
import SvgUse from "../../../../components/svg/svgUse";
import { useGlobalContext } from "../../../../context/GlobalContext";
import { Input } from "../../../../components/DesignSystem/Input";
import Upload from "../../../../components/DesignSystem/Upload";
import { GlobalFilter } from "../../../../components/DesignSystem/Table/GlobalFilter";
import { GLOBAL } from "../../../../utils/GLOBAL";
import { api } from "../../../../services/api";
import moment from "moment";

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
		Cell: (v) => moment(v.value).format("DD-MM-YYYY")
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


const EntradasEstoque = () => {
	const { setmodalOpen } = useGlobalContext();
	const [product, setProduct] = useState();
	const [filterSelect, setFilterSelect] = useState("recentes");

	const closeModal = () => {
		setmodalOpen({ open: false, id: false });
	};

	const openModal = () => {
		setmodalOpen({ open: true, id: "confirm" });
	};

	const [dataInitial, setDataInitial] = useState([]);

	const [inputStock, setInputStock] = useState(null);
	const [inputSelected, setInputSelected] = useState(null);
	const [outputStock, setOutputStock] = useState(null);
	const [outputSelected, setOutputSelected] = useState(null);

	const initRequest = async () => {
		// General itens - First Request
		const { data: itens } = await api.get("api/movimento_estoque/");

		setDataInitial(
			itens.map((obj) => ({
				...obj.produto,
				produto: obj.produto.nome,
				data_criacao: obj.produto.data_criacao,
				qtd_embalagem: obj.quantidade,
			}))
		);

		// Categories Filter Stock
		const { data: operacoes } = await api.get("/api/operacao_estoque");

		setInputStock(
			[...new Map([operacoes.map((obj) => ({
				value: obj.estoque_origem,
				label: obj.nome_estoque_origem,
			}))])].flat()
		);

		setOutputStock(
			[...new Map([operacoes.map((obj) => ({
				value: obj.estoque_destino,
				label: obj.nome_estoque_destino,
			}))])].flat()
		);
	};

	useEffect(() => {
		initRequest();
	}, []);


	useEffect(() => {
		if(inputSelected && outputSelected){
	
			api.get("/api/operacao_estoque").then(({data}) => {
				data = data.filter(item => item.estoque_origem == inputSelected && item.estoque_destino == outputSelected)

				setDataInitial(
					data.map((obj) => {
						return obj.movimentoestoque_set?.map(item => {
				
							return {
								...item.produto,
								produto: item.produto?.nome,
								data_criacao: item.produto.data_criacao,
								qtd_embalagem: item.quantidade,
							}
						})
					}).flat()
				);
				
			});
		}
	}, [inputSelected, outputSelected])


	////////////////// HEADER CUSTOMIZADO/////////////////////////////////////////////////
	const dataFilterPor = [
		{ value: "recentes", label: "Mais Recentes" },
		{ value: "antiga", label: "Mais Antigas" },
	];
	const [filterPor, setFilterPor] = useState();

	// Iniciando com valores mais recentes
	useEffect(() => {
		const arrUpdated = GLOBAL.recentDate("data", dataInitial);
		setFilterPor(dataFilterPor[0].value);
		setDataInitial([...arrUpdated]);
	}, []);

	const HeaderEntradasEstoque = ({
		filter,
		setFilter,
		pageSize,
		setPageSize,
	}) => {
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
									console.log(dataInitial)
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
		<>
			<Modal className={`w-[400px]  md2:max-w-[400px] md2:w-[95vw]`}>
				<ModalContent id="confirm">
					<ModalHeader text="Nova entrada de estoque" />

					<div className="p-24 flex flex-col gap-20">
						<div>
							<p className="font-semibold text-base text-neutral-90 mb-16">
								Informações da entrada de estoque
							</p>
							<label className="font-medium text-sm text-neutral-80">
								Produto
								<Input
									setStateCurrent={setProduct}
									placeholder="Digite aqui"
									state={product}
									classe="h-48"
								/>
							</label>
						</div>
						{/* 2 COLUNAS */}
						<div className="flex flex-col gap-20">
							<div className="flex">
								<label className="font-medium text-sm text-neutral-80 flex-1 mr-16">
									Unidade de compra
									<Input
										setStateCurrent={setProduct}
										placeholder="kg"
										state={product}
										classe="h-48"
									/>
								</label>
								<label className="font-medium text-sm text-neutral-80 flex-1">
									Qtd. por Embalagem
									<Input
										setStateCurrent={setProduct}
										placeholder="12.000"
										state={product}
										classe="h-48"
									/>
								</label>
							</div>
							<div className="flex">
								<label className="font-medium text-sm text-neutral-80 flex-1 mr-16">
									Fornecedor
									<Input
										setStateCurrent={setProduct}
										placeholder="kg"
										state={product}
										classe="h-48"
									/>
								</label>
								<label className="font-medium text-sm text-neutral-80 flex-1">
									Data
									<Input
										setStateCurrent={setProduct}
										placeholder="12.000"
										state={product}
										classe="h-48"
									/>
								</label>
							</div>
							<div className="flex">
								<label className="font-medium text-sm text-neutral-80 flex-1 mr-16">
									Embalagens
									<Input
										setStateCurrent={setProduct}
										placeholder="kg"
										state={product}
										classe="h-48"
									/>
								</label>
								<label className="font-medium text-sm text-neutral-80 flex-1">
									Custo total
									<Input
										setStateCurrent={setProduct}
										placeholder="12.000"
										state={product}
										classe="h-48"
									/>
								</label>
							</div>
						</div>
						<div>
							<p className="text-neutral-80 font-semibold text-sm">
								Nota fiscal
							</p>
							<Upload
								classContainer={`upload-modal-estoque`}
								titleEl={`<p class="text-neutral-70 font-semibold text-sm text-center">Arraste e solte o arquivo ou <br> <span class="text-primary-pure">selecione o arquivo</span></p>`}
							/>
						</div>
					</div>

					{/* INPUTS */}

					{/* END INPUTS */}

					<footer className="flex ml-auto px-24 pb-16">
						<Button classe="secondary mr-16" onClick={closeModal}>
							Cancelar
						</Button>
						<Button>Nova entrada de estoque</Button>
					</footer>
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
						<Link
							to="/vendas-b2b/list"
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
			<div className="container">
				<Card classe="my-64 px-24 py-32">
					<header className="flex justify-between md2:flex-col md2:gap-16">
						<Title classe="text-neutral-90 flex gap-8 font-medium">
							<SvgUse id="#icon-estoque" />
							Entradas de Estoque
						</Title>

						<div className="flex gap-32 md2:flex-col md2:gap-16">
							<Button
								iconID="#icon_add"
								classe="h-48 md2:w-full flex justify-center"
								svgClass="!w-20 !h-20"
								onClick={openModal}
							>
								Nova entrada de estoque
							</Button>

							<div className="flex items-center gap-8 ">
								<span className="font-semibold text-sm  text-neutral-80 ">
									Estoque de origem
								</span>
								<SelectComponent
									classeSelect="select-tela-estoque"
									classe="md2:flex-1"
									placeholder="Nome do estoque"
									data={inputStock ? inputStock : []}
									state={inputSelected}
									setStateCurrent={setInputSelected}
								/>
							</div>

							<div className="flex items-center gap-8">
								<span className="font-semibold text-sm  text-neutral-80 ">
									Estoque de destino
								</span>
								<SelectComponent
									classeSelect="select-tela-estoque"
									classe="md2:flex-1"
									placeholder="Nome do estoque"
									data={outputStock ? outputStock : []}
									state={outputSelected}
									setStateCurrent={setOutputSelected}
								/>
							</div>
						</div>
					</header>

					<div className="mt-24">
						<Table
							options={{
								download: true,
								headerChildren: true,
							}}
							HeaderCustom={HeaderEntradasEstoque}
							arrData={dataInitial}
							arrColumns={columns}
						/>
					</div>
				</Card>
			</div>
		</>
	);
};

export default EntradasEstoque;
