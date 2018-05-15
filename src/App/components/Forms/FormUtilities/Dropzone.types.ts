import { IImage } from '../../../App.types';

export interface IDropzoneProps {
  addImage: (image: IImage) => void;
  accept: string;
}
