import { ISkill } from '../../App.types';
import actions from './actions';

const simpleSkill = actions.addSkill;

const complexSkill = (skill: ISkill) => (dispatch: any) => {
  dispatch(actions.addSkill(skill));
};

export default {
  complexSkill,
  simpleSkill,
};
