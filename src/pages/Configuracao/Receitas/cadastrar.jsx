import { is } from 'date-fns/locale'
import gsap from 'gsap'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Accordions from '../../../components/DesignSystem/Accordions'
import AccordionContent from '../../../components/DesignSystem/Accordions/AccordionContent'
import AccordionTitle from '../../../components/DesignSystem/Accordions/AccordionTitle'
import Button from '../../../components/DesignSystem/Button'
import { Card } from '../../../components/DesignSystem/Card'
import CheckBox from '../../../components/DesignSystem/CheckBox'
import { Title } from '../../../components/DesignSystem/Headings'
import { Input, InputAddSubtract } from '../../../components/DesignSystem/Input'
import { InputDate } from '../../../components/DesignSystem/InputDate'
import { SelectComponent } from '../../../components/DesignSystem/SelectComponent'
import TextArea from '../../../components/DesignSystem/TextArea'
import Upload from '../../../components/DesignSystem/Upload'
import SvgUse from '../../../components/svg/svgUse'
import { GLOBAL } from '../../../utils/GLOBAL'


const Ingredientes = ({ setArrIngredientes, arrIngredientes, item, posLoop }) => {
    const position = arrIngredientes.findIndex(current => current.id == item.id);
    let newArr = [...arrIngredientes];

    const addExternal = () => {
        newArr[position] = {
            ...item,
            quantidade: Number(item.quantidade) + 1
        };
        setArrIngredientes(newArr);
    }

    const subtractExternal = () => {
        if (item.quantidade == 1 || item.quantidade == '') return
        newArr[position] = {
            ...item,
            quantidade: Number(item.quantidade) - 1
        };
        setArrIngredientes(newArr);
    }

    return (
        <div className='flex items-end gap-16 md2:flex-wrap '>
            <label className='text-neutral-80 w-full flex-1 text-sm '>
                Nome
                <Input
                    placeholder="Nome"
                    onChange={(e) => {
                        newArr[position] = {
                            ...item,
                            nome: e.target.value
                        };
                        setArrIngredientes(newArr);
                    }}
                    value={item.nome}
                    state={item.nome}
                />
            </label>
            <div className='flex items-end md:w-full gap-16 font-semibold text-sm text-neutral-80 '>
                <div className='flex-1'>
                    Quantidade
                    <InputAddSubtract
                        state={item.quantidade}
                        onChange={(e) => {
                            let num = GLOBAL.onlyNumbers(e.target.value);

                            newArr[position] = {
                                ...item,
                                quantidade: num
                            };
                            setArrIngredientes(newArr);
                        }}
                        classe="!text-sm h-48 !text-neutral-70 "
                        containerClass="!w-[160px] md2:!w-full"
                        addExternal={addExternal}
                        subtractExternal={subtractExternal}
                    />
                </div>
                {
                    posLoop > 0 && (
                        <Button
                            onClick={() => {
                                newArr.splice(position, 1);
                                setArrIngredientes(newArr);
                            }}
                            iconID="#icon-trash"
                            svgClass="!w-24 !h-24"
                            classe="!h-48 bg-alert-red-10"
                        ></Button>
                    )
                }
            </div>
        </div>
    )
}

