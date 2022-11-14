import React, {createContext, useContext, useState} from 'react';
import {useVerProjeto} from '../../../../context';

import {IGaleryProviderProps, IGaleryContextData, IGalery} from './types';

const GaleryContext = createContext({} as IGaleryContextData);

export const GaleryProvider: React.FC<IGaleryProviderProps> = ({children}) => {
  const {} = useVerProjeto();
  const [galeryData, setGaleryData] = useState<IGalery>({
    installation_location: [],
    inverter_location: [],
    meter_standard: [],
    roof: [],
  });

  return (
    <GaleryContext.Provider
      value={{
        galeryData,
      }}>
      {children}
    </GaleryContext.Provider>
  );
};

export const useGalery = (): IGaleryContextData => {
  const context = useContext(GaleryContext);

  if (!context)
    throw new Error('useGalery must be used within a GaleryProvider');

  return context;
};
