import {ReactNode} from 'react';

interface IImage {
  id: number;
  image: string;
}

interface IGalery {
  installation_location: IImage[];
  roof: IImage[];
  inverter_location: IImage[];
  meter_standard: IImage[];
}

interface IGaleryProviderProps {
  children: ReactNode;
}

interface IGaleryContextData {
  galeryData: IGalery;
}

export type {IGaleryProviderProps, IGaleryContextData, IGalery, IImage};
