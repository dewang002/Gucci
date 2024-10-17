import React from 'react'
import style from "./Page.module.css"
import { Link } from 'react-router-dom'
function Page() {
  return (
    <div className={style.page1}>
     <Link to=''><img src="./modle1.avif" alt="" /> </Link> 
     <div className={style.explorebtn}>
     <h1>THE loafer since 1953</h1>
      <button>explore men's collection</button>
     </div>
    </div>
  )
}

export default Page
