import React from "react";
import {
  ShortSectionContainer,
  ShortSectionText,
  ShortSectionTitle,
} from "../../globalStyles";
import {
  HeroImageContainer,
  HeroImg,
  HeroImageButton,
} from "./HeroImageElements";

const HeroImage = () => {
  return (
    <HeroImageContainer>
      <HeroImg src={require("../../assets/baby_02.webp")} />
      <ShortSectionContainer>
        <ShortSectionTitle>MOCHA LOYALTY REWARDS</ShortSectionTitle>
        <ShortSectionText>
          Calling all cookie lovers! Join the program that rewards you
          deliciously. Earn reward points and free Mocha pastries. Excludes
          Bistro Mocha, Catering, and Gift Catalog.
        </ShortSectionText>
      </ShortSectionContainer>
      <HeroImageButton>Loyalty Rewards Info</HeroImageButton>
    </HeroImageContainer>
  );
};

export default HeroImage;
