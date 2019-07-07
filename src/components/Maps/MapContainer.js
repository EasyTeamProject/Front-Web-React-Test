import React, { Component } from 'react';
import {InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import CurrentLocation from './CurrentLocation';
import Autocomplete from 'react-google-autocomplete';


export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker, e) =>{
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
        <Autocomplete
          style={{
            width: '100%',
            height: '40px',
          }}
          onPlaceSelected={ this.onPlaceSelected }
          types={['(regions)']}
        />
        <CurrentLocation
          centerAroundCurrentLocation
          google={this.props.google}
        >
            <Marker
              onClick={this.onMarkerClick}
              name={'Current Location'}
              draggable
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>

        </CurrentLocation>
      </div>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCG9gSKT-k5VxF2VPKYlGg85QJw1fO99zg'
})(MapContainer)
