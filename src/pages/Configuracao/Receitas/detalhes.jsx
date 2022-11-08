import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Accordions from '../../../components/DesignSystem/Accordions';
import AccordionContent from '../../../components/DesignSystem/Accordions/AccordionContent';
import AccordionTitle from '../../../components/DesignSystem/Accordions/AccordionTitle';
import Button from '../../../components/DesignSystem/Button';
import { Card } from '../../../components/DesignSystem/Card';
import { Title } from '../../../components/DesignSystem/Headings';
import SvgUse from '../../../components/svg/svgUse';



const DetalhesReceita = () => {
    const InfoSm = ({ icon, title, classIcon }) => {
        return (
            <div className='flex gap-8'>
                <SvgUse id={`#${icon}`} classe={`w-20 h-20 ${classIcon}`} />
                <p>{title}</p>
            </div>
        )
    }

    const Stage = ({ title }) => {
        return (

            <div className='p-16 border border-transparent border-neutral-30 rounded-md'>


                <Accordions data-id={'1'} classe={`w-full border !border-transparent `}>
                    <AccordionTitle
                        id={'1'}
                        parent={true}
                        classe={`hover:!bg-transparent`}
                    >
                        <div className='flex justify-between w-full'>
                            <p className='p-8  rounded-md text-primary-pure'>{title}</p>
{/* bg-primary-10-o */}
                            <div className='w-32 h-32 relative bg-neutral-30 rounded'>
                                <SvgUse id="#icon_arrow_left" classe="absolute left-0 right-0 !mx-auto w-12 h-12 rotate-90" />
                            </div>
                        </div>
                    </AccordionTitle>
                    <AccordionContent id={'1'} classe="active permanent !px-0">
                        <div className='mt-8'>
                            <div className='py-16 border border-transparent border-b-neutral-30'>
                                <p className='font-semibold text-sm text-neutral-80'>Tempo da etapa</p>
                                <span className='text-neutral-70'>30:00</span>
                            </div>
                            <div className='py-16 border border-transparent border-b-neutral-30 text-sm'>
                                <p className='font-semibold  text-neutral-80'>Ingredientes</p>
                                <div className='flex gap-8 mt-16 items-center'>
                                    <span className='w-8 h-8 bg-neutral-30 rounded'></span>
                                    <p>1 ovo</p>
                                </div>
                                <div className='flex gap-8 mt-16 items-center'>
                                    <span className='w-8 h-8 bg-neutral-30 rounded'></span>
                                    <p>1 copo (americano) de leite</p>
                                </div>
                                <div className='flex gap-8 mt-16 items-center'>
                                    <span className='w-8 h-8 bg-neutral-30 rounded'></span>
                                    <p>1 copo (americano) de fubá</p>
                                </div>
                                <div className='flex gap-8 mt-16 items-center'>
                                    <span className='w-8 h-8 bg-neutral-30 rounded'></span>
                                    <p>1/2 copo (americano) de óleo</p>
                                </div>

                            </div>

                            <div className='py-16 border border-transparent border-b-neutral-30'>
                                <p className='font-semibold text-sm text-neutral-80'>Modo de preparo</p>
                                <span className='text-neutral-70'>Misture no liquidificador o ovo, o leite, o açúcar, o fubá e bata bem.</span>
                            </div>

                            <div className='py-16 border border-transparent border-b-neutral-30'>
                                <p className='font-semibold text-sm text-neutral-80'>Imagens</p>
                                <div className='flex gap-16'>
                                    <img className='w-[152px] h-[115px] object-cover rounded' src="https://a-static.mlcdn.com.br/800x560/frigideira-antiaderente-rochedo-de-aluminio-idea-azul-18cm/magazineluiza/144288800/edd4d5c4c41eb0566798d80b6067d98d.jpg" alt="" />
                                    <img className='w-[152px] h-[115px] object-cover rounded' src="https://portalvidalivre.com/uploads/content/image/73874/Design_sem_nome__1_.jpg" alt="" />
                                </div>
                            </div>

                        </div>
                    </AccordionContent>
                </Accordions>
            </div>
        )
    }
    
    return (
        <div className='container'>
            <Card classe="my-64 px-24 py-32">
                <header className='flex justify-between md2:gap-16 mb-32 md2:flex-col'>
                    <Title classe="text-neutral-90 gap-8 font-medium">
                        <div>
                            <div className='flex items-center gap-8'>
                                <SvgUse id="#icon-kitchen" classe="w-20" />
                                <p className='block'>Receitas</p>
                            </div>
                            <span className='ml-32 -mt-4 text-sm text-neutral-70 block'>
                                Informações da receita
                            </span>
                        </div>
                    </Title>
                </header>

                <main className='flex gap-16 items-start'>
                    <section className='p-16 flex-1 flex gap-24 items-start border border-neutral-30 rounded-md'>
                        <aside className='border border-neutral-30 min-w-[176px] rounded-md'>
                            <img className='w-[176px] h-[176px] rounded object-cover' src="https://www.correiodosmunicipios-al.com.br/wp-content/uploads/2022/04/BolodeBrigadeiro4-e1648825943494.jpg" alt="" />
                            <div>
                                <div className='flex flex-col justify-center gap-8 px-8 py-16 border border-transparent border-b-neutral-30'>
                                    <div className='flex gap-8 '>
                                        <SvgUse id="#icon-kitchen" classe="w-20 h-20" />
                                        <p>40min</p>
                                    </div>
                                    <div className='flex gap-8'>
                                        <SvgUse id="#icon-kitchen" classe="w-20 h-20" />
                                        <p>10 porções</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-8 px-8 py-16 text-sm font-medium border border-transparent border-b-neutral-30'>
                                    <div className='flex gap-8'>
                                        <SvgUse id="#icon-kitchen" classe="w-20 h-20" />
                                        <p className='font-semibold'>Dias à fazer</p>
                                    </div>
                                    <InfoSm icon={'icon-check-2'} title="Seg" />

                                    <InfoSm icon={'icon-check-2'} title="Ter" />

                                    <InfoSm icon={'icon-close'} title="Qua" />

                                    <InfoSm icon={'icon-check-2'} title="Qui" />

                                    <InfoSm icon={'icon-check-2'} title="Sex" />

                                    <InfoSm icon={'icon-check-2'} title="Sab" />

                                    <InfoSm icon={'icon-check-2'} title="Dom" />
                                </div>

                                <div className='flex flex-col gap-8 px-8 py-16 text-sm font-medium'>
                                    <InfoSm icon={'icon-check-2'} title="É comercializável" />
                                    <InfoSm icon={'icon-close'} title="É ingrediente" />
                                </div>
                            </div>
                        </aside>

                        <div className='tabs-container custom-background configuracao-receitas  height-sm w-full radius-default'>
                            <Tabs style={{ padding: '0' }}>
                                <TabList>
                                    <Tab prefix='tab' classID='ingredientes'>Ingredientes</Tab>
                                    <Tab classID='descricao'>Descrição</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className='flex flex-col gap-16'>
                                        <div className='flex gap-8 items-center'>
                                            <span className='w-8 h-8 bg-neutral-30 rounded'></span>
                                            <p>1 ovo</p>
                                        </div>
                                        <div className='flex gap-8 items-center'>
                                            <span className='w-8 h-8 bg-neutral-30 rounded'></span>
                                            <p>1 copo (americano) de leite</p>
                                        </div>
                                        <div className='flex gap-8 items-center'>
                                            <span className='w-8 h-8 bg-neutral-30 rounded'></span>
                                            <p>1 copo (americano) de fubá</p>
                                        </div>
                                        <div className='flex gap-8 items-center'>
                                            <span className='w-8 h-8 bg-neutral-30 rounded'></span>
                                            <p>1 copo (americano) de açucar</p>
                                        </div>
                                        <div className='flex gap-8 items-center'>
                                            <span className='w-8 h-8 bg-neutral-30 rounded'></span>
                                            <p>1/2 copo (americano) de óleo</p>
                                        </div>
                                        <div className='flex gap-8 items-center'>
                                            <span className='w-8 h-8 bg-neutral-30 rounded'></span>
                                            <p>1 copo (americano) farinha de trigo</p>
                                        </div>
                                        <div className='flex gap-8 items-center'>
                                            <span className='w-8 h-8 bg-neutral-30 rounded'></span>
                                            <p>1 colher de fermento em pó</p>
                                        </div>
                                        <div className='flex gap-8 items-center'>
                                            <span className='w-8 h-8 bg-neutral-30 rounded'></span>
                                            <p>goiabada em pedaços</p>
                                        </div>
                                        <div className='flex gap-8 items-center'>
                                            <span className='w-8 h-8 bg-neutral-30 rounded'></span>
                                            <p>erva-doce a gosto</p>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <p>Descrição</p>
                                </TabPanel>
                            </Tabs>
                        </div>

                    </section>

                    <section className='flex flex-1 flex-col gap-16'>
                        <Stage title="Etapa 1" />
                        <Stage title="Etapa 2" />
                        <Stage title="Etapa 3" />
                    </section>
                </main>
            </Card>
        </div>
    )
}

export default DetalhesReceita;