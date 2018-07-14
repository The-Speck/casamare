import React from 'react';

class HomeIndexItem extends React.Component {

  render() {
    const { home } = this.props;

    let price = 0;
    let beds = '$';

    if (home) {
      price = home.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      beds = home.beds === 1 ? 'bd' : 'bds';
    }
    // <img className='thumbnail-image' src={home.photos[0]}/>

    return (
      <li className='index-item'>
        <div className='thumbnail-image-container'>
          <div className='thumbnail-image-gradient'/>
        </div>
        <div className='index-item-data'>
          <div className='index-item-info'>
            <span className='index-item-price'>${price}</span>&middot;
            <span className='index-item-room'>{home.beds} beds</span>&middot;
            <span className='index-item-room'>{home.baths} ba</span>
          </div>
          <div className='index-item-address'>
            {home.address}
          </div>
        </div>
      </li>
    );
  }
}

export default HomeIndexItem;
