import React from 'react';
import {Control, Controller, FieldValues} from 'react-hook-form';
import { GLOBAL } from '../../../../utils/GLOBAL';
import {IInputProps} from './types';

const Input = ({control, name, label, format, classInputContainer, ...rest}: IInputProps) => {
  return (
    <Controller
      control={control as Control<FieldValues, object>}
      name={name}
      render={({field: {onChange, value, name, ref}, fieldState: {error}}) => {
        return (
          <label className={`paragraph2 ${classInputContainer}`}>
            {label}
            <div className={`input-container`}>
              <input
                onChange={onChange}
                value={format ? format(value) : value}
                defaultValue={value}
                name={name}
                ref={ref}
                className="input !bg-white"
                {...rest}
              />
            </div>
            <sub className="text-alert-error">{error?.message}</sub>
          </label>
        );
      }}
    />
  );
};

export default Input;
