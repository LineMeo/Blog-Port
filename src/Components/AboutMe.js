import React, { Component } from "react";
import * as S from "../Components/Style/HomeStyles.js";
import Photo from "../Components/Image/eu.jpg";
import GitHub from "../Components/Image/github.png";
import Instagram from "../Components/Image/insta.png";

export default class About extends Component {
  render() {
    return (
      <S.Div>
        <S.H1>** Bem Vindos Ao Meu Blog **</S.H1>
        <S.DivTwo>
          <S.Image src={Photo} alt="Logo" />
          <S.DivThree>
            <S.H2>
              Me chamo Aline Marques, tenho 30 anos e moro no Rio de Janeiro.
            </S.H2>
            <S.H2>
              Faço faculdade de Sistemas para Internet e sou estudante de
              Front-End no Vai na Web.
            </S.H2>
            <S.H2>
              Para saber um pouco sobre os trabalhos que fiz, clique em Works
            </S.H2>
            <S.Box>
              <S.A href="https://github.com/LineMeo" target="_blank">
                <S.Midia src={GitHub} />
              </S.A>
              <S.A href="https://www.instagram.com/aline.meo/" target="_blank">
                <S.Midia src={Instagram} />
              </S.A>
            </S.Box>
          </S.DivThree>
        </S.DivTwo>
      </S.Div>
    );
  }
}
