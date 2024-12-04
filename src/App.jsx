import { useState } from 'react'
import Nav from "./component/Nav/Nav"
// import Home from "./component/Home/Home"

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
