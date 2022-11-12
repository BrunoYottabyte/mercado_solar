import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";

interface IGeneralObservation {
  id: number
  budget_request: number
  contact_email: string
  contact_name: string
  contact_phone: string
  latitude: number
  longitude: number
  observations: string[]
  solar_orientation: string
}

interface IFormProps {
  budget_request: number
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
}

export type {
  IGeneralObservationProviderProps,
  IGeneralObservationContextData,
  IGeneralObservation,
  IFormProps
};