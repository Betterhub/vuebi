import { AppRegistry, StatusBar } from 'react-native';
import App from './App';

console.disableYellowBox = true;
StatusBar.setBarStyle('light-content', true);


AppRegistry.registerComponent('reactNative', () => App);
