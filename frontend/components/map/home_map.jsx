import React from 'react';

class HomeMap extends React.Component {
  componentDidMount() {
     const mapOptions = {
       center: { lat: 39.8283, lng: -98.5795 },
       minZoom: 3,
       zoom: 4
     };

     this.map = new google.maps.Map(this.mapNode, mapOptions);
   }

  render() {
    return (
      <div id='map-container' ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default HomeMap;
