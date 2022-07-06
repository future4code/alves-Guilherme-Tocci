import React, { useState, useEffect } from "react";
import styled from "styled-components";

const headerEstilizado = styled.div`


`
function Header(props) {
  return (
    <headerEstilizado >
      <h1>Astromatch</h1>
      <button>Ir para Matches</button>
      <hr></hr>
      
    </headerEstilizado>
  );
}

export default Header;
