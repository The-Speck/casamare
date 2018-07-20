import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SAVE, DESTROY_SAVE} from '../actions/save_actions';
import { RECEIVE_HOME } from '../actions/home_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_SAVE:
    case DESTROY_SAVE:
      return { [action.currentUser.id]: action.currentUser };
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default usersReducer;
