import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMenData } from "../Store/Slice/menShoesSlice";

function useShoesData() {
  const dispatch = useDispatch();
  const [shoes, setshoes] = useState(null);
  const shoesdata = async () => {
    const data = await fetch(
      `https://www.gucci.com/us/en/c/productgrid?categoryCode=men-shoes-moccasins-and-loafers&show=Page&page=1`
    );
    const result = await data.json();
    localStorage.setItem("shoesData",JSON.stringify(result.products.items))
    setshoes(result?.products?.items);
    dispatch(addMenData(shoes));
  };
  useEffect(() => {
    !shoes && shoesdata();
  }, [shoes]);
  return shoes;
}

export default useShoesData;
