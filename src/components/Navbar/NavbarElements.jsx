import styled from "styled-components";
import { FaBirthdayCake } from "react-icons/fa";

export const MainContainer = styled.div`
  max-width: 90em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const LogoContainer = styled.div`
  max-width: 60em;
  position: relative;
  top: -1em;
  left: -15em;
  /* display: flex;
  align-items: center; */
  /* @media screen and (max-width: 960px) {
    padding: 0 30px;
  } */
`;

export const HeadingContainer = styled.div`
  min-height: 2em;
  max-width: 70em;
  margin: 1em;
  margin-top: -4em;
  display: none;
  align-self: flex-end;
  align-items: center;
  justify-content: flex-end;
  gap: 1em;

  @media (max-width: 70em) {
    display: flex;
  }
`;

export const MainIcon = styled(FaBirthdayCake)`
  font-size: 3rem;
  position: relative;
  top: 50px;
  display: none;
  color: #d01416;

  @media (min-width: 70em) {
    display: block;
  }
`;

export const MainHeading = styled.h1`
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  margin-left: 1.5em;
  margin-right: 2em;
  display: none;
  position: relative;
  letter-spacing: 4px;
  color: #d01416;
  text-transform: uppercase;
  -webkit-text-stroke: 2px #604738;
  text-shadow:
   -1px -1px 0 #ccc,  
    4px -8px 0 #ccc,
    -1px 0px 0 #ccc,
     1px 2px 0 #ccc;

  @media (min-width: 70em) {
    display: block;
  }
`;

export const MobileHeading = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  margin: 0.4em 1.65em;
  -webkit-text-stroke: 2px #604738;
  text-shadow:
   -1px -1px 0 #ccc,  
    4px -8px 0 #ccc,
    -1px 0px 0 #ccc,
     1px 2px 0 #ccc;
  display: block;
  position: relative;
  color: #d01416;
  text-transform: uppercase;

  @media (min-width: 70em) {
    display: none;
  }
`;

export const SubHeading = styled.p`
  font-size: 0.875rem;
  letter-spacing: 1.2px;
  font-weight: 400;
  color: #604738;
  @media (max-width: 80em) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  min-height: 2em;
  max-width: 40em;
  margin-right: 1em;
  display: none;
  align-self: flex-end;
  
  @media (min-width: 70em) {
    display: flex;
  }
`;

export const ListItem = styled.li`
  margin-left: 2em;
  text-transform: uppercase;
  justify-self: flex-end;
  letter-spacing: 1.5px;
  font-weight: 800;
  font-size: 0.85em;
  color: #604738;
  list-style-type: disc;
  cursor: pointer;

  &::marker {
    color: #d01416;
    cursor: unset;
  }
  &:hover {
    color: #d01416;
  }
`;
