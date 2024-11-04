import React, { forwardRef, useEffect, useState, useRef } from "react";
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
import { IoMdClose } from "react-icons/io";
gsap.registerPlugin(ScrollTrigger);
// --------------small component----------------------------
const Navlink = forwardRef(({ title, className, onClick }, addcartref) => {
  return (
    <Link ref={addcartref} className={className} onClick={onClick}>
      {title}
    </Link>
  );
});
// ----------------------------------------------------------
function Nav({ data }) {
  const location = useLocation();
  const [listdata, setListdata] = useState([]);
  const [cartView, setCartView] = useState(false);
  const [isopen, setIsopen] = useState(false);
  const status = usestatus();
  const cart = useRef();
  useEffect(() => {
    if (location.pathname === "/") {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        animation: gsap.fromTo(
          ".logo h1",
          {
            scale: 14,
            y: "40vh",
            yPercent: -50,
            duration: 5,
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
              x: "24vw",
              yPercent: -50,
              duration: 5,
              color: "white",
              ease: "power1.out",
            },
            {
              scale: 1,
              y: 0,
              x: "-4vw",
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
    }
    document.addEventListener("mousedown", (e) => {
    if (!cart.current?.contains(e.target)) setCartView(false);
    });
    if (data) {
      setListdata([
        {
          title: data?.title,
          img: data?.alternateGalleryImages[0]?.datasrc,
          price: data?.price,
        },
      ]);
    }
    return ()=>{
      document.removeEventListener("mousedown", (e) => {
        if (!cart.current?.contains(e.target)) setCartView(false);
        });
    }
  }, [data]);

  const handleClose = () => {
    setCartView(!cartView);
  };
  const handleclick = () => {
    setIsopen(!isopen);
  };
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
          <Navlink
            onClick={handleClose}
            className={`cart ${style.icon} icon`}
            title={<PiBagSimple />}
          />
          <Navlink
            className={`profile ${style.icon} icon`}
            title={<FaRegUser />}
          />
          <Navlink
            className={`search ${style.icon} icon`}
            title={<IoIosSearch />}
          />
          <Navlink
            onClick={handleclick}
            className={`${style.icon} icon`}
            title={<IoIosMenu />}
          />
          <Navlink
            onClick={handleclick}
            className={`${style.icon} icon`}
            title={"Menu"}
          />
          <Navlink
            style={{ color: status ? "green" : "red", textDecoration: "none" }}
            title={status ? "online" : "offline"}
          />
        </div>
      </div>
      <div className={`${style.logo} logo`}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1>GUCCI</h1>
        </Link>
      </div>

      {/* ------------------------------add to cart---------------------------------      */}
      <div
        ref={cart}
        className={`${style.cart} ${cartView ? style.open : " "} `}
      >
        <div className={style.header}>
          ADDED TO SHOPPING BAG{" "}
          <span onClick={handleClose}>
            {" "}
            <IoMdClose />{" "}
          </span>
        </div>

        <div className={style.body}>
          {listdata?.map((elem) => (
            <div className={style.content}>
              <div
                style={{
                  width: "10rem",
                  height: "100%",
                }}
              >
                <img src={elem.img} alt="" />
              </div>
              <div
                style={{
                  height: "100%",
                  width: "30rem",
                  paddingTop: "2rem",
                  lineHeight: "2.5rem",
                }}
              >
                <h1>{elem.title}</h1>
                <h2>{elem.price}</h2>
                {data && (
                  <div style={{ display: "flex" }}>
                    <h2>Quantity : </h2>
                    <span style={{ fontSize: "1.5rem" }}>0</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={style.footer}>
          <button>CHECK OUT</button>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------      */}
      {<Sidemenu isopen={isopen} setIsopen={setIsopen} />}
    </>
  );
}

export default Nav;
