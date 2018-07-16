import React from 'react';
import HomeIndexItem from './home_index_item';
import Footer from '../footer';
import { Link } from 'react-router-dom';

class HomeListing extends React.Component {
  constructor(props) {
    super(props);

    this.state = { page: 1 };
    this.handlePageTurning = this.handlePageTurning.bind(this);
  }

  handlePageTurning(page) {
    return (e) => {
      this.setState({ page: page});
    };
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
        <Link
          to={`/${this.props.type}/${home.id}`}
          key={home.id}
          className='home-show-link'
          >
          <HomeIndexItem home={home} />
        </Link>
      );
    });

    return (
      <div className='index-items-container'>
        <h2>Real Estate</h2> <span>{allHomes.length} homes to {this.props.type}</span>
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

export default HomeListing;
