import React from 'react'
import Page from '../Page1/Page'
import style from "./Home.module.css"
import Page2 from '../Page2/Page2'
function Home() {
  return (
    <div className={style.home}>
      <Page />
      <Page2 />
    </div>
  )
}

export default Home
