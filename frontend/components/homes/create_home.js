import { connect } from 'react-redux';
import ManageHome from './manage_home.jsx';

import { createHome } from '../../actions/home_actions';

const msp = (reactState, ownProps) => {
  if (!reactState.session.id) return {};

  const [streetAddress, city, state, zip] = '';

  return {
    home: {
      streetAddress: '',
      id: null,
      city: '',
      state: '',
      zip: '',
      baths: 0,
      beds: 0,
      userId: reactState.session.id,
      ownerEmail: reactState.entities.users[reactState.session.id].email,
      sale: null,
      rent: null,
      price: 0,
      photos: []
    },

    errors: reactState.errors.home || []
  };
};

const mdp = dispatch => {
  return {
    processHome: (home) => dispatch(createHome(home)),
  };
};

export default connect(msp, mdp)(ManageHome);
