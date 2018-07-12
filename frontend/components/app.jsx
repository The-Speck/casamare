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
import Footer from './footer.jsx';

export default () => (
  <div>
    <Header />
    <Route exact path="/" component={SplashBody}/>
    <Route exact path="/" component={Footer}/>
  </div>
);
