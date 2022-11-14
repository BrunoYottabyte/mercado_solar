import React, {createContext, useContext, useEffect, useState} from 'react';
import {api} from '../../../../../../services/api';
import {useVerProjeto} from '../../../../context';
import {saveAs} from 'file-saver';
import {
  IGaleryProviderProps,
  IGaleryContextData,
  IGalery,
  ImageTypes,
} from './types';

const GaleryContext = createContext({} as IGaleryContextData);

export const GaleryProvider: React.FC<IGaleryProviderProps> = ({children}) => {
  const {budgetRequest} = useVerProjeto();
  const [galeryData, setGaleryData] = useState<IGalery>({
    installation_location: [],
    inverter_location: [],
    meter_standard: [],
    roof: [],
  });

  const downloadImage = (imageUrl: string) => {
    saveAs(imageUrl, 'image.jpg'); // Put your image url here.
  };

  const saveImage = (e, type: ImageTypes) => {
    if (!budgetRequest) {
      return;
    }
    const {files} = e.target;

    for (let i = 0; i < files.length; i++) {
      const file = files[i]; // OR const file = files.item(i);
      const data = {
        image: file,
        type: type,
        budget_request: budgetRequest.id,
      };
      api
        .post('/budget_request_image/', data, {
          headers: {'Content-Type': 'multipart/form-data'},
        })
        .then(response => {
          setGaleryData({
            ...galeryData,
            [type]: [...galeryData[type], response.data],
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (!budgetRequest?.images) {
      return;
    }
    setGaleryData({
      installation_location: budgetRequest?.images?.filter(
        i => i.type === 'installation_location',
      ),
      inverter_location: budgetRequest?.images?.filter(
        i => i.type === 'inverter_location',
      ),
      meter_standard: budgetRequest?.images?.filter(
        i => i.type === 'meter_standard',
      ),
      roof: budgetRequest?.images?.filter(i => i.type === 'roof'),
    });
  }, [budgetRequest]);

  return (
    <GaleryContext.Provider
      value={{
        galeryData,
        saveImage,
        downloadImage,
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