const Stage = ({ stages, setStages, item, id, posLoop }) => {
    const position = stages.findIndex(current => current.id == item.id);
    let newArr = [...stages];

    const ingredientes = [
        { value: 'acucar', label: 'Açucar' },
        { value: 'SAL', label: 'Sal' },
        { value: 'ovo', label: 'Ovo' }
    ]
    const [ingredienteSelected, setIngredienteSelected] = useState();

    useEffect(() => {
        console.log(stages);
    }, [stages])

    return (
        <div className='flex gap-8 items-start'>
            <div className='p-16 flex-1 border border-transparent border-neutral-30 rounded-md'>
                <Accordions data-id={id} classe={`w-full border !border-transparent `}>
                    <AccordionTitle
                        id={id}
                        parent={true}
                        classe={`hover:!bg-transparent`}
                    >
                        <div className='flex justify-between w-full'>
                            <p className='p-8 rounded-md text-primary-pure'>{item.title}</p>
														{/* bg-primary-10-o  */}
                            <div className='w-32 h-32 relative bg-neutral-30 rounded'>
                                <SvgUse id="#icon_arrow_left" classe="absolute left-0 right-0 !mx-auto w-12 h-12 rotate-90" />
                            </div>
                        </div>
                    </AccordionTitle>
                    <AccordionContent id={id} classe="active permanent cadastrar-receitas !px-0">
                        <div className='mt-8 flex flex-col gap-16'>
                            <label className='text-neutral-80 !w-full  text-sm font-semibold '>
                                Tempo da entrega
                                <Input
                                    placeholder="00:00"
                                    classe="!w-[50%] md:!w-full"
                                    onChange={(e) => {
                                        newArr[position] = {
                                            ...item,
                                            tempo: e.target.value
                                        }
                                        setStages(newArr);
                                    }}
                                    state={item.tempo}
                                />
                            </label>

                            <div className='flex gap-16'>
                                <label className='text-neutral-80 text-sm w-full font-semibold '>

                                    <div className='flex items-center gap-16'>
                                        <SelectComponent
                                            classe={`md relative z-[10] flex-1 menuplacement-top`}
                                            classeSelect="h-48 !text-lg !font-semibold !text-neutral-80 cadastrar-bottom-none"
                                            data={ingredientes}
                                            onChange={(e) => {
                                                newArr[position].ingrediente[0] = e.value;
                                                setStages(newArr);
                                            }}
                                            placeholder="Selecione uma opção"
                                            state={newArr[position].ingrediente[0]}
                                            value={newArr[position].ingrediente[0]}
                                            menuPlacement="top"
                                        />

                                        <Button
                                            onClick={() => {
                                                if (newArr[position].ingrediente?.length == 0) {
                                                    newArr[position].ingrediente.push(ingredientes[0].value);
                                                    newArr[position].ingrediente.push(ingredientes[0].value);
                                                } else {
                                                    newArr[position].ingrediente.push(ingredientes[0].value);
                                                }
                                                setStages(newArr)
                                            }}
                                            iconID="#icon_add"
                                            svgClass="!w-24 !h-24"
                                            classe="!h-48"
                                        ></Button>
                                    </div>

                                </label>
                            </div>

                            {
                                newArr[position].ingrediente?.map((current, i) => {
                                    if (i !== 0) {
                                        return (
                                            <div className='flex gap-16' key={i}>
                                                <SelectComponent
                                                    classe={`md relative z-[10] flex-1 menuplacement-top`}
                                                    classeSelect="h-48 !text-lg !font-semibold !text-neutral-80 cadastrar-bottom-none"
                                                    data={ingredientes}
                                                    onChange={(e) => {
                                                        newArr[position].ingrediente[i] = e.value;
                                                        setStages(newArr);
                                                    }}
                                                    placeholder="Selecione uma opção"
                                                    state={newArr[position].ingrediente[i]}
                                                    value={newArr[position].ingrediente[i]}
                                                    menuPlacement="top"
                                                />

                                                <Button
                                                    onClick={() => {
                                                        newArr[position].ingrediente.splice(i, 1);
                                                        setStages(newArr)

                                                    }}
                                                    iconID="#icon-trash"
                                                    svgClass="!w-24 !h-24"
                                                    classe="!h-48 bg-alert-red-10"
                                                ></Button>
                                            </div>
                                        )
                                    }
                                })
                            }

                            <div className='flex-1 text-neutral-80 text-sm font-semibold '>
                                <label>
                                    Modo de preparo
                                    <TextArea
                                        classe="border  !h-[116px] !border-transparent !border-b-neutral-30"
                                        placeholder="Descreva aqui..."
                                        onChange={(e) => {
                                            newArr[position] = {
                                                ...item,
                                                preparo: e.target.value
                                            }
                                            setStages(newArr);
                                        }}
                                        state={item.preparo}
                                    />
                                </label>
                            </div>

                            <div className='flex-1 text-neutral-80 text-sm font-semibold'>
                                <label>
                                    Imagens
                                    <Upload classContainer="w-[152px] !h-[116px] !max-h-[116px] receitas part-2"
                                        maxFiles={1}
                                        allowMultiple={false}
                                        allowImagePreview={false}
                                        allowReplace
                                        credits={false}
                                        instantUpload={false}
                                        titleEl={`<p class="text-neutral-70 font-semibold text-sm text-center">Arraste e solte os arquivos ou <br> <span class="text-primary-pure">selecione os arquivos</span></p>`}
                                    />
                                </label>
                            </div>

                        </div>
                    </AccordionContent>
                </Accordions>
            </div >

            {
                posLoop > 0 && (
                    <Button
                        onClick={() => {
                            newArr.splice(position, 1)
                            let newTitleItemsArr = newArr.map((obj, i) => ({
                                ...obj,
                                title: `Etapa ${i + 1}`
                            }))
                            setStages(newTitleItemsArr);

                        }}
                        iconID="#icon-trash"
                        svgClass="!w-24 !h-24"
                        classe="!h-48 bg-alert-red-10"
                    ></Button>
                )
            }
        </div>
    )
}

