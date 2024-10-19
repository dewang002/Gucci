import React from 'react'
import style from "./sidemenu.module.css"
import { IoClose } from "react-icons/io5";
function Sidemenu({setIsopen}) {
  return (
    <div className={style.sidemenu}>
      <div className={style.content}>
        <button onClick={()=>setIsopen(prev=>!prev)}><IoClose /> </button>
      </div>
    </div>
  )
}

export default Sidemenu
