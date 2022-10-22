import React, { Component } from "react";
import * as S from "../Components/Style/WorksStyles.js";

export default class Works extends Component {
  render() {
    return (
      <S.Div>
        <S.H1>Works</S.H1>
        <S.DivTwo>
          <S.A href="https://n31wsk.csb.app/" target="_blank">
            <S.H2>Desafio Calculadora</S.H2>
          </S.A>
          <S.A href="https://ob9oe7.csb.app/" target="_blank">
            <S.H2>Desafio Contador</S.H2>
          </S.A>
          <S.A href="https://challengelol.netlify.app" target="_blank">
            <S.H2>Desafio LOL</S.H2>
          </S.A>
          <S.A href="https://linemeo.github.io/Crespos/" target="_blank">
            <S.H2>Desafio Crespos</S.H2>
          </S.A>
          <S.A href="https://portflowchallenge.netlify.app" target="_blank">
            <S.H2>Desafio PortFlow</S.H2>
          </S.A>
          <S.A href="https://wl3msi.csb.app/" target="_blank">
            <S.H2>Desafio Hary Potter Api</S.H2>
          </S.A>
          <S.A href="https://aline-meo2.netlify.app" target="_blank">
            <S.H2>Desafio GamaAcademy</S.H2>
          </S.A>
        </S.DivTwo>
      </S.Div>
    );
  }
}
