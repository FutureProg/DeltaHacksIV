import React from 'react';
import {View, TextInput,Platform,Text} from 'react-native';
import Geocoder from 'react-native-geocoding';

class NavigationInput extends React.Component{

	constructor(props){
		super(props);
		this.submitDestination = this.submitDestination.bind(this);
	}
	componentWillMount(){
		this.setState({
			destinationText: ""
		});
	}

	submitDestination(){
		console.log("Submit: " + this.state.destinationText);
		Geocoder.getFromLocation(this.state.destinationText).then(
			json => {
				console.log(json);
			  var location = json.results[0].geometry.location;
			  const obj ={
				  latlng:{
					latitude: json.results[0].geometry.location.lat,
					longitude: json.results[0].geometry.location.lng
				  },
				  title: this.state.destinationText
			  }			  			  
			  this.props.onDestinationUpdate(obj);
			},
			error => {
			  alert(error);
			}
		  );
	}

	render(){
		return (
		<View style={{paddingHorizontal: 20, paddingBottom:5, position: 'absolute', left: 0, top: 40, right: 0,zIndex:1}}>					
			<TextInput 
				style={styles.destinationInput}
				returnKeyType="go"
				underlineColorAndroid='transparent'
				placeholder="Enter Destination"
				onChangeText={(txt)=>{this.setState({destinationText:txt})}}
				onSubmitEditing={this.submitDestination}
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
		marginTop: 10,							
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