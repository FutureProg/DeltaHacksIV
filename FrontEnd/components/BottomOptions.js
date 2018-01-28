import React from 'react';
import {View,TouchableHighlight,Image} from 'react-native';
import {Button} from 'react-native-elements';

class BottomOptions extends React.Component{

	render(){
		return (
			<View style={{position: 'absolute',bottom: 5,right: 10,flexDirection:'row'}}>
				<Button raised icon={{name: 'refresh', color: 'black',type: 'font-awesome'}} title="" backgroundColor='white'/>
				<Button raised icon={{name: 'location-arrow', color: 'black',type: 'font-awesome'}} backgroundColor='white'/>	
				<Button raised icon={{name: 'user', color: 'black',type: 'font-awesome'}} backgroundColor='white'/>				
			</View>
		)
	}

				//<Button title="r" color="white" accessibilityLabel="refresh" style={styles.button} onPress={()=>{}}/>
}

const styles = {
	button:{
		elevation: 3,		
	}
}

export default BottomOptions;