import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import HomeIndexItem from './home_index_item';
import Footer from '../footer';

class HomeListing extends React.Component {
  constructor(props) {
    super(props);

    this.state = { page: 1, type: this.props.type };
    this.handlePageTurning = this.handlePageTurning.bind(this);
  }

  handlePageTurning(page) {
    return (e) => {
      this.setState({ page: page});
    };
  }

  componentDidUpdate(prevProps) {
    const type = /[a-z]{3,}/.exec(this.props.location.pathname)[0];
    if ( type !== this.state.type) {
      this.setState({ type });
    }
  }

  pages() {
    const { page } = this.state;

    let numPages = Math.floor(this.props.homes.length / 20);

    let first = [
      <li key="1">
        <button className={ page === 1 ? 'page-selected' : ''} onClick={this.handlePageTurning(1)}>1</button>
      </li>
    ];

    let last = [
      <li key={numPages}>
        <button className={ page === numPages ? 'page-selected' : ''}
          onClick={this.handlePageTurning(numPages)}>{numPages}</button>
      </li>
    ];

    let startIdx;
    let endIdx;

    if (numPages < 5) {
      first = [];
      last = [];

      startIdx = 1;
      numPages += 1;
      endIdx = numPages + 1;
    }
    else if (page >= 5 && page <= numPages - 5) {
      startIdx = page - 2;
      endIdx = page + 2;

      first.push(<li key='...1'>...</li>);
      last.unshift(<li key='...2'>...</li>);
    }
    else if ( page < 6 ) {
      startIdx = 2;
      endIdx = 6;

      last.unshift(<li key='...3'>...</li>);
    }
    else {
      startIdx = numPages - 5;
      endIdx = numPages;

      first.push(<li key='...4'>...</li>);
    }

    const pages = [];

    for (let i = startIdx; i < endIdx; i++) {
      pages.push(
        <li key={i}>
          <button className={ page === i ? 'page-selected' : ''} onClick={this.handlePageTurning(i)}>{i}</button>
        </li>
      );
    }

    let next = [];

    if (numPages > 1 && page < numPages) {
      next = [
        <li key={numPages+1}>
          <button className='next-page-button' onClick={this.handlePageTurning(page+1)}>NEXT</button>
        </li>
      ];
    }

    return first.concat(pages).concat(last).concat(next);
  }

  render() {
    const { homes: allHomes } = this.props;

    const houseStart = (this.state.page - 1) * 20;
    const houseEnd = this.state.page * 20;
    const homes = allHomes.slice(houseStart, houseEnd).map(home => {
      return (
        <HomeIndexItem
          key={home.id}
          home={home}
          type={this.state.type}
          saved={this.props.savedHomes.includes(home.id)}/>
      );
    });

    return (
      <div className='index-items-container'>
        <h2>Real Estate</h2> <span>{allHomes.length} homes to {this.state.type}</span>
        <ul className='index-items'>
          { homes }
        </ul>

        <ul className='number-pages'>
          {this.pages()}
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
  return {};
};

export default withRouter(connect(msp, mdp)(HomeListing));
