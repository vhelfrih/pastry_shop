import React from "react";
import { Button } from "../../globalStyles";
import {
  HeroBottomImg,
  HeroCard,
  HeroCardIcon,
  HeroCardIcon2,
  HeroCardTextWrapper,
  HeroContainer,
  HeroContent,
  HeroH3,
  HeroIcon,
  HeroImg,
  HeroItems,
  HeroP,
  HeroTitle,
  HeroTitleContainer,
  HeroTitleText,
  MenuImgContainer,
  ButtonContainer
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitleContainer>
          <HeroIcon size="38" />
          <HeroTitle>Locations</HeroTitle>
        </HeroTitleContainer>
        <HeroTitleText>
          With 29 Boudin SFs and our flagship location on Fisherman's Wharf,
          there are lots of ways to enjoy Boudin.
        </HeroTitleText>
        <HeroItems>
          <HeroImg src={require("../../assets/choco_01.webp")} />
          <HeroCard>
            <HeroCardIcon size="80" />
            <HeroCardTextWrapper>
              <HeroH3>Greatest Cake Ever</HeroH3>
              <HeroP>
                We bring you delicious, made-to-order meals at a reasonable
                price. Join us for breakfast, lunch, and dinner in a casual,
                family-friendly atmosphere, or place an order for to-go or
                catering.
              </HeroP>
            </HeroCardTextWrapper>
            <Button>Mocha Locations</Button>
          </HeroCard>
        </HeroItems>
        <HeroItems>
          <HeroCard>
            <HeroCardIcon2 size="80" />
            <HeroCardTextWrapper>
              <HeroH3>Downtown</HeroH3>
              <HeroP>
                Home of our mother pastry — flagship of our brand. This
                beautiful building is the place to see the bakers at work, dine
                with a view or in a casual cafe learn the full story of our
                famous cookies and the city that made it possible.
              </HeroP>
            </HeroCardTextWrapper>
            <Button>Flagship Info</Button>
          </HeroCard>
          <HeroImg src={require("../../assets/choco_01.webp")} />
        </HeroItems>
        <HeroTitleContainer>
          <HeroIcon size="38" />
          <HeroTitle>FEATURED MENU ITEMS</HeroTitle>
          <ButtonContainer>
            <Button>See Full Menu</Button>
            <Button>Order Now</Button>
          </ButtonContainer>
        </HeroTitleContainer>
        <HeroTitleText>
          Available at various locations. Menus may differ by location.
        </HeroTitleText>
        <MenuImgContainer>
          <HeroBottomImg src={require("../../assets/choco_01.webp")} />
          <HeroBottomImg src={require("../../assets/choco_01.webp")} />
          <HeroBottomImg src={require("../../assets/choco_01.webp")} />
        </MenuImgContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
