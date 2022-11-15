import {ReactNode} from 'react';
import {FieldValues, UseFormReturn} from 'react-hook-form';

interface IloginForm {
  password: string;
}
interface IAuthenticateProviderProps {
  children: ReactNode;
}
interface IAuthenticateContextData {
  loginForm: UseFormReturn<IloginForm, object>;
  authenticateUser: (data: IloginForm) => Promise<void>;
  isLoading: boolean;
}

export type {
  IAuthenticateProviderProps,
  IAuthenticateContextData,
  IloginForm,
};
