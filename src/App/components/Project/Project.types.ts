import { IProjectObject, IProjects } from '../../App.types';

export interface IProject {}

export interface IProjectProps {
  details: IProjectObject;
  index: string;
  hasBeenVisible?: boolean;
  updateProject: (key: string, updatedProp: {}) => void;
}

export interface IProjectStyleProps {}

export interface IProjectSingleProps extends IProjectProps {
  removeProject: (key: string) => void;
  // TODO: find router type for history object
  history: any;
  projects: IProjects;
  isMobile: boolean;
  isLoggedIn: boolean;
}
