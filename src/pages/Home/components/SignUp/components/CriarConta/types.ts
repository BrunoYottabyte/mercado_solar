import {ReactNode} from 'react';
import {FieldValues, UseFormReturn} from 'react-hook-form';

interface IPasswordForm {
  password: string;
  confirmPassword: string;
}
interface ICreateAccountProviderProps {
  children: ReactNode;
}
interface ICreateAccountContextData {
  passwordForm: UseFormReturn<IPasswordForm, object>;
  createUser: (data: IPasswordForm) => Promise<void>;
  isLoading: boolean;
}

export type {
  ICreateAccountProviderProps,
  ICreateAccountContextData,
  IPasswordForm,
};
