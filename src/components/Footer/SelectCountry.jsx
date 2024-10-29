import React from 'react'
import style from './footer.module.css'
import { IoClose } from "react-icons/io5";
function SelectCountry({isopen,setopen}) {
  const handleclick = ()=>{
    setopen(prev=>!prev)
  }
  return (
    <div className={`${style.sidemenu} ${isopen ? style.open : ""}`}>
      <div className={style.content}>
        <button onClick={()=>handleclick()}><IoClose /> </button>
       <div className={`${style.names}`}>
        <h1>INDIA</h1> 
        <h1>INDIAdfdadf</h1> 
        <h1>INDIA</h1> 
        <h1>INDIA</h1> 
       </div>
      </div>
    </div>
  )
}

export default SelectCountry
