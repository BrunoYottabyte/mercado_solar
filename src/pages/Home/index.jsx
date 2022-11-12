import React from "react";
import { useState } from "react";
import Button from "../../components/DesignSystem/Button";
import { Card } from "../../components/DesignSystem/Card";
import { Title } from "../../components/DesignSystem/Headings";
import { InputDate } from "../../components/DesignSystem/InputDate";
import SvgUse from "../../components/svg/svgUse";
import CardProducao from "./CardProducao";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
SwiperCore.use([Keyboard, Mousewheel]);
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Timeline from "./Timeline";
import Table from "../../components/DesignSystem/Table";
import { SelectComponent } from "../../components/DesignSystem/SelectComponent";

import logo from "../../assets/images/icon_logo_site.png";
import NavbarSite from "../../assets/componentsSite/navbar";
import Svg from "../../components/svg/svg";
import { Input } from "../../components/DesignSystem/Input";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Home = () => {
	return (
		<main className="w-screen h-full">
			<NavbarSite />
			<Svg />

			{/* HEADER */}
			<section className="select-none grid place-items-center relative bg-[url('../src/assets/images/home/background.png')] bg-bottom w-full h-[calc(100vh-5rem)]">
				<span className="absolute bg-overlay-home block w-screen h-full left-0 top-0 z-[99999]"></span>
				<span className="absolute bg-[url('../src/assets/images/home/raios.svg')] bg-cover w-screen h-[300px] z-10 left-0 opacity-50 top-0"></span>
				<span className="absolute  block w-screen h-[300px] left-0 z-1 bg-gradient-to-t from-neutral-100/0 to-neutral-100  -top-0"></span>

				<div className="relative z-[99999999999999] flex flex-col items-center justify-center">
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
						classe="h-56"
						iconID="#icon_raio_circle_ms"
						svgClass="!w-32 !h-32"
					>
						<p className="paragraph1">Peça seu orçamento</p>
					</Button>
				</div>

				<p className="absolute z-[9999999999] bottom-64 hover:cursor-pointer">
					<SvgUse
						id="#icon_arrow_to_bottom_ms"
						classe="!w-28 !h-28 hover:translate-y-4 hover:cursor-pointer"
					/>
				</p>
			</section>

			{/* Beneficios */}
			<section className="select-none py-40 grid place-items-center relative w-full min-h-screen bg-white">
				<div className="relative z-[99999999999999] flex flex-col items-center justify-center">
					<div className="flex items-center justify-center">
						<SvgUse id="#icon_raio_ms" classe="!w-56 !h-56 !-mx-16" />
						<SvgUse id="#icon_raio_ms" classe="!w-56 !h-56 !-mx-16" />
						<SvgUse id="#icon_raio_ms" classe="!w-56 !h-56 !-mx-16" />
					</div>
					<h1 className="title1">Beneficios de contratar</h1>
					<p className="paragraph1">
						Conheça abaixo os benefícios de obter energia renovável
					</p>

					<div className="max-w-[1100px] mt-64 flex gap-32 md:flex-col">
						<div className="flex flex-col gap-40 w-[17.5rem] items-center md:w-full">
							<div className="flex gap-12 items-center md:flex-col !w-full">
								<SvgUse id="#icon_paper_ms" classe="!w-40 !h-40 shrink-0" />
								<p className="paragraph1">Redução na conta de luz</p>
							</div>

							<div className="flex gap-12 items-center md:flex-col">
								<SvgUse id="#icon_ambiente_ms" classe="!w-40 !h-40 shrink-0" />
								<p className="paragraph1">Ajuda o meio ambiente</p>
							</div>

							<div className="flex gap-12 items-center md:flex-col">
								<SvgUse id="#icon_settings_ms2" classe="w-40 h-40 shrink-0" />
								<p className="paragraph1">Necessidade mínima de manutenção</p>
							</div>

							<div className="flex gap-12 items-center md:flex-col">
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
							src="../src/assets/images/home/beneficios.png"
							alt="imagem beneficios de contratar"
							className=""
						/>
						<div className="flex flex-col gap-40 max-w-[17.5rem] md:w-full px-16 text-center md:max-w-full">
							<div className="flex gap-12 items-center md:flex-col ">
								<SvgUse id="#icon_ambiente2_sm" classe="w-40 h-40  shrink-0" />
								<p className="paragraph1">
									A energia solar não polui, é renovável, limpa e sustentável
								</p>
							</div>

							<div className="flex gap-12 items-center md:flex-col ">
								<SvgUse id="#icon_cicle_life_sm" classe="w-40 h-40  shrink-0" />
								<p className="paragraph1">
									Vida útil de mais de 25 anos, pagando-se em até 7 anos
								</p>
							</div>

							<div className="flex gap-12 items-center md:flex-col ">
								<SvgUse id="#icon_torre_sm" classe="w-40 h-40  shrink-0" />
								<p className="paragraph1">Energia alternativa ao petróleo</p>
							</div>

							<div className="flex gap-12 items-center md:flex-col ">
								<SvgUse
									id="#icon_energia_solar_sm"
									classe="w-40 h-40  shrink-0"
								/>
								<p className="paragraph1">
									A energia solar fotovoltaica é o sistema de autogeração mais
									barato{" "}
								</p>
							</div>
						</div>
					</div>

					<div className="mt-40 text-center">
						<p className="paragraph1 mb-16">Entenda como podemos te ajudar</p>
						<Button
							classe="h-56"
							iconID="#icon_raio_circle_ms"
							svgClass="!w-32 !h-32 "
						>
							<p className="paragraph1 text-base">Peça seu orçamento</p>
						</Button>
					</div>
				</div>
			</section>

			{/* Como Funciona */}
			<section className="select-none py-40 pb-[80px] grid place-items-center relative w-full min-h-screen bg-primary-darkness">
				<div className="max-w-[1200px] mt-64 flex flex-col gap-32">
					<div className="flex items-center justify-between mb-[5.625rem]">
						<div>
							<h1 className="title1 text-white flex gap-16 items-center">
								<SvgUse id="#icon_comofunfa_ms" classe="w-40 h-40" /> Como
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
					<div className="circle-home w-[900px] h-[450px] rounded-full relative">
						<div className="flex items-center flex-col gap-16 absolute w-[16.5rem] z-[999999] top-[125px] -left-[100px]">
							<SvgUse
								id="#arrow_line_ms"
								classe="absolute bottom-[200px] left-[130px] w-[220px]"
							/>
							<img
								src="../src/assets/images/home/cliente_final.png"
								className="w-64 h-64 rounded-full"
							/>
							

							<div className="text-center">
								<p className="headline1 text-white ">Cliente final</p>
								<p className="paragraph2 text-white/70">
									Acessa a plataforma e preenche as informações a respeito da
									sua instalação. Ele seleciona se deseja ser atendido pela
									integradora (processo mais simples, ou pelo representante).
								</p>
							</div>
							<SvgUse
								id="#arrow_line_ms4"
								classe="absolute bottom-[-50px] left-[240px] w-[100px]"
							/>
						</div>

						<div className="flex items-center flex-col gap-16 absolute w-[16.5rem] z-[999999] -top-[45px] left-[180px]">
							<SvgUse
								id="#arrow_line_ms2"
								classe="absolute bottom-[75px]  left-[160px] w-[200px]"
							/>
							<img
								src="../src/assets/images/home/representante.png"
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

						<div className="flex items-center flex-col gap-16 absolute w-[16.5rem] z-[999999] -top-[40px] left-[470px]">
							<SvgUse
								id="#arrow_line_ms3"
								classe="absolute bottom-[30px] left-[170px] w-[200px]"
							/>
							<img
									src="../src/assets/images/home/integradora.png"
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

						<div className="flex items-center flex-col gap-16 absolute w-[16.5rem] z-[999999] bottom-[150px] -right-[70px]">
							<img
								src="../src/assets/images/home/representante.png"
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

						<div className="flex items-center flex-col gap-16 absolute w-[16.5rem] z-[999999] bottom-[-25px] left-[165px]">
							<SvgUse
								id="#arrow_line_ms5"
								classe="absolute bottom-[70px] left-[165px] w-[170px]"
							/>
							<img
							src="../src/assets/images/home/integradora.png"
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

						<div className="flex items-center flex-col gap-16 absolute w-[16.5rem] z-[999999] bottom-[-35px] right-[240px]">
							<img
										src="../src/assets/images/home/representante.png"
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
			<section className="select-none py-16 flex justify-center relative w-full min-h-screen bg-white">
				<div className="max-w-[1200px] w-[1100px] mt-64 flex items-start justify-between">
					<div className="flex flex-col w-[24.4375rem] gap-48">
						<div className="flex flex-col gap-6">
							<SvgUse id="#icon_help_chat_ms" classe="w-32 h-32" />
							<h2 className="title2">Solicite seu orçamento</h2>
							<p className="paragraph1 text-neutral-70">
								Solicite seu orçamento preenchendo os dados ao lado e receba
								esses benefícios:
							</p>
						</div>

						<div className="flex flex-col gap-40">
							<div className="flex gap-12 items-center">
								<SvgUse id="#icon_paper_ms" classe="!w-40 !h-40 shrink-0" />
								<p className="paragraph1">Reduza sua conta de luz</p>
							</div>

							<div className="flex gap-12 items-center">
								<SvgUse id="#icon_ambiente2_sm" classe="!w-40 !h-40 shrink-0" />
								<p className="paragraph1">Ajude o meio ambiente</p>
							</div>

							<div className="flex gap-12 items-center">
								<SvgUse id="#icon_settings_ms2" classe="!w-40 !h-40 shrink-0" />
								<p className="paragraph1">Manutenções mínimas </p>
							</div>

							<div className="flex gap-12 items-center">
								<SvgUse
									id="#icon_house_certificate_ms"
									classe="!w-40 !h-40 shrink-0"
								/>
								<p className="paragraph1">
									Ocupe pouco espaço e valorize o seu imóvel
								</p>
							</div>

							<div className="flex gap-12 items-center">
								<SvgUse
									id="#icon_cicle_life_sm"
									classe="!w-40 !h-40 shrink-0"
								/>
								<p className="paragraph1">
									Tenha a vida útil de mais de 25 anos, pagando-se em até 7 anos
								</p>
							</div>
						</div>
					</div>

					<section className="relative">
						<span className="absolute bg-[url('../src/assets/images/home/raios.svg')] bg-cover w-screen h-[300px] z-10 left-64  opacity-50 bottom-[-50px]">
							<span className="absolute block bg-white w-full h-[300px] z-10 left-[150px]  opacity-40 bottom-[80px]"></span>
							<span className="absolute block bg-white w-full h-[300px] z-10 right-64 opacity-20 !bottom-[0px]"></span>
							<span className="absolute block bg-gradient-to-bl from-white to-white/80 w-[200px] h-[300px] left-0 z-10 opacity-40 !bottom-[0px]"></span>
						</span>
						<div className="w-[37rem] p-24 pb-10 border border-neutral-100 rounded-md !bg-white relative z-[99]">
							<p className="headline1 mb-16">Dados pessoais</p>
							<div className="flex flex-col gap-16">
								<label className="paragraph2">
									Nome
									<Input classe="!bg-white" placeholder="Digite seu nome" />
								</label>

								<div className="flex w-full gap-16">
									<label className="paragraph2">
										E-mail
										<Input classe="!bg-white" placeholder="Digite seu e-mail" />
									</label>

									<label className="paragraph2">
										Celular
										<Input classe="!bg-white" placeholder="(00) 00000-0000" />
									</label>
								</div>

								<div className="flex w-full gap-16">
									<label className="paragraph2">
										CEP
										<Input classe="!bg-white" placeholder="Digite seu CEP" />
									</label>

									<label className="paragraph2 ">
										Tipo
										<SelectComponent
											classeSelect="hover:!border hover:border-neutral-30 hover:rounded-md"
											classe="lg hover:!border-neutral-30 min-w-[16rem] md2:min-w-[0] md2:w-full"
											data={[
												{ value: "apartamento", label: "Apartamento" },
												{ value: "casa", label: "Casa" },
											]}
										/>
									</label>
								</div>

								<Tabs>
									<div className="tabs-home">
										<TabList>
											<p className="headline1">Consumo médio de energia em</p>
											<Tab classID="dados_pessoais">R$</Tab>
											<Tab classID="orcamento">kHw</Tab>
										</TabList>
									</div>

									<TabPanel>
										<section className="py-16 grid grid-cols-4 gap-16">
											<label className="paragraph2">
												Janeiro
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Fevereiro
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Março
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Abril
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											{/*  */}

											<label className="paragraph2">
												Maio
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Junho
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Agosto
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Setembro
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>
											{/*  */}

											<label className="paragraph2">
												Setembro
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Outubro
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Novembro
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Dezembro
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>
										</section>
										<div className=" flex justify-end mt-16">
											<Button
												classe="h-48"
												iconID="#icon_raio_circle_ms"
												svgClass="!w-32 !h-32"
											>
												<p className="paragraph1">Solicitar Orçamento</p>
											</Button>
										</div>
									</TabPanel>

									<TabPanel>
										<section className="py-16 grid grid-cols-4 gap-16">
											<label className="paragraph2">
												Janeiro
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Fevereiro
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Março
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Abril
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											{/*  */}

											<label className="paragraph2">
												Maio
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Junho
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Agosto
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Setembro
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>
											{/*  */}

											<label className="paragraph2">
												Setembro
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Outubro
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Novembro
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>

											<label className="paragraph2">
												Dezembro
												<Input classe="!bg-white h-48 !rounded-md" />
											</label>
										</section>
										<div className=" flex justify-end mt-16">
											<Button
												classe="h-48"
												iconID="#icon_raio_circle_ms"
												svgClass="!w-32 !h-32"
											>
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
			<section className="bg-gradient-home select-none py-64 flex justify-center relative w-full bg-white">
				<div className="max-w-[1200px] w-[1100px] mt-64 flex justify-between gap-32">
					<div className="w-[24rem]">
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
							mollis proin consectetur purus. Tincidunt amet, rhoncus turpis in
							venenatis, viverra amet.{" "}
						</p>

						<Button
							classe="h-48 mt-24"
							iconID="#icon_raio_circle_ms"
							svgClass="!w-32 !h-32"
						>
							<p className="paragraph1">Peça seu orçamento</p>
						</Button>
					</div>

					<div className="w-[28.125rem] mr-[190px] grid place-items-center h-[31.25rem] relative">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="absolute"
							fill="none"
							viewBox="0 0 449 519"
						>
							<circle
								cx="222"
								cy="104"
								r="104"
								fill="url(#paint0_linear_274_15993)"
								fillOpacity="0.3"
							></circle>
							<circle
								cx="224.5"
								cy="294.5"
								r="224.5"
								fill="url(#paint1_linear_274_15993)"
								fillOpacity="0.3"
							></circle>
							<defs>
								<linearGradient
									id="paint0_linear_274_15993"
									x1="118"
									x2="211.114"
									y1="208"
									y2="25.71"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#F69F00"></stop>
									<stop offset="1" stopColor="#F69F00" stopOpacity="0"></stop>
								</linearGradient>
								<linearGradient
									id="paint1_linear_274_15993"
									x1="0"
									x2="201"
									y1="519"
									y2="125.5"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#F69F00"></stop>
									<stop offset="1" stopColor="#F69F00" stopOpacity="0"></stop>
								</linearGradient>
							</defs>
						</svg>

						<div className="flex gap-32 items-end relative">
								<SvgUse id="#icon_line_effect_ms" classe="w-[210px] bottom-[50px] h-auto absolute " />
								<SvgUse id="#icon_line2_effect_ms" classe="w-[210px] bottom-[-13px] rotate-[4deg]  left-[338px] z-[999999999999999999999] h-auto absolute " />
								<SvgUse id="#icon_circle_outside_img" classe="bottom-[125px] w-[120px]  left-[530px] z-[999999999999999999999] h-auto absolute " />
								<img src="../src/assets/images/home/woman.png" alt="imagem de uma mulher sorrindo" />
								<img className="relative z-[99]" src="../src/assets/images/home/womans.png" alt="imagem de uma mulher sorrindo" />
						</div>	



					</div>
				</div>
			</section>

			{/* FOOTER */}

			<section className="select-none py-64 flex justify-center relative w-full  bg-gradient-home-footer">
				<span className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-pure/5 via-primary-pure/70 to-primary-pure-10"></span>
				<div className="max-w-[1200px] w-[1100px] relative">

					<div className="flex w-full pb-64 justify-between items-center gap-64">
						<div className="grid grid-cols-4">
									<img src="../src/assets/images/home/logomercado.png" />

									<div>
										<p className="headline3 mb-24">Mapa do site</p>
										<ul className="flex flex-col gap-16">
											<li className="paragraph2">Benefícios de contratar</li>
											<li className="paragraph2">Sobre nós</li>
										</ul>
									</div>

									<div>
										<p className="headline3 mb-24">Redes sociais</p>
										<ul className="flex flex-col gap-16">
											<li className="paragraph2">Instagram</li>
											<li className="paragraph2">Facebook</li>
											<li className="paragraph2">Linkedin</li>
										</ul>
									</div>

									<div className="w-[17.5rem]">
										<p className="headline3 mb-24 border-primary-pure">Contato</p>
										<ul className="flex flex-col gap-16">
											<li className="paragraph2 flex items-center gap-8"> <SvgUse id="#icon_phone_ms" classe="w-24 h-24 shrink-0" /> (99) 98945 4575</li>
											<li className="paragraph2 flex items-center gap-8"><SvgUse id="#icon_maps_ms" classe="w-24 h-24  shrink-0" />Ed. Itaim Center - Rua Dr. Eduardo de<br></br> Souza Aranha, nº 153 9º andar</li>
											<li className="paragraph2 flex items-center gap-8"><SvgUse id="#icon_mail_ms" classe="w-24 h-24  shrink-0" />mercadosolar@contato.com.br</li>
										</ul>
									</div>
						</div>

						<div className="flex flex-col items-end">
							<Button iconID="#icon_user_ms" 	svgClass="!w-24 !h-24" classe="secondary h-48 hover:bg-white !w-[13.5rem] border !border-primary-pure justify-center">Entrar</Button>
							<Button
								classe="h-48 mt-12 !w-[13.5rem] whitespace-nowrap"
								iconID="#icon_raio_circle_ms"
								svgClass="!w-32 !h-32"
							>
								<p className="paragraph1">Peça seu orçamento</p>
							</Button>
						</div>
					</div>
				</div>

				
				<div className="absolute left-0 w-full bottom-0 h-48 bg-primary-pure flex items-center justify-center">
					<div className="max-w-[1200px] w-[1100px] relative flex justify-between items-center">	
						<p className="paragraph2 text-white">© 2022 Mercado solar  - Todos direitos reservados</p>	

						<div className="flex justify-end">
							<SvgUse id="#icon_logo_ndt" classe="!h-48 !w-48 right-0" />
						</div>
					</div>		
				</div>
			</section> 
		</main>
	);
};

export default Home;
