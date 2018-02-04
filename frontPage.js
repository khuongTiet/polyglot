import React, { Component } from 'react';
import { Button, Container } from 'native-base';
import { StyleSheet, Text } from 'react-native';

export default class FrontPage extends Component {
  routeToRoom (room) {
    this.props.navigation.navigate('Chat', {
      title: room
    });
  }
  render() {
    return (
        <Container >
          <Text style={styles.title} >Welcome to PolyGlot! Please select one of the categories below to begin!</Text>
          <Button block warning
            onPress={() => { this.routeToRoom('Food'); }} >
              <Text>Food</Text>
          </Button>
            <Button style = {styles.button} block info
            onPress={() => { this.routeToRoom('Sports'); }} >
              <Text>Sports</Text>
          </Button>
          <Button block danger
            onPress={() => { this.routeToRoom('Movies'); }} >
              <Text>Movies</Text>
          </Button>
          <Button block success
            onPress={() => { this.routeToRoom('Hiking'); }} >
              <Text>Hiking</Text>
          </Button>
        </Container>
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
