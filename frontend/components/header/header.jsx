import React from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Modal from '../modal/modal';
import { openModal } from '../../actions/modal_actions';
import Greeting from '../greeting/greeting_container';
import IndexNav from './index_nav_container';

const sessionCheck = (props) => {
  return (e) => {
    if (!props.sessionId) {
      return props.openModal('login');
    }
  };
};

const headerSplash = (props) => {
  const sellLink = (props.sessionId ?
    <li> <NavLink to="/sell">Sell</NavLink> </li> :
    <li onClick={sessionCheck(props)}>Sell</li> );

  return(
    <header className='splash'>
      <Modal />
      <Link to='/'><img className='splash-logo-image'src={window.logo}></img></Link>
      <div className='splash-header-container' >
        <div className='header-left'>
          <ul className='nav-links'>
            <li> <Link className="selected" to="/buy">Buy</Link>  </li>
            <li> <Link to="/rent">Rent</Link> </li>
            {sellLink}
          </ul>
        </div>

        <Greeting />
      </div>
    </header>
  );
};

const headerIndex = (props) => {
  const sellLink = (props.sessionId ?
    <li> <NavLink to="/sell">Sell</NavLink> </li> :
    <li onClick={sessionCheck(props)}>Sell</li> );

  return (
    <header className='index'>
      <Modal />
      <Link to='/'><img className='index-logo-image'src={window.logo}></img></Link>
      <div className='nav-filter-links clearfix'>
        <div className='index-header-container' >
          <div className='header-left'>
            <ul className='nav-links'>
              <li> <NavLink to="/buy">Buy</NavLink>  </li>
              <li> <NavLink to="/rent">Rent</NavLink> </li>
              {sellLink}
            </ul>
          </div>

          <Greeting />
        </div>
        <IndexNav />
      </div>
    </header>
  );
};

const msp = state => {
  return {
    sessionId: state.session.id
  };
};

const mdp = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
  };
};

const appHeader = () => (
  <Switch>
    <Route exact path="/" component={connect(msp, mdp)(headerSplash)}/>
    <Route path="/" component={connect(msp, mdp)(headerIndex)}/>
  </Switch>
);

export default appHeader;
