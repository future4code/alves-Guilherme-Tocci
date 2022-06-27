import React, { Component } from 'react';
import axios from "axios" 
import styled from "styled-components";

export default class Playlists extends Component {
state = {
    Playlists: [],
    musicas: [],
        telas: 1,
        nome: '',
        artista: '',
        url: '',
        idPlaylist: '',
        title: ''
}

pegaPlaylist = ()=>{
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
  axios.get(url,{
    headers:{
      Authorization:"guilherme-tocci-alves"
  }
  }).then((res)=>{
    this.setState({playlist: res.data.result.list})
})
.catch((err)=>{
    alert("Ocorreu um problema,tente novamente")
})
  
}

  render() {
    return (
      <div>Playlists</div>
    )
  }
}
