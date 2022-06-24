import React, { Component } from 'react';
import axios from 'axios'


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
      <div>
        <h1>Criar Playlist</h1>
        <h2>Digite o nome da sua Playlist</h2>
        <input placeholder='Nome'
        value={this.state.nome}
        onChange={this.addNome} ></input>
      <button onClick={this.fazerCadastro}>Adicionar Playlist</button>
      </div>
    )
  }
}
