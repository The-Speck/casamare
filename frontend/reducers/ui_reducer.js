import { combineReducers } from 'redux';
import modal from './modal_reducer';
import filters from './filters_reducer';

const uiReducer = combineReducers({
  modal,
  filters
});

export default uiReducer;
