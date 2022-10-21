import React, { useState } from "react";
import Link from "next/link";

const Header = ({ siteTitle }) => {
  const [headerButton, setHeaderButton] = useState(false);
  return (
    <header
      className="header"
      style={{
        background: `var(--p3)`,
      }}
    >
      <button
        className="button__navigation icon-only"
        aria-label="Menu"
        aria-controls="navigation"
        onClick={(e) => {
          setHeaderButton((current) => !current);
        }}
      >
        <div className="nav-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          minHeight: "30px",
        }}
        className={`${headerButton ? "open" : ""}`}
      >
        <nav className={`${headerButton ? "open" : ""}`}>
          <ol>
            <li>
              <Link href="/">
                <a className="btn--link">Home</a>
              </Link>
            </li>
            <li>
              <Link className="btn--link" href="/portfolio">
              <a className="btn--link">Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/music">
              <a className="btn--link">Music</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
              <a className="btn--link">Writing</a>
              </Link>
            </li>
            <li>
              <Link href="/skills">
              <a className="btn--link">Skills</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
              <a className="btn--link">About</a>
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
