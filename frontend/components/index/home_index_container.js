import React from 'react';
import HomeIndex from './home_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchHomes } from '../../actions/home_actions.js';
import { changeFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    homes: Object.values(state.entities.homes),
    filters: state.ui.filters,
    type: /[a-z]{3,}/.exec(ownProps.location.pathname)[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHomes: filters => dispatch(fetchHomes(filters)),
    updateFilter: (filter, value) => dispatch(changeFilter(filter, value))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeIndex));
