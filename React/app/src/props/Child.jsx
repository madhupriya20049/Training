import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <>
      <h1>My name is {this.props.name}</h1>
      </>
    )
  }
}
