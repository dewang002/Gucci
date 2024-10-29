import React from 'react'
import style from "./Page.module.css"
import { Link, useNavigate } from 'react-router-dom'
function Page() {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/Mens-loafers-shoes')
  }
  return (
    <div className={style.page1}>
     <Link to=''><img src="./modle1.avif" alt="" /> </Link> 
     <div className={style.explorebtn}>
     <h1>THE loafer since 1953</h1>
      <button onClick={handleClick}>explore men's collection</button>
     </div>
    </div>
  )
}

export default Page
