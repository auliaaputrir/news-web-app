import { useState } from 'react'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Pages from "./Pages/Index"
import Programming from './Pages/ProgrammingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Programming />
    </>
  )
}

export default App
