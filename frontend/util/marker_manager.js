class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  updateMarkers(homes) {
    const homesObj = {};
    homes.forEach(home => homesObj[home.id] = home);

    homes
      .filter(home => !this.markers[home.id])
      .forEach(newHome => this.createMarkerFromHome(newHome));

    Object.keys(this.markers)
      .filter(homeId => !homesObj[homeId])
      .forEach((homeId) => this.removeMarker(this.markers[homeId]))
  }

  createMarkerFromHome(home) {
    const icon = {
      url:  'http://www.emoji.co.uk/files/emoji-one/symbols-emoji-one/2225-large-blue-circle.png',
      scaledSize: new google.maps.Size(15,15)
    };
    const position = new google.maps.LatLng(home.latitude, home.longitude);

    const marker = new google.maps.Marker({
      icon,
      position,
      map: this.map,
      homeId: home.id
    });

    marker.addListener('click', () => this.handleClick(home));
    this.markers[marker.homeId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.homeId].setMap(null);
    delete this.markers[marker.homeId];
  }
}

export default MarkerManager;
