import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';

class OptionPicker extends React.Component{

	constructor(props){
		super(props);
		this.pickHub = this.pickHub.bind(this);
		this.pickRack = this.pickRack.bind(this);
	}

	componentWillMount(){
		this.setState({
			priceOffset: 1.0
		});
	}

	pickHub(){
		this.setState({
			priceOffset: 0
		})
		let url = 'https://teovoinea.lib.id/bikeshare@dev/hub/?currentlat=' + this.props.navDest.latlng.latitude +  '&currentlon=' + this.props.navDest.latlng.longitude;
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {                                                
                responseJson = JSON.parse(responseJson);
				this.props.onSetHubDropoff({
							"latlng": {
								"longitude": responseJson.lon,
								"latitude": responseJson.lat
							},                                                
							"title": "Dropoff Hub",
							"description": "Super sweet hub"
				})			  
			})
            .catch((error) => {
                console.error(error);
            });
	}

	pickRack(){
		this.setState({
			priceOffset: 1.0
		})
		this.props.onSetNearby();
	}

	render(){
		var time = Math.round(this.props.timeDist.time/60);
		var finalPrice = parseFloat(this.state.priceOffset + time*0.05).toFixed(2);		
		var distance = parseFloat(this.props.timeDist.dist/1000).toFixed(2);
		return (
			<View style={{position:'absolute',top: 0, left: 0, right: 0,height: 'auto', zIndex: 1,paddingBottom:5}}>
				<View style={{backgroundColor:'#3E9BFF'}}>
					<Text style={{color:'black',textAlign:'center',fontSize:14,fontWeight:'bold',backgroundColor:'white'}}>{time} minutes, {distance}km</Text>
					<Text style={{color:'black',textAlign:'center',fontSize:18,fontWeight:'bold',backgroundColor:'white'}}>${finalPrice}</Text>
				</View>				
				<View style={{flex:1,flexDirection:'row',backgroundColor:'#3E9BFF',justifyContent:'space-around',elevation:3}}>				
					<TouchableOpacity onPress={this.pickHub}  style={{...styles.buttons,borderRightColor:'black',borderRightWidth:1}}>
						<Text style={styles.buttonText}>Leave in Hub</Text>						
					</TouchableOpacity>
					<TouchableOpacity onPress={this.pickRack}  style={styles.buttons}>
						<Text style={styles.buttonText}>Leave Nearby</Text>
					</TouchableOpacity>			
				</View>			
			</View>
		)
	}

}

const styles={
	buttons:{
		flex:1,
		padding:20,
		elevation: 3,
		backgroundColor:'white'		
	},
	buttonText:{
		textAlign:'center',
		fontSize: 18,
		fontWeight: 'bold',
		color: 'black'		
	}
}

export default OptionPicker;