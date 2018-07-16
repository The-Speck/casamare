import { connect } from 'react-redux';
import ManageHome from './manage_home.jsx';

import { createHome } from '../../actions/home_actions';

const msp = (state, ownProps) => {
  if (!state.session.id) return {};

  return {
    sessionId: { session: state.session.id },

    home: {
      address: '',
      baths: 0,
      beds: 0,
      userId: state.session.id,
      ownerEmail: state.entities.users[state.session.id].email,
      sale: null,
      rent: null,
      price: 0,
      photos: []
    }
  };
};

const mdp = dispatch => {
  return {
    createHome: (ownerId) => dispatch(createHome(ownerId)),
  };
};

export default connect(msp, mdp)(ManageHome);
