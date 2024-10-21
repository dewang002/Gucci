import React from 'react'
import style from "./Page4.module.css"
import { Link } from 'react-router-dom'
function Page4() {
  return (
    <div className={style.page4}>
      <h4>FEATURED</h4>
      <div className={style.content}>
      <div className={style.left}>
        <img src="./male2.avif" alt="" />
      </div>
      <div className={style.right}>
        <h1>Pietro Castellitto for <br /> the Horsebit 1953 <br /> Loafer </h1>
        <p>Pietro Castellitto highlights the contemporary elegance of <br /> the Gucci Horsebit 1953 loafer in the new campaign.</p>
        <Link> <h3>DISCOVER MORE</h3> </Link>
      </div>
      </div>
    </div>
  )
}

export default Page4
