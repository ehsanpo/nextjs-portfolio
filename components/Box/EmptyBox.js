import React from "react";
import style from "./EmptyBox.module.scss";

const EmptyBox = ({ children, headline = "", max = false }) => {
  return (
    <div className={`${style.box} ${max ? style.box__max : ""}`}>
      <span className={style.box__glitch}></span>
      <div className={style.boxHeader}>{headline}</div>
      <hr />
      <div className={style.boxWrapper}>{children}</div>
    </div>
  );
};

export default EmptyBox;
