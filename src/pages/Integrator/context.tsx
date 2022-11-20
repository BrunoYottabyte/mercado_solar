import React, {createContext, useContext, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useAuthContext} from '../../context/useAuthContext';
import {api} from '../../services/api';

import {
  IIntegratorProviderProps,
  IIntegratorContextData,
  IIntegratorForm,
} from './types';

const IntegratorContext = createContext({} as IIntegratorContextData);

export const IntegratorProvider: React.FC<IIntegratorProviderProps> = ({
  children,
}) => {
  const {userId, userType} = useAuthContext();
  const form = useForm<IIntegratorForm>();
  const navigate = useNavigate();
  const saveIntegrator = (data: IIntegratorForm) => {
    const photo = data.photo && data.photo.length ? data.photo[0] : null;
    const formData = {...data, photo, user: userId};
    if (data.id) {
      api
        .put(`/integrator-create/${data.id}/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {});
    } else {
      api
        .post('/integrator-create/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {})
        .catch(() => {});
    }
  };

  useEffect(() => {
    if (!userType) return;
    if (userType !== 'integrator') {
      navigate('/login');
    }
  }, [userType]);

  useEffect(() => {
    if (!userId) return;
    api
      .get(`/integrator/?user=${userId}`)
      .then(response => {
        const integrator = response.data.results[0];

        if (integrator) {
          api.get(integrator.photo).then(response => {
            form.reset(integrator);
            var dt = new DataTransfer();
            dt.items.add(response.data);
            form.setValue('photo', response.data);
          });

          // form.setValue('photo', [reader.readAsDataURL(integrator.photo)]);
        }
      })
      .catch(() => {});
  }, [userId]);

  return (
    <IntegratorContext.Provider
      value={{
        form,
        saveIntegrator,
      }}>
      {children}
    </IntegratorContext.Provider>
  );
};

export const useIntegrator = (): IIntegratorContextData => {
  const context = useContext(IntegratorContext);

  if (!context)
    throw new Error('useIntegrator must be used within a IntegratorProvider');

  return context;
};
