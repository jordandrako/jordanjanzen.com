import { IProject, ISkills } from 'App/App.types';

export interface IAddProjectFormProps {
  addProject: (project: IProject) => void;
  skills: ISkills;
}
