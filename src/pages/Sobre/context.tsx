import React, {createContext, useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {api} from '../../services/api';

import {IAboutProviderProps, IAboutContextData, IAboutProps} from './types';

const AboutContext = createContext({} as IAboutContextData);

export const AboutProvider: React.FC<IAboutProviderProps> = ({children}) => {
  const {slug} = useParams();
  const navigate = useNavigate();
  const [abouts, setAbout] = useState<IAboutProps[]>([]);
  const [selectedAbout, setSelectedAbout] = useState<IAboutProps>();

  useEffect(() => {
    api.get('/integrator/').then(response => {
      const aboutResponse: IAboutProps[] = response.data.results;
      if (!aboutResponse.length) {
        navigate('/home');
      }
      setAbout(aboutResponse);
      aboutResponse.length && setSelectedAbout(aboutResponse[0]);

      console.log('about', aboutResponse);
    });

    if (slug) {
      api
        .get(`/integrator/${slug}`)
        .then(response => {
          const aboutResponse: IAboutProps = response.data;
          setSelectedAbout(aboutResponse);
          console.log('abouyt integrator', aboutResponse);
        })
        .catch(() => {
          navigate('/integradores');
        });
    }
  }, []);
  return (
    <AboutContext.Provider
      value={{
        abouts,
        selectedAbout,
      }}>
      {children}
    </AboutContext.Provider>
  );
};

export const useAbout = (): IAboutContextData => {
  const context = useContext(AboutContext);

  if (!context) throw new Error('useAbout must be used within a AboutProvider');

  return context;
};
