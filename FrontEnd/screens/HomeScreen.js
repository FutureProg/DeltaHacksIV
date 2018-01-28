import React from 'react';
import {View, TextInput,Platform,Text} from 'react-native';

import NavigationInput from '../components/NavigationInput';
import BottomOptions from '../components/BottomOptions';
import Map from '../components/Map';
import OptionPicker from '../components/OptionPicker';

class HomeScreen extends React.Component{	

	constructor(props){
		super(props);
		this.onDestinationUpdate = this.onDestinationUpdate.bind(this);
		this.onCurrentLocationUpdate = this.onCurrentLocationUpdate.bind(this);
		this.onTimeDistanceUpdate = this.onTimeDistanceUpdate.bind(this);
		this.onSetHubDropoff = this.onSetHubDropoff.bind(this);
		this.onSetNearby = this.onSetNearby.bind(this);
	}

	componentWillMount(){
		this.setState({
			destination: null,
			origin: null,
			timedist: null,
			hubdropoff: null
		});
	}

	onSetHubDropoff(marker){
		console.log(marker);
		this.setState({
			hubdropoff:marker
		});
	}

	onSetNearby(){
		this.setState({
			hubdropoff:undefined
		})
	}

	onDestinationUpdate(obj){
		this.setState({
			destination: obj
		});
	}

	onCurrentLocationUpdate(obj){
		this.setState({
			origin: obj
		})
	}

	onTimeDistanceUpdate(timedist){
		this.setState({
			timedist
		})
		console.log(timedist);
	}
	
	render(){		
		return (
			<View style={styles.mainScreen}>	
				{this.state.timedist? 
					<OptionPicker onSetNearby={this.onSetNearby} onSetHubDropoff={this.onSetHubDropoff} navDest={this.state.destination} timeDist={this.state.timedist} />:
					<NavigationInput navOrigin={this.state.origin} onDestinationUpdate={this.onDestinationUpdate} />
				}
				<BottomOptions />		
				<Map dropOffOption={this.state.hubdropoff} onTimeDistanceUpdate={this.onTimeDistanceUpdate} onCurrentLocationUpdate={this.onCurrentLocationUpdate} navDestination={this.state.destination} />												
			</View>
		)
	}

}

export default HomeScreen;

const styles = {
	mainScreen:{
		flex:1,				
	},	
};