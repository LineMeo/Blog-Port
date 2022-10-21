import React from "react";
import { Link } from "react-router-dom";
import * as S from "../Components/Style/HeaderStyles";
import Logo from "../Components/Image/Logo-Port.png";

const Header = ({ rota, rota2, rota3 }) => {
  return (
    <S.Div>
      <S.Figure>
        <S.Img src={Logo} />
      </S.Figure>
      <S.Nav>
        <S.Ul>
          <li>
            <S.A to="/">{rota}</S.A>
          </li>
          <li>
            <S.A to="/About">{rota2}</S.A>
          </li>
          <li>
            <S.A to="/Works">{rota3}</S.A>
          </li>
        </S.Ul>
      </S.Nav>
    </S.Div>
  );
};

export default Header;
