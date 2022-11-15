import React, {createContext, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {useAuthContext} from '../../../../../../context/useAuthContext';
import {api} from '../../../../../../services/api';
import {GLOBAL} from '../../../../../../utils/GLOBAL';
import {useHome} from '../../../../context';

import {
  ICreateAccountProviderProps,
  ICreateAccountContextData,
  IPasswordForm,
} from './types';

const CreateAccountContext = createContext({} as ICreateAccountContextData);

export const CreateAccountProvider: React.FC<ICreateAccountProviderProps> = ({
  children,
}) => {
  const {showToastify} = GLOBAL;
  const {signUp} = useAuthContext();
  const [isLoading, setIsLoading] = React.useState(false);
  const passwordForm = useForm<IPasswordForm>();
  const {email, createBudgetRequest} = useHome();

  const createUser = async ({confirmPassword, password}: IPasswordForm) => {
    if (password !== confirmPassword) {
      showToastify('As senhas não conferem');
      return;
    }
    setIsLoading(true);
    try{
      const userId = await signUp(email, password);
      createBudgetRequest(userId);

    }catch(e){
      console.log('cadastro',e);
      showToastify(e.response?.data?.email[0]);
    }finally{
      setIsLoading(false);
    }

  };

  return (
    <CreateAccountContext.Provider
      value={{
        passwordForm,
        createUser,
        isLoading,
      }}>
      {children}
    </CreateAccountContext.Provider>
  );
};

export const useCreateAccount = (): ICreateAccountContextData => {
  const context = useContext(CreateAccountContext);

  if (!context)
    throw new Error(
      'useCreateAccount must be used within a CreateAccountProvider',
    );

  return context;
};
