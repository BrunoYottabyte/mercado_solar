import React, { createContext, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { GLOBAL } from "../../utils/GLOBAL";

import {
  ICreateAccountProviderProps,
  ICreateAccountContextData,
  IPasswordForm,
} from './types'

const CreateAccountContext = createContext({} as ICreateAccountContextData)

export const CreateAccountProvider: React.FC<ICreateAccountProviderProps> = ({
  children,
  email
}) => {
  const { showToastify } = GLOBAL;
  const [isLoading, setIsLoading] = React.useState(false)
  const passwordForm = useForm<IPasswordForm>()

  const createUser = async ({confirmPassword, password}: IPasswordForm) => {
    if (password !== confirmPassword) {
      showToastify('As senhas não conferem')
      return
    }
    setIsLoading(true)
    const { data: user } = await api.post('/user/', {
      email,
      password,
    })
    setIsLoading(false)

    console.log(user)
  }
    
  
  return (
    <CreateAccountContext.Provider
      value={{
        email,
        passwordForm,
        createUser,
        isLoading
      }}
    >
      {children}
    </CreateAccountContext.Provider>
  )
}

export const useCreateAccount = (): ICreateAccountContextData => {
  const context = useContext(CreateAccountContext)

  if (!context)
    throw new Error('useCreateAccount must be used within a CreateAccountProvider')

  return context
}
