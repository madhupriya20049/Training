// import React,{useRef} from 'react'

// const Ref = () => {
//     // let demo=useRef()
//     // console.log(demo);
//     // console.log(demo.current);
//     // demo.current.style.backgroundColor='red'
//     let main=useRef()
//     let evnetHandler=()=>{
//       main.current.style.backgroundColor='crimson'
//     }
//     console.log(main);
//     // console.log(main.current);
//     // demo.current.style.backgroundColor="green"
//   return (
//     <div>
//         {/* <h1 ref={demo}>hello-world</h1> */}
//          <h2 ref={main}>hello-world</h2> 
//         <button onClick={evnetHandler}>click</button> 
//     </div>
//   )
// }

// export default Ref


import React,{useRef}from 'react'

const Ref = () => {
  let name=useRef('')
  let password=useRef('')
  let demo=(e)=>{
    e.preventDefault()
    console.log({name:name.current.value})
    console.log({password:password.current.value})
  }
  return (
    <div>
      <form action="">
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name'id='name'ref={name}></input>
        <br/>
        <label htmlFor='password'>password:</label>
        <input type='password' name='password'id='password'ref={password}></input>
        <br/>
        <button onClick={demo}>submit</button>
      </form>
    </div>
  )
}

export default Ref