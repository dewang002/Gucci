import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import style from "./footer.module.css";
import Country from "./Country"
import { Link } from "react-router-dom";
function Form({ data }) {
  return (
    <div className={style.form}>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        {data.map((elem) => (
          <React.Fragment key={elem.title}>
            <h3>{elem.title}</h3>

            <h4>{elem.para}</h4>

            {elem.underline&&
              <div className={style.input_data}>
                <input type="text" required />
                <div className={style.underline}></div>
                <label>{elem.input}</label>
                <button>
                  <IoIosArrowForward />
                </button>
              </div>
            }

            {elem.link&&
              <Link style={{textDecoration:"none",}}>
                <Country />
              </Link>
            }
          </React.Fragment>
        ))}
      </form>
    </div>
  );
}

export default Form;
