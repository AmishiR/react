import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor] = useState("olive")

  return (
    <>
      <div className=" w-full h-screen"
      style={{backgroundColor :color}}>
       <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-1 py-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white p-1.5 rounded-2xl'>
          <button onClick={() => setcolor("red")} className=" outline-none px-4 rounded-2xl text-white "
          style={{backgroundColor:"red"}}>Red</button>
        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white p-1.5 rounded-2xl'>
          <button  onClick={() => setcolor("green")} className=" outline-none px-4 rounded-2xl text-white"
          style={{backgroundColor:"green"}}>Green</button>
        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white p-1.5 rounded-2xl'>
          <button onClick={() => setcolor("yellow")} className=" outline-none px-4 rounded-2xl text-white"
          style={{backgroundColor:"yellow"}}>Yellow</button>
        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white p-1.5 rounded-2xl'>
          <button onClick={() => setcolor("blue")} className=" outline-none px-4 rounded-2xl text-white"
          style={{backgroundColor:"blue"}}>Blue</button>
        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white p-1.5 rounded-2xl'>
          <button onClick={() => setcolor("black")} className=" outline-none px-4 rounded-2xl text-white"
          style={{backgroundColor:"Black"}}>Black</button>
        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white p-1.5 rounded-2xl'>
          <button onClick={() => setcolor("white")} className=" outline-none px-4 rounded-2xl text-black"
          style={{backgroundColor:"White"}}>White</button>
        </div>
       </div>
         </div>
    </>
  )
}

export default App
