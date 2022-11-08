import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Button from '../../../components/DesignSystem/Button'
import { Card } from '../../../components/DesignSystem/Card'
import { Title } from '../../../components/DesignSystem/Headings'
import { SelectComponent } from '../../../components/DesignSystem/SelectComponent'
import Table from '../../../components/DesignSystem/Table'
import SvgUse from '../../../components/svg/svgUse'
import { api } from '../../../services/api'

const ListaEscala = () => {
    const navigate = useNavigate();
    const [escalas, setEscalas] = useState([]);
    const [turno, setTurno] = useState([]);
    const [tarefas, setTarefas] = useState([]);
    const [semana, setSemana] = useState([]);

    const requestInitial = async () => {
        const { data: responseEscala } = await api.get('/api/recursos_humanos/escalas/');
        setEscalas(responseEscala)

        //Buscando opcoes selects 
        const { data: responseSelects } = await api.get('/api/recursos_humanos/escalas/selects/');
        const turno = responseSelects.opcoes_turno.map(select => ({
            value: select.id,
            label: select.nome
        }));
        turno.splice(0, 0, { value: '', label: 'Turno' })
        setTurno(turno);

        const tarefa = responseSelects.opcoes_tarefa.map(select => ({
            value: select.id,
            label: select.nome
        }));
        tarefa.splice(0, 0, { value: '', label: 'Tarefa' })
        setTarefas(tarefa);

        const semana = responseSelects.opcoes_semana.map(select => ({
            value: select.id,
            label: select.nome
        }));
        semana.splice(0, 0, { value: '', label: 'Semana' })
        setSemana(semana);
    }

    useEffect(() => {
        requestInitial();
    }, [])

    const columns = [
        {
            Header: () => <h2 className="font-semibold text-sm text-neutral-80">Semana</h2>,
            accessor: "get_nome_semana",
            Cell: (v) => <p className="text-sm text-neutral-80 font-normal">{v.value}</p>
        },
        {
            Header: "Tarefa",
            accessor: "get_nome_tarefa",
            noFilter: true,
            classTH: 'not-filter',
        },
        {
            Header: "Turno",
            accessor: "get_nome_turno",
            noFilter: true,
            classTH: 'not-filter'
        },
        {
            accessor: "opcoes",
            Header: () => <span className="flex justify-end">Opções</span>,
            Cell: (v) => {

                return (
                    <div className="number">
                        <Link to={`/escala/${v.row.original.id}`} >
                            <Button
                                className="btn secondary  justify-center"
                                iconID="#icon_pencil"
                            >
                                Editar
                            </Button>
                        </Link>
                    </div>
                )
            },
        },
    ];


    const [turnoSelected, setTurnoSelected] = useState('');
    const [tarefaSelected, setTarefaSelected] = useState('');
    const [semanaSelected, setSemanaSelected] = useState('');

    const getWithFilter = async () => {
        const { data } = await api.get(`/api/recursos_humanos/escalas/?tarefa=${tarefaSelected}&turno=${turnoSelected}&semana=${semanaSelected}`);
        setEscalas(data);
    }

    useEffect(() => {
        getWithFilter();
    }, [turnoSelected, tarefaSelected, semanaSelected])

    //Header personalizado
    const headerListaEscala = () => {
        return (
            <div className="flex mb-32 justify-between md2:flex-col md2:gap-24">
                <Title classe="text-neutral-90 flex gap-8">
                    <SvgUse id="#icon-tasks-escala-operacional" />
                    Lista de escala
                </Title>

                <div className="flex md2:flex-col md2:gap-16">
                    <div className="flex items-center gap-8 ml-32 md2:ml-0 md2:w-full">
                        <p className='md2:hidden'>Semana</p>
                        <SelectComponent
                            classe={`md min-w-[16rem] md2:w-full`}
                            data={semana}
                            setStateCurrent={setSemanaSelected}
                            placeholder={`Semana`}
                            state={semanaSelected}
                            value={semanaSelected}
                        />
                    </div>
                    <div className="flex items-center gap-8 ml-32 md2:ml-0 md2:w-full">
                        <p className='md2:hidden'>Tarefa</p>
                        <SelectComponent
                            classe={`md min-w-[10rem] md2:w-full`}
                            data={tarefas}
                            setStateCurrent={setTarefaSelected}
                            placeholder={`Tarefa`}
                            state={tarefaSelected}
                            value={tarefaSelected}
                        />
                    </div>
                    <div className="flex items-center gap-8 ml-8 mr-32 md2:mr-0 md2:ml-0 md2:w-full">
                        <p className='md2:hidden'>Turno</p>
                        <SelectComponent
                            classe={`md min-w-[10rem] md2:w-full`}
                            data={turno}
                            setStateCurrent={setTurnoSelected}
                            placeholder={`Turno`}
                            state={turnoSelected}
                            value={turnoSelected}
                        />
                    </div>
                    <Button
                        iconID="#icon_add" svgClass="!w-20 !h-20" classe="md2:w-full flex justify-center h-48"
                        onClick={() => navigate('/escala')}
                    >
                        Cadastrar escala
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className='container'>

            <Card classe="my-64 px-24 py-32">

                <div className='mt-32'>
                 
                       <Table
                            options={{
                                download: true,
                                headerChildren: true,
                            }}
                            HeaderCustom={headerListaEscala}
                            arrData={escalas}
                            arrColumns={columns}
                        />
                </div>
            </Card>
        </div>
    )
}

export default ListaEscala;