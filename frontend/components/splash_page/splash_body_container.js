import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SplashBody from './splash_body';

import { changeFilter } from '../../actions/filter_actions';

const msp = state => {

};

const mdp = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(changeFilter(filter, value))
  };
};

export default withRouter(connect(null, mdp)(SplashBody));
