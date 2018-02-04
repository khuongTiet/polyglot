import React from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Card,
  CardItem,
  Body,
  Item,
  Input,
  Text } from 'native-base';
import Client from './clientChat.js'
export default class Room extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      roomUserName: '',
      numberOfUsers: 0
    }
  }

  componentWillMount () {
    this.getUserName();
  }

  async getUserName () {
    const { params } = this.props.navigation.state;
    const title = params ? params.title : null;
    fetch(`http://e99bfd18.ngrok.io/rooms/${title.toLowerCase()}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        'action': 'join'
      })
    }).then((response) => response.json())
      .then((data) => this.setState({ roomUserName: data.username }));
  }

  render () {
    const { params } = this.props.navigation.state;
    const title = params ? params.title : null;

    return (
      <Container style={styles.container}>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   You are posting in this room as {this.state.roomUserName}
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Client userName={this.state.roomUserName} category={title.toLowerCase()} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roomStyle: {
    flex: 1,
    justifyContent: 'space-between'
  }
});
