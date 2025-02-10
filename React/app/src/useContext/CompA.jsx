import React from 'react'
import CompB from './CompB'
// import CompC from './CompC'

export let user=React.createContext()
export let id=React.createContext()

const CompA = () => {
  return (
    <div>
        <user.Provider value={"madhu"}>
        <id.Provider value={10}>
        <CompB/>
        </id.Provider>
        </user.Provider>
        
    </div>
  )
}

export default CompA