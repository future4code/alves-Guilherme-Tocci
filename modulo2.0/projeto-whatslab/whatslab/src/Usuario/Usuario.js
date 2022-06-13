import React from "react";
import styled from "styled-components";

const BoxDeTexto = styled.div`
border: 1px solid;
border-color:black;
width: 50%;
height: 50vh;
`
const AlteraBotao = styled.button`
width: 20vh;
`




export default class Usuario extends React.Component{
state = {
    valueUsuario:'',
    valueComentario:'',
    arrayMensagens:[],
}
onChangeUsuario=(event)=>{
    this.setState({valueUsuario:event.target.value})
}

onChangeComentario=(event)=>{
    this.setState({valueComentario:event.target.value})
}
onClickBotao=()=>{
     this.setState({valueComentario : ''})
     this.setState({valueUsuario : ''})
     this.setState ({arrayMensagens: [...this.state.arrayMensagens,<li>{this.state.valueUsuario} :{this.state.valueComentario}</li>]})
     console.log(this.state.arrayMensagens)
}


    render(){
    return(
        
        <BoxDeTexto>
        <ul>
           {this.state.arrayMensagens}
        </ul>
        <input value={this.state.valueUsuario} onChange={this.onChangeUsuario} placeholder='Nome de Usuário'/>
        <input value={this.state.valueComentario} onChange={this.onChangeComentario} placeholder='Comentário'/>
        <AlteraBotao onClick={this.onClickBotao}>Enviar</AlteraBotao>
        </BoxDeTexto>
        

    );
}
}