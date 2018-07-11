import React from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';

import Modal from './modal/modal';
import Greeting from './greeting/greeting_container';
import IndexNav from './index_nav';

const headerSplash = (props) => {

  return(
    <header className='splash'>
      <Modal />
      <Link to='/'><img className='splash-logo-image'src='/assets/logo.png'></img></Link>
      <div className='splash-header-container' >
        <div className='header-left'>
          <ul className='nav-links'>
            <li> <Link className="selected" to="/buy">Buy</Link>  </li>
            <li> <Link to="/rent">Rent</Link> </li>
            <li> <Link to="/sell">Sell</Link> </li>
          </ul>
        </div>

        <Greeting />
      </div>
    </header>
  );
};
// <li> <a href="/rent">Rent</a> </li>
// <li> <a href="/sell">Sell</a> </li>

const headerIndex = (props) => (
  <header className='index'>
    <Modal />
    <div className='index-header-container' >
      <Link to='/'><img className='index-logo-image'src='/assets/logo.png'></img></Link>
      <div className='header-left'>
        <ul className='nav-links'>
          <li> <Link className="selected" to="/buy">Buy</Link>  </li>
          <li> <Link to="/rent">Rent</Link> </li>
          <li> <Link to="/sell">Sell</Link> </li>
        </ul>
      </div>

      <Greeting />
    </div>
    <IndexNav />
  </header>
);


const appHeader = () => (
  <Switch>
    <Route exact path="/" component={headerSplash}/>
    <Route path="/" component={headerIndex}/>
  </Switch>
);

export default appHeader;
