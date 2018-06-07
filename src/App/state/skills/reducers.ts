import { combineReducers } from 'redux';
import types from './types';

const skillReducer = (state = false, action: any) => {
  switch (action.type) {
    case types.ADD_SKILL:
      return true;
    case types.REMOVE_SKILL:
      return null;
    default:
      return state;
  }
};

const reducer = combineReducers({
  skill: skillReducer,
});

export default reducer;
