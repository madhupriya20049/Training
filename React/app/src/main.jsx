import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Cbc from './component/Cbc.jsx'
import Fbc from './component/Fbc.jsx'
import Details from './component/Details.jsx'
import Demo from './component/Demo.jsx'
import Parent from './props/parent.jsx'
import Parentc from './props/Parentc.jsx'
import State from './state/State.jsx'
import Inline from './styles/Inline.jsx'
import External from './styles/External.jsx'
import Comp3 from './list-keys/Comp3.jsx'
import List from './list-keys/List.jsx'
import CompA from './useContext/CompA.jsx'
import UseEffect from './useEffect/UseEffect.jsx'
// import Ref from './useRef/Ref.jsx'
// import '../src/styles/globally.css'
// import Comp1 from './styles/Comp1.jsx'
// import Comp2 from './styles/Comp2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Demo/>
   <Details/> */}
   {/* <Parentc/> */}
   {/* <Inline/> */}
   {/* <Comp1/>
   <Comp2/> */}
   {/* <External/> */}
   {/* <List/> */}
    {/* <CompA/><object data="" type=""></object> */}
    <UseEffect/>
  </StrictMode>,
)
