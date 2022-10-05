import React, { Component } from "react";
import * as S from "../Components/Style/HomeStyles.js";

export default class Home extends Component {
  render() {
    return (
      <S.Divi>
        <S.H1>** Bem Vindos Ao Meu Blog **</S.H1>
        <S.H2>Para saber um pouco sobre mim, clique em About</S.H2>
        <S.H2>
          Para saber um pouco sobre os trabalhos que fiz, clique em Works
        </S.H2>
        <S.H2>Pa saber um pouco sobre onde moro, clique em Onu</S.H2>
      </S.Divi>
    );
  }
}
