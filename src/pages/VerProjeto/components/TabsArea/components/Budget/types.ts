import {ReactNode} from 'react';
import {IBudget} from '../../../../types';

interface IBudgetProviderProps {
  children: ReactNode;
}
interface IBudgetContextData {
  budgets: IBudget[];
  handleAcceptBudget: (budgetId: string) => void;
  handleRejectBudget: (budgetId: string) => void;
  handleSubmitTicket: (files: FileList) => void;
}

export type {IBudgetProviderProps, IBudgetContextData};
