import React, { createContext, useContext } from 'react'


import {
  IButtonsStepsProviderProps,
  IButtonsStepsContextData,
} from './types'

const ButtonsStepsContext = createContext({} as IButtonsStepsContextData)

export const ButtonsStepsProvider: React.FC<IButtonsStepsProviderProps> = ({
  children
}) => {    

  return (
    <ButtonsStepsContext.Provider
      value={{
        
      }}
    >
      {children}
    </ButtonsStepsContext.Provider>
  )
}

export const useButtonsSteps = (): IButtonsStepsContextData => {
  const context = useContext(ButtonsStepsContext)

  if (!context)
    throw new Error('useButtonsSteps must be used within a ButtonsStepsProvider')

  return context
}
