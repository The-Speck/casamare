import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SplashBody from './splash_body';

import { updateFilter } from '../../actions/filter_actions';

const msp = state => {

};

const mdp = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default withRouter(connect(null, mdp)(SplashBody));
