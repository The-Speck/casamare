import { connect } from 'react-redux';
import ManageHome from './manage_home.jsx';

import { editHome } from '../../actions/home_actions';
import { changeFilter } from '../../actions/filter_actions';

const msp = (reactState, ownProps) => {
  if (!reactState.session.id) return {};

  const home = reactState.entities.homes[ownProps.match.params.homeId] || { address: '' };
  const [streetAddress, city, state, zip] = home.address.split(', ');

  return {
    prevLoc: reactState.ui.filters.buy ? 'buy' : 'rent',

    home: {
      streetAddress,
      id: ownProps.match.params.homeId,
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
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
  };
};

export default connect(msp, mdp)(ManageHome);
