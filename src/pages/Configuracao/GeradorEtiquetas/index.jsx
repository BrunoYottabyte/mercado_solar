import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../../../components/DesignSystem/Button';
import { Card } from '../../../components/DesignSystem/Card';
import { Title } from '../../../components/DesignSystem/Headings';
import { Modal } from '../../../components/DesignSystem/Modal/Modal';
import { ModalHeader } from '../../../components/DesignSystem/Modal/ModalHeader';
import { ModalContent } from '../../../components/DesignSystem/Modal/ModalContent';
import { SelectComponent } from '../../../components/DesignSystem/SelectComponent';
import Table from '../../../components/DesignSystem/Table';
import Svg from '../../../components/svg/svg';
import SvgUse from '../../../components/svg/svgUse';
import { useGlobalContext } from '../../../context/GlobalContext';
import moment from 'moment';
import { GlobalFilter } from '../../../components/DesignSystem/Table/GlobalFilter';
import { GLOBAL } from '../../../utils/GLOBAL';

const GeradorEtiquetas = () => {

    const { setmodalOpen, modalOpen } = useGlobalContext();

    const dataSelect = [
        { value: 'jardimBotanico', label: 'Unidade Jardim Botânico' },
        { value: 'jardimBomRetiro', label: 'Unidade Jardim Bom Retiro' },
    ]
    const [filter, setFilter] = useState();

    const [optionSelected, setOptionSelected] = useState();

    const columns = [
        {
            Header: 'Código',
            accessor: 'codigo',
        },
        {
            Header: 'Produto',
            accessor: 'produto'
        },
        {
            Header: 'Valor da Etiqueta',
            accessor: 'etiqueta'
        },
        {
            Header: 'Opções',
            accessor: "options",
            noFilter: true,
            classTH: 'not-filter',
            Cell: (v) =>
                <div className='flex gap-8'>
                    <SvgUse
                        id="#icon-download"
                        classe="w-32 h-32 transition-all duration-300 hover:brightness-90"
                    />
                    <SvgUse
                        onClick={() => {
                            openModal('confirm');
                        }}
                        id="#icon-search-estoque"
                        classe="w-32 h-32 transition-all duration-300 hover:brightness-90"
                    />
                </div>
        }
    ];

    const data = [
        {
            codigo: '1234',
            produto: 'Pão doce',
            etiqueta: 'R$ 15,30'
        },
        {
            codigo: '12345',
            produto: 'Pão chia',
            etiqueta: 'R$ 15,30'
        },
        {
            codigo: '7783',
            produto: 'Pão francês',
            etiqueta: 'R$ 15,30'
        },
        {
            codigo: '1737834',
            produto: 'Cupcake',
            etiqueta: 'R$ 15,30'
        },
        {
            codigo: '124534454',
            produto: 'Bolo de ovos',
            etiqueta: 'R$ 15,30'
        },
        {
            codigo: '45',
            produto: 'Pão de forma',
            etiqueta: 'R$ 15,30'
        },
        {
            codigo: '123444',
            produto: 'Pão sovado',
            etiqueta: 'R$ 15,30'
        },
        {
            codigo: '123104',
            produto: 'Petit Four',
            etiqueta: 'R$ 15,30'
        },
        {
            codigo: '024',
            produto: 'Bolo de chocolate',
            etiqueta: 'R$ 15,30'
        },
        {
            codigo: '12300004',
            produto: 'Pão pizza',
            etiqueta: 'R$ 15,30'
        },
        {
            codigo: '1234',
            produto: 'Pão doce',
            etiqueta: 'R$ 15,30'
        },
        {
            codigo: '12345',
            produto: 'Pão chia',
            etiqueta: 'R$ 15,30'
        },
        {
            codigo: '7783',
            produto: 'Pão francês',
            etiqueta: 'R$ 15,30'
        },
        {
            codigo: '1737834',
            produto: 'Cupcake',
            etiqueta: 'R$ 15,30'
        },
    ];


    useEffect(() => {
        if (modalOpen.open == false || modalOpen.open == null) {
            clearTimeout(window.geradorEtiquetas)
        }
    }, [modalOpen])

    const closeModal = () => {
        setmodalOpen({ open: false, id: false })
    }

    const openModal = (id) => {
        setmodalOpen({ open: true, id: id });
        window.geradorEtiquetas = setTimeout(closeModal, 5000)
    }

    const [date, setDate] = useState('25032022');

    useEffect(() => {
        setDate(`${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4, date.length)}`);
    }, [])

    // HEADER PERSONALIZADO
    const dataFilterPor = [{ value: "recentes", label: "Mais Recentes" },
    { value: "antiga", label: "Mais Antigas" },
    ]
    const [filterPor, setFilterPor] = useState();


    const HeaderGeradorEtiquetas = ({ filter, setFilter, pageSize, setPageSize }) => {
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
            <Modal className={`w-[425px]  md2:max-w-[400px] md2:w-[95vw]`}>
                <ModalContent id="confirm">
                    <ModalHeader text="Detalhes da Etiqueta" />
                    <div className='p-24'>
                        Etiqueta do produto: <span className='font-semibold text-sm  text-primary-pure'>Pão doce</span>

                        <div className='border border-neutral-30 rounded-lg mt-16'>
                            <div className='flex p-16 border border-transparent border-b-neutral-30'>
                                <SvgUse id="#icon-logo" classe="w-[112px] h-32" />
                            </div>

                            <div className='p-16'>
                                <div>
                                    <p className='text-neutral-80 font-semibold'>Pão doce</p>
                                    <h1 className='text-primary-pure font-semibold text-2xl'>
                                        R$9,90
                                    </h1>
                                </div>
                                <p className='mt-32'>Valido até {date}</p>
                            </div>

                        </div>

                        <div className='mt-16 flex'>
                            <Button
                                classe="secondary mr-16 flex-1 justify-center !h-48"
                                svgClass="!w-28 !h-28"
                                iconID="#icon-download"
                            >
                                Baixar etiqueta
                            </Button>
                            <Button
                                classe="flex-1 justify-center !h-48"
                                svgClass="!w-24 !h-24"
                                iconID="#icon_pencil"
                            >
                                Alterar produto
                            </Button>
                        </div>

                    </div>
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
                <header className='flex justify-between md2:flex-col md2:gap-16 mb-20'>
                    <Title classe="text-neutral-90 gap-8 font-medium">
                        <div>
                            <div className='flex items-center gap-8'>
                                <SvgUse id="#icon-etiqueta" classe="w-20" />
                                <p className='block text-neutral-90 font-medium'>Gerador de Etiquetas</p>
                            </div>
                            <span className='ml-32 -mt-4 text-sm text-neutral-70 block'>
                                Escolha uma unidade para visualizar as etiquetas
                            </span>
                        </div>
                    </Title>
                    <SelectComponent
                        data={dataSelect}
                        state={optionSelected}
                        setStateCurrent={setOptionSelected}
                        classeSelect="!w-[256px] md md2:!w-full"
                        placeholder="Selecione a unidade"
                    />
                </header>

                <div className='mt-20'>

                    <Table
                        options={{
                            download: true,
                            headerChildren: true,
                        }}
                        HeaderCustom={HeaderGeradorEtiquetas}
                        arrData={data}
                        arrColumns={columns}
                    />


                </div>
            </Card>
        </div>
    )
}

export default GeradorEtiquetas;