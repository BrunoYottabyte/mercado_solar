import React from 'react'
import { useState } from 'react';
import Badge from '../../components/DesignSystem/Badge';
import Button from '../../components/DesignSystem/Button';
import { Card } from '../../components/DesignSystem/Card'
import { SelectComponent } from '../../components/DesignSystem/SelectComponent';
import Table from '../../components/DesignSystem/Table';
import { GlobalFilter } from '../../components/DesignSystem/Table/GlobalFilter';
import {PedidosOrcamentoProvider, usePedidosOrcamento} from './context'
const PedidosOrcamentosContent = () => {
	const {columns, data, setSearch, params} = usePedidosOrcamento()
	const HeaderRelatorio = ({filter, pageSize, setPageSize }) => {
		return (
				<div className='mb-24 flex md2:flex-col md2:gap-16 md2:w-full justify-between items-center md2:items-end'>
						<div className='md2:w-full flex gap-8 items-center'>
								<GlobalFilter
                    classe="min-w-[22rem] placeholder:paragraph2 !bg-white !h-48 md2:min-w-[0rem] "
                    placeholder={"Pesquise por nome, tipo..."}
                    filter={params.search}
                    setFilter={setSearch}
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

const PedidosOrcamentos = () => {
	return (
		<PedidosOrcamentoProvider>
			<PedidosOrcamentosContent />
		</PedidosOrcamentoProvider>
	)
}

export default PedidosOrcamentos