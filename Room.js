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
import IO from ‘socket.io-client/socket.io’;

export default class Room extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      numberOfUsers: 0
    }
    this.socket = IO(127.0)
  }

  async getUsers() {
    fetch('')
  }

  render () {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>
              Food
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
            <CardItem>
              <Body>
                <Text>
                  PLACEHOLDER
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Item>
            <Input placeholder="Enter text here." />
          </Item>
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
