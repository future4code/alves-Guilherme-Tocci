import React, { Component } from 'react'
import styled from 'styled-components'
const ChangeDiv = styled.div`
justify-content:center;
align-items: center;
display: flex;
flex-direction: column;
`
export default class Etapa3 extends Component {
  render() {
    return (
        <ChangeDiv>
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <p>5. Por que você não terminou um curso de graduação?</p>
        <input placeholder='Motivo de não concluir curso'/>
        <p>6. Você fez algum curso complementar?</p>
        <select>
            <option value="Nenhum">Nenhum</option>
            <option value="Curso técnico">Curso técnico</option>
            <option value="Curso de inglês">Curso de inglês</option>
            
            
        </select>
        
      </ChangeDiv>
    )
  }
}
