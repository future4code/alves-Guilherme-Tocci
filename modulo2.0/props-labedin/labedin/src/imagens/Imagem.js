import React from 'react';
import './imagem.css'

function ImagemPerfil (props){
    return(
        <div className="imagem-perfil">
            <img src={props.imagem}/>
        </div>
    )

}
export default ImagemPerfil;