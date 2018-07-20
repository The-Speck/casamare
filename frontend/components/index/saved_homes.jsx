import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import HomeIndexItem from './home_index_item';
import Footer from '../footer';
import Pagination from '../../util/pagination_util';
import { savedHomes } from '../../actions/home_actions';

class SavedHomes extends React.Component {
  constructor(props) {
    super(props);

    this.state = { page: 1, type: this.props.type };
  }

  componentDidMount() {
    this.props.fetchHomes(this.props.savedHomes);
  }

  componentDidUpdate(prevProps) {
    if (this.props.homes.length != this.props.savedHomes.length) {
      this.props.fetchHomes(this.props.savedHomes);
    }
  }

  render() {
    const { homes: allHomes } = this.props;
    const type = /[a-z]{3,}/.exec(this.props.location.pathname)[0];

    const houseStart = (this.state.page - 1) * 20;
    const houseEnd = this.state.page * 20;
    const homes = allHomes.slice(houseStart, houseEnd).map(home => {
      return (
        <HomeIndexItem
          key={home.id}
          home={home}
          type={type}
          saved={this.props.savedHomes.includes(home.id)}/>
      );
    });

    return (
      <div className='index-items-container'>
        <h2>Real Estate</h2> <span>{allHomes.length} Saved Homes</span>
        <ul className='index-items'>
          { homes }
        </ul>

        <ul className='number-pages'>
          {Pagination(this)}
        </ul>
        <Footer/>
      </div>
    );
  }
}

const msp = state => {
  const user = state.entities.users[state.session.id] || {};

  return {
    homes: Object.values(state.entities.homes),
    savedHomes: user.savedHomes || []
  };
};

const mdp = dispatch => {
  return {
    fetchHomes: (homeIds) => dispatch(savedHomes(homeIds))
  };
};

export default withRouter(connect(msp, mdp)(SavedHomes));
