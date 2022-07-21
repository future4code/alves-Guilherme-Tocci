import React, { useEffect, useState } from "react";
import { BASE_URL } from "../components/BaseURL";
import { useNavigate } from "react-router-dom";
import { GoBackPage, GoToHomeApplication } from "../routes/Cordenator";
import axios from "axios";
import styled from "styled-components";

const Background = styled.div`

`
const TripCard1 = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const TripCard2 = styled.div`
background-color: #995c32;
color: white;
  text-align: center;
  border: 1px solid black;
  width: 50%;
  margin-top:10px;
  @media(min-width: 375px) and (max-width:765px){
width: 90%;
  }
 
`;
const CardButton = styled.div`
  display: inline-flex;
 
`;

function ListTripsPage() {
  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);
  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = function () {
    axios
      .get(`${BASE_URL}trips`)
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocorreu um erro, por favor atualize a página ou entre em contato conosco");
      });
  };

  return (
    <Background>
    <TripCard1>
      <h1>Lista de Viagens</h1>
      <CardButton>
        <button onClick={() => GoBackPage(navigate)}>Voltar</button>
        <button onClick={() => GoToHomeApplication(navigate)}>Inscreva-se</button>
      </CardButton>
      {trips.map((trip) => {
        return (
          <TripCard2>
            <p>Planeta : {trip.planet}</p>
            <p>Nome : {trip.name}</p>
            <p>Descrição : {trip.description}</p>
            <p>Duração  : {trip.durationInDays} dias</p>
            <p>Data : {trip.date}</p>
            <p>Código da viagem : {trip.id}</p>
          </TripCard2>
        );
      })}
    </TripCard1>
    </Background>
  );
}

export default ListTripsPage;
