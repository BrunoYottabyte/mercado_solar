import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, Location } from 'react-router-dom'
import { useAuthContext } from '../../context/useAuthContext'
import { api } from '../../services/api'
import { addressByPostalCode } from '../../utils/addressByPostalCode'
import { MultiplicadorKWP } from '../../utils/constants'

import {
  IVerProjetoProviderProps,
  IVerProjetoContextData,
  IStateProps,
  IBudgetRequest,
} from './types'

const VerProjetoContext = createContext({} as IVerProjetoContextData)

export const VerProjetoProvider: React.FC<IVerProjetoProviderProps> = ({
  children
}) => {
  const {userId} = useAuthContext()
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
            average_consumption: average_consumption * MultiplicadorKWP
          }
          setBudgetRequest(budgetRequestResponseParser)

          addressByPostalCode(budgetRequestResponseParser?.client_postal_code).then(res => {
            setAddress(res);
          })
        }

        if (budgetRequestResponse.average_consumption){
          const month_avg = Number(budgetRequestResponse.average_consumption) / MultiplicadorKWP
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
    <VerProjetoContext.Provider
      value={{
        budgetRequest,
        handleNavigate,
        address,
        isRepresentative: userId === budgetRequest?.representative,
        isInegrator: userId === budgetRequest?.integrator,
        isOwner: userId === budgetRequest?.user
      }}
    >
      {children}
    </VerProjetoContext.Provider>
  )
}

export const useVerProjeto = (): IVerProjetoContextData => {
  const context = useContext(VerProjetoContext)

  if (!context)
    throw new Error('useVerProjeto must be used within a VerProjetoProvider')

  return context
}
