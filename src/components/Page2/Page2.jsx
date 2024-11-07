import React from "react";
import style from "./Page2.module.css";
import { Link, useNavigate } from "react-router-dom";
function Page2() {
  const navigate = useNavigate()
  const handleclick = (val)=>{
    navigate(`/${val}`)
  }
  return (
    <div className={`${style.page2}`}>
      <div className={style.container}>
        <div className={style.left}>
          <Link to="/golden">
            <img src="./women1.avif" alt="" />
          </Link>
          <div className={style.content}>
          <button className={style.btn1}>WOMEN</button>
            <div className={style.bottom}>
              <h1>Gucci Blondie Lensed by Nan Goldin</h1>
              <button onClick={()=>handleclick("golden")}>DISCOVER MORE</button>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <Link to="/winter">
            <img src="./women2.avif" alt="" />
          </Link>
          <div className={style.content}>
        <button className={style.btn1}>WOMEN</button>
          <div className={style.bottom}>
            <h1>Fall Winter 2024</h1>
            <button onClick={()=>handleclick("winter")}>EXPLORE WOMEN'S COLLECTION</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
