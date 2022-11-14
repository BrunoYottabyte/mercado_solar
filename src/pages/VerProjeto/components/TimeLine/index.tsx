import React from 'react';
import {Card} from '../../../../components/DesignSystem/Card';
import SvgUse from '../../../../components/svg/svgUse';

const TimeLine = () => {
  // currentStep = 5;
  return (
    <Card classe="p-24 md2:mx-0">
      <div className="flex justify-between items-center md:flex-col md:!items-start">
        <div className="flex items-center gap-8 mb-32 md:mb-16">
          <SvgUse id="#icon_clock_ms" classe="w-24 h-24" />
          <h3 className="title3">Status do pedido</h3>
        </div>

        <div className="flex md:mb-32">
          <p className="flex items-center gap-4 mr-16">
            <span className="w-10 h-10 rounded-full bg-neutral-70"></span>{' '}
            Agendadas
          </p>
          <p className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-alert-success"></span>{' '}
            Realizadas
          </p>
        </div>
      </div>

      <div className="md:overflow-x-auto">
        <div className="timeline-horizontal-container md:!w-max md:!justify-between relative overflow-x-auto">
          <div className="absolute top-4 md:top-4 w-full h-[6px] overflow-hidden rounded-md border border-neutral-100-10">
            <span className="block absolute top-0 left-0 w-full h-full bg-primary-pure"></span>
          </div>
          {/*  */}
          <div className="grid place-items-center">
            <span
              onMouseEnter={e => console.log(e)}
              className="point block absolute -top-[0px] md:!top-0  border-2 border-primary-pure bg-white z-[99] w-18 h-18 rounded-full"></span>
            <p className="headline3">Orçamento</p>
            <p className="text-alert-success paragraph3">18/10/2022</p>
          </div>
          <div className="grid place-items-center">
            <span
              onMouseEnter={e => console.log(e)}
              className="point block absolute -top-[0px] md:!top-0  border-2 border-primary-pure bg-white z-[99] w-18 h-18 rounded-full"></span>
            <p className="headline3">Criação</p>
            <p className="text-alert-success paragraph3">18/10/2022</p>
          </div>

          <div className="grid place-items-center">
            <span
              onMouseEnter={e => console.log(e)}
              className="point block absolute -top-[0px] md:!top-0  border-2 border-primary-pure bg-white z-[99] w-18 h-18 rounded-full"></span>
            <p className="headline3">Primeiro Contato</p>
            <p className="text-alert-success paragraph3">
              {' '}
              <span className="text-neutral-70 paragraph3">16/10/2022</span> |
              18/10/2022
            </p>
          </div>

          <div className="grid place-items-center">
            <span
              onMouseEnter={e => console.log(e)}
              className="point block absolute -top-[0px] md:!top-0  border-2 border-primary-pure bg-white z-[99] w-18 h-18 rounded-full"></span>
            <p className="headline3">Visita Técnica</p>
            <p className="text-alert-success paragraph3">
              {' '}
              <span className="text-neutral-70 paragraph3">18/10/2022</span> |
              22/10/2022
            </p>
          </div>

          <div className="grid place-items-center">
            <span
              onMouseEnter={e => console.log(e)}
              className="point block absolute -top-[0px] md:!top-0  border-2 border-primary-pure bg-white z-[99] w-18 h-18 rounded-full"></span>
            <p className="headline3">Orçamento Disponibilizado</p>
            <p className="text-neutral-70 paragraph3">20/10/2022</p>
          </div>

          <div className="grid place-items-center">
            <span
              onMouseEnter={e => console.log(e)}
              className="point block absolute -top-[0px] md:!top-0  border-2 border-primary-pure bg-white z-[99] w-18 h-18 rounded-full"></span>
            <p className="headline3">Orçamento Aprovado</p>
            <p className="text-neutral-70 paragraph3">22/10/2022</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TimeLine;
