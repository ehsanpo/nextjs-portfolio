import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  0% {
    clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
  }
  100% {
    clip-path: polygon(0% 0%, 200% 0%, 0% 200%);
  }
  0% {
    clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
  }
  100% {
    clip-path: polygon(0% 0%, 200% 0%, 0% 200%);
  }
`;

export default function FadeIt({ children }) {
  return <Reveal keyframes={customAnimation}>{children}</Reveal>;
}
