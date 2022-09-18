import React from "react";
import { Button } from "../../globalStyles";
import {
  HeroBtn,
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
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
      <HeroIcon size="38" />
      <HeroTitle>Locations</HeroTitle>
        <HeroItems>
          <HeroImg />
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
          <HeroImg />
          <HeroCard>
          <HeroCardIcon2 size="80" />
            <HeroCardTextWrapper>
              <HeroH3>Downtown SF</HeroH3>
              <HeroP>
                Home of our mother dough—flagship of our brand. This beautiful
                building is the place to see the bakers at work, dine with a
                view or in a casual cafe, and learn the full story of our famous
                sourdough bread and the city that made it possible.
              </HeroP>
            </HeroCardTextWrapper>
            <Button>Flagship Info</Button>
          </HeroCard>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
