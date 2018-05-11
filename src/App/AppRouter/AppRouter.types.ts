import { IAppState, IProjects } from '../App.types';

export interface IAppRouter {}

export interface IAppRouterProps extends IAppState {}

export interface IAppRouterBaseProps {
  isLoggedIn: boolean;
  isMobile?: boolean;
}

export interface IHomeProps extends IAppRouterBaseProps {
  projects: IProjects;
}
