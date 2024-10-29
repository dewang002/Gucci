import React, { useEffect, useState } from 'react'

function useShoesData() {
    const [shoes,setshoes]=useState(null)
    const shoesdata = async()=>{
        const data = await fetch(`https://www.gucci.com/us/en/c/productgrid?categoryCode=men-shoes-moccasins-and-loafers&show=Page&page=1`)
        const result = await data.json()
        setshoes(result)
    }
    useEffect(()=>{
        shoesdata()
    },[])
  return shoes
}

export default useShoesData
