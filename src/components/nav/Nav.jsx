import React, { useEffect, useState } from "react";
import style from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";
import { PiBagSimple } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Sidemenu from "../../utils/Sidemenu";
import { usestatus } from "../../utils/usestatus";

gsap.registerPlugin(ScrollTrigger);
const Navlink = ({ title, className ,onClick }) => {
  return (
    <Link to="/" className={className} onClick={onClick}>
      {title}
    </Link>
  );
};

function Nav() {
  const location = useLocation()
  console.log(location)
  const [isopen, setIsopen] = useState(false);
  const status = usestatus()
  if(location.pathname==="/"){
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      ScrollTrigger.create({
        animation: gsap.fromTo(
          ".logo h1",
          {
            scale: 14,
            y: "40vh",
            yPercent: -50,
            duration:5,
            color: "white",
            ease: "power1.out",
          },
          {
            scale: 1,
            y: 0,
            yPercent: 0,
            duration: 5,
            color: "black",
          }
        ),
        scrub: true,
        trigger: ".nav",
        start: "70vh",
        end: "200vh",
      });
  
      gsap.matchMedia().add("(max-width:600px)", () => {
        ScrollTrigger.create({
          animation: gsap.fromTo(
            ".logo h1",
            {
              scale: 3,
              y: "20vh",
              x:"24vw",
              yPercent: -50,
              duration:5,
              color: "white",
              ease: "power1.out",
            },
            {
              scale: 1,
              y: 0,
              x:"-4vw",
              yPercent: 0,
              duration: 5,
              color: "black",
            }
          ),
          scrub: true,
          trigger: ".nav",
          start: "10vh",
          end: "200vh",
          // markers:true
        });
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
  }

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
          <Navlink  className={`${style.icon} icon`} title={<IoIosSearch />} />
          <Navlink onClick={handleclick} className={`${style.icon} icon`} title={<IoIosMenu />} />
          <Link
            to="/"
            onClick={handleclick}
            className={`${style.icon} icon`}
          >
            Menu
          </Link>
          <h4 style={{color:status?'green':'red'}}>{status?'online':'offline'}</h4>
        </div>
      </div>
      <div className={`${style.logo} logo`}>
        <Link to="/" style={{textDecoration:"none",color:'black'}}><h1>GUCCI</h1></Link>
      </div>
     {<Sidemenu isopen={isopen} setIsopen={setIsopen} />}
    </>
  );
}

export default Nav;
