import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 80em;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: flex-end;
  padding-top: 2em;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const LogoContainer = styled.div`
  max-width: 50em;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const HeadingContainer = styled.div`
  min-height: 2em;
  margin-right: 3em;
  margin-top: 2em;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: flex-end;
  gap: 1.6em;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 3rem);
  font-weight: 900;
  margin-left: 1.5rem;
  display: inline;
  letter-spacing: 6px;
  color: #d01416;
  text-transform: uppercase;
`;

export const SubHeading = styled.p`
  font-size: 0.875rem;
  letter-spacing: 1.2px;
  font-weight: 400;
  color: #604738;
`;

export const MenuContainer = styled.div`
  min-height: 2em;
  margin-right: 3em;
  display: flex;
  align-self: flex-end;
  padding-top: 0.85rem;
  padding-bottom: 2rem;
  @media screen and (max-width: 960px) {
    padding: 2rem 30px;
  }
  `;

export const ListItem = styled.li`
  margin-left: 2em;
  text-transform: uppercase;
  justify-self: flex-end;
  letter-spacing: 1.5px;
  font-weight: 800;
  font-size: .85em;
  color: #604738;
  list-style-type: disc;

  &::marker {
    color: #D01416;
  }
  &:hover {
    color: #D01416;
    cursor: pointer;
  }
`;
