import React from 'react'
import { useNavigate } from 'react-router-dom';
import foguete from '../Img/foguete2.mp4';
import styled from 'styled-components';

const Main = styled.div`
width: 100%;
height: 100vh;
`
const Content = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;

`

const RocketVideo = styled.video`
text-align: center;
align-items: center;
display: flex;
width: 100vw;
height: 100%;
object-fit: cover;

`
const Container = styled.div`
position: absolute;
color: white;
display: flex;
flex-direction:row;
`
const ButtonGoToLoguin = styled.button`
text-align: center;
align-items: center;
display: flex;

`

function HomePage() {
const navigate = useNavigate()
const GoToLoguinPage =()=>{
  navigate("/loguin")
}


  return (
    <Main>
      <Content >
      <RocketVideo src={foguete} autoPlay loop muted></RocketVideo>
      <h1>HomePage</h1>
      <Container>
      <ButtonGoToLoguin onClick={GoToLoguinPage}>Loguin</ButtonGoToLoguin>
      <ButtonGoToLoguin onClick={GoToLoguinPage}>Admin</ButtonGoToLoguin>
      </Container>
      </Content>
    </Main>
  )
}

export default HomePage