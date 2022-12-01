import React, {useEffect} from 'react';
import Button from '../../components/DesignSystem/Button';
import SvgUse from '../../components/svg/svgUse';

import SwiperCore, {Keyboard, Mousewheel} from 'swiper/core';
import 'swiper/css';
import 'swiper/css/pagination';
import {SelectComponent} from '../../components/DesignSystem/SelectComponent';

import NavbarSite from '../../assets/componentsSite/navbar';
import Svg from '../../components/svg/svg';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import MonthsForm from './components/MonthsForm';
import {HomeProvider, useHome} from './context';
import BudgetForm from './components/BudgetForm';
import Input from './components/Input';
import {Modal} from '../../components/DesignSystem/Modal/Modal';
import {ModalHeader} from '../../components/DesignSystem/Modal';
import {ModalContent} from '../../components/DesignSystem/Modal/ModalContent';
import {useGlobalContext} from '../../context/GlobalContext';

import {useNavigate} from 'react-router-dom';
import FooterSite from './components/Footer';
import Signup from './components/SignUp';
SwiperCore.use([Keyboard, Mousewheel]);

// images
import beneficiosIMG from '../../assets/images/home/beneficios.png';
import defaultUpload from '../../assets/images/home/default_upload.png';
import clienteFinalIMG from '../../assets/images/home/cliente_final.png';
import representanteIMG from '../../assets/images/home/representante.png';
import integradoraIMG from '../../assets/images/home/integradora.png';
import womanIMG from '../../assets/images/home/woman.png';
import womansIMG from '../../assets/images/home/womans.png';

