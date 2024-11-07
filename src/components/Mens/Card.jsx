import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import style from "./Mens.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Card({ img, img2, name, price, productCode, id }) {
  const [heart, setheart] = useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      scroll: Infinity,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const handlefav = () => {
    setheart(!heart);
  };
  return (
    <div className={`${style.card}`}>
      <div className={`${style.card_data}`}>
        {/* ------------------------------------------- */}
        <div className={`${style.heart_box} `}>
          <div onClick={handlefav} className={`${style.heart}`}>
            {heart ? <FaHeart /> : <CiHeart />}
          </div>
        </div>
        {/* ------------------------------------------- */}
        <div className={`${style.item_imgs}`}>
          <img src={img} alt="" />
        {/*--------------------------------------------- */}
          <div className={`${style.show_img}`}>
            <div className={`${style.img_box}`}>
              <Carousel infinite={true} responsive={responsive}>
                {img2.map((elem) => (
                  <div key={productCode}>
                    {" "}
                    <Link
                      to={`/Mens-loafers-shoes/product/${id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                    <img src={elem.src} alt="" />
                </Link>
                  </div>
                ))}
              </Carousel>
            </div>
              <div className={`${style.show_img_data}`}>
                <h1>{name}</h1>
                <h2>{price}</h2>
               <h3 className={style.second}>Show This</h3> 
              </div>
              
            
          </div>
          {/* -------------------------------- */}
        </div>
        <div className={`${style.item_data}`}></div>
      </div>
    </div>
  );
}

export default Card;
