import React from 'react';
import Button from '../../../../components/DesignSystem/Button';
import {useGlobalContext} from '../../../../context/GlobalContext';
import {useAuthContext} from '../../../../context/useAuthContext';
import {ButtonsStepsProvider, useButtonsSteps} from './context';

const ButtonsStepsContent = () => {
  const {setmodalOpen} = useGlobalContext();
  const {userType} = useAuthContext();
  const {
    isLoading,
    currentStep,
    firstContactMade,
    technicalVisitMade,
    paymentMade,
  } = useButtonsSteps();

  if (currentStep === 'creation' && userType === 'representative') {
    return (
      <div className="w-full flex md:flex-col justify-end items-center">
        <Button
          className="btn h-56 md2:w-full"
          svgClass="!w-20 !h-20"
          iconID="#icon_check_ms"
          disabled={isLoading}
          onClick={() => firstContactMade()}>
          Primeiro Contato Realizado
        </Button>
      </div>
    );
  }

  if (currentStep === 'first_contact' && userType === 'representative') {
    return (
      <div className="w-full flex md:flex-col justify-end items-center">
        <Button
          className="btn h-56 md2:w-full"
          svgClass="!w-20 !h-20"
          iconID="#icon_check_ms"
          disabled={isLoading}
          onClick={() => technicalVisitMade()}>
          Visita Técnica Realizada
        </Button>
      </div>
    );
  }

  if (currentStep === 'budget_accepted' && userType === 'representative') {
    return (
      <div className="w-full flex md:flex-col justify-end items-center">
        <Button
          className="btn h-56 md2:w-full"
          svgClass="!w-20 !h-20"
          iconID="#icon_check_ms"
          disabled={isLoading}
          onClick={() => paymentMade()}>
          Pagamento Realizado
        </Button>
      </div>
    );
  }

  if (currentStep === 'payment_made' && userType === 'representative') {
    return (
      <div className="w-full flex md:flex-col justify-end items-center">
        <Button
          className="btn h-56 md2:w-full"
          svgClass="!w-20 !h-20"
          iconID="#icon_check_ms"
          disabled={isLoading}
          onClick={() => setmodalOpen({open: true, id: 'feedbackTechnical'})}>
          Avaliar técnico
        </Button>
      </div>
    );
  }

  return <></>;

  // return (
  //   <div className="w-full flex md:flex-col justify-end items-center">
  //     <Button
  //       className="btn h-56  mr-14 md2:w-full md:mr-0 md:mb-8"
  //       svgClass="!w-24 !h-20"
  //       iconID="#icon_close_ms">
  //       Recusar
  //     </Button>

  //     <Button
  //       className="btn h-56 md2:w-full"
  //       svgClass="!w-20 !h-20"
  //       iconID="#icon_check_ms"
  //       onClick={() => setmodalOpen({open: true, id: 'feedbackTechnical'})}>
  //       Aprovar
  //     </Button>
  //   </div>
  // );
};

const ButtonsSteps = () => {
  return (
    <ButtonsStepsProvider>
      <ButtonsStepsContent />
    </ButtonsStepsProvider>
  );
};
export default ButtonsSteps;
