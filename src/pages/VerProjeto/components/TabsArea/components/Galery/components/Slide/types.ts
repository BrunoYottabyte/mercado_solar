import {IImage} from '../../types';

type ImageTypes =
  | 'installation_location'
  | 'roof'
  | 'inverter_location'
  | 'meter_standard';

interface ISlideProps {
  images: IImage[];
  title: string;
  openModal: (id: string) => void;
  type:
    | 'installation_location'
    | 'roof'
    | 'inverter_location'
    | 'meter_standard';
}

export type {ISlideProps, ImageTypes};
