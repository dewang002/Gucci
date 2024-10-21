import React from "react";
import style from "./footer.module.css";
import Form from "./Form"
import { formdata } from "../../utils/data";
function Footer() {
  return (
    <div id={style.footer} className={style.footer}>
      <div className={style.container}>
        <div className={style.topContainer}>
          <div className={style.box1}>
            <div className={style.top}>
              <div className={style.left}>
                {[
                  "MAY WE HELP YOU",
                  "Contact Us",
                  "My Order",
                  "FAQs",
                  "Email Unsubscribe",
                  "Sitemap",
                ].map((elem, index) => (
                  <h3 key={index} className={index === 0 ? style.first : style.second}>{elem}</h3>
                ))}
              </div>
              <div className={style.right}>
                {[
                  "THE COMPANY",
                  "About Gucci",
                  "Gucci Equilibrium",
                  "Code of Ethics",
                  "Careers",
                  "Legal",
                  "Privacy & Cookie Policy",
                  "Corporate Information",
                ].map((elem, index) => (
                    <h3 key={index} className={index === 0 ? style.first : style.second}>{elem}</h3>
                  ))}
              </div>
            </div>
            <div className={style.bottom}>
            {[
                  "GUCCI SERVICES",
                  "Discover Our Services",
                  "Book an Appointment",
                  "Collect In Store"
                  
                ].map((elem, index) => (
                    <h3 key={index} className={index === 0 ? style.first : style.second}>{elem}</h3>
                  ))}
            </div>
          </div>
          <div className={style.box2}>
            
          <Form data={formdata} /> 
          </div>
        </div>
        <div className={style.bottomContainer}></div>
      </div>
    </div>
  );
}

export default Footer;
