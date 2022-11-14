import React from 'react';
import {Controller} from 'react-hook-form';
import Select from 'react-select';
import {useHome} from '../../context';
import Input from '../Input';

const BudgetForm = () => {
  const {
    budgetRequestForm: {control},
    handleCheckCep,
  } = useHome();

  const client_imovel_options = [
    {value: 'apartament', label: 'Apartamento'},
    {value: 'house', label: 'Casa'},
  ];

  const cliente_type_options = [
    {value: 'pf', label: 'Pessoa Física'},
    {value: 'pj', label: 'Pessoa Jurídica'},
  ];
  return (
    <form onSubmit={e => e.preventDefault()}>
      <Input
        control={control}
        name="client_name"
        label="Nome"
        placeholder="Digite seu nome"
      />

      <div className="flex w-full gap-16">
        <Input
          control={control}
          label="E-mail"
          name="client_email"
          placeholder="Digite seu e-mail"
        />

        <Input
          type="tel"
          name="client_phone"
          control={control}
          label="Celular"
          placeholder="(00) 00000-0000"
        />
      </div>

      <div className="flex w-full gap-16">
        <Input
          control={control}
          name="client_postal_code"
          label="CEP"
          onBlur={e => handleCheckCep(e.target.value)}
          placeholder="Digite seu CEP"
        />

        <label className="paragraph2 ">
          Tipo de imóvel
          <div
            className={`select-container lg hover:!border-neutral-30 min-w-[16rem] md2:min-w-[0] md2:w-full`}>
            <Controller
              control={control}
              name="client_imovel"
              render={({
                field: {onChange, value, name, ref},
                fieldState: {error},
              }) => (
                <>
                  <Select
                    ref={ref}
                    className={`select-container select-multiple hover:!border hover:border-neutral-30 hover:rounded-md`}
                    placeholder="Selecione o tipo de imóvel"
                    classNamePrefix="select"
                    options={client_imovel_options}
                    isMulti={false}
                    onChange={val => onChange(val?.value)}
                    value={client_imovel_options.find(c => c.value === value)}
                    closeMenuOnSelect={false}
                  />
                  <sub className="text-alert-error">{error?.message}</sub>
                </>
              )}
            />
          </div>
        </label>
      </div>
      <div className="flex w-full gap-16">
        <label className="paragraph2 ">
          Pessoa física ou jurídica?
          <div
            className={`select-container lg hover:!border-neutral-30 min-w-[16rem] md2:min-w-[0] md2:w-full`}>
            <Controller
              control={control}
              name="client_type"
              render={({
                field: {onChange, value, name, ref},
                fieldState: {error},
              }) => (
                <>
                  <Select
                    ref={ref}
                    className={`select-container select-multiple hover:!border hover:border-neutral-30 hover:rounded-md`}
                    placeholder="Selecione o tipo de imóvel"
                    classNamePrefix="select"
                    options={cliente_type_options}
                    isMulti={false}
                    onChange={val => onChange(val?.value)}
                    value={cliente_type_options.find(c => c.value === value)}
                    closeMenuOnSelect={false}
                  />
                  <sub className="text-alert-error">{error?.message}</sub>
                </>
              )}
            />
          </div>
        </label>
        <label className="paragraph2 ">
          Precisará de um representante?
          <div
            className={`select-container lg hover:!border-neutral-30 min-w-[16rem] md2:min-w-[0] md2:w-full`}>
            <Controller
              control={control}
              name="need_representative"
              render={({
                field: {onChange, value, name, ref},
                fieldState: {error},
              }) => (
                <>
                  <input type="checkbox" onChange={onChange} checked={value} />
                  <sub className="text-alert-error">{error?.message}</sub>
                </>
              )}
            />
          </div>
        </label>
      </div>
    </form>
  );
};

export default BudgetForm;
