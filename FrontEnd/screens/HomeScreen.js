import React from 'react';
import {View, TextInput,Platform,Text} from 'react-native';

import NavigationInput from '../components/NavigationInput';
import BottomOptions from '../components/BottomOptions';

class HomeScreen extends React.Component{	
	render(){		
		return (
			<View style={styles.mainScreen}>	
				<NavigationInput />				
				<BottomOptions />														
			</View>
		)
	}

}

export default HomeScreen;

const styles = {
	mainScreen:{
		flex:1,
		paddingTop:40,		
	},	
};