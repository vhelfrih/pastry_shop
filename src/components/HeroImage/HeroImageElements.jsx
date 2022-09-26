import styled from "styled-components";

export const HeroImageContainer = styled.div`
  height: 52vh;
  font-size: 0.875rem;
  position: relative;
`;

export const HeroImg = styled.img`
  min-width: 100%;
  height: 52vh;
  object-fit: cover;
`;

export const HeroImageButton = styled.button`
  top: -28em;
  left: 80rem;
  z-index: 10;
  margin-right: 1.4rem;
  margin-left: auto;
  height: 3rem;
  width: 14rem;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1.5px;
  background: #fff;
  color: #D01416;
  border: 3px solid #fff;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
  &:hover {
    background: #D01416;
    color: #fff;
  }
`;
