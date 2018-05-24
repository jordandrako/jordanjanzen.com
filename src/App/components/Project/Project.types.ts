import { IProject, IProjects } from 'App/App.types';
import { History } from 'history';

export interface IProjectProps {
  details: IProject;
  index: string;
  hasBeenVisible?: boolean;
  style?: object;
}

export interface IProjectSingleProps extends IProjectProps {
  removeProject: (key: string) => void;
  history: History;
  projects: IProjects;
  isMobile: boolean;
}
