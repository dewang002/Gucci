import React from "react";
import style from "./Page2.module.css";
import { Link } from "react-router-dom";
function Page2() {
  return (
    <div className={`${style.page2}`}>
      <div className={style.container}>
        <div className={style.left}>
          <Link>
            <img src="./women1.avif" alt="" />
          </Link>
          <div className={style.content}>
          <button className={style.btn1}>WOMEN</button>
            <div className={style.bottom}>
              <h1>Gucci Blondie Lensed by Nan Goldin</h1>
              <button>DISCOVER MORE</button>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <Link>
            <img src="./women2.avif" alt="" />
          </Link>
          <div className={style.content}>
        <button className={style.btn1}>WOMEN</button>
          <div className={style.bottom}>
            <h1>Fall Winter 2024</h1>
            <button>EXPLORE WOMEN'S COLLECTION</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
