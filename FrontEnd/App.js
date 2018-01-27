
import HomeScreen from './screens/HomeScreen';
import {StackNavigator} from 'react-navigation';

const App = StackNavigator({
  Home: { screen: HomeScreen}
},
{
  headerMode: 'none'
})
export default App;
