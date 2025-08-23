import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [CharAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("passwordGenerator")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (NumberAllowed) str += "0123456789"
    if (CharAllowed) str += "@#$%^&*!|"

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)
  }, [length, NumberAllowed, CharAllowed])

  return (
    <>
      <div className='w-full max-w-m mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none px-3 py-1 w-full'
            placeholder='password'
            readOnly
          />
        </div>

        <button 
          onClick={passwordGenerator} 
          className='bg-orange-500 text-white px-4 py-2 rounded-lg'
        >
          Generate
        </button>
      </div>
    </>
  )
}

export default App
