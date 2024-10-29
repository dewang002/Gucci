import React from "react";
import style from "./Page5.module.css";
import { Link } from "react-router-dom";
function Card({video,h2,para,link}) {
  return (
    <div className={style.card}>
      <div className={style.bgVideo}>
        <video src={video} autoPlay muted loop></video>
      </div>
      <div className={style.content}>
        <h3>{h2}</h3>
        <p>{para}</p>
        <Link ><h4>{link}</h4></Link>
      </div>
    </div>
  );
}

export default Card;
