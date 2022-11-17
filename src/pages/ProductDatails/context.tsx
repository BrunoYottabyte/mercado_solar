import React, {createContext, useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useGlobalContext} from '../../context/GlobalContext';
import {useAuthContext} from '../../context/useAuthContext';
import {api} from '../../services/api';

import {
  IProductDetailProviderProps,
  IProductDetailContextData,
  IProductProps,
  IBudgetProps,
  IselectProps,
} from './types';

const ProductDetailContext = createContext({} as IProductDetailContextData);

export const ProductDetailProvider: React.FC<IProductDetailProviderProps> = ({
  children,
}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [budgetRequestSelected, setBudgetRequestSelected] = useState<string>();
  const {userType, isAutheticated} = useAuthContext();
  const [product, setProduct] = useState<IProductProps>();
  const [cart, setCart] = useState<IProductProps[]>([]);
  const [budgetRequests, setBudgetRequests] = useState<IselectProps[]>([]);
  const {setmodalOpen} = useGlobalContext();

  const handleCreateBudget = async () => {
    if (!budgetRequestSelected) return;
    const cart = localStorage.getItem('@SolarPaines:cart');
    if (cart) {
      const cartParsed: IProductProps[] = JSON.parse(cart);
      const data = {
        budget_request: budgetRequestSelected,
        items: cartParsed.map(item => {
          return {
            product: item.id,
            quantity: item.quantity,
          };
        }),
      };
      await api
        .post(`/budget/`, data)
        .then(() => {
          setmodalOpen({open: false, id: 'cart', position: 'right'});
          localStorage.removeItem('@SolarPaines:cart');
          setCart([]);
        })
        .catch(() => {});
    }
  };

  const handleAddToCart = () => {
    if (!product) return;
    const cart = localStorage.getItem('@SolarPaines:cart');
    if (cart) {
      const cartParsed = JSON.parse(cart);
      const productExists = cartParsed.find(
        (item: IProductProps) => item.id === product.id,
      );
      if (productExists) {
        const newCart = cartParsed.map((item: IProductProps) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }
          return item;
        });
        localStorage.setItem('@SolarPaines:cart', JSON.stringify(newCart));
      } else {
        localStorage.setItem(
          '@SolarPaines:cart',
          JSON.stringify([...cartParsed, {...product}]),
        );
      }
    } else {
      localStorage.setItem('@SolarPaines:cart', JSON.stringify([product]));
    }
    navigate('/paines-solares');
  };

  const removeProduct = (id: string) => {
    const cart = localStorage.getItem('@SolarPaines:cart');
    if (cart) {
      const cartParsed = JSON.parse(cart);
      const newCart = cartParsed.filter(
        (item: IProductProps) => item.id !== id,
      );
      localStorage.setItem('@SolarPaines:cart', JSON.stringify(newCart));
      setCart(newCart);
    }
  };

  const addMore = () => {
    if (!product) return;
    setProduct({
      ...product,
      quantity: product?.quantity + 1,
    });
  };

  const removeOne = () => {
    if (!product) return;
    if (product?.quantity > 0) {
      setProduct({...product, quantity: product.quantity - 1});
    }
  };

  const getProduct = async () => {
    api.get(`/products/${id}/`).then(response => {
      setProduct({...response.data, quantity: 1});
    });
  };

  const getCart = () => {
    const cart = localStorage.getItem('@SolarPaines:cart');
    if (cart) {
      const cartParsed = JSON.parse(cart);
      setCart(cartParsed);
    }
  };

  const getBudgetRequests = () => {
    api.get('/budget_request_filtered/').then(response => {

      const budgetRequestsResponse: IBudgetProps[] = response.data.results;
      const budgetRequestsResponseFormatted = budgetRequestsResponse.map(
        (item: IBudgetProps) => {
          return {
            value: item.id,
            label: `Requisição #${item.id} - ${item.client_name}`,
          };
        },
      );
      setBudgetRequests(budgetRequestsResponseFormatted);
    });
  };

  useEffect(() => {
    console.log();
    if (!id && location.pathname.includes('/paines-solares/')) {
      isAutheticated ? navigate('/') : navigate('/home')
    }
    getProduct();
    getCart();
    getBudgetRequests();
  }, []);

  useEffect(() => {
    if (!userType) {
      return;
    }
    // if (userType === 'user') {
    //   navigate('/');
    // }
  }, [userType]);

  return (
    <ProductDetailContext.Provider
      value={{
        product,
        handleAddToCart,
        removeProduct,
        addMore,
        removeOne,
        cart,
        getCart,
        budgetRequestOptions: budgetRequests,
        getBudgetRequests,
        setBudgetRequestSelected,
        budgetRequestSelected,
        handleCreateBudget,
      }}>
      {children}
    </ProductDetailContext.Provider>
  );
};

export const useProductDetail = (): IProductDetailContextData => {
  const context = useContext(ProductDetailContext);

  if (!context)
    throw new Error(
      'useProductDetail must be used within a ProductDetailProvider',
    );

  return context;
};
