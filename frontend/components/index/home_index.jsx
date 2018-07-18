import React from 'react';
import { Route, Switch } from 'react-router';

import { ProtectedRoute } from '../../util/route_util';

import HomeMap from '../map/home_map';
import HomeListing from './home_listing';
import HomeShow from '../homes/home_container';
import CreateHome from '../homes/create_home';
import EditHome from '../homes/edit_home';

class HomeIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = { type: /[a-z]{3,}/.exec(this.props.location.pathname)[0],
    area: props.filters.area};
  }

  componentDidMount() {
    this.props.updateFilter( this.state.type, true );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filters.area !== this.props.filters.area) {
      this.setState({ area: this.props.filters.area });
    }
  }


  render() {
    const type = this.state.type;

    return (
      <div className='index-body'>
        <HomeMap type={type} area={this.state.area}/>
        <HomeListing homes={this.props.homes} type={type}/>

        <Switch>
          <ProtectedRoute exact path={'/sell'} component={CreateHome}/>
          <ProtectedRoute path={'/sell/:homeId/edit'} component={EditHome}/>
          <Route path={`/${type}/:homeId`} component={HomeShow}/>
        </Switch>
      </div>
    );
  }
}

export default HomeIndex;
