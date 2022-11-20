import {Control, FieldValues} from 'react-hook-form';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  control: any;
  name: string;
  label: string;
  classInputContainer?: string;
  format?: (value: any) => void;
}

export type {IInputProps};
