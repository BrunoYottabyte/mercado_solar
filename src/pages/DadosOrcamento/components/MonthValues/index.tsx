import React from 'react';
import currency from '../../../../utils/currency';
import {IMonthConsumption} from '../../types';
const MonthValues = (months?: IMonthConsumption) => {
  return (
    <>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Janeiro</p>
        <h3 className="title3">
          {months?.january_consumption_avg &&
            currency((months?.january_consumption_avg).toString())}
        </h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Fevereiro</p>
        <h3 className="title3">
          {months?.february_consumption_avg &&
            currency((months?.february_consumption_avg).toString())}
        </h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Março</p>
        <h3 className="title3">
          {months?.march_consumption_avg &&
            currency((months?.march_consumption_avg).toString())}
        </h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Abril</p>
        <h3 className="title3">
          {months?.april_consumption_avg &&
            currency((months?.april_consumption_avg).toString())}
        </h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Maio</p>
        <h3 className="title3">
          {months?.may_consumption_avg &&
            currency((months?.may_consumption_avg).toString())}
        </h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Junho</p>
        <h3 className="title3">
          {months?.june_consumption_avg &&
            currency((months?.june_consumption_avg).toString())}
        </h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Julho</p>
        <h3 className="title3">
          {months?.july_consumption_avg &&
            currency((months?.july_consumption_avg).toString())}
        </h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Agosto</p>
        <h3 className="title3">
          {months?.august_consumption_avg &&
            currency((months?.august_consumption_avg).toString())}
        </h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Setembro</p>
        <h3 className="title3">
          {months?.september_consumption_avg &&
            currency((months?.september_consumption_avg).toString())}
        </h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Outubro</p>
        <h3 className="title3">
          {months?.october_consumption_avg &&
            currency((months?.october_consumption_avg).toString())}
        </h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Novembro</p>
        <h3 className="title3">
          {months?.november_consumption_avg &&
            currency((months?.november_consumption_avg).toString())}
        </h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Dezembro</p>
        <h3 className="title3">
          {months?.december_consumption_avg &&
            currency((months?.december_consumption_avg).toString())}
        </h3>
      </div>
    </>
  );
};

export default MonthValues;
