import React from 'react';
import {useHome} from '../../context';
import Input from '../Input';
const MonthsForm = () => {
  const {
    monthForm: {register, control},
  } = useHome();

  return (
    <section className="py-16 grid grid-cols-4 gap-16 md2:grid-cols-3 md:grid-cols-2">
      <Input
        control={control}
        type="number"
        min={0}
        name="january_consumption_avg"
        label="Janeiro"
        className="input !bg-white h-48 !rounded-md"
      />

      <Input
        control={control}
        type="number"
        min={0}
        name="february_consumption_avg"
        label="Fevereiro"
        className="input !bg-white h-48 !rounded-md"
      />

      <Input
        control={control}
        type="number"
        min={0}
        name="march_consumption_avg"
        label="Março"
        className="input !bg-white h-48 !rounded-md"
      />

      <Input
        control={control}
        type="number"
        min={0}
        name="april_consumption_avg"
        label="Abril"
        className="input !bg-white h-48 !rounded-md"
      />

      {/*  */}

      <Input
        control={control}
        type="number"
        min={0}
        name="may_consumption_avg"
        label="Maio"
        className="input !bg-white h-48 !rounded-md"
      />

      <Input
        control={control}
        type="number"
        min={0}
        name="june_consumption_avg"
        label="Junho"
        className="input !bg-white h-48 !rounded-md"
      />

      <Input
        control={control}
        type="number"
        min={0}
        name="july_consumption_avg"
        label="Julho"
        className="input !bg-white h-48 !rounded-md"
      />

      <Input
        control={control}
        type="number"
        min={0}
        name="august_consumption_avg"
        label="Agosto"
        className="input !bg-white h-48 !rounded-md"
      />

      {/*  */}

      <Input
        control={control}
        type="number"
        min={0}
        name="september_consumption_avg"
        label="Setembro"
        className="input !bg-white h-48 !rounded-md"
      />

      <Input
        control={control}
        type="number"
        min={0}
        name="october_consumption_avg"
        label="Outubro"
        className="input !bg-white h-48 !rounded-md"
      />

      <Input
        control={control}
        type="number"
        min={0}
        name="november_consumption_avg"
        label="Novembro"
        className="input !bg-white h-48 !rounded-md"
      />

      <Input
        control={control}
        type="number"
        min={0}
        name="december_consumption_avg"
        label="Dezembro"
        className="input !bg-white h-48 !rounded-md"
      />
    </section>
  );
};

export default MonthsForm;
