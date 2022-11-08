import React from 'react'
import { useState } from 'react'
import { Card } from '../../../components/DesignSystem/Card'
import { Title } from '../../../components/DesignSystem/Headings'
import { InputDate } from '../../../components/DesignSystem/InputDate'
import Table from '../../../components/DesignSystem/Table'
import SvgUse from '../../../components/svg/svgUse'
import Charts from 'react-apexcharts';
import { SelectComponent } from '../../../components/DesignSystem/SelectComponent'

const RelatorioGeral = () => {
    const [date, setDate] = useState();

    const columns = [
        {
            Header: "Clientes",
            accessor: "clientes",
        },
        {
            Header: "Pedidos",
            accessor: "pedidos",
        },
        {
            Header: "Faturamento",
            accessor: "faturamento",
            // Cell: (v) => moment(v.value).format('DD/MM/YYYY HH:mm')
        },
        {
            Header: "Ticket médio",
            accessor: "ticket",
        },

    ];

    const data = [
        {
            clientes: "Panificadora Doce Pão",
            pedidos: 150,
            faturamento: 'R$ 15.500,00',
            ticket: 'R$ 1.250,00'
        },
        {
            clientes: "Panificadora Doce Pão",
            pedidos: 150,
            faturamento: 'R$ 15.500,00',
            ticket: 'R$ 1.250,00'
        },
        {
            clientes: "Panificadora Doce Pão",
            pedidos: 150,
            faturamento: 'R$ 15.500,00',
            ticket: 'R$ 1.250,00'
        },
        {
            clientes: "Panificadora Doce Pão",
            pedidos: 150,
            faturamento: 'R$ 15.500,00',
            ticket: 'R$ 1.250,00'
        },
        {
            clientes: "Panificadora Doce Pão",
            pedidos: 150,
            faturamento: 'R$ 15.500,00',
            ticket: 'R$ 1.250,00'
        },
        {
            clientes: "Panificadora Doce Pão",
            pedidos: 150,
            faturamento: 'R$ 15.500,00',
            ticket: 'R$ 1.250,00'
        },
        {
            clientes: "Panificadora Doce Pão",
            pedidos: 150,
            faturamento: 'R$ 15.500,00',
            ticket: 'R$ 1.250,00'
        },
        {
            clientes: "Panificadora da Tia Josefa",
            pedidos: 110,
            faturamento: 'R$ 13.500,00',
            ticket: 'R$ 1.550,00'
        },
        {
            clientes: "Panificadora Alfa",
            pedidos: 120,
            faturamento: 'R$ 10.500,00',
            ticket: 'R$ 1.150,00'
        },
        {
            clientes: "Panificadora Doce Pão",
            pedidos: 150,
            faturamento: 'R$ 15.500,00',
            ticket: 'R$ 1.250,00'
        },
        {
            clientes: "Panificadora da Tia Josefa",
            pedidos: 110,
            faturamento: 'R$ 13.500,00',
            ticket: 'R$ 1.550,00'
        },
        {
            clientes: "Panificadora Alfa",
            pedidos: 120,
            faturamento: 'R$ 10.500,00',
            ticket: 'R$ 1.150,00'
        }
    ]


    const series = [{
        name: 'Pedidos',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
        name: 'Faturamento',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }]

    const options = {
        chart: {
            height: 350,
            type: 'line',
            toolbar: false
        },
        stroke: {
            width: [0, 2],
            colors: ['#F28545'],


            // curve: 'smooth',
        },
        markers: {
            size: 0,
            strokeColors: '#F1F3F5',
            colors: ['#1A2E77'],
            hover: {
                size: 5,

            }
        },
        plotOptions: {
            bar: {
                borderRadius: 6,
                columnWidth: '85%',
            },
        },
        dataLabels: {
            enabled: false,
            // enabledOnSeries: [1]
        },
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        xaxis: {
            type: 'text',
            labels: {
                style: {
                    colors: '#495057',
                },
            },
        },
        fill: {
            opacity: 1,
            colors: ['#1A2E77']
        },
        yaxis: [{
            // opposite: 
            labels: {
                style: {
                    colors: '#495057',
                },
            },
        }, {
            labels: {
                style: {
                    colors: '#495057',
                },
            },
            opposite: true,
        }],
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
            formatter: function (seriesName, opts) {
                if (seriesName === 'Pedidos') {
                    return `<div class="markerCustom">
                            <svg><use xlink:href="#icon-line-horizontal-chart"></use></svg>
                            ${seriesName}
                        </div>
                    `
                }
                if (seriesName === 'Faturamento') {
                    return `
                        <div class="markerCustom">
                            <svg><use xlink:href="#icon-line-chart"></use></svg>
                            ${seriesName}
                        </div>
                     `
                }

            },
            markers: {
                width: 0,
                height: 0,
                strokeWidth: 5,
                strokeColor: '#fff',
                fillColors: ['#1A2E77', '#F28545'],
                // customHTML: (a,b) => {
                //     console.log
                //     return <SvgUse id="#icon-title-contasApagar" />
                // },
                onClick: undefined,
                offsetX: 0,
                offsetY: 0,
            },
        },
        tooltip: {
            // fillSeriesColor: true,
            followCursor: true,
            marker: {
                show: true,
                fillColors: ['#1A2E77', '#F28545'],
            },
        }
    }


    const HeaderRelatorio = ({pageSize, setPageSize }) => {
        return (
            <div className='mb-24 flex md2:flex-col md2:gap-16 md2:w-full justify-between items-center md2:items-end'>
                <div className='md2:w-full flex gap-8 items-center'>
                    <span className='md2:hidden'>Filtrar por</span>
                    <InputDate
                        setStartDate={setDate}
                        startDate={date}
                        containerClass="md2:w-full z-10"
                        classe="md2:w-full z-0"
                        placeholderText="Selecione a data"
                    />
                </div>

                <div className='flex gap-8 items-center'>
                    <span>Mostrar</span>
                    <SelectComponent
                        data={[
                            {
                                value: 10, label: 10
                            },
                            {
                                value: 15, label: 15
                            },
                            {
                                value: 25, label: 25
                            },
                        ]}
                        classeSelect="w-[74px]"
                        setStateCurrent={setPageSize}
                        state={pageSize}
                    />
                    <span>Linhas por página</span>
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <Card classe="my-64 px-24 py-32">
                <header className='flex-col justify-between md2:gap-16 mb-32'>
                    <Title classe="text-neutral-90 flex item-center gap-8 font-medium">
                        <SvgUse id="#icon-title-contasApagar" />
                        Relatório Geral - Vendas B2B
                    </Title>
                </header>


                <div className='mt-32 flex md2:flex-col  md2:gap-16'>
                    <div className='flex-1 '>
                   <Table
								options={{
									download: true,
									headerChildren: true,
								}}
								HeaderCustom={HeaderRelatorio}
								arrData={data}
								arrColumns={columns}
							/> 
						
                    </div>

                    <div className='flex-1 mt-[40px] md2:mt-16'>
                        <Charts options={options} series={series} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default RelatorioGeral