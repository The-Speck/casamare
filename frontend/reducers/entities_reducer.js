import { combineReducers } from 'redux';

import users from './users_reducer';
import homes from './homes_reducer';
import owner from  './owner_reducer';

export default combineReducers({
  users,
  homes,
  owner,
});
