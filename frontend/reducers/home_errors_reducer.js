import { RECEIVE_HOME_ERRORS } from '../actions/home_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_HOME_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
