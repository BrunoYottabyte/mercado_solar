import React, { useEffect } from 'react'
import { Card } from '../../../components/DesignSystem/Card'
import { Title } from '../../../components/DesignSystem/Headings'
import { Input } from '../../../components/DesignSystem/Input'
import SvgUse from '../../../components/svg/svgUse'
import American from '../../../assets/images/american.png'
import DinersClub from '../../../assets/images/dinersclub.png'
import Elo from '../../../assets/images/elo.png'
import Hipercard from '../../../assets/images/hipercard.png'
import Mastercard from '../../../assets/images/mastercard.png'
import Visa from '../../../assets/images/visa.png'
import Button from '../../../components/DesignSystem/Button'
import { useGlobalContext } from '../../../context/GlobalContext'
import { Modal } from '../../../components/DesignSystem/Modal/Modal'
import { ModalHeader } from '../../../components/DesignSystem/Modal/ModalHeader'
import { ModalContent } from '../../../components/DesignSystem/Modal/ModalContent'

const AdicionarFormaPagamento = () => {

    return (
        <div className='container'>
    
            <Card classe="my-64 px-24 py-32">
                
                <header className='flex justify-between md2:flex-col md2:gap-16 mb-20'>
                    <Title classe="text-neutral-90 gap-8 font-medium">
                        <div>
                            <div className='flex items-center gap-8'>
                                <SvgUse id="#icon-title-card" classe="w-20" />
                                <p className='block text-neutral-90 font-medium'>Gestão de assinatura</p>
                            </div>
                        </div>
                    </Title>
                </header>

                <div className='flex gap-16 md2:flex-col'>
                    <div className='flex-1 border border-neutral-30 rounded-md p-16'>
                        <Title classe="text-neutral-90 gap-8 font-medium mb-24">

                            <div className='flex items-center gap-8'>
                                <SvgUse id="#icon-wallet-3" classe="w-20" />
                                <p className='block text-neutral-90 font-medium text-base'>Adicionar forma de pagamento</p>
                            </div>

                        </Title>

                        <div className='flex flex-col gap-16'>
                            <label>
                                Número do cartão
                                <Input
                                    placeholder="1234 1234 1234 1234"
                                />
                            </label>

                            <label>
                                Nome do cartão
                                <Input
                                    placeholder="Ana Júlia Abrantes"
                                />
                            </label>

                            <div className='flex gap-16 items-start md2:flex-wrap'>
                                <label className='flex-1 md2:!w-full md2:flex-auto'>
                                    <p className='flex justify-between'>
                                        Código de segurança <SvgUse id="#icon-interrogacao" classe="w-20 h-20" />
                                    </p>
                                    <Input
                                        placeholder="267"
                                    />
                                </label>
                                <label className='flex-1 md2:!w-full md2:flex-auto'>
                                    Data de validade
                                    <Input
                                        placeholder="mm/aaaa"
                                    />
                                </label>
                                <label className='flex-1 md2:!w-full md2:flex-auto'>
                                    CPF
                                    <Input
                                        placeholder="123.456.789-12"
                                    />
                                </label>
                            </div>

                            <div className='flex gap-4 mt-10'>
                                <div className='w-48 h-28 bg-neutral-30 rounded-sm flex justify-center items-center'>
                                    <img src={Hipercard} className="" alt="logo do cartão american" />
                                </div>

                                <div className='w-48 h-28 bg-neutral-30 rounded-sm flex justify-center items-center'>
                                    <img src={Mastercard} className="" alt="logo do cartão american" />
                                </div>

                                <div className='w-48 h-28 bg-neutral-30 rounded-sm flex justify-center items-center'>
                                    <img src={Visa} className="" alt="logo do cartão american" />
                                </div>

                                <div className='w-48 h-28 bg-neutral-30 rounded-sm flex justify-center items-center'>
                                    <img src={American} className="" alt="logo do cartão american" />
                                </div>

                                <div className='w-48 h-28 bg-neutral-30 rounded-sm flex justify-center items-center'>
                                    <img src={DinersClub} className="" alt="logo do cartão american" />
                                </div>

                                <div className='w-48 h-28 bg-neutral-30 rounded-sm flex justify-center items-center'>
                                    <img src={Elo} className="" alt="logo do cartão american" />
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* 2º SECTION */}

                    <div className='flex-1 border border-neutral-30 rounded-md p-16'>
                        <Title classe="text-neutral-90 gap-8 font-medium mb-24">

                            <div className='flex items-center gap-8'>
                                <SvgUse id="#icon-maps" classe="w-20" />
                                <p className='block text-neutral-90 font-medium text-base'>Endereço de cobrança</p>
                            </div>

                        </Title>

                        <div className='flex flex-col gap-16'>
                            <div>
                                CEP
                                <div className='flex items-center gap-24'>

                                    <Input
                                        placeholder="12345000"
                                    />
                                    <p className='font-medium text-sm text-primary-pure'>Não sei meu CEP</p>
                                </div>
                            </div>

                            <div className='flex gap-16 items-start md2:flex-wrap'>
                                <label className='flex-1 md2:!w-full md2:flex-auto'>
                                    <p className='flex justify-between'>
                                        Cidade
                                    </p>
                                    <Input
                                        placeholder="Endereço"
                                    />
                                </label>
                                <label className='flex-1 md2:!w-full md2:flex-auto'>
                                    Número
                                    <Input
                                        placeholder="Ex.: 123"
                                    />
                                </label>
                            </div>

                            <div className='flex gap-16 items-start md2:flex-wrap'>
                                <label className='flex-1 md2:!w-full md2:flex-auto' >
                                    <p className='flex justify-between'>
                                        Cidade
                                    </p>
                                    <Input
                                        placeholder="267"
                                    />
                                </label>
                                <label className='flex-1 md2:!w-full md2:flex-auto'>
                                    Bairro
                                    <Input
                                        placeholder="Ex.: Avenida principal..."
                                    />
                                </label>
                                <label className='flex-1 md2:!w-full md2:flex-auto'>
                                    Complemento
                                    <Input
                                        placeholder="Placeholder"
                                    />
                                </label>
                            </div>

                            <label className='flex-1'>
                                Ponto de refêrencia
                                <Input
                                    placeholder="Ex.: Perto da padaria Doce sabor..."
                                />
                            </label>

                        </div>

                    </div>


                </div>

                <div className='mt-32 flex justify-between md2:flex-col md2:gap-16'>
                    <p className='md2:text-center'>
                        Os seus dados pessoais serão utilizados para processar a sua <br /> compra,
                        apoiar a sua experiência em todo este site e para outros fins descritos na nossa <span className='text-primary-pure font-medium '>política de privacidade.</span>
                    </p>

                    <Button classe="justify-center md2:w-full">
                        Finalizar Compra
                    </Button>
                </div>

            </Card>
        </div>
    )
}

export default AdicionarFormaPagamento