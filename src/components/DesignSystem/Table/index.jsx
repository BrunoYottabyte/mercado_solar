import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
	useTable,
	useSortBy,
	useGlobalFilter,
	useFilters,
	usePagination,
} from 'react-table';
import {GlobalFilter} from './GlobalFilter';
import ColumnFilter from './ColumnFilter';
import Button from '../Button';
import {SelectComponent} from '../SelectComponent';
import SvgUse from '../../svg/svgUse';
import {Title} from '../Headings';
import {InputDate} from '../../DesignSystem/InputDate';
import {GLOBAL} from '../../../utils/GLOBAL';
import {useAsyncDebounce} from 'react-table';

function crescente(a, b) {
	return a.data_criacao - b.data_criacao;
}
function descrescente(a, b) {
	return b.data_criacao - a.data_criacao;
}

const Table = ({
	options,
	arrData,
	arrColumns,
	recentes,
	setRecentes,
	pageLimit,
	searchExternal,
	classeTableContainer,
	HeaderCustom,
}) => {
	const columns = useMemo(() => arrColumns, []);
	// const [data, setData] = useState(() => {

	// 	let arrUpdated = arrData.map(result => ({
	// 		...result,
	// 		data_criacao: String(result.data_criacao).split('T')[0].replaceAll('-', '')
	// 	}));
	// 	console.log(arrUpdated)
	// 	const arrOrdenado = arrUpdated.sort(descrescente);
	// 	return arrOrdenado;

	// });

	const [data, setData] = useState(arrData);
	// console.log(arrData)
	useEffect(() => {
		// let arrUpdated = arrData.map(result => ({
		// 	...result,
		// 	data_criacao: String(result.data_criacao).split('T')[0].replaceAll('-', '')
		// }));

		// const arrOrdenado = arrUpdated.sort(descrescente);
		// setData(arrOrdenado)
		setData(arrData);
	}, [arrData]);

	const opts = {
		search: true,
		searchPlaceholder: 'Buscar',
		itemsLength: true,
		recents: true,
		download: true,
		filterPor: {
			enabled: false,
			setFilter: null,
			filter: null,
			data: [
				{value: 'recentes', label: 'Mais Recentes'},
				{value: 'antiga', label: 'Mais Antigas'},
			],
		},
		linhasPorPagina: {
			layout: 'left',
			state: true,
		},
		classTDS: '',
		classTHS: '',
		headerWithTable: {
			enabled: false,
			linhasPorPagina: {
				layout: 'left',
				state: false,
			},
			categoria: true,
			colaboradores: true,
			itemsLength: true,
		},
		headerCustom: false,
		customFilter: {
			enabled: false,
			data: [],
			title: 'Filtrar',
			option: '',
			setOption: '',
			placeholder: 'EXAMPLE',
			classSelect: '',
		},
		customInputDate: {
			enabled: false,
			setDate: null,
			date: null,
			class: '',
		},
		...options,
	};

	const defaultColumn = useMemo(() => {
		return {
			Filter: ColumnFilter,
		};
	}, []);

	const tableInstance = useTable(
		{columns, data, defaultColumn},
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination,
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		gotoPage,
		pageCount,
		pageOptions,
		setPageSize,
		state,
		setGlobalFilter,
	} = tableInstance;

	const {globalFilter, pageIndex, pageSize} = state;
	const theadCurrent = useRef(null);

	// setando pagesize com param externo
	useEffect(() => {
		if (!pageLimit) return;
		const changePage = () => {
			setPageSize(pageLimit);
		};

		changePage();
	}, [pageLimit]);

	useEffect(() => {
		setTimeout(() => {
			setGlobalFilter(searchExternal);
		}, 1500);
		// GLOBAL.debounceFunction(() => {

		// }, 1000, 'searchExternal')();
	}, [searchExternal]);

	return (
		<>
			<div className="flex flex-col">
				{opts.headerChildren ? (
					<HeaderCustom
						filter={globalFilter}
						setFilter={setGlobalFilter}
						pageSize={pageSize}
						setPageSize={setPageSize}
					/>
				) : opts.headerWithTable.enabled ? (
					<HeaderTableWithTitle
						opts={opts}
						setRecentes={setRecentes}
						setPageSize={setPageSize}
						recentes={recentes}
					/>
				) : opts.headerCustom ? (
					opts.headerCustom()
				) : (
					<div
						className={`flex w-full gap-32 mb-24 md2:flex-col md2:gap-10 ${opts.searchResponsive}`}>
						{opts.search && (
							<GlobalFilter
								classe="min-w-[22rem] md2:min-w-[0rem]"
								placeholder={opts.searchPlaceholder}
								filter={globalFilter}
								setFilter={setGlobalFilter}
							/>
						)}

						<span className="flex-1 w-full "></span>

						{opts.itemsLength && opts.filterPor.enabled && (
							<label className="inline-flex gap-8  items-center select-none ">
								<p className="text-sm font-medium text-neutral-80 md2:hidden">
									Filtrar porrrrrr
								</p>

								<SelectComponent
									classe="md min-w-[16rem] md2:min-w-[0] md2:w-full"
									data={opts.filterPor.data}
									setStateCurrent={opts.filterPor.setFilter}
									onChange={e => {
										if (e.value == 'antiga') {
											const arrUpdated = data.sort(crescente);
											opts.filterPor.setFilter(e.value);
											console.log(arrUpdated);
											setData([...arrUpdated]);
										} else {
											const arrUpdated = data.sort(descrescente);
											opts.filterPor.setFilter(e.value);
											setData([...arrUpdated]);
										}
									}}
									state={opts.filterPor.filter}
									value={opts.filterPor.filter}
									placeholder={'Mais recentes'}
								/>
							</label>
						)}

						{opts.customFilter.enabled && (
							<label className="inline-flex gap-8  items-center select-none ">
								<p className="text-sm font-medium text-neutral-80 md2:hidden">
									{opts.customFilter.title}
								</p>

								<SelectComponent
									classe={`md min-w-[16rem] ${opts.customFilter.classSelect}`}
									data={opts.customFilter.data}
									setStateCurrent={opts.customFilter.setOption}
									state={opts.customFilter.option}
									value={opts.customFilter.option}
									placeholder={opts.customFilter.placeholder}
								/>
							</label>
						)}
						{opts.customInputDate.enabled && (
							<label
								className={`inline-flex gap-8  select-none ${opts.customInputDate.class}`}>
								{opts.customInputDate.title && (
									<p className="text-sm font-medium text-neutral-80 md2:hidden">
										{opts.customInputDate.title}
									</p>
								)}

								<InputDate
									containerClass={opts.customInputDate.classSelect}
									setStartDate={opts.customInputDate.setDate}
									startDate={opts.customInputDate.date}
									placeholderText={opts.customInputDate.placeholder}
									noIcon={true}
									arrowIcon={true}
								/>
							</label>
						)}

						{/* LINHYAS POR PAGINA */}
						{opts.itemsLength && opts.linhasPorPagina?.state && (
							<label
								className={`inline-flex gap-8 items-center select-none md2:justify-end ${opts.viewPerPageResponsive}`}>
								{opts.linhasPorPagina.layout === 'left' && (
									<>
										<p className="text-sm font-medium text-neutral-80">
											Linhas por página
										</p>

										<SelectComponent
											classe="md min-w-[4.625rem]"
											data={[10, 25, 50].map(v => ({value: v, label: v}))}
											setStateCurrent={setPageSize}
											state={pageSize}
											value={pageSize}
											placeholder={pageSize}
										/>
									</>
								)}

								{opts.linhasPorPagina.layout === 'center' && (
									<>
										<p className="text-sm font-medium text-neutral-80">
											Mostrar
										</p>

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
									</>
								)}
							</label>
						)}
					</div>
				)}
				{data.length > 0 ? (
					<div className={`table-container ${classeTableContainer}`}>
						{/* table */}
						<table {...getTableProps()}>
							<thead ref={theadCurrent}>
								{headerGroups.map((headerGroup, i) => (
									<tr
										{...headerGroup.getHeaderGroupProps()}
										key={`${i}-headerGroup`}>
										{headerGroup.headers.map((column, i) => (
											<th
												className={`${opts.classTHS} ${
													column.classTH ? column.classTH : ''
												}`}
												key={i}
												data-id={i}
												{...(!column?.noFilter
													? {
															...column.getHeaderProps(
																column.getSortByToggleProps(),
															),
													  }
													: '')}>
												{column.render('Header')}
												{column.isSorted
													? column.isSortedDesc
														? theadCurrent.current
																.querySelector(`th[data-id='${i}']`)
																.setAttribute('data-ordem', 'down')
														: theadCurrent.current
																.querySelector(`th[data-id='${i}']`)
																.setAttribute('data-ordem', 'up')
													: theadCurrent?.current
															?.querySelector(`th[data-id='${i}']`)
															?.removeAttribute('data-ordem')}
											</th>
										))}
									</tr>
								))}
							</thead>

							<tbody {...getTableBodyProps()}>
								{page.map(row => {
									prepareRow(row);
									return (
										<tr {...row.getRowProps()}>
											{row.cells.map(cell => {
												return (
													<td
														className={`${opts.classTDS}`}
														{...cell.getCellProps()}>
														{cell.render('Cell')}
													</td>
												);
											})}
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				) : (
					<p>Nenhum registro encontrado.</p>
				)}

				{data.length > 0 && (
					<div
						className={`flex gap-16 w-full ${
							!opts.notPagination ? 'mt-16' : ''
						} justify-end`}>
						{opts.download && <></>}

						{/* PAGINACAO */}
						{!opts.notPagination && (
							<div className="ml-auto md:ml-0 flex gap-8 justify-start table-pagination select-none ">
								{/* primeira pagina */}
								<div className={`${!canPreviousPage ? 'disabled' : ''}`}>
									{pageOptions.length > 3 && (
										<button
											className="btn rounded-btn  p-0 gap-0 !w-40 !h-40 justify-center"
											onClick={() => gotoPage(0)}>
											<SvgUse
												id="#icon_arrow_left"
												classe="!w-8 !h-8 rotate-[180deg] shrink-0 -mr-4"
											/>
											<SvgUse
												id="#icon_arrow_left"
												classe="!w-8 !h-8 rotate-[180deg]  shrink-0 "
											/>
										</button>
									)}
								</div>

								<div className="flex items-center gap-8 ">
									<div className={`${!canPreviousPage ? 'disabled' : ''}`}>
										<button
											className="btn rounded-btn flex-row-reverse"
											onClick={() => previousPage()}>
											<p className="sm:hidden">Anterior</p>
											<SvgUse
												id="#icon_arrow_left"
												classe="!w-8 !h-8 rotate-[180deg]"
											/>
										</button>
									</div>

									{/* Numero de paginas */}
									<span className="flex gap-4 select-none">
										<span className=" font-medium ">
											{/* text-neutral-75 */}
											{pageIndex + 1} de {pageOptions.length}
										</span>
									</span>

									{/* proxima pagina */}
									<div className={`${!canNextPage ? 'disabled' : ''}`}>
										<button
											className="btn rounded-btn "
											onClick={() => nextPage()}>
											<p className="sm:hidden">Próximo</p>
											<SvgUse id="#icon_arrow_left" classe="!w-8 !h-8  " />
										</button>
									</div>
								</div>

								{/* ultima pagina */}
								<div className={`${!canNextPage ? 'disabled' : ''} `}>
									{pageOptions.length > 3 && (
										<button
											className="btn rounded-btn  p-0 gap-0 !w-40 !h-40 justify-center"
											onClick={() => gotoPage(pageCount - 1)}>
											<SvgUse
												id="#icon_arrow_left"
												classe="!w-8 !h-8  shrink-0 -mr-4"
											/>

											<SvgUse
												id="#icon_arrow_left"
												classe="!w-8 !h-8  shrink-0 -mr-4"
											/>
										</button>
									)}
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default Table;

export const HeaderTableWithTitle = ({
	opts,
	setRecentes,
	recentes,
	pageSize,
	setPageSize,
}) => {
	const [dateInitial, setDateInitial] = useState(new Date());
	return (
		<div
			className={`flex w-full gap-32 mb-24 md2:flex-col md2:gap-10 ${opts.searchResponsive}`}>
			{opts.search && (
				<GlobalFilter
					classe="min-w-[22rem] "
					placeholder={opts.searchPlaceholder}
					filter={globalFilter}
					setFilter={setGlobalFilter}
				/>
			)}

			<Title>
				<SvgUse id="#icon-checklist-analise-desempenho" />
				Atividades
			</Title>

			<span className="flex-1 w-full"></span>

			{opts.headerWithTable.itemsLength && opts.headerWithTable.itemsLength && (
				<div className="disabled border-transparent md:border-b-neutral-30 md:border">
					<label className="inline-flex gap-8  items-center select-none ">
						<p className="text-sm font-medium text-neutral-80">Filtrar por</p>

						<SelectComponent
							classe="md min-w-[16rem] "
							data={[
								{value: 'recentes', label: 'Mais Recentes'},
								{value: 'antiga', label: 'Mais Antigas'},
							]}
							setStateCurrent={setRecentes}
							state={recentes}
							value={pageSize}
							placeholder={'Mais recentes'}
						/>
					</label>
				</div>
			)}

			{/* LINHYAS POR PAGINA */}
			{opts.headerWithTable.linhasPorPagina &&
				opts.headerWithTable.linhasPorPagina.state && (
					<label
						className={`inline-flex gap-8 items-center select-none md2:justify-end ${opts.viewPerPageResponsive}`}>
						{opts.linhasPorPagina.layout === 'left' && (
							<>
								<p className="text-sm font-medium text-neutral-80">
									Linhas por página
								</p>

								<SelectComponent
									classe="md min-w-[4.625rem]"
									data={[10, 25, 50].map(v => ({value: v, label: v}))}
									setState={setPageSize}
									state={pageSize}
									value={pageSize}
									placeholder={pageSize}
								/>
							</>
						)}

						{opts.linhasPorPagina.layout === 'center' && (
							<>
								<p className="text-sm font-medium text-neutral-80">Mostrar</p>

								<SelectComponent
									classe="md min-w-[4.625rem]"
									data={[10, 25, 50].map(v => ({value: v, label: v}))}
									setState={setPageSize}
									state={pageSize}
									value={pageSize}
									placeholder={pageSize}
								/>
								<p className="text-sm font-medium text-neutral-80">
									Linhas por página
								</p>
							</>
						)}
					</label>
				)}

			{/* Colaborador */}
			{opts.headerWithTable.colaboradores && (
				<SelectComponent
					classe="md min-w-[4.625rem]"
					data={[10, 25, 50].map(v => ({value: v, label: v}))}
					setState={setPageSize}
					state={pageSize}
					value={pageSize}
					placeholder="Selecione o colaborador"
				/>
			)}
			{/* Categoria */}
			{opts.headerWithTable.categoria && (
				<SelectComponent
					classe="md min-w-[4.625rem]"
					data={[10, 25, 50].map(v => ({value: v, label: v}))}
					setState={setPageSize}
					state={pageSize}
					value={pageSize}
					placeholder="Selecione a categoria"
				/>
			)}
			{/* DATE PICKER */}
			<InputDate setStartDate={setDateInitial} startDate={dateInitial} />
		</div>
	);
};
