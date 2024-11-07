import React from 'react'
import Page from '../Page1/Page'
import style from "./Home.module.css"
import Page2 from '../Page2/Page2'
import Page3 from '../Page3/Page3'
import Page4 from '../Page4/Page4'
import Page5 from '../Page5/Page5'
import Footer from '../Footer/Footer'

function Home() {
  
  return (
    <div className={style.home}>
      
      <Page />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Footer />
    </div>
  )
}

export default Home
