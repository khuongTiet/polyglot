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

  componentWillMount() {
    this.getUserName();
  }

  async getUserName () {
    const { params } = this.props.navigation.state;
    const title = params ? params.title : null;
    fetch(`http://6c5b3b93.ngrok.io/rooms/${title.toLowerCase()}/0`, {
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
        <Header>
          <Body>
            <Title>
              {this.state.roomUserName}
            </Title>
          </Body>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   There are currently {this.state.numberOfUsers} users in this room.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <Client userName = {this.state.roomUserName}/>
          </Card>
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
