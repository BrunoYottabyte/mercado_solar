import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, Location } from 'react-router-dom'
import { api } from '../../services/api'
import { addressByPostalCode } from '../../utils/addressByPostalCode'

import {
  IDadosOrcamentoProviderProps,
  IDadosOrcamentoContextData,
  IStateProps,
  IBudgetRequest,
  IMonthConsumption
} from './types'

const DadosOrcamentoContext = createContext({} as IDadosOrcamentoContextData)

export const DadosOrcamentoProvider: React.FC<IDadosOrcamentoProviderProps> = ({
  children
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [budgetRequest, setBudgetRequest] = useState<IBudgetRequest>()
  const [address, setAddress] = useState<string>('')

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
  return (
    <DadosOrcamentoContext.Provider
      value={{
        budgetRequest,
        handleNavigate,
        address: address
      }}
    >
      {children}
    </DadosOrcamentoContext.Provider>
  )
}

export const useDadosOrcamento = (): IDadosOrcamentoContextData => {
  const context = useContext(DadosOrcamentoContext)

  if (!context)
    throw new Error('useDadosOrcamento must be used within a DadosOrcamentoProvider')

  return context
}
