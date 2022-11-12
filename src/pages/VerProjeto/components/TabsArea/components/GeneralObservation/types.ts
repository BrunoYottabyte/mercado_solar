import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";

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

interface IFormProps {
  id?: number
  budget_request: string
  contact_email: string
  contact_name: string
  contact_phone: string
  latitude: number
  longitude: number
  solar_orientation: string
}

interface IGeneralObservationProviderProps {
  children: ReactNode;
}

interface IGeneralObservationContextData {
  form: UseFormReturn<IFormProps, object>
  observations: IObservationProps[]
  setCurrentObservation: (observation: string) => void
  currentObservation: string
  addObservation: () => void
  isLoading: boolean
  handleSubmit: (data: IFormProps) => Promise<void>
  generalObservation: IGeneralObservation
}

export type {
  IGeneralObservationProviderProps,
  IGeneralObservationContextData,
  IGeneralObservation,
  IFormProps,
  IObservationProps
};