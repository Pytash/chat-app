import React, { Component } from 'react';

import RoomList from './Components/RoomList';
import MessageList from './Components/MessageList';
import SendMessageForm from './Components/SendMessageForm';
import NewRoomForm from './Components/NewRoomForm';
import Chatkit from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from './config';

// Chat Room Application
class App extends Component {

  state = {
    messages: []
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'cody',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: '19417498',
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        }
      })
    })
  }
  render() {
    return (
      <div className="app">
        <RoomList />
        <MessageList messages={this.state.messages}/>
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
