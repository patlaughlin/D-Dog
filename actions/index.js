import { SET_CONTENT } from '../constants/ActionTypes';

/*
 * action creators
 */
export function setContent(text) {
  return {type: SET_CONTENT, content: text};
}
