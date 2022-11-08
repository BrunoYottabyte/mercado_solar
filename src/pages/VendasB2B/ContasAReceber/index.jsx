import React from 'react'
import { useLayoutEffect } from 'react';
import { useState } from 'react'
import Button from '../../../components/DesignSystem/Button';
import { Card } from '../../../components/DesignSystem/Card';
import { Title } from '../../../components/DesignSystem/Headings';
import { Input } from '../../../components/DesignSystem/Input';
import { SelectComponent } from '../../../components/DesignSystem/SelectComponent';
import SvgUse from '../../../components/svg/svgUse';

const ContasAReceber = () => {

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

    const [arrSelect, setArrSelect] = useState([
        {
            value: 'fornecedor',
            label: 'Fornecedor'
        },
        {
            value: 'data_pedido',
            label: 'Data do pedido'
        }
    ]);
    const [optionSelected, setOptionSelected] = useState({});

    const [arrViewPerPage, setArrViewPerPage] = useState([
        {
            value: '10',
            label: '10'
        },
        {
            value: '15',
            label: '15'
        },
        {
            value: '20',
            label: '20'
        }
    ])
    const [viewPerPageSelected, setViewPerPageSelected] = useState({});


    const handleClick = (e) => {
        let circle = e.target.closest('.circle-interactive');
        let section = e.target.closest('section');
        let heightSection = e.target.closest('section').getBoundingClientRect().height;
        let containerOrders = section.querySelector('.container-orders');
        let heightOrders = containerOrders.getBoundingClientRect().height;

        if (!circle.classList.contains('active')) {
            circle.classList.add('active');
            section.style.height = `${heightOrders + heightSection + 24}px`;
            containerOrders.style.opacity = 1
            containerOrders.classList.add('delay-300', 'duration-700');
        } else {
            circle.classList.remove('active');
            section.style.height = `${heightSection - heightOrders - 24}px`;
            containerOrders.style.opacity = 0;
            containerOrders.classList.remove('delay-300', 'duration-700');
        }
    }

    useLayoutEffect(() => {
        let containerAll = document.querySelectorAll('.containerAll');
        let sections = containerAll[0].children;
        [...sections].map(section => {
            console.log(section.getBoundingClientRect().height)
            section.style.height = `${section.getBoundingClientRect().height - section.querySelector('.container-orders')?.getBoundingClientRect().height - 24}px`
        })
    }, [])

    return (
        <div className='container'>
            <Card classe="my-64 px-24 py-32">
                <header className='flex-col justify-between md2:gap-16 mb-32'>
                    <Title classe="text-neutral-90 flex item-center gap-8 font-medium">
                        <SvgUse id="#icon-title-a-receber" />
                        Contas à Receber
                    </Title>

                    <section className='mt-32 md2:flex-col md2:gap-16 flex justify-between'>
                        <div className='relative w-[320px] md2:w-full h-48'>
                            <Input placeholder="Pesquise por nome, tipo..." containerClass="absolute top-0 left-0 !w-[320px] md2:!w-full" classe="h-48" />
                            <SvgUse id="#search_icon" classe="absolute top-0 bottom-0 my-auto mx-0 w-20 h-[22px] right-16" />
                        </div>

                        <div className='flex md2:flex-col  md2:gap-16 gap-32'>
                            <div className='flex gap-8 md2:w-full items-center'>
                                <p className='md2:hidden'>Filtrar por</p>
                                <SelectComponent
                                    placeholder="Período"
                                    data={arrSelect}
                                    state={optionSelected}
                                    classeSelect="w-[220px] md2:w-full"
                                    classe="md2:w-full"
                                    setStateCurrent={setOptionSelected}
                                />
                            </div>

                            <div className='flex gap-8 md2:self-end items-center'>
                                <p>Mostrar</p>
                                <SelectComponent
                                    placeholder="10"
                                    data={arrViewPerPage}
                                    state={viewPerPageSelected}
                                    classeSelect="w-[74px]"
                                    setStateCurrent={setViewPerPageSelected}
                                />
                                <p>Linhas por página</p>
                            </div>

                        </div>
                    </section>
                </header>

                <div className='containerAll flex flex-col gap-8 overflow-hidden'>
            
                    <section className='transition-all duration-500 border border-neutral-30 rounded-md '>
                        <div className='px-16 py-10 flex-col  rounded-md'>
                            <div className='flex md2:flex-col md2:gap-16 justify-between'>
                                <div className='flex md2:flex-wrap md2:justify-between'>
                                    <div className='w-[320px] md2:w-auto md2:max-w-[150px]'>
                                        <span className='text-neutral-70 text-sm'>Fornecedor</span>
                                        <p className='text-neutral-90 font-medium text-'>João Pedro dos Santos Rodrigues de Siqueira</p>
                                    </div>

                                </div>

                                <div className='flex items-center gap-16 '>
                                    <Button classe="btn h-40 secondary md2:w-full">
                                        Realizar pagamento
                                    </Button>

                                    {/* Circle */}
                                    <div
                                        onClick={handleClick}
                                        className='w-[20px] h-[20px] shrink-0 circle-interactive border-2 cursor-pointer border-primary-pure rounded-[50%] flex justify-center items-center relative'>
                                        {/* Lines */}
                                        <span className='w-[10px] h-[2px] bg-primary-pure rounded absolute mx-auto'></span>
                                        <span className='h-[10px] line-vertical w-[2px] bg-primary-pure rounded absolute mx-auto'></span>
                                    </div>


                                </div>
                            </div>


                            {/* orders */}
                            <div className='container-orders mt-24 opacity-0 transition-all delay-0 duration-0 overflow-hidden'>
                                <div className='flex flex-col gap-8'>
                                    <div className='border border-neutral-30 rounded-md '>
                                        <header className='grid grid-cols-3 bg-neutral-30 px-10 text-neutral-90 font-semibold'>
                                            <p>Pedido</p>
                                            <p>Quantidade</p>
                                            <p>Valor total</p>
                                        </header>

                                        <div>
                                            <div className='grid grid-cols-3 items-center px-8 h-32 border border-transparent border-b-neutral-30'>
                                                <p>Coca-cola</p>
                                                <p>200</p>
                                                <p>R$ 150,00</p>
                                            </div>
                                            <div className='grid grid-cols-3 items-center px-8 h-32'>
                                                <p>Coca-cola</p>
                                                <p>200</p>
                                                <p>R$ 150,00</p>
                                            </div>
                                        </div>


                                    </div>
                                    <div className='border border-neutral-30 rounded-md '>
                                        <header className='grid grid-cols-3 bg-neutral-30 px-10 text-neutral-90 font-semibold'>
                                            <p>Pedido</p>
                                            <p>Quantidade</p>
                                            <p>Valor total</p>
                                        </header>

                                        <div>
                                            <div className='grid grid-cols-3 items-center px-8 h-32 border border-transparent border-b-neutral-30'>
                                                <p>Coca-cola</p>
                                                <p>200</p>
                                                <p>R$ 150,00</p>
                                            </div>
                                            <div className='grid grid-cols-3 items-center px-8 h-32'>
                                                <p>Coca-cola</p>
                                                <p>200</p>
                                                <p>R$ 150,00</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    
                    <section className='transition-all duration-500 border border-neutral-30 rounded-md '>
                        <div className='px-16 py-10 flex-col  rounded-md'>
                            <div className='flex md2:flex-col md2:gap-16 justify-between'>
                                <div className='flex md2:flex-wrap md2:justify-between'>
                                    <div className='w-[320px] md2:w-auto md2:max-w-[150px]'>
                                        <span className='text-neutral-70 text-sm'>Fornecedor</span>
                                        <p className='text-neutral-90 font-medium text-'>Bruno dos Santos Rodrigues de Siqueira</p>
                                    </div>
                                </div>

                                <div className='flex items-center gap-16 '>
                                    <Button classe="btn h-40 secondary md2:w-full">
                                        Realizar pagamento
                                    </Button>

                                    {/* Circle */}
                                    <div
                                        onClick={handleClick}
                                        className='w-[20px] h-[20px] shrink-0 circle-interactive border-2 cursor-pointer border-primary-pure rounded-[50%] flex justify-center items-center relative'>
                                        {/* Lines */}
                                        <span className='w-[10px] h-[2px] bg-primary-pure rounded absolute mx-auto'></span>
                                        <span className='h-[10px] line-vertical w-[2px] bg-primary-pure rounded absolute mx-auto'></span>
                                    </div>


                                </div>
                            </div>


                            {/* orders */}
                            <div className='container-orders mt-24 opacity-0 transition-all delay-0 duration-0 overflow-hidden'>
                                <div className='flex flex-col gap-8'>
                                    <div className='border border-neutral-30 rounded-md '>
                                        <header className='grid grid-cols-3 bg-neutral-30 px-10 text-neutral-90 font-semibold'>
                                            <p>Pedido</p>
                                            <p>Quantidade</p>
                                            <p>Valor total</p>
                                        </header>

                                        <div>
                                            <div className='grid grid-cols-3 items-center px-8 h-32 border border-transparent border-b-neutral-30'>
                                                <p>Coca-cola</p>
                                                <p>200</p>
                                                <p>R$ 150,00</p>
                                            </div>
                                            <div className='grid grid-cols-3 items-center px-8 h-32'>
                                                <p>Coca-cola</p>
                                                <p>200</p>
                                                <p>R$ 150,00</p>
                                            </div>
                                        </div>


                                    </div>
                                    <div className='border border-neutral-30 rounded-md '>
                                        <header className='grid grid-cols-3 bg-neutral-30 px-10 text-neutral-90 font-semibold'>
                                            <p>Pedido</p>
                                            <p>Quantidade</p>
                                            <p>Valor total</p>
                                        </header>

                                        <div>
                                            <div className='grid grid-cols-3 items-center px-8 h-32 border border-transparent border-b-neutral-30'>
                                                <p>Coca-cola</p>
                                                <p>200</p>
                                                <p>R$ 150,00</p>
                                            </div>
                                            <div className='grid grid-cols-3 items-center px-8 h-32'>
                                                <p>Coca-cola</p>
                                                <p>200</p>
                                                <p>R$ 150,00</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>

            </Card>
        </div>
    )
}

export default ContasAReceber



