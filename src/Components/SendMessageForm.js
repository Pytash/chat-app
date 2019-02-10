import React, { Component } from 'react'

class SendMessageForm extends Component {
  render() {
    return (
      <div className='send-message-form'>
        <form>
            <input 
                placeholder='SendMessageForm'
                type='text'
            />    
        </form>
      </div>
    )
  }
}

export default SendMessageForm
