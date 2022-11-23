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
import {useNavigate} from 'react-router-dom';
import logoMeglio from '../../assets/images/home/logomeglio.png';
import {AboutProvider, useAbout} from './context';
import img1 from '../../assets/images/sobre-nos/img1.png';
import img2 from '../../assets/images/sobre-nos/img2.png';
import Button from '../../components/DesignSystem/Button';

const SobreContent = () => {
  const {setmodalOpen, modalOpen} = useGlobalContext();
  const navigate = useNavigate();
  const {selectedAbout, abouts} = useAbout();

  useEffect(() => {
    if (modalOpen.open == false || modalOpen.open == null) {
      clearTimeout(window.timeouthome);
    }
  }, [modalOpen]);

  const openModal = id => {
    setmodalOpen({open: true, id, position: 'right'});
  };

  const changeViewImg = img => {
    document.querySelector('.mainImg').src = img;
  };
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
              <li
                onClick={() => {
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
              <p className="title3 md2:headline1">{selectedAbout?.name}</p>
            </div>
            <img
              className="max-w-[120px] max-h-[48px] rounded-md"
              src={selectedAbout?.photo ? selectedAbout.photo : logoMeglio}
              alt="logo"
            />
          </div>
          <div className="flex justify-between md2:flex-col md2:gap-24 gap-[13rem] items-start mt-16">
            <h2 className="title2 whitespace-nowrap">Sobre empresa</h2>

            <p className="paragraph1 text-neutral-70">{selectedAbout?.about}</p>
          </div>
        </section>

        <section className=" w-full flex justify-center h-[36.25rem] bg-primary-darkness bg-background-sobre-nos relative">
          <span className="absolute bg-[url('/src/assets/images/home/raios.svg')] bg-cover w-screen h-[300px] z-10 left-0 opacity-30 top-0"></span>
          <span className="absolute  block w-screen h-[300px] left-0 z-[99] bg-gradient-to-t from-primary-darkness to-primary-darkness/10  -top-0"></span>

          <div className="md2:px-24 md2:w-[100vw] w-[1100px] z-[999] flex justify-center items-center relative bg-gradient-sobre-nos h-full">
            <div className="flex flex-col gap-32 w-[50rem] overflow-x-auto">
              <img
                className="max-h-[25rem] mainImg rounded-md"
                src={
                  selectedAbout?.images.length
                    ? selectedAbout?.images[0].image
                    : img1
                }
                alt=""
              />

              <div className="flex gap-32">
                <Swiper
                  direction="horizontal"
                  className="w-full md2:gap-24"
                  spaceBetween={32}
                  slidesPerView={'auto'}>
                  {selectedAbout?.images.map((item, i) => {
                    return (
                      <SwiperSlide
                        className="!w-max cursor-pointer"
                        onClick={() => changeViewImg(item.image)}>
                        <img
                          src={item.image}
                          className="max-w-[176px] max-h-[87px] rounded-md"
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
                {selectedAbout?.services_offered}
              </p>
            </div>
            <div className="flex-1 p-24">
              <h3 className="title3 flex items-center gap-8">
                <SvgUse id="#icon_settings_ms3" classe="w-24 h-24" />
                Marcas e equipamentos
              </h3>
              <p className="paragraph1 mt-16 text-neutral-70">
                {selectedAbout?.brands_and_equipment}
              </p>
            </div>
            <div className="flex-1 p-24">
              <h3 className="title3 flex items-center gap-8">
                <SvgUse id="#icon_location_ms" classe="w-24 h-24" />
                Regiões de atendimento
              </h3>
              <p className="paragraph1 mt-16 text-neutral-70">
                {selectedAbout?.service_regions}
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <Button
                svgClass="!w-20 !h-20"
                iconID="#icon_send_email"
                className="btn h-48 quaternario md2:w-full">
                <a
                  href={`whatsapp://send?text=Veja essa pré proposta do Mercado Solar
										\n https://mercado-solar.vercel.app/sobre-nos/${selectedAbout?.id}/`}>
                  Compartilhar via whatsapp
                </a>
              </Button>
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
              {abouts.map((item, i) => {
                return (
                  <SwiperSlide className="!w-max">
                    <div className="overflow-hidden md2:min-h-[16rem] min-h-[21.25rem] w-[17.5rem] border border-neutral-30 rounded-md">
                      <div className="h-[12rem] md2:h-[10rem] bg-white flex items-center">
                        <img
                          src={item.photo}
                          alt=""
                          className=" object-cover"
                        />
                      </div>
                      <div
                        onClick={() => navigate(`/sobre-nos/${item.id}/`)}
                        className="p-16 paragraph1 cursor-pointer border border-transparent h-full border-t-neutral-30 bg-white">
                        {item.name}
                        <div className="mt-24 ">
                          <p className="headline3">Endereço</p>
                          <p className="paragraph2 text-neutral-70">
                            {`${item.city} - ${item.federative_unit}`}
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

const Sobre = () => {
  return (
    <AboutProvider>
      <SobreContent />
    </AboutProvider>
  );
};

export default Sobre;
