import {ReactNode} from 'react';

interface IImage {
  id: number;
  image: string;
  type: ImageTypes;
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
type ImageTypes =
  | 'installation_location'
  | 'roof'
  | 'inverter_location'
  | 'meter_standard';

interface IGaleryContextData {
  galeryData: IGalery;
  saveImage: (e: any, type: ImageTypes) => void;
  downloadImage: (imageUrl: string) => void;
}

export type {
  IGaleryProviderProps,
  IGaleryContextData,
  IGalery,
  IImage,
  ImageTypes,
};
