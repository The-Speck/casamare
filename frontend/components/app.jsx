import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Header from './header';
import SplashBody from './splash_body';
import Footer from './footer';
import HomeIndex from './index/home_index_container';

export default () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={SplashBody}/>

      <Route path='/' component={HomeIndex} />
    </Switch>

  </div>
);
