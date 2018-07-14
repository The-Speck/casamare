import { connect } from 'react-redux';
import { openModal, closeModal } from '../actions/modal_actions';
import IndexNav from './index_nav';

const msp = state => {
  return {
    filters: state.ui.filters
  };
};

const mdp = dispatch => {
  return {
    openFilter: (type) => dispatch(openModal(type))
  };
};

export default connect(msp, mdp)(IndexNav);
