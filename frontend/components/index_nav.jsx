import React from 'react';

class IndexNav extends React.Component {

  render () {
    return (
      <nav>
        <ul>
          <input className='index-search-bar'></input>
          <button>Listing Type</button>
          <button>Any Price</button>
          <button>0+ Beds</button>
          <button>0+ Baths</button>
        </ul>
        <ul>
          <button>Saved Homes (0)</button>
        </ul>
      </nav>
    );
  }
}

export default IndexNav;
