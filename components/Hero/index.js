/* eslint-disable react/no-unescaped-entities */
import React from "react";
import style from "./Hero.module.scss";
import Button from "../Button";
import logo from "./logo.svg";
const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.heroWrapper + " wrapper"}>
        <div className="v-center--f">
          <img
            width={90}
            height={86}
            alt="EP Logo"
            className={style.logo}
            src="logo.svg"
          />
          <h1 className="display">Ehsan Pourhadi</h1>
          <h2 style={{ fontSize: "2rem" }}>Navigating Bits and Beats</h2>
          <div className={style.intro}>
            <p>
              I'm a Software Developer, UI/UX Designer, and Producer who
              provides digital solutions with more than ten years of experience
              creating and developing software for the web.
            </p>
          </div>

          <Button type="link" to="/portfolio">
            See Portfolio
          </Button>
          <Button type="link" to="/about" className="btn--secondary">
            About Ehsan
          </Button>
        </div>
      </div>
      <div className={style.container__s}>
        <div className={style.chevron}></div>
        <div className={style.chevron}></div>
        <div className={style.chevron}></div>
      </div>
    </section>
  );
};

export default Hero;
