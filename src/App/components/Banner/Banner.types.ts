import * as React from 'react';
import { TChildren } from '../../App.types';

export interface IBanner {
  showHide: () => void;
}

export interface IBannerProps extends React.HTMLAttributes<HTMLElement> {
  children: TChildren;
  bannerType: BannerType;
  action?: BannerAction | BannerAction[];
  actionText?: string;
  className?: string;
  componentRef?: (component: IBanner | null) => void;
  customAction?: () => void;
  in?: boolean;
  title?: string;
}

export interface IBannerStyleProps {
  bannerType?: BannerType;
}

export enum BannerAction {
  Reload,
  Home,
  Back,
}

export enum BannerType {
  Alert,
  Danger,
  Info,
  Success,
}
