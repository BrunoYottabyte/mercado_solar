import React from 'react'
import { useEffect } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Button from '../../components/DesignSystem/Button'
import { Card } from '../../components/DesignSystem/Card'
import { ModalHeader } from '../../components/DesignSystem/Modal'
import { Modal } from '../../components/DesignSystem/Modal/Modal'
import { ModalContent } from '../../components/DesignSystem/Modal/ModalContent'

import SvgUse from '../../components/svg/svgUse'
import { useGlobalContext } from '../../context/GlobalContext'
import ItemsCart from './itemsCart'

const DetailsPaineis = () => {
	const { setmodalOpen, modalOpen } = useGlobalContext();

	useEffect(() => {
		if (modalOpen.open == false || modalOpen.open == null) {
			clearTimeout(window.timeoutpaineis);
		}
	}, [modalOpen]);

	const openModal = (id) => {
		setmodalOpen({ open: true, id, position: 'right' });
	};


	const openCart = () => {
		openModal('cart');
	}

	return (
		<>
			<Modal className={`w-[37rem]  md2:max-w-[400px] md2:w-[95vw]`}>
				<ModalContent id="cart">
					<ModalHeader close={false} classeHeader="!bg-white relative z-[999999] title3 sticky top-0 pb-24 border border-transparent border-b-neutral-30">
						<div className="title3 flex w-full justify-between items-center">
							
							<div className='flex items-center'>
								<h3 className='title3'>Orçamento <span className='text-primary-pure'>2742</span> - Bruno Siqueira</h3>
								<button
									type="button"
									style={{'--cor-1': '#F69F00'}}
									className="absolute right-24 top-24 !border !border-neutral-60/20 hover:border-primary-pure  rounded-full"
									onClick={() => setmodalOpen({ open: false, id: false, position: 'right' })}
								>
									<SvgUse id="#icon_close_ms" classe="!w-28 !h-28" />
								</button>
							</div>
						</div>
					</ModalHeader>

					<section className='flex flex-col gap-48'>
						{
							[0,1,2,3,4].map((item, i) => (
								<ItemsCart key={i} />
							))
						}
					</section>
				</ModalContent>
			</Modal>
			<div className='container py-48'>
				<section className='flex items-start gap-32 md:flex-col'>
					<div className='flex items-start gap-16 overflow-hidden h-full md2:max-h-[25rem] sm:max-h-[40rem] sm:flex-col md:!w-full'>
						<div className='flex flex-col justify-between h-[35rem] overflow-y-auto gap-16 sm:flex-row sm:h-max md:max-w-[25rem]'>
							<img src='../src/assets/images/paines-solares/img1.png' className='w-[7.25rem] min-h-[7.25rem] h-[7.25rem] rounded-md' />
							<img src='../src/assets/images/paines-solares/img2.png' className='w-[7.25rem] min-h-[7.25rem] h-[7.25rem] rounded-md' />
							<img src='../src/assets/images/paines-solares/img3.png' className='w-[7.25rem] min-h-[7.25rem] h-[7.25rem] rounded-md' />
							<img src='../src/assets/images/paines-solares/img4.png' className='w-[7.25rem] min-h-[7.25rem] h-[7.25rem] rounded-md' />
							<img src='../src/assets/images/paines-solares/img4.png' className='w-[7.25rem] min-h-[7.25rem] h-[7.25rem] rounded-md' />
						</div>
						<img src='../src/assets/images/paines-solares/img1.png' className='flex-1 object-contain md2:w-[25rem] md2:h-[25rem] w-[35rem] h-[35rem] rounded-md' />
					</div>

					<div className='sm:w-full'>
							<p className='caps2-semibold text-neutral-60'>REF. 156788</p>
							<p className='title3'>Kit 12 Placas Painéis Solares Monocristalino 450 W Inmetro</p>
							<h2 className='title2 text-neutral-70 mt-10'>R$ 14.388</h2>
							<div className='mt-16 mb-24 flex gap-8 items-center '>
										<img src='../src/assets/images/paines-solares/thumb.png' />
										<p className='paragraph2 text-neutral-70'>Fabricante</p>
							</div>
							<p className='paragraph2 mb-4'>Quantidade</p>
							<div className='w-[7.75rem] h-48 flex items-center justify-between p-16 bg-white shadow-md rounded-md'>
								<SvgUse id="#icon_subtract_ms" classe="w-24 hover:cursor-pointer" />1 <SvgUse id="#icon_add_details_ms" classe="w-24 hover:cursor-pointer" />
							</div>

							<div className="flex flex-col gap-10 mt-32">
								<Button style={{'--cor-1':'#F69F00'}} iconID="#icon-eye-ms" classe="btn secondary w-full justify-center"
									onClick={openCart}
								>Ver orçamento</Button>
								<Button style={{'--cor-1':'#000'}} iconID="#icon_add_details_ms" classe="btn w-full justify-center">Adicionar ao orçamento</Button>
							</div>
					</div>
				</section>
				<Card classe="my-24 p-0">
					<Tabs>
						<TabList>
							<Tab  prefix="tab" classID="dados_profissionais ">
								Descrição geral
							</Tab>
							<Tab classID="dados_pessoais">
								Informações adicionais
							</Tab>
							<Tab classID="orcamento">
								Detalhes técnicos
							</Tab>
						</TabList>

						<TabPanel>
							<section className='p-24 flex flex-col gap-24'>
								<p className='paragraph2 text-neutral-70'>Descrição</p>
								<p className='paragraph2 text-neutral-70'>mEIO</p>
								<p className='paragraph2 text-neutral-70'>fIM</p>
							</section>
						</TabPanel>

						<TabPanel>
							<section className='p-24 flex flex-col gap-24'>
								<p className='paragraph2 text-neutral-70'>Informações adicionais</p>
								<p className='paragraph2 text-neutral-70'>mEIO</p>
								<p className='paragraph2 text-neutral-70'>fIM</p>
							</section>
						</TabPanel>

						<TabPanel>
							<section className='p-24 flex flex-col gap-24'>
								<p className='paragraph2 text-neutral-70'>Detalhes técnicos</p>
								<p className='paragraph2 text-neutral-70'>mEIO</p>
								<p className='paragraph2 text-neutral-70'>fIM</p>
							</section>
						</TabPanel>
						
					</Tabs>
				</Card>
			</div>
		</>
	)
}

export default DetailsPaineis