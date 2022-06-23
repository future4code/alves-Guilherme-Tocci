import React from 'react';
import styled from 'styled-components';

const ContainerPequeno = styled.div`
 display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`
const ImagemPequena = styled.img`
width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`

function CardPequeno(props){
    return(
        <ContainerPequeno>
            <ImagemPequena src={props.imagem}/>
            <div>
                <h4>{props.categoria}</h4>             
                <p>{props.informacao}</p>

            </div>
        </ContainerPequeno>

        
    )
}
export default CardPequeno
