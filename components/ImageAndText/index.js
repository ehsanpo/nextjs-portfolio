import React from "react";
import style from "./imageAndText.module.scss";

const ImageAndText = ({ image, children, nopad, left }) => (
  <section className={style.noPad}>
    <div className="wrapper">
      <div className={` ${style.ImageAndText} ${left ? style.left  : ""}`}>
        <div className={style.itb_image}>{image}</div>
        <div className={style.itb_text} >
          <div className="v-center">{children}</div>
        </div>
      </div>
    </div>
  </section>
);

export default ImageAndText;
