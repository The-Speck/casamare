import React from 'react';
import { fetchHomes } from '../../actions/home_actions.js';
import HomeIndex from './home_index';

const mapStateToProps = state => {
  return {
    houses: Object.values(state.entities.homes)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHomes: filters => dispatch(fetchHomes(filters))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);
