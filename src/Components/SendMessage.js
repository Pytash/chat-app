import React, { Component } from 'react'

export class SendMessage extends Component {
  render() {
    return (
      <div className='send-message'>
        <form>
            <input 
                placeholder='SendMessage'
                type='text'
            />    
        </form>
      </div>
    )
  }
}

export default SendMessage
