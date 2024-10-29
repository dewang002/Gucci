import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/nav/Nav";
import style from "./App.module.css";
import "./index.css";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    const point = document.querySelector(".point");
    window.addEventListener("mousemove", (e) => {
      let top = e.clientY;
      let left = e.clientX;
      point.style.top = `${top - 5}px`;
      point.style.left = `${left - 5}px`;
      point.animate(
        {
          top: `${top - 5}px`,
          left: `${left - 5}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    });
  }, []);
  return (
    <div className={style.main} style={{ overflow: "hidden" }}>
      <Nav />
      <div className="point"></div>
      <Outlet />
    </div>
  );
}

export default App;
