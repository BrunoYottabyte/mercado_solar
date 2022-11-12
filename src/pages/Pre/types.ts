import { MutableRefObject, ReactNode } from "react";

interface IMonthConsumption {
  january_consumption_avg: number,
  february_consumption_avg: number,
  march_consumption_avg: number,
  april_consumption_avg: number,
  may_consumption_avg: number,
  june_consumption_avg: number,
  july_consumption_avg: number,
  august_consumption_avg: number,
  september_consumption_avg: number,
  october_consumption_avg: number,
  november_consumption_avg: number,
  december_consumption_avg: number
}

interface IBudgetRequest {
  id: string
  client_name: string
  client_email: string
  client_phone: string
  client_postal_code: string
  client_type: 'pf' | 'pj'
  average_consumption?: number
  month_consumption: IMonthConsumption | null
  federative_unit: string
  city: string
  budget_request_status: string
  status: string
  representative: string
  integrator: string
  created_at: string,
  updated_at: string 
}

interface IStateProps {
  budgetRequestId: number;
}

interface IPrePropostaProviderProps {
  children: ReactNode;
}

interface IChartProps {
  name: string;
  data: number[]
}
interface IPrePropostaContextData {
  budgetRequest: IBudgetRequest | undefined;
  handleNavigate: (path: string, params?: object) => void;
  address: string
  generation: IChartProps
  playback: IChartProps
  downloadRef: MutableRefObject<HTMLElement | undefined>
  handleDownloadPdf: () => void
  downloadIsLoading: boolean
}

export type { IPrePropostaProviderProps, IPrePropostaContextData, IStateProps, IBudgetRequest, IChartProps };