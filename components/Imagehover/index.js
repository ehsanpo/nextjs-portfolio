import React, { useRef, useEffect } from "react";
import hoverEffect from "hover-effect";

const LocalImage = () => {
  const container = useRef();
  const ImageEffectArray = [
    "../../img/111.jpg",
    "../../img/112.jpg",
    "../../img/113.jpg",
    "../../img/114.jpg",
    "../../img/115.jpg",
    "../../img/116.jpg",
    "../../img/117.jpg",
    "../../img/118.jpg",
    "../../img/118.jpg",
    "../../img/120.jpg",
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
