import React from "react"
import { IMonthConsumption } from "../../types"
const MonthValues = (months?: IMonthConsumption) => {
  return (
    <>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Janeiro</p>
        <h3 className="title3">{Number(months?.january_consumption_avg).toFixed(3)}</h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Fevereiro</p>
        <h3 className="title3">{Number(months?.february_consumption_avg).toFixed(3)}</h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Março</p>
        <h3 className="title3">{Number(months?.march_consumption_avg).toFixed(3)}</h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Abril</p>
        <h3 className="title3">{Number(months?.april_consumption_avg).toFixed(3)}</h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Maio</p>
        <h3 className="title3">{Number(months?.may_consumption_avg).toFixed(3)}</h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Junho</p>
        <h3 className="title3">{Number(months?.june_consumption_avg).toFixed(3)}</h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Julho</p>
        <h3 className="title3">{Number(months?.july_consumption_avg).toFixed(3)}</h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Agosto</p>
        <h3 className="title3">{Number(months?.august_consumption_avg).toFixed(3)}</h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Setembro</p>
        <h3 className="title3">{Number(months?.september_consumption_avg).toFixed(3)}</h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Outubro</p>
        <h3 className="title3">{Number(months?.october_consumption_avg).toFixed(3)}</h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Novembro</p>
        <h3 className="title3">{Number(months?.november_consumption_avg).toFixed(3)}</h3>
      </div>
      <div className="w-full md2:max-w-full md2:!w-full rounded-md p-8 border border-neutral-100-10">
        <p className="paragraph2 text-neutral-70">Dezembro</p>
        <h3 className="title3">{Number(months?.december_consumption_avg).toFixed(3)}</h3>
      </div>
    </>
  )

}


export default MonthValues