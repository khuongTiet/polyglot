import React from 'react';
import Expo from 'expo';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Room from './Room.js';
import FrontPage from './frontPage.js';

console.disableYellowBox = true;

const MainScreenNavigator = StackNavigator(
  {
    Front: {
      screen: FrontPage,
      navigationOptions: ({ navigation }) => ({
        title: 'PolyGlot'
      })
     },
    Chat: {
      screen: Room,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.title}`
      })
     }
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsAreLoaded: false
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({fontsAreLoaded: true});
  }

  render () {
    if (this.state.fontsAreLoaded) {
      return (
        <MainScreenNavigator style={{ width: Dimensions.get('window').width }} />
      )
    }
    else
      return <Expo.AppLoading />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
