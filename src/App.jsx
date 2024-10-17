import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/nav/Nav'

function App() {
  return (
    <div className=''>
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
