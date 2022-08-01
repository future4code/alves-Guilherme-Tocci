import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../components/BaseUrl";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
margin-top: 20%;
`
const Formulary = styled.form`
width: 50vh;
align-self: center;
justify-content: center;

`
const P = styled.p`
text-overflow: ellipsis;
justify-content: center;
text-align: center;
display: flex;


`
const Input1 = styled.input`
width: 70%;
border: 1px solid #D5D8DE;
border-radius: 4px;
  margin: 10px;
  padding: 2% 9% 3% 2%;
  display: flex;
 
  height:4vh ;
  margin-top: 20%;
`
const Input2 = styled.input`
width: 70%;
border: 1px solid #D5D8DE;
border-radius: 4px;
  margin: 10px;
  padding: 2% 9% 3% 2%;
  display: flex;
 
  height:4vh ;
  
`
const Input3 = styled.input`
width: 70%;
border: 1px solid #D5D8DE;
border-radius: 4px;
  margin: 10px;
  padding: 2% 9% 3% 2%;
  display: flex;
 
  height:4vh ;
  
`
const Button1 = styled.button`

display: flex;
justify-content: center;
align-items: center;
padding:10px;
width: 270px;
height: 51px;
margin: 10px;
background-color: #FE7E02;
border-radius: 28px;
color: white;

`

function SignUpPage() {
  const navigate = useNavigate();
  const [form, handleInputChange] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const OnSubmitSignUp = (event) => {
    event.preventDefault();

    axios
      .post(`${BASE_URL}users/signup`, form)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/feed");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <h1>Olá, boas vindas ao LabEddit ;)</h1>
      < Formulary onSubmit={OnSubmitSignUp}>
        <Input1
          name="username"
          type="user"
          placeholder="Nome de usuário"
          value={form.username}
          onChange={handleInputChange}
        ></Input1>
        <Input2
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleInputChange}
        ></Input2>
        <Input3
          name="password"
          type="password"
          placeholder="Senha"
          value={form.password}
          onChange={handleInputChange}
        ></Input3>
        <P>Ao continuar,você concorda com<br></br> o nosso Contrato de usuário e <br></br>nossa Política de privacidade</P>
       
        <Button1>Cadastrar</Button1>
      </ Formulary>
    </Container>
  );
}
export default SignUpPage;
