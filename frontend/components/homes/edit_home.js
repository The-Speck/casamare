import { connect } from 'react-redux';
import ManageHome from './manage_home.jsx';

import { editHome } from '../../actions/home_actions';

const msp = (reactState, ownProps) => {
  if (!reactState.session.id) return {};

  const home = reactState.entities.homes[ownProps.match.params.homeId];
  const [streetAddress, city, state, zip] = home.address.split(', ');

  return {
    home: {
      streetAddress,
      id: home.id,
      city,
      state,
      zip,
      baths: home.baths,
      beds: home.beds,
      userId: reactState.session.id,
      ownerEmail: reactState.entities.users[reactState.session.id].email,
      sale: home.sale,
      rent: home.rent,
      price: home.price,
      photos: home.photos
    },

    errors: reactState.errors.home
  };
};

const mdp = dispatch => {
  return {
    processHome: (home, id) => dispatch(editHome(home, id)),
  };
};

export default connect(msp, mdp)(ManageHome);
