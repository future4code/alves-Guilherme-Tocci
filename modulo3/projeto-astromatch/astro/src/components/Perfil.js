import React, {useState, useEffect}from 'react';
import axios from 'axios';
import Header from './Header';

function Perfil() {

    const [perfil,setPerfil] = useState ({})

useEffect(()=>{
    getProfiletoChoose('gui')
},[])

const getProfiletoChoose = function (aluno){
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
    .then((response)=>{
        setPerfil(response.data.profile)
        console.log(response.data.profile)
    })
    .catch(error => {
        console.log(error.message)
    })
}

  return (
    <div>
       <Header/>
        <h2>Perfil</h2>
        <img src={perfil.photo}alt ={perfil.photo_alt}></img>
        <p>{perfil.name},{perfil.age}</p>
        <p>{perfil.bio}</p>
        <button onClick={()=>getProfiletoChoose('gui')}>Próximo</button>

    </div>
  )
}

export default Perfil