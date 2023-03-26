import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
