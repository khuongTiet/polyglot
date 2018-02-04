import SocketIOClient from 'socket.io-client';
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
  Button,
  Spinner,
  Text } from 'native-base';

export default class Client extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          messages: [],
          userID: null,
          myName: props.userName,
          text: '',
          roomID: 0,
          category: props.category
      }
      this.receiveMessage = this.receiveMessage.bind(this);
      this.sendMessage = this.sendMessage.bind(this);
      this.socket = SocketIOClient('http://e99bfd18.ngrok.io', { transports: ['websocket'] });
      this.getMessages = this.getMessages.bind(this)
  }

  componentWillMount () {
    this.getMessages();
  }

  getMessages () {
    fetch(`http://e99bfd18.ngrok.io/rooms/${this.state.category}/`)
      .then((response) => response.json())
      .then((responseJSON) => this.setState({ messages: responseJSON.messages }));
  }


  sendMessage (message) {
    if (message.length === 0) {
      return;
    }
    const messageBody = {
      'text': message,
      'user': this.state.myName,
      'room': this.state.roomID,
      'category': this.state.category
    }
    this.socket.emit("json", messageBody);
    this.socket.on("json", this.receiveMessage);
    console.log(this.state.messages);
    this.setState({text: ''});
  }


  receiveMessage(msg){
      this.setState({messages : msg});
  }

  render (){
    return (
      <Card>
        <Card>
          {
            this.state.messages.length > 0 ? this.state.messages.map((message) =>
              <Card>
                <CardItem>
                  <Body>
                    <Text>
                      {message.body}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            ) : <Card />
          }
        </Card>
        <Card>
          <Grid>
            <Col size={80}>
              <Item>
                <Input
                    placeholder="Enter text here."
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
              </Item>
            </Col>
            <Col size={20}>
              <Button danger onPress={()=> {this.sendMessage(this.state.text);}}><Text>Enter</Text></Button>
            </Col>
          </Grid>
        </Card>
      </Card>
    );
  }
}
