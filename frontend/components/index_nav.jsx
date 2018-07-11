import React from 'react';

class IndexNav extends React.Component {

  render () {
    return (
      <nav className='filter-nav'>
        <ul className='filter-nav-lists'>
          <li><input className='index-search-bar' placeholder='Address, Neighborhoods, or ZIP'></input></li>
          <li><button>Listing Type <span>&#9660;</span></button></li>
          <li><button>Any Price <span>&#9660;</span></button></li>
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
