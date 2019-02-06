import React, { Component } from 'react';
import './App.css';

import RoomList from './Components/RoomList';
import MessageList from './Components/MessageList';
import SendMessage from './Components/SendMessage';
import NewRoom from './Components/NewRoom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomList />
        <MessageList />
        <SendMessage />
        <NewRoom />
      </div>
    );
  }
}

export default App;
