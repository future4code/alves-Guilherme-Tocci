import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../components/BaseURL";
import {GoBackPage} from '../routes/Cordenator';
import useForm from "../Hooks/useForm";



const BotaoEnviar = styled.button`
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
const Select=styled.select`
width: 100%;
  margin: 5px;
  padding: 5px;
  display: flex;
  padding: 0px 32px 1px 16px;
  height:4vh ;

`
const H1Estilizado=styled.h1`
color: white;
`
const Container = styled.div`
display: flex;
justify-content: center;
`
const Formulario = styled.div`
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

  
`;
const Input = styled.input`
  width: 100%;
  margin: 5px;
  padding: 5px;
  display: flex;
  padding: 0px 32px 1px 16px;
  height:4vh ;
  @media(min-width: 375px) and (max-width:765px){
    width: 70%;
  }
`;

function ApplicationFormPage() {
  const [tripID, setTripID] = useState();
  const navigate = useNavigate();
  const [trip, setTrip] = useState();
  const {form, onChange, cleanFields} = useForm({
  name: '',
  age: '',
  applicationText: '',
  profession: '',
  country: ''});

  const sendForm = (event) => {
    event.preventDefault();
    console.log(form)

    axios.post(`${BASE_URL}trips/${tripID}/apply`, form)
    .then(()=>{
      alert('Dados cadastrados com sucesso ! Aguarde nossa avaliação')
      cleanFields()
    })
    .catch(()=>{
      alert('Dados incorretos, tente novamente')
    })
  };

  
  useEffect(() => {
    getTrip();
  }, [trip]);

  const getTrip = function () {
    axios
      .get(`${BASE_URL}trips`)
      .then((response) => {
        setTrip(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocorreu um erro, por favor atualize a página ou entre em contato conosco");
      });
  };
  const selectId = (event)=>{
  setTripID(event.target.value)
  };
  const requisition = () => {
    if (trip && trip.length > 0) {
      return trip.map((trip) => {
        return (
          <option value={trip.id} key={trip.id}>
            {trip.name}
          </option>
        );
      });
    } else if (trip?.length === 0) {
      return trip.map((trip) => {
        return (
          <option value="Sem viagens" key={trip.id}>
            Sem viagens
          </option>
        );
      });
    }
  };
  const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"]
  return (
    <Container>
    
      <Formulario>
        <H1Estilizado H1Estilizado>Formulário de inscrição</H1Estilizado>
        <form onSubmit={sendForm}>
          <Select onChange={selectId}>
           <option>Selecione uma viagem </option>
            {requisition()}
          </Select>
          <Input name='name' type='text' onChange={onChange} placeholder="Nome"></Input>
          <Input name='age' type='number' onChange={onChange} placeholder="Idade"></Input>
          <Input name='applicationText' type='text' onChange={onChange}placeholder="Texto de Canditura"></Input>
          <Input name='profession' type='text' onChange={onChange} placeholder="Profissao"></Input>
          <Select name='country' placeholder="Escolha um país" value={form.country} onChange={onChange}>
          {countries.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
	
</Select>
          
          
          <BotaoEnviar>Enviar</BotaoEnviar>
          <BotaoEnviar onClick={()=>GoBackPage(navigate)}>Voltar</BotaoEnviar>
        </form>
      </Formulario>
      
    </Container>
  );
}

export default ApplicationFormPage;
