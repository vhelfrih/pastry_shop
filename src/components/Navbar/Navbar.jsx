import React from "react";
import { Button } from "../../globalStyles";
import { FaBirthdayCake } from "react-icons/fa";
import {
  HeadingContainer,
  List,
  ListItem,
  MainContainer,
  MenuContainer,
  SubHeading,
  MainHeading,
  LogoContainer,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <MainContainer>
      
      <LogoContainer>
        <FaBirthdayCake color="#D01416" fontSize={"3rem"} />
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
