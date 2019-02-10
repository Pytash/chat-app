import React, { Component } from 'react';

const DUMMY_DATA = [
  {
    senderId: 'Cody',
    text: 'Hey, how is it going?'
  },
  {
    senderId: 'Chloe',
    text: 'Great, how are you?'
  },
  {
    senderId: 'Cody',
    text: 'Good, good!'
  }
]

class MessageList extends Component {
  render() {
    return (
      <div className='message-list'>
        {DUMMY_DATA.map((message, index) => {
          return (
            <div  key={index} className='message'>
              <div className='message-username'>{message.senderId}</div>
              <div className='message-text'>{message.text}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MessageList
