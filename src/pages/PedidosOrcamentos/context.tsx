import React, { createContext, useContext, useEffect } from 'react'
import { api } from '../../services/api'

import {
  IPedidosOrcamentoProviderProps,
  IPedidosOrcamentoContextData,
} from './types'

const PedidosOrcamentoContext = createContext({} as IPedidosOrcamentoContextData)

export const PedidosOrcamentoProvider: React.FC<IPedidosOrcamentoProviderProps> = ({
  children
}) => {

  useEffect(() => {
    const response = api.get('/budget_request/').then(response => response.data).catch(() => null)
    console.log(response);
    
  },[])
  
  return (
    <PedidosOrcamentoContext.Provider
      value={{
        
      }}
    >
      {children}
    </PedidosOrcamentoContext.Provider>
  )
}

export const usePedidosOrcamento = (): IPedidosOrcamentoContextData => {
  const context = useContext(PedidosOrcamentoContext)

  if (!context)
    throw new Error('usePedidosOrcamento must be used within a PedidosOrcamentoProvider')

  return context
}
