import React, { createContext, useContext } from 'react'


import {
  IGaleryProviderProps,
  IGaleryContextData,
} from './types'

const GaleryContext = createContext({} as IGaleryContextData)

export const GaleryProvider: React.FC<IGaleryProviderProps> = ({
  children
}) => {

  return (
    <GaleryContext.Provider
      value={{
        
      }}
    >
      {children}
    </GaleryContext.Provider>
  )
}

export const useGalery = (): IGaleryContextData => {
  const context = useContext(GaleryContext)

  if (!context)
    throw new Error('useGalery must be used within a GaleryProvider')

  return context
}
