import * as SaveAPIUtil from '../util/save_api_util';

export const RECEIVE_SAVE = 'RECEIVE_SAVE';
export const DESTROY_SAVE = 'DESTROY_SAVE';

export const receiveSave = homeId => ({
  type: RECEIVE_SAVE,
  homeId
});

export const destroySave = homeId => ({
  type: DESTROY_SAVE,
  homeId
});

export const createSave = id => dispatch => (
  SaveAPIUtil.createSave(id).then( () => (
    dispatch(receiveSave(id))
  ))
);

export const deleteSave = id => dispatch => (
  SaveAPIUtil.deleteSave(id).then( () => (
    dispatch(destroySave(id))
  ))
);
