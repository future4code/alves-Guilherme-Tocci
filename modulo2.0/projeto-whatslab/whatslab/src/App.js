import React from "react";
import Usuario from "./Usuario/Usuario";
import styled from "styled-components";


const BoxApp = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;

`


function App() {
  return (
    <BoxApp>
     <Usuario/>
    </BoxApp>
  );
}

export default App;
