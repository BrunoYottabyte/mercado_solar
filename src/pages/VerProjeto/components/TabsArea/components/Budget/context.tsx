import React, {createContext, useContext, useEffect, useState} from 'react';
import {useGlobalContext} from '../../../../../../context/GlobalContext';
import {api} from '../../../../../../services/api';
import {GLOBAL} from '../../../../../../utils/GLOBAL';
import {useVerProjeto} from '../../../../context';
import {IBudget} from '../../../../types';

import {IBudgetProviderProps, IBudgetContextData} from './types';

const BudgetContext = createContext({} as IBudgetContextData);

export const BudgetProvider: React.FC<IBudgetProviderProps> = ({children}) => {
  const {setmodalOpen} = useGlobalContext();
  const {showToastify} = GLOBAL;
  const {budgetRequest, setCurrentStep} = useVerProjeto();
  const [budgets, setBudgets] = useState<IBudget[]>([]);
  const [acceptBudgetId, setAcceptBudgetId] = useState<string | null>(null);

  const handleSubmitTicket = async (files: FileList) => {
    if (!acceptBudgetId) return;
    const data = {
      ticket: files[0],
    };
    api
      .put(`/budget/${acceptBudgetId}/`, data, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(() => {
        setmodalOpen({open: false, id: 'approved'});
        showToastify('Comprovante anexado com sucesso!');
      })
      .catch(() => {
        setmodalOpen({open: false, id: 'approved'});
        showToastify('Erro ao enviar o comprovante');
      });
  };

  const handleAcceptBudget = (id: string) => {
    const data = {
      status: 'approved',
    };
    api
      .put(`/budget/${id}/`, data)
      .then(() => {
        const newBudgets = budgets.map(budget => {
          if (budget.id === id) {
            return {...budget, status: 'approved' as IBudget['status']};
          }
          return budget;
        });
        setBudgets(newBudgets);
        setAcceptBudgetId(id);
        setmodalOpen({open: true, id: 'approved'});
        setCurrentStep('budget_accepted');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleRejectBudget = (id: string) => {
    const data = {
      status: 'disapproved',
    };
    api
      .put(`/budget/${id}/`, data)
      .then(response => {
        const newBudgets = budgets.map(budget => {
          if (budget.id === id) {
            return {...budget, status: 'disapproved' as IBudget['status']};
          }
          return budget;
        });
        setBudgets(newBudgets);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (budgetRequest?.budgets) {
      setBudgets(budgetRequest?.budgets);
    }
  }, [budgetRequest]);
  return (
    <BudgetContext.Provider
      value={{
        budgets,
        handleAcceptBudget,
        handleRejectBudget,
        handleSubmitTicket,
      }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = (): IBudgetContextData => {
  const context = useContext(BudgetContext);

  if (!context)
    throw new Error('useBudget must be used within a BudgetProvider');

  return context;
};
