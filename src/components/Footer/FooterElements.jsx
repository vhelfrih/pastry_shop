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
  outline: 2px solid #6e5241;
  outline-offset: 2px;
`;

export const FooterWrap = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding: 16px 24px;
  color: #faead2;
  margin: auto;
  margin-top: 2em;
`;

export const FooterIcon = styled(Cake)`
  color: #faead2;
`;

export const FooterMenu = styled.ul`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  list-style-type: none;
  letter-spacing: 1.25px;
  flex: 1;
  height: 280px;

  li {
    display: flex;
    margin-bottom: 13px;
    cursor: pointer;
    font-weight: 600;

    &:hover {
      color: #fff;
      transition: all 35ms ease-in;
    }
  }

  li:last-child {
    text-transform: none;
    font-weight: 100;
    margin-top: auto;
    margin-bottom: 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 100;
  margin-left: 2em;
  letter-spacing: 1.25px;
  flex: 1;
  height: 280px;
`;

export const IconText = styled.p`
  margin-top: auto;
`;

export const SocialMediaWrap = styled.section`
  display: flex;
  flex-direction: column;
  height: 280x;
`

export const SocialIconText = styled.p`
  font-weight: 100;
  margin-left: 2em;
  letter-spacing: 1.25px;
  justify-self: flex-start;
`;

export const SocialIcons = styled.div`
  display: flex;
  margin-top: 1em;
`
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 2.5em;
  margin-left: 0.8em;
`

