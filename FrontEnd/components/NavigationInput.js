import React from 'react';
import {View, TextInput,Platform,Text} from 'react-native';

class NavigationInput extends React.Component{

	render(){
		return (
		<View style={{height: 'auto',paddingHorizontal: 20,}}>					
			<TextInput 
				style={styles.destinationInput}
				underlineColorAndroid='transparent'
				placeholder="Enter Destination"
				/>
			<View 
				style={styles.changeStartingPoint}>
				<Text style={{textAlign:'center',justifyContent:'center'}}>Change Starting Point</Text>
			</View>					
		</View>	
		)
	}

}

const styles = {
	destinationInput:{					
		marginTop: -20,		
		backgroundColor: "white",		
		paddingHorizontal: 20,
		borderRadius: 10,
		elevation: 3,		
	},
	changeStartingPoint:{
		marginLeft: 20,
		marginRight: 20,
		paddingTop: 5,
		height: 30,					
		backgroundColor:"white",
		borderBottomLeftRadius: 10,
		borderBottomRightRadius:10,
		elevation:2
	}
}

export default NavigationInput;