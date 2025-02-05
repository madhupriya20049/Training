// import React, { Component } from 'react';
// import Child from './child';

// export default class Parent extends Component {
//   state = {
//     username: "Madhu",
//     age: {20},
//     clg: "Mallareddy University",
//     address: "Hyderabad, India",
//     contact: {1234567890},
//     attendence:{90%},
//     school:"St.Joseph's high school",
//     hobbies:"reading,playing"
//   };

//   render() {
//     return (
//       <Child 
//         name={this.state.username} 
//         age={this.state.age} 
//         clg={this.state.clg} 
//         address={this.state.address} 
//         contact={this.state.contact} 
//         attendence={this.state.attendence}
//         school={this.state.school}
//         hobbies={this.state.hobbies}

//       />
//     );
//   }
// }
import React from 'react'
import Child from './child'

const parent = () => {
  // let obj1={
  //   name:"madhu",
  //   id :101,
  //   designation:"Developer"

  // }
  let fun=()=>{
    window.alert("I am a function")
  }
  return (
    <div>
      {/* <Child name="madhu"/>
      {/* <Child age={20}/> */}
      {/* <Child arr={[10,30,9]}/>
      <Child id={101}/>
      <Child name="madhu"/> */ }
      {/* <Child obj={obj1}/> */}
      <Child fun1={fun}/>
    </div>
  )
}

export default parent
