import React from 'react'
import List from './List'

const Comp3 = () => {
    let demo=[{
        name:"madhu",
        id:1
    },
    {
        name:"priya",
        id:2
    },
    {
        name:"lahari",
        id:3
    }
]
  return (
    <div>
        <List main={demo}></List>

    </div>
  )
}

export default Comp3