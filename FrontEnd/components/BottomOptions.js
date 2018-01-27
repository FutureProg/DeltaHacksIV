import React from 'react';
import {View,Button} from 'react-native';

class BottomOptions extends React.Component{

	render(){
		return (
			<View style={{position: 'absolute',bottom: 5,right: 10}}>
				<Button title="r" color="white" accessibilityLabel="refresh" style={styles.button} onPress={()=>{}}/>
			</View>
		)
	}

}

const styles = {
	button:{
		elevation: 3,		
	}
}

export default BottomOptions;