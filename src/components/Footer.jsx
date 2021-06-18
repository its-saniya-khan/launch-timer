import React from "react";
import { FooterContainer } from "./../App.styles";
import Facebook from "./../assets/facebook.svg"
import Pinterest from "./../assets/pinterest.svg"
import Instagram from "./../assets/instagram.svg"

export default function Footer() {
  return (
    <FooterContainer>
      <img src={Facebook} alt="facebook" />
      <img src={Pinterest} alt="pinterest" />
      <img src={Instagram} alt="instagram" />
    </FooterContainer>
  );
}
