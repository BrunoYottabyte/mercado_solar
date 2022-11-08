import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/DesignSystem/Button'
import { Card } from '../../components/DesignSystem/Card'
import { Title } from '../../components/DesignSystem/Headings'
import { Input } from '../../components/DesignSystem/Input'
import { InputDate, InputDateRange } from '../../components/DesignSystem/InputDate'
import { Modal } from '../../components/DesignSystem/Modal/Modal'
import { ModalContent } from '../../components/DesignSystem/Modal/ModalContent'
import { ModalHeader } from '../../components/DesignSystem/Modal/ModalHeader'
import { SelectComponent } from '../../components/DesignSystem/SelectComponent'
import Table from '../../components/DesignSystem/Table'
import { GlobalFilter } from '../../components/DesignSystem/Table/GlobalFilter'
import SvgUse from '../../components/svg/svgUse'
import { useGlobalContext } from '../../context/GlobalContext'
import { GLOBAL } from '../../utils/GLOBAL'

const TodasDespesas = () => {

    // states do header
    const [search, setSearch] = useState('');
    const [pageSize, setPageSize] = useState(10);
    const [buscarPor, setBuscarPor] = useState();
    const [date, setDate] = useState(new Date());
    const [filtroSelected, setFiltroSelected] = useState('recentes');
    const { setmodalOpen, modalOpen } = useGlobalContext();
    // 

    const navigate = useNavigate();

    const columns = [
        {
            Header: "Data Prevista",
            accessor: "data",
        },
        {
            Header: "Data Realizada",
            accessor: "data_realizada",
        },
        {
            Header: "Descrição",
            accessor: "descricao",
        },
        {
            Header: "Conta contábil",
            accessor: "contabil",
        },
        {
            Header: "Fornecedor",
            accessor: "fornecedor",
        },
        {
            Header: "Grupo",
            accessor: "grupo",

        },
        {
            Header: "Valor",
            accessor: "valor",
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
                <SvgUse id="#icon-check-table"
                    onClick={() => setmodalOpen({ open: true, id: 'confirm' })}
                    classe="w-32 h-32 transition-all duration-300 hover:brightness-90"
                />
                <SvgUse id="#icon-search-estoque"
                    classe="w-32 h-32 transition-all duration-300 hover:brightness-90"
                /></div>
        },

    ];

    const data = [
        {
            data: '01/06/2022',
            data_realizada: '01/07/2022',
            descricao: 'R$ 0,00',
            contabil: '0%',
            fornecedor: '35.00%',
            grupo: 'R$208,00',
            valor: 'R$-588,68',
            status: 'R$-588,68'
        },
        {
            data: '02/06/2022',
            data_realizada: '02 /07/2022',
            descricao: 'R$ 0,00',
            contabil: '0%',
            fornecedor: '0.41%',
            grupo: 'R$2,44',
            valor: 'R$-6,90',
            status: 'R$-6,90'
        },
        {
            data: '03/06/2022',
            data_realizada: '03/07/2022',
            descricao: 'R$ 0,00',
            contabil: '0%',
            fornecedor: '00.41%',
            grupo: 'R$2,44',
            valor: 'R$-6,90',
            status: 'R$-6,90'
        }
    ]

    const closeModal = () => {
        setmodalOpen({ open: false, id: false })
    }

    // HEADER PERSONALIZADO
    const dataFilterPor = [{ value: "recentes", label: "Mais Recentes" },
    { value: "antiga", label: "Mais Antigas" },
    ]
    const [dataInitial, setDataInitial] = useState(data);

    const [filterPor, setFilterPor] = useState();
    const [startDate, setStartDate] = useState();

    const headerTodasDespesas = ({ filter, setFilter, pageSize, setPageSize }) => {
        return (
            <div className='flex justify-between mb-24 md2:flex-col md2:gap-16'>
                <GlobalFilter
                    classe="min-w-[22rem] md2:min-w-[0rem] md2:min-w-full"
                    placeholder={"Pesquise por nome, tipo..."}
                    filter={filter}
                    setFilter={setFilter}
                />

                <div className='flex md:flex-col md:gap-16 md2:items-center'>
                    <label className="flex gap-8  items-center select-none md2:flex-1 md2:!w-full">
                        <p className="text-sm font-medium text-neutral-80 md2:hidden">
                            Filtrar por
                        </p>
                        <InputDate
                            containerClass={'md2:!w-full'}
                           
                            placeholderText="Data"
                            startDate={startDate}
                            setStartDate={setStartDate}
                        />
                    </label>
                    <SelectComponent
                        classe="ml-8 md md:ml-0 min-w-[16rem] md2:min-w-[0] md2:w-full !h-48 !max-w-auto"
                        classeSelect="!h-48 !max-w-auto"
                        data={dataFilterPor}
                        setStateCurrent={setFilterPor}
                        onChange={
                            (e) => {
                                if (e.value == 'antiga') {
                                    const arrUpdated = GLOBAL.oldDate('data_criacao', dataInitial);
                                    setFilterPor(e.value);
                                    setMateriaPrima([...arrUpdated])
                                } else {
                                    const arrUpdated = GLOBAL.recentDate('data_criacao', dataInitial);
                                    setFilterPor(e.value);
                                    setMateriaPrima([...arrUpdated])
                                }
                            }
                        }
                        state={filterPor}
                        value={filterPor}
                        placeholder={"Mais recentes"}
                    />
                    <div className='ml-32 flex items-center gap-8 md:self-end'>
                        <SelectComponent
                            classe="md min-w-[4.625rem]"
                            data={[10, 25, 50].map((v) => ({ value: v, label: v }))}
                            setStateCurrent={setPageSize}
                            state={pageSize}
                            value={pageSize}
                            placeholder={pageSize}
                        />
                        <p className="text-sm font-medium text-neutral-80 md:block  md2:hidden">
                            Linhas por página
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <Modal className={`w-[400px]  md2:max-w-[400px] md2:w-[95vw]`}>
                <ModalContent id="confirm">
                    <ModalHeader text="Confirmar despesa" />

                    <div className="p-24 flex flex-col gap-20">
                        <p>Deseja realmente confirmar a realização da <br />despesa</p>
                    </div>
                    <footer className="flex ml-auto px-24 pb-16">
                        <Button classe={`mr-16 h-48 btn secondary
                      
                        `}
                            // ${loading ? 'is-loading' : ''}
                            onClick={closeModal}
                        >
                            Cancelar
                        </Button>
                        <Button
                            // iconID="#icon-folder-delete" 
                            // ${loading ? 'is-loading' : ''}
                            // disabled={loading && action == 'delete'}
                            // onClick={() => {deleteMateriaPrima()}}
                            classe={`h-48 btn`}>
                            Confirmar
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
            <Card classe="my-64 px-24 py-32">
                <header className='flex justify-between md2:flex-col md2:gap-16'>
                    <Title classe="text-neutral-90 flex item-center gap-8 font-medium">
                        <SvgUse id="#icon-despesa-title " classe="!w-32 !h-32 self-end" />
                        Todas as despesas
                    </Title>
                    <Button
                        onClick={() => navigate('/gestao-pessoas/colaboradores/cadastro-funcionario')}
                        iconID="#icon_add" svgClass="!w-20 !h-20" classe="md2:w-full flex justify-center h-48">
                        Nova Despesa
                    </Button>
                </header>
                <div className='mt-32'>
                    {
                        dataInitial.length > 0 ? <Table
                            options={{
                                download: true,
                                headerChildren: true,
                            }}
                            HeaderCustom={headerTodasDespesas}
                            arrData={dataInitial}
                            arrColumns={columns}
                        /> : <p>Nenhum registro cadastrado.</p>
                    }
                </div>
            </Card>
        </div>
    )
}

export default TodasDespesas