import React from 'react';
import HomeIndexItem from './home_index_item';

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

    const numPages = Math.floor(this.props.homes.length / 20);

    const first = [
      <li key="oo">
        <button onClick={this.handlePageTurning(1)}>1</button>
      </li>
    ];

    const last = [
      <li key="jjjjjj">
        <button onClick={this.handlePageTurning(numPages)}>{numPages}</button>
      </li>
    ];

    let startIdx = 1;
    let endIdx = numPages;

    if (page >= 5 && page <= numPages - 5) {
      startIdx = page - 2;
      endIdx = page + 2;
      first.push(<li key="jhj">...</li>);
      last.unshift(<li key="ee">...</li>);
    } else if ( page < 6 ) {
      startIdx = 2;
      endIdx = 6;
      last.unshift(<li key='Ll'>...</li>);
    } else {
      startIdx = numPages - 5;
      endIdx = numPages - 1;
      first.push(<li key="hello">...</li>);
    }

    const pages = [];

    for (let i = startIdx; i < endIdx; i++) {
      pages.push(
        <li key={i}>
          <button onClick={this.handlePageTurning(i)}>{i}</button>
        </li>
      );
    }

    return first.concat(pages).concat(last);
  }

  render() {
    const { homes: allHomes } = this.props;

    const houseStart = (this.state.page - 1) * 20;
    const houseEnd = this.state.page * 20;
    const homes = allHomes.slice(houseStart, houseEnd).map(home => {
      return <HomeIndexItem key={home.id} home={home} />;
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
      </div>
    );
  }
}

export default HomeListing;
