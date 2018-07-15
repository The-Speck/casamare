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
    const { maxPrice, minBaths, minBeds, minPrice, area } = this.props;


    return (
      <nav className='filter-nav'>
        <FilterModal />
        <ul className='filter-nav-lists'>
          <li>
            <input
              className='index-search-bar'
              placeholder='Address, Neighborhoods, or ZIP'
              value={area}>
            </input>
          </li>
          <li>
            <button
              onClick={this.handleFilter('price')}>
              Any Price <span>&#9660;</span>
            </button>
          </li>
          <li>
            <button
              onClick={this.handleFilter('beds')}>
              {minBeds}+ Beds <span>&#9660;</span>
            </button>
          </li>
          <li>
            <button
              onClick={this.handleFilter('baths')}>
              {minBaths}+ Baths <span>&#9660;</span>
            </button>
          </li>
        </ul>
        <button id='saved-homes-button'>Saved Homes (0)</button>
      </nav>
    );
  }
}

export default IndexNav;
