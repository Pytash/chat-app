import React, { Component } from 'react';

import Message from './Message';

// const DUMMY_DATA = [
//   {
//     senderId: 'cody',
//     text: 'Hey, how is it going?'
//   },
//   {
//     senderId: 'chloe',
//     text: 'Great, how are you?'
//   },
//   {
//     senderId: 'cody',
//     text: 'Good, good!'
//   }
// ]

class MessageList extends Component {
  render() {
    return (
      <div className='message-list'>
        {this.props.messages.map((message, index) => {
          return (
            <Message key={index} username={message.senderId} text={message.text} />
            
          )
        })}
      </div>
    )
  }
}

export default MessageList
