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

				<section>

				</section>
			</main>
		)
}

export default Home