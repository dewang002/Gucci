import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/nav/Nav'
import style from './App.module.css'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className={style.main}>
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
