import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Room from './Room.js';

const MainScreenNavigator = StackNavigator(
  {
    Front: { screen: FrontPage },
    Chat: { screen: Room }
  }
);

export default class App extends React.Component {
  state = { fontsAreLoaded: false };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({fontsAreLoaded: true});
  }

  render () {
    if (this.state.fontsAreLoaded)
      return <Room/>;
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
