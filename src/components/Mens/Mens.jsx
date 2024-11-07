import React from "react";
import Nav from "../nav/Nav";
import styles from "./Mens.module.css";
import Mens_Shoes from "./Mens_Shoes";
function Mens() {
  return (
    <>
      <Nav />
      <div id={`${styles.mens_shoes}`}>
        <div
          className={`${styles.top_header}`}
          style={{ textTransform: "capitalize" }}
        >
          <p>introducing the new gucci blondie</p>
        </div>
        <div className={`${styles.main_img}`}>
          <img src="./mens-show-model(1).jpg" alt="" />
          <div className={`${styles.darken}`}>
            <div className="content" style={{ height: "9rem" }}>
              <h1>Loafers for Men</h1>
              <p>
                Defining an enduring design with House codes, the Gucci Horsebit
                1953 men's loafers and signature styles continue to inspire
                generation after generation.
              </p>
            </div>
          </div>
        </div>
        {/* show data will be below */}
        <Mens_Shoes />
      </div>
    </>
  );
}

export default Mens;
