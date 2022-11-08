
import gsap from 'gsap'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import Accordions from '../../../components/DesignSystem/Accordions'
import AccordionContent from '../../../components/DesignSystem/Accordions/AccordionContent'
import AccordionTitle from '../../../components/DesignSystem/Accordions/AccordionTitle'
import Button from '../../../components/DesignSystem/Button'
import { Card } from '../../../components/DesignSystem/Card'
import { Title } from '../../../components/DesignSystem/Headings'
import { Input } from '../../../components/DesignSystem/Input'
import { SelectComponent } from '../../../components/DesignSystem/SelectComponent'
import Table from '../../../components/DesignSystem/Table'
import SvgUse from '../../../components/svg/svgUse'
import { GLOBAL } from '../../../utils/GLOBAL'

const Receitas = () => {
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

    const columns = [
        {
            Header: "Produtos",
            accessor: "name",
        },
        {
            Header: "Marca/Fornecedor",
            accessor: "descricao"
        },
        {
            Header: "Qtd.Produzida",
            accessor: "qtdProduzida"
        },
        {
            Header: "Unidade Produzida",
            accessor: "unidadeProduzida"
        },
        {
            Header: (v) => <div className='text-center'>É ingrediente</div>,
            accessor: "ingrediente",
            Cell: (v) => v.value ? <div className='w-full flex justify-center'>
                <SvgUse id="#icon-check" classe="w-12 h-12" />
            </div> : <div className='w-full flex justify-center'>
                <SvgUse id="#icon-close" classe="w-20 h-20 -ml-4" />
            </div>
        },
        {
            Header: (v) => <div className='text-center'>É comercializável</div>,
            accessor: "comercializavel",
            Cell: (v) => v.value ?
                <div className='w-full flex justify-center'>
                    <SvgUse id="#icon-check" classe="w-12 h-12" />
                </div> : <div className='w-full flex justify-center'>
                    <SvgUse id="#icon-close" classe="w-20 h-20 -ml-4" />
                </div>
        },
        {
			Header: "Opções",
			accessor: "options",
			noFilter: true,
			classTH: 'not-filter',
			Cell: (v) =>
				<div className='flex gap-8'><SvgUse id="#icon-edit" onClick={() => { setAction('update'); openCreateUpdate(); populateFields(v.row.original); setIdEditOrDelete(v.row.original.id) }} classe="w-32 h-32 transition-all duration-300 hover:brightness-90" /> <SvgUse id="#icon-search-estoque" onClick={() => {setAction('update'); populateFields(v.row.original); setIdEditOrDelete(v.row.original.id); openModal()}} classe="w-32 h-32 transition-all duration-300 hover:brightness-90" /></div>

		},

    ];

    const data = [
        {
            name: "Goiabada",
            descricao: 'Descrição',
            qtdProduzida: 'R$ 1.500,00',
            unidadeProduzida: 120,
            ingrediente: true,
            comercializavel: false,
            categoria: 'Bolo e Pães'
        },
        {
            name: "Bolo de chocolate",
            descricao: 'Descrição',
            qtdProduzida: 'R$ 25.500,00',
            unidadeProduzida: 120,
            ingrediente: false,
            comercializavel: true,
            categoria: 'Bolo e Pães'
        },
        {
            name: "Bolo de Milho",
            descricao: 'Descrição',
            qtdProduzida: 'R$ 25.500,00',
            unidadeProduzida: 120,
            ingrediente: false,
            comercializavel: true,
            categoria: 'Bolo e Pães'
        },
        {
            name: "Cocada",
            descricao: 'Descrição',
            qtdProduzida: 'R$ 25.500,00',
            unidadeProduzida: 120,
            ingrediente: true,
            comercializavel: true,
            categoria: 'Bolo e Pães'
        },

        {
            name: "Coca-cola",
            descricao: 'Descrição',
            qtdProduzida: 'R$ 15.500,00',
            unidadeProduzida: 120,
            ingrediente: true,
            comercializavel: true,
            categoria: 'Bebidas'
        },
        {
            name: "Fanta Uva",
            descricao: 'Descrição',
            qtdProduzida: 'R$ 15.500,00',
            unidadeProduzida: 120,
            ingrediente: false,
            comercializavel: true,
            categoria: 'Bebidas'
        },
    ]

    const categorias = [
        {
            idAttr: 1,
            name: 'Bolo e Pães',
        },
        {
            idAttr: 2,
            name: 'Bebidas'
        },
        {
            idAttr: 3,
            name: 'Produtos'
        }
    ]

    const [viewPerPageSelected, setViewPerPageSelected] = useState({});

    const [filter, setFilter] = useState();


    const markWord = () => {
        //marcando as palavras pesquisadas
        let textSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        // console.log(textSearch)

        let pattern = new RegExp(`${textSearch}`, "gi");

        // column.innerHTML = column.textContent.replace(pattern, match => `<b>${match}</b>`)

        const allAccordions = [...document.querySelectorAll(`.accordions-container`)];
        allAccordions.map(accordion => {
            const allTr = [...accordion.querySelectorAll('table tbody tr')]
            allTr.map(tr => {
                let td = tr.querySelector('td');

                td.innerHTML = td.textContent.replace(pattern, match => `<b>${match}</b>`)

            });
        })

    }

    const [search, setSearch] = useState('');
    const searchWord = () => {
        let result = data.filter(product => product.name.toLowerCase().includes(search.toLowerCase().trim()));
        if (result.length <= 0) {
            hideAccordions();
        }



        //pegando id das categoria dos resultados
        const categories = [...new Set(result.map(current => {
            return categorias.find(item => item.name == current.categoria).idAttr
        }))];

        // fechando todos os accordions que nao tem o resultado da pesquisa
        const allAccordions = [...document.querySelectorAll(`.accordions-container`)];

        let filteredAllAccordions = allAccordions.filter(accordion => !categories.includes(Number(accordion.attributes['data-id'].value)));
        filteredAllAccordions.map(current => {
            current.classList.remove('active');
            let content = current.querySelector('.accordion-content');
            gsap.to(content, { duration: 0.25, ease: "power3", height: 0 });
        })



        //abrindo as categorias
        categories.map(id => {
            const accordions = document.querySelector(`.accordions-container[data-id='${id}']`);
            [accordions].map(accordion => {
                const contentRelativo = document.querySelector(
                    `.accordion-content[data-id='${id}']`
                );

                const contentContainer = contentRelativo.querySelector(".content-container");
                accordion.classList.add("active");
                gsap.to(contentRelativo, { duration: 0.2, ease: "power3", height: contentContainer.scrollHeight });

                const allTr = [...contentContainer.querySelectorAll('table tbody tr')]
                allTr.map(tr => {
                    let td = tr.querySelector('td');

                    let exists = result.find(items => items.name == td.innerText);

                    if (exists) {

                        tr.classList.add('transition-all', 'duration-300', 'bg-primary-20', 'text-primary-pure')

                        setTimeout(() => {
                            tr.classList.remove('bg-primary-20', 'text-primary-pure')
                        }, 5000)
                    } else {
                        tr.classList.remove('duration-75', 'bg-primary-20', 'text-primary-pure')
                    }
                })


            })
        })
    }

    useEffect(() => {
        if (search) GLOBAL.debounceFunction(searchWord, 500, "searchWordCategorieName")();
        if (!search) {
            setTimeout(() => {
                hideAccordions();
            }, 500)
        }
        markWord();
    }, [search]);

    const hideAccordions = () => {
        const accordions = [...document.querySelectorAll(`.accordions-container`)];
        accordions.map(current => {
            current.classList.remove('active');
            let content = current.querySelector('.accordion-content');
            gsap.to(content, { duration: 0.25, ease: "power3", height: 0 });
        })
    }

    return (
        <div className='container'>
            <Card classe="my-64 px-24 py-32">
                <header className='flex justify-between md2:gap-16 mb-32 md2:flex-col'>
                    <Title classe="text-neutral-90 flex item-center gap-8 font-medium">
                        <SvgUse id="#icon-kitchen  " />
                        Receitas
                    </Title>

                    <Button
                        iconID="#icon_add"
                        svgClass="!w-20 !h-20"
                        classe="md2:w-full justify-center"
                    >
                        Novo Sub Produtos
                    </Button>
                </header>
                <section className='mt-32 md2:flex-col md2:gap-16 flex justify-between '>
                    <div className='relative w-[320px] md2:w-full h-48'>
                        <Input
                            placeholder="Pesquise por nome, tipo..."
                            state={search}
                            setStateCurrent={setSearch}
                            containerClass="absolute top-0 left-0 !w-[320px] md2:!w-full"
                            classe="h-48"
                        />
                        <SvgUse id="#search_icon" classe="absolute top-0 bottom-0 my-auto mx-0 w-20 h-[22px] right-16" />
                    </div>
                </section>

                <div className='mt-24'>
                    {
                        categorias.map((item, i) => {
                            let filteredData = data.filter(product => product.categoria == item.name);
                            return (
                                <Accordions data-id={item.idAttr} classe={`w-full border !border-transparent ${i !== categorias.length - 1 ? '!border-b-neutral-30' : ''}`}>
                                    <AccordionTitle
                                        id={item.idAttr}
                                        parent={true}
                                        classe={`h-48 bg-neutral-10 relative px-8 ${i === 0 ? '!rounded-t-lg' : ''}`}
                                    >

                                        <p>{item.name}</p>

                                        <div className='absolute right-16 w-32 h-32 bg-neutral-30 rounded'>
                                            <SvgUse id="#icon_arrow_left" classe={'absolute !left-0 !w-12 !h-12 !mx-auto !-right-2 '} />
                                        </div>


                                    </AccordionTitle>

                                    <AccordionContent id={item.idAttr} classe="active permanent !px-0">
                                        {filteredData?.length > 0 ?
                                            <Table
                                                options={{
                                                    searchPlaceholder: "Pesquisar por cliente...",
                                                    classTHS: 'h-48',
                                                    classTDS: '!h-48',
                                                    download: false,
                                                    searchResponsive: 'mb-0 ',
                                                    filterPor: {
                                                        enabled: false,
                                                        filter,
                                                        setFilter,
                                                        data: [{ value: "recentes", label: "Mais Recentes" },
                                                        { value: "antiga", label: "Mais Antigas" },
                                                        ]
                                                    },
                                                    search: false,
                                                    notPagination: true,
                                                    linhasPorPagina: {
                                                        state: false,
                                                        layout: 'center'
                                                    },

                                                }}
                                                classeTableContainer={`rounded-none ${i == categorias.length - 1 ? 'rounded-b-lg' : ''}`}
                                                arrData={filteredData}
                                                arrColumns={columns} />
                                            : <p className='p-8'>Sem nenhuma receita para essa categoria no momento. </p>
                                        }
                                    </AccordionContent>
                                </Accordions>
                            )
                        })
                    }
                </div>


            </Card>
        </div>
    )

}

export default Receitas