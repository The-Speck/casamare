import React from 'react';
import { Route, Switch } from 'react-router';

import HomeMap from '../map/home_map';
import HomeListing from './home_listing';
import HomeShow from '../homes/home_container';
import CreateHome from '../homes/create_home';

class HomeIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchHomes();
  }

  render() {
    const type = /[a-z]{3,}/.exec(this.props.location.pathname);

    return (
      <div className='index-body'>
        <HomeMap/>
        <HomeListing homes={this.props.homes}
          type={type}/>

        <Switch>
          <Route path={'/sell'} component={CreateHome}/>
          <Route path={`/${type}/:homeId`} component={HomeShow}/>
        </Switch>
      </div>
    );
  }
}

export default HomeIndex;
