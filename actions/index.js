import { SET_CONTENT, SET_VISIBILITY_FILTER } from '../constants/ActionTypes';

/*
 * action creators
 */
export function setContent(text) {
  return {type: SET_CONTENT, content: text};
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter};
}
