import axios from 'axios';
import React from 'react';
import {useEffect} from 'react';
import { BASE_URL } from '../components/BaseURL';
import { useNavigate } from 'react-router-dom';

const useProtectPage =()=>{
  
  const navigate = useNavigate();
  
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token===null){
  console.log('não está logado')
  navigate("/login")
    }
  },[])
}

export const TripDetailsPage =()=> {
  useProtectPage()
  useEffect(()=>{
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}trip`, {
      headers: {
        auth: token
      }
    }).then((response)=>{
    console.log( response.data)
  })
  .catch((error)=>{
    console.log(error.response)
  })
},[])
  return (
    <div>TripDetailsPage</div>
  )
}

export default TripDetailsPage