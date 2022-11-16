import React from 'react';
import {useEffect} from 'react';
import Button from '../../components/DesignSystem/Button';
import {Card} from '../../components/DesignSystem/Card';
import {ModalHeader} from '../../components/DesignSystem/Modal';
import {Modal} from '../../components/DesignSystem/Modal/Modal';
import {ModalContent} from '../../components/DesignSystem/Modal/ModalContent';
import RadioButton from '../../components/DesignSystem/RadioButton';
import Svg from '../../components/svg/svg';
import SvgUse from '../../components/svg/svgUse';
import {useGlobalContext} from '../../context/GlobalContext';
import Charts from 'react-apexcharts';
import {PrePropostaProvider, usePreProposta} from './context';
import {options, options2} from './data';
import Badge from '../../components/DesignSystem/Badge';

const PrePropostaContent = () => {
	const {
		handleNavigate,
		budgetRequest,
		address,
		playback,
		downloadRef,
		handleDownloadPdf,
		downloadIsLoading,
		isOwner,
		isRepresentative,
		handleAcceptPreBudget,
		handleRejectPreBudget,
		setReasonCancel,
		handleFeedback,
	} = usePreProposta();

	const {setmodalOpen, modalOpen} = useGlobalContext();
	useEffect(() => {
		if (modalOpen.open == false || modalOpen.open == null) {
			clearTimeout(window.timeOutMateriaPrima);
		}
	}, [modalOpen]);

	const series = [
		{
			name: 'Cash Flow',
			data: [
				-200, -180, -160, -140, -130, -80, -60, -40, -20, -10, 0.5, 30, 40, 70,
				90, 120, 140, 160, 180, 200, 220, 225,
			],
		},
	];

  return (
		<>
			<Svg />
			<Modal className={'w-[600px] md2:max-w-[400px] md2:w-[95vw]'}>
				<ModalContent id="feedback">
					<ModalHeader
						classeHeader="bg-white title3"
						text="Gostariamos de saber como podemos te ajudar"
					/>

					<main className=" p-24 flex flex-col gap-16 relative">
						<RadioButton
							containerClass="md"
							onClick={() => setReasonCancel('very_expensive')}
							texto="O valor da pré-proposta é muito alto"
							name="feedback"
						/>
						<RadioButton
							containerClass="md"
							onClick={() => setReasonCancel('dont_understand')}
							texto="Não entendi como funciona"
							name="feedback"
						/>
						<RadioButton
							containerClass="md"
							onClick={() => setReasonCancel('human_service')}
							texto="Gostaria de um atendimento humano"
							name="feedback"
						/>
						<RadioButton
							containerClass="md"
							onClick={() => setReasonCancel('future')}
							texto="Volto a falar com vocês futuramente"
							name="feedback"
						/>

						<div className="mt-10">
							<span className="w-full h-1 block absolute left-0  bg-neutral-100"></span>
						</div>

						<div className="w-full flex justify-end">
							<Button
								className={`btn mt-8`}
								onClick={() => {
									handleFeedback();
								}}>
								Enviar feedback
							</Button>
						</div>
					</main>
				</ModalContent>
			</Modal>

			<Modal className={'w-[390px]  md2:max-w-[400px] md2:w-[95vw]'}>
				<ModalContent id="modalSend">
					<main className=" p-32 flex flex-col items-center gap-24">
						<div className="rounded-full flex justify-center items-center relative transition-all">
							<div className="w-[120px] h-[120px] transition-all animate-[pulseCircle_infinite_2.1s_0.35s] opacity-100 scale-50 rounded-full bg-primary-pure/40 absolute"></div>
							<div className="w-[150px] h-[150px]  transition-all mx-auto animate-[pulseCircle_infinite_1.7s_0.45s] opacity-100 scale-50  rounded-full bg-primary-pure-10 absolute"></div>
							<div className="bg-primary-pure flex items-center justify-center relative w-[90px] h-[90px] rounded-full">
								<SvgUse id="#icon_happy" classe="w-40 h-40" />
							</div>
						</div>

						<div className="grid place-items-center text-center">
							<h1 className="title2 mb-12">Que ótima notícia</h1>
							<p className="headline2">
								O representante responsável irá entrar em contato para agendar a
								visita.
							</p>
						</div>

						<Button className="btn h-56 w-full justify-center paragraph1 ">
							Entendi
						</Button>
					</main>
				</ModalContent>

				<ModalContent id="modalThanks">
					<main className=" p-32 flex flex-col items-center gap-24">
						<div className="rounded-full flex justify-center items-center relative transition-all">
							<div className="w-[120px] h-[120px] transition-all animate-[pulseCircle_infinite_2.1s_0.35s] opacity-100 scale-50 rounded-full bg-primary-pure/40 absolute"></div>
							<div className="w-[150px] h-[150px]  transition-all mx-auto animate-[pulseCircle_infinite_1.7s_0.45s] opacity-100 scale-50  rounded-full bg-primary-pure-10 absolute"></div>
							<div className="bg-primary-pure flex items-center justify-center relative w-[90px] h-[90px] rounded-full">
								<SvgUse id="#icon_rocket" classe="w-40 h-40" />
							</div>
						</div>

						<div className="grid place-items-center text-center">
							<h1 className="title2 mb-12">Obrigado!</h1>
							<p className="headline2">
								Agora você já pode acompanhar o andamento da sua proposta.
							</p>
						</div>

						<Button
							className="btn h-56 w-full justify-center paragraph1 "
							onClick={() => {
								setmodalOpen({open: false, id: 'modalThanks'});
								handleNavigate('/');
							}}>
							Entendi
						</Button>
					</main>
				</ModalContent>
			</Modal>

			<div className="container" ref={downloadRef}>
				<Card classe="my-64 px-24 py-32 flex flex-col gap-16">
					<h1 className="title2">
						SOL. Nº {budgetRequest?.id} - {address}
					</h1>

					<div className="flex gap-8 md2:flex-col">
						<Button
							svgClass="!w-20 !h-20"
							iconID="#icon_file_charts"
							className="btn md2:w-full secondary whitespace-nowrap !border !border-primary-pure hover:bg-white">
							Pré-Proposta
						</Button>

						<Button
							onClick={() =>
							  handleNavigate(`/dados-de-orcamento/${budgetRequest?.id}`, {
							    state: { budgetRequestId: budgetRequest?.id }
							  })
							}
							svgClass="!w-20 !h-20"
							iconID="#icon_task_list"
							className="md2:w-full btn terciario whitespace-nowrap">
							Dados do Orçamento
						</Button>
					</div>

					<section className="w-full border border-neutral-100-10 rounded-md flex md2:flex-col">
						<div className=" p-16 flex flex-col gap-8">
							<div className="w-[200px] md2:!w-full rounded-md p-8 border border-neutral-100-10">
								<p className="paragraph2">Estimativa de Geração</p>
								<h3 className="title3">R$ 157.805,00</h3>
							</div>
							<div className="w-[200px] md2:!w-full rounded-md p-8 border border-neutral-100-10">
								<p className="paragraph2">Estimativa de Investimento</p>
								<h3 className="title3">R$ 157.805,00</h3>
							</div>
							<div className="w-[200px] md2:!w-full rounded-md p-8 border border-neutral-100-10">
								<p className="paragraph2">Estimativa de Economia</p>
								<h3 className="title3">R$ 157.805,00</h3>
							</div>
							<div className="w-[200px] md2:!w-full rounded-md p-8 border border-neutral-100-10">
								<p className="paragraph2">Playback</p>
								<h3 className="title3">R$ 157.805,00</h3>
							</div>
							<div className="w-[200px] md2:!w-full rounded-md p-8 border border-neutral-100-10">
								<p className="paragraph2">Estimativa de Financiamento</p>
								<h3 className="title3">R$ 157.805,00</h3>
							</div>
							<div className="w-[200px] md2:!w-full rounded-md p-8 border border-neutral-100-10">
								<p className="paragraph2">Potência dos Módulos</p>
								<h3 className="title3">R$ 157.805,00</h3>
							</div>
						</div>

						<div className="relative md2:hidden">
							<span className="block absolute h-full w-1 bg-neutral-100-10"></span>
						</div>

						<div className="p-24 flex w-full gap-24 md2:flex-col">
							<section className="flex-1">
								<h3 className="title3 md2:text-center">Previsão Playback</h3>
								<Charts
									options={options}
									series={[playback]}
									type="bar"
									height={330}
								/>
							</section>
							<section className="flex-1">
								<h3 className="title3 md2:text-center">Previsão de Geração</h3>
								<Charts
									options={options2}
									series={series}
									type="bar"
									height={330}
								/>
							</section>
						</div>
					</section>

					<div className="w-full flex items-center justify-between gap-14 md2:flex-col md2:gap-16">
						<div className="md2:w-full">
							<Button
								svgClass="!w-20 !h-20"
								iconID="#icon_download"
								className="btn h-48 secondary mr-14 md2:!w-full md2:mb-8"
								onClick={() => handleDownloadPdf()}
								disabled={downloadIsLoading}>
								Baixar
							</Button>

							<Button
								svgClass="!w-20 !h-20"
								iconID="#icon_send_email"
								className="btn h-48 quaternario md2:w-full">
								Enviar para e-mail
							</Button>
						</div>
						{budgetRequest && (
							<>
								{(isOwner || isRepresentative) &&
									budgetRequest.budget_request_status === 'pending' && (
										<div className="md2:w-full">
											<Button
												className="btn h-48 mr-14 md2:w-full md2:mb-8"
												svgClass="!w-24 !h-20"
												iconID="#icon_close_ms"
												onClick={() => handleRejectPreBudget()}>
												Não tenho interesse
											</Button>

											<Button
												className="btn h-48 md2:w-full"
												svgClass="!w-20 !h-20"
												iconID="#icon_check_ms"
												onClick={() => handleAcceptPreBudget()}>
												Tenho interesse
											</Button>
										</div>
									)}
								{(budgetRequest.budget_request_status !== 'pending' ||
									!(isOwner || isRepresentative)) && (
									<Badge
										iconID={''}
										title={
											budgetRequest.budget_request_status === 'pending'
												? 'Aguardando resposta'
												: budgetRequest.budget_request_status === 'approved'
												? 'Aprovado'
												: 'Reprovado'
										}
										classeTitle={`font-medium ${
											budgetRequest.budget_request_status === 'approved'
												? 'text-alert-success'
												: budgetRequest.budget_request_status === 'pending'
												? 'text-alert-warning-100'
												: 'text-alert-error'
										} `}
										classe={
											budgetRequest.budget_request_status == 'Aprovada'
												? '!text-[#ccc] bg-alert-success-10'
												: budgetRequest.budget_request_status === 'Em Progresso'
												? 'bg-alert-warning-10'
												: 'bg-alert-error-10'
										}
									/>
								)}
							</>
						)}
					</div>
				</Card>
			</div>
		</>
  )
}

const PreProposta = () => {
  return (
		<PrePropostaProvider>
			<PrePropostaContent />
		</PrePropostaProvider>
  )
}

export default PreProposta
