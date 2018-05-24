import { IImage } from 'App/App.types';

export interface IDropzoneProps {
  addImage: (image: IImage) => void;
  accept: string;
}
