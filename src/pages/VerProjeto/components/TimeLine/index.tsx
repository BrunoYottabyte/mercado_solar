import React, { useEffect } from 'react';
import {Card} from '../../../../components/DesignSystem/Card';
import SvgUse from '../../../../components/svg/svgUse';
import { useVerProjeto } from '../../context';
import { useButtonsSteps } from '../ButtonsSteps/context';

const TimeLine = () => {
  
  const { currentStep } = useVerProjeto();
    const updateProgressBar = () => {
        let offsetLeft = document?.querySelector(
          `.point[nivel="${currentStep}"]`
        )?.offsetLeft;
        if(offsetLeft) document.querySelector('.progress_bar').style.width = `${offsetLeft + 2}px`;
    }

    useEffect(() => {
      updateProgressBar();
      window.addEventListener('resize', () => {
        updateProgressBar();
      })
    }, [currentStep])

  const steps = [
    {
      step: 'budget',
      title: 'Orçamento',
      content: ''
    },
    {
      step: 'creation',
      title: 'Criação',
      content: ''
    },
    {
      step: 'first_contact',
      title: 'Primeiro Contato',
      content: ''
    },
    {
      step: 'technical_visit',
      title: 'Visita Técnica',
      content: ''
    },
    {
      step: 'budget_available',
      title: 'Orçamento Disponibilizado',
      content: ''
    },
    {
      step: 'budget_accepted',
      title: 'budget_accepted',
      content: ''
    },
    {
      step: 'payment_made',
      title: 'Orçamento Aprovado',
      content: ''
    },
  ];

  return (
    <Card classe="p-24 md2:mx-0">
      <div className="flex justify-between items-center md:flex-col md:!items-start">
        <div className="flex items-center gap-8 mb-32 md:mb-16">
          <SvgUse id="#icon_clock_ms" classe="w-24 h-24" />
          <h3 className="title3">
            Status do pedido
          </h3>
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
          <div className="progress_bar left-0 transition-all duration-700 absolute top-4 md:top-4 w-[0px] h-[6px] overflow-hidden rounded-md border border-neutral-100-10">
            <span className="block absolute top-0 left-0 w-full h-full bg-primary-pure"></span>
          </div>
          {
            steps.map((item, i) => {
              return(
                <div className="grid place-items-center">
                  <span
                    nivel={item.step}
                    onMouseEnter={e => console.log(e)}
                    className="point block absolute -top-[0px] md:!top-0  border-2 border-primary-pure bg-white z-[99] w-18 h-18 rounded-full"></span>
                  <p className="headline3">{item.title}</p>
                  <p className="text-alert-success paragraph3">18/10/2022</p>
                </div>
              )
            })
          }
     
        </div>
      </div>
    </Card>
  );
};

export default TimeLine;
