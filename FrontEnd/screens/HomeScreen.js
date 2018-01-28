import React from 'react';
import {View, TextInput,Platform,Text} from 'react-native';

import NavigationInput from '../components/NavigationInput';
import BottomOptions from '../components/BottomOptions';
import Map from '../components/Map';

class HomeScreen extends React.Component{	

	constructor(props){
		super(props);
		this.onDestinationUpdate = this.onDestinationUpdate.bind(this);
	}

	componentWillMount(){
		this.setState({
			destination: null
		})
	}

	onDestinationUpdate(obj){
		this.setState({
			destination: obj
		});
	}

	render(){		
		return (
			<View style={styles.mainScreen}>	
				<NavigationInput onDestinationUpdate={this.onDestinationUpdate} />				
				<BottomOptions />		
				<Map navDestination={this.state.destination} />												
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