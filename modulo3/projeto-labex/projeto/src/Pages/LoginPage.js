import React from 'react';
import { useNavigate } from 'react-router-dom';
import {GoBackPage} from '../routes/Cordenator';
import {  useState } from "react";
import { BASE_URL } from "../components/BaseURL";
import axios from 'axios';
import styled from 'styled-components';


const H1Estilizado=styled.h1`
color: white;
`
const BotaoEstilizado = styled.button`

text-align: center;
justify-content: center;
margin-top: 10px;
margin-right:2px;
border-radius: 50px;
width: 150px;
padding: 10px;
margin: 10px;
background-color: white;
color: #995C32;
border-color: #995C32;
`
const Input = styled.input`
  width: 100%;
  margin: 5px;
  padding: 5px;
  display: flex;
  padding: 0px 32px 1px 16px;
  height:4vh ;
  @media(min-width: 375px) and (max-width:765px){
    width: 80%;
  }
`;

const Container2 = styled.div`
text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 5%;
  background-color: #995c32;
  width: 35%;
  border-radius: 15px;
  height: 50vh;
  @media(min-width: 375px) and (max-width:765px){
  width: 90%;
  height: 96vh;

  }
`
const Container = styled.div`
display: flex;
justify-content: center;
text-align: center;

`

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const onChangeEmail =(event)=>{
    setEmail(event.target.value)
  };
  const onChangePassword =(event)=>{
    setPassword(event.target.value)
  };
  

  const OnSubmitLogin =(event)=>{
    event.preventDefault()

    console.log(email,password)
    const body = {
      email: email,
      password: password
    }
  
    axios.post(`${BASE_URL}login`,body) 
   .then((response)=>{
      console.log('Deu certo :', response.data);
      localStorage.setItem('token', response.data.token);
      navigate("/admin")
      
    })
    .catch((error)=>{
      console.log('Deu errado :', error.response)
    })
  };


  return (
    <Container>
      <Container2>
    <H1Estilizado>LoginPage</H1Estilizado>  
    <form onSubmit={OnSubmitLogin}>
    <Input name='email' type='email' required placeholder='email' value={email} onChange={onChangeEmail}></Input>
    <Input name='password' type='password' required placeholder='senha' value={password} onChange={onChangePassword}></Input>
    <BotaoEstilizado onClick={()=>GoBackPage(navigate)}>Voltar</BotaoEstilizado>
    <BotaoEstilizado>Login</BotaoEstilizado>
    </form>
    </Container2>
    </Container>
  )
}

export default LoginPage