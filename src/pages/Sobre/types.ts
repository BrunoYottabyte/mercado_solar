import {ReactNode} from 'react';

interface IImage {
  id: string;
  image: string;
}
interface IAboutProps {
  slug: string;
  id: string;
  name: string;
  about: string;
  photo: string;
  services_offered: string;
  brands_and_equipment: string;
  service_regions: string;
  federative_unit: string;
  city: string;
  images: IImage[];
}
interface IAboutProviderProps {
  children: ReactNode;
}
interface IAboutContextData {
  abouts: IAboutProps[];
  selectedAbout: IAboutProps | undefined;
}

export type {IAboutProviderProps, IAboutContextData, IAboutProps, IImage};
