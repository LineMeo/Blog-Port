import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  width: 100%;
  height: 80px;
  background-color: #1a1423;
  display: flex;
  flex-direction: column;
`;

export const Figure = styled.figure`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  height: 40px;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 30px;
  display: flex;
`;

export const Ul = styled.ul`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const A = styled(Link)`
  text-decoration: none;
  color: #b75d69;
  font-size: 22px;
  &:hover {
    color: #eacdc2;
    cursor: pointer;
    border-bottom: solid 1px #eacdc2;
  }
`;
