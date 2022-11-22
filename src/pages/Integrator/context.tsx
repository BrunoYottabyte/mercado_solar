import React, {createContext, useContext, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useAuthContext} from '../../context/useAuthContext';
import {api} from '../../services/api';

import {
  IIntegratorProviderProps,
  IIntegratorContextData,
  IIntegratorForm,
  IGaleryForm,
} from './types';

const IntegratorContext = createContext({} as IIntegratorContextData);

export const IntegratorProvider: React.FC<IIntegratorProviderProps> = ({
  children,
}) => {
  /* eslint-disable-next-line */
  // @ts-ignore
  const {userId, userType} = useAuthContext();
  const form = useForm<IIntegratorForm>();
  const galeryForm = useForm<IGaleryForm>();
  const navigate = useNavigate();

  const [multipleImages, setMultipleImages] = useState<any[]>([]);
  const [profileUrl, setProfileUrl] = useState('');

  const saveIntegrator = (data: IIntegratorForm) => {
    const photo = data.photo && data.photo.length ? data.photo[0] : null;
    const formData = {...data, photo, user: userId};
    if (!photo) {
      delete formData['photo'];
    }
    if (data.id) {
      api
        .put(`/integrator-create/${data.id}/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          for (let i = 0; i < multipleImages.length; i++) {
            const newData = {
              image: multipleImages[i],
              integrator: data.id,
            };
            api.post(`/integrator-image/`, newData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
          }
        });
    } else {
      api
        .post('/integrator-create/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          const integratorId = response.data.id;
          for (let i = 0; i < multipleImages.length; i++) {
            const newData = {
              image: multipleImages[i],
              integrator: integratorId,
            };
            api.post(`/integrator-image/`, newData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
          }
        })
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
          form.reset({...integrator, photo: null});
          api.get(integrator.photo).then(response => {
            setProfileUrl(integrator.photo);

            const imgName = integrator.photo.split('/').pop();
            new Blob([response.data], {type: 'image/jpeg'})
              .arrayBuffer()
              .then(buffer => {
                const file = new File([buffer], imgName, {
                  type: 'image',
                });

                form.setValue('photo', file);
              });

            // form.setValue('photo', response.data);
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
        galeryForm,
        saveIntegrator,
        multipleImages,
        setMultipleImages,
        profileUrl,
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
