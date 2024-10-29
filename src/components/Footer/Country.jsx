import React, { useState } from "react";
import style from "./footer.module.css";
import SelectCountry from "./SelectCountry";


function Country() {
  const [isopen,setopen]=useState(false)
 const handleclick = ()=>{
  setopen(!isopen)
 }
  return (
    <>
      <div className={`${style.country}`}>
        <div className={`${style.countryName}`}>
          <div onClick={handleclick} style={{color:"white"}}>
           <h2>India</h2> 
          <div className={`${style.line}`}></div>
          </div>
        </div>
      </div>
        <SelectCountry isopen={isopen} setopen={setopen} />
    </>
  );
}

export default Country;
