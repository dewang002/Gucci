import React from 'react'
import style from "./Page3.module.css"
import { Link } from 'react-router-dom'
function Page3() {
  return (
    <div className={style.page3}>
      <div className={style.imgbox} >
      <img src="./male1.avif" alt="" />
      </div>
      <div className={style.content}>
       <Link><button className={style.btn}>MEN</button></Link> 
        <div className={style.bottom}>
          <h1>Fall Winter 2024</h1>
          <button>EXPLORE MEN'S COLLECTION</button>
        </div>
      </div>
    </div>
  )
}

export default Page3
