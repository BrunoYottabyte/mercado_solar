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
  id: number;
  name: string;
  description: string;
  additional_information: string;
  price: string;
  created_at: string;
  category: ICategoryProps;
  brand: IBrandProps;
  images: IImageProps[];
}
interface IProductsProviderProps {
  children: ReactNode;
}
interface IProductsContextData {
  products: IProductProps[];
}

export type {IProductsProviderProps, IProductsContextData, IProductProps};
