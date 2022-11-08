import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { async } from "regenerator-runtime";
import Button from "../../../../components/DesignSystem/Button";
import { Card } from "../../../../components/DesignSystem/Card";
import { Title } from "../../../../components/DesignSystem/Headings";
import { Input, InputAddSubtract, InputMaskedNumeric } from "../../../../components/DesignSystem/Input";
import { Modal } from "../../../../components/DesignSystem/Modal/Modal";
import { ModalContent } from "../../../../components/DesignSystem/Modal/ModalContent";
import { ModalHeader } from "../../../../components/DesignSystem/Modal/ModalHeader";
import { SelectComponent } from "../../../../components/DesignSystem/SelectComponent";
import Table from "../../../../components/DesignSystem/Table";
import { GlobalFilter } from "../../../../components/DesignSystem/Table/GlobalFilter";
import TextArea from "../../../../components/DesignSystem/TextArea";
import SvgUse from "../../../../components/svg/svgUse";
import { useGlobalContext } from "../../../../context/GlobalContext";
import { api } from "../../../../services/api";
import { GLOBAL } from "../../../../utils/GLOBAL";





const Embalagem = () => {
	const [product, setProduct] = useState(null);
	const [unidadeCompra, setUnidadeCompra] = useState(null);

	const [custoMedio, setCustoMedio] = useState('');
	const [kgUn, setKgUn] = useState('');
	const [action, setAction] = useState('update')

	const [embalagens, setEmbalagens] = useState([]);
	const [qtdEmbalagem, setQtdEmbalagem] = useState(1);
	const [descricao, setDescricao] = useState('');

	const [loading, setLoading] = useState(false);
	const { setmodalOpen, modalOpen } = useGlobalContext();
	const { showToastify } = GLOBAL

	const [idEditOrDelete, setIdEditOrDelete] = useState('');

	useEffect(() => {
		if (modalOpen.open == false || modalOpen.open == null) {
			clearTimeout(window.timeOutMateriaPrima)
			clearState();
		}
	}, [modalOpen])

	const openModal = () => {
		setmodalOpen({ open: true, id: 'confirm' });
	}

	const closeModal = () => {
		setmodalOpen({ open: false, id: null });
	}

	const openCreateUpdate = () => {
		setmodalOpen({ open: true, id: 'cadastrar_atualizar' });
	}

	const fetchInitial = async () => {
		const { data } = await api.get('/api/producao/embalagens/');
		// // Iniciando com valores mais recentes
		let dataUpdated = GLOBAL.recentDate('data_criacao', data);
		setFilterPor(dataFilterPor[0].value);
		setEmbalagens([...dataUpdated])
	}
	
	useEffect(() => {
		fetchInitial();
	}, [])


	const fillField = (obj) => {
		setProduct(obj.nome);
		setQtdEmbalagem(obj.quantidade_embalagem);
		setCustoMedio(obj.custo_embalagem);
		setKgUn(obj.kg_un);
		setUnidadeCompra(obj.unidade_compra);
		setDescricao(obj.descricao)
	}

	const formatJson = {
		nome: product,
		quantidade_embalagem: qtdEmbalagem,
		custo_embalagem: GLOBAL.numberPost(custoMedio),
		kg_un: kgUn,
		unidade_compra: unidadeCompra,
		descricao
	}

	const createEmbalagem = async () => {
		try {
			setLoading(true);
			const { data } = await api.post('/api/producao/embalagens/', formatJson);
			success();
		} catch (err) {
			let obj = err.response?.data;
			const messages = GLOBAL.clearFeedbackErrorRequestDuplicated(obj);
			messages.map(message => showToastify(message))
		} finally {
			setLoading(false);
		}
	}

	const updateEmbalagem = async () => {
		try {
			setLoading(true);
			const { data } = await api.put(`/api/producao/embalagens/${idEditOrDelete}/`, formatJson);
			success();
		} catch (err) {
			let obj = err.response?.data;
			const messages = GLOBAL.clearFeedbackErrorRequestDuplicated(obj);
			messages.map(message => showToastify(message))
		} finally {
			setLoading(false);
		}
	}

	const deleteEmbalagem = async () => {
		try {
			setLoading(true);
			const { data } = await api.delete(`/api/producao/embalagens/${idEditOrDelete}/`);
			success();
		} catch (err) {
			let obj = err.response?.data;
			const messages = GLOBAL.clearFeedbackErrorRequestDuplicated(obj);
			messages.map(message => showToastify(message))
		} finally {
			setLoading(false);
		}
	}

	const handleRequest = () => {
		switch (action) {
			case 'update':
				updateEmbalagem();
				break;
			case 'delete':
				deleteEmbalagem();
				break;
			default:
				createEmbalagem();
				break;
		}
	}

	const HasFieldBlank = () => {
		if (String(product).length <= 0) return false;
		if (String(kgUn).length <= 0) return false;
		if (String(qtdEmbalagem).length <= 0) return false;
		if (String(custoMedio).length <= 0) return false;
		if (String(descricao).length <= 0) return false;
		return true;
	}

	const clearState = () => {
		setProduct('');
		setCustoMedio('');
		setKgUn('');
		setQtdEmbalagem(1);
		setDescricao('')
	}

	const success = () => {
		setmodalOpen({ open: true, id: 'animation' });
		window.timeOutMateriaPrima = setTimeout(closeModal, 5000)
		fetchInitial();
	}

	const columns = [
		{
			Header: () => <h2 className="font-semibold text-sm text-neutral-80">Nome da embalagem</h2>,
			accessor: "nome",
			Cell: (v) => (
				<div className='flex gap-10'><SvgUse id="#icon-kitchen" classe="w-18 h-18" /> <SvgUse id="#icon-milk" classe="w-18 h-18" /><p className="text-sm text-neutral-80 font-normal">{v.value}</p></div>
			)
		},
		{
			Header: "Unidade de compra",
			accessor: "unidade_compra",
		},
		{
			Header: "Qnt. por Embalagem",
			accessor: "quantidade_embalagem",
		},
		{
			Header: "Custo médio",
			accessor: "custo_embalagem",
		},
		{
			Header: "kg/un",
			accessor: "kg_un",

		},
		{
			Header: "Em estoque",
			accessor: "em_estoque",


		},
		{
			Header: "Status",
			accessor: "status",
		},
		{
			Header: "Opções",
			accessor: "options",
			noFilter: true,
			classTH: 'not-filter',
			Cell: (v) => <div className='flex gap-8 '>
				<SvgUse id="#icon-edit" onClick={() => { setAction('update'); fillField(v.row.original); setIdEditOrDelete(v.row.original.id); openCreateUpdate() }} classe="w-32 h-32 transition-all duration-300 hover:brightness-90" />
				<SvgUse id="#icon-search-estoque" onClick={() => { openModal(); setAction('update'); fillField(v.row.original); setIdEditOrDelete(v.row.original.id); }} classe="w-32 h-32 transition-all duration-300 hover:brightness-90" /></div>
		},

	];

	const arrSelect = [
		{ value: 'UN', label: 'UN' },
		{ value: 'KG', label: 'KG' }
	]



	// HEADER PERSONALIZADO
	const dataFilterPor = [{ value: "recentes", label: "Mais Recentes" },
	{ value: "antiga", label: "Mais Antigas" },
	]
	const [filterPor, setFilterPor] = useState();


	const HeaderEmbalagens = ({ filter, setFilter, pageSize, setPageSize }) => {
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
										const arrUpdated = GLOBAL.oldDate('data_criacao', embalagens);
								
										setFilterPor(e.value);
										setEmbalagens([...arrUpdated])
									} else {
										const arrUpdated = GLOBAL.recentDate('data_criacao', embalagens);
										setFilterPor(e.value);
										setEmbalagens([...arrUpdated])
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
					<ModalHeader text="Detalhes da Embalagem" />

					<div className="p-24 flex flex-col gap-20">
						<div>
							<p className="font-semibold text-base text-neutral-90 mb-16">
								Informações do Produto de Revenda
							</p>
							<label className='font-semibold text-sm text-neutral-70'>
								Nome da embalagem
								<Input disabled setStateCurrent={setProduct} placeholder="Digite aqui" state={product} classe="h-48 !text-lg !font-semibold" />
							</label>
						</div>

						<div className="flex gap-24 md2:flex-col">
							<label className='font-semibold text-sm text-neutral-70 flex-1'>
								Unidade de compra
								<Input disabled setStateCurrent={setUnidadeCompra} placeholder="Digite aqui" state={unidadeCompra} classe="h-48 !text-lg !font-semibold" />
							</label>
							<label className='font-semibold text-sm text-neutral-70 flex-1'>
								Qtd. por Embalagem
								<Input disabled setStateCurrent={setQtdEmbalagem} placeholder="Digite aqui" state={qtdEmbalagem} classe="h-48 !text-lg !font-semibold" />
							</label>
							<label className='font-semibold text-sm text-neutral-70 flex-1'>
								Custo médio
								<InputMaskedNumeric disabled setStateCurrent={setCustoMedio} state={custoMedio} placeholder="R$" classe="h-48 !text-lg !font-semibold pl" />
							</label>


							<label className='font-semibold text-sm text-neutral-70 flex-1'>
								kg/un
								<SelectComponent isDisabled classe="page-materiaPrima " classeSelect="h-48 !text-lg !font-semibold !text-neutral-80" data={arrSelect} setStateCurrent={setKgUn} state={kgUn} value={kgUn} />
							</label>
						</div>
						<label className='font-semibold text-sm text-neutral-70'>
							Descrição
							<Input disabled setStateCurrent={setDescricao} placeholder="Digite aqui" state={descricao} classe="h-48 !text-lg !font-semibold" />
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
							iconID="#icon-folder-delete"
							onClick={deleteEmbalagem}
							classe={`bg-alert-red-10 text-alert-red-100 hover:text-alert-red-100 h-48 ${loading ? 'is-loading' : ''}`}>
							Excluir dados
						</Button>
					</footer>
				</ModalContent>

				<ModalContent id="cadastrar_atualizar">
					<ModalHeader text={action === 'create' ? "Cadastrar Embalagem" : 'Alterar Embalagem'} iconID={'#icon-embalagem'} className="bg-transparent text-primary-pure text-2xl pb-0" iconClass="!w-24 !h-24" />

					<div className="p-24 pt-32 flex flex-col gap-20">
						<div>
							<label className='font-semibold text-sm text-neutral-80'>
								Nome da embalagem
								<Input state={product} setStateCurrent={setProduct} placeholder="Digite aqui" />
								{/* <SelectComponent classe=" page-embalagem" classeSelect="h-48 " data={arrSelect} setStateCurrent={setUnidadeCompra} state={unidadeCompra} value={unidadeCompra}  /> */}
							</label>
						</div>

						<div className="flex gap-24 !items-end md2:flex-col">
							<label className='font-semibold text-sm text-neutral-80  flex-1 md2:w-full'>
								Unidade de compra
								<SelectComponent classe="page-embalagem " classeSelect="!text-sm !text-neutral-80" data={arrSelect} setStateCurrent={setUnidadeCompra} state={unidadeCompra} value={unidadeCompra} />
							</label>
							<label className='font-semibold text-sm text-neutral-80 flex-1 md2:w-full'>
								Qtd. por Embalagem
								<InputAddSubtract state={qtdEmbalagem} setStateCurrent={setQtdEmbalagem} classe="!text-sm h-48 !text-neutral-70" />
							</label>
							<label className='font-semibold text-sm text-neutral-80 flex-1 md2:w-full'>
								Custo médio
								<InputMaskedNumeric backReal={true} setStateCurrent={setCustoMedio} state={custoMedio} placeholder="R$" classe=" !text-sm h-48 !text-neutral-70  !font-semibold pl" />
							</label>


							<label className='font-semibold text-sm text-neutral-80 flex-1 md2:w-full'>
								kg/un
								<SelectComponent classe="page-embalagem" classeSelect="" data={arrSelect} setStateCurrent={setKgUn} state={kgUn} value={kgUn} />
							</label>
						</div>
						<label className='font-semibold text-sm text-neutral-80'>
							Descrição
							<TextArea classe="!text-neutral-70" placeholder="Descreva aqui..." value={descricao} onChange={(e) => setDescricao(e.target.value)} />
						</label>
					</div>


					<footer className="flex ml-auto px-24 pb-16">
						<Button classe="mr-16 h-48 secondary"
							onClick={closeModal}
						>
							Cancelar
						</Button>
						<Button
							disabled={!HasFieldBlank()}
							onClick={handleRequest}
							classe={`h-48 disabled:opacity-50 disabled:pointer-events-none btn ${loading ? 'is-loading' : ''}`}
						>
							{action === 'create' ? 'Cadastrar embalagem' : 'Salvar alterações'}
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
							<SvgUse id="#icon-embalagem" />
							Embalagens
						</Title>
						<Button
							onClick={() => {
								setAction('create');
								openCreateUpdate();
							}}
							iconID="#icon_add" svgClass="!w-20 !h-20" classe="md2:w-full flex justify-center h-48">
							Nova Embalagem
						</Button>
					</header>

					<div className='mt-32'>
						{embalagens.length > 0 ? <Table
								options={{
									download: true,
									headerChildren: true,
								}}
								HeaderCustom={HeaderEmbalagens}
								arrData={embalagens}
								arrColumns={columns}
							/>
							: <p>Nenhuma embalagem cadastrada.</p> }
					</div>
				</Card>
			</div>
		</>
	)
}

export default Embalagem;