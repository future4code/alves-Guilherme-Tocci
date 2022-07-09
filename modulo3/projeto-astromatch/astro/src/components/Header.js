import React, { useState, useEffect } from "react";


function Header(props) {
  return (
    <div >
      <h1>Astromatch</h1>
      <button onClick={props.trocaTela}>Ir para Matches</button>
      <hr></hr>
      
    </div>
  );
}

export default Header;
