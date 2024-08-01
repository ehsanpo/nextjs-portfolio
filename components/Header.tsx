import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
type ValidPath = `/${string}`; // Type for valid paths starting with slash

interface MenuItem {
  [key: string]: ValidPath;
}

const menu: MenuItem = {
  Home: "/",
  About: "/about",
  Portfolio: "/portfolio",
  Skills: "/skills",
  Music: "/music",
};

const Header = () => {
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
        aria-label="Toggle menu"
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
            {Object.keys(menu).map((key) => (
              <li key={key}>
                <Link
                  className="btn--link"
                  href={menu[key]}
                  onClick={() => setHeaderButton(false)}
                >
                  {key}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
