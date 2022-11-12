import { ReactNode } from "react";

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

interface IObservationProps {
  id: number;
  observation: string;
}

interface IGeneralObservation {
  id: number
  budget_request: number
  contact_email: string
  contact_name: string
  contact_phone: string
  latitude: number
  longitude: number
  observations: IObservationProps[]
  solar_orientation: string
}

interface ICategory {
  id: number
  name: string
  description: string
}

interface IBrand {
  id: number
  name: string
  description: string
  photo: string
}

interface IImages {
  id: number
  image: string
  default: boolean
}
interface IProduct {
  id: number
  name: string
  description: string
  aditional_information: string
  technical_details: string
  price: number
  created_at: Date
  brand: IBrand
  category: ICategory
  images: IImages[]
}

interface IBudget {
  id: number
  total: number
  status: 'approved' | 'pending' | 'disapproved'
  budget_request: number
  products: IProduct[]
}

interface IBudgetRequest {
  id: string
  user: string
  client_name: string
  client_email: string
  client_phone: string
  client_postal_code: string
  client_type: 'pf' | 'pj'
  average_consumption?: number
  month_consumption: IMonthConsumption | null
  general_observation: IGeneralObservation
  federative_unit: string
  budgets: IBudget[]
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

interface IVerProjetoProviderProps {
  children: ReactNode;
}

interface IChartProps {
  name: string;
  data: number[]
}
interface IVerProjetoContextData {
  budgetRequest: IBudgetRequest | undefined;
  handleNavigate: (path: string, params?: object) => void;
  address: string
  isRepresentative: boolean
  isInegrator: boolean
  isOwner: boolean
}

export type { 
  IVerProjetoProviderProps,
  IVerProjetoContextData,
  IStateProps,
  IBudgetRequest,
  IChartProps,
  IProduct,
  IBudget
};