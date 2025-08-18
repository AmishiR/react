import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LavaLamp } from './components/ui/fluid-blob'
import Example from './components/ui/FloatingPhone'

function App(props) {
  const [count, setCount] = useState(0)
  let myObj={
    username:'hitesh',
    age:"21"
  }

  return (
    <>
    <div className="fixed inset-0 w-screen h-screen">
      <LavaLamp channel="chaiaurcode" myarr={name:"chaiaurcode"}/>
    </div>
  
  <div className="relative z-10 w-full h-screen flex items-center justify-center">
    <Example /> 
  </div>
    </>
  )
}

export default App
