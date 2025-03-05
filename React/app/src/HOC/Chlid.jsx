// import React from 'react'
import Hoc from './Hoc'
// const Chlid = ({newComp}) => {
//   return (
//     <div>
//       <h1>{newComp}</h1>
//       </div>
//   )
// }

// export default Hoc(Chlid)

// import React from 'react'

// const Chlid = ({arr1}) => {
//   return (
//     <div>
//       {
//         arr1.map((value,index)=>{
//             return (
//                 <li key={index}>{value}</li>
//             )
//         })
//       }
//     </div>
//   )
// }

// export default Hoc(Chlid)

import React from 'react'

const Chlid = ({arr1}) => {
  return (
    <div>
      <table border="2px solid">
        <thead>
        <tr>
            <th>name</th>
            <th>id</th>
            <th>role</th>
        </tr>
        </thead>
        <tbody>
            {
                arr1.map((x)=>{
                    return (
                        <tr>
                        <td>{x.name}</td>
                        <td>{x.id}</td>
                        <td>{x.role}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Hoc(Chlid)

