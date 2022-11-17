import React, {createContext, useContext, useEffect, useState} from 'react';
import {api} from '../../../../services/api';
import {useVerProjeto} from '../../context';
import {CurrentStepType} from '../../types';
import {format} from 'date-fns';

import {IButtonsStepsProviderProps, IButtonsStepsContextData} from './types';

const ButtonsStepsContext = createContext({} as IButtonsStepsContextData);

export const ButtonsStepsProvider: React.FC<IButtonsStepsProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {budgetRequest, setBudgetRequest} = useVerProjeto();
  const [currentStep, setCurrentStep] = useState<CurrentStepType>('budget');

  const {setCurrentStep: setStepSelected} = useVerProjeto();

  useEffect(() => {
    setStepSelected(currentStep);
  }, [currentStep]);

  const technicalVisitMade = () => {
    if (!budgetRequest) return;
    setIsLoading(true);
    api
      .patch(`/budget_request/${budgetRequest.id}/`, {
        current_step: 'technical_visit',
      })
      .then(() => {
        setCurrentStep('technical_visit');
        setBudgetRequest({
          ...budgetRequest,
          technical_visit_at: format(new Date(), 'yyyy-MM-dd'),
        });
      })
      .catch(() => {});
    setIsLoading(false);
  };

  const firstContactMade = () => {
    if (!budgetRequest) return;
    setIsLoading(true);
    api
      .patch(`/budget_request/${budgetRequest.id}/`, {
        current_step: 'first_contact',
      })
      .then(() => {
        setCurrentStep('first_contact');
        setBudgetRequest({
          ...budgetRequest,
          first_contact_at: format(new Date(), 'yyyy-MM-dd'),
        });
      })
      .catch(() => {});
    setIsLoading(false);
  };

  const paymentMade = () => {
    if (!budgetRequest) return;
    setIsLoading(true);
    api
      .patch(`/budget_request/${budgetRequest.id}/`, {
        current_step: 'payment_made',
      })
      .then(() => {
        setCurrentStep('payment_made');
        setBudgetRequest({
          ...budgetRequest,
          payment_made_at: format(new Date(), 'dd/MM/yyyy'),
        });
      })
      .catch(() => {});
    setIsLoading(false);
  };

  useEffect(() => {
    if (!budgetRequest) return;
    setCurrentStep(budgetRequest?.current_step);
  }, [budgetRequest]);

  return (
    <ButtonsStepsContext.Provider
      value={{
        isLoading,
        currentStep,
        firstContactMade,
        technicalVisitMade,
        paymentMade,
      }}>
      {children}
    </ButtonsStepsContext.Provider>
  );
};

export const useButtonsSteps = (): IButtonsStepsContextData => {
  const context = useContext(ButtonsStepsContext);

  if (!context)
    throw new Error(
      'useButtonsSteps must be used within a ButtonsStepsProvider',
    );

  return context;
};
