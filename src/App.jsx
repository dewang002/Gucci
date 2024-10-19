import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/nav/Nav'
import style from './App.module.css'
function App() {
  return (
    <div className={style.main}>
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
