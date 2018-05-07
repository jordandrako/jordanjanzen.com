export interface ICloudImage {}

export interface ICloudImageProps {
  align?: string | null;
  angle?: string;
  background?: string | null;
  bo: string | null;
  border?: boolean;
  children?: React.ReactChildren | null;
  className?: string;
  crop?:
    | "scale"
    | "fit"
    | "mfit"
    | "fill"
    | "lfill"
    | "limit"
    | "pad"
    | "lpad"
    | "mpad"
    | "crop"
    | "thumb"
    | "imagga_crop"
    | "imagga_scale";
  dim?: boolean;
  effects?: string | null;
  format?: string;
  gravity?:
    | "center"
    | "south"
    | "north"
    | "east"
    | "west"
    | "south_east"
    | "south_west"
    | "north_east"
    | "north_west"
    | "face"
    | "face:center"
    | "faces"
    | "faces:auto"
    | "faces:center";
  height?: string;
  link?: boolean;
  name: string;
  opacity?: string;
  publicId: string;
  radius?: string;
  style?: {} | null;
  width?: string;
}

export interface ICloudImageStyleProps {
  background?: string;
  dim?: boolean;
  border?: boolean;
  radius?: string;
  link?: boolean;
  align?: string | null;
  style?: {} | null;
}
