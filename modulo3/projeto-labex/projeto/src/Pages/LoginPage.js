import React from 'react';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const navigate = useNavigate()

const GoToHomePage =()=>{
  navigate("/")
}
const GoBackPage =()=>{
  navigate(-1)
  
}

  return (
    <div>
    <h1>LoginPage</h1>  
    <button onClick={GoToHomePage}>Home</button>
    <button onClick={GoBackPage}>Voltar</button>
    
    </div>
  )
}

export default LoginPage