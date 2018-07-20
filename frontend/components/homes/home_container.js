import { connect } from 'react-redux';
import Home from './home.jsx';

import { fetchOwner } from '../../actions/owner_actions';
import { fetchHome, deleteHome } from '../../actions/home_actions';
import { createSave, deleteSave } from '../../actions/save_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const homeId = ownProps.match.params.homeId;
  const home = state.entities.homes[homeId] || {};
  const user = state.entities.users[state.session.id];

  return {
    sessionId: state.session.id,
    loggedIn: Boolean(state.session.id),
    saved: user ? user.savedHomes.includes(homeId) : false,

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
    createSave: (homeId) => dispatch(createSave(homeId)),
    deleteSave: (homeId) => dispatch(deleteSave(homeId)),
    deleteHome: id => dispatch(deleteHome(id)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(msp, mdp)(Home);
