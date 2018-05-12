import { TChildren } from '../../App.types';

export interface ICloudImage {}

export interface ICloudImageProps {
  align?: 'left' | 'right';
  angle?: string;
  background?: string;
  bo?: string;
  border?: boolean;
  children?: TChildren | null;
  className?: string;
  crop?:
    | 'scale'
    | 'fit'
    | 'mfit'
    | 'fill'
    | 'lfill'
    | 'limit'
    | 'pad'
    | 'lpad'
    | 'mpad'
    | 'crop'
    | 'thumb'
    | 'imagga_crop'
    | 'imagga_scale';
  dim?: boolean;
  effects?: string | null;
  format?: string;
  gravity?:
    | 'center'
    | 'south'
    | 'north'
    | 'east'
    | 'west'
    | 'south_east'
    | 'south_west'
    | 'north_east'
    | 'north_west'
    | 'face'
    | 'face:center'
    | 'faces'
    | 'faces:auto'
    | 'faces:center';
  height?: string;
  link?: boolean;
  name: string;
  opacity?: string;
  publicId: string;
  radius?: string;
  style?: {};
  width?: string;
}

export interface ICloudImageStyleProps {
  align?: string;
  background?: string;
  border: boolean;
  dim: boolean;
  link: boolean;
  radius?: string;
}
