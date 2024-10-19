import React, { useEffect, useState } from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import { PiBagSimple } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Sidemenu from "./Sidemenu";

gsap.registerPlugin(ScrollTrigger);

const Navlink = ({ title, className }) => {
  return (
    <Link to="/" className={className}>
      {title}
    </Link>
  );
};

function Nav() {
  const [isopen, setIsopen] = useState(false);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      animation: gsap.fromTo(
        ".logo h1",
        {
          scale: 14,
          y: "40vh",
          yPercent: -50,
          color: "white",
        },
        {
          scale: 1,
          y: 0,
          yPercent: 0,
          duration: 5,
          color: "black",
          ease: "power1.out",
        }
      ),
      scrub: true,
      trigger: ".nav",
      start: "70vh",
      end: "200vh",
    });

    gsap.matchMedia().add("(max-width:600px)", () => {
      const triggers = ScrollTrigger.create({
        animation: gsap.fromTo(
          ".logo h1",
          {
            scale: 3,
            y: "10vh",
            x: "28vw",
            color: "white",
          },
          {
            scale: 1,
            y: 0,
            x: 0,
            yPercent: 10,
            duration: 2,
            color: "black",
            ease: "power1.out",
          }
        ),
        scrub: true,
        trigger: ".nav",
        start: "50vh",
        end: "150vh",
      });
      return () => {
        triggers.kill();
      };
    });

    ScrollTrigger.create({
      animation: gsap.fromTo(
        ".nav",
        {
          backgroundColor: "transparent",
        },
        {
          backgroundColor: "white",
        }
      ),
      scrub: true,
      trigger: ".nav",
      start: "70vh",
      end: "150vh",
    });

    ScrollTrigger.create({
      animation: gsap.fromTo(
        ".icon,.contact",
        {
          color: "white",
        },
        {
          color: "black",
        }
      ),
      scrub: true,
      trigger: ".nav",
      start: "70vh",
      end: "150vh",
    });
  }, []);
  const handleclick = ()=>{
    setIsopen(!isopen)
  }
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
          <Link
            to="/"
            onClick={handleclick}
            className={`${style.icon} icon`}
          >
            Menu
          </Link>
        </div>
      </div>
      <div className={`${style.logo} logo`}>
        <h1>GUCCI</h1>
      </div>
     {isopen&& <Sidemenu setIsopen={setIsopen} />}
    </>
  );
}

export default Nav;
