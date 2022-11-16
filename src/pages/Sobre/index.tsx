import React, {useEffect} from 'react';

import NavbarSite from '../../assets/componentsSite/navbar';
import {ModalHeader} from '../../components/DesignSystem/Modal';
import {Modal} from '../../components/DesignSystem/Modal/Modal';
import {ModalContent} from '../../components/DesignSystem/Modal/ModalContent';
import Svg from '../../components/svg/svg';
import SvgUse from '../../components/svg/svgUse';
import {useGlobalContext} from '../../context/GlobalContext';

import {Swiper, SwiperSlide} from 'swiper/react';
// import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import 'swiper/css';
import 'swiper/css/pagination';
import FooterSite from '../Home/components/Footer';
import { useNavigate } from 'react-router-dom';
import principal from '../../assets/images/sobre-nos/img1.png'
const Sobre = () => {
  const {setmodalOpen, modalOpen} = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (modalOpen.open == false || modalOpen.open == null) {
      clearTimeout(window.timeouthome);
    }
  }, [modalOpen]);

  const openModal = id => {
    setmodalOpen({open: true, id, position: 'right'});
  };

  const changeViewImg = (img) => {
    document.querySelector('.mainImg').src = `../src/assets/images/sobre-nos/${img}.png`
  }
  return (
    <>
      <Modal
        className={
          'w-[37rem] h-full z-[999999999999999999999999999999999999999999]  md2:max-w-[400px] md2:w-[95vw]'
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
							<li onClick={() => {
                navigate('/home');
                setmodalOpen({open: false, id: false, position: 'right'});
              }}>
									Home
							</li>
							<li
								onClick={() => {
									setmodalOpen({open: false, id: false, position: 'right'});
									navigate('/login');
								}}>
								Entrar
							</li>
						
						</ul>
					</section>
        </ModalContent>
      </Modal>
      <main className="w-screen h-full">
        <NavbarSite sobre={true} openModal={openModal} />
        <Svg />

        <section className="md2:px-24 mt-[5rem] max-w-[1100px] py-28 mx-auto">
          <div className="flex items-center justify-between pb-40 border border-transparent border-b-neutral-30 mb-40">
            <div className="flex flex-col w-full gap-8 ">
              <div className="container-sun flex gap-8 items-center">
                {[0, 1, 2, 3, 4].map((item, i) =>
                  i != 4 ? (
                    <SvgUse
                      id="#icon_sun_ms"
                      classe="!w-24 !h-24"
                      key={`${i}-svg`}
                    />
                  ) : (
                    <SvgUse
                      id="#icon_sun_vazio_ms"
                      classe="!w-24 !h-24"
                      key={`${i}-svg`}
                    />
                  ),
                )}
              </div>
              <p className="title3 md2:headline1">Megliosole Energia Renovavel Ltda</p>
            </div>
            <img
              src="../src/assets/images/home/logomeglio.png"
              alt="logo meglio"
            />
          </div>
          <div className="flex justify-between md2:flex-col md2:gap-24 gap-[13rem] items-start mt-16">
            <h2 className="title2 whitespace-nowrap">Sobre empresa</h2>

            <p className="paragraph1 text-neutral-70">
              Somos especialistas em sistemas de geração de energia solar,
              focados no atendimento personalizado de nossos clientes,
              residenciais ou empresariais, que desejem economizar sem abrir mão
              da qualidade, confiança e de um projeto que atenda integralmente à
              sua demanda atual e futura. A MeglioSole realiza um trabalho
              diferenciado no atendimento às necessidades do cliente, com
              profissionais qualificados para que todos os benefícios da Energia
              Solar sejam obtidos, desde a concepção do projeto, aprovação junto
              à concessionária de energia, aquisição dos materiais e,
              principalmente, qualidade da instalação.
            </p>
          </div>
        </section>

        <section className=" w-full flex justify-center h-[36.25rem] bg-primary-darkness bg-background-sobre-nos relative">
          <span className="absolute bg-[url('../src/assets/images/home/raios.svg')] bg-cover w-screen h-[300px] z-10 left-0 opacity-30 top-0"></span>
          <span className="absolute  block w-screen h-[300px] left-0 z-[99] bg-gradient-to-t from-primary-darkness to-primary-darkness/10  -top-0"></span>

          <div className="md2:px-24 md2:w-[100vw] w-[1100px] z-[999] flex justify-center items-center relative bg-gradient-sobre-nos h-full">
            <div className="flex flex-col gap-32 w-[50rem] overflow-x-auto">
              <img
                className="max-h-[25rem] mainImg"
                src={principal}
                alt=""
              />

              <div className="flex gap-32">
                <Swiper
                  direction="horizontal"
                  className="w-full md2:gap-24"
                  spaceBetween={32}
                  slidesPerView={'auto'}>
                  {['img2', 'img3', 'img4', 'img5'].map((item, i) => {
                    return (
                      <SwiperSlide className="!w-max cursor-pointer" onClick={() => changeViewImg(item)}>
                        <img
                          src={`../src/assets/images/sobre-nos/${item}.png`}
                          alt=""
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className="md2:w-[100vw] w-[1100px] mx-auto ">
          <div className="flex py-24 md2:flex-col border border-transparent border-b-neutral-60/30">
            <div className="flex-1 p-24">
              <h3 className="title3 flex items-center gap-8">
                <SvgUse id="#icon_suitcase_ms" classe="w-24 h-24" />
                Serviços Ofertados
              </h3>
              <p className="paragraph1 mt-16 text-neutral-70">
                Projeto, fornecimento e instalação de sistemas fotovoltaicos.
              </p>
            </div>
            <div className="flex-1 p-24">
              <h3 className="title3 flex items-center gap-8">
                <SvgUse id="#icon_settings_ms3" classe="w-24 h-24" />
                Marcas e equipamentos
              </h3>
              <p className="paragraph1 mt-16 text-neutral-70">
                Placas Solares -Canadian -Longi -Risen. Inversores: -Sungrow
                -Sofar -Fronius
              </p>
            </div>
            <div className="flex-1 p-24">
              <h3 className="title3 flex items-center gap-8">
                <SvgUse id="#icon_location_ms" classe="w-24 h-24" />
                Regiões de atendimento
              </h3>
              <p className="paragraph1 mt-16 text-neutral-70">MT</p>
            </div>
          </div>
          <div className="flex md2:my-24 my-48 items-center flex-col gap-8">
            <SvgUse id="#icon_three_points" classe="w-24 h-24" />
            <h2 className="title2 mb-48">Outros integradores</h2>

            <Swiper
              direction="horizontal"
              className="w-full"
              spaceBetween={32}
              slidesPerView={'auto'}>
              {[0, 1, 2, 3,4,5].map((item, i) => {
                return (
                  <SwiperSlide className="!w-max">
                    <div className="overflow-hidden md2:min-h-[16rem] min-h-[21.25rem] w-[17.5rem] border border-neutral-30 rounded-md">
                      <div className='h-[12rem] md2:h-[10rem] bg-white flex items-center'>
												<img
													src="../src/assets/images/sobre-nos/megliobig.png"
													alt=""
													className=' object-cover'
												/>
											</div>
                      <div className="p-16 paragraph1 border border-transparent h-full border-t-neutral-30 bg-white">
                        HS Energia Solar e Instalações Elétricas
                        <div className="mt-24 ">
                          <p className="headline3">Endereço</p>
                          <p className="paragraph2 text-neutral-70">
                            Cuiabá - Mato Grosso
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>


        </section>

				<FooterSite />
      </main>
    </>
  );
};

export default Sobre;
