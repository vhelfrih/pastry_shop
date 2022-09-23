import styled from "styled-components";
import { Leaf } from "@styled-icons/entypo/Leaf";
import { Cake } from "@styled-icons/entypo/Cake";
import { ChildFriendly } from "@styled-icons/material-outlined/ChildFriendly";

export const HeroContainer = styled.div`
  padding-top: 1em;
  padding-bottom: 2em;
  position: relative;
  background-color: #bfcaf2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FFFFFF'/%3E%3Cstop offset='1' stop-color='%23BFCAF2'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23dfe5f9'/%3E%3Cstop offset='1' stop-color='%23BFCAF2'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='translate(1260 0)'%3E%3Cg transform='translate(0 180)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(-108 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.44' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;
`;

export const HeroContent = styled.div`
  width: 70%;
  margin-left: 14em;
  margin-top: 5em;
  position: relative;
`;

export const HeroTitleContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const HeroIcon = styled(Leaf)`
  margin-right: 1em;
  color: #71624a81;
`;

export const HeroTitle = styled.h2`
  text-transform: uppercase;
  color: #604738;
  letter-spacing: 4px;
  position: relative;
`;

export const HeroTitleText = styled.p`
  color: #604738;
  letter-spacing: 2px;
  margin-left: 3.4em;
  margin-top: 1em;
  width: 70%;
  line-height: 1.5em;
`;

export const HeroItems = styled.section`
  display: flex;
  margin-top: 2em;
  align-items: center;
  width: 100%;
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 58vh;
  object-fit: cover;
`;

export const HeroCard = styled.div`
  border: 2px solid #ccc;
  outline: 4px dotted #ccc;
  outline-offset: 5px;
  position: relative;
  width: 40%;
  height: 60%;
  padding: 2em;
  margin: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const HeroCardIcon = styled(Cake)`
  position: relative;
  color: #604738;
`;

export const HeroCardIcon2 = styled(ChildFriendly)`
  position: relative;
  color: #604738;
`;

export const HeroCardTextWrapper = styled.div`
  border-bottom: 2px solid #ccc;
  border-top: 2px solid #ccc;
  margin: 2em 0;
  padding: 1.8em 0;
  color: #604738;
`;

export const HeroH3 = styled.h3`
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 1.2em;
  text-align: center;
`;

export const HeroP = styled.p`
  line-height: 1.5;
  text-align: center;
`;

export const HeroBtn = styled.button``;

export const MenuImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  margin: 4em 0;
`;

export const HeroBottomImg = styled.img`
  width: 30%;
  height: 45vh;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    outline: 12px solid #ccc;
    transition: all 35ms ease-in;
  }
`;
