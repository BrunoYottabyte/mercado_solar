import React from 'react'
import { useState } from 'react'
import Button from '../../components/DesignSystem/Button'
import { Card } from '../../components/DesignSystem/Card'
import { Title } from '../../components/DesignSystem/Headings'
import { InputDate } from '../../components/DesignSystem/InputDate'
import SvgUse from '../../components/svg/svgUse'
import CardProducao from './CardProducao'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
SwiperCore.use([Keyboard, Mousewheel]);
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Timeline from './Timeline'
import Table from '../../components/DesignSystem/Table'
import { SelectComponent } from '../../components/DesignSystem/SelectComponent'


import logo from '../../assets/images/icon_logo_site.png'
import NavbarSite from '../../assets/componentsSite/navbar'
import Svg from '../../components/svg/svg'

const Home = () => {

  //   const [startDate, setStartDate] = useState(new Date());
  //   const [endDate, setEndDate] = useState(null);
  //   const onChange = (dates) => {
  //       const [start, end] = dates;
  //       setStartDate(start);
  //       setEndDate(end);
  //   };

  //   const columns = [
  //       {
  //           Header: 'Data da venda',
  //           accessor: 'Datavenda'
  //       },
  //       {
  //           Header: 'Valor da venda',
  //           accessor: 'valor'
  //       },
  //       {
  //           Header: 'Vendas',
  //           accessor: 'vendas'
  //       },
  //       {
  //           Header: 'Forma de pagamento',
  //           accessor: 'formaPagamento'
  //       },
  //       {
  //           Header: 'Nº Atendimento',
  //           accessor: 'atendimento'
  //       },
  //       {
  //           Header: 'Acumulado',
  //           accessor: 'acumulado'
  //       },
  //       {
  //           Header: 'Ticket Médio',
  //           accessor: 'ticket'
  //       },
  //       {
  //           Header: 'Turno',
  //           accessor: 'turno'
  //       },
  //   ]

  //   const data = [
  //       {
  //           Datavenda: "01/05/2022",
  //           valor: "R$ 521,55",
  //           vendas: "Online aplicativo",
  //           formaPagamento: "Pic Pay",
  //           atendimento: "3",
  //           acumulado: "R$ 521,35",
  //           ticket: "R$ 173,85",
  //           turno: "1"
  //       },
  //       {
  //           Datavenda: "01/05/2022",
  //           valor: "R$ 521,55",
  //           vendas: "Online aplicativo",
  //           formaPagamento: "Pic Pay",
  //           atendimento: "3",
  //           acumulado: "R$ 521,35",
  //           ticket: "R$ 173,85",
  //           turno: "1"
  //       },
  //       {
  //           Datavenda: "01/05/2022",
  //           valor: "R$ 521,55",
  //           vendas: "Online aplicativo",
  //           formaPagamento: "Pic Pay",
  //           atendimento: "3",
  //           acumulado: "R$ 521,35",
  //           ticket: "R$ 173,85",
  //           turno: "1"
  //       },
  //       {
  //           Datavenda: "01/05/2022",
  //           valor: "R$ 521,55",
  //           vendas: "Online aplicativo",
  //           formaPagamento: "Pic Pay",
  //           atendimento: "3",
  //           acumulado: "R$ 521,35",
  //           ticket: "R$ 173,85",
  //           turno: "1"
  //       },
  //       {
  //           Datavenda: "01/05/2022",
  //           valor: "R$ 521,55",
  //           vendas: "Online aplicativo",
  //           formaPagamento: "Pic Pay",
  //           atendimento: "3",
  //           acumulado: "R$ 521,35",
  //           ticket: "R$ 173,85",
  //           turno: "1"
  //       },
  //       {
  //           Datavenda: "01/05/2022",
  //           valor: "R$ 521,55",
  //           vendas: "Online aplicativo",
  //           formaPagamento: "Pic Pay",
  //           atendimento: "3",
  //           acumulado: "R$ 521,35",
  //           ticket: "R$ 173,85",
  //           turno: "1"
  //       },
  //       {
  //           Datavenda: "01/05/2022",
  //           valor: "R$ 521,55",
  //           vendas: "Online aplicativo",
  //           formaPagamento: "Pic Pay",
  //           atendimento: "3",
  //           acumulado: "R$ 521,35",
  //           ticket: "R$ 173,85",
  //           turno: "1"
  //       },
  //       {
  //           Datavenda: "01/05/2022",
  //           valor: "R$ 521,55",
  //           vendas: "Online aplicativo",
  //           formaPagamento: "Pic Pay",
  //           atendimento: "3",
  //           acumulado: "R$ 521,35",
  //           ticket: "R$ 173,85",
  //           turno: "1"
  //       },
  //       {
  //           Datavenda: "01/05/2022",
  //           valor: "R$ 521,55",
  //           vendas: "Online aplicativo",
  //           formaPagamento: "Pic Pay",
  //           atendimento: "3",
  //           acumulado: "R$ 521,35",
  //           ticket: "R$ 173,85",
  //           turno: "1"
  //       },
  //       {
  //           Datavenda: "01/05/2022",
  //           valor: "R$ 521,55",
  //           vendas: "Online aplicativo",
  //           formaPagamento: "Pic Pay",
  //           atendimento: "3",
  //           acumulado: "R$ 521,35",
  //           ticket: "R$ 173,85",
  //           turno: "1"
  //       },
  //       {
  //           Datavenda: "01/05/2022",
  //           valor: "R$ 521,55",
  //           vendas: "Online aplicativo",
  //           formaPagamento: "Pic Pay",
  //           atendimento: "3",
  //           acumulado: "R$ 521,35",
  //           ticket: "R$ 173,85",
  //           turno: "1"
  //       },
  //       {
  //           Datavenda: "01/05/2022",
  //           valor: "R$ 521,55",
  //           vendas: "Online aplicativo",
  //           formaPagamento: "Pic Pay",
  //           atendimento: "3",
  //           acumulado: "R$ 521,35",
  //           ticket: "R$ 173,85",
  //           turno: "1"
  //       },
  //       {
  //           Datavenda: "01/05/2022",
  //           valor: "R$ 521,55",
  //           vendas: "Online aplicativo",
  //           formaPagamento: "Pic Pay",
  //           atendimento: "3",
  //           acumulado: "R$ 521,35",
  //           ticket: "R$ 173,85",
  //           turno: "1"
  //       },
  //   ]

  //   const HeaderHome = ({ filter, setFilter, pageSize, setPageSize }) => {
	// 	return (
	// 		<div className='flex justify-end items-center gap-8 mb-24 md2:flex-col md2:gap-16'>
                        
  //                       <p className="text-sm font-medium text-neutral-80">
	// 						Mostrar
	// 					</p>

	// 					<SelectComponent
	// 						classe="md min-w-[4.625rem]"
	// 						data={[10, 25, 50].map((v) => ({ value: v, label: v }))}
	// 						setStateCurrent={setPageSize}
	// 						state={pageSize}
	// 						value={pageSize}
	// 						placeholder={pageSize}
	// 					/>
	// 					<p className="text-sm font-medium text-neutral-80">
	// 						Linhas por página
	// 					</p>
		
	// 		</div>
	// 	)
	// }


  //   return (
  //       <div className='container'>
  //           <div className='flex gap-8 md2:flex-col'>
  //               <Card classe="my-64 px-24 py-32 flex-1 md2:mb-16 md2:w-full">
  //                   <header className='flex justify-between items-center md2:flex-col md2:gap-16 mb-20'>
  //                       <Title classe="text-neutral-90 gap-8 font-medium">
  //                           <div>
  //                               <div className='flex items-center gap-8'>
  //                                   <SvgUse id="#icon_date" classe="" />
  //                                   <p className='block text-neutral-90 font-medium'>Calendário de produção</p>
  //                               </div>
  //                           </div>
  //                       </Title>

  //                       <Button
  //                           classe="secondary h-40 md:w-full md:h-48 md:justify-center"
  //                       >
  //                           Ver mais
  //                       </Button>
  //                   </header>

  //                   <div className='flex gap-12 mt-32 md:flex-col md:gap-24'>
  //                       <InputDate
  //                           containerClass="!h-[330px] !max-h-[380px] home"
  //                           classe="!h-[330px] !max-h-[377px]"
  //                           selected={startDate}
  //                           onChange={onChange}
  //                           startDate={startDate}
  //                           endDate={endDate}
  //                           selectsRange
  //                           inline

  //                           peekNextMonth={false}
  //                           showMonthDropdown={false}
  //                           showYearDropdown={false}
  //                       />

  //                       <Swiper
  //                           modules={[Pagination]}
  //                           spaceBetween={8}
  //                           slidesPerView={'auto'}
  //                           touchStartPreventDefault={false}
  //                           direction="vertical"
  //                           className='!h-[330px] !w-full'
  //                           mousewheel
  //                       >
  //                           <SwiperSlide className='!w-full !h-max'>
  //                               <CardProducao title={'Bolo de banana'} />
  //                           </SwiperSlide>

  //                           <SwiperSlide className='!w-full !h-max'>
  //                               <CardProducao title={'Mineirinho'} />
  //                           </SwiperSlide>

  //                           <SwiperSlide className='!w-full !h-max'>
  //                               <CardProducao title={'Mini coxinha'} />
  //                           </SwiperSlide>


  //                           <SwiperSlide className='!w-full !h-max'>
  //                               <CardProducao title={'Mini coxinha'} />
  //                           </SwiperSlide>

  //                           <SwiperSlide className='!w-full !h-max'>
  //                               <CardProducao title={'Mini coxinha'} />
  //                           </SwiperSlide>

  //                           <SwiperSlide className='!w-full !h-max'>
  //                               <CardProducao title={'Mini coxinha'} />
  //                           </SwiperSlide>
  //                           <SwiperSlide className='!w-full !h-max'>
  //                               <CardProducao title={'Mini coxinha'} />
  //                           </SwiperSlide>

  //                       </Swiper>

  //                   </div>
  //               </Card>

  //               <Card classe="my-64 px-24 py-32 flex-1 md2:my-0 md2:mb-16 md2:w-full">
  //                   <header className='flex justify-between md:flex-col md:gap-16 items-center  mb-20'>
  //                       <Title classe="text-neutral-90 gap-8 font-medium">
  //                           <div>
  //                               <div className='flex items-center gap-8 '>
  //                                   <SvgUse id="#icon-checklist-analise-desempenho" />
  //                                   <p className='block text-neutral-90 font-medium'>Últimas checklists de atividades</p>
  //                               </div>
  //                           </div>
  //                       </Title>

  //                       <Button
  //                           classe="secondary md:w-full justify-center md:h-48"
  //                       >
  //                           Ver mais
  //                       </Button>
  //                   </header>

  //                   <div className='mt-16'>
  //                       <Timeline />
  //                   </div>
  //               </Card>
  //           </div>

  //           <Card classe="my-64 -mt-[40px] md:mt-0 md2:mt-16 px-24 py-32">
  //               <header className='flex justify-between md2:gap-16 mb-32 md2:flex-col'>
  //                   <Title classe="text-neutral-90 gap-8 font-medium">
  //                       <div>
  //                           <div className='flex items-center gap-8'>
  //                               <SvgUse id="#icon-products-cash" classe="w-20" />
  //                               <p className='block'>Diário de vendas</p>
  //                           </div>
  //                           <span className='ml-32 -mt-4 text-sm text-neutral-70 block'>
  //                               Últimos 7 lançamentos de vendas
  //                           </span>
  //                       </div>
  //                   </Title>

  //                   <div className='flex items-center gap-32 md:flex-col md:gap-10 md:mt-10'>
  //                       <div className='flex items-center gap-8 '>
  //                           <p className='text-neutral-70'>Acumulado em Jun 2022: <span className='font-semibold text-neutral-80'>R$ 7.183,04</span></p>
  //                           <SvgUse id={"#icon-accumulated"} classe="w-24 h-24" />
  //                       </div>

  //                       <Button
  //                           classe="secondary md:w-full md:h-48 md:justify-center"
  //                       >Ver mais</Button>
  //                   </div>
  //               </header>

  //               <div className="mt-32">
  //                   <Table
  //                       options={{
  //                           download: true,
  //                           headerChildren: true,
  //                       }}
  //                       HeaderCustom={HeaderHome}
  //                       arrData={data}
  //                       arrColumns={columns}
  //                   />
  //               </div>
  //           </Card>
  //       </div>
  //   )

		return (
			<main className='w-screen h-full'>
				<NavbarSite />
				<Svg />

				{/* HEADER */}
				<section className="select-none grid place-items-center relative bg-[url('../src/assets/images/home/background.png')] bg-bottom w-full h-[calc(100vh-5rem)]">
					<span className="absolute bg-overlay-home block w-screen h-full left-0 top-0 z-[99999]"></span>
					<span className="absolute bg-[url('../src/assets/images/home/raios.svg')] bg-cover w-screen h-[300px] z-10 left-0 opacity-50 top-0"></span>
					<span className="absolute  block w-screen h-[300px] left-0 z-1 bg-gradient-to-t from-neutral-100/0 to-neutral-100  -top-0"></span>
			
			    <div className='relative z-[99999999999999] flex flex-col items-center justify-center'>
						<div className='flex items-center justify-center'>
							<SvgUse id="#icon_raio_ms" classe="!w-56 !h-56 !-mx-16" />
							<SvgUse id="#icon_raio_ms" classe="!w-56 !h-56 !-mx-16" />
							<SvgUse id="#icon_raio_ms" classe="!w-56 !h-56 !-mx-16" />
						</div>
						<h1 className='displayTitle text-white text-center'>Energia solar, simples <br></br> como deve ser.</h1>
						<p className='paragraph1 w-[24.1875rem] text-white mt-10 mb-48'>
							Ambiente onde grandes consumidores de energia tem a liberdade para escolher de quem comprar a energia
						</p>
						<Button classe="h-56" iconID="#icon_raio_circle_ms" svgClass="!w-32 !h-32">
							<p className='paragraph1'>Peça seu orçamento</p>
						</Button>
					</div>

					<p className='absolute z-[9999999999] bottom-64 hover:cursor-pointer'>
						<SvgUse id="#icon_arrow_to_bottom_ms" classe="!w-28 !h-28 hover:translate-y-4 hover:cursor-pointer" />
					</p>
				</section>

				<section className="select-none grid place-items-center relative w-full min-h-screen bg-white">
				
			
			    <div className='relative z-[99999999999999] flex flex-col items-center justify-center'>
						<div className='flex items-center justify-center'>
							<SvgUse id="#icon_raio_ms" classe="!w-56 !h-56 !-mx-16" />
							<SvgUse id="#icon_raio_ms" classe="!w-56 !h-56 !-mx-16" />
							<SvgUse id="#icon_raio_ms" classe="!w-56 !h-56 !-mx-16" />
						</div>
						<h1 className='title1'>Beneficios de contratar</h1>
						<p className='paragraph1'>Conheça abaixo os benefícios de obter energia renovável</p>

						<div className='max-w-[1200px] mt-64 flex gap-32'>
							<div className='flex flex-col gap-40'>
								<div className='flex gap-12 items-center'>
									<SvgUse id="#icon_paper_ms" classe="!w-40 !h-40" />
									<p className='paragraph1'>Redução na conta de luz</p>
								</div>

								<div className='flex gap-12 items-center'>
									<SvgUse id="#icon_ambiente_ms" classe="!w-40 !h-40" />
									<p className='paragraph1'>Necessidade mínima de manutenção</p>
								</div>

								<div className='flex gap-12 items-center'>
									<SvgUse id="#icon_settings_ms2" classe="w-40 h-40" />
									<p className='paragraph1'>Ocupa pouco espaço e valoriza o imóvel</p>
								</div>

								<div className='flex gap-12 items-center'>
									<SvgUse id="#icon_house_certificate_ms" classe="w-40 h-40" />
									<p className='paragraph1'>Redução na conta de luz</p>
								</div>
							</div>
							<img src="../src/assets/images/home/beneficios.png" alt="imagem beneficios de contratar" className='' />
							<div className='flex flex-col gap-40'>
								<div className='flex gap-12 items-center'>
									<SvgUse id="#icon_ambiente2_sm" classe="w-40 h-40" />
									<p className='paragraph1'>Redução na conta de luz</p>
								</div>

								<div className='flex gap-12 items-center'>
									<SvgUse id="#icon_cicle_life_sm" classe="w-40 h-40" />
									<p className='paragraph1'>Necessidade mínima de manutenção</p>
								</div>

								<div className='flex gap-12 items-center'>
									<SvgUse id="#icon_torre_sm" classe="w-40 h-40" />
									<p className='paragraph1'>Ocupa pouco espaço e valoriza o imóvel</p>
								</div>

								<div className='flex gap-12 items-center'>
									<SvgUse id="#icon_energia_solar_sm" classe="w-40 h-40" />
									<p className='paragraph1'>Redução na conta de luz</p>
								</div>
							</div>
						</div>

						<div className='mt-40 text-center'>
							<p className='paragraph1 mb-16'>Entenda como podemos te ajudar</p>
							<Button classe="h-56" iconID="#icon_raio_circle_ms" svgClass="!w-32 !h-32">
							<p className='paragraph1 text-base'>Peça seu orçamento</p>
						</Button>
							
						</div>
					</div>

				</section>
			
			</main>
		)
}

export default Home