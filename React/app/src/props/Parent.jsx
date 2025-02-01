import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state={
        username: "Madhu"
    }
  render() {
    return (
     <child name={this.state.username}/>
    )
  }
}

