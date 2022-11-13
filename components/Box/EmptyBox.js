import React from "react";
import Link from "next/link";

import style from "./EmptyBox.module.scss";
import Image from "next/image";

const EmptyBox = ({ children, headline = "", max = false }) => {
  return (
     <div className={` ${style.box} ${max ? style.box__max  : ""}`}>
      <span className={style.box__glitch}></span>
      <div className={style.boxHeader}>{headline}</div>
      <hr />
      <div className={style.boxWrapper}>{children}</div>
    </div>
  );
};

export default EmptyBox;
