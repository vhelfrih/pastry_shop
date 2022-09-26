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
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <MainContainer>
        <FaBirthdayCake color="#D01416" fontSize={"3rem"} />
        <MainHeading>Mocha Patisserie</MainHeading>

        <HeadingContainer>
          <SubHeading>Hungry for Cakes? Order Online!</SubHeading>
          <Button>Pickup</Button>
          <Button>Delivery</Button>
          <Button>Catering</Button>
        </HeadingContainer>

        <MenuContainer>
          <List>
            <ListItem>Steve's Pastry Shop</ListItem>
            <ListItem>Menu</ListItem>
            <ListItem>Locations</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </MenuContainer>
      </MainContainer>
    </>
  );
};

export default Navbar;
