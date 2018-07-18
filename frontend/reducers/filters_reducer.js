import merge from 'lodash/merge';

import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {},

  minPrice: 0,
  maxPrice: 0,

  minBeds: 0,

  minBaths: 0,

  buy: null,
  rent: null,

  area: ''
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  let newFilter;

  if (action.type === UPDATE_FILTER) {
    if (action.filter === 'buy') {
      newFilter = { buy: true, rent: false };
    } else if (action.filter === 'rent') {
      newFilter = { buy: false, rent: true };
    } else {
      newFilter = { [action.filter]: action.value };
    }
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default filtersReducer;
