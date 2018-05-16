import { History } from 'history';
import { IProject, IProjects, TUpdateProject } from '../../App.types';

export interface IProjectProps {
  details: IProject;
  index: string;
  hasBeenVisible?: boolean;
  updateProject?: TUpdateProject;
  style?: {};
}

export interface IProjectStyleProps {}

export interface IProjectSingleProps extends IProjectProps {
  removeProject: (key: string) => void;
  history: History;
  projects: IProjects;
  isMobile: boolean;
}
