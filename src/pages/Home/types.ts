import {ReactNode} from 'react';
import {UseFormReturn} from 'react-hook-form';

interface IHomeProviderProps {
  children: ReactNode;
}

interface IMonthForms {
  january_consumption_avg: number;
  february_consumption_avg: number;
  march_consumption_avg: number;
  april_consumption_avg: number;
  may_consumption_avg: number;
  june_consumption_avg: number;
  july_consumption_avg: number;
  august_consumption_avg: number;
  september_consumption_avg: number;
  october_consumption_avg: number;
  november_consumption_avg: number;
  december_consumption_avg: number;
}

interface IBudgetRequestForm {
  client_name: string;
  client_email: string;
  client_phone: string;
  client_postal_code: string;
  client_type: string;
  client_imovel_type: string;
  average_consumption?: number;
}

interface IHomeContextData {
  monthForm: UseFormReturn<IMonthForms, object>;
  budgetRequestForm: UseFormReturn<IBudgetRequestForm, object>;
  formsAreValids: boolean;
  handleSubmit: () => void;
}

export type {
  IHomeProviderProps,
  IHomeContextData,
  IMonthForms,
  IBudgetRequestForm,
};
