import React from 'react';
import {Control, Controller, FieldValues} from 'react-hook-form';
import {IInputProps} from './types';

const Input = ({control, classe, name, label, ...rest}: IInputProps) => {
  return (
    <Controller
      control={control as Control<FieldValues, object>}
      name={name}
      render={({field: {onChange, value, name, ref}, fieldState: {error}}) => {
        return (
          <label className={`paragraph2 ${classe}`}>
            {label}
            <div className={`input-container`}>
              <input
                onChange={onChange}
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
