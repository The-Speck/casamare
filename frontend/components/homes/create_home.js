import { connect } from 'react-redux';
import ManageHome from './manage_home.jsx';

import { createHome } from '../../actions/home_actions';

const msp = (reactState, ownProps) => {
  if (!reactState.session.id) return {};

  const formattedAddress = reactState.ui.filters.area.split(', ');

  let streetAddress = '', city = '', state = '', zip = '';

  if (formattedAddress.length > 3) {
    streetAddress = formattedAddress[0];
    city = formattedAddress[1];
    state = formattedAddress[2].split(" ")[0];
    zip = formattedAddress[2].split(" ")[1];
  }

  return {
    home: {
      streetAddress,
      id: null,
      city,
      state,
      zip,
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
