import { connect } from 'react-redux';

import { openModal, closeModal } from '../../actions/modal_actions';
import { updateFilter } from '../../actions/filter_actions';
import IndexNav from './index_nav';

const msp = state => {
  const user = state.entities.users[state.session.id] || {};

  return {
    filters: state.ui.filters,
    savedHomes: user.savedHomes || []
  };
};

const mdp = dispatch => {
  return {
    openFilter: (type) => dispatch(openModal(type)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default connect(msp, mdp)(IndexNav);
