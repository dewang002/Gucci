import React, { useEffect } from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import { PiBagSimple } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navlink = ({ title, className }) => {
  return (
    <Link to="/" className={className}>
      {title}
    </Link>
  );
};

function Nav() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      animation: gsap.fromTo(
        ".logo",
        {
          scale: 14, 
          y: "20vh", 
          yPercent: -50,
          color: "white", 
        },
        {
          scale: 1, 
          y: 0, 
          yPercent: 0,
          duration:5,
          color: "black",
          ease: "power1.out",
        }
      ),
      scrub: true,
      trigger: ".nav",
      start: "70vh",
      end: "150vh",
    });
    ScrollTrigger.create({
      animation:gsap.fromTo(
        ".nav",
        {
          backgroundColor:"transparent"
        },
        {
          backgroundColor:"white"
        }
      ),
      scrub: true,
      trigger: ".nav",  
      start: "70vh",  
      end: "150vh",
    })

    ScrollTrigger.create({
      animation: gsap.fromTo(
        ".icon,.contact", 
        {
        color:"white"
      },
        {
        color:"black"
      }
    ),
      scrub: true, 
      trigger: ".nav", 
      start: "70vh",
      end: "150vh", 
    });
  }, []);
  return (
    <>
      <div className={`${style.nav} nav`}>
        <div className={style.left}>
          <Navlink
            className={`${style.contact} contact`}
            title={"+ contact us"}
          />
        </div>
        <div className={style.right}>
          <Navlink className={`${style.icon} icon`} title={<PiBagSimple />} />
          <Navlink className={`${style.icon} icon`} title={<FaRegUser />} />
          <Navlink className={`${style.icon} icon`} title={<IoIosSearch />} />
          <Navlink className={`${style.icon} icon`} title={<IoIosMenu />} />
          <Navlink className={`${style.icon} icon`} title={"Menu"} />
        </div>
      </div>
      <div className={`${style.logo} logo`}>
        <h1>GUCCI</h1>
      </div>
    </>
  );
}

export default Nav;
