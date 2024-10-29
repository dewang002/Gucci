import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import WomenGolden from "./WomenGolden";
import WomenWinter from "./WomenWinter";
function Womens() {
  const { womens } = useParams();
  const navigate = useNavigate();
  const handleclick = ()=>{
    navigate(-1)
  }
  let ComponentRender;
  if (womens === "golden") {
    ComponentRender = <WomenGolden />;
  } else if (womens === "winter") {
    ComponentRender = <WomenWinter />;
  } else {
    ComponentRender = "store not avalable";
  }
  return (
    <div className="">
      <h1>{womens.toUpperCase()}</h1>
      <button onClick={handleclick}>back</button>
      {ComponentRender}
    </div>
  );
}

export default Womens;
