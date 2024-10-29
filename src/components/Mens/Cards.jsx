import React from 'react'
import style from './Mens.module.css'
import Card from './Card'
function Cards({data}) {
  console.log(data)
  return (
    <div className={`${style.cards}`}>
    {data.map(elem =>(
      <Card img={elem.primaryImage.src} img2={elem.alternateGalleryImages} name={elem.title} price={elem.rawPrice}/>
    ))}  
    </div>
  )
}

export default Cards
