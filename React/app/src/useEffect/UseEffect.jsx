//example for no dependency
// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let [state,setState]=useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//                setState(()=> state+1)
//         },2000)
//     })
//   return (
//     <div>
//         <h1>{state}</h1>
//     </div>
//   )
// }

// export default UseEffect

//empty dependency

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let [state,setState]=useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//                setState(()=> state+1)
//         },2000)
//     },[])
//   return (
//     <div>
//         <h1>{state}</h1>
//     </div>
//   )
// }

// export default UseEffect


//dependency with value

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let [state,setState]=useState(0)
//     let [increment,setIncrement]=useState(0)
//     useEffect(()=>{
//         setIncrement(()=>state*2)
//     },[state])
//   return (
//     <div>
//       {state} <br/>
//       <button onClick={()=> setState((e)=> e+1)}>click</button>
//       <br/>
//       {increment}
//     </div>
//   )
// }

// export default UseEffect

//fetch api using useEffect hook
import React, { useEffect, useState } from 'react'
import './UseEffect.css'

const UseEffect = () => {
  let [state,setState]=useState([])
  console.log(state);
  useEffect(()=>{
     window.fetch('https://fakestoreapi.com/products')
     .then((data)=>data.json())
     .then((res)=>setState(res))
  },[])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>price</th>
            <th>image</th>
          </tr>
        </thead>
        {
          state.map((res)=>{
            console.log(res);
            return(
              <>
              <tr>
                <td>{res.id}</td>
                <td>{res.price}</td>
                <td><img src={res.image} alt=""/></td>
                </tr>
              </>
            )
          })
        }
      </table>
      
    </div>
  )
}

export default UseEffect

