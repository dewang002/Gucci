import React, { useEffect, useState } from "react";
import style from "./Mens.module.css";
import Card from "./Card";
function Cards({ data, lowprice, highprice }) {

  const [all, setall] = useState(data);
  const filter_L_Price = [...all].sort(
    (a, b) => parseInt(a.rawPrice) - parseInt(b.rawPrice)
  );
  const filter_H_Price = [...all].sort(
    (a, b) => parseInt(b.rawPrice) - parseInt(a.rawPrice)
  );
  useEffect(() => {
    setall(data)
    if (lowprice === true) {
      setall(filter_L_Price);
    } else if (highprice === true) {
      setall(filter_H_Price);
    }
  }, [lowprice, highprice,data]);

  return (
    <div className={`${style.cards}`}>
      {all.map((elem) => (
        <React.Fragment key={elem.productCode}>
        <Card
          id={elem.productCode}
          productCode={elem.productCode}
          img={elem.primaryImage.src}
          img2={elem.alternateGalleryImages}
          name={elem.title}
          price={elem.rawPrice}
        />
        </React.Fragment>
      ))}
    </div>
  )
}

export default Cards;
