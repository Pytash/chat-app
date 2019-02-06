import React, { Component } from 'react'

export class NewRoom extends Component {
  render() {
    return (
      <div className='new-room'>
        <form>
            <input 
                type='text'
                placeholder='NewRoom'
                required
            />
            <button id='create-room-btn' type='submit'>+</button>
        </form>
      </div>
    )
  }
}

export default NewRoom
