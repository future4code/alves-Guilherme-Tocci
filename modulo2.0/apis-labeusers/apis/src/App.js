import React, { Component } from 'react'
import axios from 'axios';

export default class App extends Component {
  state = {
    usuario: '',
    email: '',
    logado: false,
    usuarios:[]
  }
 
  addUser = () => {
    const body = {
      name: this.state.usuario,
      email: this.state.email
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "guilherme-tocci-alves",
          },
        }
      )
      .then((response) => {
        alert("Usuário cadastrado");
      })
      .catch((erro) => {
        console.log(erro.response.data);
        alert(erro.response.data.message)
      });
  };
  showUsers=()=>{
    
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        
        {
          headers: {
            Authorization: "guilherme-tocci-alves",
          },
        }
      )
      .then((response) => {
         this.setState({usuarios: response.data })
       console.log(response.data)
      })
      .catch((erro) => {
        console.log(erro.response.data);
        
      });

  }

  setNameUser = (event) => {
    this.setState({ usuario: event.target.value });
  };
  setEmailUser = (event) => {
    this.setState({ email: event.target.value });
  };
  trocaTela = () => {
    this.setState({logado:!this.state.logado})
    this.showUsers()
  }
  deletarUsuario = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        
        {
          headers: {
            Authorization: "guilherme-tocci-alves",
          },
        }
      )
      .then((response) => {
        this.showUsers()
       console.log(response.data)
       alert("Usuário deletado")
      })
      .catch((erro) => {
        console.log(erro.response.data);
        alert(erro.response.data.message)
        
      });
  }

  render() {
    let userInterface
    if(this.state.logado === false){
      userInterface =
      <div>
      
        <label>Nome de Usuário</label>
        <input value ={this.state.usuario} onChange ={this.setNameUser} placeholder='Usuário' />
        <label>Nome de Email</label>
        <input value ={this.state.email} onChange ={this.setEmailUser} placeholder='Email'/>
        <button onClick={()=>{this.addUser()}}>Cadastrar</button>
      </div>
      }else{
        userInterface=
        <div>
        <ul>
          
        {this.state.usuarios.map((usuario)=>{
          return <li> {usuario.name} <button onClick={()=>this.deletarUsuario(usuario.id)} >Deletar Usuário</button></li>
        })}
          
        </ul>
        <button onClick={()=>this.trocaTela()}>Voltar</button>
        </div>
      }
    return (
      <div>
        <button onClick={()=>{this.trocaTela()}}>Trocar de tela</button>
        {userInterface}
      </div>
    )
  }
}
