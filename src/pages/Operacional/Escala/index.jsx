import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Button from "../../../components/DesignSystem/Button";
import { Card } from "../../../components/DesignSystem/Card"
import CheckBox from "../../../components/DesignSystem/CheckBox";
import { Title } from "../../../components/DesignSystem/Headings"
import { Modal } from "../../../components/DesignSystem/Modal/Modal";
import { ModalContent } from "../../../components/DesignSystem/Modal/ModalContent";
import { SelectComponent } from "../../../components/DesignSystem/SelectComponent";
import Table from "../../../components/DesignSystem/Table"
import SvgUse from "../../../components/svg/svgUse"
import { useGlobalContext } from "../../../context/GlobalContext";
import { api } from "../../../services/api";
import { GLOBAL } from "../../../utils/GLOBAL";



const data = [
	{
		id: 1,
		funcionario: 'Bruno dos Santos',
		segunda: ''
	},
	{
		id: 2,
		funcionario: 'Edson de Lima',
		terca: ''
	},
	{
		id: 3,
		funcionario: 'Bernado ',
		quarta: ''
	},
	{
		id: 4,
		funcionario: 'Adriano Cachorro',
		quinta: ''
	},
	{
		id: 5,
		funcionario: 'Andrei 22',
		sexta: ''
	},
	{
		id: 6,
		funcionario: 'Jonathan salva todos',
		sabado: ''
	},
	{
		id: 7,
		funcionario: 'Marlon',
		domingo: ''
	},
	{
		id: 8,
		funcionario: 'Bruno dos Santos',
		segunda: ''
	},
	{
		id: 9,
		funcionario: 'Edson de Lima',
		terca: ''
	},
	{
		id: 10,
		funcionario: 'Bernado ',
		quarta: ''
	},
	{
		id: 11,
		funcionario: 'Adriano Cachorro',
		quinta: ''
	},
	{
		id: 12,
		funcionario: 'Andrei 22',
		sexta: ''
	},
	{
		id: 13,
		funcionario: 'Jonathan salva todos',
		sabado: ''
	},
	{
		id: 14,
		funcionario: 'Marlon',
		domingo: ''
	},
]




