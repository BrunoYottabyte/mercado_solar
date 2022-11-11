import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, Location } from 'react-router-dom'
import { api } from '../../services/api'
import { addressByPostalCode } from '../../utils/addressByPostalCode'

import {options, options2} from './data'
import {
  IPrePropostaProviderProps,
  IPrePropostaContextData,
  IStateProps,
  IBudgetRequest,
  IChartProps
} from './types'

const PrePropostaContext = createContext({} as IPrePropostaContextData)

export const PrePropostaProvider: React.FC<IPrePropostaProviderProps> = ({
  children
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [budgetRequest, setBudgetRequest] = useState<IBudgetRequest>()
  const [address, setAddress] = useState<string>('')
  const [playBack, setPlayBack] = useState<IChartProps>({
    name: "Previsão Playback",
    data: [],
  })

  const state = location.state as IStateProps;

  const handleNavigate = (path: string, params?: object) => {
    navigate(path, params ?? {})
  }
  
  useEffect(() => {    
    if(!state?.budgetRequestId){
      navigate('/')
    }

    api.get(`/budget_request/${state?.budgetRequestId}/`).then(
      response => {
        if (response.status !== 200 || !response.data) {
          navigate('/')
        }
        const budgetRequestResponse: IBudgetRequest = response.data

        if (budgetRequestResponse.month_consumption){
          const average_consumption = Object.values(
            budgetRequestResponse.month_consumption
          ).reduce((a, b) => Number(a) + Number(b), 0) /12
          
          const budgetRequestResponseParser = {
            ...budgetRequestResponse,
            average_consumption: average_consumption * 1.1
          }
          setBudgetRequest(budgetRequestResponseParser)

          addressByPostalCode(budgetRequestResponseParser?.client_postal_code).then(res => {
            setAddress(res);
          })
        }

        if (budgetRequestResponse.average_consumption){
          const month_avg = Number(budgetRequestResponse.average_consumption) / 1.1
           const month_consumption = {
            january_consumption_avg: month_avg,
            february_consumption_avg: month_avg,
            march_consumption_avg: month_avg,
            april_consumption_avg: month_avg,
            may_consumption_avg: month_avg,
            june_consumption_avg: month_avg,
            july_consumption_avg: month_avg,
            august_consumption_avg: month_avg,
            september_consumption_avg: month_avg,
            october_consumption_avg: month_avg,
            november_consumption_avg: month_avg,
            december_consumption_avg: month_avg,
           }
           const budgetRequestResponseParser = {
            ...budgetRequestResponse,
            month_consumption: month_consumption
          }
          setBudgetRequest(budgetRequestResponseParser)
          addressByPostalCode(budgetRequestResponseParser?.client_postal_code).then(res => {
            setAddress(res);
            
          })
        }
      }
    ).catch(() => {
      console.log('erro');
      
      navigate('/')
    })
  }, [])

  useEffect(() => {
    if (!budgetRequest?.month_consumption || !budgetRequest?.average_consumption) {
      return
    }
    const average_consumption = Object.values(
      budgetRequest.month_consumption
    ).reduce((a, b) => Number(a) + Number(b), 0) /12
    const budget = Number(budgetRequest?.average_consumption) * 25
    const generation = average_consumption * 0.85
    
    const economy = [...Array(21).keys()].map(i => (i*12*generation) - budget)
    setPlayBack({
      name: "Previsão Playback",
      data: economy
    })
  }, [budgetRequest])
  return (
    <PrePropostaContext.Provider
      value={{
        budgetRequest,
        handleNavigate,
        address: address,
        playback: playBack,
        generation: playBack
      }}
    >
      {children}
    </PrePropostaContext.Provider>
  )
}

export const usePreProposta = (): IPrePropostaContextData => {
  const context = useContext(PrePropostaContext)

  if (!context)
    throw new Error('usePreProposta must be used within a PrePropostaProvider')

  return context
}