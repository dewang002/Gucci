import React from 'react'
import style from "./Page.module.css"
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
gsap.registerPlugin(useGSAP);
function Page() {
 
  useGSAP(
    ()=>{
      gsap.from('.title',{
        y:'2rem'
      }),
      gsap.from('img',{
        scale:1.2,
        delay:2
      })
    }
  )

  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/Mens-loafers-shoes')
  }

  return (
    <div className={`${style.page1}`}>
     <Link to=''><img src="./modle1.avif" alt="" /> </Link> 
     <div className={style.explorebtn}>
     <h1 className='title'>THE loafer since 1953</h1>
      <button className='title' onClick={handleClick}>explore men's collection</button>
     </div>
    </div>
  )
}

export default Page
