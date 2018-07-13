import merge from 'lodash/merge';

import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {},

  minPrice: 0,
  maxPrice: 1000000,

  minBeds: 1,
  maxbeds: 5,

  minBaths: 1,
  maxBaths: 3,

  area: ''
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default filtersReducer;
