import React, {createContext, useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuthContext} from '../../context/useAuthContext';
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
  const [cart, setCart] = useState<IProductProps[]>([]);
  const [brands, setBrands] = useState<IBrand[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [productsCount, setProductsCount] = useState(0);

  const {userType} = useAuthContext();
  const navigate = useNavigate();
  const [params, setParams] = useState({
    limit: 100,
    offset: 0,
    category: '',
    brand: '',
    price__lte: '',
    price__gte: '',
    ordering: '',
  });

  const orderByPrice = (order: string) => {
    setParams({...params, ordering: order});
  };

  const filterByPriceLTE = (price: string) => {
    setParams({...params, price__lte: price, price__gte: ''});
  };

  const filterByPriceGTE = (price: string) => {
    setParams({...params, price__lte: '', price__gte: price});
  };

  const filterByCategory = (category: string) => {
    if (category === params.category) {
      setParams({...params, category: ''});
    } else {
      setParams({
        ...params,
        category,
      });
    }
  };

  const filterByBrand = (brand: string) => {
    if (params.brand === brand) {
      setParams({
        ...params,
        brand: '',
      });
    } else {
      setParams({
        ...params,
        brand,
      });
    }
  };

  const clearFilters = () => {
    setParams({
      ...params,
      category: '',
      brand: '',
      price__lte: '',
      price__gte: '',
      ordering: '',
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

  const getCart = () => {
    const cart = localStorage.getItem('@SolarPaines:cart');
    if (cart) {
      const cartParsed = JSON.parse(cart);
      setCart(cartParsed);
    }
  };

  useEffect(() => {
    getBrands();
    getCategories();
    getCart();
  }, []);

  useEffect(() => {
    if (!params) {
      return;
    }
    getProducts();
  }, [params]);

  useEffect(() => {
    if (!userType) {
      return;
    }
    if (userType === 'user') {
      navigate('/');
    }
  }, [userType]);

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
        params,
        filterByPriceLTE,
        filterByPriceGTE,
        orderByPrice,
        getCart,
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
