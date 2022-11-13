import React, {createContext, useContext, useEffect} from 'react';
import {useAuthContext} from '../../context/useAuthContext';
import {useForm} from 'react-hook-form';
import {
  IHomeProviderProps,
  IHomeContextData,
  IMonthForms,
  IBudgetRequestForm,
} from './types';
import {yupResolver} from '@hookform/resolvers/yup';

import {budgetRequestSchema, monthSchema} from './validations';
import {api} from '../../services/api';
import {useNavigate} from 'react-router-dom';

const HomeContext = createContext({} as IHomeContextData);

export const HomeProvider: React.FC<IHomeProviderProps> = ({children}) => {
  const {userId} = useAuthContext();
  const navigate = useNavigate();
  const monthForm = useForm<IMonthForms>({
    mode: 'all',
    resolver: yupResolver(monthSchema),
  });
  const budgetRequestForm = useForm<IBudgetRequestForm>({
    mode: 'all',
    resolver: yupResolver(budgetRequestSchema),
  });

  const handleSubmit = () => {
    if (userId) {
      const data = {
        ...budgetRequestForm.getValues(),
        month_consumption: {...monthForm.getValues()},
        user: userId,
      };
      budgetRequestForm.reset();
      monthForm.reset();

      api.post('/budget_request/', data).then(() => {
        navigate('/');
      });
    } else {
    }

    // shold show all errors on form
  };

  return (
    <HomeContext.Provider
      value={{
        monthForm,
        budgetRequestForm,
        formsAreValids: monthForm.formState.isValid
          ? budgetRequestForm.formState.isValid
          : budgetRequestForm.formState.isValid &&
            !!budgetRequestForm.getValues('average_consumption'),
        handleSubmit,
      }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = (): IHomeContextData => {
  const context = useContext(HomeContext);

  if (!context) throw new Error('useHome must be used within a HomeProvider');

  return context;
};
