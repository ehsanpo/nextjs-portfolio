import React from "react";
import Link from "next/link";

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

  if (type === "button") {
    return (
      <button onClick={onClick} type={type} className={"btn " + className}>
        <span className="btn__content">{children ? children : ""} </span>
        <span className="btn__glitch"></span>
        <span className="btn__label">{buttonLable}20</span>
      </button>
    );
  }
  if (type === "link") {
    return (
      <Link href={to}>
        <button onClick={onClick} type={type} className={"btn " + className}>
          <span className="btn__content">{children ? children : ""} </span>
          <span className="btn__glitch"></span>
          <span className="btn__label">{buttonLable}20</span>
        </button>
      </Link>
    );
  }
};

export default Button;
