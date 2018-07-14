import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import { closeModal } from '../../actions/modal_actions';
import IndexNavPriceButtons from './index_nav_price_buttons';

class IndexNavBeds extends React.Component {
  constructor(props) {
    super(props);
  }
}

const msp = state => {
  return {
    minBeds: state.ui.filters.minBeds
  };
};

const mdp = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(IndexNavBeds);
