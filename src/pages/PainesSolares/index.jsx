import React from 'react'
import { useEffect } from 'react';
import Button from '../../components/DesignSystem/Button';
import { Card } from '../../components/DesignSystem/Card'
import {ModalHeader } from '../../components/DesignSystem/Modal';
import { Modal } from '../../components/DesignSystem/Modal/Modal';
import { ModalContent } from '../../components/DesignSystem/Modal/ModalContent';
import { SelectComponent } from '../../components/DesignSystem/SelectComponent'
import SvgUse from '../../components/svg/svgUse';
import { useGlobalContext } from '../../context/GlobalContext';
import Items from './items';

const PainesSolares = () => {
	const { setmodalOpen, modalOpen } = useGlobalContext();

	useEffect(() => {
		if (modalOpen.open == false || modalOpen.open == null) {
			clearTimeout(window.timeoutpaineissolares);
		}
	}, [modalOpen]);

	const openModal = (id) => {
		setmodalOpen({ open: true, id, position: 'right' });
	};

	return (
		<>
		<Modal className={`w-[37rem]  md2:max-w-[400px] md2:w-[95vw]`}>
				<ModalContent id="filter">
					<ModalHeader close={false} classeHeader="!bg-white relative z-[999999] title3 sticky top-0 pb-24 border border-transparent border-b-neutral-30">
						<div className="title3 flex w-full justify-between items-center">
							
							<div className='flex items-center'>
								<h3 className='title3'>Filtro</h3>
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

					<section className='p-24 flex flex-col gap-48 '>
						<div className='flex flex-col gap-32 sticky top-0  self-start items-start overflow-hidden'>
						<div>
							<h3 className='headline1'>Paines solares</h3>
							<span className='paragraph2 text-neutral-60'>1.000 produtos</span>
						</div>

						<div>
							<h3 className='headline2 mb-10'>Marcas</h3>
							<ul>
								<li className='paragraph2 text-neutral-60'>Marca one</li>
								<li className='paragraph2 text-neutral-60'>Marca two</li>
								<li className='paragraph2 text-neutral-60'>Marca three</li>
							</ul>
						</div>

						<div>
							<h3 className='headline2 mb-10'>Categoria</h3>
							<ul>
								<li className='paragraph2 text-neutral-60'>Categoria one</li>
								<li className='paragraph2 text-neutral-60'>Categoria two</li>
								<li className='paragraph2 text-neutral-60'>Categoria three</li>
							</ul>
						</div>

						<div>
							<h3 className='headline2 mb-10'>Preço</h3>
							<ul>
								<li className='paragraph2 text-neutral-60'>Até R$100</li>
								<li className='paragraph2 text-neutral-60'>R$100 a R$ 300</li>
								<li className='paragraph2 text-neutral-60'>Mais de R$ 300</li>
							</ul>
						</div>

						</div>
					</section>
				</ModalContent>
		</Modal>
		<div className='container py-64'>
			<div className='flex items-center justify-between md2:flex-col md2:gap-16 md2:items-start'>
				<h3 className='title3 md2:flex md2:justify-between md2:items-center md2:w-full '>Criar Orçamento
					<Button onClick={() => openModal('filter')} classe="hidden md2:flex secondary w-[150px] justify-center border !border-primary-pure/20 hover:!border-primary-pure">Filtrar</Button>
				</h3>
				<div className='flex items-center gap-8 md2:w-full'>
					<p className='paragraph2 md2:w-max whitespace-nowrap'>Ordenar por:</p>
					<SelectComponent classe=" !w-[200px] md2:!w-full " data={[{value: 'mais_vendidos', label: 'Mais vendidos'}, {value: 'mais_popular', label: 'Mais popular'}]} />
				</div>
			</div>

			<section className="flex mt-40 gap-[100px] ">
				<div className='md2:hidden flex flex-col gap-32 sticky top-0  self-start items-start overflow-hidden'>
					<div>
						<h3 className='headline1'>Paines solares</h3>
						<span className='paragraph2 text-neutral-60'>1.000 produtos</span>
					</div>

					<div>
						<h3 className='headline2 mb-10'>Marcas</h3>
						<ul>
							<li className='paragraph2 text-neutral-60'>Marca one</li>
							<li className='paragraph2 text-neutral-60'>Marca two</li>
							<li className='paragraph2 text-neutral-60'>Marca three</li>
						</ul>
					</div>

					<div>
						<h3 className='headline2 mb-10'>Categoria</h3>
						<ul>
							<li className='paragraph2 text-neutral-60'>Categoria one</li>
							<li className='paragraph2 text-neutral-60'>Categoria two</li>
							<li className='paragraph2 text-neutral-60'>Categoria three</li>
						</ul>
					</div>

					<div>
						<h3 className='headline2 mb-10'>Preço</h3>
						<ul>
							<li className='paragraph2 text-neutral-60'>Até R$100</li>
							<li className='paragraph2 text-neutral-60'>R$100 a R$ 300</li>
							<li className='paragraph2 text-neutral-60'>Mais de R$ 300</li>
						</ul>
					</div>

				</div>
				<div className="grid grid-cols-4 md2:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-32 w-full">
					{[0,1,2,3,4,5,6,7,8,9].map((item, i) => {
						return(
							<Items key={i} />
						)
					})}
			
				</div>
			</section>
		</div>
	</>
	)
}

export default PainesSolares