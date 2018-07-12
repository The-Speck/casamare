import React from 'react';
import HomeMap from '../map/home_map';
import HomeListing from './home_listing';

class HomeIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchHomes();
  }

  render() {

    return (
      <div className='index-body'>
        <HomeMap/>
        <HomeListing homes={this.props.homes} type={this.props.location.pathname.slice(1)}/>
      </div>
    );
  }
}

export default HomeIndex;
