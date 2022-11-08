import { Card } from "../../../components/DesignSystem/Card";
import { Title } from "../../../components/DesignSystem/Headings";
import Button from "../../../components/DesignSystem/Button";
import Table from "../../../components/DesignSystem/Table";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import useFetch from "../../../hooks/useFetch";
import { GLOBAL } from "../../../utils/GLOBAL";
import Footer from "../../../components/DesignSystem/Footer";
import { DisabledContainer } from "../../../components/DesignSystem/DisabledContainer";
import { GlobalFilter } from "../../../components/DesignSystem/Table/GlobalFilter";
import { SelectComponent } from "../../../components/DesignSystem/SelectComponent";

const arrPlaceholder = () => {
	const { generateRange } = GLOBAL
	return generateRange(10, {
		id: 0,
		data: moment(new Date()).format("DD/MM/YYYY"),
		cliente: "",
		itemcardapio_set: [],
		opcoes: "Clica aqui"
	})
}


const ListagemCardapio = () => {
	const [data, setData] = useState(arrPlaceholder());
	const [dataOrdenada, setDataOrdenada] = useState([]);
	const { error, loading, request, setLoading, data: fetchData } = useFetch({ load: true })

	const handleRequest = async () => {
		const { data, response } = await request("/api/producao/cardapios_direcionados")
		// console.log(data, response)

		const dataMAP = data.map((i) => ({
			...i,
			opcoes: "Clica aqui",
			cliente: i.cliente.nome,
		}));
		setData(dataMAP);
	};

	useEffect(() => {
		handleRequest();
	}, []);


	const columns = [
		{
			Header: "Cliente",
			accessor: "cliente",
		},
		{
			Header: "Data",
			accessor: "data",
			Cell: ({ value }) => moment(value, "YYYY/MM/DD").format("DD/MM/YYYY"),
		},

		{
			accessor: "opcoes",
			Header: () => <span className="flex justify-end">Opções</span>,
			Cell: (v) => {
				return (
					<div className="number">
						<Link to={`/vendas-b2b/list/cardapio-direcionado/${v.row.original.id}`} state={{ cardapio: v.row.original.id }}>
							<Button
								className="btn secondary  justify-center"
								iconID="#icon_pencil"
							>
								Editar
							</Button>
						</Link>
					</div>
				)
			},
		},
	];

	if (error)
		GLOBAL.showToastify(error.message, 4002332, "error")


	const HeaderCardapioDirecionado = ({ filter, setFilter, pageSize, setPageSize }) => {
		return (
			<div className='flex justify-between mb-24 md2:flex-col md2:gap-16'>
				<GlobalFilter
					classe="min-w-[22rem] md2:min-w-[0rem] md2:min-w-full"
					placeholder={"Pesquise por nome, tipo..."}
					filter={filter}
					setFilter={setFilter}
				/>

				<div className='flex md:flex-col md:gap-16'>
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

	return (
		<>
			<div className="container md2:px-0">
				<Card classe="rounded-lg p-24 my-64 md2:px-10">
					<div className="flex justify-between items-center md2:gap-20 md2:flex-col md2:gap-12 ">
						<Title iconID={"#icon_lista_cardapio"} classe="flex-row-reverse text-lg">
							Lista do Cardápio Direcionado
						</Title>

						<DisabledContainer verificacao={fetchData}>
							<Link to={'/vendas-b2b/list/cardapio-direcionado'} className="md2:w-full">
								<Button
									value="Button"
									classe="icon_left h-48 md2:w-full justify-center"
									iconID="#icon_add"
									svgClass="!h-20 !w-20"
								>
									Novo Cardápio Direcionado
								</Button>
							</Link>
						</DisabledContainer>
					</div>
					<div className={`${loading ? "loading" : ""} container-table mt-32`}>

						 <Table
								options={{
									download: true,
									headerChildren: true,
								}}
								HeaderCustom={HeaderCardapioDirecionado}
								arrData={data}
								arrColumns={columns}
							/> 
					</div>
				</Card>
			</div>

		</>

	);
};

export default ListagemCardapio;
