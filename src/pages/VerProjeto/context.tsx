import React, {createContext, useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAuthContext} from '../../context/useAuthContext';
import {api} from '../../services/api';
import {addressByPostalCode} from '../../utils/addressByPostalCode';
import {MultiplicadorKWP} from '../../utils/constants';

import {
  IVerProjetoProviderProps,
  IVerProjetoContextData,
  IStateProps,
  IBudgetRequest,
} from './types';

const VerProjetoContext = createContext({} as IVerProjetoContextData);

export const VerProjetoProvider: React.FC<IVerProjetoProviderProps> = ({
  children,
}) => {
  const {userId} = useAuthContext();
  const navigate = useNavigate();

  const [budgetRequest, setBudgetRequest] = useState<IBudgetRequest>();
  const [address, setAddress] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<string>('');
  const {budgetRequestId} = useParams();

  const handleNavigate = (path: string, params?: object) => {
    navigate(path, params ?? {});
  };

  useEffect(() => {
    if (!budgetRequestId) {
      navigate('/');
    }

    api
      .get(`/budget_request/${budgetRequestId}/`)
      .then(response => {
        if (response.status !== 200 || !response.data) {
          navigate('/');
        }
        const budgetRequestResponse: IBudgetRequest = response.data;

        if (budgetRequestResponse.month_consumption) {
          const average_consumption =
            Object.values(budgetRequestResponse.month_consumption).reduce(
              (a, b) => Number(a) + Number(b),
              0,
            ) / 12;

          const budgetRequestResponseParser = {
            ...budgetRequestResponse,
            average_consumption: average_consumption * MultiplicadorKWP,
          };
          setBudgetRequest(budgetRequestResponseParser);
          setCurrentStep(budgetRequestResponseParser.current_step);
          addressByPostalCode(
            budgetRequestResponseParser?.client_postal_code,
          ).then(res => {
            setAddress(res);
          });
        }

        if (budgetRequestResponse.average_consumption) {
          const month_avg =
            Number(budgetRequestResponse.average_consumption) /
            MultiplicadorKWP;
          const month_consumption = {
            january_consumption_avg: month_avg,
            february_consumption_avg: month_avg,
            march_consumption_avg: month_avg,
            april_consumption_avg: month_avg,
            may_consumption_avg: month_avg,
            june_consumption_avg: month_avg,
            july_consumption_avg: month_avg,
            august_consumption_avg: month_avg,
            september_consumption_avg: month_avg,
            october_consumption_avg: month_avg,
            november_consumption_avg: month_avg,
            december_consumption_avg: month_avg,
          };
          const budgetRequestResponseParser = {
            ...budgetRequestResponse,
            month_consumption: month_consumption,
          };
          setBudgetRequest(budgetRequestResponseParser);
          addressByPostalCode(
            budgetRequestResponseParser?.client_postal_code,
          ).then(res => {
            setAddress(res);
          });
        }
      })
      .catch(() => {
        console.log('erro');
        navigate('/');
      });
  }, []);
  console.log('context', currentStep)
  return (
    <VerProjetoContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        budgetRequest,
        handleNavigate,
        address,
        isRepresentative: userId === budgetRequest?.representative,
        isInegrator: userId === budgetRequest?.integrator,
        isOwner: userId === budgetRequest?.user,
        setBudgetRequest,
      }}>
      {children}
    </VerProjetoContext.Provider>
  );
};

export const useVerProjeto = (): IVerProjetoContextData => {
  const context = useContext(VerProjetoContext);

  if (!context)
    throw new Error('useVerProjeto must be used within a VerProjetoProvider');

  return context;
};
