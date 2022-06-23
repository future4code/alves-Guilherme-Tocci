import React, { Component } from "react";
import axios from "axios" 
import styled from "styled-components";

const CardUsuario = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
justify-content: space-between;
display: flex;
`

export default class TelaListaUsuarios extends Component {
    state = {
        usuarios: []
    }
    
    componentDidMount(){
        this.pegarUsuarios()
    }

    pegarUsuarios =()=>{
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url,{
            headers:{
                Authorization:"guilherme-tocci-alves"
            }
        })
        .then((res)=>{
            this.setState({usuarios: res.data})
        })
        .catch((err)=>{
            alert("Ocorreu um problema,tente novamente")
        })
    }
    deletarUsuario =(id)=>{
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
       axios.delete(url,{
        headers:{
        Authorization:"guilherme-tocci-alves"
       }
    })
    .then((res)=>{
        alert("Usuário Deletado")
        this.pegarUsuarios()
        
    })
    .catch((err)=>{
        alert("Ocorreu um erro, tente novamente")
    })
    
    }

  render() {
    
    const listaUsuarios = this.state.usuarios.map((user)=>{
        return (<CardUsuario key={user.id}>
            {user.name}
            <button onClick={()=> this.deletarUsuario(user.id)}>x</button>
            </CardUsuario>
        )

    })

    return (
      <div>
        <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
        <h2>TelaListaUsuarios</h2>
        {listaUsuarios}
      </div>
    );
  }
}
