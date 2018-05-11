import { IProjectObject, ISkills } from '../../../App.types';

export interface IAddProjectFormProps {
  addProject: (project: IProjectObject) => void;
  skills: ISkills;
  cloudinary?: {
    key?: string;
    secret?: string;
  };
}
