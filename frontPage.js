import React, { Component } from 'react';
import {View, Button, StyleSheet, Text } from 'react-native';

export default class FrontPage extends Component {
  render() {
    return (
        <View>
      <Text style ={styles.title} >Welcome to PolyGlot! Please select one of the categories below to begin!</Text>
        <Button onPress={() =>{console.log("Pressed Food!")}} title='Food'  color ='purple'/>
        <Button onPress={() =>{console.log("Pressed Sports!")}} title='Sports' color='blue'/>
        <Button onPress={() =>{console.log("Pressed Movies!")}} title ='Movies' color = 'red'/>
        <Button onPress={() =>{console.log("Pressed Hiking!")}} title ='Hiking' color ='green'/>
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