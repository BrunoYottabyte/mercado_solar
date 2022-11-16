import React, { useEffect } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SvgUse from '../../../../../../components/svg/svgUse';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from '../../../../../../components/DesignSystem/Button';
import {GaleryProvider, useGalery} from './context';
import Slide from './components/Slide';
import { Modal } from '../../../../../../components/DesignSystem/Modal/Modal';
import { ModalContent } from '../../../../../../components/DesignSystem/Modal/ModalContent';
import { ModalHeader } from '../../../../../../components/DesignSystem/Modal';
import Tabs from './components/Tabs';


import { useGlobalContext } from '../../../../../../context/GlobalContext';


const GaleryContent = () => {
  const {setmodalOpen, modalOpen} = useGlobalContext();

	useEffect(() => {
		if (modalOpen.open == false || modalOpen.open == null) {
			clearTimeout(window.timeouthome);
		}
	}, [modalOpen]);

	const openModal = id => {
		setmodalOpen({open: true, id});
	};

  const {
    galeryData: {
      installation_location,
      inverter_location,
      meter_standard,
      roof,
    },
  } = useGalery();
  return (
    <>
      <Slide
        openModal={openModal}
        images={installation_location}
        title="Local da instalação"
        type="installation_location"
      />
      <Slide
        openModal={openModal}
        images={inverter_location}
        title="Local do inversor"
        type="inverter_location"
      />
      <Slide
        openModal={openModal}
        images={meter_standard}
        title="Local do medidor padrão"
        type="meter_standard"
      />
      <Slide images={roof} title="Telhado" type="roof" />

      <Modal className={`w-[37rem]  md2:max-w-[400px] md2:w-[95vw]`}>
        <ModalContent id="gallery">
          <ModalHeader close={false} classeHeader="bg-white title3" text={''}>
            <div className="title3 flex  w-full justify-between items-center">
              Modal de gallery
              <SvgUse id="#icon_help_ms" classe="!w-24 !h-24" />
            </div>
          </ModalHeader>
        </ModalContent>
      </Modal>

    </>
  );
};

const Galery = () => {
  return (
    <GaleryProvider>
      <GaleryContent />
    </GaleryProvider>
  );
};
export default Galery;
