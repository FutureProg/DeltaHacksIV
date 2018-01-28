import React from 'react';
import MapView from 'react-native-maps';

class Map extends React.Component {

    getInitialState() {
        
        return {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            markers: [],
        };
    }

    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    },
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

    getBike() {
        let url = 'https://teovoinea.lib.id/bikeshare@dev/bike/?currentlat=' + this.state.region.latitude +  '&currentlon=' + this.state.region.longitude;
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({
                  markers: [{
                        "latlng": {
                            "longitude": responseJson.lon,
                            "latitude": responseJson.lat
                        },
                        "title": "Bike",
                        "description": "Super sweet bike"
                    }]
              })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getHub() { //heh
        let url = 'https://teovoinea.lib.id/bikeshare@dev/hub/?currentlat=' + this.state.region.latitude +  '&currentlon=' + this.state.region.longitude;
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({
                  markers: [{
                        "latlng": {
                            "longitude": responseJson.lon,
                            "latitude": responseJson.lat
                        },
                        "title": "Hub",
                        "description": "Super sweet hub"
                    }]
              })
            })
            .catch((error) => {
                console.error(error);
            });
    }
      
    onRegionChange(region) {
       this.setState({ region });
    }
      
    render() {
        return (
            <MapView
            region={this.state.region}
            onRegionChange={this.onRegionChange}
            >
                {this.state.markers.map(marker => (
                    <MapView.Marker
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
        );
    }
}

export default Map;