import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SvgUse from '../../../../../../components/svg/svgUse';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from '../../../../../../components/DesignSystem/Button';
import {GaleryProvider, useGalery} from './context';
import Slide from './components/Slide';

const GaleryContent = () => {
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
        images={installation_location}
        title="Local da instalação"
        type="installation_location"
      />
      <Slide
        images={inverter_location}
        title="Local do inversor"
        type="inverter_location"
      />
      <Slide
        images={meter_standard}
        title="Local do medidor padrão"
        type="meter_standard"
      />
      <Slide images={roof} title="Telhado" type="roof" />
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
