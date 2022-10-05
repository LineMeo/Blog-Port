import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  width: 100%;
  height: 50px;
  background-color: #372549;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
`;

export const Ul = styled.ul`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #372549;
`;

export const Li = styled.li`
  background-color: #372549;
`;

export const A = styled(Link)`
  text-decoration: none;
  background-color: #372549;
  color: #b75d69;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #eacdc2;
    border-bottom: solid;
  }
`;
