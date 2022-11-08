
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../components/DesignSystem/Button';
import { Card } from '../../../../components/DesignSystem/Card';
import CheckBox from '../../../../components/DesignSystem/CheckBox';
import { Title } from '../../../../components/DesignSystem/Headings';
import { Input, InputAddSubtract, InputMaskedNumeric } from '../../../../components/DesignSystem/Input';
import { Modal } from '../../../../components/DesignSystem/Modal/Modal';
import { ModalContent } from '../../../../components/DesignSystem/Modal/ModalContent';
import { ModalHeader } from '../../../../components/DesignSystem/Modal/ModalHeader';
import { SelectComponent } from '../../../../components/DesignSystem/SelectComponent';
import Table from '../../../../components/DesignSystem/Table';
import { GlobalFilter } from '../../../../components/DesignSystem/Table/GlobalFilter';
import TextArea from '../../../../components/DesignSystem/TextArea';
import SvgUse from '../../../../components/svg/svgUse';
import { useGlobalContext } from '../../../../context/GlobalContext';
import { api } from '../../../../services/api';
import { GLOBAL } from '../../../../utils/GLOBAL';

const data = [
	{
		id: 1,
		produto: 'Fermento',
		unidCompra: 'KG',
		qtdEmbalagem: '12.000',
		custoEmbalagem: 'R$ 71,76',
		custoMedida: 'R$ 2,98',
		custoUn: 'R$ 6,23',
		estoque: '1860',
		status: "Compra próxima",
		options: 'icons',
	},
	{
		id: 1,
		produto: 'Fermento',
		unidCompra: 'KG',
		qtdEmbalagem: '12.000',
		custoEmbalagem: 'R$ 71,76',
		custoMedida: 'R$ 2,98',
		custoUn: 'R$ 6,23',
		estoque: '1860',
		status: "Compra próxima",
		options: 'icons',
	},
	{
		id: 1,
		produto: 'Fermento',
		unidCompra: 'KG',
		qtdEmbalagem: '12.000',
		custoEmbalagem: 'R$ 71,76',
		custoMedida: 'R$ 2,98',
		custoUn: 'R$ 6,23',
		estoque: '1860',
		status: "Compra próxima",
		options: 'icons',
	},
	{
		id: 1,
		produto: 'Fermento',
		unidCompra: 'KG',
		qtdEmbalagem: '12.000',
		custoEmbalagem: 'R$ 71,76',
		custoMedida: 'R$ 2,98',
		custoUn: 'R$ 6,23',
		estoque: '1860',
		status: "Compra próxima",
		options: 'icons',
	},
	{
		id: 1,
		produto: 'Fermento',
		unidCompra: 'KG',
		qtdEmbalagem: '12.000',
		custoEmbalagem: 'R$ 71,76',
		custoMedida: 'R$ 2,98',
		custoUn: 'R$ 6,23',
		estoque: '1860',
		status: "Compra próxima",
		options: 'icons',
	},
	{
		id: 1,
		produto: 'Fermento',
		unidCompra: 'KG',
		qtdEmbalagem: '12.000',
		custoEmbalagem: 'R$ 71,76',
		custoMedida: 'R$ 2,98',
		custoUn: 'R$ 6,23',
		estoque: '1860',
		status: "Compra próxima",
		options: 'icons',
	},
	{
		id: 1,
		produto: 'Fermento',
		unidCompra: 'KG',
		qtdEmbalagem: '12.000',
		custoEmbalagem: 'R$ 71,76',
		custoMedida: 'R$ 2,98',
		custoUn: 'R$ 6,23',
		estoque: '1860',
		status: "Compra próxima",
		options: 'icons',
	},
	{
		id: 1,
		produto: 'Fermento',
		unidCompra: 'KG',
		qtdEmbalagem: '12.000',
		custoEmbalagem: 'R$ 71,76',
		custoMedida: 'R$ 2,98',
		custoUn: 'R$ 6,23',
		estoque: '1860',
		status: "Compra próxima",
		options: 'icons',
	},
	{
		id: 1,
		produto: 'Fermento',
		unidCompra: 'KG',
		qtdEmbalagem: '12.000',
		custoEmbalagem: 'R$ 71,76',
		custoMedida: 'R$ 2,98',
		custoUn: 'R$ 6,23',
		estoque: '1860',
		status: "Compra próxima",
		options: 'icons',
	},
	{
		id: 1,
		produto: 'Fermento',
		unidCompra: 'KG',
		qtdEmbalagem: '12.000',
		custoEmbalagem: 'R$ 71,76',
		custoMedida: 'R$ 2,98',
		custoUn: 'R$ 6,23',
		estoque: '1860',
		status: "Compra próxima",
		options: 'icons',
	},
	{
		id: 1,
		produto: 'Fermento',
		unidCompra: 'KG',
		qtdEmbalagem: '12.000',
		custoEmbalagem: 'R$ 71,76',
		custoMedida: 'R$ 2,98',
		custoUn: 'R$ 6,23',
		estoque: '1860',
		status: "Compra próxima",
		options: 'icons',
	},

]

