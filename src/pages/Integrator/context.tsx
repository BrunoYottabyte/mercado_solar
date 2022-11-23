import React, {createContext, useContext, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../context/GlobalContext';
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

  const [savedImages, setSavedImages] = useState<any[]>([]);
  const [multipleImages, setMultipleImages] = useState<any[]>([]);
  const [profileUrl, setProfileUrl] = useState('');
  const {setmodalOpen, modalOpen} = useGlobalContext();
  const [loading, setLoading] = useState(false);

  const openModal = id => {
    setmodalOpen({open: true, id});
  };

  const updateFilesSaved = () => {
    api.get(`/integrator/?user=${userId}`).then(response => {
      console.log(response.data);
      const integrator = response.data.results[0];
      if (integrator) setSavedImages(integrator.images);
    });
  };

  const saveIntegrator = (data: IIntegratorForm) => {
    const photo = data.photo && data.photo.length ? data.photo[0] : null;
    const formData = {...data, photo, user: userId};
    if (!photo) {
      delete formData['photo'];
    }
    setLoading(true);
    if (data.id) {
      api
        .put(`/integrator-create/${data.id}/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(async () => {
          for (let i = 0; i < multipleImages.length; i++) {
            const newData = {
              image: multipleImages[i],
              integrator: data.id,
            };
            await api.post(`/integrator-image/`, newData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
          }
        })
        .then(() => {
          openModal('animation-saved');
          setMultipleImages([])
          updateFilesSaved();
          setLoading(false);
        }).catch((err) => {
          setLoading(false);
        }).finally(() => {
          setLoading(false);
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
        .then(() => {
          openModal('animation-saved');
          setMultipleImages([])
          updateFilesSaved();
          setLoading(false);
        }).catch((err) => {
          setLoading(false);
        }).finally(() => {
          setLoading(false);
        });
    }
  };

  const removeImageSaved = async (id: string) => {
    setLoading(true);
    try {
      await api.delete(`/integrator-image/${id}`);
      openModal('animation-removed');

      // removendo a imagme localmente
      setSavedImages(prev => prev.filter(img => img.id !== id));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
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
        setSavedImages(integrator.images);
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
        loading,
        galeryForm,
        savedImages,
        saveIntegrator,
        multipleImages,
        removeImageSaved,
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
