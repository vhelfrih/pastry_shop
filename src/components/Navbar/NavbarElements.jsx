import styled from "styled-components";

export const MainContainer = styled.div`
  min-width: 1100px;
  padding: 0 25px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const MenuContainer = styled.div`
  min-height: 2em;
  margin-right: 3em;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  display: list-item;
  margin-left: 2em;
  text-transform: uppercase;
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
