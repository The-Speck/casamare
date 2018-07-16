import merge from 'lodash/merge';
import { RECEIVE_HOMES, RECEIVE_HOME } from '../actions/home_actions';

const homesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_HOMES:
      return action.homes;
    case RECEIVE_HOME:
      return merge({}, state, { [action.home.id]: action.home });
    default:
      return state;
  }
};

export default homesReducer;
