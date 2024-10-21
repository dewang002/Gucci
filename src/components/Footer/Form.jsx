import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import style from "./footer.module.css";
import { Link } from "react-router-dom";
function Form({ data }) {
  return (
    <div className={style.form}>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        {data.map((elem) => (
          <>
            <h3>{elem.title}</h3>

            <h4>{elem.para}</h4>

            {elem.input&&
              <div className={style.input_data}>
                <input type="text" required />
                <div className={style.underline}></div>
                <label>Country / Region ,City</label>
                <button>
                  <IoIosArrowForward />
                </button>
              </div>
            }

            {elem.link&&
              <Link>
                <h4>singapour</h4>
              </Link>
            }
          </>
        ))}
      </form>
    </div>
  );
}

export default Form;
