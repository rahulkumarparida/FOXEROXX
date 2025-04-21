import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Login from './Components/Login'

function App() {


  return (
   <>
      <div>
      <Nav />
      </div>
      <Login />
   </>
  )
}

export default App
