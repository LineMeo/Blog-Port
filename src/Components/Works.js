import React, { Component } from "react";
import * as S from "../Components/Style/HomeStyles.js";

export default class Works extends Component {
  render() {
    return (
      <S.Div>
        <S.H1>Works</S.H1>
        <S.DivTwo>
          <a href="linemeo.github.io/Desafio---Login-LOL/" target="_blank">
            <S.H2>Desafio Calculadora</S.H2>
          </a>
        </S.DivTwo>
      </S.Div>
    );
  }
}
