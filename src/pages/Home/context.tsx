import React, {createContext, useContext, useEffect, useState} from 'react';
import {useAuthContext} from '../../context/useAuthContext';
import {useForm} from 'react-hook-form';
import {
  IHomeProviderProps,
  IHomeContextData,
  IMonthForms,
  IBudgetRequestForm,
  IAverageConsumptionForm,
} from './types';
import {yupResolver} from '@hookform/resolvers/yup';

import {
  budgetRequestSchema,
  monthSchema,
  averageConsumptionSchema,
} from './validations';
import {api} from '../../services/api';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../context/GlobalContext';

const HomeContext = createContext({} as IHomeContextData);

export const HomeProvider: React.FC<IHomeProviderProps> = ({children}) => {
  const {userId, signUp} = useAuthContext();
  const {setmodalOpen, modalOpen} = useGlobalContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [cepIsValid, setCepIsValid] = useState(false);

  const monthForm = useForm<IMonthForms>({
    mode: 'all',
    resolver: yupResolver(monthSchema),
  });
  const budgetRequestForm = useForm<IBudgetRequestForm>({
    mode: 'all',
    resolver: yupResolver(budgetRequestSchema),
    defaultValues: {need_representative: true},
  });

  const averageConsumptionForm = useForm<IAverageConsumptionForm>({
    mode: 'all',
    resolver: yupResolver(averageConsumptionSchema),
  });

  const emailWatch = budgetRequestForm.watch('client_email');

  const handleCheckCep = async (cep: string) => {
    if (cep.length !== 8) {
      return;
    }
    setIsLoading(true);
    // const response = await api.get(`/cep/${cep}`);
    api
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(({data}) => {
        if (data.erro) {
          setCepIsValid(false);
          budgetRequestForm.setError('client_postal_code', {
            message: 'CEP inválido',
          });
          return;
        } else {
          budgetRequestForm.setValue('federative_unit', data.uf);
          budgetRequestForm.setValue('city', data.localidade);
          setCepIsValid(true);
        }
      })
      .catch(error => {
        console.log(error);
        budgetRequestForm.setError('client_postal_code', {
          message: 'CEP inválido',
        });
        setCepIsValid(false);
      });

    setIsLoading(false);
  };

  const createBudgetRequest = (user: string) => {
    setIsLoading(true);
    const averageValue = averageConsumptionForm.getValues(
      'average_consumption',
    );
    const monthsValues = monthForm.getValues();
    const data = {
      ...budgetRequestForm.getValues(),
      average_consumption: averageValue,
      month_consumption: {...monthsValues},
      user: user,
    };
    if (!monthForm.formState.isValid) {
      // eslint-disable-next-line
      // @ts-ignore
      delete data.month_consumption;
    }
    if (!averageConsumptionForm.formState.isValid) {
      // eslint-disable-next-line
      // @ts-ignore
      delete data.average_consumption;
    }
    budgetRequestForm.reset();
    monthForm.reset();

    api
      .post('/budget_request/', data)
      .then(() => {
        navigate('/');
      })
      .catch(err => {
        setIsLoading(false);
      });
  };
  const handleSubmit = () => {
    if (userId) {
      createBudgetRequest(userId);
    } else {
      setmodalOpen({open: true, id: 'signup'});
    }
  };

  return (
    <HomeContext.Provider
      value={{
        monthForm,
        budgetRequestForm,
        formsAreValids:
          (monthForm.formState.isValid
            ? budgetRequestForm.formState.isValid
            : budgetRequestForm.formState.isValid &&
              averageConsumptionForm.formState.isValid) && cepIsValid,
        handleSubmit,
        averageConsumptionForm,
        isLoading,
        email: emailWatch ?? '',
        createBudgetRequest,
        handleCheckCep,
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
