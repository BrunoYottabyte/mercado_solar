import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../../components/DesignSystem/Button';
import { Card } from '../../components/DesignSystem/Card';
import { Modal } from '../../components/DesignSystem/Modal/Modal';
import { ModalContent } from '../../components/DesignSystem/Modal/ModalContent';
import { ModalHeader } from '../../components/DesignSystem/Modal/ModalHeader';
import Svg from '../../components/svg/svg';
import { useGlobalContext } from '../../context/GlobalContext';
import { addressByPostalCode } from '../../utils/addressByPostalCode';
import MonthValues from './components/MonthValues';
import { DadosOrcamentoProvider, useDadosOrcamento  } from './context';

const DadosOrcamentoContent  = () => {
	const {handleNavigate, budgetRequest, address} = useDadosOrcamento()
	const [loading, setLoading] = useState(false);
	const { setmodalOpen, modalOpen } = useGlobalContext();
	useEffect(() => {
		if (modalOpen.open == false || modalOpen.open == null) {
			clearTimeout(window.timeOutMateriaPrima);
		}
	}, [modalOpen]);
	const openModal = () => {
		setmodalOpen({ open: true, id: "feedback" });
	};

	const openCheckModal = () => {
		setmodalOpen({ open: true, id: "modalSend" });
	}

	const openThanksModal = () => {
		setmodalOpen({ open: true, id: "modalThanks" });
	}

	return (
		<>
		<Svg />
		<Modal className={`w-[600px]  md2:max-w-[400px] md2:w-[95vw]`}>
				<ModalContent id="feedback">
					<ModalHeader
						classeHeader="bg-white title3"
						text="Gostariamos de saber como podemos te ajudar"
					/>
				</ModalContent>
		</Modal> 

			<div className="container">
			<Card classe="my-64 px-24 py-32 flex flex-col gap-16">
				<h1 className="title2">SOL. Nº {budgetRequest?.id} - {address}</h1>
				
				<div className="flex gap-8 md2:flex-col">
						<Button
							onClick={() => handleNavigate("/pre-proposta/", {state: {budgetRequestId: budgetRequest.id}})}
							svgClass="!w-20 !h-20"
							iconID="#icon_task_list"
							className="md2:w-full btn terciario whitespace-nowrap"
						>
							Pré-Proposta
						</Button>
						<Button svgClass="!w-20 !h-20" iconID="#icon_file_charts" className="btn md2:w-full secondary whitespace-nowrap !border !border-primary-pure hover:bg-white">
							Dados de Orçamento
						</Button>
				</div>

				<section className="w-full border border-neutral-100-10 rounded-md flex md2:flex-col">
					<div className="p-24 flex flex-col gap-8 flex-1">
							<h2 className='title2 mb-24'>Dados pessoais</h2>
									<div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10" >
										<p className="paragraph2 text-neutral-70">Nome</p>
										<h3 className="title3">{budgetRequest?.client_name}</h3>
									</div>
									<div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10" >
										<p className="paragraph2 text-neutral-70">Email</p>
										<h3 className="title3">{budgetRequest?.client_email}</h3>
									</div>
									<div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10" >
										<p className="paragraph2 text-neutral-70">Celular</p>
										<h3 className="title3">{budgetRequest?.client_phone}</h3>
									</div>
									<div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10" >
										<p className="paragraph2 text-neutral-70">Cep</p>
										<h3 className="title3">{budgetRequest?.client_postal_code}</h3>
									</div>
									<div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10" >
										<p className="paragraph2 text-neutral-70">Tipo</p>
										<h3 className="title3">{budgetRequest?.client_type === "pf" ? 'Pessoa Física' : 'Empresa'}</h3>
									</div>
					</div>

					<div className="relative md2:hidden">
						<span className="block absolute h-full w-1 bg-neutral-100-10"></span>
					</div>

					<div className="p-24 flex flex-col gap-8 flex-1">
							<h2 className='title2 mb-24'>Consumo médio de energia em <span className='text-primary-pure'>kHw</span></h2>
							<div className="grid grid-cols-4 gap-8">
								<MonthValues {...budgetRequest?.month_consumption}/>
							</div>
					</div>

					<div className="relative md2:hidden">
						<span className="block absolute h-full w-1 bg-neutral-100-10"></span>
					</div>

					<div className="p-24 flex flex-col gap-8 flex-1">
						<h2 className='title2 mb-24'>Consumo médio de energia em <span className='text-primary-pure'>R$</span></h2>
							
							<div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
								<p className="paragraph2 text-neutral-70">Consumo médio</p>
								<h3 className="title3">R$ {budgetRequest?.average_consumption}</h3>
							</div>
									
					</div>

				</section>
				 
				<div className="w-full flex items-center justify-between gap-14 md2:flex-col md2:gap-16">
					<div className="md2:w-full">
						<Button svgClass="!w-20 !h-20" iconID="#icon_download" className="btn h-48 secondary mr-14 md2:!w-full md2:mb-8" onClick={openModal}>
							Baixar
						</Button> 

						<Button svgClass="!w-20 !h-20" iconID="#icon_send_email" className="btn h-48 quaternario md2:w-full" onClick={openThanksModal}>Enviar para e-mail</Button>
					</div>

					<div className="md2:w-full">
						<Button  className="btn h-48 mr-14 md2:w-full md2:mb-8"  svgClass="!w-24 !h-20" iconID="#icon_close_ms"  onClick={openModal}>
							Não tenho interesse
						</Button>

						<Button className="btn h-48 md2:w-full" svgClass="!w-20 !h-20" iconID="#icon_check_ms" onClick={openThanksModal}>Tenho interesse</Button>
					</div>
				</div>
			</Card>
		</div>
		</>
	)
}

const DadosOrcamento = () => {
	return (
		<DadosOrcamentoProvider>
			<DadosOrcamentoContent />
		</DadosOrcamentoProvider>
	)
}

export default DadosOrcamento 