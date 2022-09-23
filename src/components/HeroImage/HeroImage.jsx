import React from "react";
import { Button } from "../../globalStyles";
import { HeroImageContainer, HeroImg } from "./HeroImageElements";

const HeroImage = () => {
  return (
    <HeroImageContainer>
          <HeroImg src={require("../../assets/baby_02.webp")} />
    </HeroImageContainer>
  );
};

export default HeroImage;
