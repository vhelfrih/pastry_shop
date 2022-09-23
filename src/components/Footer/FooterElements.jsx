import styled from "styled-components";
import { Link } from "react-router-dom";
import { Cake } from "@styled-icons/entypo/Cake";

export const FooterContainer = styled.footer`
  background-color: #604738;
  height: 39vh;
  font-size: 0.875rem;
`;

export const FooterBorder = styled.div`
  height: 3vh;
  background-color: #604738;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='0.2' fill='%23DFDFDF' cx='45' cy='45' r='10'/%3E%3Cg fill='%23887C5F' fill-opacity='0.2'%3E%3Ccircle cx='0' cy='90' r='21'/%3E%3Ccircle cx='90' cy='90' r='21'/%3E%3Ccircle cx='90' cy='0' r='21'/%3E%3Ccircle cx='0' cy='0' r='21'/%3E%3C/g%3E%3C/svg%3E");
  outline: 2px solid #6E5241;
  outline-offset: 2px;
`;

export const FooterWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
  padding: 16px 24px;
  color: #faead2;
  margin-top: 2em;
  `;

export const FooterIcon = styled(Cake)`
  color: #faead2;
  `;

export const FooterMenu = styled.ul`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  margin-left: 2em;
  list-style-type: none;
  letter-spacing: 1.25px;
  flex-grow: 1;
  flex-basis: 100%;

  :last-child{
  margin-left: auto;
}

li {
  display: flex;
  flex: 1;
  margin-bottom: 13px;
    cursor: pointer;
    font-weight: 600;
    
    &:hover {
      color: #fff;
      transition: all 35ms ease-in;
    }
  }
  
  li:last-child {
    margin-top: 3em;
    text-transform: none;
    font-weight: 100;
    margin-top: 0 auto;
  }
`;
