import React from "react";
import Link from "next/link";

import styles from "./Button.module.scss";

const Button = ({
  className = "",
  children,
  type = "button",
  to = "/",
  onClick,
}) => {
  const buttonLable = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 2);

  // "btn--primary"
  // "btn--secondary"
  // "btn--cta"
  // "btn-ghost"
  // "btn--link"

  if (type === "button") {
    return (
      <button
        onClick={onClick}
        type={type}
        className={"btn button " + className}
      >
        <span className="btn__content">{children ? children : ""} </span>
        <span className="btn__glitch"></span>
        <span className="btn__label">{buttonLable}20</span>
      </button>
    );
  }
  if (type === "link") {
    return (
      <Link href={to} className={"btn " + className}>
        <>
          <span className="btn__content">{children ? children : ""} </span>
          <span className="btn__glitch"></span>
          <span className="btn__label">{buttonLable}20</span>
        </>
      </Link>
    );
  }
};

export default Button;

// <a>
//     Type:
//         internal "btn--link"
//         external    "btn--link--external"
//         link-in-text "btn--link"
// </a>
// <Button>
//     Type:
//         submit
//         button
// </Button>
