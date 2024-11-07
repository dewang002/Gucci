import React from "react";
import style from "./footer.module.css";
import Form from "./Form";
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
                  <>
                    <h3
                      key={index}
                      className={index === 0 ? style.first : style.second}
                    >
                      {elem}
                    </h3>
                  </>
                ))}
              </div>

              <div className={style.right}>
                 <div><h3 className={style.first}>THE COMPANY</h3></div> 
                <div >
                {[
                  "About Gucci",
                  "Gucci Equilibrium",
                  "Code of Ethics",
                  "Careers",
                  "Legal",
                  "Privacy & Cookie Policy",
                  "Corporate Information",
                ].map((elem, index) => (
                    <h3 className={ style.second}>
                      {elem}
                    </h3>
                ))}
                  </div>
              </div>

            </div>
            <div className={style.bottom}>
              {[
                "GUCCI SERVICES",
                "Discover Our Services",
                "Book an Appointment",
                "Collect In Store",
              ].map((elem, index) => (
                <h3
                  key={index}
                  className={index === 0 ? style.first : style.second}
                >
                  {elem}
                </h3>
              ))}
            </div>
          </div>
          <div className={style.box2}>
            <Form data={formdata} />
          </div>
        </div>
        <div className={style.bottomContainer}>
          <div className={style.top}>
            <p>
              © 2016 - 2022 Guccio Gucci S.p.A. - All rights reserved. SIAE
              LICENCE # 2294/I/1936 and 5647/I/1936
            </p>
          </div>
        </div>
        <div className={style.mainlogo}>
          <img
            style={{ width: "100%", objectFit: "cover", paddingBottom: "4vw" }}
            src="./public/main_logo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
