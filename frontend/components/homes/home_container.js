import { connect } from 'react-redux';
import Home from './home.jsx';

import { fetchOwner } from '../../actions/owner_actions';
import { fetchHome } from '../../actions/home_actions';


const msp = (state, ownProps) => {
  const homeId = ownProps.match.params.homeId;
  const home = state.entities.homes[homeId] || {};

  return {
    sessionId: state.session.id ,

    home: {
      id: home.id || null,
      address: home.address || '',
      baths: home.baths || 0,
      beds: home.beds || 0,
      ownerId: home.owner_id || null,
      ownerEmail: state.entities.owner.ownerEmail || '',
      sale: home.sale || null,
      rent: home.rent || null,
      price: home.price || 0,
      photos: home.photos || []
    }
  };
};

const mdp = dispatch => {
  return {
    fetchOwner: (ownerId) => dispatch(fetchOwner(ownerId)),
    fetchHome: (homeId) => dispatch(fetchHome(homeId)),
  };
};

export default connect(msp, mdp)(Home);
