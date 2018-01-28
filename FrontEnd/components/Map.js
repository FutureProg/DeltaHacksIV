import React from 'react';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_API_KEY = "";

class Map extends React.Component {

    constructor(props){
        super(props);
        this.onRegionChange = this.onRegionChange.bind(this);
        this.getBike = this.getBike.bind(this);
        this.getHub = this.getHub.bind(this);
    }

    componentWillMount(){
        this.setState({
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            markers: [],
        });
    }

    componentDidMount() {        
        const locationSuccess = (position) => {                            
            this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0043,
                    longitudeDelta: 0.0034
                },
                error: null,
            });
            this.map.animateToRegion({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.0043,
                longitudeDelta: 0.0034                    
            })
            this.setState({
                markers: [...this.state.markers,{
                    "latlng": {
                        "latitude": position.coords.latitude,
                        "longitude": position.coords.longitude,                        
                    }
                }]
            })
            this.getHub();
        };
        navigator.geolocation.getCurrentPosition(
            locationSuccess,
            (error) => {this.setState({ error: error.message });console.log(error.message)},
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
        )
        this.watchId = navigator.geolocation.watchPosition(
            locationSuccess,
            (error) => {this.setState({ error: error.message });console.log(error.message)},
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
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
                responseJson = JSON.parse(responseJson);
              this.setState({
                  markers: [...this.state.markers,{
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
                responseJson = JSON.parse(responseJson);
                console.log(responseJson);
              this.setState({
                  markers: [...this.state.markers,{
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
       //this.setState({ region });
    }
      
    render() {              
        return (
            <MapView
            ref={(m)=>{this.map = m}}
            style={{
                flex: 1,
                zIndex: 0                                
            }}            
            region={this.state.region}
            onRegionChange={this.onRegionChange}
            >                
                <MapViewDirections
                    origin={}                    
                    destination={}
                    waypoints={}
                    apikey={}
                />
                {this.state.markers.map((marker,index) => (
                    <MapView.Marker
                        key={index}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                        onPress={(e=>console.log(e.nativeEvent))}
                    />
                ))}
            </MapView>
        );
    }
}

export default Map;