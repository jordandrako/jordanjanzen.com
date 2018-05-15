import { ISkills, TProject } from '../../../App.types';

export interface IAddProjectFormProps {
  addProject: (project: TProject) => void;
  skills: ISkills;
}
