import { IProjectObject, ISkillObject } from '../../../App.types';

export interface IAddProjectFormProps {
  addProject: (project: IProjectObject) => void;
  skills: ISkillObject;
  cloudinary?: {
    key?: string;
    secret?: string;
  };
}
