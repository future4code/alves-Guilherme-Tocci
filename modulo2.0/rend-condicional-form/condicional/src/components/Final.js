import React, { Component } from 'react'
import styled from 'styled-components'
const ChangeDiv = styled.div`
justify-content:center;
align-items: center;
display: flex;
flex-direction: column;
`
export default class Final extends Component {
  render() {
    return (
      <ChangeDiv>
        <h2>O FORMULÁRIO ACABOU</h2>
        <p>Muito obrigado por participar! Entraremos em contato!</p>

      </ChangeDiv>
    )
  }
}
