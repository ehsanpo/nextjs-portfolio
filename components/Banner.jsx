import React, { useState, useEffect } from "react";
import Image from "next/image";

const Banner = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="banner"
      style={{
        background: `var(--p3)`,
        visibility: `${scrollPosition > 20 ? "hidden" : " visible"}`,
      }}
    >
      <Image alt="Banner" src="/img/banner.gif" width={160} height={73} />
    </div>
  );
};

export default Banner;
