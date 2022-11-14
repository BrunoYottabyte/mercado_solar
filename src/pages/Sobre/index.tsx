import React, { useEffect } from 'react'

import NavbarSite from '../../assets/componentsSite/navbar'
import { ModalHeader } from '../../components/DesignSystem/Modal'
import { Modal } from '../../components/DesignSystem/Modal/Modal'
import { ModalContent } from '../../components/DesignSystem/Modal/ModalContent'
import Svg from '../../components/svg/svg'
import SvgUse from '../../components/svg/svgUse'
import { useGlobalContext } from '../../context/GlobalContext'

const Sobre = () => {
  const { setmodalOpen, modalOpen } = useGlobalContext()

  useEffect(() => {
    if (modalOpen.open == false || modalOpen.open == null) {
      clearTimeout(window.timeouthome)
    }
  }, [modalOpen])

  const openModal = (id) => {
    setmodalOpen({ open: true, id, position: 'right' })
  }

  return (
		<>
			<Modal className={'w-[37rem] h-full z-[999999999999999999999999999999999999999999]  md2:max-w-[400px] md2:w-[95vw]'}>
				<ModalContent id="sidemenu">
					<ModalHeader close={false} classeHeader="!bg-primary-pure !h-[5rem] relative z-[999999] title3 sticky top-0 pb-24 border border-transparent border-b-neutral-30">
						<div className="title3 flex w-full flex-end items-center">
								<button
									type="button"
									style={{ '--cor-1': '#F69F00' }}
									className="absolute z-50 !bg-white/70 right-24 top-24 !border !border-neutral-60/20 hover:border-primary-pure  rounded-full"
									onClick={() => setmodalOpen({ open: false, id: false, position: 'right' })}
								>
									<SvgUse id="#icon_close_ms" classe="!w-28 !h-28" />
								</button>
						</div>
					</ModalHeader>

					<section className='flex flex-col gap-24 p-24'>
						<ul>
							<li>Benefícios de contratar</li>
							<li>Sobre nós </li>
							<li>Entrar</li>
						</ul>
					</section>
				</ModalContent>
			</Modal>
			<main className='w-screen h-full'>
				<NavbarSite openModal={openModal} />
				<Svg />

				<section className="mt-[5rem] flex gap-14 items-center">

					<div className="container-sun flex gap-8 items-center">
						{
							[0, 1, 2, 3, 4].map((item, i) => (
								i != 4 ? <SvgUse id="#icon_sun_ms" classe="!w-24 !h-24" key={`${i}-svg`} /> : <SvgUse id="#icon_sun_vazio_ms" classe="!w-24 !h-24" key={`${i}-svg`}/>
							))
						}
					</div>

					<p className="paragraph1 text-neutral-70">Megliosole Energia Renovavel Ltda</p>
				</section>
			</main>
		</>
  )
}

export default Sobre
