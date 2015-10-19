import { combineReducers } from 'redux';
import { SET_CONTENT, SET_VISIBILITY_FILTER, VisibilityFilters } from '../constants/ActionTypes';
const { SHOW_EDITOR } = VisibilityFilters;

function visibilityFilter(state = SHOW_EDITOR, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function content(state = {__html: ""}, action) {
  switch (action.type) {
    case SET_CONTENT:
      return action.content;
    default:
      return state;
  }
}

const dDog = combineReducers({
  visibilityFilter,
  content
});

export default dDog;
