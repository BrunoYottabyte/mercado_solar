import moment from 'moment';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/DesignSystem/Button';
import { Card } from '../../../components/DesignSystem/Card'
import { Title } from '../../../components/DesignSystem/Headings';
import { InputDate, InputDateRange } from '../../../components/DesignSystem/InputDate';
import { SelectComponent } from '../../../components/DesignSystem/SelectComponent';
import Table from '../../../components/DesignSystem/Table';
import SvgUse from '../../../components/svg/svgUse';
import { api } from '../../../services/api';

const Colaboradores = () => {
    const [pageSize, setPageSize] = useState(10);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    function crescente(a, b) {
        console.log(new Date(a.data_admissao).getTime() - new Date(b.data_admissao).getTime())
        return new Date(a.data_admissao).getTime() - new Date(b.data_admissao).getTime()
    }


    function descrescente(a, b) {
        return new Date(b.data_admissao).getTime() - new Date(a.data_admissao).getTime()
    }

    const requestInitial = async () => {
        const { data } = await api.get(`/api/recursos_humanos/funcionarios/`);
        setData(data.sort(descrescente));
    }

    useEffect(() => {
        requestInitial();
    }, [])


    const columns = [
        {
            Header: "Nome Completo",
            accessor: "nome",
        },
        {
            Header: "Aniversário",
            accessor: "data_nascimento",
        },
        {
            Header: "Data admissão",
            accessor: "data_admissao",
            Cell: (v) => moment(v.value).format('DD/MM/YYYY HH:mm')
        },
        {
            Header: "Situação atual",
            accessor: "situacao",
        },
        {
            Header: "Cargo",
            accessor: "cargo",

        },
        {
            Header: "Telefone",
            accessor: "telefone",

        },
        {
            Header: "E-mail",
            accessor: "email_pessoal",
        },
        {
            Header: "Opções",
            accessor: "options",
            noFilter: true,
            classTH: 'not-filter',
            Cell: (v) => <div className='flex gap-8 '>
                <SvgUse id="#icon-edit"
                    onClick={() => navigate(`/gestao-pessoas/colaboradores/cadastro-funcionario/${v.row.original.id}`)}
                    // onClick={() => { setAction('update'); fillField(v.row.original); setIdEditOrDelete(v.row.original.id); openCreateUpdate() }} 
                    classe="w-32 h-32 transition-all duration-300 hover:brightness-90"
                />
                <SvgUse id="#icon-search-estoque"
                    // onClick={() => { setAction('update'); fillField(v.row.original); setIdEditOrDelete(v.row.original.id); openModal() }} 
                    classe="w-32 h-32 transition-all duration-300 hover:brightness-90"
                /></div>
        },

    ];


    //HEADER PERSONALIZADO
    const [buscarPor, setBuscarPor] = useState();
    const [date, setDate] = useState(new Date());
    const [filtroSelected, setFiltroSelected] = useState('recentes');
    const [dateRange, setDateRange] = useState([null, null])

    useEffect(() => {
        if (dateRange[1] !== null) {
            let dateInit = moment(dateRange[0]).format('DD-MM-YYYY');
            let dateEnd = moment(dateRange[1]).format('DD-MM-YYYY');
            api.get(`/api/recursos_humanos/funcionarios/?data_final=${dateEnd}&data_inicial=${dateInit}`).then(({ data }) => {
                setData(data.sort(descrescente));
            })
        }
    }, [dateRange])

    const headerColaboradores = () => {
    
        return (
            <div className="flex md2:flex-col  justify-between mb-24">
                <div className='flex md2:flex-col md2:gap-16 md2:mb-16'>
                    <div className="flex items-center gap-8 mr-8 md2:mr-0 ">
                        <p className='md2:hidden'>Buscar por</p>
                        <SelectComponent
                            classe={`md min-w-[10rem] md2:w-full`}
                            data={[
                                { value: "'Data admissão'", label: 'Data admissão' },
                            ]}
                            setStateCurrent={setBuscarPor}
                            placeholder={`Ex.: Data de admissão`}
                            state={buscarPor}
                            value={buscarPor}
                        />
                    </div>
                    <div className="flex items-center mr-8 md2:mr-0 ">

                        <InputDateRange
                            setDateRange={setDateRange}
                            dateRange={dateRange}
                            classe="placeholder:text-neutral-70"
                            containerClass="md2:w-full text-sm"
                            placeholderText={'Selecione o intervalo de data'}
                            noIcon={true}
                            arrowIcon={true}
                        />
                    </div>

                </div>

                <div className='flex md2:flex-col md2:gap-16 items-start'>
                    <div className="flex items-center md2:w-full">
                        <p className='md2:hidden mr-8'>Filtrar por</p>
                        <SelectComponent
                            classe={`md min-w-[10rem] md2:w-full`}
                            data={[
                                { value: "recentes", label: "Mais Recentes" },
                                { value: "antiga", label: "Mais Antigas" },
                            ]}
                            setStateCurrent={setFiltroSelected}
                            placeholder={`Turno`}
                            state={filtroSelected}
                            value={filtroSelected}
                            onChange={
                                (e) => {
                                    if (e.value == 'antiga') {
                                        const arrUpdated = data.sort(crescente)

                                        setFiltroSelected(e.value)
                                        console.log(arrUpdated)
                                        setData([...arrUpdated])
                                    } else {
                                        const arrUpdated = data.sort(descrescente)
                                        console.log(arrUpdated)
                                        setFiltroSelected(e.value)
                                        setData([...arrUpdated])
                                    }
                                }
                            }
                        />
                    </div>

                    <div className="flex  ml-32 items-center gap-8 md2:self-end">

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
            </div>
        )
    }

    return (
        <div className='container'>
            <Card classe="my-64 px-24 py-32">
                <header className='flex justify-between md2:flex-col md2:gap-16'>
                    <Title classe="text-neutral-90 flex gap-8 font-medium">
                        <SvgUse id="#icon-title-func" />
                        Colaboradores
                    </Title>
                    <Button
                        onClick={() => navigate('/gestao-pessoas/colaboradores/cadastro-funcionario')}
                        iconID="#icon_add" svgClass="!w-20 !h-20" classe="md2:w-full flex justify-center h-48">
                        Cadastrar Funcionário
                    </Button>
                </header>

                <div className='mt-32'>
                    <Table
                        options={{
                            download: true,
                            headerChildren: true,
                        }}
                        HeaderCustom={headerColaboradores}
                        arrData={data}
                        arrColumns={columns}
                    />

                </div>
            </Card>
        </div>
    )
}

export default Colaboradores

