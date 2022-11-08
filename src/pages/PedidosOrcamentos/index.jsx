import React from 'react'
import { useState } from 'react';
import Badge from '../../components/DesignSystem/Badge';
import Button from '../../components/DesignSystem/Button';
import { Card } from '../../components/DesignSystem/Card'
import { Title } from '../../components/DesignSystem/Headings';
import { InputDate } from '../../components/DesignSystem/InputDate';
import { SelectComponent } from '../../components/DesignSystem/SelectComponent';
import Table from '../../components/DesignSystem/Table';
import { GlobalFilter } from '../../components/DesignSystem/Table/GlobalFilter';
import SvgUse from '../../components/svg/svgUse';

const PedidosOrcamentos = () => {
	const [date, setDate] = useState();

	const HeaderRelatorio = ({filter, setFilter, pageSize, setPageSize }) => {
		return (
				<div className='mb-24 flex md2:flex-col md2:gap-16 md2:w-full justify-between items-center md2:items-end'>
						<div className='md2:w-full flex gap-8 items-center'>
								<GlobalFilter
                    classe="min-w-[22rem] placeholder:paragraph2 !bg-white !h-48 md2:min-w-[0rem] "
                    placeholder={"Pesquise por nome, tipo..."}
                    filter={filter}
                    setFilter={setFilter}
                />
						</div>

						<div className='flex gap-8 items-center'>
								<span className='paragraph2'>Mostrar</span>
								<SelectComponent
										data={[
												{
														value: 10, label: 10
												},
												{
														value: 15, label: 15
												},
												{
														value: 25, label: 25
												},
										]}
										classeSelect="w-[74px]"
										setStateCurrent={setPageSize}
										state={pageSize}
								/>
								<span className='paragraph2'>Linhas por página</span>
						</div>
				</div>
		)
}

	const columns = [
			{
					Header: () => <div className='w-[96px]'>ID</div>,
					accessor: "id",
			},
			{
					Header: "Pri.Nome",
					accessor: "nome",
			},
			{
					Header: "UF",
					accessor: "uf",
					// Cell: (v) => moment(v.value).format('DD/MM/YYYY HH:mm')
			},
			{
					Header: "Cidade",
					accessor: "cidade",
			},
			{
				Header: "Status Pré Proposta",
				accessor: "status_pre",
				Cell: (v) => <Badge title={v.value} classeTitle={`font-medium ${v.value === 'Aprovada' ? 'text-alert-success' : v.value === 'Aguardando' ? 'text-alert-warning-100': 'text-alert-error'} `} classe={v.value == 'Aprovada' ? '!text-[#ccc] bg-alert-success-10' : v.value === 'Aguardando' ? 'bg-alert-warning-10' : 'bg-alert-error-10'} />
			},
			{
					Header: "Status",
					accessor: "status",

			},
			{
				Header: "Representante",
				accessor: "representante",
			},
			{
				Header: "Integrador",
				accessor: "integrador",
			},
			{
				Header: (v) => <p>Data de entrada</p>,
				accessor: "data",
				Cell: (v) => <p className='text-center '>{v.value}</p>
			},
			{
				Header: "Ult.Atualização",
				accessor: "atualizacao",
			},
			{
				Header: "Ações",
				accessor: "acoes",     
				Cell: (v) => <div className='flex px-10 gap-[6px]'>
					<Button  iconID="#icon-checklist-analise-desempenho" svgClass="!w-20 !h-20 absolute left-0 right-0 mx-auto" classe="w-32 h-32 relative flex items-center" />
					<Button  style={{'--cor-1': '#000'}} iconID="#search_icon" svgClass="!w-20 !h-20 absolute left-0 right-0 mx-auto" classe="w-32 h-32 relative flex items-center" />
				</div>                               
			},
	];

	const data = [
			{
					id: "SOL3245",
					nome: 'Bruno cachorro',
					uf: 'RJ',
					cidade: 'São Gonçalo',
					status_pre: 'Aprovada',
					status: 'Em progresso',
					representante: 'Andrei Muniz',
					integrador: 'Projeto Ambiental',
					data: '11/10/2022',
					atualizacao: '12/10/2022'
			},
			{
				id: "SOL3246",
				nome: 'Bruno cachorro',
				uf: 'RJ',
				cidade: 'São Gonçalo',
				status_pre: 'Aguardando',
				status: 'Em progresso',
				representante: 'Andrei Muniz',
				integrador: 'Projeto Ambiental',
				data: '11/10/2022',
				atualizacao: '12/10/2022'
			},
			{
				id: "SOL3246",
				nome: 'Bruno aa',
				uf: 'RJ',
				cidade: 'São Gonçalo',
				status_pre: 'Reprovada',
				status: 'Em progresso',
				representante: 'Andrei Muniz',
				integrador: 'Projeto Ambiental',
				data: '11/10/2022',
				atualizacao: '12/10/2022'
			},
	]
	return (
		<div className='container'>
			<Card classe="my-64 px-24 py-32">
					<header className='flex justify-between md2:flex-col md2:gap-16'>
						<h1 className="!title3">     
							Meus Pedidos de Orçamentos
						</h1>
					</header>

					<div className='mt-32'>
						<Table
								classeTableContainer="overflow-auto"
								options={{
									download: true,
									headerChildren: true,
								}}
								HeaderCustom={HeaderRelatorio}
								arrData={data}
								arrColumns={columns}
							/>
				
					</div>
			</Card>
	  </div>
	)
}

export default PedidosOrcamentos