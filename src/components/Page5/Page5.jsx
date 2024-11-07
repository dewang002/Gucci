import React from 'react'
import style from "./Page5.module.css"
import Card from './Card'
import { carddata } from '../../utils/data'
function Page5() {
  return (
    <div className={style.page5}>
      <h1>GUCCI SERVICES</h1>
      <div className={style.container}>
        {carddata.map((elem)=><Card key={elem.id}  video={elem.video} title={elem.h2} para={elem.p} link={elem.link} />) }

      </div>
    </div>
  )
}

export default Page5