const HomeContent = () => {
	const {handleSubmit, averageConsumptionForm, formsAreValids, isLoading} =
		useHome();
	const navigate = useNavigate();
	const {setmodalOpen, modalOpen} = useGlobalContext();

	useEffect(() => {
		if (modalOpen.open == false || modalOpen.open == null) {
			clearTimeout(window.timeouthome);
		}
	}, [modalOpen]);

	const openModal = id => {
		setmodalOpen({open: true, id, position: 'right'});
	};

	function hashHandler() {
		const id = window.location.hash.slice(1); // remove leading '#'
		console.log('id', id);
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView();
		}
	}
	useEffect(() => {
		hashHandler();
		window.addEventListener('hashchange', hashHandler, false);
	}, []);

	return (
		<>
			<Modal
				className={
					'w-[37rem] z-[999999999999999999999999999999999999999999]  md2:max-w-[400px] md2:w-[95vw]'
				}>
				<ModalContent id="sidemenu">
					<ModalHeader
						close={false}
						classeHeader="!bg-primary-pure !h-[5rem] relative z-[999999] title3 sticky top-0 pb-24 border border-transparent border-b-neutral-30">
						<div className="title3 flex w-full flex-end items-center">
							<button
								type="button"
								style={{'--cor-1': '#F69F00'}}
								className="absolute z-50 !bg-white/70 right-24 top-24 !border !border-neutral-60/20 hover:border-primary-pure  rounded-full"
								onClick={() =>
									setmodalOpen({open: false, id: false, position: 'right'})
								}>
								<SvgUse id="#icon_close_ms" classe="!w-28 !h-28" />
							</button>
						</div>
					</ModalHeader>

					<section className="p-24">
						<ul className="flex flex-col gap-24 text-xl">
							<li>
								<a
									href="#beneficios"
									onClick={() => {
										setmodalOpen({open: false, id: false, position: 'right'});
									}}>
									Benefícios de contratar
								</a>
							</li>
							<li
								onClick={() => {
									setmodalOpen({open: false, id: false, position: 'right'});
									navigate('/integradores');
								}}>
								<a>Integradores </a>
							</li>
							<li
								onClick={() => {
									setmodalOpen({open: false, id: false, position: 'right'});
									navigate('/login');
								}}>
								Entrar
							</li>
							<li>
								<a
									onClick={() => {
										setmodalOpen({open: false, id: false, position: 'right'});
									}}
									href="#orcamento"
									className="btn w-full h-48 secondary justify-center text-white">
									Peça seu orçamento
								</a>
							</li>
						</ul>
					</section>
				</ModalContent>

				<Signup />
			</Modal>

			<main className="homepage w-screen h-full">
				<NavbarSite openModal={openModal} />
				<Svg />

				{/* HEADER */}
				<section className="select-none mt-[5rem] grid place-items-center relative bg-[url('/src/assets/images/home/background.png')] bg-bottom w-full h-[calc(100vh-5rem)]">
					<span className="absolute bg-overlay-home block w-screen h-full left-0 top-0 z-[99999]"></span>
					<span className="absolute bg-[url('/src/assets/images/home/raios.svg')] bg-cover w-screen h-[300px] z-10 left-0 opacity-50 top-0"></span>
					<span className="absolute  block w-screen h-[300px] left-0 z-1 bg-gradient-to-t from-neutral-100/0 to-neutral-100  -top-0"></span>

					<div
						data-aos="zoom-in-up"
						data-aos-delay="500"
						className="relative z-[999999] flex flex-col items-center justify-center">
						<div className="flex items-center justify-center">
							<SvgUse id="#icon_raio_ms" classe="!w-56 !h-56 !-mx-16" />
							<SvgUse id="#icon_raio_ms" classe="!w-56 !h-56 !-mx-16" />
							<SvgUse id="#icon_raio_ms" classe="!w-56 !h-56 !-mx-16" />
						</div>
						<h1 className="displayTitle text-white text-center">
							Energia solar, simples <br></br> como deve ser.
						</h1>
						<p className="paragraph1 w-[24.1875rem] text-white mt-10 mb-48">
							Ambiente onde grandes consumidores de energia tem a liberdade para
							escolher de quem comprar a energia
						</p>
						<Button
							data-aos-delay="750"
							data-aos="fade-down"
							classe="h-56"
							iconID="#icon_raio_circle_ms"
							svgClass="!w-32 !h-32">
							<a href="#orcamento" className="paragraph1">
								Peça seu orçamento
							</a>
						</Button>
					</div>

					<a
						href="#beneficios"
						className="animate-[arrow-interactive_1.2s_infinite] absolute z-[9999999999] bottom-64 hover:cursor-pointer">
						<SvgUse
							id="#icon_arrow_to_bottom_ms"
							classe="!w-28 !h-28 hover:cursor-pointer"
						/>
					</a>
				</section>

				{/* Beneficios */}
				<div id="beneficios" className="bg-white h-40 w-full"></div>
				<section
					id="beneficios"
					className=" select-none py-40 grid place-items-center relative w-full min-h-screen bg-white">
					<div className="relative z-[999] flex flex-col items-center justify-center">
						<div className="flex items-center justify-center">
							<SvgUse id="#icon_raio_ms" classe="!w-56 !h-56 !-mx-16" />
							<SvgUse id="#icon_raio_ms" classe="!w-56 !h-56 !-mx-16" />
							<SvgUse id="#icon_raio_ms" classe="!w-56 !h-56 !-mx-16" />
						</div>
						<h1 className="title1">Beneficios de contratar</h1>
						<p className="paragraph1">
							Conheça abaixo os benefícios de obter energia renovável
						</p>

						<div className="max-w-[1100px] px-24 mt-64 md2:flex-col md2:w-full flex gap-32 md:flex-col">
							<div className="flex flex-col gap-40 w-[17.5rem] md2:w-full items-center md:w-full">
								<div
									className="flex gap-12 items-center md:flex-col md:text-center"
									data-aos="fade-right">
									<SvgUse id="#icon_paper_ms" classe="!w-40 !h-40 shrink-0" />
									<p className="paragraph1">Redução na conta de luz</p>
								</div>

								<div
									className="flex gap-12 items-center md:flex-col md:text-center"
									data-aos="fade-right"
									data-aos-delay="100">
									<SvgUse
										id="#icon_ambiente_ms"
										classe="!w-40 !h-40 shrink-0"
									/>
									<p className="paragraph1">Ajuda o meio ambiente</p>
								</div>

								<div
									className="flex gap-12 items-center md:flex-col md:text-center"
									data-aos="fade-right"
									data-aos-delay="200">
									<SvgUse id="#icon_settings_ms2" classe="w-40 h-40 shrink-0" />
									<p className="paragraph1">Necessidade mínima de manutenção</p>
								</div>

								<div
									className="flex gap-12 items-center md:flex-col md:text-center"
									data-aos="fade-right"
									data-aos-delay="300">
									<SvgUse
										id="#icon_house_certificate_ms"
										classe="w-40 h-40 shrink-0"
									/>
									<p className="paragraph1">
										Ocupa pouco espaço e valoriza o imóvel
									</p>
								</div>
							</div>
							<img
								data-aos="fade-up"
								data-aos-anchor-placement="center-bottom"
								src={beneficiosIMG}
								alt="imagem beneficios de contratar"
								className=""
							/>
							<div className="flex flex-col gap-40 w-[17.5rem] md2:w-full items-center md:w-full">
								<div
									className="flex gap-12 items-center md:flex-col md:text-center"
									data-aos="fade-left">
									<SvgUse
										id="#icon_ambiente2_sm"
										classe="w-40 h-40  shrink-0"
									/>
									<p className="paragraph1">
										A energia solar não polui, é renovável, limpa e sustentável
									</p>
								</div>

								<div
									className="flex gap-12 items-center md:flex-col md:text-center"
									data-aos="fade-left"
									data-aos-delay="150">
									<SvgUse
										id="#icon_cicle_life_sm"
										classe="w-40 h-40  shrink-0"
									/>
									<p className="paragraph1">
										Vida útil de mais de 25 anos, pagando-se em até 7 anos
									</p>
								</div>

								<div
									className="flex gap-12 items-center md:flex-col md:text-center"
									data-aos="fade-left"
									data-aos-delay="300">
									<SvgUse id="#icon_torre_sm" classe="w-40 h-40  shrink-0" />
									<p className="paragraph1">Energia alternativa ao petróleo</p>
								</div>

								<div
									className="flex gap-12 items-center md:flex-col md:text-center "
									data-aos="fade-left"
									data-aos-delay="450">
									<SvgUse
										id="#icon_energia_solar_sm"
										classe="w-40 h-40  shrink-0"
									/>
									<p className="paragraph1">
										A energia solar fotovoltaica é o sistema de autogeração mais
										barato{' '}
									</p>
								</div>
							</div>
						</div>

						<div
							className="mt-40 text-center"
							data-aos="fade-up"
							data-aos-duration="500">
							<p className="paragraph1 mb-16">Entenda como podemos te ajudar</p>
							<Button
								classe="h-56"
								iconID="#icon_raio_circle_ms"
								svgClass="!w-32 !h-32 ">
								<a href="#orcamento" className="paragraph1 text-base">
									Peça seu orçamento
								</a>
							</Button>
						</div>
					</div>
				</section>

				{/* Como Funciona */}
				<section
					id="como-funciona"
					className="select-none py-40 pb-[80px] grid place-items-center relative w-full min-h-screen md:!min-h-max md:py-40 bg-primary-darkness">
					<div className="max-w-[1200px] md2:w-[90vw] md2:px-40 mt-64 flex flex-col gap-32">
						<div className="flex md2:flex-col md:gap-40 items-center md2:w-full md2:mt-0  justify-between mb-[5.625rem]">
							<div>
								<h1 className="title1 text-white flex gap-16 items-center md:text-4xl">
									<SvgUse id="#icon_comofunfa_ms" classe="w-40 h-40 " /> Como
									Funciona
								</h1>
							</div>

							<p className="paragraph1 text-white flex gap-16 items-center">
								<SvgUse
									id="#icon_arrow_to_bottom_ms"
									classe="!w-28 !h-28 hover:translate-y-4 hover:cursor-pointer"
								/>
								Entenda abaixo como<br></br>
								funciona nosso processo
							</p>
						</div>
						<div className="hidden md2:block ">
							<img
								src={defaultUpload}
								className="w-full"
								alt="Imagem de como funciona o processo"
							/>
						</div>
						<div className="md2:hidden circle-home w-[900px] h-[450px] rounded-full relative">
							<div
								data-aos="fade-up"
								data-aos-duration="400"
								data-aos-delay="100"
								data-aos-anchor="#como-funciona"
								className="flex items-center flex-col gap-16 absolute w-[16.5rem] z-[999999] top-[125px] -left-[100px]">
								<SvgUse
									id="#arrow_line_ms"
									classe="absolute bottom-[200px] left-[130px] w-[220px] animate-[writeOne_1s_forwards] min2xl:bottom-[220px] min2xl:left-[135px]"
								/>
								<img src={clienteFinalIMG} className="w-64 h-64 rounded-full" />

								<div className="text-center">
									<p className="headline1 text-white">Cliente final</p>
									<p className="paragraph2 text-white/70">
										Acessa a plataforma e preenche as informações a respeito da
										sua instalação. Ele seleciona se deseja ser atendido pela
										integradora (processo mais simples, ou pelo representante).
									</p>
								</div>
								<SvgUse
									id="#arrow_line_ms4"
									classe="absolute bottom-[-50px] left-[240px] w-[100px] animate-[write_5s_forwards] min2xl:left-[255px]"
								/>
							</div>

							<div
								data-aos="fade-up"
								data-aos-duration="500"
								data-aos-delay="600"
								data-aos-anchor="#como-funciona"
								className="flex items-center flex-col gap-16 absolute w-[16.5rem] z-[999999] -top-[45px] left-[180px]">
								<SvgUse
									id="#arrow_line_ms2"
									classe="absolute bottom-[75px]  left-[160px] w-[200px] min2xl:bottom-[95px] min2xl:left-[175px]"
								/>
								<img
									src={representanteIMG}
									className="w-64 h-64 rounded-full"
								/>

								<div className="text-center">
									<p className="headline1 text-white ">Representante</p>
									<p className="paragraph2 text-white/70">
										Visitam o cliente, tiram fotos, escrevem relatórios e etc.
										Resumidamente, enriquecem o lead que será trabalhado
										posteriormente.
									</p>
								</div>
							</div>

							<div
								data-aos="fade-up"
								data-aos-duration="500"
								data-aos-delay="1100"
								data-aos-anchor="#como-funciona"
								className="flex items-center flex-col gap-16 absolute w-[16.5rem] z-[999999] -top-[40px] left-[470px]">
								<SvgUse
									id="#arrow_line_ms3"
									classe="absolute bottom-[30px] left-[170px] w-[200px] min2xl:bottom-[55px]"
								/>
								<img src={integradoraIMG} className="w-64 h-64 rounded-full" />

								<div className="text-center">
									<p className="headline1 text-white ">Integradora</p>
									<p className="paragraph2 text-white/70">
										Acessa os produtos cadastrados pelas Fabricantes e monta um
										orçamento através da plataforma. O Representante é informado
										da disponibilização do orçamento.
									</p>
								</div>
							</div>

							<div
								data-aos="fade-left"
								data-aos-duration="500"
								data-aos-delay="1600"
								data-aos-anchor="#como-funciona"
								className="flex items-center flex-col gap-16 absolute w-[16.5rem] z-[999999] bottom-[150px] -right-[70px] min2xl:bottom-[130px]">
								<img
									src={representanteIMG}
									className="w-64 h-64 rounded-full"
								/>

								<div className="text-center">
									<p className="headline1 text-white ">Representante</p>
									<p className="paragraph2 text-white/70">
										Negocia com o cliente. O CRM disponibilizado é extremamente
										simples. Se der ganho na proposta, recebe comissão
									</p>
								</div>
							</div>

							<div
								data-aos="fade-up"
								data-aos-duration="500"
								data-aos-delay="600"
								className="flex items-center flex-col gap-16 absolute w-[16.5rem] z-[999999] bottom-[-25px] min2xl:bottom-[-90px] left-[165px] min2xl:left-[180px]">
								<SvgUse
									id="#arrow_line_ms5"
									classe="absolute bottom-[70px] min2xl:bottom-[100px] left-[165px] w-[170px] min2xl:left-[190px]"
								/>
								<img src={integradoraIMG} className="w-64 h-64 rounded-full" />

								<div className="text-center">
									<p className="headline1 text-white ">Integradora</p>
									<p className="paragraph2 text-white/70">
										Acessa os produtos cadastrados pelas Fabricantes e monta um
										orçamento através da plataforma. O Representante é informado
										da disponibilização do orçamento.
									</p>
								</div>
							</div>

							<div
								data-aos="fade-up"
								data-aos-duration="500"
								data-aos-delay="800"
								className="flex items-center flex-col gap-16 absolute w-[16.5rem] z-[999999] bottom-[-35px] min2xl:bottom-[-90px] right-[240px] min2xl:right-[175px]">
								<img
									src={representanteIMG}
									className="w-64 h-64 rounded-full"
								/>

								<div className="text-center">
									<p className="headline1 text-white ">Integradora</p>
									<p className="paragraph2 text-white/70">
										Acessa os produtos cadastrados pelas Fabricantes e monta um
										orçamento através da plataforma. O Representante é informado
										da disponibilização do orçamento.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Solicite seu orçamento */}
				<div
					id="orcamento"
					className="solicite-orcamento bg-white h-40 w-full"></div>
				<section
					data-aos="fade-up"
					data-aos-delay="350"
					className="select-none py-16 flex justify-center relative w-full min-h-screen bg-white">
					<div className="max-w-[1200px] w-[1100px] md:w-[90vw] mt-64 flex items-start justify-between md2:justify-center md2:flex-col md2:gap-40">
						<div className="flex flex-col w-[24.4375rem] gap-48 md2:w-full md2:justify-center">
							<div className="flex flex-col gap-6 md2:items-center md:flex-col md2:text-center md2:justify-center">
								<SvgUse id="#icon_help_chat_ms" classe="w-32 h-32" />
								<h2 className="title2">Solicite seu orçamento</h2>
								<p className="paragraph1 text-neutral-70 md2:text-center">
									Solicite seu orçamento preenchendo os dados ao lado e receba
									esses benefícios:
								</p>
							</div>

							<div className="flex flex-col gap-40">
								<div className="flex gap-12 items-center md2:flex-col md2:text-center md2:justify-center">
									<SvgUse id="#icon_paper_ms" classe="!w-40 !h-40 shrink-0" />
									<p className="paragraph1">Reduza sua conta de luz</p>
								</div>

								<div className="flex gap-12 items-center  md2:flex-col md2:text-center md2:justify-center">
									<SvgUse
										id="#icon_ambiente2_sm"
										classe="!w-40 !h-40 shrink-0"
									/>
									<p className="paragraph1">Ajude o meio ambiente</p>
								</div>

								<div className="flex gap-12 items-center  md2:flex-col md2:text-center md2:justify-center">
									<SvgUse
										id="#icon_settings_ms2"
										classe="!w-40 !h-40 shrink-0"
									/>
									<p className="paragraph1">Manutenções mínimas </p>
								</div>

								<div className="flex gap-12 items-center  md2:flex-col md2:text-center md2:justify-center">
									<SvgUse
										id="#icon_house_certificate_ms"
										classe="!w-40 !h-40 shrink-0"
									/>
									<p className="paragraph1">
										Ocupe pouco espaço e valorize o seu imóvel
									</p>
								</div>

								<div className="flex gap-12 items-center  md2:flex-col md2:text-center md2:justify-center">
									<SvgUse
										id="#icon_cicle_life_sm"
										classe="!w-40 !h-40 shrink-0"
									/>
									<p className="paragraph1">
										Tenha a vida útil de mais de 25 anos, pagando-se em até 7
										anos
									</p>
								</div>
							</div>
						</div>

						<section className="relative md2:mx-auto">
							<span className="absolute bg-[url('/src/assets/images/home/raios.svg')] bg-cover w-screen h-[300px] z-10 left-64  opacity-50 bottom-[-50px]">
								<span className="absolute block bg-white w-full h-[300px] z-10 left-[150px]  opacity-40 bottom-[80px]"></span>
								<span className="absolute block bg-white w-full h-[300px] z-10 right-64 opacity-20 !bottom-[0px]"></span>
								<span className="absolute block bg-gradient-to-bl from-white to-white/80 w-[200px] h-[300px] left-0 z-10 opacity-40 !bottom-[0px]"></span>
							</span>
							<div className="w-[37rem] md2:w-[90vw] p-24 pb-10 border border-neutral-100 rounded-md !bg-white relative z-[99]">
								<p className="headline1 mb-16">Dados pessoais</p>
								<div className="flex flex-col gap-16">
									<BudgetForm />

									<Tabs>
										<div className="tabs-home">
											<TabList>
												<p className="headline1">Consumo médio de energia em</p>
												<Tab classID="dados_pessoais">R$</Tab>
												<Tab classID="orcamento">kHw</Tab>
											</TabList>
										</div>

										<TabPanel>
											<MonthsForm />
											<div
												className={`flex justify-${
													!formsAreValids ? 'between' : 'end'
												} items-center mt-16`}>
												{!formsAreValids && !isLoading && (
													<div className="max-w-xs">
														<p className="m-10 text-alert-error">
															Informe todos os campos para prosseguir
														</p>
														<p className="m-10 text-alert-error">
															Informe o consumo mensal ou a média em kWh
														</p>
													</div>
												)}
												<Button
													classe="h-48"
													iconID="#icon_raio_circle_ms"
													svgClass="!w-32 !h-32"
													disabled={!formsAreValids}
													onClick={handleSubmit}>
													<p className="paragraph1">Solicitar Orçamento</p>
												</Button>
											</div>
										</TabPanel>

										<TabPanel>
											<section>
												<div className="py-16 grid gap-16">
													<Input
														control={averageConsumptionForm.control}
														type="number"
														name="average_consumption"
														label="Consumo médio em KHw"
														className="input !bg-white h-48 !rounded-md"
													/>
												</div>
											</section>
											<div
												className={`flex justify-${
													!formsAreValids ? 'between' : 'end'
												} items-center mt-16`}>
												{!formsAreValids && !isLoading && (
													<div className="max-w-xs">
														<p className="m-10 text-alert-error">
															Informe todos os campos para prosseguir
														</p>
														<p className="m-10 text-alert-error">
															Informe o consumo mensal ou a média em kWh
														</p>
													</div>
												)}
												<Button
													classe="h-48"
													iconID="#icon_raio_circle_ms"
													svgClass="!w-32 !h-32"
													disabled={!formsAreValids}
													onClick={handleSubmit}>
													<p className="paragraph1">Solicitar Orçamento</p>
												</Button>
											</div>
										</TabPanel>
									</Tabs>
								</div>
							</div>
						</section>
					</div>
				</section>

				{/* Energia renovavel */}
				<section className="bg-gradient-home select-none py-64 md2:py-40 flex justify-center relative w-full bg-white">
					<div className="max-w-[1200px] w-[1100px] mt-64 flex md2:flex-col md2:gap-40 md2:w-[90vw] justify-between gap-32">
						<div
							className="w-[24rem]"
							data-aos="fade-right"
							data-aos-duration="800">
							<p className="caps2-semibold text-primary-pure mb-8">
								SOBRE O MERCADO SOLAR
							</p>
							<h3 className="title3 mb-8">
								Uma empresa que acredita melhorar vidas com energia renovável
							</h3>
							<p className="paragraph2">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
								eu suscipit lacus auctor mi diam turpis vitae orci. Faucibus a
								tortor rhoncus neque quam. Aliquam facilisi convallis tortor in
								viverra nec justo, turpis quam. Arcu, interdum aliquam semper
								mollis proin consectetur purus. Tincidunt amet, rhoncus turpis
								in venenatis, viverra amet.{' '}
							</p>

							<Button
								classe="h-48 mt-24 md2:w-[90vw] justify-center"
								iconID="#icon_raio_circle_ms"
								svgClass="!w-32 !h-32">
								<a href="#orcamento" className="paragraph1">
									Peça seu orçamento
								</a>
							</Button>
						</div>

						<div className="w-[28.125rem] md:w-[60vw] md2:h-max  md2:w-[90vw] mr-[190px] grid place-items-center h-[31.25rem] relative">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="absolute"
								fill="none"
								viewBox="0 0 449 519">
								<circle
									cx="222"
									cy="104"
									r="104"
									fill="url(#paint0_linear_274_15993)"
									fillOpacity="0.3"></circle>
								<circle
									cx="224.5"
									cy="294.5"
									r="224.5"
									fill="url(#paint1_linear_274_15993)"
									fillOpacity="0.3"></circle>
								<defs>
									<linearGradient
										id="paint0_linear_274_15993"
										x1="118"
										x2="211.114"
										y1="208"
										y2="25.71"
										gradientUnits="userSpaceOnUse">
										<stop stopColor="#F69F00"></stop>
										<stop offset="1" stopColor="#F69F00" stopOpacity="0"></stop>
									</linearGradient>
									<linearGradient
										id="paint1_linear_274_15993"
										x1="0"
										x2="201"
										y1="519"
										y2="125.5"
										gradientUnits="userSpaceOnUse">
										<stop stopColor="#F69F00"></stop>
										<stop offset="1" stopColor="#F69F00" stopOpacity="0"></stop>
									</linearGradient>
								</defs>
							</svg>

							<div className="flex gap-32 items-end relative">
								<SvgUse
									id="#icon_line_effect_ms"
									classe="w-[210px] bottom-[50px] h-auto absolute md:hidden "
								/>
								<SvgUse
									id="#icon_line2_effect_ms"
									classe="w-[210px] bottom-[-13px] rotate-[4deg]  left-[338px] z-[999999] h-auto absolute md:w-[125px] md:hidden"
								/>
								<SvgUse
									id="#icon_circle_outside_img"
									classe="bottom-[125px] w-[120px]  left-[530px] z-[99999] h-auto absolute "
								/>
								<img
									data-aos="fade-up"
									data-aos-duration="300"
									src={womanIMG}
									alt="imagem de uma mulher sorrindo"
									className="md2:!w-[60%]"
								/>
								<img
									data-aos="fade-down"
									data-aos-duration="300"
									className="relative z-[99] md2:w-[80%]"
									src={womansIMG}
									alt="imagem de uma mulher sorrindo"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* FOOTER */}
				<FooterSite />
			</main>
		</>
	);
};

const Home = () => {
	return (
		<HomeProvider>
			<HomeContent />
		</HomeProvider>
	);
};

export default Home;
