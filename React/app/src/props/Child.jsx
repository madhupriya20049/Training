// import React, { Component } from 'react';

// export default class Child extends Component {
//   render() {
//     return (
//       <>
//         <h1>My name is {this.props.name}</h1>
//         <h2>My age is {this.props.age}</h2>
//         <h3>My college Name: {this.props.clg}</h3>
//         <h4>My address: {this.props.address}</h4>
//         <h5>My contact: {this.props.contact}</h5>
//         <h6>My attendence: {this.props.attendence}</h6>
//       </>
//     );
//   }
// }
import React from 'react'

const Child = (props) => {
  // console.log(props.obj);
  // let {name,id,designation}=props.obj
  // console.log(id);
  // console.log(name);
  // console.log(designation);
  return (
    <div>
      {/* <h1>My name is:{props.name}</h1>
      <h2>My id is: {props.id}</h2>
      <h3>My designation is:{props.designation}</h3> */}
      {/* <h1>{props.arr}</h1> */}
      {/* <h1>{name}</h1>
      <h2>{id}</h2>
      <h3>{designation}</h3> */}
      <button onClick={()=>props.fun1()}>click</button>
    </div>
  )
}

export default Child