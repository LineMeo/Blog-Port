import React from "react";
import { Link } from "react-router-dom";
import * as S from "../Components/Style/HeaderStyles";

const Header = ({ rota, rota2, rota3, rota4 }) => {
  return (
    <S.Div>
      <S.Nav>
        <S.Ul>
          <S.Li>
            <S.A to="/">{rota}</S.A>
          </S.Li>
          <S.Li>
            <S.A to="/About">{rota2}</S.A>
          </S.Li>
          <S.Li>
            <S.A to="/Works">{rota3}</S.A>
          </S.Li>
          <S.Li>
            <S.A to="/Onu">{rota4}</S.A>
          </S.Li>
        </S.Ul>
      </S.Nav>
    </S.Div>
  );
};

export default Header;
