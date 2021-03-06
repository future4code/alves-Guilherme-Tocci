import React, { Component } from "react";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuarios from "./components/TelaListaUsuarios";

export default class App extends Component {
  state = {
    telaAtual: "cadastro",
  };
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista} />;
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro} />;
      default:
        return <div>Erro! Página não encontrada +_+ </div>;
    }
  };
  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro" });
  };
  irParaLista = () => {
    this.setState({ telaAtual: "lista" });
  };

  render() {
    return <div>{this.escolheTela()}</div>;
  }
}
