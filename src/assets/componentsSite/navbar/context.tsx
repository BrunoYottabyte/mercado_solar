import React, { createContext, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import {
  INavbarProviderProps,
  INavbarContextData,
 
} from './types'

const NavbarContext = createContext({} as INavbarContextData)

export const NavbarProvider: React.FC<INavbarProviderProps> = ({
  children
}) => {
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    navigate(path)
  }
  
  return (
    <NavbarContext.Provider
      value={{
        handleNavigate
      }}
    >
      {children}
    </NavbarContext.Provider>
  )
}

export const useNavbar = (): INavbarContextData => {
  const context = useContext(NavbarContext)

  if (!context)
    throw new Error('useNavbar must be used within a NavbarProvider')

  return context
}
