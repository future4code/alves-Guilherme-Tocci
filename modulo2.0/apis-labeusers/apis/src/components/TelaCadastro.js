import React, { Component } from "react";
import axios from "axios";
import { ThemeConsumer } from "styled-components";

export default class TelaCadastro extends Component {
  state = {
    nome: "",
    email: "",
  };
  handleNome = (e) => {
    this.setState({ nome: e.target.value });
  };
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  fazerCadastro = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };
    axios.post(url, body, {
        headers: {
          Authorization: "guilherme-tocci-alves"
        },
      })
      .then((res) => {
        alert("Usuário cadastrado")
        this.setState({nome:"",email:"",})
      })
      .catch((err) => {
        alert(err.response.data.message)
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.props.irParaLista}>
          Ir para lista de Usuários
        </button>
        <h2>Cadastro</h2>
        <input
          placeholder={"Nome"}
          value={this.state.nome}
          onChange={this.handleNome}
        />

        <input
          placeholder={"Email"}
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <button onClick={this.fazerCadastro}>Cadastrar</button>
      </div>
    );
  }
}
