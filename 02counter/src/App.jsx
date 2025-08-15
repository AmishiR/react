import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=15
  const[counter,setcounter]=useState(15)
  const add_value = () =>{
    if(counter<20){
      setcounter(counter+1);
    }
  }

  const remove_value = () =>{
    if (counter>0){
      setcounter(counter-1)
    }
  
  }
  return (
    <>
      <h1 >COUNTER</h1>
      <h3>value: {counter}</h3>

      
      <button onClick={add_value}>Add Value</button>
      <button onClick={remove_value}>Reduce Value</button>
    </>
  )
}

export default App
