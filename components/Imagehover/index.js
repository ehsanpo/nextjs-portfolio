import React, { useRef, useEffect } from "react";
import hoverEffect from "hover-effect";
// import portfolioImage from "../../public/images/ep-3-3.jpg";
// import portfolioImage2 from "../../public/images/ep-3-2.jpg";
import portfolioImage from "../../public/ehsan/111.jpg";
import portfolioImage2 from "../../public/images/ep-3-2.jpg";


import flip1 from "../../public/images/111.jpg";
import flip2 from "../../public/images/112.jpg";
import flip3 from "../../public/images/113.jpg";
import flip4 from "../../public/images/114.jpg";
import flip5 from "../../public/images/115.jpg";
import flip6 from "../../public/images/116.jpg";
import flip7 from "../../public/images/117.jpg";
import flip8 from "../../public/images/118.jpg";
import flip9 from "../../public/images/119.jpg";
import flip10 from "../../public/images/120.jpg";

const LocalImage = () => {
  const container = useRef();
  const ImageEffectArray = [
    "../../images/111.jpg",
    "../../images/112.jpg",
    "../../images/113.jpg",
    "../../images/114.jpg",
    "../../images/115.jpg",
    "../../images/116.jpg",
    "../../images/117.jpg",
    "../../images/118.jpg",
    "../../images/118.jpg",
    "../../images/120.jpg",
  ];
  const randomElement =
    ImageEffectArray[Math.floor(Math.random() * ImageEffectArray.length)];
  useEffect(() => {
    var myAnimation = new hoverEffect({
      parent: container.current,
      intensity: 0.3,
      image1: "../../ehsan/112.jpg",
      image2: "../../ehsan/116.jpg",
      displacementImage: randomElement,
    });
  }, [container, randomElement]);

  return (
    <div
      id="imgContainer"
      ref={container}
      style={{
        width: 340,
        height: 560,
        marginTop: 80,
      }}
    />
  );
};

export default LocalImage;
