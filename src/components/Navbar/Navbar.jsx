import React from "react";
import { Button } from "../../globalStyles";

import {
  HeadingContainer,
  ListItem,
  MainContainer,
  MenuContainer,
  SubHeading,
  MainHeading,
  LogoContainer,
  MainIcon,
  MobileHeading,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <MainContainer>

      <LogoContainer>
        <MobileHeading>M</MobileHeading>
        <MainIcon />
        <MainHeading>Mocha Patisserie</MainHeading>
      </LogoContainer>

      <HeadingContainer>
        <SubHeading>Hungry for Cakes? Order Online!</SubHeading>
        <Button>Pickup</Button>
        <Button>Delivery</Button>
        <Button>Catering</Button>
      </HeadingContainer>
      
      <MenuContainer>
        <ListItem>Steve's Pastry Shop</ListItem>
        <ListItem>Menu</ListItem>
        <ListItem>Locations</ListItem>
        <ListItem>Contact</ListItem>
      </MenuContainer>
    </MainContainer>
  );
};

export default Navbar;
