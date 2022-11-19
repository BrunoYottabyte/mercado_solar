import React, { createContext, useContext, useEffect, useState } from 'react'
import { useVerProjeto } from '../../../../context'
import {useForm} from 'react-hook-form'

import {
  IGeneralObservationProviderProps,
  IGeneralObservationContextData,
  IGeneralObservation,
  IFormProps,
  IObservationProps,
} from './types'
import { api } from '../../../../../../services/api'
import { useAuthContext } from '../../../../../../context/useAuthContext'

const GeneralObservationContext = createContext({} as IGeneralObservationContextData)

export const GeneralObservationProvider: React.FC<IGeneralObservationProviderProps> = ({
  children
}) => {
  const {userId} = useAuthContext()
  
  const {budgetRequest} = useVerProjeto()

  const [observations, setObservations] = useState<IObservationProps[]>([])
  const [generalObservation, setGeneralObservation] = useState<IGeneralObservation>({} as IGeneralObservation)
  const [currentObservation, setCurrentObservation] = useState<string>('')
  const form = useForm<IFormProps>()
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const handleSubmit = async (data: IFormProps, openModal) => {
    setIsLoading(true)
    
    if (data.id) {
      api.put(`/general_observation/${data.id}/`, data).then(response => {
        setGeneralObservation(response.data)
        openModal('animation');
      }).catch(error => {
        console.log(error)
      })
    }
    else {
      setIsLoading(true)
      await api.post('/general_observation/', data).then(response => {
        setGeneralObservation(response.data)
        openModal('animation');
      }).catch(error => {
        console.log(error)
      })
      setIsLoading(false)
    }
    setIsLoading(false)
  }
  
  const addObservation = () => {
    if(!currentObservation.trim() || !generalObservation.id){
      return
    }
    const newObservation = {
      general_observation: generalObservation.id,
      observation: currentObservation,
    }
    api.post('/observation/', newObservation).then(response => {
      const observationResponse: IObservationProps = response.data
      setObservations([...observations, observationResponse])
    })
    setCurrentObservation('')
  }

  useEffect(()=>{
    if(!budgetRequest){
      return
    }
    const {general_observation} = budgetRequest
    form.setValue('budget_request', budgetRequest?.id ?? '')
    setGeneralObservation(general_observation ?? null)
    setObservations(general_observation?.observations ?? [])
  },[budgetRequest])

  useEffect(()=>{
    if(generalObservation){
      form.setValue('solar_orientation', generalObservation?.solar_orientation)
      form.setValue('latitude', generalObservation?.latitude)
      form.setValue('longitude', generalObservation?.longitude)
      form.setValue('budget_request', budgetRequest?.id ?? '')
      form.setValue('contact_email', generalObservation?.contact_email)
      form.setValue('contact_name', generalObservation?.contact_name)
      form.setValue('contact_phone', generalObservation?.contact_phone)
      form.setValue('id', generalObservation?.id)
    }
  },[generalObservation])

  return (
    <GeneralObservationContext.Provider
      value={{
        form,
        observations,
        setCurrentObservation: (observation: string) => setCurrentObservation(observation),
        currentObservation,
        addObservation,
        isLoading,
        handleSubmit,
        generalObservation,
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
