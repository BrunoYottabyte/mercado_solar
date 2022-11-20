import React from 'react';
import Button from '../../components/DesignSystem/Button';
import {Card} from '../../components/DesignSystem/Card';
import Input from './components/Input';

import {IntegratorProvider, useIntegrator} from './context';

const IntegratorContent = () => {
  const {
    form: {control, register, handleSubmit, getValues},
    saveIntegrator,
  } = useIntegrator();
  return (
    <div className="container">
      <Card classe="my-64 px-24 py-32">
        <header className="flex justify-between md2:flex-col md2:gap-16 align-center">
          <h1 className="!title3">Meu Integrador</h1>
        </header>

        <form onSubmit={handleSubmit(saveIntegrator)}>
          <Input control={control} name={'name'} label={'Nome'} />
          <Input control={control} name={'about'} label={'Sobre'} />
          <input accept="image" type="file" {...register('photo')} />
          <Input
            control={control}
            name={'services_offered'}
            label={'Serviços ofertados'}
          />
          <Input
            control={control}
            name={'brands_and_equipment'}
            label={'Marcas e equipamentos'}
          />
          <Input
            control={control}
            name={'service_regions'}
            label={'Regiões atendidas'}
          />
          <Input control={control} name={'federative_unit'} label={'Estado'} />
          <Input control={control} name={'city'} label={'Cidade'} />
          <Button type="submit">Salvar</Button>
        </form>
      </Card>
    </div>
  );
};

const Integrator = () => {
  return (
    <IntegratorProvider>
      <IntegratorContent />
    </IntegratorProvider>
  );
};

export default Integrator;
