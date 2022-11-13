import React from "react";
import style from "./Hero.module.scss";
import Button from "../Button";
import logo from "./logo.svg";
const Hero = () => {
  const ImageArray =[
    "/images/3/5.png",
    "/images/3/11.png",
    "/images/3/14.png",
    "/images/3/4.png",
  ]
  const randomElement =
  ImageArray[Math.floor(Math.random() * ImageArray.length)];
  return (
    <section className={style.hero}>
      <img style={{objectFit: "cover"}} alt="EP Logo" className={style.bg} src={randomElement} />
      <div className={style.heroWrapper + " wrapper"}>
        <div className="v-center--f">
          <img alt="EP Logo" className={style.logo} src="logo.svg" />
          <h1 className="display">Ehsan Pourhadi</h1>
          <h2>Software Developer / Music Producer</h2>
          <div className={style.intro}>
            <p>
              I'm a Developer, Designer, and Producer who provides digital
              solutions with more than ten years of experience creating and
              developing software for the web.
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
