import React from 'react'
import { useState } from 'react'
import Button from '../../components/DesignSystem/Button'
import { Card } from '../../components/DesignSystem/Card'
import { Title } from '../../components/DesignSystem/Headings'
import { InputDate } from '../../components/DesignSystem/InputDate'
import SvgUse from '../../components/svg/svgUse'
import Charts from 'react-apexcharts'
import Table from '../../components/DesignSystem/Table'
import { GlobalFilter } from '../../components/DesignSystem/Table/GlobalFilter'
import { SelectComponent } from '../../components/DesignSystem/SelectComponent'

const DespesasGrupo = () => {
    const [date, setDate] = useState();

    const series = [{
        name: 'Cumpridas',
        data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
    }]
    const options = {
        chart: {
            type: 'bar',
            height: 'auto',
            width: '100%',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            },
            download: false
        },
        grid: {
            show: true,
            borderColor: '#E9ECEF',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
        },

        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 6,
                columnWidth: '70%',
            },
        },
        xaxis: {
            type: 'category',
            categories: ['Salários', 'Insumos', 'Grupo 1', 'Grupo 2',
                'Grupo 3', 'Grupo 4', 'Grupo 5', 'Grupo 6', 'Grupo 7', 'Grupo 8',
                'Grupo 9', 'Grupo 10'
            ],
            labels: {
                style: {
                    colors: '#868E96',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetY: -5
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#868E96',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetY: -5,
                offsetX: -18
            },
        },
        legend: {
            show: true,
            position: 'bottom',
            offsetY: 8,
            fontWeight: 700,
            labels: {
                colors: '#495057',
            },
            itemMargin: {
                horizontal: 16
            },
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: ['#1CC066', '#D2AF00', '#EC3539'],
                radius: 4,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },
        },

        fill: {
            opacity: 1,
            colors: ['#1A2E77']
        },
        dataLabels: {
            enabled: false,
        }
    }

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

    // HEADER PERSONALIZADO
    const dataFilterPor = [{ value: "recentes", label: "Mais Recentes" },
    { value: "antiga", label: "Mais Antigas" },
    ]
    const [dataInitial, setDataInitial] = useState(data);

    const headerTodasDespesas = ({ filter, setFilter, pageSize, setPageSize }) => {
        return (
            <div className='flex justify-between mb-24 md2:flex-col md2:gap-16'>
                <GlobalFilter
                    classe="min-w-[22rem] md2:min-w-[0rem] md2:min-w-full"
                    placeholder={"Pesquise por nome, tipo..."}
                    filter={filter}
                    setFilter={setFilter}
                />

                <div className='ml-32 md2:ml-0 md2:justify-end flex items-center gap-8 md:self-end'>
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
        )
    }

    return (
        <div className='container'>
            <Card classe="my-64 px-24 py-32">
                <header className='flex justify-between md2:flex-col md2:gap-16 mb-32'>
                    <Title classe="text-neutral-90 flex item-center gap-8 font-medium">
                        <SvgUse id="#icon-despesa-title " classe="!w-32 !h-32 self-end" />
                        Despesas por Grupo
                    </Title>
                    <InputDate
                        containerClass={'md2:w-full'}
                        startDate={date}
                        setStartDate={setDate}
                        placeholderText="Filtrar período"

                    />
                </header>
                <Charts options={options} series={series} type="bar" height={270} />
                <div>
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

export default DespesasGrupo