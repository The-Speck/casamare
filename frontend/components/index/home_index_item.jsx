import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { createSave, deleteSave } from '../../actions/save_actions';
import { openModal } from '../../actions/modal_actions';

class HomeIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { saved: this.props.saved };
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(e) {
    e.stopPropagation();

    if (!this.props.loggedIn) {
      this.props.openModal('login');
    } else if (this.state.saved) {
      this.setState({ saved: false });
      this.props.deleteSave(this.props.home.id);
    } else {
      this.setState({ saved: true });
      this.props.createSave(this.props.home.id);
    }
  }

  componentDidUpdate() {
    if (this.props.saved !== this.state.saved) {
      this.setState({ saved: this.props.saved });
    }
  }

  render() {
    const { home } = this.props;

    let price = 0;
    let beds = '$';

    if (home) {
      price = home.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      beds = home.beds === 1 ? 'bd' : 'bds';
    }

    const heart =  this.state.saved ?
      <button
        onClick={this.handleSave}
        className='index-saved-button'>&#128153;</button> :
      <button
        onClick={this.handleSave}
        className='index-save-button'>&#128155;</button>;

    return (
      <li className='index-item'>
        <div className='index-save'>
          {heart}
        </div>
        <Link
          to={`/${this.props.type}/${home.id}`}
          className='home-show-link'
          >
          <div className='thumbnail-image-container'>
            <div className='thumbnail-image-gradient'/>
            {
              <img className='thumbnail-image' src={home.photos[0]}/>
            }
          </div>
          <div className='index-item-data'>
            <div className='index-item-info'>
              <span className='index-item-price'>${price}</span>&middot;
              <span className='index-item-room'>{home.beds} beds</span>&middot;
              <span className='index-item-room'>{home.baths} ba</span>
            </div>
            <div className='index-item-address'>
              {home.address}
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

const msp = state => {
  return {
  };
};

const mdp = dispatch => {
  return {
    createSave: (homeId) => dispatch(createSave(homeId)),
    deleteSave: (homeId) => dispatch(deleteSave(homeId)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(msp, mdp)(HomeIndexItem);
