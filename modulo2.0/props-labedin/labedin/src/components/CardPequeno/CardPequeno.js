import React from 'react';
import './CardPequeno.css';
import styled from 'styled-components';

const ContainerPequeno = styled.div`
 display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

function CardPequeno(props){
    return(
        <div className='smallcard-container '>
            <img src={props.imagem}/>
            <div>             
                <p>{props.informacao}</p>
            </div>
        </div>

        
    )
}
export default CardPequeno
