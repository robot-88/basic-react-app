import React, { Component } from 'react'

export class Classclick extends Component {
    clickHandler(){
        console.log('Click Here Clicked');
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Here </button>
      </div>
    )
  }
}

export default Classclick
