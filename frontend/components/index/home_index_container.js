import React from 'react';
import { fetchHomes } from '../../actions/home_actions.js';
import HomeIndex from './home_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  return {
    homes: Object.values(state.entities.homes)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHomes: filters => dispatch(fetchHomes(filters))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeIndex));
