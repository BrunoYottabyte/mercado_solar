import {ReactNode} from 'react';

interface ICategoryProps {
  id: number;
  name: string;
  description: string;
}

interface IImageProps {
  id: number;
  image: string;
  default: boolean;
}

interface IBrandProps {
  id: number;
  name: string;
  description: string;
  photo: string;
}

interface IProductProps {
  id: string;
  name: string;
  description: string;
  additional_information: string;
  technical_details: string;
  price: string;
  created_at: string;
  category: ICategoryProps;
  brand: IBrandProps;
  images: IImageProps[];
  quantity: number;
}

interface IProductDetailProviderProps {
  children: ReactNode;
}

interface IBudgetProps {
  id: string;
  client_name: string;
}

interface IselectProps {
  label: string;
  value: string;
}
interface IProductDetailContextData {
  product: IProductProps | undefined;
  handleAddToCart: () => void;
  removeProduct: (id: string) => void;
  addMore: VoidFunction;
  removeOne: VoidFunction;
  cart: IProductProps[];
  budgetRequestOptions: IselectProps[];
  setBudgetRequestSelected: (value: string | undefined) => void;
  budgetRequestSelected: string | undefined;
  handleCreateBudget;
  getCart: () => void;
  getBudgetRequests: () => void;
}

export type {
  IProductDetailProviderProps,
  IProductDetailContextData,
  IProductProps,
  IBudgetProps,
  IselectProps,
};
