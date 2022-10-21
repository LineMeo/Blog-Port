import React, { Component } from "react";
import * as S from "../Components/Style/HomeStyles.js";
import Photo from "../Components/Image/eu.jpg";

export default class Home extends Component {
  render() {
    return (
      <S.Div>
        <S.H1>** Bem Vindos Ao Meu Blog **</S.H1>
        <S.DivTwo>
          <S.Image src={Photo} alt="Logo" />
          <S.DivThree>
            <S.H2>
              Me chamo Aline e estou estudando para ser Desenvolvedora
              Front-End.
            </S.H2>
          </S.DivThree>
        </S.DivTwo>
      </S.Div>
    );
  }
}
