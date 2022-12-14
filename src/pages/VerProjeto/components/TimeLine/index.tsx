import React, {useEffect, useState} from 'react';
import {Card} from '../../../../components/DesignSystem/Card';
import SvgUse from '../../../../components/svg/svgUse';
import {useVerProjeto} from '../../context';
import {format} from 'date-fns';

const TimeLine = () => {
  const {currentStep, budgetRequest} = useVerProjeto();
  const [notFirstRequest, setNotFirstRequest] = useState(false);
  const updateProgressBar = () => {
    let offsetLeft = document?.querySelector(
      `.point[nivel="${currentStep}"]`,
    )?.offsetLeft;
    if (offsetLeft)
      document.querySelector('.progress_bar').style.width = `${
        offsetLeft + 4
      }px`;
  };

  useEffect(() => {
    setTimeout(() => {
      updateProgressBar();
    }, 700);
    window.addEventListener('resize', () => {
      updateProgressBar();
    });
  }, [currentStep]);

  const steps = [
    {
      step: 'budget',
      title: 'Orçamento',
      content: budgetRequest?.created_at
        ? format(new Date(budgetRequest?.created_at), 'dd/MM/yyyy')
        : 'Aguardando',
    },
    {
      step: 'creation',
      title: 'Criação',
      content: budgetRequest?.budget_created_at
        ? format(new Date(budgetRequest?.budget_created_at), 'dd/MM/yyyy')
        : 'Aguardando',
    },
    {
      step: 'first_contact',
      title: 'Primeiro Contato',
      content: budgetRequest?.first_contact_at
        ? format(new Date(budgetRequest?.first_contact_at), 'dd/MM/yyyy')
        : 'Aguardando',
    },
    {
      step: 'technical_visit',
      title: 'Visita Técnica',
      content: budgetRequest?.technical_visit_at
        ? format(new Date(budgetRequest?.technical_visit_at), 'dd/MM/yyyy')
        : 'Aguardando',
    },
    {
      step: 'budget_available',
      title: 'Orçamento Disponibilizado',
      content: budgetRequest?.budget_available_at
        ? format(new Date(budgetRequest?.budget_available_at), 'dd/MM/yyyy')
        : 'Aguardando',
    },
    {
      step: 'budget_accepted',
      title: 'Orçamento aceito',
      content: budgetRequest?.budget_accepted_at
        ? format(new Date(budgetRequest?.budget_accepted_at), 'dd/MM/yyyy')
        : 'Aguardando',
    },
    {
      step: 'payment_made',
      title: 'Pagamento Realizado',
      content: budgetRequest?.payment_made_at
        ? format(new Date(budgetRequest?.payment_made_at), 'dd/MM/yyyy')
        : 'Aguardando',
    },
    {
      step: 'sale_finished',
      title: 'Venda finalizada',
      content: budgetRequest?.sale_finished_at
        ? format(new Date(budgetRequest?.sale_finished_at), 'dd/MM/yyyy')
        : 'Aguardando',
    },
    {
      step: 'installation_finished',
      title: 'Instalação Concluída',
      content: budgetRequest?.installation_finished_at
        ? format(
            new Date(budgetRequest?.installation_finished_at),
            'dd/MM/yyyy',
          )
        : 'Aguardando',
    },
  ];

  return (
    <Card classe="timeline-card p-24 md2:mx-0">
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
          <div className="progress_bar left-0 transition-all duration-700 absolute top-4 md:top-4 w-[0px] h-[6px] overflow-hidden rounded-md border border-neutral-100-10">
            <span className="block absolute top-0 left-0 w-full h-full bg-primary-pure"></span>
          </div>
          {steps.map((item, i) => {
            return (
              <div className="grid place-items-center">
                <span
                  nivel={item.step}
                  className="point block transition-all duration-500 absolute -top-[0px] md:!top-0  border-2 border-primary-pure bg-white z-[99] w-18 h-18 rounded-full"
                  style={{
                    background:
                      currentStep === item.step ? '#905641' : undefined,
                  }}></span>
                <p className="headline3 whitespace-nowrap">{item.title}</p>
                <p className="text-alert-success paragraph3">{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default TimeLine;
