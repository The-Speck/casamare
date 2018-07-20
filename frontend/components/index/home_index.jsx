import React from 'react';
import { Route, Switch } from 'react-router';

import { ProtectedRoute } from '../../util/route_util';

import HomeMap from '../map/home_map';
import HomeListing from './home_listing';
import HomeShow from '../homes/home_container';
import CreateHome from '../homes/create_home';
import EditHome from '../homes/edit_home';
import SavedHomes from './saved_homes';

class HomeIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = { type: this.props.type,
    area: props.filters.area, completedType: false};
  }

  componentDidMount() {
    if (this.state.type !== 'sell' || this.state.type !== 'savedhomes') {
      this.props.updateFilter( this.state.type, true );
    }
  }

  componentDidUpdate(prevProps) {
    const keys = Object.keys(this.props.filters);
    const newType = /[a-z]{3,}/.exec(this.props.location.pathname)[0];

    for (let i = 0; i < keys.length; i++)
    {
      if (prevProps.filters[keys[i]] !== this.props.filters[keys[i]]) {
        this.setState({
          area: this.props.filters.area,
          type: newType
        });

        this.props.fetchHomes(this.props.filters);
        break;
      }
    }
  }


  render() {
    const type = this.props.type;

    return (
      <div className='index-body'>
        <HomeMap type={type} area={this.state.area}/>
        {type === 'savedhomes' ?
        <SavedHomes type={type}/> :
        <HomeListing type={type}/>}

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
