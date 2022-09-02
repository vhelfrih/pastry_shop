import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 50%;
  color: #FAEAD2;
  background-color: #F1F0EC;
  text-transform: uppercase;
`

export const ProductImg = styled.img`
  min-height: 1em;
  min-width: 1em;
  max-width: 25%;
  
  &:first-of-type{
    align-self: flex-end;
    margin-left: -2em;
    margin-bottom: 2em;
  }
  &:last-of-type{
    align-self: flex-start;
    margin-top: -1em;
    margin-right: -2.5em;
    margin-bottom: 2em;
    /* how to crop the top of the picture?*/
    overflow: hidden;
  }
`;