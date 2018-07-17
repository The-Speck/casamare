import * as HomeAPIUtil from '../util/home_api_util';

export const RECEIVE_HOMES = 'RECEIVE_HOMES';
export const RECEIVE_HOME = 'RECEIVE_HOME';
export const RECEIVE_HOME_ERRORS = 'RECEIVE_HOME_ERRORS';

export const receiveHomes = homes => ({
  type: RECEIVE_HOMES,
  homes,
});

export const receiveHome = ( home ) => ({
  type: RECEIVE_HOME,
  home,
});

export const receiveErrors = errors => {
  return {
  type: RECEIVE_HOME_ERRORS,
  errors
  };
};

export const fetchHomes = filters => dispatch => (
  HomeAPIUtil.fetchHomes(filters).then(homes => (
    dispatch(receiveHomes(homes))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchHome = id => dispatch => (
  HomeAPIUtil.fetchHome(id).then(payload => (
    dispatch(receiveHome(payload))
  ))
);

export const createHome = home => dispatch => (
  HomeAPIUtil.createHome(home).then(newHome => (
    dispatch(receiveHome(newHome))
  ), err => {
    return dispatch(receiveErrors(err.responseJSON));
  })
);

export const editHome = (home, id) => dispatch => (
  HomeAPIUtil.editHome(home, id).then(editedHome => (
    dispatch(receiveHome(editedHome))
  ), err => {
    return dispatch(receiveErrors(err.responseJSON));
  })
);
