import { ISkill } from 'App/App.types';
import types from './types';

const addSkill = (skill: ISkill) => ({
  skill,
  type: types.ADD_SKILL,
});

const removeSkill = (key: string) => ({
  key,
  type: types.REMOVE_SKILL,
});

export default {
  addSkill,
  removeSkill,
};
