import React from 'react';
import { useNavigate } from 'react-router-dom';
import {GoBackPage,GoToHomePage} from '../routes/Cordenator';
import {  useState } from "react";
import { BASE_URL } from "../components/BaseURL";
import axios from 'axios';



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
    <div>
    <h1>LoginPage</h1>  
    <button onClick={()=>GoToHomePage(navigate)}>Home</button>
    <button onClick={()=>GoBackPage(navigate)}>Voltar</button>
    <form onSubmit={OnSubmitLogin}>
    <input name='email' type='email' required placeholder='email' value={email} onChange={onChangeEmail}></input>
    <input name='password' type='password' required placeholder='senha' value={password} onChange={onChangePassword}></input>
    <button>Login</button>
    </form>
    
    </div>
  )
}

export default LoginPage