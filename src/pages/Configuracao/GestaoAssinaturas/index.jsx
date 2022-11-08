import React from 'react'
import Button from '../../../components/DesignSystem/Button'
import { Card } from '../../../components/DesignSystem/Card'
import { Title } from '../../../components/DesignSystem/Headings'
import SvgUse from '../../../components/svg/svgUse'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import CardSystem from './Card'
import History from './History'
import { useGlobalContext } from '../../../context/GlobalContext'
import { Modal } from '../../../components/DesignSystem/Modal/Modal'
import { ModalHeader } from '../../../components/DesignSystem/Modal/ModalHeader'
import { ModalContent } from '../../../components/DesignSystem/Modal/ModalContent'
import { useEffect } from 'react'

const GestaoAssinatura = () => {

    const { setmodalOpen, modalOpen } = useGlobalContext();

    useEffect(() => {
        if (modalOpen.open == false || modalOpen.open == null) {
            clearTimeout(window.formaPagamento)
        }
    }, [modalOpen])

    const closeModal = () => {
        setmodalOpen({ open: false, id: false })
        clearState();
    }

    const openModal = () => {
        setmodalOpen({ open: true, id: "confirm" })
    }

    const success = () => {
        setmodalOpen({ open: true, id: 'animation' });
        window.formaPagamento = setTimeout(closeModal, 5000)
    }

    return (
        <div className='container'>
            <Modal className={`w-[600px]  md2:max-w-[400px] md2:w-[95vw]`}>
                {/* <ModalContent id="confirm">
                    <ModalHeader text="Cancelar plano" />
                    <div className='p-24'>
                        <h1 className='text-neutral-90 font-semibold text-2xl'>É fácil cancelar o seu plano</h1>
                        <p className='mt-10 mb-32'>Obrigado pelo tempo que você permaneceu por aqui. Saiba que estaremos sempre de braços abertos para você. Conclua o cancelamento abaixo.</p>
                        <p>O cancelamento passa a vigorar ao fim deste ciclo de cobrança: <span className='text-primary-pure font-semibold'>20 de junho de 2022</span></p>

                        <div className='flex justify-end gap-16 mt-24'>
                            <Button
                                classe=" secondary !h-48"
                            >Voltar</Button>
                            <Button
                                classe="btn !h-48"
                            >Quero Cancelar</Button>
                        </div>
                    </div>
                </ModalContent> */}

                {/* <ModalContent id="confirm">
                    <ModalHeader text="Plano cancelado" />
                    <div className='p-24'>
                        <h1 className='text-neutral-90 font-semibold text-2xl'>Seu plano foi cancelado</h1>
                        <p className='mt-10 mb-32'>Seu cancelamento passa a vigorar ao fim deste ciclo de cobrança: <span className='text-primary-pure font-semibold'>20 de junho de <br/> 2022.</span></p>
                    
                    </div>
                </ModalContent> */}


                 {/* <ModalContent id="confirm">
                    <ModalHeader text="Alterar plano" />
                    <div className='p-24'>
                        <div className='p-16 mb-16 flex items-center justify-between border border-neutral-30 bg-neutral-10 rounded'>
                            <div>
                                <h1 className='text-neutral-100 font-semibold text-lg'>Plano Mensal</h1>
                                <h2 className='mb-8 text-neutral-70 font-semibold text-2xl'>R$ <span className=' text-primary-pure'>25,00</span> <span className='text-base'>p/mês</span></h2>
                            </div>

                            <Button>
                                Escolher
                            </Button>
                        </div>
                        
                        <div className='p-16 flex items-center justify-between border border-neutral-30 bg-neutral-10 rounded'>
                            <div>
                                <h1 className='text-neutral-100 font-semibold text-lg'>Plano Trimestral</h1>
                                <h2 className='mb-8 text-neutral-70 font-semibold text-2xl'>R$ <span className=' text-primary-pure'>20,00</span> <span className='text-base'>p/mês</span></h2>
                            </div>

                            <Button>
                                Escolher
                            </Button>
                        </div>
                    </div>
                </ModalContent> */}


               

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
            <div className='flex md2:flex-col gap-16 '>
                <Card classe="my-64 mb-16 px-24 py-32 min-w-[472px] md2:mb-16  md2:min-w-full">
                    <header className='flex justify-between md2:gap-16 mb-20'>
                        <Title classe="text-neutral-90 gap-8 font-medium">
                            <div>
                                <div className='flex items-center gap-8'>
                                    <SvgUse id="#icon-title-card" classe="w-20" />
                                    <p className='block text-neutral-90 font-medium'>Plano atual</p>
                                </div>
                            </div>
                        </Title>
                        <Button
                            onClick={openModal}
                            classe="w-40 h-40 relative justify-center"
                            svgClass="!h-32 !w-32"
                        >
                            <SvgUse id="#icon_pencil" classe="!w-24 !h-24  absolute" />
                        </Button>
                    </header>

                    <div className='mt-32 flex flex-col justify-center h-[200px] border border-neutral-30 p-16 rounded-md shadow-lg'>
                        <h1 className='mb-8 font-semibold text-lg'>Plano Mensal</h1>
                        <h2 className='mb-8 text-neutral-70 font-semibold text-2xl'>R$ <span className=' text-primary-pure'>25,00</span> <span className='text-base'>p/mês</span></h2>
                        <p >Seu plano será renovado em 20 de junho de 2022</p>
                        <Button
                            classe="secondary h-48 mt-24"
                        >
                            Cancelar Plano
                        </Button>
                    </div>
                </Card>

                <Card classe="my-64 mb-16 px-24 py-32 flex-1 relative md2:mt-0  md2:w-full">
                    <header className='flex justify-between md2:flex-col md2:gap-16 mb-20'>
                        <Title classe="text-neutral-90 gap-8 font-medium">
                            <div>
                                <div className='flex items-center gap-8'>
                                    <SvgUse id="#icon-wallet-2" classe="w-20" />
                                    <p className='block text-neutral-90 font-medium'>Forma de pagamento</p>
                                </div>
                            </div>
                        </Title>
                        <Button
                            classe="relative justify-center md2:w-full md2:!h-48"
                            svgClass="!h-24 !w-24"
                            iconID="#icon_add"
                        >
                            <p>
                                Adicionar forma de pagamento
                            </p>
                        </Button>
                    </header>

                    <div className='mt-32 relative !h-[215px]'>
                        <div className='absolute top-0 left-0 w-full'>
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={8}
                                slidesPerView={'auto'}
                                touchStartPreventDefault={false}
                            >
                                <SwiperSlide className='!w-max'>
                                    <CardSystem active />
                                </SwiperSlide>
                                <SwiperSlide className='!w-max'>
                                    <CardSystem />
                                </SwiperSlide>
                                <SwiperSlide className='!w-max'>
                                    <CardSystem />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                    </div>
                </Card>
            </div>

            <Card classe="mb-64 mt-16 md2:mt-16 px-0 py-32 flex-1 relative  md2:w-full">
                <header className='px-24 flex justify-between md2:gap-16 mb-20'>
                    <Title classe="text-neutral-90 gap-8 font-medium">
                        <div>
                            <div className='flex items-center gap-8'>
                                <SvgUse id="#icon-title-card" classe="w-20" />
                                <p className='block text-neutral-90 font-medium'>Histórico de faturas</p>
                            </div>
                        </div>
                    </Title>
                </header>
                <div className='mt-32 relative !h-[150px]' >
                    <div className='absolute top-0 left-0 w-full '>
                        <Swiper
                            touchStartPreventDefault={false}
                            spaceBetween={8}
                            slidesPerView={'auto'}
                            className="first:px-24 "
                        >
                            <SwiperSlide

                                className='!w-max'>
                                <History />
                            </SwiperSlide>
                            <SwiperSlide className='!w-max'>
                                <History pg />
                            </SwiperSlide>
                            <SwiperSlide className='!w-max'>
                                <History pg />
                            </SwiperSlide>
                            <SwiperSlide className='!w-max'>
                                <History pg />
                            </SwiperSlide>
                            <SwiperSlide className='!w-max'>
                                <History pg />
                            </SwiperSlide>
                            <SwiperSlide className='!w-max'>
                                <History pg />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default GestaoAssinatura