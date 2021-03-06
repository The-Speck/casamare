import ownerUtil from '../util/owner_util';

export const RECEIVE_OWNER = 'RECEIVE_OWNER';

export const receiveOwner = (owner) => ({
  type: RECEIVE_OWNER,
  owner
});

export const fetchOwner = ownerId => dispatch => (
  ownerUtil(ownerId).then(owner => {
    return dispatch(receiveOwner(owner));
  })
);
