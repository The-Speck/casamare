import React from 'react';
import { Route } from 'react-router';

import HomeMap from '../map/home_map';
import HomeListing from './home_listing';
import HomeShow from '../homes/home_container';

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
        <Route path={`/${type}/:homeId`} component={HomeShow}/>
      </div>
    );
  }
}

export default HomeIndex;
