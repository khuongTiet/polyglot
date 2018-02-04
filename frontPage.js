import React, { Component } from 'react';
import {View, Button, StyleSheet, Text } from 'react-native';

export default class FrontPage extends Component {
  routeToRoom (room) {
    this.props.navigation.navigate('Chat', {
      title: room
    });
  }
  render() {
    return (
        <View>
          <Text style={styles.title} >Welcome to PolyGlot! Please select one of the categories below to begin!</Text>
          <Button
            onPress={() => { this.routeToRoom('Food'); }} title='Food' color='purple'/>
          <Button
            onPress={() => { this.routeToRoom('Sports'); }} title='Sports' color='blue'/>
          <Button
            onPress={() => { this.routeToRoom('Movies'); }} title='Movies' color='red'/>
          <Button
            onPress={() => { this.routeToRoom('Hiking'); } } title='Hiking' color='green'/>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    title: {
        textAlign:"center",
        color: "black",
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 30,

    }
});
