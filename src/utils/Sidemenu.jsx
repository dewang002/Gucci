import React, { useEffect } from "react";
import style from "./sidemenu.module.css";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Sidemenu({ setIsopen, isopen }) {
  const handleclick = () => {
    setIsopen((prev) => !prev);
  };

  useEffect(() => {
    if (isopen) {
      // Disable scroll on the body
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed"; // Prevent jump-back effect
    } else {
      // Restore scroll when sidebar closes
      document.body.style.overflow = "";
      document.body.style.position = "";
    }
  }, [isopen]);

  return (
    <div className={`${style.sidemenu} ${isopen ? style.open : ""}`}>
      <div className={style.content}>
        <button
          onClick={() => handleclick()}
          style={{ position: "fixed", textDecoration: "none" }}
        >
          <IoClose />{" "}
        </button>
        <ul className="burger-menu">
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Gifts
            </Link>{" "}
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              New In
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Handbags
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Travel
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Women
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Men
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Children
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Jewelry & Watch
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Decor & Lifestyle
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Fragrances & Makeup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidemenu;
