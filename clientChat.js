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
  Text } from 'native-base';

export default class Client extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          messages: [
              {
                  "body": "Hello"
              },
              {
                  "body": "Hi"
              },
              {
                  "body": "new message"
              }
          ],
          userID: null,
          myName: props.userName,
          text: ""
      }
      this.receiveMessage = this.receiveMessage.bind(this);
      this.sendMessage = this.sendMessage.bind(this);
      this.socket = SocketIOClient("http://localhost:8000");
      this.socket.on("Connected to room...", JSON);
  }

  sendMessage (message) {
      this.socket.emit("message", message);
      this.setState({text: ''});
  }

  receiveMessage(msg){
      this.setState({messages : this.state.messages.append(msg)});
  }



  render (){
    const roomMessages = this.state.messages.map((message) =>
      <Card>
        <CardItem>
          <Body>
            <Text>
              {message.body}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );

    return (
      <Card>
        <Card>
          {roomMessages}
        </Card>
        <Item>
          <Input
              placeholder="Enter text here."
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
          />

        </Item>
  
         <Button danger onPress={()=> {this.sendMessage(this.state.text);}}><Text>Enter</Text></Button>

      </Card>
    );
  }
}