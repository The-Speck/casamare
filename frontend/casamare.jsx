import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//TESTING
import * as HomeApiUtil from './util/home_api_util';
import ownerUtil from './actions/owner_actions';
//ENDTESTING


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //Testing
  // window.HomeApiUtil = HomeApiUtil;
  // window.HomeActions = HomeActions;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  //endTesting

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
