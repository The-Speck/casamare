import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Greeting from './greeting/greeting_container';

export default () => (
  <div>
    Hello World!
    <Greeting />
  </div>
);
