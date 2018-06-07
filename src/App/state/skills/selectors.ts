import { ISkill } from '../../App.types';

function checkIfSkillHasCategory(skill: ISkill) {
  return skill.category === ('core' || 'design' || 'library');
}

export default {
  checkIfSkillHasCategory,
};
