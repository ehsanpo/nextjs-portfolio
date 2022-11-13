import React from "react";
import Link from "next/link";

import style from "./Box.module.scss";
import Image from "next/image";

function onlyCapitalLetters(str) {
  return (str.match(/[A-Z]/g) || []).join("");
}

const Box = ({ node, image, children, headline = "", empty = false }) => {
  if (empty) {
    return (
      <div lassName={style.box}>
            <span className={style.box__glitch}></span>
            <div className={style.boxHeader}>{headline}</div>
        <hr />
        <div className={style.boxWrapper}>{children}</div>
      </div>
    );
  }

  const { id, title, tag, permalink, category, logo, fileName } = node;
  return (
    <Link href={permalink}>
      <a className={style.box}>
        <span className={style.box__glitch}></span>
        <div className={style.boxHeader}>
          <span>{id}</span>{" "}
          {category.map((cat) => (
            <>{onlyCapitalLetters(cat)} </>
          ))}
        </div>
        <hr />
        <div className={style.boxWrapper}>
          {logo && (
            <div className={style.portfolioImageThumb}>
              <Image
                objectFit="contain"
                src={"/images/portfolio/" + fileName + "/" + logo[0]}
                width="250"
                height="170"
              />
            </div>
          )}
          <h3>{title}</h3>
          <div className={style.tags}>
            {tag.slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Box;
