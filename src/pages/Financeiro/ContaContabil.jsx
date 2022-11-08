import { Card } from "../../components/DesignSystem/Card"
import { Title } from "../../components/DesignSystem/Headings"
import SvgUse from "../../components/svg/svgUse"
import Charts from 'react-apexcharts'
import Table from "../../components/DesignSystem/Table"
import Dropdowns from "../../components/DesignSystem/Dropdowns"
import DropdownItem from "../../components/DesignSystem/Dropdowns/DropdownItem"
import Button from "../../components/DesignSystem/Button"
import DropdownContainer from "../../components/DesignSystem/Dropdowns/DropdownContainer"
import { SelectComponent } from "../../components/DesignSystem/SelectComponent"
import { InputDate } from "../../components/DesignSystem/InputDate"
import { useState } from "react"
import { Input } from "../../components/DesignSystem/Input"
import { GLOBAL } from "../../utils/GLOBAL"
import { useEffect } from "react"
import { useRef } from "react"
import { GlobalFilter } from "../../components/DesignSystem/Table/GlobalFilter"

const ContaContabil = () => {
    const series = [{
        name: 'Categoria 1',
        data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
    }, {
        name: 'Categoria 2',
        data: [5, 2, 6, 10, 12, 7, 6, 4, 9, 8, 5, 3]
    }, {
        name: 'Categoria 3',
        data: [1, 2, 3, 4, 5, 6, 4, 3, 2, 10, 5, 8]
    }]

    const options = {
        chart: {
            type: 'bar',
            height: 'auto',
            width: '100%',
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            },
            offsetY: -15
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
            categories: ['01/06', '02/06', '03/06', '04/06',
                '05/06', '06/06', '07/06', '08/06', '09/06', '10/06',
                '11/06', '12/06'
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
            position: 'top',
            offsetY: 8,
            fontWeight: 700,
            horizontalAlign: 'right',
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
                fillColors: ['#1A2E77', '#818DB6', '#D1D5E4'],
                radius: 4,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },
        },
        fill: {
            opacity: 1,
            colors: ['#1A2E77', '#818DB6', '#D1D5E4']
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 1000,
                options: {
                    chart: {
                        width: '105%',
                        offsetX: -15
                    },
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: '8.5px'
                            }
                        }
                    },
                    yaxis: {
                        labels: {
                            style: {
                                fontSize: '8.5px'
                            }
                        }
                    },
                    markers: {
                        size: 2,
                        strokeColors: '',
                        hover: {
                            size: 2
                        }
                    },
                    legend: {
                        fontSize: '10.5px',
                        position: 'bottom',
                        horizontalAlign: 'center',
                        offsetY: 5,
                        itemMargin: {
                            horizontal: 5
                        },
                    }
                }
            },
            {
                breakpoint: 400,
                options: {
                    legend: {

                        offsetY: -10,

                    }
                }
            }



        ]
    }

    const columns = [
        {
            Header: '#',
            accessor: 'hash'
        },
        {
            Header: 'Conta Contábil',
            accessor: 'contabil'
        },
        {
            Header: 'Saídas(R$)',
            accessor: 'saldo'
        },
    ]

    const data = [
        {
            hash: '01',
            contabil: 'Bruno Siqueira',
            saldo: "R$ 1000,00"
        },
        {
            hash: '02',
            contabil: 'Joao Siqueira',
            saldo: "R$ 1000,00"
        },
        {
            hash: '03',
            contabil: 'Adriano cachorro',
            saldo: "R$ 1000,00"
        },
        {
            hash: '04',
            contabil: 'Edson ',
            saldo: "R$ 1000,00"
        },
        {
            hash: '05',
            contabil: 'Bernado',
            saldo: "R$ 1000,00"
        },
        {
            hash: '06',
            contabil: 'Tiago Siqueira',
            saldo: "R$ 1000,00"
        },
        {
            hash: '07',
            contabil: 'Test',
            saldo: "R$ 1000,00"
        },
        {
            hash: '08',
            contabil: 'Veronica Siqueira',
            saldo: "R$ 1000,00"
        },
        {
            hash: '09',
            contabil: 'Raissa moraes',
            saldo: "R$ 1000,00"
        },
        {
            hash: '10',
            contabil: 'Lavinia santos',
            saldo: "R$ 1000,00"
        },
        {
            hash: '11',
            contabil: 'Debora marques',
            saldo: "R$ 1000,00"
        },
    ]

    const dataContabil = [
        {
            value: 'mr', label: 'MR sistemas'
        },
        {
            value: 'siqueiras', label: 'Siqueiras'
        }
    ]

    const [contabil, setContabil] = useState();

    const dataBanco = [
        {
            value: 'itau', label: 'Itaú'
        },
        {
            value: 'bradesco', label: 'Bradesco'
        }
    ]
    const [banco, setBanco] = useState();
    const [startDate, setStartDate] = useState();

    // const handleClick = () => {
    //     let datePickerArr = [...document.querySelectorAll('.datepicker-container.caixa-geral')];
    //     datePickerArr.map(datePicker => {
    //         if (datePicker.querySelector('.react-datepicker-ignore-onclickoutside')) {
    //             datePicker.classList.add('!z-[999]');
    //         } else {
    //             datePicker.classList.remove('!z-[999]');
    //         }
    //     })
    // }

    const overrideDatePicker = () => {
        let arrSelects = [...document.querySelectorAll('.dropdown-body .select-container')]
        let last = arrSelects[arrSelects.length - 1];
        last.classList.add('z-[999]')
    }

    const onClose = () => {
        let arrSelects = [...document.querySelectorAll('.dropdown-body .select-container')]
        let last = arrSelects[arrSelects.length - 1];
        last.classList.remove('z-[999]')
    }

    const [viewPerPage, setViewPerPage] = useState(10);
    const [search, setSearch] = useState('');

    const drop_container = useRef();
    const handleDropdown = (e) => {
      
        let dropdownContainer = drop_container.current?.closest('.dropdowns-container')
        let dropdown = drop_container.current?.closest('.dropdown-body');
        let offsetBottom = window.innerHeight - dropdownContainer.getBoundingClientRect().top

        
        console.log(drop_container.current?.getBoundingClientRect())
        console.log(offsetBottom,  drop_container.current?.getBoundingClientRect().height)
        if(offsetBottom < drop_container.current?.getBoundingClientRect().height + 60){
            // dropdown.style.top = -360 + 'px';
            dropdown.classList.remove('md:!top-[50px]', '!top-[40px]')
            dropdown.classList.add('md:!top-[-380px]', '!top-[-355px]')
        }else{
            dropdown.classList.remove('md:!top-[-380px]', '!top-[-355px]')
            dropdown.classList.add('md:!top-[50px]', '!top-[40px]')
        }
        console.log(dropdown)

    }

    // HEADER EXTERNO
    const HeaderContaContabil = ({filter, setFilter, pageSize, setPageSize }) => {
        return (
            <div className="flex md:flex-col mr-40 gap-32 md:gap-16 justify-between items-center md:w-full mb-24">
                <div className="relative md:w-full">
                    <GlobalFilter
                        classe="min-w-[22rem] md2:min-w-[0rem]"
                        placeholder={"Pesquise por nome, tipo..."}
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <SvgUse id="#search_icon" classe="w-20 h-20 absolute top-0 my-auto bottom-0 right-12" />
                </div>

                <div className="flex md:flex-col md:!items-end md:w-full md:gap-16 gap-8 items-center">
                    <div className="flex gap-8 items-center md:w-full">
                        <Dropdowns classe="md:w-full">
                            <DropdownItem classe="h-48 md:!w-full" >
                                <Button 
                                  onMouseEnter={handleDropdown}
                                iconID="#icon_config_filter" classe="secondary  md:w-full md:justify-center  !h-48 ">
																	{/* bg-alert-red-100 */}
																	  Filtrar
                                </Button>
                            </DropdownItem>

                            <DropdownContainer classe="!max-w-[370px] md:left-0 md:!w-[85vw] md2:!w-[85vw] !w-[370px] !p-0 rounded-tr-md rounded-tl-md mt-4 shadow-sm border border-neutral-30">
                                <div 
                                ref={drop_container}
                                className='flex flex-col gap-16 p-16 w-[370px] md:!w-[85vw] md2:!w-[85vw] max-w-[370px]'>
                                    <label
                                        className="text-neutral-80 font-medium"
                                    >
                                        Agrupar por período
                                        <SelectComponent
                                            setStateCurrent={setContabil}
                                            state={contabil}
                                            data={dataContabil}
                                            classe="w-full 
                                         !relative"
                                        />
                                    </label>
                                    <div
                                    >
                                        <label
                                            className="text-neutral-80 font-medium"
                                        >
                                            Fornecedor
                                            <SelectComponent
                                                setStateCurrent={setBanco}
                                                state={banco}
                                                data={dataBanco}
                                                classe="w-full 
                                         relative"
                                                onMenuOpen={overrideDatePicker}
                                                onMenuClose={onClose}

                                            />
                                        </label>
                                    </div>


                                    <div className='flex gap-16 '>
                                        <div
                                            // onClick={handleClick}
                                            className="text-neutral-80 font-medium"
                                        >
                                            De
                                            <InputDate
                                                classe="w-full" containerClass="w-[100%] z-[1] caixa-geral" startDate={startDate} setStartDate={setStartDate} placeholder="dd/mm/aaaa" />
                                        </div>

                                        <div
                                            className="text-neutral-80 font-medium"
                                            // onClick={handleClick}
                                        >
                                            Até
                                            <InputDate classe="w-full" containerClass="w-[100%] z-[1] caixa-geral" startDate={startDate} setStartDate={setStartDate} placeholder="dd/mm/aaaa" />
                                        </div>
                                    </div>

                                    <p className='text-neutral-70 font-semibold text-center'>* Os filtros são referentes à data de pagamento*</p>

                                    <div className='mt-24 flex gap-16'>
                                        <Button
                                            classe="secondary !h-48 flex-1 justify-center"
                                        >
                                            Cancelar
                                        </Button>

                                        <Button
                                            classe="!h-48 flex-1 justify-center"
                                        >
                                            Filtrar
                                        </Button>
                                    </div>

                                </div>
                            </DropdownContainer>
                        </Dropdowns>
                        <p className="text-primary-pure font-medium cursor-pointer mr-40 ml-16 md:mr-0 md:!w-[120px]">Limpar filtro</p>
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
                        // placeholder, value, state, setStateCurrent
                        />
                        <span>Linhas por página</span>
                    </div>
                </div>

            </div>
        )
    }

        

    return (
        <div className='container'>
            <Card classe="my-64 px-24 py-32">
                <header className='flex justify-between md2:flex-col md2:gap-16 mb-20'>
                    <Title classe="text-neutral-90 gap-8 font-medium">
                        <div>
                            <div className='flex items-center gap-8'>
                                <SvgUse id="#icon-user-search-title" classe="w-20" />
                                <p className='block text-neutral-90 font-medium'>Resultado por Conta Contábil</p>
                            </div>
                        </div>
                    </Title>
                </header>

                <div className="flex gap-24 md2:flex-col border border-transparent border-b-neutral-30 mb-32">
                    {/* Filtro lateral - esquerda */}
                    <div className="flex flex-col gap-8">
                        <p>Selecione uma opção para filtrar por: </p>

                        <div className='!w-[272px] md2:flex-1 md2:!w-full h-max flex gap-16 relative border border-primary-pure outline outline-2 outline-primary-20  rounded-md'
                        >

                            <div className=' px-24 py-20 '>
                                <h1 className='tracking-wider text-alert-green font-bold text-xs  mb-16'>RECEITAS</h1>
                                <p className='flex gap-8'>
                                    <span className='text-neutral-70 font-semibold'>R$</span>
                                    <span className='text-neutral-90 text-2xl'> 100.000,00</span>
                                </p>
                            </div>

                        </div>

                        <div className='md2:flex-1 h-max flex gap-16 relative border  border-neutral-20 rounded-md'>

                            <div className=' px-24 py-20 '>
                                <h1 className='tracking-wider text-neutral-70 font-bold mb-16 text-xs'>DESPESAS</h1>
                                <p className='flex gap-8'>
                                    <span className='text-neutral-70 font-semibold'>R$</span>
                                    <span className='text-neutral-70 text-2xl'> 50.000,00</span>
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* CHART */}
                    <div className="flex-1 mt-32 relative">
                        <div className="rounded-full absolute md2:justify-center md2:relative flex items-center gap-4 -top-8 left-8"> <p className="w-[6px] h-[6px] rounded-full bg-primary-pure"></p> 26 de Julho, 2022</div>
                        <Charts options={options} series={series} type="bar" height={380} />
                    </div>
                </div>
                
                {/* Container da tabela */}
                <div className="">
                    <Title classe="mb-24">Receitas</Title>
                    
                    <Table
                        options={{
                            download: false,
                            headerChildren: true,
                        }}
                        HeaderCustom={HeaderContaContabil}
                        arrData={data}
                        arrColumns={columns}
                    />
                </div>

            </Card>
        </div>
    )
}

export default ContaContabil