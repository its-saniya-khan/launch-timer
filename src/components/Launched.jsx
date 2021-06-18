import React from "react";
import { LaunchedTitle, Rocket, LaunchedWrapper } from "./../App.styles";
import RocketSVG from "../assets/rocket.svg";

export default function Launched() {
  return (
    <LaunchedWrapper>
      <LaunchedTitle>We've officially launched</LaunchedTitle>
      <Rocket src={RocketSVG} />
    </LaunchedWrapper>
  );
}
