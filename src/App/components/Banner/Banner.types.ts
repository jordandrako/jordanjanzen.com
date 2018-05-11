import * as React from 'react';
import { TChildren } from '../../App.types';

export interface IBanner {
  showHide: () => void;
}

export interface IBannerProps extends React.HTMLAttributes<HTMLElement> {
  action?: (() => void) | BannerAction;
  actionText?: string;
  componentRef?: (component: IBanner | null) => void;
  children: TChildren;
  type?: BannerType;
  title?: string;
  className?: string;
}

export interface IBannerStyleProps {
  type?: BannerType;
}

export enum BannerAction {
  Reload,
}

export enum BannerType {
  Alert,
  Danger,
  Info,
  Success,
}
