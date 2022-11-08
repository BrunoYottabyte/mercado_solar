import { Card } from '../../../components/DesignSystem/Card';
import { Title } from '../../../components/DesignSystem/Headings';
import Table from '../../../components/DesignSystem/Table';
import SvgUse from '../../../components/svg/svgUse';
import CheckBox from '../../../components/DesignSystem/CheckBox';
import Badge from '../../../components/DesignSystem/Badge';
import { useState } from 'react';
import { SelectComponent } from '../../../components/DesignSystem/SelectComponent';
import { InputDate } from '../../../components/DesignSystem/InputDate';

const columns = [
	{
		Header: () => <h2 className="font-semibold text-sm text-neutral-80">Colaborador</h2>,
		accessor: "colaborador",
		Cell: (v) => <p className="text-sm text-neutral-80 font-normal">{v.value}</p>
	},
	{
		Header: "Atividade",
		accessor: "atividade",
		Cell: (v) => <div className="flex"><p>{v.value}</p></div>,
	},
	{
		Header: "Categoria",
		accessor: "categoria",
		Cell: (v) => <div className="flex relative"><span className='absolute w-8 h-8 top-0 left-8 bottom-0 my-auto rounded bg-primary-pure'></span><Badge title={v.value} classe="pl-20 rounded-lg md2:px-24  md2:whitespace-nowrap" /></div>,

	},
	{
		Header: "Status %",
		accessor: "status",
		Cell: (v) => <div className="flex"><p>{v.value}%</p></div>,
	},
	{
		Header: "Hora prevista",
		accessor: "entrega",
		Cell: (v) => <div className="flex"><p>{v.value}</p></div>,
	}
];

const data = [
	{
		id: 1,
		colaborador: 'Bruno dos Santos',
		atividade: 'Atividade 1',
		categoria: 'Categoria 1',
		status: 25,
		entrega: '15:00'
	},
	{
		id: 2,
		colaborador: 'Edson de Lima',
		atividade: 'Atividade 2',
		categoria: 'Categoria 2',
		status: 80,
		entrega: '14:00'
	},
	{
		id: 3,
		colaborador: 'Bernado ',
		atividade: 'Atividade 3',
		categoria: 'Categoria 3',
		status: 60,
		entrega: '12:00'
	},
	{
		id: 4,
		colaborador: 'Adriano Cachorro',
		atividade: 'Atividade 4',
		categoria: 'Categoria 4',
		status: 72,
		entrega: '13:30'
	},
	{
		id: 5,
		colaborador: 'Eliana pereira',
		atividade: 'Atividade 5',
		categoria: 'Categoria 5',
		status: 45,
		entrega: '15:00'
	},
	{
		id: 6,
		colaborador: 'Gabriela Ferraz',
		atividade: 'Atividade 6',
		categoria: 'Categoria 6',
		status: 63,
		entrega: '13:00'
	},
	{
		id: 7,
		colaborador: 'Bernado ',
		atividade: 'Atividade 7',
		categoria: 'Categoria 7',
		status: 84,
		entrega: '11:20'
	},
	{
		id: 8,
		colaborador: 'Andrei cachorrao',
		atividade: 'Atividade 8',
		categoria: 'Categoria 8',
		status: 89,
		entrega: '13:45'
	},
	{
		id: 9,
		colaborador: 'Paula Souza',
		atividade: 'Atividade 9',
		categoria: 'Categoria 9',
		status: 43,
		entrega: '15:15'
	},
	{
		id: 10,
		colaborador: 'Karla Siqueira',
		atividade: 'Atividade 10',
		categoria: 'Categoria 10',
		status: 95,
		entrega: '16:40'
	},
	{
		id: 11,
		colaborador: 'Mateus Lima',
		atividade: 'Atividade 11',
		categoria: 'Categoria 3',
		status: 60,
		entrega: '22:00'
	},
	{
		id: 12,
		colaborador: 'Adriano Cachorro',
		atividade: 'Atividade 4',
		categoria: 'Categoria 4',
		status: 72,
		entrega: '13:30'
	},

]



const Atividades = () => {

	// HEADER PERSONALIZADO
	const dataColaborador = [
		{
			value: 'siqueira', label: 'Bruno Siqueira'
		},
		{
			value: 'lima', label: 'Edson Lima'
		}
	]
	const [colaboradorSelected, setColaboradorSelected] = useState();

	const [startDate, setStartDate] = useState();

	const HeaderAtividades = ({ filter, setFilter, pageSize, setPageSize }) => {
		return (
			<div className='flex justify-between mb-24 md2:flex-col md2:gap-16'>
				<header className='flex justify-between md2:flex-col md2:gap-16'>
					<Title classe="text-neutral-90 flex gap-8 font-medium">
						<SvgUse id="#icon-checklist-analise-desempenho" />
						Atividades
					</Title>
				</header>

				<div className='flex md:flex-col md:gap-16'>
					<label className="inline-flex gap-8  items-center select-none md2:flex-1">
						<SelectComponent
							classe="md min-w-[16rem] md2:min-w-[0] md2:w-full"
							data={dataColaborador}
							setStateCurrent={setColaboradorSelected}
							state={colaboradorSelected}
							value={colaboradorSelected}
							placeholder={"Selecione o colaborador"}
						/>
					</label>
					<label className="md:ml-0 ml-8 select-none md2:flex-1">
						<SelectComponent
							classe="md min-w-[16rem] md2:min-w-[0] md2:w-full"
							data={dataColaborador}
							setStateCurrent={setColaboradorSelected}
							state={colaboradorSelected}
							value={colaboradorSelected}
							placeholder={"Selecione o colaborador"}
						/>
					</label>
					<InputDate
						containerClass="ml-8 md:ml-0 md2:flex-1"
						setStartDate={setStartDate}
						startDate={startDate}
						placeholderText={"Selecione a data"}
						noIcon={false}
					/>

{/* <div className='ml-32 flex items-center gap-8 md:self-end'>
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
					</div> */}
				</div>
			</div>
		)
	}


	return (
		<main className='container'>
			<Card classe="my-64 p-24">
			
					 <Table
						options={{
							download: true,
							headerChildren: true,
						}}
						HeaderCustom={HeaderAtividades}
						arrData={data}
						arrColumns={columns}
					/> 

				
			</Card>
		</main>
	)
}

export default Atividades