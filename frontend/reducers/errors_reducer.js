import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import homeErrorsReducer from './home_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  home: homeErrorsReducer
});

export default errorsReducer;
