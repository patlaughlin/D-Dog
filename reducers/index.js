import { combineReducers } from 'redux';
import { SET_CONTENT } from '../constants/ActionTypes';

function content(state = {__html: ""}, action) {
  switch (action.type) {
    case SET_CONTENT:
      console.log(state);
      return {
        content: action.content
      };
    default:
      return state;
  }
}

const dDog = combineReducers({
  content
});

export default dDog;
