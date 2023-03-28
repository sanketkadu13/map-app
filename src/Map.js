import React, { Component } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

class Map extends Component {
  state = {
    currentLocation: { lat: 18.62147141214891, lng: 73.75959576534039 }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.setState({
        currentLocation: { lat: latitude, lng: longitude }
      });
    });
  }

  render() {
    return (
      <MapContainer center={this.state.currentLocation} zoom={13} style={{ height: "100vh" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={this.state.currentLocation}>
          <Popup>
            Your current location
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Map;
