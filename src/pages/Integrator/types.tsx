import {ReactNode} from 'react';
import {UseFormReturn} from 'react-hook-form';

interface IIntegratorForm {
  id?: string;
  name: string;
  about: string;
  photo: any;
  services_offered: string;
  brands_and_equipment: string;
  service_regions: string;
  federative_unit: string;
  city: string;
}
interface IIntegratorProviderProps {
  children: ReactNode;
}
interface IIntegratorContextData {
  form: UseFormReturn<IIntegratorForm, any>;
  saveIntegrator: (data: IIntegratorForm) => void;
}

export type {IIntegratorProviderProps, IIntegratorContextData, IIntegratorForm};
