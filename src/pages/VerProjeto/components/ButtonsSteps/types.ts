import {ReactNode} from 'react';
import {CurrentStepType} from '../../types';

interface IButtonsStepsProviderProps {
  children: ReactNode;
}
interface IButtonsStepsContextData {
  isLoading: boolean;
  currentStep: CurrentStepType;
  firstContactMade: VoidFunction;
  technicalVisitMade: VoidFunction;
  paymentMade: VoidFunction;
}

export type {IButtonsStepsProviderProps, IButtonsStepsContextData};
