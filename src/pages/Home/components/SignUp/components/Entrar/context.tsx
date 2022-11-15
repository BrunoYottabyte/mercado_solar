import React, {createContext, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {useAuthContext} from '../../../../../../context/useAuthContext';
import {api} from '../../../../../../services/api';
import {GLOBAL} from '../../../../../../utils/GLOBAL';
import {useHome} from '../../../../context';


import {
  IAuthenticateProviderProps, 
  IAuthenticateContextData,
  IloginForm,
} from './types';

const AutheticationContext = createContext({} as IAuthenticateContextData);

export const AutheticationProvider: React.FC<IAuthenticateProviderProps> = ({
  children,
}) => {
  const {showToastify} = GLOBAL;
  const {signInUserId} = useAuthContext();
  const [isLoading, setIsLoading] = React.useState(false);
  const loginForm = useForm<IloginForm>();
  const {email, createBudgetRequest} = useHome();
  const authenticateUser = async ({password}: IloginForm) => {
    setIsLoading(true);
    try{
        const userId = await signInUserId(email, password);
        createBudgetRequest(userId);
    } catch (e) {
        console.log('loginn',e);
        e?.response?.status === 401 && showToastify("Usuário e/ou senha inválidos.");
    }finally{
        setIsLoading(false);
    }
  };

  return (
    <AutheticationContext.Provider
      value={{
        loginForm,
        authenticateUser,
        isLoading,
      }}>
      {children}
    </AutheticationContext.Provider>
  );
};

export const useAuthenticationAccount = (): IAuthenticateContextData => {
  const context = useContext(AutheticationContext);

  if (!context)
    throw new Error(
      'useCreateAccount must be used within a CreateAccountProvider',
    );

  return context;
};
