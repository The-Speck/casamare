import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateFilter } from '../../actions/filter_actions';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: { lat: 39.8283, lng: -98.5795 },
  minZoom: 3,
  zoom: 4
};

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class HomeMap extends React.Component {

  getLatLng(address) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK)
      {
        mapOptions.center.lat = results[0].geometry.location.lat();
        mapOptions.center.lng = results[0].geometry.location.lng();
        mapOptions.zoom= 13;

        this.createMap();
      }
    }.bind(this));
  }

  createMap() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.homes);
  }

  componentDidMount() {
    if (this.props.area !== '') {
      this.getLatLng(this.props.area);
    } else {
      this.createMap();
    }
  }

   componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.homes);
   }

  render() {
    return (
      <div id='map-container' ref={ map => this.mapNode = map }>
      </div>
    );
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(home) {
    this.props.history.push(`/${this.props.type}/${home.id}`);
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: '/homes/',
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }
}

const msp = state => {
  return {
    filters: state.ui.filters,
    homes: Object.values(state.entities.homes)
  };
};

const mdp = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};


export default connect(msp, mdp)(HomeMap);
