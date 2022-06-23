import React, { Component } from 'react'
import styled from 'styled-components'
const ChangeDiv = styled.div`
justify-content:center;
align-items: center;
display: flex;
flex-direction: column;
`
export default class Etapa2 extends Component {
  render() {
    return (
      <ChangeDiv>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <p>5.Qual curso?</p>
        <input placeholder='Seu curso'/>
        <p>6.Qual a unidade de ensino?</p>
        <input placeholder='Unidade de ensino'/>
      </ChangeDiv>
    )
  }
}

