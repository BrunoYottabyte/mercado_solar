import React, { useState, useEffect } from "react";
import Button from "../../components/DesignSystem/Button";
import { Card } from "../../components/DesignSystem/Card";
import overflowLogin from "../../assets/images/overflow-login.svg";
import logo from "../../assets/images/icon_logo.png";
import SvgUse from "../../components/svg/svgUse";
import Charts from "react-apexcharts";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Input } from "../../components/DesignSystem/Input";
import { Modal } from "../../components/DesignSystem/Modal/Modal";
import { ModalContent } from "../../components/DesignSystem/Modal/ModalContent";
import { ModalHeader } from "../../components/DesignSystem/Modal";

import { useGlobalContext } from "../../context/GlobalContext";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import RadioButton from "../../components/DesignSystem/RadioButton";

const VerProjeto = () => {
	
	console.log(document.querySelector(".point")?.clientWidth);
	const [loading, setLoading] = useState(false);
	const { setmodalOpen, modalOpen } = useGlobalContext();

	useEffect(() => {
		if (modalOpen.open == false || modalOpen.open == null) {
			clearTimeout(window.timeoutProjeto);
		}
	}, [modalOpen]);

	const openModal = (id) => {
		setmodalOpen({ open: true, id });
	};
	const series = [
		{
			name: "Net Profit",
			data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 25, 40, 36],
		},
	];

	const options = {
		chart: {
			type: "bar",
			height: 350,
			width: '100%',
			toolbar: {
				show: false
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: "75%",
				endingShape: "rounded",
				borderRadius: 6,
			},
		},
		colors: ["#FEB019"],
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ["transparent"],
		},
		xaxis: {
			categories: [
				"Janeiro",
				"Fevereiro",
				"Março",
				"Abril",
				"Maio",
				"Junho",
				"Julho",
				"Agosto",
				"Setembro",
				"Outubro",
				"Novembro",
				"Dezembro",
			],
		},
		fill: {
			opacity: 1,
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return "$ " + val + " thousands";
				},
			},
		},
		responsive: [
			{
		
				breakpoint: 1000,
				options: {
					chart: {
						type: 'bar',
						height: 350,
						width: 330,
						offsetX: -12
					},
					plotOptions: {
						bar: {
							horizontal: false
						}
					},
					
					legend: {
						position: "bottom"
					},
					xaxis: {
						labels: {
							show: false
						}
					}
				}
			}
		]
	};

	return (
		<>
			<Modal className={`w-[37rem]  md2:max-w-[400px] md2:w-[95vw]`}>
				<ModalContent id="approved">
					<ModalHeader close={false} classeHeader="bg-white title3">
						<div className="title3 flex  w-full justify-between items-center">
							Orçamento aprovado
							<SvgUse id="#icon_help_ms" classe="!w-24 !h-24" />
						</div>
					</ModalHeader>
					<p className="paragraph1 px-24">
						Saia como nosso time vai trabalhar a partir de agora:
					</p>

					<div className="mt-40 flex flex-col gap-16 px-24">
						<p className="paragraph1">
							1 - Você receberá o boleto e NF para pagamento.
						</p>
						<p className="paragraph1">
							2 - Assim que efetuar o pagamento, favor anexar no campo
							(comprovante de pagamento).
						</p>
						<p className="paragraph1">
							3 - Nossos engenheiros estão trabalhando no projeto e homologação
							junto a concessionária. Em algumas regiões a concessionária pode
							solicitar documentos adcionais, caso isso aconteça nosso time fará
							contato solicitando.
						</p>

						<p className="paragraph1">
							4 - Após receber o comprovante de pagamento,{" "}
							<span className="text-primary-pure">
								seu kit será separado no prazo de 24h
							</span>
							, e coletado pela transportadora. Por gentileza nos informe assim
							que receber no campo (agendar instalação). Assim que nossa equipe
							receber a solicitação de agendamento, você receberá as datas
							disponíveis para programação da instalação.
						</p>
					</div>

					<main className=" p-24 flex flex-col gap-16 relative">
						<div className="mt-10">
							<span className="w-full h-1 block absolute left-0  bg-neutral-100"></span>
						</div>

						<div className="w-full md:flex-col flex justify-end gap-8">
							<Button
								iconID="#icon_upload_ms"
								svgClass="!w-24 !h-24"
								className={`btn h-48 md:justify-center secondary mt-8 md:w-full ${
									loading ? "is-loading" : ""
								}`}
								onClick={() => {
									// setLoading(true);
									// setTimeout(() => {
									// 	setLoading(false);
									// }, 500);
								}}
							>
								Anexar comprovante
							</Button>
							<Button
								className={`btn h-48 md:w-full md:justify-center mt-8 ${loading ? "is-loading" : ""}`}
								// onClick={() => {
								// 	setLoading(true);
								// 	setTimeout(() => {
								// 		setLoading(false);
								// 	}, 500);
								// }}
							>
								Agendar Instalação{" "}
								<SvgUse id="#icon_arrow_left" classe="!w-10 !h-10" />
							</Button>
						</div>
					</main>
				</ModalContent>

				<ModalContent id="feedbackTechnical">
				<button
					type="button"
					style={{'--cor-1': '#F69F00'}}
					className="absolute right-24 top-24 border border-neutral-60/30 hover:border-primary-pure  rounded-full"
					onClick={() => setmodalOpen({ open: false, id: false })}
				>
					<SvgUse id="#icon_close_ms" classe="!w-28 !h-28" />
				</button>
					<div className="flex flex-col gap-24 p-24 select-none">
								<div className="flex gap-8 items-center">
									<img src="https://github.com/brunoyottabyte.png" alt="tecnico" className="w-40 h-40 rounded-full" />
									<p className="paragraph1">Nome do Técnico</p>
								</div>

								<div>
									<div className="flex gap-14 items-center">
										<p className="paragraph1 text-neutral-70">Avalie sua primeira visita: </p>
										<div className="container-sun flex gap-8 items-center">
											{
												[0,1,2,3,4].map((item,i) => (
													i != 4 ? <SvgUse id="#icon_sun_ms" classe="!w-24 !h-24" /> : <SvgUse id="#icon_sun_vazio_ms" classe="!w-24 !h-24" /> 
												))
											}
										</div>
									</div>
									<h3 className="title3 mt-10">Enquanto isso o que acha de avaliar o técnico que lhe atendeu?</h3>
								</div>

								<div>
										<p className="headline2 mb-16">1- O Técnico foi pontual?</p>

										<div className="flex gap-24 items-center">
											<label className="flex items-center">
												<RadioButton name="pontual" /> Sim
											</label>
											<label className="flex items-center">
												<RadioButton name="pontual"  /> Não
											</label>
										</div>
								</div>

								<div>
										<p className="headline2 mb-16">2 - Usou os EPIs e uniforme corretamente?</p>

										<div className="flex gap-24 items-center">
											<label className="flex items-center">
												<RadioButton name="etica" /> Ruim
											</label>
											<label className="flex items-center">
												<RadioButton name="etica"  /> Razoável
											</label>
											<label className="flex items-center">
												<RadioButton name="etica" /> Bom
											</label>
											<label className="flex items-center">
												<RadioButton name="etica"  /> Ótimo
											</label>
										</div>
								</div>

								<div>
										<p className="headline2 mb-16">3 - Foi cordial, atendeu suas espectativas?</p>

										<div className="flex gap-24 items-center">
											<label className="flex items-center">
												<RadioButton name="educacao" /> Ruim
											</label>
											<label className="flex items-center">
												<RadioButton name="educacao"  /> Razoável
											</label>
											<label className="flex items-center">
												<RadioButton name="educacao" /> Bom
											</label>
											<label className="flex items-center">
												<RadioButton name="educacao"  /> Ótimo
											</label>
										</div>
								</div>
					</div>

					<main className=" p-24 flex flex-col gap-16 relative">
						<div className="mt-10">
							<span className="w-full h-1 block absolute left-0  bg-neutral-100"></span>
						</div>

						<div className="w-full md:flex-col flex justify-end ">
							<Button
								className={`btn h-48 md:w-full md:justify-center mt-8 ${loading ? "is-loading" : ""}`}   
							>
								Enviar Feedback
								<SvgUse id="#icon_arrow_left" classe="!w-10 !h-10" />
							</Button>
						</div>
					</main>
				</ModalContent> 
			</Modal>
			<div className="container my-64  flex flex-col gap-16">
				<div className="w-full flex md:flex-col justify-end items-center">
					<Button
						className="btn h-56  mr-14 md2:w-full md:mr-0 md:mb-8"
						svgClass="!w-24 !h-20"
						iconID="#icon_close_ms"
					>
						Recusar
					</Button>

					<Button
						className="btn h-56 md2:w-full"
						svgClass="!w-20 !h-20"
						iconID="#icon_check_ms"
						onClick={() => openModal('feedbackTechnical')}
					>
						Aprovar
					</Button>
				</div>

				<section className="w-full bg-neutral-100 rounded-lg">
					<div className="w-full bg-neutral-100  p-24 rounded-t-lg relative overflow-hidden">
						<div className="absolute bg-gradient-to-r from-neutral-100 to-neutral-100/5 z-[99] right-[240px] top-0 w-[400px] h-full"></div>
						<div className="w-[400px] opacity-40 top-10 right-0 h-full absolute overflow-hidden">
							<svg width="1717" height="163" viewBox="0 0 1717 163" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M14.8226 4.63143L8.81161 13.3144C8.26061 14.1094 7.01361 13.7204 7.01361 12.7524V7.02943H1.98861C1.19261 7.02943 0.723612 6.13543 1.17761 5.48043L7.18861 -3.20257C7.73961 -3.99757 8.98661 -3.60857 8.98661 -2.64057V3.08243H14.0116C14.8066 3.08243 15.2756 3.97643 14.8226 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M60.8226 4.63143L54.8116 13.3144C54.2606 14.1094 53.0136 13.7204 53.0136 12.7524V7.02943H47.9886C47.1926 7.02943 46.7236 6.13543 47.1776 5.48043L53.1886 -3.20257C53.7396 -3.99757 54.9866 -3.60857 54.9866 -2.64057V3.08243H60.0116C60.8066 3.08243 61.2756 3.97643 60.8226 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M106.823 4.63143L100.812 13.3144C100.261 14.1094 99.0136 13.7204 99.0136 12.7524V7.02943H93.9886C93.1926 7.02943 92.7236 6.13543 93.1776 5.48043L99.1886 -3.20257C99.7396 -3.99757 100.987 -3.60857 100.987 -2.64057V3.08243H106.012C106.807 3.08243 107.276 3.97643 106.823 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M152.821 4.63143L146.81 13.3144C146.259 14.1094 145.012 13.7204 145.012 12.7524V7.02943H139.987C139.191 7.02943 138.722 6.13543 139.176 5.48043L145.187 -3.20257C145.738 -3.99757 146.985 -3.60857 146.985 -2.64057V3.08243H152.01C152.805 3.08243 153.274 3.97643 152.821 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M198.821 4.63143L192.81 13.3144C192.259 14.1094 191.012 13.7204 191.012 12.7524V7.02943H185.987C185.191 7.02943 184.722 6.13543 185.176 5.48043L191.187 -3.20257C191.738 -3.99757 192.985 -3.60857 192.985 -2.64057V3.08243H198.01C198.805 3.08243 199.274 3.97643 198.821 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M244.821 4.63143L238.81 13.3144C238.259 14.1094 237.012 13.7204 237.012 12.7524V7.02943H231.987C231.191 7.02943 230.722 6.13543 231.176 5.48043L237.187 -3.20257C237.738 -3.99757 238.985 -3.60857 238.985 -2.64057V3.08243H244.01C244.805 3.08243 245.274 3.97643 244.821 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M290.821 4.63143L284.81 13.3144C284.259 14.1094 283.012 13.7204 283.012 12.7524V7.02943H277.987C277.191 7.02943 276.722 6.13543 277.176 5.48043L283.187 -3.20257C283.738 -3.99757 284.985 -3.60857 284.985 -2.64057V3.08243H290.01C290.805 3.08243 291.274 3.97643 290.821 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M336.821 4.63143L330.81 13.3144C330.259 14.1094 329.012 13.7204 329.012 12.7524V7.02943H323.987C323.191 7.02943 322.722 6.13543 323.176 5.48043L329.187 -3.20257C329.738 -3.99757 330.985 -3.60857 330.985 -2.64057V3.08243H336.01C336.805 3.08243 337.274 3.97643 336.821 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M382.819 4.63143L376.808 13.3144C376.257 14.1094 375.01 13.7204 375.01 12.7524V7.02943H369.985C369.189 7.02943 368.72 6.13543 369.174 5.48043L375.185 -3.20257C375.736 -3.99757 376.983 -3.60857 376.983 -2.64057V3.08243H382.008C382.803 3.08243 383.272 3.97643 382.819 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M428.819 4.63143L422.808 13.3144C422.257 14.1094 421.01 13.7204 421.01 12.7524V7.02943H415.985C415.189 7.02943 414.72 6.13543 415.174 5.48043L421.185 -3.20257C421.736 -3.99757 422.983 -3.60857 422.983 -2.64057V3.08243H428.008C428.803 3.08243 429.272 3.97643 428.819 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M474.819 4.63143L468.808 13.3144C468.257 14.1094 467.01 13.7204 467.01 12.7524V7.02943H461.985C461.189 7.02943 460.72 6.13543 461.174 5.48043L467.185 -3.20257C467.736 -3.99757 468.983 -3.60857 468.983 -2.64057V3.08243H474.008C474.803 3.08243 475.272 3.97643 474.819 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M520.819 4.63143L514.808 13.3144C514.257 14.1094 513.01 13.7204 513.01 12.7524V7.02943H507.985C507.189 7.02943 506.72 6.13543 507.174 5.48043L513.185 -3.20257C513.736 -3.99757 514.983 -3.60857 514.983 -2.64057V3.08243H520.008C520.803 3.08243 521.272 3.97643 520.819 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M566.819 4.63143L560.808 13.3144C560.257 14.1094 559.01 13.7204 559.01 12.7524V7.02943H553.985C553.189 7.02943 552.72 6.13543 553.174 5.48043L559.185 -3.20257C559.736 -3.99757 560.983 -3.60857 560.983 -2.64057V3.08243H566.008C566.803 3.08243 567.272 3.97643 566.819 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M612.819 4.63143L606.808 13.3144C606.257 14.1094 605.01 13.7204 605.01 12.7524V7.02943H599.985C599.189 7.02943 598.72 6.13543 599.174 5.48043L605.185 -3.20257C605.736 -3.99757 606.983 -3.60857 606.983 -2.64057V3.08243H612.008C612.803 3.08243 613.272 3.97643 612.819 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M658.817 4.63143L652.806 13.3144C652.255 14.1094 651.008 13.7204 651.008 12.7524V7.02943H645.983C645.187 7.02943 644.718 6.13543 645.172 5.48043L651.183 -3.20257C651.734 -3.99757 652.981 -3.60857 652.981 -2.64057V3.08243H658.006C658.801 3.08243 659.27 3.97643 658.817 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M704.817 4.63143L698.806 13.3144C698.255 14.1094 697.008 13.7204 697.008 12.7524V7.02943H691.983C691.187 7.02943 690.718 6.13543 691.172 5.48043L697.183 -3.20257C697.734 -3.99757 698.981 -3.60857 698.981 -2.64057V3.08243H704.006C704.801 3.08243 705.27 3.97643 704.817 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M750.817 4.63143L744.806 13.3144C744.255 14.1094 743.008 13.7204 743.008 12.7524V7.02943H737.983C737.187 7.02943 736.718 6.13543 737.172 5.48043L743.183 -3.20257C743.734 -3.99757 744.981 -3.60857 744.981 -2.64057V3.08243H750.006C750.801 3.08243 751.27 3.97643 750.817 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M796.817 4.63143L790.806 13.3144C790.255 14.1094 789.008 13.7204 789.008 12.7524V7.02943H783.983C783.187 7.02943 782.718 6.13543 783.172 5.48043L789.183 -3.20257C789.734 -3.99757 790.981 -3.60857 790.981 -2.64057V3.08243H796.006C796.801 3.08243 797.27 3.97643 796.817 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M842.817 4.63143L836.806 13.3144C836.255 14.1094 835.008 13.7204 835.008 12.7524V7.02943H829.983C829.187 7.02943 828.718 6.13543 829.172 5.48043L835.183 -3.20257C835.734 -3.99757 836.981 -3.60857 836.981 -2.64057V3.08243H842.006C842.801 3.08243 843.27 3.97643 842.817 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M888.815 4.63143L882.804 13.3144C882.253 14.1094 881.006 13.7204 881.006 12.7524V7.02943H875.981C875.185 7.02943 874.716 6.13543 875.17 5.48043L881.181 -3.20257C881.732 -3.99757 882.979 -3.60857 882.979 -2.64057V3.08243H888.004C888.799 3.08243 889.268 3.97643 888.815 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M934.815 4.63143L928.804 13.3144C928.253 14.1094 927.006 13.7204 927.006 12.7524V7.02943H921.981C921.185 7.02943 920.716 6.13543 921.17 5.48043L927.181 -3.20257C927.732 -3.99757 928.979 -3.60857 928.979 -2.64057V3.08243H934.004C934.799 3.08243 935.268 3.97643 934.815 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M980.815 4.63143L974.804 13.3144C974.253 14.1094 973.006 13.7204 973.006 12.7524V7.02943H967.981C967.185 7.02943 966.716 6.13543 967.17 5.48043L973.181 -3.20257C973.732 -3.99757 974.979 -3.60857 974.979 -2.64057V3.08243H980.004C980.799 3.08243 981.268 3.97643 980.815 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1026.81 4.63143L1020.8 13.3144C1020.25 14.1094 1019.01 13.7204 1019.01 12.7524V7.02943H1013.98C1013.18 7.02943 1012.72 6.13543 1013.17 5.48043L1019.18 -3.20257C1019.73 -3.99757 1020.98 -3.60857 1020.98 -2.64057V3.08243H1026C1026.8 3.08243 1027.27 3.97643 1026.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1072.81 4.63143L1066.8 13.3144C1066.25 14.1094 1065.01 13.7204 1065.01 12.7524V7.02943H1059.98C1059.18 7.02943 1058.72 6.13543 1059.17 5.48043L1065.18 -3.20257C1065.73 -3.99757 1066.98 -3.60857 1066.98 -2.64057V3.08243H1072C1072.8 3.08243 1073.27 3.97643 1072.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1118.81 4.63143L1112.8 13.3144C1112.25 14.1094 1111.01 13.7204 1111.01 12.7524V7.02943H1105.98C1105.18 7.02943 1104.72 6.13543 1105.17 5.48043L1111.18 -3.20257C1111.73 -3.99757 1112.98 -3.60857 1112.98 -2.64057V3.08243H1118C1118.8 3.08243 1119.27 3.97643 1118.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1164.81 4.63143L1158.8 13.3144C1158.25 14.1094 1157 13.7204 1157 12.7524V7.02943H1151.98C1151.18 7.02943 1150.71 6.13543 1151.17 5.48043L1157.18 -3.20257C1157.73 -3.99757 1158.98 -3.60857 1158.98 -2.64057V3.08243H1164C1164.8 3.08243 1165.27 3.97643 1164.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1210.81 4.63143L1204.8 13.3144C1204.25 14.1094 1203 13.7204 1203 12.7524V7.02943H1197.98C1197.18 7.02943 1196.71 6.13543 1197.17 5.48043L1203.18 -3.20257C1203.73 -3.99757 1204.98 -3.60857 1204.98 -2.64057V3.08243H1210C1210.8 3.08243 1211.27 3.97643 1210.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1256.81 4.63143L1250.8 13.3144C1250.25 14.1094 1249 13.7204 1249 12.7524V7.02943H1243.98C1243.18 7.02943 1242.71 6.13543 1243.17 5.48043L1249.18 -3.20257C1249.73 -3.99757 1250.98 -3.60857 1250.98 -2.64057V3.08243H1256C1256.8 3.08243 1257.27 3.97643 1256.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1302.81 4.63143L1296.8 13.3144C1296.25 14.1094 1295 13.7204 1295 12.7524V7.02943H1289.98C1289.18 7.02943 1288.71 6.13543 1289.17 5.48043L1295.18 -3.20257C1295.73 -3.99757 1296.98 -3.60857 1296.98 -2.64057V3.08243H1302C1302.8 3.08243 1303.27 3.97643 1302.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1348.81 4.63143L1342.8 13.3144C1342.25 14.1094 1341 13.7204 1341 12.7524V7.02943H1335.98C1335.18 7.02943 1334.71 6.13543 1335.17 5.48043L1341.18 -3.20257C1341.73 -3.99757 1342.98 -3.60857 1342.98 -2.64057V3.08243H1348C1348.8 3.08243 1349.27 3.97643 1348.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1394.81 4.63143L1388.8 13.3144C1388.25 14.1094 1387 13.7204 1387 12.7524V7.02943H1381.98C1381.18 7.02943 1380.71 6.13543 1381.17 5.48043L1387.18 -3.20257C1387.73 -3.99757 1388.97 -3.60857 1388.97 -2.64057V3.08243H1394C1394.79 3.08243 1395.26 3.97643 1394.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1440.81 4.63143L1434.8 13.3144C1434.25 14.1094 1433 13.7204 1433 12.7524V7.02943H1427.98C1427.18 7.02943 1426.71 6.13543 1427.17 5.48043L1433.18 -3.20257C1433.73 -3.99757 1434.97 -3.60857 1434.97 -2.64057V3.08243H1440C1440.79 3.08243 1441.26 3.97643 1440.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1486.81 4.63143L1480.8 13.3144C1480.25 14.1094 1479 13.7204 1479 12.7524V7.02943H1473.98C1473.18 7.02943 1472.71 6.13543 1473.17 5.48043L1479.18 -3.20257C1479.73 -3.99757 1480.97 -3.60857 1480.97 -2.64057V3.08243H1486C1486.79 3.08243 1487.26 3.97643 1486.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1532.81 4.63143L1526.8 13.3144C1526.25 14.1094 1525 13.7204 1525 12.7524V7.02943H1519.98C1519.18 7.02943 1518.71 6.13543 1519.17 5.48043L1525.18 -3.20257C1525.73 -3.99757 1526.97 -3.60857 1526.97 -2.64057V3.08243H1532C1532.79 3.08243 1533.26 3.97643 1532.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1578.81 4.63143L1572.8 13.3144C1572.25 14.1094 1571 13.7204 1571 12.7524V7.02943H1565.98C1565.18 7.02943 1564.71 6.13543 1565.17 5.48043L1571.18 -3.20257C1571.73 -3.99757 1572.97 -3.60857 1572.97 -2.64057V3.08243H1578C1578.79 3.08243 1579.26 3.97643 1578.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1624.81 4.63143L1618.8 13.3144C1618.25 14.1094 1617 13.7204 1617 12.7524V7.02943H1611.97C1611.18 7.02943 1610.71 6.13543 1611.16 5.48043L1617.17 -3.20257C1617.73 -3.99757 1618.97 -3.60857 1618.97 -2.64057V3.08243H1624C1624.79 3.08243 1625.26 3.97643 1624.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1670.81 4.63143L1664.8 13.3144C1664.25 14.1094 1663 13.7204 1663 12.7524V7.02943H1657.97C1657.18 7.02943 1656.71 6.13543 1657.16 5.48043L1663.17 -3.20257C1663.73 -3.99757 1664.97 -3.60857 1664.97 -2.64057V3.08243H1670C1670.79 3.08243 1671.26 3.97643 1670.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1716.81 4.63143L1710.8 13.3144C1710.25 14.1094 1709 13.7204 1709 12.7524V7.02943H1703.97C1703.18 7.02943 1702.71 6.13543 1703.16 5.48043L1709.17 -3.20257C1709.73 -3.99757 1710.97 -3.60857 1710.97 -2.64057V3.08243H1716C1716.79 3.08243 1717.26 3.97643 1716.81 4.63143Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M14.8226 54.002L8.81161 62.685C8.26061 63.48 7.01361 63.091 7.01361 62.123V56.4H1.98861C1.19261 56.4 0.723612 55.506 1.17761 54.851L7.18861 46.168C7.73961 45.373 8.98661 45.762 8.98661 46.73V52.453H14.0116C14.8066 52.453 15.2756 53.347 14.8226 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M60.8226 54.002L54.8116 62.685C54.2606 63.48 53.0136 63.091 53.0136 62.123V56.4H47.9886C47.1926 56.4 46.7236 55.506 47.1776 54.851L53.1886 46.168C53.7396 45.373 54.9866 45.762 54.9866 46.73V52.453H60.0116C60.8066 52.453 61.2756 53.347 60.8226 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M106.823 54.002L100.812 62.685C100.261 63.48 99.0136 63.091 99.0136 62.123V56.4H93.9886C93.1926 56.4 92.7236 55.506 93.1776 54.851L99.1886 46.168C99.7396 45.373 100.987 45.762 100.987 46.73V52.453H106.012C106.807 52.453 107.276 53.347 106.823 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M152.821 54.002L146.81 62.685C146.259 63.48 145.012 63.091 145.012 62.123V56.4H139.987C139.191 56.4 138.722 55.506 139.176 54.851L145.187 46.168C145.738 45.373 146.985 45.762 146.985 46.73V52.453H152.01C152.805 52.453 153.274 53.347 152.821 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M198.821 54.002L192.81 62.685C192.259 63.48 191.012 63.091 191.012 62.123V56.4H185.987C185.191 56.4 184.722 55.506 185.176 54.851L191.187 46.168C191.738 45.373 192.985 45.762 192.985 46.73V52.453H198.01C198.805 52.453 199.274 53.347 198.821 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M244.821 54.002L238.81 62.685C238.259 63.48 237.012 63.091 237.012 62.123V56.4H231.987C231.191 56.4 230.722 55.506 231.176 54.851L237.187 46.168C237.738 45.373 238.985 45.762 238.985 46.73V52.453H244.01C244.805 52.453 245.274 53.347 244.821 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M290.821 54.002L284.81 62.685C284.259 63.48 283.012 63.091 283.012 62.123V56.4H277.987C277.191 56.4 276.722 55.506 277.176 54.851L283.187 46.168C283.738 45.373 284.985 45.762 284.985 46.73V52.453H290.01C290.805 52.453 291.274 53.347 290.821 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M336.821 54.002L330.81 62.685C330.259 63.48 329.012 63.091 329.012 62.123V56.4H323.987C323.191 56.4 322.722 55.506 323.176 54.851L329.187 46.168C329.738 45.373 330.985 45.762 330.985 46.73V52.453H336.01C336.805 52.453 337.274 53.347 336.821 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M382.819 54.002L376.808 62.685C376.257 63.48 375.01 63.091 375.01 62.123V56.4H369.985C369.189 56.4 368.72 55.506 369.174 54.851L375.185 46.168C375.736 45.373 376.983 45.762 376.983 46.73V52.453H382.008C382.803 52.453 383.272 53.347 382.819 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M428.819 54.002L422.808 62.685C422.257 63.48 421.01 63.091 421.01 62.123V56.4H415.985C415.189 56.4 414.72 55.506 415.174 54.851L421.185 46.168C421.736 45.373 422.983 45.762 422.983 46.73V52.453H428.008C428.803 52.453 429.272 53.347 428.819 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M474.819 54.002L468.808 62.685C468.257 63.48 467.01 63.091 467.01 62.123V56.4H461.985C461.189 56.4 460.72 55.506 461.174 54.851L467.185 46.168C467.736 45.373 468.983 45.762 468.983 46.73V52.453H474.008C474.803 52.453 475.272 53.347 474.819 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M520.819 54.002L514.808 62.685C514.257 63.48 513.01 63.091 513.01 62.123V56.4H507.985C507.189 56.4 506.72 55.506 507.174 54.851L513.185 46.168C513.736 45.373 514.983 45.762 514.983 46.73V52.453H520.008C520.803 52.453 521.272 53.347 520.819 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M566.819 54.002L560.808 62.685C560.257 63.48 559.01 63.091 559.01 62.123V56.4H553.985C553.189 56.4 552.72 55.506 553.174 54.851L559.185 46.168C559.736 45.373 560.983 45.762 560.983 46.73V52.453H566.008C566.803 52.453 567.272 53.347 566.819 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M612.819 54.002L606.808 62.685C606.257 63.48 605.01 63.091 605.01 62.123V56.4H599.985C599.189 56.4 598.72 55.506 599.174 54.851L605.185 46.168C605.736 45.373 606.983 45.762 606.983 46.73V52.453H612.008C612.803 52.453 613.272 53.347 612.819 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M658.817 54.002L652.806 62.685C652.255 63.48 651.008 63.091 651.008 62.123V56.4H645.983C645.187 56.4 644.718 55.506 645.172 54.851L651.183 46.168C651.734 45.373 652.981 45.762 652.981 46.73V52.453H658.006C658.801 52.453 659.27 53.347 658.817 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M704.817 54.002L698.806 62.685C698.255 63.48 697.008 63.091 697.008 62.123V56.4H691.983C691.187 56.4 690.718 55.506 691.172 54.851L697.183 46.168C697.734 45.373 698.981 45.762 698.981 46.73V52.453H704.006C704.801 52.453 705.27 53.347 704.817 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M750.817 54.002L744.806 62.685C744.255 63.48 743.008 63.091 743.008 62.123V56.4H737.983C737.187 56.4 736.718 55.506 737.172 54.851L743.183 46.168C743.734 45.373 744.981 45.762 744.981 46.73V52.453H750.006C750.801 52.453 751.27 53.347 750.817 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M796.817 54.002L790.806 62.685C790.255 63.48 789.008 63.091 789.008 62.123V56.4H783.983C783.187 56.4 782.718 55.506 783.172 54.851L789.183 46.168C789.734 45.373 790.981 45.762 790.981 46.73V52.453H796.006C796.801 52.453 797.27 53.347 796.817 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M842.817 54.002L836.806 62.685C836.255 63.48 835.008 63.091 835.008 62.123V56.4H829.983C829.187 56.4 828.718 55.506 829.172 54.851L835.183 46.168C835.734 45.373 836.981 45.762 836.981 46.73V52.453H842.006C842.801 52.453 843.27 53.347 842.817 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M888.815 54.002L882.804 62.685C882.253 63.48 881.006 63.091 881.006 62.123V56.4H875.981C875.185 56.4 874.716 55.506 875.17 54.851L881.181 46.168C881.732 45.373 882.979 45.762 882.979 46.73V52.453H888.004C888.799 52.453 889.268 53.347 888.815 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M934.815 54.002L928.804 62.685C928.253 63.48 927.006 63.091 927.006 62.123V56.4H921.981C921.185 56.4 920.716 55.506 921.17 54.851L927.181 46.168C927.732 45.373 928.979 45.762 928.979 46.73V52.453H934.004C934.799 52.453 935.268 53.347 934.815 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M980.815 54.002L974.804 62.685C974.253 63.48 973.006 63.091 973.006 62.123V56.4H967.981C967.185 56.4 966.716 55.506 967.17 54.851L973.181 46.168C973.732 45.373 974.979 45.762 974.979 46.73V52.453H980.004C980.799 52.453 981.268 53.347 980.815 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1026.81 54.002L1020.8 62.685C1020.25 63.48 1019.01 63.091 1019.01 62.123V56.4H1013.98C1013.18 56.4 1012.72 55.506 1013.17 54.851L1019.18 46.168C1019.73 45.373 1020.98 45.762 1020.98 46.73V52.453H1026C1026.8 52.453 1027.27 53.347 1026.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1072.81 54.002L1066.8 62.685C1066.25 63.48 1065.01 63.091 1065.01 62.123V56.4H1059.98C1059.18 56.4 1058.72 55.506 1059.17 54.851L1065.18 46.168C1065.73 45.373 1066.98 45.762 1066.98 46.73V52.453H1072C1072.8 52.453 1073.27 53.347 1072.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1118.81 54.002L1112.8 62.685C1112.25 63.48 1111.01 63.091 1111.01 62.123V56.4H1105.98C1105.18 56.4 1104.72 55.506 1105.17 54.851L1111.18 46.168C1111.73 45.373 1112.98 45.762 1112.98 46.73V52.453H1118C1118.8 52.453 1119.27 53.347 1118.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1164.81 54.002L1158.8 62.685C1158.25 63.48 1157 63.091 1157 62.123V56.4H1151.98C1151.18 56.4 1150.71 55.506 1151.17 54.851L1157.18 46.168C1157.73 45.373 1158.98 45.762 1158.98 46.73V52.453H1164C1164.8 52.453 1165.27 53.347 1164.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1210.81 54.002L1204.8 62.685C1204.25 63.48 1203 63.091 1203 62.123V56.4H1197.98C1197.18 56.4 1196.71 55.506 1197.17 54.851L1203.18 46.168C1203.73 45.373 1204.98 45.762 1204.98 46.73V52.453H1210C1210.8 52.453 1211.27 53.347 1210.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1256.81 54.002L1250.8 62.685C1250.25 63.48 1249 63.091 1249 62.123V56.4H1243.98C1243.18 56.4 1242.71 55.506 1243.17 54.851L1249.18 46.168C1249.73 45.373 1250.98 45.762 1250.98 46.73V52.453H1256C1256.8 52.453 1257.27 53.347 1256.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1302.81 54.002L1296.8 62.685C1296.25 63.48 1295 63.091 1295 62.123V56.4H1289.98C1289.18 56.4 1288.71 55.506 1289.17 54.851L1295.18 46.168C1295.73 45.373 1296.98 45.762 1296.98 46.73V52.453H1302C1302.8 52.453 1303.27 53.347 1302.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1348.81 54.002L1342.8 62.685C1342.25 63.48 1341 63.091 1341 62.123V56.4H1335.98C1335.18 56.4 1334.71 55.506 1335.17 54.851L1341.18 46.168C1341.73 45.373 1342.98 45.762 1342.98 46.73V52.453H1348C1348.8 52.453 1349.27 53.347 1348.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1394.81 54.002L1388.8 62.685C1388.25 63.48 1387 63.091 1387 62.123V56.4H1381.98C1381.18 56.4 1380.71 55.506 1381.17 54.851L1387.18 46.168C1387.73 45.373 1388.97 45.762 1388.97 46.73V52.453H1394C1394.79 52.453 1395.26 53.347 1394.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1440.81 54.002L1434.8 62.685C1434.25 63.48 1433 63.091 1433 62.123V56.4H1427.98C1427.18 56.4 1426.71 55.506 1427.17 54.851L1433.18 46.168C1433.73 45.373 1434.97 45.762 1434.97 46.73V52.453H1440C1440.79 52.453 1441.26 53.347 1440.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1486.81 54.002L1480.8 62.685C1480.25 63.48 1479 63.091 1479 62.123V56.4H1473.98C1473.18 56.4 1472.71 55.506 1473.17 54.851L1479.18 46.168C1479.73 45.373 1480.97 45.762 1480.97 46.73V52.453H1486C1486.79 52.453 1487.26 53.347 1486.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1532.81 54.002L1526.8 62.685C1526.25 63.48 1525 63.091 1525 62.123V56.4H1519.98C1519.18 56.4 1518.71 55.506 1519.17 54.851L1525.18 46.168C1525.73 45.373 1526.97 45.762 1526.97 46.73V52.453H1532C1532.79 52.453 1533.26 53.347 1532.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1578.81 54.002L1572.8 62.685C1572.25 63.48 1571 63.091 1571 62.123V56.4H1565.98C1565.18 56.4 1564.71 55.506 1565.17 54.851L1571.18 46.168C1571.73 45.373 1572.97 45.762 1572.97 46.73V52.453H1578C1578.79 52.453 1579.26 53.347 1578.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1624.81 54.002L1618.8 62.685C1618.25 63.48 1617 63.091 1617 62.123V56.4H1611.97C1611.18 56.4 1610.71 55.506 1611.16 54.851L1617.17 46.168C1617.73 45.373 1618.97 45.762 1618.97 46.73V52.453H1624C1624.79 52.453 1625.26 53.347 1624.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1670.81 54.002L1664.8 62.685C1664.25 63.48 1663 63.091 1663 62.123V56.4H1657.97C1657.18 56.4 1656.71 55.506 1657.16 54.851L1663.17 46.168C1663.73 45.373 1664.97 45.762 1664.97 46.73V52.453H1670C1670.79 52.453 1671.26 53.347 1670.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1716.81 54.002L1710.8 62.685C1710.25 63.48 1709 63.091 1709 62.123V56.4H1703.97C1703.18 56.4 1702.71 55.506 1703.16 54.851L1709.17 46.168C1709.73 45.373 1710.97 45.762 1710.97 46.73V52.453H1716C1716.79 52.453 1717.26 53.347 1716.81 54.002Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M14.8226 103.373L8.81161 112.056C8.26061 112.851 7.01361 112.462 7.01361 111.494V105.771H1.98861C1.19261 105.771 0.723612 104.877 1.17761 104.222L7.18861 95.5389C7.73961 94.7439 8.98661 95.1329 8.98661 96.1009V101.824H14.0116C14.8066 101.824 15.2756 102.718 14.8226 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M60.8226 103.373L54.8116 112.056C54.2606 112.851 53.0136 112.462 53.0136 111.494V105.771H47.9886C47.1926 105.771 46.7236 104.877 47.1776 104.222L53.1886 95.5389C53.7396 94.7439 54.9866 95.1329 54.9866 96.1009V101.824H60.0116C60.8066 101.824 61.2756 102.718 60.8226 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M106.823 103.373L100.812 112.056C100.261 112.851 99.0136 112.462 99.0136 111.494V105.771H93.9886C93.1926 105.771 92.7236 104.877 93.1776 104.222L99.1886 95.5389C99.7396 94.7439 100.987 95.1329 100.987 96.1009V101.824H106.012C106.807 101.824 107.276 102.718 106.823 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M152.821 103.373L146.81 112.056C146.259 112.851 145.012 112.462 145.012 111.494V105.771H139.987C139.191 105.771 138.722 104.877 139.176 104.222L145.187 95.5389C145.738 94.7439 146.985 95.1329 146.985 96.1009V101.824H152.01C152.805 101.824 153.274 102.718 152.821 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M198.821 103.373L192.81 112.056C192.259 112.851 191.012 112.462 191.012 111.494V105.771H185.987C185.191 105.771 184.722 104.877 185.176 104.222L191.187 95.5389C191.738 94.7439 192.985 95.1329 192.985 96.1009V101.824H198.01C198.805 101.824 199.274 102.718 198.821 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M244.821 103.373L238.81 112.056C238.259 112.851 237.012 112.462 237.012 111.494V105.771H231.987C231.191 105.771 230.722 104.877 231.176 104.222L237.187 95.5389C237.738 94.7439 238.985 95.1329 238.985 96.1009V101.824H244.01C244.805 101.824 245.274 102.718 244.821 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M290.821 103.373L284.81 112.056C284.259 112.851 283.012 112.462 283.012 111.494V105.771H277.987C277.191 105.771 276.722 104.877 277.176 104.222L283.187 95.5389C283.738 94.7439 284.985 95.1329 284.985 96.1009V101.824H290.01C290.805 101.824 291.274 102.718 290.821 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M336.821 103.373L330.81 112.056C330.259 112.851 329.012 112.462 329.012 111.494V105.771H323.987C323.191 105.771 322.722 104.877 323.176 104.222L329.187 95.5389C329.738 94.7439 330.985 95.1329 330.985 96.1009V101.824H336.01C336.805 101.824 337.274 102.718 336.821 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M382.819 103.373L376.808 112.056C376.257 112.851 375.01 112.462 375.01 111.494V105.771H369.985C369.189 105.771 368.72 104.877 369.174 104.222L375.185 95.5389C375.736 94.7439 376.983 95.1329 376.983 96.1009V101.824H382.008C382.803 101.824 383.272 102.718 382.819 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M428.819 103.373L422.808 112.056C422.257 112.851 421.01 112.462 421.01 111.494V105.771H415.985C415.189 105.771 414.72 104.877 415.174 104.222L421.185 95.5389C421.736 94.7439 422.983 95.1329 422.983 96.1009V101.824H428.008C428.803 101.824 429.272 102.718 428.819 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M474.819 103.373L468.808 112.056C468.257 112.851 467.01 112.462 467.01 111.494V105.771H461.985C461.189 105.771 460.72 104.877 461.174 104.222L467.185 95.5389C467.736 94.7439 468.983 95.1329 468.983 96.1009V101.824H474.008C474.803 101.824 475.272 102.718 474.819 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M520.819 103.373L514.808 112.056C514.257 112.851 513.01 112.462 513.01 111.494V105.771H507.985C507.189 105.771 506.72 104.877 507.174 104.222L513.185 95.5389C513.736 94.7439 514.983 95.1329 514.983 96.1009V101.824H520.008C520.803 101.824 521.272 102.718 520.819 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M566.819 103.373L560.808 112.056C560.257 112.851 559.01 112.462 559.01 111.494V105.771H553.985C553.189 105.771 552.72 104.877 553.174 104.222L559.185 95.5389C559.736 94.7439 560.983 95.1329 560.983 96.1009V101.824H566.008C566.803 101.824 567.272 102.718 566.819 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M612.819 103.373L606.808 112.056C606.257 112.851 605.01 112.462 605.01 111.494V105.771H599.985C599.189 105.771 598.72 104.877 599.174 104.222L605.185 95.5389C605.736 94.7439 606.983 95.1329 606.983 96.1009V101.824H612.008C612.803 101.824 613.272 102.718 612.819 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M658.817 103.373L652.806 112.056C652.255 112.851 651.008 112.462 651.008 111.494V105.771H645.983C645.187 105.771 644.718 104.877 645.172 104.222L651.183 95.5389C651.734 94.7439 652.981 95.1329 652.981 96.1009V101.824H658.006C658.801 101.824 659.27 102.718 658.817 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M704.817 103.373L698.806 112.056C698.255 112.851 697.008 112.462 697.008 111.494V105.771H691.983C691.187 105.771 690.718 104.877 691.172 104.222L697.183 95.5389C697.734 94.7439 698.981 95.1329 698.981 96.1009V101.824H704.006C704.801 101.824 705.27 102.718 704.817 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M750.817 103.373L744.806 112.056C744.255 112.851 743.008 112.462 743.008 111.494V105.771H737.983C737.187 105.771 736.718 104.877 737.172 104.222L743.183 95.5389C743.734 94.7439 744.981 95.1329 744.981 96.1009V101.824H750.006C750.801 101.824 751.27 102.718 750.817 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M796.817 103.373L790.806 112.056C790.255 112.851 789.008 112.462 789.008 111.494V105.771H783.983C783.187 105.771 782.718 104.877 783.172 104.222L789.183 95.5389C789.734 94.7439 790.981 95.1329 790.981 96.1009V101.824H796.006C796.801 101.824 797.27 102.718 796.817 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M842.817 103.373L836.806 112.056C836.255 112.851 835.008 112.462 835.008 111.494V105.771H829.983C829.187 105.771 828.718 104.877 829.172 104.222L835.183 95.5389C835.734 94.7439 836.981 95.1329 836.981 96.1009V101.824H842.006C842.801 101.824 843.27 102.718 842.817 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M888.815 103.373L882.804 112.056C882.253 112.851 881.006 112.462 881.006 111.494V105.771H875.981C875.185 105.771 874.716 104.877 875.17 104.222L881.181 95.5389C881.732 94.7439 882.979 95.1329 882.979 96.1009V101.824H888.004C888.799 101.824 889.268 102.718 888.815 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M934.815 103.373L928.804 112.056C928.253 112.851 927.006 112.462 927.006 111.494V105.771H921.981C921.185 105.771 920.716 104.877 921.17 104.222L927.181 95.5389C927.732 94.7439 928.979 95.1329 928.979 96.1009V101.824H934.004C934.799 101.824 935.268 102.718 934.815 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M980.815 103.373L974.804 112.056C974.253 112.851 973.006 112.462 973.006 111.494V105.771H967.981C967.185 105.771 966.716 104.877 967.17 104.222L973.181 95.5389C973.732 94.7439 974.979 95.1329 974.979 96.1009V101.824H980.004C980.799 101.824 981.268 102.718 980.815 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1026.81 103.373L1020.8 112.056C1020.25 112.851 1019.01 112.462 1019.01 111.494V105.771H1013.98C1013.18 105.771 1012.72 104.877 1013.17 104.222L1019.18 95.5389C1019.73 94.7439 1020.98 95.1329 1020.98 96.1009V101.824H1026C1026.8 101.824 1027.27 102.718 1026.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1072.81 103.373L1066.8 112.056C1066.25 112.851 1065.01 112.462 1065.01 111.494V105.771H1059.98C1059.18 105.771 1058.72 104.877 1059.17 104.222L1065.18 95.5389C1065.73 94.7439 1066.98 95.1329 1066.98 96.1009V101.824H1072C1072.8 101.824 1073.27 102.718 1072.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1118.81 103.373L1112.8 112.056C1112.25 112.851 1111.01 112.462 1111.01 111.494V105.771H1105.98C1105.18 105.771 1104.72 104.877 1105.17 104.222L1111.18 95.5389C1111.73 94.7439 1112.98 95.1329 1112.98 96.1009V101.824H1118C1118.8 101.824 1119.27 102.718 1118.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1164.81 103.373L1158.8 112.056C1158.25 112.851 1157 112.462 1157 111.494V105.771H1151.98C1151.18 105.771 1150.71 104.877 1151.17 104.222L1157.18 95.5389C1157.73 94.7439 1158.98 95.1329 1158.98 96.1009V101.824H1164C1164.8 101.824 1165.27 102.718 1164.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1210.81 103.373L1204.8 112.056C1204.25 112.851 1203 112.462 1203 111.494V105.771H1197.98C1197.18 105.771 1196.71 104.877 1197.17 104.222L1203.18 95.5389C1203.73 94.7439 1204.98 95.1329 1204.98 96.1009V101.824H1210C1210.8 101.824 1211.27 102.718 1210.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1256.81 103.373L1250.8 112.056C1250.25 112.851 1249 112.462 1249 111.494V105.771H1243.98C1243.18 105.771 1242.71 104.877 1243.17 104.222L1249.18 95.5389C1249.73 94.7439 1250.98 95.1329 1250.98 96.1009V101.824H1256C1256.8 101.824 1257.27 102.718 1256.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1302.81 103.373L1296.8 112.056C1296.25 112.851 1295 112.462 1295 111.494V105.771H1289.98C1289.18 105.771 1288.71 104.877 1289.17 104.222L1295.18 95.5389C1295.73 94.7439 1296.98 95.1329 1296.98 96.1009V101.824H1302C1302.8 101.824 1303.27 102.718 1302.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1348.81 103.373L1342.8 112.056C1342.25 112.851 1341 112.462 1341 111.494V105.771H1335.98C1335.18 105.771 1334.71 104.877 1335.17 104.222L1341.18 95.5389C1341.73 94.7439 1342.98 95.1329 1342.98 96.1009V101.824H1348C1348.8 101.824 1349.27 102.718 1348.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1394.81 103.373L1388.8 112.056C1388.25 112.851 1387 112.462 1387 111.494V105.771H1381.98C1381.18 105.771 1380.71 104.877 1381.17 104.222L1387.18 95.5389C1387.73 94.7439 1388.97 95.1329 1388.97 96.1009V101.824H1394C1394.79 101.824 1395.26 102.718 1394.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1440.81 103.373L1434.8 112.056C1434.25 112.851 1433 112.462 1433 111.494V105.771H1427.98C1427.18 105.771 1426.71 104.877 1427.17 104.222L1433.18 95.5389C1433.73 94.7439 1434.97 95.1329 1434.97 96.1009V101.824H1440C1440.79 101.824 1441.26 102.718 1440.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1486.81 103.373L1480.8 112.056C1480.25 112.851 1479 112.462 1479 111.494V105.771H1473.98C1473.18 105.771 1472.71 104.877 1473.17 104.222L1479.18 95.5389C1479.73 94.7439 1480.97 95.1329 1480.97 96.1009V101.824H1486C1486.79 101.824 1487.26 102.718 1486.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1532.81 103.373L1526.8 112.056C1526.25 112.851 1525 112.462 1525 111.494V105.771H1519.98C1519.18 105.771 1518.71 104.877 1519.17 104.222L1525.18 95.5389C1525.73 94.7439 1526.97 95.1329 1526.97 96.1009V101.824H1532C1532.79 101.824 1533.26 102.718 1532.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1578.81 103.373L1572.8 112.056C1572.25 112.851 1571 112.462 1571 111.494V105.771H1565.98C1565.18 105.771 1564.71 104.877 1565.17 104.222L1571.18 95.5389C1571.73 94.7439 1572.97 95.1329 1572.97 96.1009V101.824H1578C1578.79 101.824 1579.26 102.718 1578.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1624.81 103.373L1618.8 112.056C1618.25 112.851 1617 112.462 1617 111.494V105.771H1611.97C1611.18 105.771 1610.71 104.877 1611.16 104.222L1617.17 95.5389C1617.73 94.7439 1618.97 95.1329 1618.97 96.1009V101.824H1624C1624.79 101.824 1625.26 102.718 1624.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1670.81 103.373L1664.8 112.056C1664.25 112.851 1663 112.462 1663 111.494V105.771H1657.97C1657.18 105.771 1656.71 104.877 1657.16 104.222L1663.17 95.5389C1663.73 94.7439 1664.97 95.1329 1664.97 96.1009V101.824H1670C1670.79 101.824 1671.26 102.718 1670.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1716.81 103.373L1710.8 112.056C1710.25 112.851 1709 112.462 1709 111.494V105.771H1703.97C1703.18 105.771 1702.71 104.877 1703.16 104.222L1709.17 95.5389C1709.73 94.7439 1710.97 95.1329 1710.97 96.1009V101.824H1716C1716.79 101.824 1717.26 102.718 1716.81 103.373Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M14.8226 152.743L8.81161 161.426C8.26061 162.221 7.01361 161.832 7.01361 160.864V155.141H1.98861C1.19261 155.141 0.723612 154.247 1.17761 153.592L7.18861 144.909C7.73961 144.114 8.98661 144.503 8.98661 145.471V151.194H14.0116C14.8066 151.194 15.2756 152.088 14.8226 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M60.8226 152.743L54.8116 161.426C54.2606 162.221 53.0136 161.832 53.0136 160.864V155.141H47.9886C47.1926 155.141 46.7236 154.247 47.1776 153.592L53.1886 144.909C53.7396 144.114 54.9866 144.503 54.9866 145.471V151.194H60.0116C60.8066 151.194 61.2756 152.088 60.8226 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M106.823 152.743L100.812 161.426C100.261 162.221 99.0136 161.832 99.0136 160.864V155.141H93.9886C93.1926 155.141 92.7236 154.247 93.1776 153.592L99.1886 144.909C99.7396 144.114 100.987 144.503 100.987 145.471V151.194H106.012C106.807 151.194 107.276 152.088 106.823 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M152.821 152.743L146.81 161.426C146.259 162.221 145.012 161.832 145.012 160.864V155.141H139.987C139.191 155.141 138.722 154.247 139.176 153.592L145.187 144.909C145.738 144.114 146.985 144.503 146.985 145.471V151.194H152.01C152.805 151.194 153.274 152.088 152.821 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M198.821 152.743L192.81 161.426C192.259 162.221 191.012 161.832 191.012 160.864V155.141H185.987C185.191 155.141 184.722 154.247 185.176 153.592L191.187 144.909C191.738 144.114 192.985 144.503 192.985 145.471V151.194H198.01C198.805 151.194 199.274 152.088 198.821 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M244.821 152.743L238.81 161.426C238.259 162.221 237.012 161.832 237.012 160.864V155.141H231.987C231.191 155.141 230.722 154.247 231.176 153.592L237.187 144.909C237.738 144.114 238.985 144.503 238.985 145.471V151.194H244.01C244.805 151.194 245.274 152.088 244.821 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M290.821 152.743L284.81 161.426C284.259 162.221 283.012 161.832 283.012 160.864V155.141H277.987C277.191 155.141 276.722 154.247 277.176 153.592L283.187 144.909C283.738 144.114 284.985 144.503 284.985 145.471V151.194H290.01C290.805 151.194 291.274 152.088 290.821 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M336.821 152.743L330.81 161.426C330.259 162.221 329.012 161.832 329.012 160.864V155.141H323.987C323.191 155.141 322.722 154.247 323.176 153.592L329.187 144.909C329.738 144.114 330.985 144.503 330.985 145.471V151.194H336.01C336.805 151.194 337.274 152.088 336.821 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M382.819 152.743L376.808 161.426C376.257 162.221 375.01 161.832 375.01 160.864V155.141H369.985C369.189 155.141 368.72 154.247 369.174 153.592L375.185 144.909C375.736 144.114 376.983 144.503 376.983 145.471V151.194H382.008C382.803 151.194 383.272 152.088 382.819 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M428.819 152.743L422.808 161.426C422.257 162.221 421.01 161.832 421.01 160.864V155.141H415.985C415.189 155.141 414.72 154.247 415.174 153.592L421.185 144.909C421.736 144.114 422.983 144.503 422.983 145.471V151.194H428.008C428.803 151.194 429.272 152.088 428.819 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M474.819 152.743L468.808 161.426C468.257 162.221 467.01 161.832 467.01 160.864V155.141H461.985C461.189 155.141 460.72 154.247 461.174 153.592L467.185 144.909C467.736 144.114 468.983 144.503 468.983 145.471V151.194H474.008C474.803 151.194 475.272 152.088 474.819 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M520.819 152.743L514.808 161.426C514.257 162.221 513.01 161.832 513.01 160.864V155.141H507.985C507.189 155.141 506.72 154.247 507.174 153.592L513.185 144.909C513.736 144.114 514.983 144.503 514.983 145.471V151.194H520.008C520.803 151.194 521.272 152.088 520.819 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M566.819 152.743L560.808 161.426C560.257 162.221 559.01 161.832 559.01 160.864V155.141H553.985C553.189 155.141 552.72 154.247 553.174 153.592L559.185 144.909C559.736 144.114 560.983 144.503 560.983 145.471V151.194H566.008C566.803 151.194 567.272 152.088 566.819 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M612.819 152.743L606.808 161.426C606.257 162.221 605.01 161.832 605.01 160.864V155.141H599.985C599.189 155.141 598.72 154.247 599.174 153.592L605.185 144.909C605.736 144.114 606.983 144.503 606.983 145.471V151.194H612.008C612.803 151.194 613.272 152.088 612.819 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M658.817 152.743L652.806 161.426C652.255 162.221 651.008 161.832 651.008 160.864V155.141H645.983C645.187 155.141 644.718 154.247 645.172 153.592L651.183 144.909C651.734 144.114 652.981 144.503 652.981 145.471V151.194H658.006C658.801 151.194 659.27 152.088 658.817 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M704.817 152.743L698.806 161.426C698.255 162.221 697.008 161.832 697.008 160.864V155.141H691.983C691.187 155.141 690.718 154.247 691.172 153.592L697.183 144.909C697.734 144.114 698.981 144.503 698.981 145.471V151.194H704.006C704.801 151.194 705.27 152.088 704.817 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M750.817 152.743L744.806 161.426C744.255 162.221 743.008 161.832 743.008 160.864V155.141H737.983C737.187 155.141 736.718 154.247 737.172 153.592L743.183 144.909C743.734 144.114 744.981 144.503 744.981 145.471V151.194H750.006C750.801 151.194 751.27 152.088 750.817 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M796.817 152.743L790.806 161.426C790.255 162.221 789.008 161.832 789.008 160.864V155.141H783.983C783.187 155.141 782.718 154.247 783.172 153.592L789.183 144.909C789.734 144.114 790.981 144.503 790.981 145.471V151.194H796.006C796.801 151.194 797.27 152.088 796.817 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M842.817 152.743L836.806 161.426C836.255 162.221 835.008 161.832 835.008 160.864V155.141H829.983C829.187 155.141 828.718 154.247 829.172 153.592L835.183 144.909C835.734 144.114 836.981 144.503 836.981 145.471V151.194H842.006C842.801 151.194 843.27 152.088 842.817 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M888.815 152.743L882.804 161.426C882.253 162.221 881.006 161.832 881.006 160.864V155.141H875.981C875.185 155.141 874.716 154.247 875.17 153.592L881.181 144.909C881.732 144.114 882.979 144.503 882.979 145.471V151.194H888.004C888.799 151.194 889.268 152.088 888.815 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M934.815 152.743L928.804 161.426C928.253 162.221 927.006 161.832 927.006 160.864V155.141H921.981C921.185 155.141 920.716 154.247 921.17 153.592L927.181 144.909C927.732 144.114 928.979 144.503 928.979 145.471V151.194H934.004C934.799 151.194 935.268 152.088 934.815 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M980.815 152.743L974.804 161.426C974.253 162.221 973.006 161.832 973.006 160.864V155.141H967.981C967.185 155.141 966.716 154.247 967.17 153.592L973.181 144.909C973.732 144.114 974.979 144.503 974.979 145.471V151.194H980.004C980.799 151.194 981.268 152.088 980.815 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1026.81 152.743L1020.8 161.426C1020.25 162.221 1019.01 161.832 1019.01 160.864V155.141H1013.98C1013.18 155.141 1012.72 154.247 1013.17 153.592L1019.18 144.909C1019.73 144.114 1020.98 144.503 1020.98 145.471V151.194H1026C1026.8 151.194 1027.27 152.088 1026.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1072.81 152.743L1066.8 161.426C1066.25 162.221 1065.01 161.832 1065.01 160.864V155.141H1059.98C1059.18 155.141 1058.72 154.247 1059.17 153.592L1065.18 144.909C1065.73 144.114 1066.98 144.503 1066.98 145.471V151.194H1072C1072.8 151.194 1073.27 152.088 1072.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1118.81 152.743L1112.8 161.426C1112.25 162.221 1111.01 161.832 1111.01 160.864V155.141H1105.98C1105.18 155.141 1104.72 154.247 1105.17 153.592L1111.18 144.909C1111.73 144.114 1112.98 144.503 1112.98 145.471V151.194H1118C1118.8 151.194 1119.27 152.088 1118.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1164.81 152.743L1158.8 161.426C1158.25 162.221 1157 161.832 1157 160.864V155.141H1151.98C1151.18 155.141 1150.71 154.247 1151.17 153.592L1157.18 144.909C1157.73 144.114 1158.98 144.503 1158.98 145.471V151.194H1164C1164.8 151.194 1165.27 152.088 1164.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1210.81 152.743L1204.8 161.426C1204.25 162.221 1203 161.832 1203 160.864V155.141H1197.98C1197.18 155.141 1196.71 154.247 1197.17 153.592L1203.18 144.909C1203.73 144.114 1204.98 144.503 1204.98 145.471V151.194H1210C1210.8 151.194 1211.27 152.088 1210.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1256.81 152.743L1250.8 161.426C1250.25 162.221 1249 161.832 1249 160.864V155.141H1243.98C1243.18 155.141 1242.71 154.247 1243.17 153.592L1249.18 144.909C1249.73 144.114 1250.98 144.503 1250.98 145.471V151.194H1256C1256.8 151.194 1257.27 152.088 1256.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1302.81 152.743L1296.8 161.426C1296.25 162.221 1295 161.832 1295 160.864V155.141H1289.98C1289.18 155.141 1288.71 154.247 1289.17 153.592L1295.18 144.909C1295.73 144.114 1296.98 144.503 1296.98 145.471V151.194H1302C1302.8 151.194 1303.27 152.088 1302.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1348.81 152.743L1342.8 161.426C1342.25 162.221 1341 161.832 1341 160.864V155.141H1335.98C1335.18 155.141 1334.71 154.247 1335.17 153.592L1341.18 144.909C1341.73 144.114 1342.98 144.503 1342.98 145.471V151.194H1348C1348.8 151.194 1349.27 152.088 1348.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1394.81 152.743L1388.8 161.426C1388.25 162.221 1387 161.832 1387 160.864V155.141H1381.98C1381.18 155.141 1380.71 154.247 1381.17 153.592L1387.18 144.909C1387.73 144.114 1388.97 144.503 1388.97 145.471V151.194H1394C1394.79 151.194 1395.26 152.088 1394.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1440.81 152.743L1434.8 161.426C1434.25 162.221 1433 161.832 1433 160.864V155.141H1427.98C1427.18 155.141 1426.71 154.247 1427.17 153.592L1433.18 144.909C1433.73 144.114 1434.97 144.503 1434.97 145.471V151.194H1440C1440.79 151.194 1441.26 152.088 1440.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1486.81 152.743L1480.8 161.426C1480.25 162.221 1479 161.832 1479 160.864V155.141H1473.98C1473.18 155.141 1472.71 154.247 1473.17 153.592L1479.18 144.909C1479.73 144.114 1480.97 144.503 1480.97 145.471V151.194H1486C1486.79 151.194 1487.26 152.088 1486.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1532.81 152.743L1526.8 161.426C1526.25 162.221 1525 161.832 1525 160.864V155.141H1519.98C1519.18 155.141 1518.71 154.247 1519.17 153.592L1525.18 144.909C1525.73 144.114 1526.97 144.503 1526.97 145.471V151.194H1532C1532.79 151.194 1533.26 152.088 1532.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1578.81 152.743L1572.8 161.426C1572.25 162.221 1571 161.832 1571 160.864V155.141H1565.98C1565.18 155.141 1564.71 154.247 1565.17 153.592L1571.18 144.909C1571.73 144.114 1572.97 144.503 1572.97 145.471V151.194H1578C1578.79 151.194 1579.26 152.088 1578.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1624.81 152.743L1618.8 161.426C1618.25 162.221 1617 161.832 1617 160.864V155.141H1611.97C1611.18 155.141 1610.71 154.247 1611.16 153.592L1617.17 144.909C1617.73 144.114 1618.97 144.503 1618.97 145.471V151.194H1624C1624.79 151.194 1625.26 152.088 1624.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1670.81 152.743L1664.8 161.426C1664.25 162.221 1663 161.832 1663 160.864V155.141H1657.97C1657.18 155.141 1656.71 154.247 1657.16 153.592L1663.17 144.909C1663.73 144.114 1664.97 144.503 1664.97 145.471V151.194H1670C1670.79 151.194 1671.26 152.088 1670.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
	<path d="M1716.81 152.743L1710.8 161.426C1710.25 162.221 1709 161.832 1709 160.864V155.141H1703.97C1703.18 155.141 1702.71 154.247 1703.16 153.592L1709.17 144.909C1709.73 144.114 1710.97 144.503 1710.97 145.471V151.194H1716C1716.79 151.194 1717.26 152.088 1716.81 152.743Z" stroke="#F69F00" strokeLinecap="round" strokeLinejoin="round"/>
							<svg
								width="1717"
								height="163"
								viewBox="0 0 1717 163"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.8226 4.63143L8.81161 13.3144C8.26061 14.1094 7.01361 13.7204 7.01361 12.7524V7.02943H1.98861C1.19261 7.02943 0.723612 6.13543 1.17761 5.48043L7.18861 -3.20257C7.73961 -3.99757 8.98661 -3.60857 8.98661 -2.64057V3.08243H14.0116C14.8066 3.08243 15.2756 3.97643 14.8226 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M60.8226 4.63143L54.8116 13.3144C54.2606 14.1094 53.0136 13.7204 53.0136 12.7524V7.02943H47.9886C47.1926 7.02943 46.7236 6.13543 47.1776 5.48043L53.1886 -3.20257C53.7396 -3.99757 54.9866 -3.60857 54.9866 -2.64057V3.08243H60.0116C60.8066 3.08243 61.2756 3.97643 60.8226 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M106.823 4.63143L100.812 13.3144C100.261 14.1094 99.0136 13.7204 99.0136 12.7524V7.02943H93.9886C93.1926 7.02943 92.7236 6.13543 93.1776 5.48043L99.1886 -3.20257C99.7396 -3.99757 100.987 -3.60857 100.987 -2.64057V3.08243H106.012C106.807 3.08243 107.276 3.97643 106.823 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M152.821 4.63143L146.81 13.3144C146.259 14.1094 145.012 13.7204 145.012 12.7524V7.02943H139.987C139.191 7.02943 138.722 6.13543 139.176 5.48043L145.187 -3.20257C145.738 -3.99757 146.985 -3.60857 146.985 -2.64057V3.08243H152.01C152.805 3.08243 153.274 3.97643 152.821 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M198.821 4.63143L192.81 13.3144C192.259 14.1094 191.012 13.7204 191.012 12.7524V7.02943H185.987C185.191 7.02943 184.722 6.13543 185.176 5.48043L191.187 -3.20257C191.738 -3.99757 192.985 -3.60857 192.985 -2.64057V3.08243H198.01C198.805 3.08243 199.274 3.97643 198.821 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M244.821 4.63143L238.81 13.3144C238.259 14.1094 237.012 13.7204 237.012 12.7524V7.02943H231.987C231.191 7.02943 230.722 6.13543 231.176 5.48043L237.187 -3.20257C237.738 -3.99757 238.985 -3.60857 238.985 -2.64057V3.08243H244.01C244.805 3.08243 245.274 3.97643 244.821 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M290.821 4.63143L284.81 13.3144C284.259 14.1094 283.012 13.7204 283.012 12.7524V7.02943H277.987C277.191 7.02943 276.722 6.13543 277.176 5.48043L283.187 -3.20257C283.738 -3.99757 284.985 -3.60857 284.985 -2.64057V3.08243H290.01C290.805 3.08243 291.274 3.97643 290.821 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M336.821 4.63143L330.81 13.3144C330.259 14.1094 329.012 13.7204 329.012 12.7524V7.02943H323.987C323.191 7.02943 322.722 6.13543 323.176 5.48043L329.187 -3.20257C329.738 -3.99757 330.985 -3.60857 330.985 -2.64057V3.08243H336.01C336.805 3.08243 337.274 3.97643 336.821 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M382.819 4.63143L376.808 13.3144C376.257 14.1094 375.01 13.7204 375.01 12.7524V7.02943H369.985C369.189 7.02943 368.72 6.13543 369.174 5.48043L375.185 -3.20257C375.736 -3.99757 376.983 -3.60857 376.983 -2.64057V3.08243H382.008C382.803 3.08243 383.272 3.97643 382.819 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M428.819 4.63143L422.808 13.3144C422.257 14.1094 421.01 13.7204 421.01 12.7524V7.02943H415.985C415.189 7.02943 414.72 6.13543 415.174 5.48043L421.185 -3.20257C421.736 -3.99757 422.983 -3.60857 422.983 -2.64057V3.08243H428.008C428.803 3.08243 429.272 3.97643 428.819 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M474.819 4.63143L468.808 13.3144C468.257 14.1094 467.01 13.7204 467.01 12.7524V7.02943H461.985C461.189 7.02943 460.72 6.13543 461.174 5.48043L467.185 -3.20257C467.736 -3.99757 468.983 -3.60857 468.983 -2.64057V3.08243H474.008C474.803 3.08243 475.272 3.97643 474.819 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M520.819 4.63143L514.808 13.3144C514.257 14.1094 513.01 13.7204 513.01 12.7524V7.02943H507.985C507.189 7.02943 506.72 6.13543 507.174 5.48043L513.185 -3.20257C513.736 -3.99757 514.983 -3.60857 514.983 -2.64057V3.08243H520.008C520.803 3.08243 521.272 3.97643 520.819 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M566.819 4.63143L560.808 13.3144C560.257 14.1094 559.01 13.7204 559.01 12.7524V7.02943H553.985C553.189 7.02943 552.72 6.13543 553.174 5.48043L559.185 -3.20257C559.736 -3.99757 560.983 -3.60857 560.983 -2.64057V3.08243H566.008C566.803 3.08243 567.272 3.97643 566.819 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M612.819 4.63143L606.808 13.3144C606.257 14.1094 605.01 13.7204 605.01 12.7524V7.02943H599.985C599.189 7.02943 598.72 6.13543 599.174 5.48043L605.185 -3.20257C605.736 -3.99757 606.983 -3.60857 606.983 -2.64057V3.08243H612.008C612.803 3.08243 613.272 3.97643 612.819 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M658.817 4.63143L652.806 13.3144C652.255 14.1094 651.008 13.7204 651.008 12.7524V7.02943H645.983C645.187 7.02943 644.718 6.13543 645.172 5.48043L651.183 -3.20257C651.734 -3.99757 652.981 -3.60857 652.981 -2.64057V3.08243H658.006C658.801 3.08243 659.27 3.97643 658.817 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M704.817 4.63143L698.806 13.3144C698.255 14.1094 697.008 13.7204 697.008 12.7524V7.02943H691.983C691.187 7.02943 690.718 6.13543 691.172 5.48043L697.183 -3.20257C697.734 -3.99757 698.981 -3.60857 698.981 -2.64057V3.08243H704.006C704.801 3.08243 705.27 3.97643 704.817 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M750.817 4.63143L744.806 13.3144C744.255 14.1094 743.008 13.7204 743.008 12.7524V7.02943H737.983C737.187 7.02943 736.718 6.13543 737.172 5.48043L743.183 -3.20257C743.734 -3.99757 744.981 -3.60857 744.981 -2.64057V3.08243H750.006C750.801 3.08243 751.27 3.97643 750.817 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M796.817 4.63143L790.806 13.3144C790.255 14.1094 789.008 13.7204 789.008 12.7524V7.02943H783.983C783.187 7.02943 782.718 6.13543 783.172 5.48043L789.183 -3.20257C789.734 -3.99757 790.981 -3.60857 790.981 -2.64057V3.08243H796.006C796.801 3.08243 797.27 3.97643 796.817 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M842.817 4.63143L836.806 13.3144C836.255 14.1094 835.008 13.7204 835.008 12.7524V7.02943H829.983C829.187 7.02943 828.718 6.13543 829.172 5.48043L835.183 -3.20257C835.734 -3.99757 836.981 -3.60857 836.981 -2.64057V3.08243H842.006C842.801 3.08243 843.27 3.97643 842.817 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M888.815 4.63143L882.804 13.3144C882.253 14.1094 881.006 13.7204 881.006 12.7524V7.02943H875.981C875.185 7.02943 874.716 6.13543 875.17 5.48043L881.181 -3.20257C881.732 -3.99757 882.979 -3.60857 882.979 -2.64057V3.08243H888.004C888.799 3.08243 889.268 3.97643 888.815 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M934.815 4.63143L928.804 13.3144C928.253 14.1094 927.006 13.7204 927.006 12.7524V7.02943H921.981C921.185 7.02943 920.716 6.13543 921.17 5.48043L927.181 -3.20257C927.732 -3.99757 928.979 -3.60857 928.979 -2.64057V3.08243H934.004C934.799 3.08243 935.268 3.97643 934.815 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M980.815 4.63143L974.804 13.3144C974.253 14.1094 973.006 13.7204 973.006 12.7524V7.02943H967.981C967.185 7.02943 966.716 6.13543 967.17 5.48043L973.181 -3.20257C973.732 -3.99757 974.979 -3.60857 974.979 -2.64057V3.08243H980.004C980.799 3.08243 981.268 3.97643 980.815 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1026.81 4.63143L1020.8 13.3144C1020.25 14.1094 1019.01 13.7204 1019.01 12.7524V7.02943H1013.98C1013.18 7.02943 1012.72 6.13543 1013.17 5.48043L1019.18 -3.20257C1019.73 -3.99757 1020.98 -3.60857 1020.98 -2.64057V3.08243H1026C1026.8 3.08243 1027.27 3.97643 1026.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1072.81 4.63143L1066.8 13.3144C1066.25 14.1094 1065.01 13.7204 1065.01 12.7524V7.02943H1059.98C1059.18 7.02943 1058.72 6.13543 1059.17 5.48043L1065.18 -3.20257C1065.73 -3.99757 1066.98 -3.60857 1066.98 -2.64057V3.08243H1072C1072.8 3.08243 1073.27 3.97643 1072.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1118.81 4.63143L1112.8 13.3144C1112.25 14.1094 1111.01 13.7204 1111.01 12.7524V7.02943H1105.98C1105.18 7.02943 1104.72 6.13543 1105.17 5.48043L1111.18 -3.20257C1111.73 -3.99757 1112.98 -3.60857 1112.98 -2.64057V3.08243H1118C1118.8 3.08243 1119.27 3.97643 1118.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1164.81 4.63143L1158.8 13.3144C1158.25 14.1094 1157 13.7204 1157 12.7524V7.02943H1151.98C1151.18 7.02943 1150.71 6.13543 1151.17 5.48043L1157.18 -3.20257C1157.73 -3.99757 1158.98 -3.60857 1158.98 -2.64057V3.08243H1164C1164.8 3.08243 1165.27 3.97643 1164.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1210.81 4.63143L1204.8 13.3144C1204.25 14.1094 1203 13.7204 1203 12.7524V7.02943H1197.98C1197.18 7.02943 1196.71 6.13543 1197.17 5.48043L1203.18 -3.20257C1203.73 -3.99757 1204.98 -3.60857 1204.98 -2.64057V3.08243H1210C1210.8 3.08243 1211.27 3.97643 1210.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1256.81 4.63143L1250.8 13.3144C1250.25 14.1094 1249 13.7204 1249 12.7524V7.02943H1243.98C1243.18 7.02943 1242.71 6.13543 1243.17 5.48043L1249.18 -3.20257C1249.73 -3.99757 1250.98 -3.60857 1250.98 -2.64057V3.08243H1256C1256.8 3.08243 1257.27 3.97643 1256.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1302.81 4.63143L1296.8 13.3144C1296.25 14.1094 1295 13.7204 1295 12.7524V7.02943H1289.98C1289.18 7.02943 1288.71 6.13543 1289.17 5.48043L1295.18 -3.20257C1295.73 -3.99757 1296.98 -3.60857 1296.98 -2.64057V3.08243H1302C1302.8 3.08243 1303.27 3.97643 1302.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1348.81 4.63143L1342.8 13.3144C1342.25 14.1094 1341 13.7204 1341 12.7524V7.02943H1335.98C1335.18 7.02943 1334.71 6.13543 1335.17 5.48043L1341.18 -3.20257C1341.73 -3.99757 1342.98 -3.60857 1342.98 -2.64057V3.08243H1348C1348.8 3.08243 1349.27 3.97643 1348.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1394.81 4.63143L1388.8 13.3144C1388.25 14.1094 1387 13.7204 1387 12.7524V7.02943H1381.98C1381.18 7.02943 1380.71 6.13543 1381.17 5.48043L1387.18 -3.20257C1387.73 -3.99757 1388.97 -3.60857 1388.97 -2.64057V3.08243H1394C1394.79 3.08243 1395.26 3.97643 1394.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1440.81 4.63143L1434.8 13.3144C1434.25 14.1094 1433 13.7204 1433 12.7524V7.02943H1427.98C1427.18 7.02943 1426.71 6.13543 1427.17 5.48043L1433.18 -3.20257C1433.73 -3.99757 1434.97 -3.60857 1434.97 -2.64057V3.08243H1440C1440.79 3.08243 1441.26 3.97643 1440.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1486.81 4.63143L1480.8 13.3144C1480.25 14.1094 1479 13.7204 1479 12.7524V7.02943H1473.98C1473.18 7.02943 1472.71 6.13543 1473.17 5.48043L1479.18 -3.20257C1479.73 -3.99757 1480.97 -3.60857 1480.97 -2.64057V3.08243H1486C1486.79 3.08243 1487.26 3.97643 1486.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1532.81 4.63143L1526.8 13.3144C1526.25 14.1094 1525 13.7204 1525 12.7524V7.02943H1519.98C1519.18 7.02943 1518.71 6.13543 1519.17 5.48043L1525.18 -3.20257C1525.73 -3.99757 1526.97 -3.60857 1526.97 -2.64057V3.08243H1532C1532.79 3.08243 1533.26 3.97643 1532.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1578.81 4.63143L1572.8 13.3144C1572.25 14.1094 1571 13.7204 1571 12.7524V7.02943H1565.98C1565.18 7.02943 1564.71 6.13543 1565.17 5.48043L1571.18 -3.20257C1571.73 -3.99757 1572.97 -3.60857 1572.97 -2.64057V3.08243H1578C1578.79 3.08243 1579.26 3.97643 1578.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1624.81 4.63143L1618.8 13.3144C1618.25 14.1094 1617 13.7204 1617 12.7524V7.02943H1611.97C1611.18 7.02943 1610.71 6.13543 1611.16 5.48043L1617.17 -3.20257C1617.73 -3.99757 1618.97 -3.60857 1618.97 -2.64057V3.08243H1624C1624.79 3.08243 1625.26 3.97643 1624.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1670.81 4.63143L1664.8 13.3144C1664.25 14.1094 1663 13.7204 1663 12.7524V7.02943H1657.97C1657.18 7.02943 1656.71 6.13543 1657.16 5.48043L1663.17 -3.20257C1663.73 -3.99757 1664.97 -3.60857 1664.97 -2.64057V3.08243H1670C1670.79 3.08243 1671.26 3.97643 1670.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1716.81 4.63143L1710.8 13.3144C1710.25 14.1094 1709 13.7204 1709 12.7524V7.02943H1703.97C1703.18 7.02943 1702.71 6.13543 1703.16 5.48043L1709.17 -3.20257C1709.73 -3.99757 1710.97 -3.60857 1710.97 -2.64057V3.08243H1716C1716.79 3.08243 1717.26 3.97643 1716.81 4.63143Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M14.8226 54.002L8.81161 62.685C8.26061 63.48 7.01361 63.091 7.01361 62.123V56.4H1.98861C1.19261 56.4 0.723612 55.506 1.17761 54.851L7.18861 46.168C7.73961 45.373 8.98661 45.762 8.98661 46.73V52.453H14.0116C14.8066 52.453 15.2756 53.347 14.8226 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M60.8226 54.002L54.8116 62.685C54.2606 63.48 53.0136 63.091 53.0136 62.123V56.4H47.9886C47.1926 56.4 46.7236 55.506 47.1776 54.851L53.1886 46.168C53.7396 45.373 54.9866 45.762 54.9866 46.73V52.453H60.0116C60.8066 52.453 61.2756 53.347 60.8226 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M106.823 54.002L100.812 62.685C100.261 63.48 99.0136 63.091 99.0136 62.123V56.4H93.9886C93.1926 56.4 92.7236 55.506 93.1776 54.851L99.1886 46.168C99.7396 45.373 100.987 45.762 100.987 46.73V52.453H106.012C106.807 52.453 107.276 53.347 106.823 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M152.821 54.002L146.81 62.685C146.259 63.48 145.012 63.091 145.012 62.123V56.4H139.987C139.191 56.4 138.722 55.506 139.176 54.851L145.187 46.168C145.738 45.373 146.985 45.762 146.985 46.73V52.453H152.01C152.805 52.453 153.274 53.347 152.821 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M198.821 54.002L192.81 62.685C192.259 63.48 191.012 63.091 191.012 62.123V56.4H185.987C185.191 56.4 184.722 55.506 185.176 54.851L191.187 46.168C191.738 45.373 192.985 45.762 192.985 46.73V52.453H198.01C198.805 52.453 199.274 53.347 198.821 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M244.821 54.002L238.81 62.685C238.259 63.48 237.012 63.091 237.012 62.123V56.4H231.987C231.191 56.4 230.722 55.506 231.176 54.851L237.187 46.168C237.738 45.373 238.985 45.762 238.985 46.73V52.453H244.01C244.805 52.453 245.274 53.347 244.821 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M290.821 54.002L284.81 62.685C284.259 63.48 283.012 63.091 283.012 62.123V56.4H277.987C277.191 56.4 276.722 55.506 277.176 54.851L283.187 46.168C283.738 45.373 284.985 45.762 284.985 46.73V52.453H290.01C290.805 52.453 291.274 53.347 290.821 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M336.821 54.002L330.81 62.685C330.259 63.48 329.012 63.091 329.012 62.123V56.4H323.987C323.191 56.4 322.722 55.506 323.176 54.851L329.187 46.168C329.738 45.373 330.985 45.762 330.985 46.73V52.453H336.01C336.805 52.453 337.274 53.347 336.821 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M382.819 54.002L376.808 62.685C376.257 63.48 375.01 63.091 375.01 62.123V56.4H369.985C369.189 56.4 368.72 55.506 369.174 54.851L375.185 46.168C375.736 45.373 376.983 45.762 376.983 46.73V52.453H382.008C382.803 52.453 383.272 53.347 382.819 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M428.819 54.002L422.808 62.685C422.257 63.48 421.01 63.091 421.01 62.123V56.4H415.985C415.189 56.4 414.72 55.506 415.174 54.851L421.185 46.168C421.736 45.373 422.983 45.762 422.983 46.73V52.453H428.008C428.803 52.453 429.272 53.347 428.819 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M474.819 54.002L468.808 62.685C468.257 63.48 467.01 63.091 467.01 62.123V56.4H461.985C461.189 56.4 460.72 55.506 461.174 54.851L467.185 46.168C467.736 45.373 468.983 45.762 468.983 46.73V52.453H474.008C474.803 52.453 475.272 53.347 474.819 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M520.819 54.002L514.808 62.685C514.257 63.48 513.01 63.091 513.01 62.123V56.4H507.985C507.189 56.4 506.72 55.506 507.174 54.851L513.185 46.168C513.736 45.373 514.983 45.762 514.983 46.73V52.453H520.008C520.803 52.453 521.272 53.347 520.819 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M566.819 54.002L560.808 62.685C560.257 63.48 559.01 63.091 559.01 62.123V56.4H553.985C553.189 56.4 552.72 55.506 553.174 54.851L559.185 46.168C559.736 45.373 560.983 45.762 560.983 46.73V52.453H566.008C566.803 52.453 567.272 53.347 566.819 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M612.819 54.002L606.808 62.685C606.257 63.48 605.01 63.091 605.01 62.123V56.4H599.985C599.189 56.4 598.72 55.506 599.174 54.851L605.185 46.168C605.736 45.373 606.983 45.762 606.983 46.73V52.453H612.008C612.803 52.453 613.272 53.347 612.819 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M658.817 54.002L652.806 62.685C652.255 63.48 651.008 63.091 651.008 62.123V56.4H645.983C645.187 56.4 644.718 55.506 645.172 54.851L651.183 46.168C651.734 45.373 652.981 45.762 652.981 46.73V52.453H658.006C658.801 52.453 659.27 53.347 658.817 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M704.817 54.002L698.806 62.685C698.255 63.48 697.008 63.091 697.008 62.123V56.4H691.983C691.187 56.4 690.718 55.506 691.172 54.851L697.183 46.168C697.734 45.373 698.981 45.762 698.981 46.73V52.453H704.006C704.801 52.453 705.27 53.347 704.817 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M750.817 54.002L744.806 62.685C744.255 63.48 743.008 63.091 743.008 62.123V56.4H737.983C737.187 56.4 736.718 55.506 737.172 54.851L743.183 46.168C743.734 45.373 744.981 45.762 744.981 46.73V52.453H750.006C750.801 52.453 751.27 53.347 750.817 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M796.817 54.002L790.806 62.685C790.255 63.48 789.008 63.091 789.008 62.123V56.4H783.983C783.187 56.4 782.718 55.506 783.172 54.851L789.183 46.168C789.734 45.373 790.981 45.762 790.981 46.73V52.453H796.006C796.801 52.453 797.27 53.347 796.817 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M842.817 54.002L836.806 62.685C836.255 63.48 835.008 63.091 835.008 62.123V56.4H829.983C829.187 56.4 828.718 55.506 829.172 54.851L835.183 46.168C835.734 45.373 836.981 45.762 836.981 46.73V52.453H842.006C842.801 52.453 843.27 53.347 842.817 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M888.815 54.002L882.804 62.685C882.253 63.48 881.006 63.091 881.006 62.123V56.4H875.981C875.185 56.4 874.716 55.506 875.17 54.851L881.181 46.168C881.732 45.373 882.979 45.762 882.979 46.73V52.453H888.004C888.799 52.453 889.268 53.347 888.815 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M934.815 54.002L928.804 62.685C928.253 63.48 927.006 63.091 927.006 62.123V56.4H921.981C921.185 56.4 920.716 55.506 921.17 54.851L927.181 46.168C927.732 45.373 928.979 45.762 928.979 46.73V52.453H934.004C934.799 52.453 935.268 53.347 934.815 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M980.815 54.002L974.804 62.685C974.253 63.48 973.006 63.091 973.006 62.123V56.4H967.981C967.185 56.4 966.716 55.506 967.17 54.851L973.181 46.168C973.732 45.373 974.979 45.762 974.979 46.73V52.453H980.004C980.799 52.453 981.268 53.347 980.815 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1026.81 54.002L1020.8 62.685C1020.25 63.48 1019.01 63.091 1019.01 62.123V56.4H1013.98C1013.18 56.4 1012.72 55.506 1013.17 54.851L1019.18 46.168C1019.73 45.373 1020.98 45.762 1020.98 46.73V52.453H1026C1026.8 52.453 1027.27 53.347 1026.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1072.81 54.002L1066.8 62.685C1066.25 63.48 1065.01 63.091 1065.01 62.123V56.4H1059.98C1059.18 56.4 1058.72 55.506 1059.17 54.851L1065.18 46.168C1065.73 45.373 1066.98 45.762 1066.98 46.73V52.453H1072C1072.8 52.453 1073.27 53.347 1072.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1118.81 54.002L1112.8 62.685C1112.25 63.48 1111.01 63.091 1111.01 62.123V56.4H1105.98C1105.18 56.4 1104.72 55.506 1105.17 54.851L1111.18 46.168C1111.73 45.373 1112.98 45.762 1112.98 46.73V52.453H1118C1118.8 52.453 1119.27 53.347 1118.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1164.81 54.002L1158.8 62.685C1158.25 63.48 1157 63.091 1157 62.123V56.4H1151.98C1151.18 56.4 1150.71 55.506 1151.17 54.851L1157.18 46.168C1157.73 45.373 1158.98 45.762 1158.98 46.73V52.453H1164C1164.8 52.453 1165.27 53.347 1164.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1210.81 54.002L1204.8 62.685C1204.25 63.48 1203 63.091 1203 62.123V56.4H1197.98C1197.18 56.4 1196.71 55.506 1197.17 54.851L1203.18 46.168C1203.73 45.373 1204.98 45.762 1204.98 46.73V52.453H1210C1210.8 52.453 1211.27 53.347 1210.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1256.81 54.002L1250.8 62.685C1250.25 63.48 1249 63.091 1249 62.123V56.4H1243.98C1243.18 56.4 1242.71 55.506 1243.17 54.851L1249.18 46.168C1249.73 45.373 1250.98 45.762 1250.98 46.73V52.453H1256C1256.8 52.453 1257.27 53.347 1256.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1302.81 54.002L1296.8 62.685C1296.25 63.48 1295 63.091 1295 62.123V56.4H1289.98C1289.18 56.4 1288.71 55.506 1289.17 54.851L1295.18 46.168C1295.73 45.373 1296.98 45.762 1296.98 46.73V52.453H1302C1302.8 52.453 1303.27 53.347 1302.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1348.81 54.002L1342.8 62.685C1342.25 63.48 1341 63.091 1341 62.123V56.4H1335.98C1335.18 56.4 1334.71 55.506 1335.17 54.851L1341.18 46.168C1341.73 45.373 1342.98 45.762 1342.98 46.73V52.453H1348C1348.8 52.453 1349.27 53.347 1348.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1394.81 54.002L1388.8 62.685C1388.25 63.48 1387 63.091 1387 62.123V56.4H1381.98C1381.18 56.4 1380.71 55.506 1381.17 54.851L1387.18 46.168C1387.73 45.373 1388.97 45.762 1388.97 46.73V52.453H1394C1394.79 52.453 1395.26 53.347 1394.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1440.81 54.002L1434.8 62.685C1434.25 63.48 1433 63.091 1433 62.123V56.4H1427.98C1427.18 56.4 1426.71 55.506 1427.17 54.851L1433.18 46.168C1433.73 45.373 1434.97 45.762 1434.97 46.73V52.453H1440C1440.79 52.453 1441.26 53.347 1440.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1486.81 54.002L1480.8 62.685C1480.25 63.48 1479 63.091 1479 62.123V56.4H1473.98C1473.18 56.4 1472.71 55.506 1473.17 54.851L1479.18 46.168C1479.73 45.373 1480.97 45.762 1480.97 46.73V52.453H1486C1486.79 52.453 1487.26 53.347 1486.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1532.81 54.002L1526.8 62.685C1526.25 63.48 1525 63.091 1525 62.123V56.4H1519.98C1519.18 56.4 1518.71 55.506 1519.17 54.851L1525.18 46.168C1525.73 45.373 1526.97 45.762 1526.97 46.73V52.453H1532C1532.79 52.453 1533.26 53.347 1532.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1578.81 54.002L1572.8 62.685C1572.25 63.48 1571 63.091 1571 62.123V56.4H1565.98C1565.18 56.4 1564.71 55.506 1565.17 54.851L1571.18 46.168C1571.73 45.373 1572.97 45.762 1572.97 46.73V52.453H1578C1578.79 52.453 1579.26 53.347 1578.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1624.81 54.002L1618.8 62.685C1618.25 63.48 1617 63.091 1617 62.123V56.4H1611.97C1611.18 56.4 1610.71 55.506 1611.16 54.851L1617.17 46.168C1617.73 45.373 1618.97 45.762 1618.97 46.73V52.453H1624C1624.79 52.453 1625.26 53.347 1624.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1670.81 54.002L1664.8 62.685C1664.25 63.48 1663 63.091 1663 62.123V56.4H1657.97C1657.18 56.4 1656.71 55.506 1657.16 54.851L1663.17 46.168C1663.73 45.373 1664.97 45.762 1664.97 46.73V52.453H1670C1670.79 52.453 1671.26 53.347 1670.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1716.81 54.002L1710.8 62.685C1710.25 63.48 1709 63.091 1709 62.123V56.4H1703.97C1703.18 56.4 1702.71 55.506 1703.16 54.851L1709.17 46.168C1709.73 45.373 1710.97 45.762 1710.97 46.73V52.453H1716C1716.79 52.453 1717.26 53.347 1716.81 54.002Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M14.8226 103.373L8.81161 112.056C8.26061 112.851 7.01361 112.462 7.01361 111.494V105.771H1.98861C1.19261 105.771 0.723612 104.877 1.17761 104.222L7.18861 95.5389C7.73961 94.7439 8.98661 95.1329 8.98661 96.1009V101.824H14.0116C14.8066 101.824 15.2756 102.718 14.8226 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M60.8226 103.373L54.8116 112.056C54.2606 112.851 53.0136 112.462 53.0136 111.494V105.771H47.9886C47.1926 105.771 46.7236 104.877 47.1776 104.222L53.1886 95.5389C53.7396 94.7439 54.9866 95.1329 54.9866 96.1009V101.824H60.0116C60.8066 101.824 61.2756 102.718 60.8226 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M106.823 103.373L100.812 112.056C100.261 112.851 99.0136 112.462 99.0136 111.494V105.771H93.9886C93.1926 105.771 92.7236 104.877 93.1776 104.222L99.1886 95.5389C99.7396 94.7439 100.987 95.1329 100.987 96.1009V101.824H106.012C106.807 101.824 107.276 102.718 106.823 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M152.821 103.373L146.81 112.056C146.259 112.851 145.012 112.462 145.012 111.494V105.771H139.987C139.191 105.771 138.722 104.877 139.176 104.222L145.187 95.5389C145.738 94.7439 146.985 95.1329 146.985 96.1009V101.824H152.01C152.805 101.824 153.274 102.718 152.821 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M198.821 103.373L192.81 112.056C192.259 112.851 191.012 112.462 191.012 111.494V105.771H185.987C185.191 105.771 184.722 104.877 185.176 104.222L191.187 95.5389C191.738 94.7439 192.985 95.1329 192.985 96.1009V101.824H198.01C198.805 101.824 199.274 102.718 198.821 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M244.821 103.373L238.81 112.056C238.259 112.851 237.012 112.462 237.012 111.494V105.771H231.987C231.191 105.771 230.722 104.877 231.176 104.222L237.187 95.5389C237.738 94.7439 238.985 95.1329 238.985 96.1009V101.824H244.01C244.805 101.824 245.274 102.718 244.821 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M290.821 103.373L284.81 112.056C284.259 112.851 283.012 112.462 283.012 111.494V105.771H277.987C277.191 105.771 276.722 104.877 277.176 104.222L283.187 95.5389C283.738 94.7439 284.985 95.1329 284.985 96.1009V101.824H290.01C290.805 101.824 291.274 102.718 290.821 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M336.821 103.373L330.81 112.056C330.259 112.851 329.012 112.462 329.012 111.494V105.771H323.987C323.191 105.771 322.722 104.877 323.176 104.222L329.187 95.5389C329.738 94.7439 330.985 95.1329 330.985 96.1009V101.824H336.01C336.805 101.824 337.274 102.718 336.821 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M382.819 103.373L376.808 112.056C376.257 112.851 375.01 112.462 375.01 111.494V105.771H369.985C369.189 105.771 368.72 104.877 369.174 104.222L375.185 95.5389C375.736 94.7439 376.983 95.1329 376.983 96.1009V101.824H382.008C382.803 101.824 383.272 102.718 382.819 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M428.819 103.373L422.808 112.056C422.257 112.851 421.01 112.462 421.01 111.494V105.771H415.985C415.189 105.771 414.72 104.877 415.174 104.222L421.185 95.5389C421.736 94.7439 422.983 95.1329 422.983 96.1009V101.824H428.008C428.803 101.824 429.272 102.718 428.819 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M474.819 103.373L468.808 112.056C468.257 112.851 467.01 112.462 467.01 111.494V105.771H461.985C461.189 105.771 460.72 104.877 461.174 104.222L467.185 95.5389C467.736 94.7439 468.983 95.1329 468.983 96.1009V101.824H474.008C474.803 101.824 475.272 102.718 474.819 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M520.819 103.373L514.808 112.056C514.257 112.851 513.01 112.462 513.01 111.494V105.771H507.985C507.189 105.771 506.72 104.877 507.174 104.222L513.185 95.5389C513.736 94.7439 514.983 95.1329 514.983 96.1009V101.824H520.008C520.803 101.824 521.272 102.718 520.819 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M566.819 103.373L560.808 112.056C560.257 112.851 559.01 112.462 559.01 111.494V105.771H553.985C553.189 105.771 552.72 104.877 553.174 104.222L559.185 95.5389C559.736 94.7439 560.983 95.1329 560.983 96.1009V101.824H566.008C566.803 101.824 567.272 102.718 566.819 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M612.819 103.373L606.808 112.056C606.257 112.851 605.01 112.462 605.01 111.494V105.771H599.985C599.189 105.771 598.72 104.877 599.174 104.222L605.185 95.5389C605.736 94.7439 606.983 95.1329 606.983 96.1009V101.824H612.008C612.803 101.824 613.272 102.718 612.819 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M658.817 103.373L652.806 112.056C652.255 112.851 651.008 112.462 651.008 111.494V105.771H645.983C645.187 105.771 644.718 104.877 645.172 104.222L651.183 95.5389C651.734 94.7439 652.981 95.1329 652.981 96.1009V101.824H658.006C658.801 101.824 659.27 102.718 658.817 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M704.817 103.373L698.806 112.056C698.255 112.851 697.008 112.462 697.008 111.494V105.771H691.983C691.187 105.771 690.718 104.877 691.172 104.222L697.183 95.5389C697.734 94.7439 698.981 95.1329 698.981 96.1009V101.824H704.006C704.801 101.824 705.27 102.718 704.817 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M750.817 103.373L744.806 112.056C744.255 112.851 743.008 112.462 743.008 111.494V105.771H737.983C737.187 105.771 736.718 104.877 737.172 104.222L743.183 95.5389C743.734 94.7439 744.981 95.1329 744.981 96.1009V101.824H750.006C750.801 101.824 751.27 102.718 750.817 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M796.817 103.373L790.806 112.056C790.255 112.851 789.008 112.462 789.008 111.494V105.771H783.983C783.187 105.771 782.718 104.877 783.172 104.222L789.183 95.5389C789.734 94.7439 790.981 95.1329 790.981 96.1009V101.824H796.006C796.801 101.824 797.27 102.718 796.817 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M842.817 103.373L836.806 112.056C836.255 112.851 835.008 112.462 835.008 111.494V105.771H829.983C829.187 105.771 828.718 104.877 829.172 104.222L835.183 95.5389C835.734 94.7439 836.981 95.1329 836.981 96.1009V101.824H842.006C842.801 101.824 843.27 102.718 842.817 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M888.815 103.373L882.804 112.056C882.253 112.851 881.006 112.462 881.006 111.494V105.771H875.981C875.185 105.771 874.716 104.877 875.17 104.222L881.181 95.5389C881.732 94.7439 882.979 95.1329 882.979 96.1009V101.824H888.004C888.799 101.824 889.268 102.718 888.815 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M934.815 103.373L928.804 112.056C928.253 112.851 927.006 112.462 927.006 111.494V105.771H921.981C921.185 105.771 920.716 104.877 921.17 104.222L927.181 95.5389C927.732 94.7439 928.979 95.1329 928.979 96.1009V101.824H934.004C934.799 101.824 935.268 102.718 934.815 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M980.815 103.373L974.804 112.056C974.253 112.851 973.006 112.462 973.006 111.494V105.771H967.981C967.185 105.771 966.716 104.877 967.17 104.222L973.181 95.5389C973.732 94.7439 974.979 95.1329 974.979 96.1009V101.824H980.004C980.799 101.824 981.268 102.718 980.815 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1026.81 103.373L1020.8 112.056C1020.25 112.851 1019.01 112.462 1019.01 111.494V105.771H1013.98C1013.18 105.771 1012.72 104.877 1013.17 104.222L1019.18 95.5389C1019.73 94.7439 1020.98 95.1329 1020.98 96.1009V101.824H1026C1026.8 101.824 1027.27 102.718 1026.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1072.81 103.373L1066.8 112.056C1066.25 112.851 1065.01 112.462 1065.01 111.494V105.771H1059.98C1059.18 105.771 1058.72 104.877 1059.17 104.222L1065.18 95.5389C1065.73 94.7439 1066.98 95.1329 1066.98 96.1009V101.824H1072C1072.8 101.824 1073.27 102.718 1072.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1118.81 103.373L1112.8 112.056C1112.25 112.851 1111.01 112.462 1111.01 111.494V105.771H1105.98C1105.18 105.771 1104.72 104.877 1105.17 104.222L1111.18 95.5389C1111.73 94.7439 1112.98 95.1329 1112.98 96.1009V101.824H1118C1118.8 101.824 1119.27 102.718 1118.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1164.81 103.373L1158.8 112.056C1158.25 112.851 1157 112.462 1157 111.494V105.771H1151.98C1151.18 105.771 1150.71 104.877 1151.17 104.222L1157.18 95.5389C1157.73 94.7439 1158.98 95.1329 1158.98 96.1009V101.824H1164C1164.8 101.824 1165.27 102.718 1164.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1210.81 103.373L1204.8 112.056C1204.25 112.851 1203 112.462 1203 111.494V105.771H1197.98C1197.18 105.771 1196.71 104.877 1197.17 104.222L1203.18 95.5389C1203.73 94.7439 1204.98 95.1329 1204.98 96.1009V101.824H1210C1210.8 101.824 1211.27 102.718 1210.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1256.81 103.373L1250.8 112.056C1250.25 112.851 1249 112.462 1249 111.494V105.771H1243.98C1243.18 105.771 1242.71 104.877 1243.17 104.222L1249.18 95.5389C1249.73 94.7439 1250.98 95.1329 1250.98 96.1009V101.824H1256C1256.8 101.824 1257.27 102.718 1256.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1302.81 103.373L1296.8 112.056C1296.25 112.851 1295 112.462 1295 111.494V105.771H1289.98C1289.18 105.771 1288.71 104.877 1289.17 104.222L1295.18 95.5389C1295.73 94.7439 1296.98 95.1329 1296.98 96.1009V101.824H1302C1302.8 101.824 1303.27 102.718 1302.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1348.81 103.373L1342.8 112.056C1342.25 112.851 1341 112.462 1341 111.494V105.771H1335.98C1335.18 105.771 1334.71 104.877 1335.17 104.222L1341.18 95.5389C1341.73 94.7439 1342.98 95.1329 1342.98 96.1009V101.824H1348C1348.8 101.824 1349.27 102.718 1348.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1394.81 103.373L1388.8 112.056C1388.25 112.851 1387 112.462 1387 111.494V105.771H1381.98C1381.18 105.771 1380.71 104.877 1381.17 104.222L1387.18 95.5389C1387.73 94.7439 1388.97 95.1329 1388.97 96.1009V101.824H1394C1394.79 101.824 1395.26 102.718 1394.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1440.81 103.373L1434.8 112.056C1434.25 112.851 1433 112.462 1433 111.494V105.771H1427.98C1427.18 105.771 1426.71 104.877 1427.17 104.222L1433.18 95.5389C1433.73 94.7439 1434.97 95.1329 1434.97 96.1009V101.824H1440C1440.79 101.824 1441.26 102.718 1440.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1486.81 103.373L1480.8 112.056C1480.25 112.851 1479 112.462 1479 111.494V105.771H1473.98C1473.18 105.771 1472.71 104.877 1473.17 104.222L1479.18 95.5389C1479.73 94.7439 1480.97 95.1329 1480.97 96.1009V101.824H1486C1486.79 101.824 1487.26 102.718 1486.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1532.81 103.373L1526.8 112.056C1526.25 112.851 1525 112.462 1525 111.494V105.771H1519.98C1519.18 105.771 1518.71 104.877 1519.17 104.222L1525.18 95.5389C1525.73 94.7439 1526.97 95.1329 1526.97 96.1009V101.824H1532C1532.79 101.824 1533.26 102.718 1532.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1578.81 103.373L1572.8 112.056C1572.25 112.851 1571 112.462 1571 111.494V105.771H1565.98C1565.18 105.771 1564.71 104.877 1565.17 104.222L1571.18 95.5389C1571.73 94.7439 1572.97 95.1329 1572.97 96.1009V101.824H1578C1578.79 101.824 1579.26 102.718 1578.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1624.81 103.373L1618.8 112.056C1618.25 112.851 1617 112.462 1617 111.494V105.771H1611.97C1611.18 105.771 1610.71 104.877 1611.16 104.222L1617.17 95.5389C1617.73 94.7439 1618.97 95.1329 1618.97 96.1009V101.824H1624C1624.79 101.824 1625.26 102.718 1624.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1670.81 103.373L1664.8 112.056C1664.25 112.851 1663 112.462 1663 111.494V105.771H1657.97C1657.18 105.771 1656.71 104.877 1657.16 104.222L1663.17 95.5389C1663.73 94.7439 1664.97 95.1329 1664.97 96.1009V101.824H1670C1670.79 101.824 1671.26 102.718 1670.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1716.81 103.373L1710.8 112.056C1710.25 112.851 1709 112.462 1709 111.494V105.771H1703.97C1703.18 105.771 1702.71 104.877 1703.16 104.222L1709.17 95.5389C1709.73 94.7439 1710.97 95.1329 1710.97 96.1009V101.824H1716C1716.79 101.824 1717.26 102.718 1716.81 103.373Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M14.8226 152.743L8.81161 161.426C8.26061 162.221 7.01361 161.832 7.01361 160.864V155.141H1.98861C1.19261 155.141 0.723612 154.247 1.17761 153.592L7.18861 144.909C7.73961 144.114 8.98661 144.503 8.98661 145.471V151.194H14.0116C14.8066 151.194 15.2756 152.088 14.8226 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M60.8226 152.743L54.8116 161.426C54.2606 162.221 53.0136 161.832 53.0136 160.864V155.141H47.9886C47.1926 155.141 46.7236 154.247 47.1776 153.592L53.1886 144.909C53.7396 144.114 54.9866 144.503 54.9866 145.471V151.194H60.0116C60.8066 151.194 61.2756 152.088 60.8226 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M106.823 152.743L100.812 161.426C100.261 162.221 99.0136 161.832 99.0136 160.864V155.141H93.9886C93.1926 155.141 92.7236 154.247 93.1776 153.592L99.1886 144.909C99.7396 144.114 100.987 144.503 100.987 145.471V151.194H106.012C106.807 151.194 107.276 152.088 106.823 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M152.821 152.743L146.81 161.426C146.259 162.221 145.012 161.832 145.012 160.864V155.141H139.987C139.191 155.141 138.722 154.247 139.176 153.592L145.187 144.909C145.738 144.114 146.985 144.503 146.985 145.471V151.194H152.01C152.805 151.194 153.274 152.088 152.821 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M198.821 152.743L192.81 161.426C192.259 162.221 191.012 161.832 191.012 160.864V155.141H185.987C185.191 155.141 184.722 154.247 185.176 153.592L191.187 144.909C191.738 144.114 192.985 144.503 192.985 145.471V151.194H198.01C198.805 151.194 199.274 152.088 198.821 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M244.821 152.743L238.81 161.426C238.259 162.221 237.012 161.832 237.012 160.864V155.141H231.987C231.191 155.141 230.722 154.247 231.176 153.592L237.187 144.909C237.738 144.114 238.985 144.503 238.985 145.471V151.194H244.01C244.805 151.194 245.274 152.088 244.821 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M290.821 152.743L284.81 161.426C284.259 162.221 283.012 161.832 283.012 160.864V155.141H277.987C277.191 155.141 276.722 154.247 277.176 153.592L283.187 144.909C283.738 144.114 284.985 144.503 284.985 145.471V151.194H290.01C290.805 151.194 291.274 152.088 290.821 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M336.821 152.743L330.81 161.426C330.259 162.221 329.012 161.832 329.012 160.864V155.141H323.987C323.191 155.141 322.722 154.247 323.176 153.592L329.187 144.909C329.738 144.114 330.985 144.503 330.985 145.471V151.194H336.01C336.805 151.194 337.274 152.088 336.821 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M382.819 152.743L376.808 161.426C376.257 162.221 375.01 161.832 375.01 160.864V155.141H369.985C369.189 155.141 368.72 154.247 369.174 153.592L375.185 144.909C375.736 144.114 376.983 144.503 376.983 145.471V151.194H382.008C382.803 151.194 383.272 152.088 382.819 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M428.819 152.743L422.808 161.426C422.257 162.221 421.01 161.832 421.01 160.864V155.141H415.985C415.189 155.141 414.72 154.247 415.174 153.592L421.185 144.909C421.736 144.114 422.983 144.503 422.983 145.471V151.194H428.008C428.803 151.194 429.272 152.088 428.819 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M474.819 152.743L468.808 161.426C468.257 162.221 467.01 161.832 467.01 160.864V155.141H461.985C461.189 155.141 460.72 154.247 461.174 153.592L467.185 144.909C467.736 144.114 468.983 144.503 468.983 145.471V151.194H474.008C474.803 151.194 475.272 152.088 474.819 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M520.819 152.743L514.808 161.426C514.257 162.221 513.01 161.832 513.01 160.864V155.141H507.985C507.189 155.141 506.72 154.247 507.174 153.592L513.185 144.909C513.736 144.114 514.983 144.503 514.983 145.471V151.194H520.008C520.803 151.194 521.272 152.088 520.819 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M566.819 152.743L560.808 161.426C560.257 162.221 559.01 161.832 559.01 160.864V155.141H553.985C553.189 155.141 552.72 154.247 553.174 153.592L559.185 144.909C559.736 144.114 560.983 144.503 560.983 145.471V151.194H566.008C566.803 151.194 567.272 152.088 566.819 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M612.819 152.743L606.808 161.426C606.257 162.221 605.01 161.832 605.01 160.864V155.141H599.985C599.189 155.141 598.72 154.247 599.174 153.592L605.185 144.909C605.736 144.114 606.983 144.503 606.983 145.471V151.194H612.008C612.803 151.194 613.272 152.088 612.819 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M658.817 152.743L652.806 161.426C652.255 162.221 651.008 161.832 651.008 160.864V155.141H645.983C645.187 155.141 644.718 154.247 645.172 153.592L651.183 144.909C651.734 144.114 652.981 144.503 652.981 145.471V151.194H658.006C658.801 151.194 659.27 152.088 658.817 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M704.817 152.743L698.806 161.426C698.255 162.221 697.008 161.832 697.008 160.864V155.141H691.983C691.187 155.141 690.718 154.247 691.172 153.592L697.183 144.909C697.734 144.114 698.981 144.503 698.981 145.471V151.194H704.006C704.801 151.194 705.27 152.088 704.817 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M750.817 152.743L744.806 161.426C744.255 162.221 743.008 161.832 743.008 160.864V155.141H737.983C737.187 155.141 736.718 154.247 737.172 153.592L743.183 144.909C743.734 144.114 744.981 144.503 744.981 145.471V151.194H750.006C750.801 151.194 751.27 152.088 750.817 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M796.817 152.743L790.806 161.426C790.255 162.221 789.008 161.832 789.008 160.864V155.141H783.983C783.187 155.141 782.718 154.247 783.172 153.592L789.183 144.909C789.734 144.114 790.981 144.503 790.981 145.471V151.194H796.006C796.801 151.194 797.27 152.088 796.817 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M842.817 152.743L836.806 161.426C836.255 162.221 835.008 161.832 835.008 160.864V155.141H829.983C829.187 155.141 828.718 154.247 829.172 153.592L835.183 144.909C835.734 144.114 836.981 144.503 836.981 145.471V151.194H842.006C842.801 151.194 843.27 152.088 842.817 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M888.815 152.743L882.804 161.426C882.253 162.221 881.006 161.832 881.006 160.864V155.141H875.981C875.185 155.141 874.716 154.247 875.17 153.592L881.181 144.909C881.732 144.114 882.979 144.503 882.979 145.471V151.194H888.004C888.799 151.194 889.268 152.088 888.815 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M934.815 152.743L928.804 161.426C928.253 162.221 927.006 161.832 927.006 160.864V155.141H921.981C921.185 155.141 920.716 154.247 921.17 153.592L927.181 144.909C927.732 144.114 928.979 144.503 928.979 145.471V151.194H934.004C934.799 151.194 935.268 152.088 934.815 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M980.815 152.743L974.804 161.426C974.253 162.221 973.006 161.832 973.006 160.864V155.141H967.981C967.185 155.141 966.716 154.247 967.17 153.592L973.181 144.909C973.732 144.114 974.979 144.503 974.979 145.471V151.194H980.004C980.799 151.194 981.268 152.088 980.815 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1026.81 152.743L1020.8 161.426C1020.25 162.221 1019.01 161.832 1019.01 160.864V155.141H1013.98C1013.18 155.141 1012.72 154.247 1013.17 153.592L1019.18 144.909C1019.73 144.114 1020.98 144.503 1020.98 145.471V151.194H1026C1026.8 151.194 1027.27 152.088 1026.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1072.81 152.743L1066.8 161.426C1066.25 162.221 1065.01 161.832 1065.01 160.864V155.141H1059.98C1059.18 155.141 1058.72 154.247 1059.17 153.592L1065.18 144.909C1065.73 144.114 1066.98 144.503 1066.98 145.471V151.194H1072C1072.8 151.194 1073.27 152.088 1072.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1118.81 152.743L1112.8 161.426C1112.25 162.221 1111.01 161.832 1111.01 160.864V155.141H1105.98C1105.18 155.141 1104.72 154.247 1105.17 153.592L1111.18 144.909C1111.73 144.114 1112.98 144.503 1112.98 145.471V151.194H1118C1118.8 151.194 1119.27 152.088 1118.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1164.81 152.743L1158.8 161.426C1158.25 162.221 1157 161.832 1157 160.864V155.141H1151.98C1151.18 155.141 1150.71 154.247 1151.17 153.592L1157.18 144.909C1157.73 144.114 1158.98 144.503 1158.98 145.471V151.194H1164C1164.8 151.194 1165.27 152.088 1164.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1210.81 152.743L1204.8 161.426C1204.25 162.221 1203 161.832 1203 160.864V155.141H1197.98C1197.18 155.141 1196.71 154.247 1197.17 153.592L1203.18 144.909C1203.73 144.114 1204.98 144.503 1204.98 145.471V151.194H1210C1210.8 151.194 1211.27 152.088 1210.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1256.81 152.743L1250.8 161.426C1250.25 162.221 1249 161.832 1249 160.864V155.141H1243.98C1243.18 155.141 1242.71 154.247 1243.17 153.592L1249.18 144.909C1249.73 144.114 1250.98 144.503 1250.98 145.471V151.194H1256C1256.8 151.194 1257.27 152.088 1256.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1302.81 152.743L1296.8 161.426C1296.25 162.221 1295 161.832 1295 160.864V155.141H1289.98C1289.18 155.141 1288.71 154.247 1289.17 153.592L1295.18 144.909C1295.73 144.114 1296.98 144.503 1296.98 145.471V151.194H1302C1302.8 151.194 1303.27 152.088 1302.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1348.81 152.743L1342.8 161.426C1342.25 162.221 1341 161.832 1341 160.864V155.141H1335.98C1335.18 155.141 1334.71 154.247 1335.17 153.592L1341.18 144.909C1341.73 144.114 1342.98 144.503 1342.98 145.471V151.194H1348C1348.8 151.194 1349.27 152.088 1348.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1394.81 152.743L1388.8 161.426C1388.25 162.221 1387 161.832 1387 160.864V155.141H1381.98C1381.18 155.141 1380.71 154.247 1381.17 153.592L1387.18 144.909C1387.73 144.114 1388.97 144.503 1388.97 145.471V151.194H1394C1394.79 151.194 1395.26 152.088 1394.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1440.81 152.743L1434.8 161.426C1434.25 162.221 1433 161.832 1433 160.864V155.141H1427.98C1427.18 155.141 1426.71 154.247 1427.17 153.592L1433.18 144.909C1433.73 144.114 1434.97 144.503 1434.97 145.471V151.194H1440C1440.79 151.194 1441.26 152.088 1440.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1486.81 152.743L1480.8 161.426C1480.25 162.221 1479 161.832 1479 160.864V155.141H1473.98C1473.18 155.141 1472.71 154.247 1473.17 153.592L1479.18 144.909C1479.73 144.114 1480.97 144.503 1480.97 145.471V151.194H1486C1486.79 151.194 1487.26 152.088 1486.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1532.81 152.743L1526.8 161.426C1526.25 162.221 1525 161.832 1525 160.864V155.141H1519.98C1519.18 155.141 1518.71 154.247 1519.17 153.592L1525.18 144.909C1525.73 144.114 1526.97 144.503 1526.97 145.471V151.194H1532C1532.79 151.194 1533.26 152.088 1532.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1578.81 152.743L1572.8 161.426C1572.25 162.221 1571 161.832 1571 160.864V155.141H1565.98C1565.18 155.141 1564.71 154.247 1565.17 153.592L1571.18 144.909C1571.73 144.114 1572.97 144.503 1572.97 145.471V151.194H1578C1578.79 151.194 1579.26 152.088 1578.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1624.81 152.743L1618.8 161.426C1618.25 162.221 1617 161.832 1617 160.864V155.141H1611.97C1611.18 155.141 1610.71 154.247 1611.16 153.592L1617.17 144.909C1617.73 144.114 1618.97 144.503 1618.97 145.471V151.194H1624C1624.79 151.194 1625.26 152.088 1624.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1670.81 152.743L1664.8 161.426C1664.25 162.221 1663 161.832 1663 160.864V155.141H1657.97C1657.18 155.141 1656.71 154.247 1657.16 153.592L1663.17 144.909C1663.73 144.114 1664.97 144.503 1664.97 145.471V151.194H1670C1670.79 151.194 1671.26 152.088 1670.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1716.81 152.743L1710.8 161.426C1710.25 162.221 1709 161.832 1709 160.864V155.141H1703.97C1703.18 155.141 1702.71 154.247 1703.16 153.592L1709.17 144.909C1709.73 144.114 1710.97 144.503 1710.97 145.471V151.194H1716C1716.79 151.194 1717.26 152.088 1716.81 152.743Z"
									stroke="#F69F00"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>

						<div className="block absolute bg-gradient-radial w-full h-full top-0 "></div>

						<div className="mb-24">
							<span className="block caps2-semibold text-white/70">#13123</span>
							<p className="title3 text-white">Bruno Siqueira</p>
						</div>

						<div className="flex gap-32">
							<div>
								<span className="block caps2-semibold text-white/70">CEP</span>
								<p className="paragraph1 text-white">17290-000</p>
							</div>

							<div>
								<span className="block caps2-semibold text-white/70">
									ENDEREÇO
								</span>
								<p className="paragraph1 text-white">Rua Rubens Guimarães</p>
							</div>
						</div>
					</div>

					<div className="w-full bg-white flex md:flex-col !rounded-lg translate-y-2 overflow-hidden">
						<div className="relative flex-1 p-24 border border-transparent border-b-neutral-100-10 border-r-neutral-100-10">
							<span className="block caps2-semibold text-neutral-70">NOME</span>
							<p className="paragraph1 text-neutral-100">Bruno Siqueira</p>
						</div>

						<div className="relative flex-1 p-24 border border-transparent border-b-neutral-100-10 border-r-neutral-100-10">
							<span className="block caps2-semibold text-neutral-70">
								E-MAIL
							</span>
							<p className="paragraph1 text-neutral-100">
								projetointegrador792@gmail.com
							</p>
						</div>

						<div className="relative flex-1 p-24 border border-transparent border-b-neutral-100-10 border-r-neutral-100-10">
							<span className="block caps2-semibold text-neutral-70">
								CELULAR
							</span>
							<p className="paragraph1 text-neutral-100">(87) 99865 4898</p>
						</div>

						<div className="relative flex-1 p-24 border border-transparent border-b-neutral-100-10 border-r-neutral-100-10">
							<span className="block caps2-semibold text-neutral-70">TIPO</span>
							<p className="paragraph1 text-neutral-100">Empresa </p>
						</div>

						<div className="relative flex-1 p-24 border border-transparent border-b-neutral-100-10 border-r-neutral-100-10">
							<span className="block caps2-semibold text-neutral-70">
								CONSUMO MÉDIO R$
							</span>
							<p className="paragraph1 text-neutral-100">R$ 1.587,05</p>
						</div>

						<div className="relative flex-1 p-24 border border-transparent border-b-neutral-100-10">
							<span className="block caps2-semibold text-neutral-70">
								CONSUMO MÉDIO KHW
							</span>
							<p className="paragraph1 text-neutral-100">10.548 kHw</p>
						</div>
					</div>
				</section>

				<Card classe="p-24 md2:mx-0">
					<div className="flex items-center gap-8 mb-32">
						<SvgUse id="#icon_chart_ms" classe="w-24 h-24" />
						<h3 className="title3">Gráfico de Consumo</h3>
					</div>

					<Charts options={options} series={series} type="bar" height={300} />
				</Card>

				<Card classe="p-24 md2:mx-0">
					<div className="flex justify-between items-center md:flex-col md:!items-start">
						<div className="flex items-center gap-8 mb-32 md:mb-16">
							<SvgUse id="#icon_clock_ms" classe="w-24 h-24" />
							<h3 className="title3">Status do pedido</h3>
						</div>

						<div className="flex md:mb-32">
							<p className="flex items-center gap-4 mr-16">
								<span className="w-10 h-10 rounded-full bg-neutral-70"></span>{" "}
								Agendadas
							</p>
							<p className="flex items-center gap-4">
								<span className="w-10 h-10 rounded-full bg-alert-success"></span>{" "}
								Realizadas
							</p>
						</div>
					</div>

					<div className="md:overflow-x-auto">
					<div className="timeline-horizontal-container md:!w-max md:!justify-between relative overflow-x-auto">
						<div className="absolute top-0 md:top-4 w-full h-[6px] overflow-hidden rounded-md border border-neutral-100-10">
							<span className="block absolute top-0 left-0 w-full h-full bg-primary-pure"></span>
						</div>
						{/*  */}
						<div className="grid place-items-center">
							<span
								onMouseEnter={(e) => console.log(e)}
								className="point block absolute -top-[5px] md:!top-0  md:!top-0 border-2 border-primary-pure bg-white z-[99] w-18 h-18 rounded-full"
							></span>
							<p className="headline3">Orçamento</p>
							<p className="text-alert-success paragraph3">18/10/2022</p>
						</div>
						<div className="grid place-items-center">
							<span
								onMouseEnter={(e) => console.log(e)}
								className="point block absolute -top-[5px] md:!top-0  border-2 border-primary-pure bg-white z-[99] w-18 h-18 rounded-full"
							></span>
							<p className="headline3">Criação</p>
							<p className="text-alert-success paragraph3">18/10/2022</p>
						</div>

						<div className="grid place-items-center">
							<span
								onMouseEnter={(e) => console.log(e)}
								className="point block absolute -top-[5px] md:!top-0  border-2 border-primary-pure bg-white z-[99] w-18 h-18 rounded-full"
							></span>
							<p className="headline3">Primeiro Contato</p>
							<p className="text-alert-success paragraph3">
								{" "}
								<span className="text-neutral-70 paragraph3">16/10/2022</span> |
								18/10/2022
							</p>
						</div>

						<div className="grid place-items-center">
							<span
								onMouseEnter={(e) => console.log(e)}
								className="point block absolute -top-[5px] md:!top-0  border-2 border-primary-pure bg-white z-[99] w-18 h-18 rounded-full"
							></span>
							<p className="headline3">Visita Técnica</p>
							<p className="text-alert-success paragraph3">
								{" "}
								<span className="text-neutral-70 paragraph3">18/10/2022</span> |
								22/10/2022
							</p>
						</div>

						<div className="grid place-items-center">
							<span
								onMouseEnter={(e) => console.log(e)}
								className="point block absolute -top-[5px] md:!top-0  border-2 border-primary-pure bg-white z-[99] w-18 h-18 rounded-full"
							></span>
							<p className="headline3">Orçamento Disponibilizado</p>
							<p className="text-neutral-70 paragraph3">20/10/2022</p>
						</div>

						<div className="grid place-items-center">
							<span
								onMouseEnter={(e) => console.log(e)}
								className="point block absolute -top-[5px] md:!top-0  border-2 border-primary-pure bg-white z-[99] w-18 h-18 rounded-full"
							></span>
							<p className="headline3">Orçamento Aprovado</p>
							<p className="text-neutral-70 paragraph3">22/10/2022</p>
						</div>
					</div>
					</div>
				</Card>

				<Card classe="!mx-0">
					<div className=" shadow-sm tabs-container !bg-white rounded-md rounded-tl-16">
						<Tabs>
							<TabList >
								<Tab  prefix="tab" classID="dados_profissionais ">
									<SvgUse classe="!w-24 !h-24" id={"#icon_file_cursor_ms"} />
									Observações gerais
								</Tab>
								<Tab classID="dados_pessoais">
									<SvgUse classe="!w-24 !h-24" id={"#icon_gallery_photos"} />
									Galeria
								</Tab>
								<Tab classID="orcamento">
									<SvgUse classe="!w-24 !h-24" id={"#icon_dollar_ms2"} />
									Orçamento
								</Tab>
							</TabList>

							<TabPanel>
								<section className="p-24">
									<article className="grid grid-cols-3 gap-16 md:!grid-cols-1">
										<div className="p-24 headline1 rounded-md border border-neutral-100-10">
											Orientação solar
											<p className="paragraph2">O Sol se põe ao Leste</p>
										</div>
										<div className="p-24 headline1 flex  items-center rounded-md border border-neutral-100-10">
											<div className="flex-1">
												Latitude
												<p className="paragraph2">-22.5169783</p>
											</div>
											<div className="flex-1">
												Longitude
												<p className="paragraph2">-48.8484848</p>
											</div>
										</div>
										<div className="p-24 headline1 rounded-md border border-neutral-100-10">
											Observações
											<p className="paragraph2">O Sol se põe ao Leste</p>
										</div>
									</article>

									<article className="mt-24 p-24 rounded-md border border-neutral-100-10">
										<h3 className="title3 mb-24">Dados de contato</h3>
										<div className="flex md:!items-start md:flex-col gap-24 items-center mb-24">
											<label>
												Nome
												<Input
													classe="h-40 !bg-white !pl-10 !rounded-md"
													placeholder="Digite seu nome"
												/>
											</label>

											<label>
												Email
												<Input
													classe="h-40 !bg-white !pl-10 !rounded-md"
													placeholder="Digite seu e-mail"
												/>
											</label>

											<label>
												Celular
												<Input
													classe="h-40 !bg-white !pl-10 !rounded-md"
													placeholder="Digite seu Celular"
												/>
											</label>
										</div>

										<div className="w-full flex gap-8 justify-end">
											<Button classe="btn secondary">Cancelar</Button>
											<Button iconID="#icon_edit_ms">Salvar alterações</Button>
										</div>
									</article>
								</section>
							</TabPanel>

							<TabPanel>
								<section className="p-24 flex flex-col gap-48 select-none">
									{[0, 1, 2, 3].map((queue, i) => (
										<div>
											<p className="headline1 mb-16">Local da Instalação</p>
											<div className="flex md:flex-col gap-24">
												<div className="min-w-[275px] cursor-pointer relative w-[275px] h-[315px] border hover:brightness-95 transition-all border-dotted border-primary-pure rounded-md bg-primary-pure-10 flex flex-col items-center justify-center gap-16">
													<div className="w-40 h-40 rounded-md grid place-items-center bg-primary-pure/10">
														<SvgUse id="#icon_add_ms" classe="!w-20 !h-20" />
													</div>
													<p className="paragraph2">Adicionar nova foto</p>
													<input type="file" className="absolute w-full h-full left-0 top-0 opacity-0"/>
												</div>

												<Swiper
						
													spaceBetween={8}
													direction="horizontal"
													className="!h-[315px] w-full md:hidden block"
													slidesPerView={"auto"}
													touchStartPreventDefault={false}
													mousewheel
												>
													{[0, 1, 2, 3, 4, 5].map((card, i) => (
														<SwiperSlide className="!w-max">
															<div className="w-[275px] overflow-hidden h-[315px] border relative transition-all border-dotted border-primary-pure rounded-md bg-primary-pure-10 flex flex-col items-center justify-center">
																	<img src="https://github.com/brunoyottabyte.png" className=" w-full  h-[220px] object-cover" />
																	<div className="w-full bg-white !min-h-[96px] p-24 !h-[96px] flex gap-16 justify-center items-center">
																		<Button classe="btn secondary h-48 flex-1 justify-center">Download</Button>
																		<Button classe="btn flex-1 h-48 justify-center">Visualizar</Button>
																	</div>
															</div>
														</SwiperSlide>
													))}
												</Swiper>

												<Swiper
						
													spaceBetween={8}
													direction="vertical"
													className="!h-[400px] w-full hidden md:block"
													slidesPerView={"auto"}
													touchStartPreventDefault={false}
													mousewheel
												>
													{[0, 1, 2, 3, 4, 5].map((card, i) => (
														<SwiperSlide className="!h-max">
															<div className="w-[275px] overflow-hidden h-[315px] border relative transition-all border-dotted border-primary-pure rounded-md bg-primary-pure-10 flex flex-col items-center justify-center">
																	<img src="https://github.com/brunoyottabyte.png" className=" w-full  h-[220px] object-cover" />
																	<div className="w-full bg-white !min-h-[96px] p-24 !h-[96px] flex gap-16 justify-center items-center">
																		<Button classe="btn secondary h-48 flex-1 justify-center">Download</Button>
																		<Button classe="btn flex-1 h-48 justify-center">Visualizar</Button>
																	</div>
															</div>
														</SwiperSlide>
													))}
												</Swiper>
											</div>
										</div>
									))}
								</section>
							</TabPanel>

							<TabPanel>
								<section className="p-24 flex flex-col gap-24">
									{[0, 1].map((card, i) => (
										<div className="p-16 bg-neutral-10 rounded-md border border-neutral-100-10">
											<div className="flex md:flex-col md:gap-16 justify-between items-center mb-16">
												<p className="headline1">
													Orçamento <span className="text-neutral-100"></span>
												</p>
												<div className="flex md:px-16 md:!flex-wrap gap-12 items-center">
													<p className="headline2 md:w-full">
														Total:{" "}
														<span className="text-neutral-100">R$ 14.388</span>
													</p>
													<Button
														style={{ "--cor-1": "#E92C2C" }}
														iconID="#icon_close_ms"
														className="btn bg-alert-error-10-o hover:bg-alert-error-10-o hover:text-alert-error hover:border-alert-error border-transparent text-alert-error"
													>
														Reprovar
													</Button>
													<Button
														onClick={() => openModal("approved")}
														iconID="#icon_check_ms"
														className="btn bg-alert-success-10-0 hover:bg-alert-success-10-0 hover:text-alert-success hover:border-alert-success border-transparent text-alert-success"
													>
														Aprovar
													</Button>
												</div>
											</div>

											<div className=" bg-white rounded-md">
												{[0, 1].map((item, i) => (
													<div className="flex gap-12 relative p-16">
														<img
															className="w-[104px] h-[104px] rounded-md border border-neutral-100-10"
															src="https://github.com/brunoyottabyte.png"
															alt=""
														/>
														<div className="w-full flex flex-col justify-between">
															<p className="paragraph1">
																Kit 12 Placas Painéis Solares Monocristalino 450
																W Inmetro
															</p>

															<div className="flex justify-between w-full">
																<p className="headline3 text-neutral-70">
																	R$ 14.388
																</p>
																<p className="paragraph3 text-neutral-60">
																	QTD:1
																</p>
															</div>
														</div>
														{i !== 1 && (
															<span className="block absolute bottom-0 left-0 w-full h-1 bg-neutral-100-10"></span>
														)}
													</div>
												))}
											</div>
										</div>
									))}
								</section>
							</TabPanel>
						</Tabs>
					</div>
				</Card>
			</div>
		</>
	);
};

export default VerProjeto;
