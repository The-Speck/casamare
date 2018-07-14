import React from 'react';
import FilterModal from './modal/filter_modal';

class IndexNav extends React.Component {
  constructor(props){
    super(props);

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(type) {
    return (e) => {
      this.props.openFilter(type);
    };
  }

  render () {
    return (
      <nav className='filter-nav'>
        <FilterModal />
        <ul className='filter-nav-lists'>
          <li>
            <input className='index-search-bar' placeholder='Address, Neighborhoods, or ZIP'>
            </input>
          </li>
          <li>
            <button
              onClick={this.handleFilter('price')}>Any Price
              <span>&#9660;</span>
            </button>
          </li>
          <li><button>0+ Beds <span>&#9660;</span></button></li>
          <li><button>0+ Baths <span>&#9660;</span></button></li>
        </ul>
        <ul>
          <button id='saved-homes-button'>Saved Homes (0)</button>
        </ul>
      </nav>
    );
  }
}

export default IndexNav;
