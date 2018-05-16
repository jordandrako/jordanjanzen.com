import { IProject, ISkills } from '../../../App.types';

export interface IAddProjectFormProps {
  addProject: (project: IProject) => void;
  skills: ISkills;
}
