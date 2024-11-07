import React, { forwardRef, useEffect, useState, useRef } from "react";
import style from "./Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  removeItem,
} from "../../utils/Store/Slice/addToCartSlice";
import { Link, useLocation } from "react-router-dom";
import Sidemenu from "../../utils/Sidemenu";
import { usestatus } from "../../utils/hooks/usestatus";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdClose } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { PiBagSimple } from "react-icons/pi";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
// --------------small component----------------------------
const Navlink = forwardRef(
  ({ title, className, onClick, items }, addcartref) => {
    return (
      <Link
        ref={addcartref}
        className={className}
        onClick={onClick}
        items={items}
      >
        {title}
      </Link>
    );
  }
);
// ----------------------------------------------------------
function Nav() {
  const addtocart = useSelector((state) => state.cart.item);
  const location = useLocation();
  const dispatch = useDispatch();
  const [listdata, setListdata] = useState([]); //this have that data
  const [cartView, setCartView] = useState(false);
  const [isopen, setIsopen] = useState(false);
  const status = usestatus();
  const cart = useRef();

  useGSAP(() => {
    gsap.from(".nav", {
      y: "-3rem",
      duration: 0.5,
    });
  });
  const lastScrollValue = useRef(400);
  useEffect(() => {
    if (location.pathname === "/") {
      gsap.registerPlugin(ScrollTrigger);

      gsap.matchMedia().add("(min-width:1080px)", () => {
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
      ScrollTrigger.create({
        animation: gsap.fromTo(
          ".icon,.contact",
          {
            color: "white",
          },
          {
            color: "black",
            y:"0rem",
          }
        ),
        scrub: true,
        trigger: ".nav",
        start: "70vh",
        end: "150vh",
      });
    })
      gsap.matchMedia().add("(max-width:600px)", () => {
        ScrollTrigger.create({
          animation: gsap.fromTo(
            ".logo h1",
            {
              scale: 2,
              y: "30rem",
              x: "3%",
              yPercent: -50,
              duration: 5,
              color: "white",
              ease: "power1.out",
            },
            {
              scale: 1,
              y: '0.2rem',
              x: "1rem",
              yPercent: 0,
              duration: 5,
              color: "black",
            }
          ),
          scrub: true,
          trigger: ".nav",
          start: "10vh",
          end: "100rem",
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
            y:"0.5rem",
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

    if (addtocart) {
      setListdata(addtocart);
    }
    const handleScroll = () => {
      const nav = document.querySelector(".nav");
      const logo = document.querySelector(".logo");

      if (nav && logo) {
        const scrollValue = window.scrollY;
        if (scrollValue > lastScrollValue.current) {
          nav.style.top = "-10rem";
          logo.style.top = "-10rem";
        } else {
          nav.style.top = "0";
          logo.style.top = "0";
        }
        lastScrollValue.current = scrollValue;
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", (e) => {
        if (!cart.current?.contains(e.target)) setCartView(false);
      });
      document.removeEventListener("scroll", handleScroll);
    };
  }, [addtocart]);

  const handleClose = () => {
    setCartView(!cartView);
  };
  const handleclick = () => {
    setIsopen(!isopen);
  };

  const handleDeleteItems = (val) => {
    dispatch(deleteItem(val));
  };
  const totalcost = listdata.reduce(
    (acc, item) => acc + Number(item.rawPrice) * item.quantity,
    0
  );
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
            items={listdata.length}
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
          {/* <Navlink
          className='status'
            style={{ color: status ? "green" : "red" }}
            title={status ? "online" : "offline"}
          /> */}  
        </div>
      </div>
      <div className={`${style.logo} logo`}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1>GUCCI</h1>
        </Link>
      </div>

      {/* ------------------------------add to cart---------------------------------*/}
      <div
        ref={cart}
        className={`${style.cart} ${cartView ? style.open : " "}`}>
        <div className={style.header}>
          ADDED TO SHOPPING BAG{" "}
          <span onClick={handleClose}>
            {" "}
            <IoMdClose />{" "}
          </span>
        </div>

        <div className={style.body}>
          {listdata?.map((elem) => (
            <>
              <div className={style.content}>
                <div
                className={style.productImg}
                >
                  <img src={elem.alternateImage.datasrc} alt="" />
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
                  <h2>$ {Number(elem.rawPrice) * elem.quantity}</h2>
                  {addtocart && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <h2>Quantity : </h2>
                      <span
                        style={{ fontSize: "1.5rem" }}
                        onClick={() => dispatch(addItem(elem))}
                      >
                        +
                      </span>
                      <span style={{ fontSize: "1.5rem" }}>
                        {elem.quantity}
                      </span>
                      <span
                        style={{ fontSize: "1.5rem" }}
                        onClick={() => dispatch(removeItem(elem.productCode))}
                      >
                        {" "}
                        -
                      </span>
                      <button
                        onClick={() => handleDeleteItems(elem.productCode)}
                      >
                        remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>

        <div className={style.footer}>
          <h3>Total Amount : ${totalcost}</h3>
          <button>CHECK OUT</button>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------      */}
      {<Sidemenu isopen={isopen} setIsopen={setIsopen} />}
    </>
  );
}

export default Nav;
