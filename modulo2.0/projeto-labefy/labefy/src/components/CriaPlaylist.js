import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Botao = styled.button`
    margin: 10px;
    width: 150px;
    height: 35px;
    border-radius: 10px;
    background-color: #2fab3d;
    border-color: #4B7ED1;
    color: white;
    :hover{
        top:-4px;
        box-shadow:0 4px 3px #999;
        background-color: white;
        color: #4B7ED1;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export default class CriaPlaylist extends Component {
    state = {
        nome : "", 
    }

   
    addNome=(e)=>{
        this.setState({nome: e.target.value });
    };
    fazerCadastro=()=>{
        const url='https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';
        const body={
            name:this.state.nome,
        };
        axios.post(url,body, {
            headers:{
                Authorization: "guilherme-tocci-alves"
            },
        }).then((resposta)=>{
            alert("Playlist cadastrada")
            this.setState({nome: "",})

        }).catch((erro)=>{
            alert(erro.response.data.message)
        });
    };


  render() {
    return (
      <Container>
        <Botao>Suas playlists</Botao>
        <h1>Criar Playlist</h1>
        <h2>Digite o nome da sua Playlist</h2>
        <input placeholder='Nome'
        value={this.state.nome}
        onChange={this.addNome} ></input>
      <Botao onClick={this.fazerCadastro}>Adicionar Playlist</Botao>
      </Container>
    )
  }
}
