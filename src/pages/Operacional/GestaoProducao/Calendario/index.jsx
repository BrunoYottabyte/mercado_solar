import { useEffect } from "react";
import { useState } from "react";
import Button from "../../../../components/DesignSystem/Button";
import { Card } from "../../../../components/DesignSystem/Card";
import CheckBox from "../../../../components/DesignSystem/CheckBox";
import { Title } from "../../../../components/DesignSystem/Headings";
import { SelectComponent } from "../../../../components/DesignSystem/SelectComponent";
import Table from "../../../../components/DesignSystem/Table";
import { GlobalFilter } from "../../../../components/DesignSystem/Table/GlobalFilter";
import SvgUse from "../../../../components/svg/svgUse";

const Calendario = () => {
	const [search, setSearch] = useState();
	const [pageSize, setPageSize] = useState(10);
	const [categorias, setCategorias] = useState([]);


	const objTable = [
		{
			nome: 'Bisnaguinha',
			categoria: 'Pães',
		},
		{
			nome: 'Pão francês',
			categoria: 'Pães',
		},
		{
			nome: 'Croassant',
			categoria: 'Pães',
		},
		{
			nome: 'Queijo Minas',
			categoria: 'Queijos',
		},
		{
			nome: 'Queijo Mussarela',
			categoria: 'Queijos'
		}
	]

	useEffect(() => {
		let arrAllCategorias = [];
		objTable.forEach(product => {
			arrAllCategorias.push(product.categoria);
			setCategorias([...new Set(arrAllCategorias)])
		})
		
	}, [])
console.log(categorias.flat)

	return (
		<>
			<div className="container">
				<Card classe="my-64 px-24 py-32">
					<header className='flex justify-between md2:flex-col md2:gap-16'>
						<Title classe="text-neutral-90 md2:justify-center flex gap-8 font-medium">
							<SvgUse id="#icon-calendar" />
							Calendário
						</Title>
						<Button
							onClick={() => {
								setAction('create');
								openCreateUpdate();
							}}
							iconID="#icon_add" svgClass="!w-20 !h-20" classe="md2:w-full flex justify-center h-48">
							Novo Calendário
						</Button>
					</header>

					<main className="mt-32">
						{/* Header table */}

						<div>
							<div className="flex justify-between md2:flex-col md2:gap-16">
								<GlobalFilter
									classe="min-w-[22rem] md2:min-w-[0rem]"
									setFilter={setSearch}
									filter={search}
									placeholder="Pesquise por nome, tipo..."
								/>
								{/* View per Page */}
								<div className="flex items-center gap-8 md2:justify-end">
									<p className="text-sm font-medium text-neutral-80">
										Mostrar
									</p>

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

							<div className="mt-24 overflow-auto">
								<header className='px-16 border md2:w-min overflow-hidden border-neutral-30 border-b-0  font-semibold grid grid-cols-[250px] md2:grid-cols-[150px] auto-cols-auto md2:auto-cols-[100px] h-48 items-center bg-neutral-20 text-neutral-80 rounded-t-md'>
									<p>Produtos</p>
									<p>Seg</p>
									<p>Ter</p>
									<p>Qua</p>
									<p>Qui</p>
									<p>Sex</p>
									<p>Sab</p>
									<p className="col-[8]">Dom</p>
								</header>
								<div className="border md2:!w-max border-neutral-30 border-t-0 bg-neutral-0 flex flex-col justify-center rounded-b-md">
									{
										categorias.length > 0 && categorias.map((cat, i) => {
											console.log(cat)
											console.log('maoo')
											return(
												<div key={i}>
													
													<p className="h-48 px-16  flex items-center border border-transparent border-y-neutral-30">
														{cat}
													</p>
													{
														objTable.map((product) => {
															if(product.categoria == cat){
																return(
																	<div className="px-16 bg-white h-48 items-center grid grid-cols-[250px] md2:grid-cols-[150px]  auto-cols-[1fr] md2:auto-cols-[100px]">
																	<p>{product.nome}</p>
																	<div className="h-full flex">
																		<CheckBox />
																	</div>
																	<div className="h-full flex">
																		<CheckBox />
																	</div>
																	<div className="h-full flex">
																		<CheckBox />
																	</div>
																	<div className="h-full flex">
																		<CheckBox />
																	</div>
																	<div className="h-full flex">
																		<CheckBox />
																	</div>
																	<div className="h-full flex">
																		<CheckBox />
																	</div>
																	<div className="col-[8] h-full flex">
																		<CheckBox />
																	</div>
																</div>
																)
															}
														})
													}
											
												</div>
											)
										})
									}
												</div>
								
							</div>
							<Button classe="secondary mt-24 h-48" iconID={"#icon_arrow_left"}>
								Baixar tabela
							</Button>
						</div>
					</main>
				</Card>
			</div>
		</>
	)
}

export default Calendario;