const CadastrarReceita = () => {
    const [date, setDate] = useState();
    const [tipo, setTipo] = useState('');
    const [qtdEmbalagem, setQtdEmbalagem] = useState(1);


    const [stages, setStages] = useState([{
        id: 1,
        title: "Etapa 1",
        tempo: "",
        ingrediente: [],
        preparo: "",
        images: []
    }]);

    const [arrIngredientes, setArrIngredientes] = useState([
        {
            id: 1,
            nome: "",
            quantidade: 1
        }
    ])

    return (
        <div className='container'>
            <Card classe="my-64 px-24 py-32">
                <header className='flex justify-between md2:gap-16 mb-32 md2:flex-col'>
                    <Title classe="text-neutral-90 gap-8 font-medium">
                        <div>
                            <div className='flex items-center gap-8'>
                                <SvgUse id="#icon-kitchen" classe="w-20" />
                                <p className='block'>Cadastrar nova receita</p>
                            </div>
                            <span className='ml-32 -mt-4 text-sm text-neutral-70 block'>
                                Insira as Informações abaixo
                            </span>
                        </div>
                    </Title>
                </header>

                <section className=''>
                    <div className='mb-16 flex items-start gap-16 md:flex-col md:items-center border border-neutral-30 p-24 rounded-md'>
                        <div className='flex flex-1 gap-24 items-center md2:flex-col'>

                            <Upload classContainer="w-[176px] !h-[176px] receitas"
                                maxFiles={1}
                                allowMultiple={false}
                                allowImagePreview={false}
                                allowReplace
                                credits={false}
                                instantUpload={false}
                                titleEl={`<p class="text-neutral-70 font-semibold text-sm text-center">Arraste e solte o arquivo ou <br> <span class="text-primary-pure">selecione o arquivo</span></p>`}
                            />

                            <p className='text-neutral-80 font-bold md2:text-center md2:mb-16'>
                                Escolha a imagem ilustrativa para receita que vai fazer
                            </p>
                        </div>

                        <div className='flex-1'>

                            <div className='flex gap-16 mb-16 md2:flex-wrap'>

                                <label className='text-neutral-80 w-full  text-sm '>
                                    Tempo de preparo
                                    <Input
                                        placeholder="00:00"
                                    />
                                </label>

                                <label className='text-neutral-80 w-full  text-sm '>
                                    Rendimento
                                    <Input
                                        placeholder="Ex.: 10 porções"
                                    />
                                </label>

                            </div>

                            <div className='flex gap-16 mb-16 md2:flex-wrap'>


                                <label className='text-neutral-80 w-[calc(50%-8px)] md2:w-full  text-sm '>
                                    Esse produto é
                                    <div className="flex gap-16 mt-18 items-center">
                                        <CheckBox
                                            value={tipo || ''}
                                            checked={tipo === 'comercializavel'}
                                            onChange={() => setTipo('comercializavel')}
                                        >
                                            <p className='text-sm'>É comercializável</p>
                                        </CheckBox>
                                        <CheckBox
                                            value={tipo || ''}
                                            checked={tipo === 'ingrediente'}
                                            onChange={() => setTipo('ingrediente')}
                                        >
                                            <p className='text-sm'>É ingrediente</p>
                                        </CheckBox>
                                    </div>
                                </label>

                            </div>

                            <div className='flex-1 text-neutral-80 text-sm '>
                                <label>
                                    Descrição
                                    <TextArea
                                        classe="border  !h-[116px] !border-transparent !border-b-neutral-30"
                                        placeholder="Descreva aqui..."
                                    />
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className='flex gap-16 items-start md:flex-col'>
                        <div className='flex flex-1 md2:w-full flex-col gap-16 p-24 border border-neutral-30 rounded-md'>
                            <Title classe="text-neutral-90 gap-8 font-medium">
                                <div>
                                    <div className='flex items-center gap-8'>
                                        <SvgUse id="#icon-two-milk" classe="w-20" />
                                        <p className='block'>Ingredientes</p>
                                    </div>
                                </div>
                            </Title>

                            <div className='flex flex-col gap-16'>
                                {
                                    arrIngredientes.map((item, i) => {
                                        return (
                                            <Ingredientes 
                                                item={item} 
                                                posLoop={i} 
                                                key={i} 
                                                setArrIngredientes={setArrIngredientes} 
                                                arrIngredientes={arrIngredientes}
                                            />
                                        )
                                    })
                                }
                            </div>

                            <Button
                                onClick={() => setArrIngredientes(arrIngredientes.concat({ id: Math.random() * 20, nome: "", quantidade: 1 }))}
                                iconID="#icon_add"
                            >
                                Novo ingrediente
                            </Button>
                        </div>

                        <div className='flex-1 p-24 md2:w-full gap-16 border border-neutral-30 rounded-md'>
                            <Title classe="text-neutral-90 gap-8 font-medium mb-24">
                                <div className='flex items-center gap-8'>
                                    <SvgUse id="#icon-etapas" classe="w-20" />
                                    <p className='block'>Etapas</p>
                                </div>
                            </Title>

                            <section className='flex flex-1 flex-col gap-16 mb-8'>
                                {
                                    stages.map((item, i) => {
                                        return (
                                            <Stage
                                                setStages={setStages}
                                                stages={stages}
                                                item={item}
                                                key={item.id}
                                                id={item.id}
                                                posLoop={i}
                                            />
                                        )
                                    })
                                }

                            </section>

                            <div className='w-full border border-transparent border-t-neutral-30 pt-24'>
                                <Button
                                    onClick={() => {
                                        setStages(
                                            stages.concat(
                                                {
                                                    id: Math.random() * 20,
                                                    title: `Etapa ${stages.length + 1}`,
                                                    images: [],
                                                    ingrediente: [],
                                                    preparo: '',
                                                    tempo: ''
                                                }
                                            )
                                        )
                                    }}
                                    iconID="#icon_add"
                                    svgClass="!w-20 !h-20"
                                    classe="h-48"
                                >
                                    Nova etapa
                                </Button>
                            </div>

                        </div>
                    </div>
                </section>

                <div className='flex justify-end mt-24'>
                    <div className='flex gap-16 '>
                        <Button classe="secondary h-48">
                            Cancelar
                        </Button>

                        <Button classe="h-48">
                            Cadastrar nova receita
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CadastrarReceita