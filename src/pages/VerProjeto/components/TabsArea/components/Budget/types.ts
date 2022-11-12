import { ReactNode } from "react";
import { IBudget } from "../../../../types";

interface IBudgetProviderProps {
  children: ReactNode
}
interface IBudgetContextData {
  budgets: IBudget[]
}

export type { IBudgetProviderProps, IBudgetContextData };