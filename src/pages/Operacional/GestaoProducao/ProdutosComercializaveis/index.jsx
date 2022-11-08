import React, { useEffect } from 'react'
import { useState } from 'react';
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
import Upload from '../../../../components/DesignSystem/Upload';
import SvgUse from '../../../../components/svg/svgUse';
import { useGlobalContext } from '../../../../context/GlobalContext';
import { api } from '../../../../services/api';
import { GLOBAL } from '../../../../utils/GLOBAL';

const ProdutosComercializaveis = () => {
	const [product, setProduct] = useState('');
	const [categoria, setCategoria] = useState('');

	const [unidadeCompra, setUnidadeCompra] = useState('');
	const [unidadeVenda, setUnidadeVenda] = useState('');
	const [qtdEmbalagem, setQtdEmbalagem] = useState(1);

	const [custoEmbalagem, setCustoEmbalagem] = useState('');
	const [custoKg, setCustoKg] = useState('');
	const [precoVenda, setPrecoVenda] = useState('');

	const [tipo, setTipo] = useState('');
	const [descricao, setDescricao] = useState('');


	const { setmodalOpen, modalOpen } = useGlobalContext();
	const [filter, setFilter] = useState('');
	const { showToastify } = GLOBAL;

	const [action, setAction] = useState('update');
	const [filesSaves, setFilesSaves] = useState([]);
	const [loading, setLoading] = useState(false);

	const [categorias, setCategorias] = useState([]);
	const [produtos, setProdutos] = useState([]);

	const [fileFormat, setFileFormat] = useState()
	const [fileRemote, setFileRemote] = useState();

	const [idEditOrDelete, setIdEditOrDelete] = useState();

	const fetchInitial = async () => {
		try {
			const { data: dataCat } = await api.get('/api/producao/categorias_produtos/');
			setCategorias(dataCat);
			const { data: dataProducts } = await api.get('/api/producao/produtos/')
			console.log(dataProducts.filter(item => item.data_criacao == null))
			// Iniciando com valores mais recentes
			let dataUpdated = GLOBAL.recentDate('data_criacao', dataProducts);
			setFilterPor(dataFilterPor[0].value);
			setProdutos([...dataUpdated])
		} catch (err) {
			showToastify('Falha ao se comunicar com servidor, recarregue a página');
		}
	}
	useEffect(() => {
		fetchInitial();
	}, [])

	useEffect(() => {
		if (modalOpen.open == false) {
			clearTimeout(window.timeOutProduto);
			clearState();
		}
	}, [modalOpen])

	const closeModal = () => {
		setmodalOpen({ open: false, id: false })
	}

	const openModal = () => {
		setmodalOpen({ open: true, id: "confirm" })
	}

	const openCreateUpdate = () => {
		setmodalOpen({ open: true, id: 'cadastrar_atualizar' });
	}

	const fillField = (obj) => {
		setProduct(obj.nome || '');
		setQtdEmbalagem(obj.quantidade_produzida || '');
		setDescricao(obj.descricao || '');
		setPrecoVenda(obj.preco || '');
		setCustoKg(obj.custo_kg || '');
		setCustoEmbalagem(obj.custo_embalagem || '');
		setUnidadeVenda(obj.unidade_venda || '');
		setUnidadeCompra(obj.unidade_compra || '');
		setCategoria(obj.categoria_produto || '')
		setTipo(obj.receita ? 'Receita' : 'Ingrediente' || '');
		console.log(obj)
		if (obj.midia) {
			setFileRemote(obj.midia);
		}
	}


	useEffect(() => {
		var formdata = new FormData();
		if (filesSaves[0]) formdata.append("midia", filesSaves[0]);
		formdata.append("nome", product);
		formdata.append("categoria_produto", categoria);
		formdata.append("quantidade_produzida", qtdEmbalagem);
		formdata.append("descricao", descricao);
		formdata.append("preco", precoVenda ? GLOBAL.numberPost(precoVenda) : '');
		formdata.append("custo_kg", custoKg ? GLOBAL.numberPost(custoKg) : '');
		formdata.append("custo_embalagem", custoEmbalagem ? GLOBAL.numberPost(custoEmbalagem) : '');
		formdata.append("unidade_venda", unidadeVenda);
		formdata.append("unidade_compra", unidadeCompra);
		formdata.append("receita", tipo === 'Receita');
		formdata.append("ingrediente", tipo === 'Ingrediente');
		setFileFormat(formdata);
	}, [filesSaves, product, qtdEmbalagem, descricao, precoVenda,
		custoEmbalagem, custoKg, unidadeCompra, unidadeVenda, tipo, categoria])


	const createProduto = async () => {
		try {
			setLoading(true);
			const { data } = await api.post('/api/producao/produtos/', fileFormat);
			success();
		} catch (err) {
			let obj = err.response?.data;
			const messages = GLOBAL.clearFeedbackErrorRequestDuplicated(obj);
			messages.map(message => showToastify(message))
		} finally {
			setLoading(false);
		}
	}

	const updateProduto = async () => {
		try {
			setLoading(true);
			const { data } = await api.put(`/api/producao/produtos/${idEditOrDelete}/`, fileFormat);
			success();
		} catch (err) {
			let obj = err.response?.data;
			const messages = GLOBAL.clearFeedbackErrorRequestDuplicated(obj);
			messages.map(message => {
				showToastify(message);
			})
		} finally {
			setLoading(false);
		}
	}

	const deleteProduto = async () => {
		try {
			setLoading(true);
			const { data } = await api.delete(`/api/producao/produtos/${idEditOrDelete}/`);
			success();
		} catch (err) {
			let obj = err.response?.data;
			const messages = GLOBAL.clearFeedbackErrorRequestDuplicated(obj);
			messages.map(message => {
				s
				showToastify(message);
			})
		} finally {
			setLoading(false);
		}
	}

	const handleRequest = () => {
		switch (action) {
			case 'update':
				updateProduto();
				break;
			case 'delete':
				deleteProduto();
				break;
			default:
				createProduto();
				break;
		}
	}

	const HasFieldBlank = () => {
		if (String(product).length <= 0) return false;
		if (String(categoria).length <= 0) return false;
		if (String(unidadeCompra).length <= 0) return false;
		if (String(unidadeVenda).length <= 0) return false;
		if (String(qtdEmbalagem).length <= 0) return false;
		if (String(custoEmbalagem).length <= 0) return false;
		if (String(custoKg).length <= 0) return false;
		if (String(precoVenda).length <= 0) return false;
		if (String(tipo).length <= 0) return false;
		if (String(descricao).length <= 0) return false;
		// if (action == 'create' && filesSaves.length <= 0) return false;
		return true;
	}

	const clearState = () => {
		setProduct('');
		setQtdEmbalagem(1);
		setCategoria('');
		setUnidadeCompra('');
		setUnidadeVenda('');
		setCustoEmbalagem('');
		setCustoKg('');
		setPrecoVenda('');
		setTipo('')
		setDescricao('');
		setFileRemote();
	}

	const success = () => {
		setmodalOpen({ open: true, id: 'animation' });
		window.timeOutProduto = setTimeout(closeModal, 5000)
		fetchInitial();
	}

	const columns = [
		{
			Header: "Nome",
			accessor: "nome",
			Cell: (v) => (
				<div className='flex gap-10'><SvgUse id="#icon-kitchen" classe="w-18 h-18" /> <SvgUse id="#icon-milk" classe="w-18 h-18" /><p className="text-sm text-neutral-80 font-normal">{v.value}</p></div>
			)
		},
		{
			Header: "Departamento",
			accessor: "categoria_produto",
		},
		{
			Header: "Unidade de Compra",
			accessor: "unidade_compra",
		},
		{
			Header: "Unidade de Venda (Kg/Un)",
			accessor: "unidade_venda",
		},
		{
			Header: "Qnt. Embalagem",
			accessor: "quantidade_produzida",
		},
		{
			Header: "Custo Embalagem (R$)",
			accessor: "custo_embalagem",
			Cell: (v) => <p>{v.value ? GLOBAL.currencyFormatterReal(v.value) : v.value}</p>
		},
		{
			Header: "Opções",
			accessor: "options",
			noFilter: true,
			classTH: 'not-filter',
			Cell: (v) => <div className='flex gap-8 '>
				<SvgUse id="#icon-edit" onClick={() => { setAction('update'); fillField(v.row.original); setIdEditOrDelete(v.row.original.id); openCreateUpdate() }} classe="w-32 h-32 transition-all duration-300 hover:brightness-90" />
				<SvgUse id="#icon-search-estoque" onClick={() => { setAction('update'); fillField(v.row.original); setIdEditOrDelete(v.row.original.id); openModal() }} classe="w-32 h-32 transition-all duration-300 hover:brightness-90" /></div>
		},

	];

	const data = [
		{
			id: 1,
			produto: 'Café Tesouro',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '10',
			custoEmbalagem: 'R$ 18,40',
			options: 'icons',
		},
		{
			id: 2,
			produto: 'Achocolatado',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '15',
			custoEmbalagem: 'R$ 12,00',
			options: 'icons',
		},
		{
			id: 1,
			produto: 'Café Tesouro',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '10',
			custoEmbalagem: 'R$ 18,40',
			options: 'icons',
		},
		{
			id: 2,
			produto: 'Achocolatado',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '15',
			custoEmbalagem: 'R$ 12,00',
			options: 'icons',
		},
		{
			id: 1,
			produto: 'Café Tesouro',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '10',
			custoEmbalagem: 'R$ 18,40',
			options: 'icons',
		},
		{
			id: 2,
			produto: 'Achocolatado',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '15',
			custoEmbalagem: 'R$ 12,00',
			options: 'icons',
		},
		{
			id: 1,
			produto: 'Café Tesouro',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '10',
			custoEmbalagem: 'R$ 18,40',
			options: 'icons',
		},
		{
			id: 2,
			produto: 'Achocolatado',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '15',
			custoEmbalagem: 'R$ 12,00',
			options: 'icons',
		},
		{
			id: 1,
			produto: 'Café Tesouro',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '10',
			custoEmbalagem: 'R$ 18,40',
			options: 'icons',
		},
		{
			id: 2,
			produto: 'Achocolatado',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '15',
			custoEmbalagem: 'R$ 12,00',
			options: 'icons',
		},
		{
			id: 1,
			produto: 'Café Tesouro',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '10',
			custoEmbalagem: 'R$ 18,40',
			options: 'icons',
		},
		{
			id: 2,
			produto: 'Achocolatado',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '15',
			custoEmbalagem: 'R$ 12,00',
			options: 'icons',
		},
		{
			id: 1,
			produto: 'Café Tesouro',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '10',
			custoEmbalagem: 'R$ 18,40',
			options: 'icons',
		},
		{
			id: 2,
			produto: 'Achocolatado',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '15',
			custoEmbalagem: 'R$ 12,00',
			options: 'icons',
		},
		{
			id: 1,
			produto: 'Café Tesouro',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '10',
			custoEmbalagem: 'R$ 18,40',
			options: 'icons',
		},
		{
			id: 2,
			produto: 'Achocolatado',
			departamento: 'Revenda',
			unidadeCompra: '1',
			unidadeVenda: 'Kg',
			qtdEmbalagem: '15',
			custoEmbalagem: 'R$ 12,00',
			options: 'icons',
		},
	]

	const arrSelect = categorias.map(current => ({
		value: current.id,
		label: current.nome
	}))

	const medidasSelect = [
		{ value: 'UN', label: 'UN' },
		{ value: 'KG', label: 'KG' },
	]


	// HEADER PERSONALIZADO
	const dataFilterPor = [{ value: "recentes", label: "Mais Recentes" },
	{ value: "antiga", label: "Mais Antigas" },
	]
	const [filterPor, setFilterPor] = useState();


	const HeaderComercializaveis = ({ filter, setFilter, pageSize, setPageSize }) => {
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
										const arrUpdated = GLOBAL.oldDate('data_criacao', produtos);
										setFilterPor(e.value);
										setProdutos([...arrUpdated])
									} else {
										const arrUpdated = GLOBAL.recentDate('data_criacao', produtos);
										
										setFilterPor(e.value);
										setProdutos([...arrUpdated])
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
					<ModalHeader text="Detalhes do Produto Comercializável" />

					<div className="p-24 flex flex-col gap-20">
						<div>
							<p className="font-semibold text-base text-neutral-90 mb-16">
								Informações do Produto comercializável
							</p>
							<label className='font-semibold text-sm text-neutral-70'>
								Nome
								<Input disabled setStateCurrent={setProduct} placeholder="Digite aqui" state={product} classe="h-48 !text-lg !font-semibold" />
							</label>
						</div>

						<div className="flex gap-16 md2:flex-col">
							<label className='font-semibold text-sm text-neutral-70 flex-1'>
								Departamento (categoria)
								<Input disabled setStateCurrent={setCategoria} placeholder="Digite aqui" state={categoria} classe="h-48 !text-lg !font-semibold" />
							</label>
							<label className='font-semibold text-sm text-neutral-70 flex-1'>
								Unidade de Compra
								<SelectComponent isDisabled classe="page-materiaPrima disabled" classeSelect="h-48 !text-lg !font-semibold !text-neutral-80" data={medidasSelect} setStateCurrent={setUnidadeCompra} state={unidadeCompra} value={unidadeCompra} />
							</label>
							<label className='font-semibold text-sm text-neutral-70 flex-1'>
								Unidade de Venda (kg/Un)
								<SelectComponent isDisabled classe="page-materiaPrima disabled" classeSelect="h-48 !text-lg !font-semibold !text-neutral-80" data={medidasSelect} setStateCurrent={setUnidadeVenda} state={unidadeVenda} value={unidadeVenda} />
							</label>
						</div>
						<div className="flex flex-col gap-20">
							<div className='flex gap-16'>
								<label className='font-semibold text-sm text-neutral-70 flex-1'>
									Quantidade Embalagem
									<Input disabled setStateCurrent={setQtdEmbalagem} placeholder="Digite aqui" state={qtdEmbalagem} classe="h-48 !text-lg !font-semibold" />
								</label>
								<label className='font-semibold text-sm text-neutral-70 flex-1'>
									Custo Embalagem (R$)
									<InputMaskedNumeric disabled setStateCurrent={setCustoEmbalagem} state={custoEmbalagem} placeholder="R$" classe=" !text-lg h-48 !text-neutral-80  !font-semibold" />
								</label>
							</div>
							<div className='flex gap-16'>
								<label className='font-semibold text-sm text-neutral-70 flex-1'>
									Custo Kg (R$)
									<InputMaskedNumeric disabled setStateCurrent={setCustoKg} state={custoKg} placeholder="R$" classe="  h-48 !text-lg  !text-neutral-80  !font-semibold pl" />
								</label>
								<label className='font-semibold text-sm text-neutral-70 flex-1'>
									Preço de Venda (R$)
									<InputMaskedNumeric disabled setStateCurrent={setPrecoVenda} state={precoVenda} placeholder="R$" classe="  h-48 !text-lg !text-neutral-80  !font-semibold pl" />
								</label>
							</div>
						</div>
						<label className='font-semibold text-sm text-neutral-70'>
							Descrição
							<Input setStateCurrent={setDescricao} disabled placeholder="Digite aqui" state={descricao} classe="h-48 !text-lg !font-semibold" />
						</label>
					</div>


					<footer className="flex ml-auto px-24 pb-16">
						<Button classe="mr-16 h-48"
							onClick={openCreateUpdate}
							iconID="#icon-pen-edit"
						>
							Alterar dados
						</Button>
						<Button
							onClick={deleteProduto}
							disabled={loading}
							iconID="#icon-folder-delete"
							classe={`${loading ? 'is-loading' : ''}bg-alert-red-10 text-alert-red-100 hover:text-alert-red-100 h-48`}>
							Excluir dados
						</Button>
					</footer>
				</ModalContent>

				<ModalContent id="cadastrar_atualizar">
					<ModalHeader text={action === 'create' ? "Cadastrar Produto Comercializável" : 'Alterar Produto Comercializável'} iconID={'#icon-milk'} className=" bg-transparent text-primary-pure text-2xl pb-0" iconClass="!w-24 !h-24" />

					<div className="p-24 pt-32 flex flex-col gap-20">
						<div>
							<label className='font-medium text-sm text-neutral-80'>
								Nome
								<Input setStateCurrent={setProduct} placeholder="Digite aqui" state={product} classe="h-48 !text-sm !font-medium" />
							</label>
						</div>

						<div className="flex gap-16 !items-end md2:flex-col">
							<label className='font-medium text-sm text-neutral-80  flex-1 md2:w-full'>
								Departamento (Categoria)
								<SelectComponent classe="page-embalagem" classeSelect="" data={arrSelect} setStateCurrent={setCategoria} state={categoria} value={categoria} />
							</label>
							<label className='font-medium text-sm text-neutral-80 flex-1 md2:w-full'>
								Unidade de compra
								<SelectComponent classe="page-embalagem" classeSelect="" data={medidasSelect} setStateCurrent={setUnidadeCompra} state={unidadeCompra} value={unidadeCompra} />
							</label>

						</div>
						<div className="flex gap-16 !items-end md2:flex-col">
							<label className='font-medium text-sm text-neutral-80  flex-1 md2:w-full'>
								Unidade de venda (Kg/Un)
								<SelectComponent classe="page-embalagem" classeSelect="" data={medidasSelect} setStateCurrent={setUnidadeVenda} state={unidadeVenda} value={unidadeVenda} />
							</label>
							<label className='font-semibold text-sm text-neutral-80  flex-1 md2:w-full'>
								Qtd. por Embalagem
								<InputAddSubtract state={qtdEmbalagem} setStateCurrent={setQtdEmbalagem} classe="!text-sm h-48 !text-neutral-70" />
							</label>
							<label className='font-semibold text-sm text-neutral-80 flex-1 md2:w-full'>
								Custo por Embalagem (R$)
								<InputMaskedNumeric setStateCurrent={setCustoEmbalagem} state={custoEmbalagem} placeholder="R$" classe=" !text-sm h-48 !text-neutral-70  !font-semibold pl" />
							</label>
						</div>
						<div className="flex gap-16 !items-end md2:flex-col">

							<label className='font-semibold text-sm text-neutral-80 flex-1 md2:w-full'>
								Custo por Kg (R$)
								<InputMaskedNumeric setStateCurrent={setCustoKg} state={custoKg} placeholder="R$" classe=" !text-sm h-48 !text-neutral-70  !font-semibold pl" />
							</label>
							<label className='font-semibold text-sm text-neutral-80 flex-1 md2:w-full'>
								Preço por Venda (R$)
								<InputMaskedNumeric setStateCurrent={setPrecoVenda} state={precoVenda} placeholder="R$" classe=" !text-sm h-48 !text-neutral-70  !font-semibold pl" />
							</label>

							<label className='font-semibold text-sm flex-1 text-neutral-80 md2:w-full'>
								Esse produto é
								<div className="flex gap-16 mt-18 items-center ">
									<CheckBox containerClass="sm"
										value={tipo || ''}
										checked={tipo === 'Ingrediente'}
										onChange={() => setTipo('Ingrediente')}
									>
										<p className='text-sm'>Ingrediente</p>
									</CheckBox>
									<CheckBox containerClass="sm"
										value={tipo || ''}
										checked={tipo === 'Receita'}
										onChange={() => setTipo('Receita')}
									>
										<p className='text-sm'>Receita</p>
									</CheckBox>
								</div>
							</label>
						</div>
						<label className='font-semibold text-sm text-neutral-80'>
							Descrição
							<TextArea value={descricao} onChange={(e) => setDescricao(e.target.value)} classe="!text-neutral-70" placeholder="Descreva aqui..." />
						</label>
						{
							fileRemote && <label className='font-semibold text-sm text-neutral-80'>
								Imagem Salva
								<img src={fileRemote} className='h-[80px] w-[80px] rounded-md object-cover' alt="logo do produto" />
							</label>
						}
						<label className='font-semibold text-sm text-neutral-80'>
							Imagem do produto
							<Upload
								instantUpload={false}
								maxFiles={1}
								setSaves={setFilesSaves}
								titleEl={`<p class="text-neutral-70 font-semibold text-sm text-center">Arraste e solte o arquivo ou <br> <span class="text-primary-pure">selecione o arquivo</span></p>`}
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
							onClick={handleRequest}
							classe={` h-48 ${loading ? 'is-loading' : ''} disabled:pointer-events-none`}
							disabled={!HasFieldBlank() || loading}
						>
							{action === 'create' ? 'Cadastrar produto' : 'Salvar alterações'}
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
							Voltar para lista
						</Button>

					</div>
				</ModalContent>
			</Modal>
			<div className="container">
				<Card classe="my-64 px-24 py-32">
					<header className='flex justify-between md2:flex-col md2:gap-16'>
						<Title classe="text-neutral-90 flex gap-8 font-medium">
							<SvgUse id="#icon-milk" />
							Produtos Comercializáveis
						</Title>
						<Button
							onClick={() => {
								setAction('create');
								openCreateUpdate();
							}}
							iconID="#icon_add" svgClass="!w-20 !h-20" classe="md2:w-full flex justify-center h-48">
							Novo produto comercializável
						</Button>
					</header>
					<div className='mt-32'>
						{
							produtos.length > 0 ?
								<Table
									options={{
										download: true,
										headerChildren: true,
									}}
									HeaderCustom={HeaderComercializaveis}
									arrData={produtos}
									arrColumns={columns}
								/>

								: <p>Nenhum produto cadastrado.</p>
						}
					</div>
				</Card>

			</div>
		</>
	)
}

export default ProdutosComercializaveis