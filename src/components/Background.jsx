import React from "react";
import { SVGWrapper } from "./../App.styles";
import Stars from "./../assets/stars.svg"
import Hills from "./../assets/hills.svg"

export default function Background() {
  return (
    <SVGWrapper>
      <img src={Stars} alt="stars" />
      <img src={Hills} alt="hills" />
    </SVGWrapper>
  );
}
