// let Hoc=(OriginalComponent)=>{
//     let newComponent=()=>{
//         return <OriginalComponent name="madhu"/>
//     }
//     return newComponent;

// import { useState } from "react";

// }
// export default Hoc;

// let Hoc=(OriginalComponent)=>{
//     let newComp=()=>{
//         let [state,setState]=useState(0);
//         let demo=()=>{
//             setState(state+1);
//         }
//         return <OriginalComponent state={state} demo={demo}/>
//     }
//     return newComp;
// }
// export default Hoc;

// let Hoc=(OriginalComponent)=>{
//    let newComp=()=>{
//     let arr=[10,20,30,40];
//     return <OriginalComponent arr1={arr}/>
//    }
//    return newComp;
// }
// export default Hoc;

let Hoc=(OriginalComponent)=>{
       let newComp=()=>{
        let arr=[
            {
                name:"madhu",
                id:1,
                role:"developer"
            },
            {
                name:"lahari",
                id:2,
                role:"tester"
            }
        ]
        return <OriginalComponent arr1={arr}/>
       }
       return newComp;
    }
    export default Hoc;