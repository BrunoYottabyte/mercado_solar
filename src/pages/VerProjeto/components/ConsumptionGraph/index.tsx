import React from "react"
import { options } from '../../data'
import Charts from "react-apexcharts";
import { Card } from "../../../../components/DesignSystem/Card";
import SvgUse from "../../../../components/svg/svgUse";
import { IMonthConsumption } from "./types";

const ConsumptionGraph = (props: IMonthConsumption) => {
  const series = [
		{
			name: "Consumo médio em KHW",
			data: [
        Number(Number(props.january_consumption_avg).toFixed(2)),
        Number(Number(props.february_consumption_avg).toFixed(2)),
        Number(Number(props.march_consumption_avg).toFixed(2)),
        Number(Number(props.april_consumption_avg).toFixed(2)),
        Number(Number(props.may_consumption_avg).toFixed(2)),
        Number(Number(props.june_consumption_avg).toFixed(2)),
        Number(Number(props.july_consumption_avg).toFixed(2)),
        Number(Number(props.august_consumption_avg).toFixed(2)),
        Number(Number(props.september_consumption_avg).toFixed(2)),
        Number(Number(props.october_consumption_avg).toFixed(2)),
        Number(Number(props.november_consumption_avg).toFixed(2)),
        Number(Number(props.december_consumption_avg).toFixed(2))
      ],
		},
	];
  return (
    <Card classe="p-24 md2:mx-0">
      <div className="flex items-center gap-8 mb-32">
        <SvgUse id="#icon_chart_ms" classe="w-24 h-24" />
        <h3 className="title3">Gráfico de Consumo</h3>
      </div>

      <Charts options={options as  ApexCharts.ApexOptions} series={series} type="bar" height={300} />
      <p className="w-full h-24 ancora-timeline"></p>
    </Card>
  )
}

export default ConsumptionGraph