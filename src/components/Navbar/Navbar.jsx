import React from "react";
import { Button, Container, MainHeading } from "../../globalStyles";
import { FaBirthdayCake } from "react-icons/fa";
import { List, ListItem, MainContainer, MenuContainer } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
        <MainContainer>
          <FaBirthdayCake color="#D01416" fontSize={"3rem"} />
          <MainHeading>Pastry Shop</MainHeading>
          Hungry for Cakes? Check Our Fancy Products!
          <Button>Pickup</Button>
          <Button>Delivery</Button>
          <Button>Catering</Button>
        </MainContainer>
        <MenuContainer>
          <List>
            <ListItem>Steve's Pastry Shop</ListItem>
            <ListItem>Menu</ListItem>
            <ListItem>Locations</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </MenuContainer>
    </>
  );
};

export default Navbar;
