import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fruteria from './Fruteria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <h1>Fruteria</h1>
      <Fruteria/>
    </>
  )
}

export default App
