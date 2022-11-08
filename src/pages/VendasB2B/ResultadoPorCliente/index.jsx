import React from 'react'
import { useState } from 'react'
import { Card } from '../../../components/DesignSystem/Card'
import { Title } from '../../../components/DesignSystem/Headings'
import { InputDate } from '../../../components/DesignSystem/InputDate'
import Table from '../../../components/DesignSystem/Table'
import SvgUse from '../../../components/svg/svgUse'
import Charts from 'react-apexcharts';
import { SelectComponent } from '../../../components/DesignSystem/SelectComponent'
import Badge from '../../../components/DesignSystem/Badge'

const ResultadoPorCliente = () => {
    const [date, setDate] = useState();

    const columns = [
        {
            Header: "Data",
            accessor: "data",
        },
        {
            Header: "Produtos",
            accessor: "produtos",
        },
        {
            Header: "Valor",
            accessor: "valor",
            // Cell: (v) => moment(v.value).format('DD/MM/YYYY HH:mm')
        },
        {
            Header: "Status",
            accessor: "status",
            Cell: (v) => <Badge title={v.value} classe={v.value == 'Pendente' ? 'bg-alert-warning-10-o text-[#D2AF00] font-semibold' : 'bg-alert-green-10-o text-alert-green font-semibold'} />
        },

    ];

    const data = [
        {
            data: "09/09/2022",
            produtos: 150,
            valor: 'R$ 15.500,00',
            status: 'Pendente'
        },
        {
            data: "13/09/2022",
            produtos: 110,
            valor: 'R$ 13.500,00',
            status: 'Pendente'
        },
        {
            data: "10/09/2022",
            produtos: 120,
            valor: 'R$ 10.500,00',
            status: 'Pago'
        },
        {
            data: "09/09/2022",
            produtos: 150,
            valor: 'R$ 15.500,00',
            status: 'Pendente'
        },
        {
            data: "13/09/2022",
            produtos: 110,
            valor: 'R$ 13.500,00',
            status: 'Pendente'
        },
        {
            data: "10/09/2022",
            produtos: 120,
            valor: 'R$ 10.500,00',
            status: 'Pago'
        },
        {
            data: "09/09/2022",
            produtos: 150,
            valor: 'R$ 15.500,00',
            status: 'Pendente'
        },
        {
            data: "13/09/2022",
            produtos: 110,
            valor: 'R$ 13.500,00',
            status: 'Pendente'
        },
        {
            data: "10/09/2022",
            produtos: 120,
            valor: 'R$ 10.500,00',
            status: 'Pago'
        },
        {
            data: "11/09/2022",
            produtos: 150,
            valor: 'R$ 15.500,00',
            status: 'Pago'
        },
        {
            data: "09/09/2022",
            produtos: 150,
            valor: 'R$ 15.500,00',
            status: 'Pendente'
        },
        {
            data: "13/09/2022",
            produtos: 110,
            valor: 'R$ 13.500,00',
            status: 'Pendente'
        },
        {
            data: "10/09/2022",
            produtos: 120,
            valor: 'R$ 10.500,00',
            status: 'Pago'
        },
        {
            data: "11/09/2022",
            produtos: 150,
            valor: 'R$ 15.500,00',
            status: 'Pago'
        },

    ]

    const columns2 = [
        {
            Header: "Produtos",
            accessor: "produtos",
        },
        {
            Header: "Quantidade",
            accessor: "quantidade",
        },
        {
            Header: "Valor",
            accessor: "valor",
        },
    ]

    const data2 = [
        {
            produtos: 'Produto 1',
            quantidade: 150,
            valor: 'R$ 1.250,00'
        },
        {
            produtos: 'Produto 2',
            quantidade: 300,
            valor: 'R$ 5.250,00'
        },
        {
            produtos: 'Produto 3',
            quantidade: 600,
            valor: 'R$ 10.250,00'
        },
        {
            produtos: 'Produto 4',
            quantidade: 1200,
            valor: 'R$ 20.250,00'
        },
        {
            produtos: 'Produto 1',
            quantidade: 150,
            valor: 'R$ 1.250,00'
        },
        {
            produtos: 'Produto 2',
            quantidade: 300,
            valor: 'R$ 5.250,00'
        },
        {
            produtos: 'Produto 3',
            quantidade: 600,
            valor: 'R$ 10.250,00'
        },
        {
            produtos: 'Produto 4',
            quantidade: 1200,
            valor: 'R$ 20.250,00'
        },
        {
            produtos: 'Produto 1',
            quantidade: 150,
            valor: 'R$ 1.250,00'
        },
        {
            produtos: 'Produto 2',
            quantidade: 300,
            valor: 'R$ 5.250,00'
        },
        {
            produtos: 'Produto 3',
            quantidade: 600,
            valor: 'R$ 10.250,00'
        },
        {
            produtos: 'Produto 4',
            quantidade: 1200,
            valor: 'R$ 20.250,00'
        },
    ]

    // CHART 1
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


    // CHART 2
    const series2 = [44, 55, 13, 43, 22, 40, 90, 53, 12, 25, 36, 40]
    const options2 = {
        chart: {
            // width: 380,
            height: 300,
            width: 300,
            type: 'pie',
        },
        labels: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5', 'Categoria 6', 'Categoria 7', 'Categoria 8', 'Categoria 9', 'categoria 10', 'Categoria 11', 'Categoria 12'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 360,
                expandOnClick: true,
                offsetX: 0,
                offsetY: 0,
                customScale: 1,
                dataLabels: {
                    offset: 0,
                    minAngleToShowLabel: 0
                },
                donut: {
                    size: '100%'
                }
            }
        },
        stroke: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            position: 'bottom'
        }
    }

    const HeaderRelatorio = ({ pageSize, setPageSize }) => {
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

    const HeaderPrincipaisProdutos = ({ pageSize, setPageSize }) => {
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
            <Card classe="my-64 mb-0 px-24 py-32">
                <header className='flex-col justify-between md2:gap-16 mb-32'>
                    <Title classe="text-neutral-90 flex item-center gap-8 font-medium">
                        <SvgUse id="#icon-title-contasApagar" />
                        Resultado por Cliente <span className='md2:hidden'>- Vendas B2B</span>
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

            <Card classe="my-64 mt-16 px-24 py-32">
                <header className='flex-col justify-between md2:gap-16 mb-32'>
                    < Title classe="text-neutral-90 flex item-center gap-8 font-medium">
                        <SvgUse id="#icon-principais-produtos" />
                        Principais Produtos
                    </Title>
                </header>


                <div className='mt-32 flex md2:flex-col  md2:gap-16'>
                    <div className='flex-1 '>
                        <Table
                            options={{
                                download: true,
                                headerChildren: true,
                            }}
                            HeaderCustom={HeaderPrincipaisProdutos}
                            arrData={data2}
                            arrColumns={columns2}
                        />

                    </div>

                    <div className='flex-1 flex items-center justify-center mt-[40px] md2:mt-16'>
                        <Charts options={options2} series={series2} type="pie" width={300} height={300} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ResultadoPorCliente