const MateriaPrima = () => {
	const [filter, setFilter] = useState();
	const [product, setProduct] = useState('');
	const [materiaPrima, setMateriaPrima] = useState([]);

	const [custoKg, setCustoKg] = useState('');
	const [unidadeCompra, setUnidadeCompra] = useState('');
	const [qtdEmbalagem, setQtdEmbalagem] = useState(1);
	const [custoUnidade, setCustoUnidade] = useState('')
	const [tipoMateria, setTipoMateria] = useState('');
	const [descricao, setDescricao] = useState('');
	const [action, setAction] = useState('update')
	const [status, setStatus] = useState('');
	const [qtdEstoque, setQtdEstoque] = useState('');
	const [idEditOrDelete, setIdEditOrDelete] = useState('');
	const [loading, setLoading] = useState(false);
	const [custoEmbalagem, setCustoEmbalagem] = useState('');
	const { showToastify } = GLOBAL;



	const requestMateriasPrimas = async () => {
		const { data } = await api.get('/api/producao/materias_primas');

		// Iniciando com valores mais recentes
		let dataUpdated = GLOBAL.recentDate('data_criacao', data);
		setFilterPor(dataFilterPor[0].value);
		setMateriaPrima([...dataUpdated])
	}

	useEffect(() => {
		requestMateriasPrimas();
	}, [])

	const { setmodalOpen, modalOpen } = useGlobalContext();

	useEffect(() => {
		if (modalOpen.open == false || modalOpen.open == null) {


			clearTimeout(window.timeOutMateriaPrima)
		}
	}, [modalOpen])

	const closeModal = () => {
		setmodalOpen({ open: false, id: false })
		clearState();
	}

	const openModal = () => {
		setmodalOpen({ open: true, id: "confirm" })
	}

	const openCreateUpdate = () => {
		setmodalOpen({ open: true, id: 'cadastrar_atualizar' });
		if (action == 'create') clearState()
	}

	const noHasFieldBlank = () => {
		if (product == '') return false;
		if (custoKg == '') return false;
		if (custoUnidade == '') return false;
		if (unidadeCompra == '' || String(unidadeCompra).length <= 0) return false;
		if (descricao == '' || descricao.length <= 0) return false;
		if (tipoMateria == '' || String(tipoMateria).length <= 0) return false;
		if (qtdEmbalagem <= 0 || qtdEmbalagem.toString().length <= 0) return false;
		return true;
	}

	const clearState = () => {
		setProduct('');
		setQtdEmbalagem(1);
		setCustoKg('');
		setTipoMateria('');
		setUnidadeCompra('');
		setCustoUnidade('');
		setDescricao('');
	}

	const formatJson = {
		em_estoque: 0,
		nome: product,
		status: '',
		descricao,
		quantidade_embalagem: qtdEmbalagem,
		custo_kg: GLOBAL.numberPost(custoKg),
		custo_unidade: GLOBAL.numberPost(custoUnidade),
		unidade_venda: unidadeCompra,

		revenda: tipoMateria === 'Revenda',
		receita: tipoMateria === 'Receita'
	}
	const createMateriaPrima = async () => {

		setLoading(true);
		try {
			const { data } = await api.post('/api/producao/materias_primas/', formatJson);
			success();
		} catch (err) {
			const messages = GLOBAL.clearFeedbackErrorRequestDuplicated(err.response?.data);
			messages.map(message => showToastify(message))
		}
		finally {
			setLoading(false);
		}
	}

	const success = () => {
		setmodalOpen({ open: true, id: 'animation' });
		window.timeOutMateriaPrima = setTimeout(closeModal, 5000)
		requestMateriasPrimas()
	}

	const updateMateriaPrima = async () => {

		try {
			setLoading(true);
			const { data } = await api.put(`/api/producao/materias_primas/${idEditOrDelete}/`, formatJson);
			success()
		} catch (err) {
			const messages = GLOBAL.clearFeedbackErrorRequestDuplicated(err.response?.data);
			messages.map(message => showToastify(message))
		}
		finally {
			setLoading(false);
		}
	}

	const deleteMateriaPrima = async () => {
		try {
			setLoading(true);
			await api.delete(`/api/producao/materias_primas/${idEditOrDelete}/`);
			success()
		} catch (err) {
			const messages = GLOBAL.clearFeedbackErrorRequestDuplicated(err.response?.data);
			messages.map(message => showToastify(message))
		}
		finally {
			setLoading(false);
		}
	}

	const populateFields = (obj) => {

		setProduct(obj.nome);
		setCustoKg(obj.custo_kg);
		setCustoUnidade(obj.custo_unidade);
		setCustoEmbalagem(obj.custo_embalagem)
		setDescricao(obj.descricao);
		setQtdEstoque(obj.em_estoque);
		setQtdEmbalagem(obj.quantidade_embalagem);
		setStatus(obj.status);
		setTipoMateria(obj.receita ? 'Receita' : 'Revenda');
		setUnidadeCompra(obj.unidade_venda)
	}



	const handleRequest = () => {
		switch (action) {
			case 'update':
				updateMateriaPrima();
				break;
			case 'delete':
				deleteMateriaPrima()
				break;
			default:
				createMateriaPrima();
				break;
		}
	}

	const columns = [
		{
			Header: () => <h2 className="font-semibold text-sm text-neutral-80">Matéria Prima</h2>,
			accessor: "nome",
			Cell: (v) => (
				<div className='flex gap-10'><SvgUse id="#icon-kitchen" classe="w-18 h-18" /> <SvgUse id="#icon-milk" classe="w-18 h-18" /><p className="text-sm text-neutral-80 font-normal">{v.value}</p></div>
			)
		},
		{
			Header: "Unidade de Compra",
			accessor: "unidade_venda",
		},
		{
			Header: "Qnt. por Embalagem",
			accessor: "quantidade_embalagem",
		},
		{
			Header: "Custo por embalagem",
			accessor: "custo_embalagem",
		},
		{
			Header: "Custo/Kg",
			accessor: "custo_kg",
			Cell: (v) => <p>{GLOBAL.currencyFormatterReal(v.value)}</p>
		},
		{
			Header: "Custo/Un",
			accessor: "custo_unidade",
			Cell: (v) => <p>{GLOBAL.currencyFormatterReal(v.value)}</p>
		},
		{
			Header: "Em estoque",
			accessor: "em_estoque",
		},
		{
			Header: () => <p className='text-center'>Status</p>,
			accessor: "status",
		},
		{
			Header: "Opções",
			accessor: "options",
			noFilter: true,
			classTH: 'not-filter',
			Cell: (v) =>
				<div className='flex gap-8'><SvgUse id="#icon-edit" onClick={() => { setAction('update'); openCreateUpdate(); populateFields(v.row.original); setIdEditOrDelete(v.row.original.id) }} classe="w-32 h-32 transition-all duration-300 hover:brightness-90" /> <SvgUse id="#icon-search-estoque" onClick={() => { setAction('update'); populateFields(v.row.original); setIdEditOrDelete(v.row.original.id); openModal() }} classe="w-32 h-32 transition-all duration-300 hover:brightness-90" /></div>

		},

	];

	const arrSelect = [
		{ value: '', label: 'Selecione' },
		{ value: 'KG', label: 'KG' },
		{ value: 'UN', label: 'UN' }
	]

	const arrStatus = [
		{ value: 'compraproxima', label: 'Compra próxima' },
		{ value: 'exemplo2', label: 'Exemplo 2' }
	]

	const arrSelectDetails = [
		{ value: '', label: 'Selecione' },
		{ value: 'Revenda', label: 'Revenda' },
		{ value: 'Receita', label: 'Receita' }
	]

	// HEADER PERSONALIZADO
	const dataFilterPor = [{ value: "recentes", label: "Mais Recentes" },
	{ value: "antiga", label: "Mais Antigas" },
	]
	const [filterPor, setFilterPor] = useState();


	const HeaderMateriaPrima = ({ filter, setFilter, pageSize, setPageSize }) => {
		return (
			<div className='flex justify-between mb-24 md2:flex-col md2:gap-16'>
				<GlobalFilter
					classe="min-w-[22rem] md2:min-w-[0rem] md2:min-w-full"
					placeholder={"Pesquise por nome, tipo..."}
					filter={filter}
					setFilter={setFilter}
				/>

				<div className='flex md:flex-col md:gap-16'>
					<label className="inline-flex gap-8  items-center select-none md2:flex-1">
						<p className="text-sm font-medium text-neutral-80 md2:hidden">
							Filtrar por
						</p>

						<SelectComponent
							classe="md min-w-[16rem] md2:min-w-[0] md2:w-full"
							data={dataFilterPor}
							setStateCurrent={setFilterPor}
							onChange={
								(e) => {
									if (e.value == 'antiga') {
										const arrUpdated = GLOBAL.oldDate('data_criacao', materiaPrima);
										console.log(materiaPrima);
										console.log(arrUpdated)
										setFilterPor(e.value);
										setMateriaPrima([...arrUpdated])
									} else {
										const arrUpdated = GLOBAL.recentDate('data_criacao', materiaPrima);
										setFilterPor(e.value);
										setMateriaPrima([...arrUpdated])
									}
								}
							}
							state={filterPor}
							value={filterPor}
							placeholder={"Mais recentes"}
						/>
					</label>
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
			<Modal className={`w-[600px]  md2:max-w-[400px] md2:w-[95vw]`}>
				<ModalContent id="confirm">
					<ModalHeader text="Detalhes da matéria prima" />

					<div className="p-24 flex flex-col gap-20">
						<div>
							<p className="font-semibold text-base text-neutral-90 mb-16">
								Informações da matéria prima
							</p>
							<label className='font-semibold text-sm text-neutral-70 '>
								Matéria Prima
								<Input disabled setStateCurrent={setProduct} placeholder="Digite aqui" state={product} classe="h-48 !text-lg !font-semibold !text-neutral-80 " />
							</label>
						</div>
						{/* 2 COLUNAS */}
						<div className='flex flex-col gap-20'>
							<div className='flex gap-16 items-end md2:flex-wrap'>
								<label className='font-semibold text-sm text-neutral-70 flex-1 md2:w-full md2:flex-auto'>
									Unidade de compra
									<Input disabled setStateCurrent={setUnidadeCompra} state={unidadeCompra} classe="h-48 h-48 !text-lg !font-semibold !text-neutral-80" />
								</label>
								<label className='font-semibold text-sm text-neutral-70 flex-1 md2:w-full md2:flex-auto'>
									Qtd. por Embalagem
									<Input disabled setStateCurrent={setQtdEmbalagem} placeholder="12.000" state={qtdEmbalagem} classe="h-48 h-48 !text-lg !font-semibold !text-neutral-80" />

								</label>
								<label className='font-semibold text-sm text-neutral-70 flex-1 md2:w-full md2:flex-auto'>
									Custo por embalagem
									<InputMaskedNumeric disabled setStateCurrent={setCustoEmbalagem} state={custoEmbalagem} placeholder="R$" classe="h-48 h-48 !text-lg !font-semibold !text-neutral-80" />
								</label>
							</div>
							<div className='flex gap-16 items-end md2:flex-wrap'>
								<label className='font-semibold text-sm text-neutral-70 flex-1 md2:w-full md2:flex-auto'>
									Custo/Kg

									<InputMaskedNumeric disabled setStateCurrent={setCustoKg} state={custoKg} placeholder="R$" classe="h-48 h-48 !text-lg !font-semibold !text-neutral-80" />
								</label>
								<label className='font-semibold text-sm text-neutral-70 flex-1 md2:w-full md2:flex-auto'>
									Custo/Un
									<InputMaskedNumeric disabled setStateCurrent={setCustoUnidade} state={custoUnidade} placeholder="R$" classe="h-48 h-48 !text-lg !font-semibold !text-neutral-80" />
								</label>
								<label className='font-semibold text-sm text-neutral-70 flex-1 md2:w-full md2:flex-auto'>
									Essa matéria prima é
									<SelectComponent isDisabled classe="page-materiaPrima " classeSelect="h-48 !text-lg !font-semibold !text-neutral-80" data={arrSelectDetails} setStateCurrent={setTipoMateria} placeholder="Selecione uma opção" state={tipoMateria} value={tipoMateria} />
									{/* <Input setStateCurrent={setProduct} placeholder="12.000" state={product} classe="h-48" /> */}
								</label>
							</div>
							<div className='flex gap-16 md2:flex-wrap'>
								<label className='font-semibold text-sm text-neutral-70 md2:w-full md2:flex-auto'>
									Em estoque

									<Input
										disabled
										readOnly
										setStateCurrent={setQtdEstoque}
										state={qtdEstoque}
										classe="h-48 h-48 !text-lg !font-semibold !text-neutral-80"
									/>
								</label>
								<label className='font-semibold text-sm text-neutral-70 flex-1 md2:w-full md2:flex-auto'>
									Status
									<Input
										disabled
										readOnly
										setStateCurrent={setStatus}
										state={status}
										classe="h-48 h-48 !text-lg !font-semibold !text-neutral-80"
									/>
								</label>
							</div>
							<label className='font-semibold text-sm text-neutral-70 md2:w-full md2:flex-auto'>
								Descrição
								<Input setStateCurrent={setDescricao} state={descricao} classe="h-48 h-48 !text-lg !font-semibold !text-neutral-80" />
							</label>

						</div>
					</div>

					{/* INPUTS */}



					{/* END INPUTS */}

					<footer className="flex ml-auto px-24 pb-16">
						<Button classe={`mr-16 h-48 btn`}
							onClick={openCreateUpdate}
							iconID="#icon-pen-edit"
						>
							Alterar dados
						</Button>
						<Button
							iconID="#icon-folder-delete"
							disabled={loading && action == 'delete'}
							onClick={() => { deleteMateriaPrima() }}
							classe={`bg-alert-red-10 text-alert-red-100 hover:text-alert-red-100 h-48 btn ${loading ? 'is-loading' : ''}`}>
							Excluir dados
						</Button>
					</footer>
				</ModalContent>

				<ModalContent id="cadastrar_atualizar">
					<ModalHeader text={action === 'create' ? "Cadastrar Matéria Prima" : 'Alterar Matéria Prima'} iconID={'#icon-cerva-title'} className="bg-transparent text-primary-pure text-2xl pb-0" iconClass="!w-24 !h-24" />

					<div className="p-24 pt-32 flex flex-col gap-20">
						<div>
							<label className='font-semibold text-sm text-neutral-80'>
								Matéria Prima
								<Input state={product} setStateCurrent={setProduct} placeholder="Digite aqui" />
								{/* <SelectComponent classe=" page-embalagem" classeSelect="h-48 " data={arrSelect} setStateCurrent={setUnidadeCompra} state={unidadeCompra} value={unidadeCompra}  /> */}
							</label>
						</div>

						<div className="flex gap-24 !items-end md2:flex-col">
							<label className='font-semibold text-sm text-neutral-80  flex-1 md2:w-full'>
								Unidade de compra
								<SelectComponent classe="page-embalagem " placeholder="Selecione" classeSelect="!text-sm !text-neutral-80" data={arrSelect} setStateCurrent={setUnidadeCompra} state={unidadeCompra} value={unidadeCompra} />
							</label>
							<label className='font-semibold text-sm text-neutral-80 flex-1 md2:w-full'>
								Qtd. por Embalagem
								<InputAddSubtract state={qtdEmbalagem} setStateCurrent={setQtdEmbalagem} classe="!text-sm h-48 !text-neutral-70" />
							</label>
							<label className='font-semibold text-sm text-neutral-80 flex-1 md2:w-full'>
								Custo/Un
								<InputMaskedNumeric setStateCurrent={setCustoUnidade} state={custoUnidade} placeholder="R$" classe=" !text-sm h-48 !text-neutral-70  !font-semibold pl" />
							</label>


							<label className='font-semibold text-sm text-neutral-80 flex-1 md2:w-full'>
								Custo/Kg
								<InputMaskedNumeric setStateCurrent={setCustoKg} state={custoKg} placeholder="R$" classe=" !text-sm h-48 !text-neutral-70  !font-semibold pl" />
							</label>
						</div>
						<label className='font-semibold text-sm text-neutral-80'>
							Essa matéria prima é
							<div className="flex gap-16 mt-18 items-center">
								<CheckBox
									value={tipoMateria || ''}
									checked={tipoMateria === 'Receita'}
									onChange={() => setTipoMateria('Receita')}
								>
									<p>Receita</p>
								</CheckBox>
								<CheckBox
									value={tipoMateria || ''}
									checked={tipoMateria === 'Revenda'}
									onChange={() => setTipoMateria('Revenda')}
								>
									<p>Revenda</p>
								</CheckBox>
							</div>
						</label>
						<label className='font-semibold text-sm text-neutral-80 '>
							Descrição
							<TextArea
								value={descricao}
								onChange={(e) => setDescricao(e.target.value)}
								classe="!text-neutral-70"
								placeholder="Descreva aqui..."
							/>
						</label>
					</div>


					<footer className="flex ml-auto px-24 pb-16">
						<Button classe="mr-16 h-48 secondary"
							onClick={closeModal}
						>
							Cancelar
						</Button>
						<Button
							disabled={!noHasFieldBlank() || loading}
							onClick={handleRequest}
							classe={`h-48 disabled:opacity-50 disabled:pointer-events-none btn ${loading ? 'is-loading' : ''}`}>
							{action === 'create' ? 'Cadastrar matéria prima' : 'Salvar alterações'}
						</Button>
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


						<Button
							onClick={() => closeModal()}
							classe="mt-16 w-full h-56 text-center justify-center"
							svgClass="rotate-180"
							iconID="#icon_arrow_left"
						>
							Fechar
						</Button>

					</div>
				</ModalContent>
			</Modal>
			<div className="container">
				<Card classe="my-64 px-24 py-32">
					<header className='flex justify-between md2:flex-col md2:gap-16'>
						<Title classe="text-neutral-90 flex gap-8 font-medium">
							<SvgUse id="#icon-cerva-title" />
							Matéria Prima
						</Title>
						<Button
							onClick={() => {
								setAction('create');
								openCreateUpdate();
							}}
							iconID="#icon_add" svgClass="!w-20 !h-20" classe="md2:w-full flex justify-center h-48">
							Nova Matéria Prima
						</Button>
					</header>

					<div className='mt-32'>
						
							 <Table
								options={{
									download: true,
									headerChildren: true,
								}}
								HeaderCustom={HeaderMateriaPrima}
								arrData={materiaPrima}
								arrColumns={columns}
							/>  

						
					</div>
				</Card>
			</div>
		</>
	)
}

export default MateriaPrima;