const Escala = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [escala, setEscala] = useState([]);
	const [fullArray, setFullArray] = useState([]);
	const [loading, setLoading] = useState(false);
	const [turnoData, setTurnoData] = useState([]);
	const [semanaData, setSemanaData] = useState([]);
	const [tarefaData, setTarefaData] = useState([]);
	const [turnoSelected, setTurnoSelected] = useState('');
	const [semanaSelected, setSemanaSelected] = useState('');
	const [tarefaSelected, setTarefaSelected] = useState('');
	const { setmodalOpen, modalOpen } = useGlobalContext();
	const { showToastify } = GLOBAL;
	//
	const [action, setAction] = useState('create');
	// === update
	const [idEscala, setIdEscala] = useState('');


	const requestInitial = async () => {
		let id = location.pathname.split('/').at(-1);

		if (id && Number(id)) {
		
			//update
			setIdEscala(id);
			const { data: responseEscala } = await api.get(`api/recursos_humanos/escalas/${id}`);
			console.log(responseEscala);
			setFullArray(responseEscala);
			const justTheScales = responseEscala.tarefas_escala.map(obj => obj);
			console.log(responseEscala);
			setEscala(justTheScales);
			setTurnoData([{ value: responseEscala.turno, label: responseEscala.get_nome_turno }])
			setTarefaData([{ value: responseEscala.get_id_tarefa, label: responseEscala.get_nome_tarefa }])
			setSemanaData([{ value: responseEscala.semana, label: responseEscala.get_nome_semana }])
			setAction('update');
		} else {
			
			const { data } = await api.get(`/api/recursos_humanos/funcionarios/`);
			const updatedData = data.map(item => ({
				...item,
				tarefas_escala: {
					funcionario: item.id,
					get_nome_funcionario: item.nome,
					segunda: false,
					terca: false,
					quarta: false,
					quinta: false,
					sexta: false,
					sabado: false,
					domingo: false,
				}
			}));
			setFullArray(updatedData);
			const justTheScales = updatedData.map(item => item.tarefas_escala);
			setEscala(justTheScales);
			//Buscando opcoes selects 
			const { data: responseSelects } = await api.get('/api/recursos_humanos/escalas/selects/');
			const turno = responseSelects.opcoes_turno.map(select => ({
				value: select.id,
				label: select.nome
			}));
			setTurnoData(turno);

			const tarefa = responseSelects.opcoes_tarefa.map(select => ({
				value: select.id,
				label: select.nome
			}));
			setTarefaData(tarefa);

			const semana = responseSelects.opcoes_semana.map(select => ({
				value: select.id,
				label: select.nome
			}));
			setSemanaData(semana);
		}
	}

	useEffect(() => {
		requestInitial();
	}, [])

	const changeFields = (obj, key) => {
		let currentState = obj.rows.map(item => item.original);


		let updatedFields = currentState.map(item => {
			if (action == 'update') {
				if (item.id == obj.row?.original.id) {
					return {
						...item,
						[key]: !obj.value
					}
				}
			} else {
				if (item.funcionario == obj.row?.original.funcionario) {
					return {
						...item,
						[key]: !obj.value
					}
				}
			}

			return item;
		});
		setEscala(updatedFields);
	}

	useEffect(() => {
		console.log(escala);
	}, [escala])

	const columns = [
		{
			Header: () => <h2 className="font-semibold text-sm text-neutral-80">Funcionário</h2>,
			accessor: "get_nome_funcionario",
			Cell: (v) => <p className="text-sm text-neutral-80 font-normal">{v.value}</p>
		},
		{
			Header: "Seg",
			accessor: "segunda",
			noFilter: true,
			classTH: 'not-filter',
			Cell: (v) => <div className="flex" ><CheckBox defaultChecked={v.value} onClick={() => changeFields(v, 'segunda')} /></div>,
		},
		{
			Header: "Ter",
			accessor: "terca",
			noFilter: true,
			classTH: 'not-filter',
			Cell: (v) => {
				return (
					<div className="flex"><CheckBox defaultChecked={v.value} onClick={() => changeFields(v, 'terca')} /></div>
				)
			},
		},
		{
			Header: "Qua",
			accessor: "quarta",
			noFilter: true,
			classTH: 'not-filter',
			Cell: (v) => <div className="flex"><CheckBox defaultChecked={v.value} onClick={() => changeFields(v, 'quarta')} /></div>,
		},
		{
			Header: "Qui",
			accessor: "quinta",
			noFilter: true,
			classTH: 'not-filter',
			Cell: (v) => <div className="flex"><CheckBox defaultChecked={v.value} onClick={() => changeFields(v, 'quinta')} /></div>,
		},
		{
			Header: "Sex",
			accessor: "sexta",
			noFilter: true,
			classTH: 'not-filter',
			Cell: (v) => <div className="flex"><CheckBox defaultChecked={v.value} onClick={() => changeFields(v, 'sexta')} /></div>,
		},
		{
			Header: "Sab",
			accessor: "sabado",
			noFilter: true,
			classTH: 'not-filter',
			Cell: (v) => <div className="flex"><CheckBox defaultChecked={v.value} onClick={() => changeFields(v, 'sabado')} /></div>,
		},
		{
			Header: "Dom",
			accessor: "domingo",
			noFilter: true,
			classTH: 'not-filter',
			Cell: (v) => <div className="flex"><CheckBox defaultChecked={v.value} onClick={() => changeFields(v, 'domingo')} /></div>,
		},

	];

	const createOrUpdate = async () => {
		if (action == 'update') {
			setLoading(true);
			try {
				let cloneEscala = fullArray;
				cloneEscala['tarefas_escala'] = escala;
				await api.put(`api/recursos_humanos/escalas/${idEscala}/`, cloneEscala);
				success()
			} catch (err) {
				const messages = GLOBAL.clearFeedbackErrorRequestDuplicated(err.response?.data);
				messages.map(message => showToastify(message))
			} finally {
				setLoading(false);
			}

		} else {
			setLoading(true);
			try {
				let objPost = {
					nome: "ESCALA DO POST",
					turno: turnoSelected,
					semana: semanaSelected,
					tarefas_escala: escala
				}
				await api.post(`api/recursos_humanos/escalas/`, objPost);
				console.log(objPost);
				success();
			} catch (err) {
				const messages = GLOBAL.clearFeedbackErrorRequestDuplicated(err.response?.data);
				messages.map(message => showToastify(message))
			} finally {
				setLoading(false);
			}
		}
	}

	const closeModal = () => {
		setmodalOpen({ open: false, id: false })
	}

	useEffect(() => {
		if (modalOpen.open == false || modalOpen.open == null) {
			clearTimeout(window.timeoutEscala)
		}
	}, [modalOpen]);

	const success = () => {
		setmodalOpen({ open: true, id: 'animation' });
		window.timeoutEscala = setTimeout(closeModal, 5000)
		requestInitial();
	}

	// Validação.
	const noHasFieldBlank = () => {
		if (String(turnoSelected).length <= 0 || turnoSelected == null) return false;
		if (String(semanaSelected).length <= 0 || semanaSelected == null) return false;
		return true
	}

	//Header personalizado
	const HeaderEscala = () => {
		return (
			<div className="flex mb-32 justify-between md2:flex-col md2:gap-24">
				<Title classe="text-neutral-90 flex gap-8">
					<SvgUse id="#icon-tasks-escala-operacional" />
					Escala
				</Title>

				<div className="flex md2:flex-col md2:gap-16 ">
					<div className="flex items-center gap-8 ml-32 md2:ml-0 md2:w-full">
						<p className="md2:hidden">Semana</p>
						<SelectComponent
							classe={`md min-w-[16rem] ${action == 'update' ? 'opacity-75' : ''} md2:w-full`}
							data={semanaData}
							setStateCurrent={setSemanaSelected}
							placeholder={`Semana`}
							state={action === 'update' ? semanaData[0]?.value : semanaSelected}
							value={action === 'update' ? semanaData[0]?.value : semanaSelected}
							isDisabled={action === 'update'}
						/>
					</div>
					<div className="flex items-center gap-8 ml-32 md2:ml-0 md2:w-full">
						<p className="md2:hidden">Tarefa</p>
						<SelectComponent
							classe={`md min-w-[10rem] ${action == 'update' ? 'opacity-75' : ''} md2:w-full`}
							data={tarefaData}
							setStateCurrent={setTarefaSelected}
							placeholder={`Tarefa`}
							state={action === 'update' ? tarefaData[0]?.value : tarefaSelected}
							value={action === 'update' ? tarefaData[0]?.value : tarefaSelected}
							isDisabled={action === 'update'}
						/>
					</div>
					<div className="flex items-center gap-8 ml-8 mr-32 md2:ml-0 md2:mr-0 md2:w-full">
						<p className="md2:hidden">Turno</p>
						<SelectComponent
							classe={`md min-w-[10rem] ${action == 'update' ? 'opacity-75' : ''} md2:w-full`}
							data={turnoData}
							setStateCurrent={setTurnoSelected}
							placeholder={`Turno`}
							state={action === 'update' ? turnoData[0]?.value : turnoSelected}
							value={action === 'update' ? turnoData[0]?.value : turnoSelected}
							isDisabled={action === 'update'}
						/>
					</div>
					<Button classe={`h-48 md2:w-full md2:justify-center ${loading ? 'btn is-loading' : ''} ${!noHasFieldBlank() ? 'opacity-75' : ''}`} disabled={loading ? true : action == 'create' ? !noHasFieldBlank() : false} onClick={createOrUpdate}>{action == 'update' ? 'Salvar alterações' : 'Cadastrar'}</Button>
				</div>
			</div>
		)
	}

	return (
		<div className="container ">
			<Modal className={`w-[600px]  md2:max-w-[400px] md2:w-[95vw]`}>

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
							{action == 'update' ? 'Atualizado com sucesso!' : 'Salvo com Sucesso'}
						</p>


						<Button
							onClick={() => {
								closeModal();
								navigate('/lista-escala');
							}}
							classe="mt-16 w-full h-56 text-center justify-center"
							svgClass="rotate-180"
							iconID="#icon_arrow_left"
						>
							Voltar para lista.
						</Button>

					</div>
				</ModalContent>
			</Modal>
			<Card classe="my-64 px-24 py-32">
				
				<div className="">
					<Table
						options={{
							download: true,
							headerChildren: true,
						}}
						HeaderCustom={HeaderEscala}
						arrData={escala}
						arrColumns={columns}
					/>

				</div>
			</Card>
		</div>
	)
}

export default Escala