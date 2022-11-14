import React, {createContext, useContext, useEffect, useState} from 'react';
import {api} from '../../services/api';

import {
  IProductsProviderProps,
  IProductsContextData,
  IProductProps,
} from './types';

const ProductsContext = createContext({} as IProductsContextData);

export const ProductsProvider: React.FC<IProductsProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<IProductProps[]>([]);

  const [params, setParams] = useState({
    limit: 100,
    offset: 0,
  });

  const getProducts = async () => {
    api.get('/products/').then(response => {
      setProducts(response.data.results);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <ProductsContext.Provider
      value={{
        products,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): IProductsContextData => {
  const context = useContext(ProductsContext);

  if (!context)
    throw new Error('useProducts must be used within a ProductsProvider');

  return context;
};
