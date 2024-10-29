import React from 'react'
import style from './Mens.module.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import useShoesData from '../../utils/useShoesData'
import Cards from './Cards';
function Mens_Shoes() {
    const shoes = useShoesData()
    if(!shoes)return 
    const data = shoes.products.items
  return (
    <div className={`${style.show_collection}`}>
      <div className={`${style.filter_header}`}>
        <div className={`${style.left}`}>
            <div><h3>Shoes for Men</h3></div>
            <div><h1>/</h1></div>
            <div><h3>Loafers For Men</h3></div>
        </div>
        <div className={`${style.right}`}>
            <div>CATEGORY <MdKeyboardArrowDown /></div>
            <div>LINE <MdKeyboardArrowDown /></div>
            <div>FILTERS <MdKeyboardArrowDown /></div>
            <div><span style={{fontSize:'1rem'}}>Sort by:</span>NEWEST <MdKeyboardArrowDown /></div>
        </div>
      </div>
      <Cards data={data} />
    </div>
  )
}

export default Mens_Shoes
