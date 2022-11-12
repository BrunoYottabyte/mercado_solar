import React, { createContext, useContext, useEffect, useState } from 'react'
import { useVerProjeto } from '../../../../context'
import { IBudget } from '../../../../types'


import {
  IBudgetProviderProps,
  IBudgetContextData,
} from './types'

const BudgetContext = createContext({} as IBudgetContextData)

export const BudgetProvider: React.FC<IBudgetProviderProps> = ({
  children
}) => {
  const {budgetRequest} = useVerProjeto()
  const [budgets, setBudgets] = useState<IBudget[]>([])

  useEffect(() => {
    if(budgetRequest?.budgets){
      setBudgets(budgetRequest?.budgets)
    }
  }, [budgetRequest])
  return (
    <BudgetContext.Provider
      value={{
        budgets
      }}
    >
      {children}
    </BudgetContext.Provider>
  )
}

export const useBudget = (): IBudgetContextData => {
  const context = useContext(BudgetContext)

  if (!context)
    throw new Error('useBudget must be used within a BudgetProvider')

  return context
}
