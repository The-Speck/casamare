import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SAVE, DESTROY_SAVE} from '../actions/save_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_SAVE:
    case DESTROY_SAVE:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    default:
      return state;
  }
};

export default usersReducer;
