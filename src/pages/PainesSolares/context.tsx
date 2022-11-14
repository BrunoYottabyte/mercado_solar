import React, {createContext, useContext, useEffect, useState} from 'react';
import {api} from '../../services/api';

import {
  IProductsProviderProps,
  IProductsContextData,
  IProductProps,
  IBrand,
  ICategory,
} from './types';

const ProductsContext = createContext({} as IProductsContextData);

export const ProductsProvider: React.FC<IProductsProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<IProductProps[]>([]);
  const [brands, setBrands] = useState<IBrand[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [productsCount, setProductsCount] = useState(0);

  const [params, setParams] = useState({
    limit: 100,
    offset: 0,
    category: '',
    brand: '',
  });

  const filterByCategory = (category: string) => {
    setParams({
      ...params,
      category,
    });
  };

  const filterByBrand = (brand: string) => {
    setParams({
      ...params,
      brand,
    });
  };

  const clearFilters = () => {
    setParams({
      ...params,
      category: '',
      brand: '',
    });
  };

  const getProducts = async () => {
    api.get('/products/', {params}).then(response => {
      setProducts(response.data.results);
      setProductsCount(response.data.count);
    });
  };

  const getBrands = async () => {
    api.get('/brands/').then(response => {
      setBrands(response.data.results);
    });
  };

  const getCategories = async () => {
    api.get('/categories/').then(response => {
      setCategories(response.data.results);
    });
  };

  useEffect(() => {
    // getProducts();
    getBrands();
    getCategories();
  }, []);

  useEffect(() => {
    getProducts();
  }, [params]);
  return (
    <ProductsContext.Provider
      value={{
        products,
        brands,
        categories,
        filterByCategory,
        filterByBrand,
        productsCount,
        clearFilters,
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
