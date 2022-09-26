import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
}
`;

export const Container = styled.div`
  min-width: 1300px;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  background: #d01416;
  height: 2.5rem;
  width: 12rem;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: #fff;
  border: 3px solid #d01416;
  cursor: pointer;
  text-transform: uppercase;
  overflow: hidden;
  position: relative;
  &:hover {
    color: #d01416;
    background: #fff;
  }
`;

export const ShortSectionContainer = styled.div`
  display: flex;
  position: relative;
  top: -30em;
  left: 86em;
  flex-direction: column;
  max-width: 26em;
  color: #faead2;
`;

export const ShortSectionTitle = styled.h2`
  display: flex;
  font-size: 2em;
  letter-spacing: 4px;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0.6em;
`;

export const ShortSectionText = styled.p`
  align-items: center;
  justify-content: center;
  font-size: 1.6em;
  line-height: 1.4em;
  text-align: center;
  padding: 0.6em 0;
  border-bottom: 6px double pink;
  border-top: 6px double pink;
`;

export default GlobalStyle;
