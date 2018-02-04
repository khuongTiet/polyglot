import React, { Component } from 'react';
import { Button, Container, Card, Header, Content, CardItem,Left, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
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
          <Grid style = {styles.grid}>
          <Col style = {{flex:1, alignitems: "flex-end"}}  >
            <Button style = {styles.button} large warning
            onPress={() => { this.routeToRoom('Food'); }} >
              <Text style= {{color:'white', fontSize: 25,}}>Food</Text>
              </Button>
            <Button  style = {styles.button} large info
            onPress={() => { this.routeToRoom('Sports'); }} >
              <Text style={{color:'white', fontSize: 25,}}>Sports</Text>
              </Button>
              </Col>
              <Col style={{flex:1, alignitems: "flex-end", width: 100,}}>
          <Button style= {styles.button} large danger
            onPress={() => { this.routeToRoom('Movies'); }} >
              <Text style={{color:'white', fontSize:25}}>Movies</Text>
              </Button>
            <Button style= {styles.button} large success
            onPress={() => { this.routeToRoom('Hiking'); }} >
              <Text style={{color:'white', fontSize: 25,}}>Hiking</Text>
              </Button>
            </Col>
          </Grid>
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

    },
    grid: {
        alignItems: "center",
    },
    row: {
        margin: 0,
        padding: 0,
        color: "red",
    },
    button: {
        width: 200,
        justifyContent: "center",
        color: "#FFFFFF",
        flex: 1,
        margin: 0,

    }
});
