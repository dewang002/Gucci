import React, { useEffect, useRef, useState } from "react";
import Nav from "../nav/Nav";
import style from "./Product.module.css";
import useShoesData from "../../utils/hooks/useShoesData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoMdClose } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { BiRuler } from "react-icons/bi";
import chart from "../../../public/sizeChart.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../utils/Store/Slice/addToCartSlice";

const FullImg = ({ IMG, remove }) => {
  const handleClose = () => {
    remove(false);
  };
  useEffect(() => {
    let ZoomImg = document.querySelector(".fullimg");
    const zoomFeature = (e) => {
      ZoomImg.style.setProperty("--display", "block");
      //calculation to get the height position of mouse on that img 
      let y = (e.offsetY * 100) / ZoomImg.offsetHeight;
      ZoomImg.style.setProperty("--y", y + "%");
    };
    ZoomImg.addEventListener("mousemove", zoomFeature);
    return () => {
      ZoomImg.removeEventListener("mousemove", zoomFeature);
    };
  }, []);
  return (
    <>
      <div className={style.imgNav}>
        <i onClick={handleClose}>
          <IoMdClose />
        </i>
      </div>
      <div
        style={{ "--url": `url(${IMG})`, "--display": `none`, "--y": "0%" }}
        className={`${style.fullimg} fullimg`}
      >
        <img src={IMG} alt="product_img" />
      </div>
    </>
  );
};

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [cartdata, setCartdata] = useState([]);
  const [size, setSize] = useState(false);
  const [product, setProduct] = useState([]);
  const [productdata, setproductdata] = useState([]);
  const [currentImg, setCurrentImg] = useState(false);
  const shoes = useShoesData(); //data is here

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 30000, min: 1024 },
      items: 2,
      scroll: Infinity,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const shoesize = useRef(null);
  useEffect(() => {
    if (shoes) {
      const filterdata = shoes?.filter(
        (elem) => elem.productCode === id
      )[0].alternateGalleryImages;
      const data = filterdata.map((elem) => {
        return elem.datasrc;
      });
      let itemsdata = shoes?.filter(
        (elem) => elem.productCode === id
      )[0];
      setproductdata(itemsdata);
      setProduct(data);
      setCartdata(itemsdata);
    }
    document.addEventListener("click", (e) => {
      if (shoesize.current && !shoesize.current.contains(e.target)) {
        setSize(false);
      }
    });
  }, [shoes]);
  
  const handleClick = (val) => {
    setCurrentImg(val);
  };
  const handleClickSize = () => {
    setSize(!size);
  };
  const handleCartItem = () => {
    dispatch(addItem(cartdata));
  };
  return (
    <>
      {currentImg ? (
        <FullImg IMG={currentImg} remove={setCurrentImg} />
      ) : (
        <>
          <Nav />
          <div className={style.product}>
            {/* ------------------------------------------------------ */}
            <div className={style.overlapping}>
              <h2>{productdata.title}</h2>
              <h1>{productdata.price}</h1>
              <div className={style.shoeSize}>
                <i ref={shoesize} onClick={handleClickSize}>
                  <BiRuler /> View your size
                </i>

                {size && (
                  <div
                    className={style.Box}
                    style={{ "--dynamic": `"\u25C0"` }}
                  >
                    <img
                      style={{
                        width: "100%",
                        minHeight: "90%",
                        objectFit: "cover",
                        objectPosition: "50% -1vh",
                      }}
                      src={chart}
                      alt="size chart"
                    />
                  </div>
                )}
              </div>

              <button onClick={handleCartItem}>
                <span>Add to Cart</span>
                <CiShoppingCart />
              </button>
            </div>
            {/* -------------------------------------------------------*/}
            <Carousel infinite={true} responsive={responsive}>
              {product.map((elem, index) => {
                return (
                  <React.Fragment key={elem}>
                    <div className={style.card}>
                      <Link>
                        <img
                          className={style.shoesimg}
                          src={elem}
                          alt="shoes img"
                        />
                        <div
                          onClick={() => handleClick(elem)}
                          className={style.darkBG}
                        ></div>
                      </Link>
                    </div>
                  </React.Fragment>
                );
              })}
            </Carousel>
          </div>
        </>
      )}
    </>
  );
}

export default Product;
