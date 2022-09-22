import React from "react";
import styles from "./imageAndText.module.scss";

const ImageAndText = ({ image, children, nopad, left }) => (
  <section className="no-pad">
    <div className="wrapper">
      <div className={` ImageAndText ${left ? "left" : ""}`}>
        <div className="itb-image">{image}</div>
        <div className="itb-text">
          <div className="v-center">{children}</div>
        </div>
      </div>
    </div>
  </section>
);

export default ImageAndText;
