import React from "react";
import Link from "next/link";

import styles from "./Award.module.scss";
import InViewMonitor from "react-inview-monitor";
import Button from "../Button";
import Image from "next/image";
import image1 from "../../public/cannen-b.png";
import image2 from "../../public/svenskadesign-b.png";
import image3 from "../../public/guldagg-b.png";

const Award = () => {
  return (
    <section>
      <InViewMonitor
        intoViewMargin="8%"
        classNameNotInView="vis-hidden"
        classNameInView="animated titleIn"
        toggleClassNameOnInView
      >
        <h2 className="title yellow">Awards</h2>
      </InViewMonitor>
      <div className="wrapper">
        <div className={styles.awardsContainer}>
          <div className={styles.Awards}>
            <InViewMonitor
              intoViewMargin="10%"
              classNameNotInView="vis-hidden"
              classNameInView="animated titleIn"
              toggleClassNameOnInView
            >
              <Image alt="Svenska design" className="award-img" src={image2} />
              <div className={styles.awdContent}>
                <h3>Svenska design</h3>
                Gold Category Digital Design
                <br />
              </div>
              <Button
                className="btn btn--b btn--link"
                to="/portfolio/malmo-saluhall/"
              >
                View project
              </Button>
            </InViewMonitor>
          </div>
        </div>
        <div className={styles.awardsContainer}>
          <div className={styles.Awards}>
            <InViewMonitor
              intoViewMargin="10%"
              classNameNotInView="vis-hidden"
              classNameInView="animated titleIn"
              toggleClassNameOnInView
            >
              <Image alt="Cannes lions" className="award-img" src={image1} />
              <div className="content">
                <h3>Cannes lions</h3>
                Silver Lion in Promo & Activation, Bronze Lion in Cyber &
                Shortlist in Media
              </div>
              <Button
                className="btn btn--b btn--link"
                to="/portfolio/toolpool/"
              >
                View project
              </Button>
            </InViewMonitor>
          </div>
        </div>
        <div className={styles.awardsContainer}>
          <div className={styles.Awards}>
            <InViewMonitor
              intoViewMargin="10%"
              classNameNotInView="vis-hidden"
              classNameInView="animated titleIn"
              toggleClassNameOnInView
            >
              <Image alt="Guld??gget" className="award-img" src={image3} />
              <div className="content">
                <h3>Guld??gget</h3>
                Gold Category PR & Silver Categories Digital and Alternative
                Media
              </div>
              <Button
                className="btn btn--b btn--link"
                to="/portfolio/toolpool/"
              >
                View project
              </Button>
            </InViewMonitor>
          </div>
        </div>
      </div>
      <div className="center">
        <Button type="link" to="/about" className="btn--secondary">
          About Ehsan
        </Button>
      </div>
    </section>
  );
};

export default Award;
