import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cbc from './component/Cbc.jsx'
import Fbc from './component/Fbc.jsx'
import Details from './component/Details.jsx'
import Demo from './component/Demo.jsx'
import Parent from './props/parent.jsx'
import Parentc from './props/Parentc.jsx'
import State from './state/State.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Demo/>
   <Details/> */}
   {/* <Parentc/> */}
   <State/>
  </StrictMode>,
)
