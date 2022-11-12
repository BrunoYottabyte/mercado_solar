import React, { createContext, useContext, useEffect, useState } from 'react'
import { useVerProjeto } from '../../../../context'
import {useForm} from 'react-hook-form'

import {
  IGeneralObservationProviderProps,
  IGeneralObservationContextData,
  IFormProps,
} from './types'

const GeneralObservationContext = createContext({} as IGeneralObservationContextData)

export const GeneralObservationProvider: React.FC<IGeneralObservationProviderProps> = ({
  children
}) => {
  const [observations, setObservations] = useState<string[]>([])
  const form = useForm<IFormProps>()

  const {budgetRequest} = useVerProjeto()
  
  useEffect(()=>{
    console.log(budgetRequest);
    console.log(budgetRequest);
    console.log(budgetRequest);
  },[])
  return (
    <GeneralObservationContext.Provider
      value={{
        form
      }}
    >
      {children}
    </GeneralObservationContext.Provider>
  )
}

export const useGeneralObservation = (): IGeneralObservationContextData => {
  const context = useContext(GeneralObservationContext)

  if (!context)
    throw new Error('useGeneralObservation must be used within a GeneralObservationProvider')

  return context
}
