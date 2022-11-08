import React from "react";
import { useState } from "react";
import { Card } from "../../../components/DesignSystem/Card";
import { Title } from "../../../components/DesignSystem/Headings";
import { InputDate } from "../../../components/DesignSystem/InputDate";
import Table from "../../../components/DesignSystem/Table";
import SvgUse from "../../../components/svg/svgUse";
import Charts from "react-apexcharts";
import { SelectComponent } from "../../../components/DesignSystem/SelectComponent";
import Badge from "../../../components/DesignSystem/Badge";
import { GLOBAL } from "../../../utils/GLOBAL";
import { api } from "../../../services/api";
import { useEffect } from "react";
import moment from "moment";

const TodosPedidos = () => {
	const [pedidos, setPedidos] = useState([]);
	const [date, setDate] = useState();
	const { showToastify } = GLOBAL;
	const columns = [
		{
			Header: "Data",
			accessor: "data_criacao",
			Cell: (v) => <p>{moment(v.value).format("DD/MM/YYYY")}</p>,
		},
		{
			Header: "Pedido",
			accessor: "nome",
		},
		{
			Header: "Cardapio Direcionado",
			accessor: "cardapio_direcionado",
		},
		{
			Header: "Valor total",
			accessor: "valor_total",
			Cell: (v) => (
				<p>{GLOBAL.currencyFormatterReal(v.value)}</p>
			),
		},
	];

	const fetchInitial = async () => {
		try {
			const { data } = await api.get("/api/producao/pedidos_b2b/");
			// Iniciando com valores mais recentes
			let dataUpdated = GLOBAL.recentDate("data_criacao", data);
			console.log(dataUpdated);
			// setFilterPor(dataFilterPor[0].value);
			setPedidos(dataUpdated);
		} catch (err) {
			showToastify("Falha ao se comunicar com servidor, recarregue a página");
		}
	};
	useEffect(() => {
		fetchInitial();
	}, []);

	const HeaderRelatorio = ({ pageSize, setPageSize }) => {
		return (
			<div className="mb-24 flex md2:flex-col md2:gap-16 md2:w-full justify-between items-center md2:items-end">
				<div className="flex items-center gap-32">
					<div className="md2:w-full flex gap-8 items-center">
						<span className="md2:hidden">Filtrar por</span>
						<InputDate
							setStartDate={setDate}
							startDate={date}
							containerClass="md2:w-full z-10"
							classe="md2:w-full z-0"
							placeholderText="Selecione a data"
						/>
					</div>
				</div>

				<div className="flex gap-8 items-center">
					<span>Mostrar</span>
					<SelectComponent
						data={[
							{
								value: 10,
								label: 10,
							},
							{
								value: 15,
								label: 15,
							},
							{
								value: 25,
								label: 25,
							},
						]}
						classeSelect="w-[74px]"
						setStateCurrent={setPageSize}
						state={pageSize}
					/>
					<span>Linhas por página</span>
				</div>
			</div>
		);
	};

	return (
		<div className="container">
			<Card classe="my-64 mb-0 px-24 py-32">
				<header className="flex-col justify-between md2:gap-16 mb-32">
					<Title classe="text-neutral-90 flex item-center gap-8 font-medium">
						<SvgUse id="#icon-title-contasApagar" />
						Todos os pedidos
					</Title>
				</header>

				<div className="mt-32 flex md2:flex-col  md2:gap-16">
					<div className="flex-1 ">
						{pedidos.length > 0 && (
							<Table
								options={{
									download: true,
									headerChildren: true,
								}}
								HeaderCustom={HeaderRelatorio}
								arrData={pedidos}
								arrColumns={columns}
							/>
						)}
					</div>
				</div>
			</Card>
		</div>
	);
};

export default TodosPedidos;
