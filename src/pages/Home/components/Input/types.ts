import {Control, FieldValues} from 'react-hook-form';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  control: any;
  name: string;
  label: string;
}

export type {IInputProps};
