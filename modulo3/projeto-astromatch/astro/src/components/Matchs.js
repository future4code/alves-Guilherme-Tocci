import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const imagemMatch = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 100%;
`;

function Matchs() {
  const [match, setMatch] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = function () {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guitocci/matches"
      )
      .then((response) => {
        setMatch(response.data.matches);
      })
      .catch((error) => {
        setMatch(error.message);
      });
  };
  const clearMatches = function () {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guitocci/clear"
      )
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Matches</h2>
      <button
        onClick={() => {
          clearMatches();
        }}
      >
        Limpar Matches
      </button>
      {match.map((match) => {
        return (
          <div>
            <img src={match.photo} alt={match.photo_alt}></img>
            <h2>
              {match.name},{match.age}
            </h2>
            <p>{match.bio}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Matchs;
