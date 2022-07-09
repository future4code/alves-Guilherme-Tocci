import React, { useState } from "react";
import Matchs from "./components/Matchs";
import Perfil from "./components/Perfil";
import Header from "./components/Header";
import styled from "styled-components";


export default function App() {
  const [tela, setTela] = useState(false);
  let telas;
  function trocaTela() {
    setTela(!tela);
  }

  if (tela) {
    telas = (
      <div>
        <Header trocaTela={trocaTela} />
        <Matchs />
      </div>
    );
  } else {
    telas = (
      <div>
        <Header trocaTela={trocaTela} />
        <Perfil />
      </div>
    );
  }

  return <div>{telas}</div>;
}
