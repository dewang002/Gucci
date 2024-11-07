import React, { useEffect, useState } from "react";
import style from "./Mens.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import useShoesData from "../../utils/hooks/useShoesData";
import Cards from "./Cards";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className={style.dropdownWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={style.dropdownTitle}>
        {title} <MdKeyboardArrowDown />
      </div>

      {isOpen && <div className={`${style.dropdownContent}`}>{children}</div>}
    </div>
  );
}

function Mens_Shoes() {
  const [low, setlow] = useState(false);
  const [high, sethigh] = useState(false);
  const [data,setdata] = useState([])
  //👇this is the data 
  const shoes = useShoesData();

  useEffect(() => {
    if (shoes) {
      setdata(shoes);
    }
  }, [shoes]);

  const handleclick = (val) => {
    setlow(false)
    sethigh(false);
    if (val === "low") {
      setlow(true);
    } else if (val === "high") {
      sethigh(true);
    }else if (val ==="loafers"){
      setdata(shoes)
    }
  };
  
  return (
    <div className={`${style.show_collection}`}>
      <div className={`${style.filter_header}`}>
        <div className={`${style.left}`}>
          <div>
            <h3>Shoes for Men</h3>
          </div>
          <div>
            <h3>/</h3>
          </div>
          <div>
            <h3>Loafers For Men</h3>
          </div>
        </div>
        <div className={`${style.right}`}>
          <div className={style.filtersContainer}>
            <Dropdown title="CATEGORY">
              <div onClick={()=>handleclick("loafers")} className={style.dropdownItem}>Loafers for Men</div>
              <div className={style.dropdownItem}>Mules for Men</div>
            </Dropdown>

            <Dropdown title="Sort by: NEWEST">
              <div
                onClick={() => handleclick("high")}
                className={style.dropdownItem}
              >
                High to Low
              </div>
              <div
                onClick={() => handleclick("low")}
                className={style.dropdownItem}
              >
                Low to High
              </div>
            </Dropdown>
          </div>
        </div>
      </div>

      <Cards data={data} lowprice={low} highprice={high} />
    </div>
  );
}

export default Mens_Shoes;
