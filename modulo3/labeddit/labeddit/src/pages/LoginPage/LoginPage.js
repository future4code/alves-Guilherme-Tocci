import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../../components/BaseUrl";
import useForm from "./../../hooks/useForm";
import { GoToSignUp } from "../../routes/Coordenator";
import {Button} from "@material-ui/core";
import logo from "../../assets/logo.png"

const Formulary = styled.form`
width: 50vh;
align-self: center;
justify-content: center;
text-align: center;

`
const Logo = styled.img`
width: 10vh;
align-self: center;
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
margin-top: 20%;
`
const Input1 = styled.input`
width: 65vw;
border: 1px solid #D5D8DE;
border-radius: 4px;
  margin: 15px;
  padding: 2% 9% 3% 2%;
  display: flex;
 
  height:4vh ;
  margin-top: 20%;
`
const Input2 = styled.input`
width: 65vw;
border: 1px solid #D5D8DE;
border-radius: 4px;
  margin: 15px;
  padding: 2% 9% 3% 2%;
  display: flex;
  height:4vh ;
`
const Button1 = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding:10px;
width: 76vw;
height: 51px;
margin: 10px;
background-color: #FE7E02;
border-radius: 28px;
color: white;

`
const Button2 = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding:10px;
width: 76vw;
height: 51px;
margin: 10px;
border-radius: 28px;
color: #FE7E02;
border-color: #FE7E02;
background-color: white;

`
const Hr = styled.hr`
width: 85%;

`


function LoginPage() {
  const navigate = useNavigate();
  const [form, handleInputChange] = useForm({ email: "", password: "" });

  const OnSubmitLogin = (event) => {
    event.preventDefault();

    axios
      .post(`${BASE_URL}users/login`, form)
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
      <Logo src={logo}></Logo>
      <h1>LabEddit</h1>
      <p>O projeto de rede social da Labenu</p>
      <Formulary onSubmit={OnSubmitLogin}>
        <Input1
          name="email"
          type="email"
          placeholder="email"
          value={form.email}
          onChange={handleInputChange}
        ></Input1>
        <Input2
          name="password"
          type="password"
          placeholder="senha"
          value={form.password}
          onChange={handleInputChange}
          ></Input2>
        <Button1 >Login</Button1>
          <Hr/>
        <Button2  onClick={()=> GoToSignUp(navigate)}>Cadastrar</Button2>
      </Formulary>
    </Container>
  );
}
export default LoginPage;
