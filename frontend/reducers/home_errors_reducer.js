import { RECEIVE_HOME_ERRORS, RECEIVE_HOMES } from '../actions/home_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_HOME_ERRORS:
      return action.errors;
    case RECEIVE_HOMES:
      return [];
    default:
      return state;
  }
};
