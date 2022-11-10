import { ReactNode } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

interface IPasswordForm {
  password: string;
  confirmPassword: string;
}
interface ICreateAccountProviderProps {
  email: string;
  children: ReactNode
}
interface ICreateAccountContextData {
  email: string;
  passwordForm: UseFormReturn<IPasswordForm, object>
  createUser: (data: IPasswordForm) => Promise<void>
  isLoading: boolean
}

export type { ICreateAccountProviderProps, ICreateAccountContextData, IPasswordForm };