import React from 'react'
import { useNavigate } from 'react-router-dom';
import foguete from '../Img/1.mp4';
import styled from 'styled-components';
import {GoToLoguin,GoToTrips} from '../routes/Cordenator';
import img1 from '../Img/insta.png';
import img2 from '../Img/twitter.png';
import img3 from '../Img/f2.png'


const FooterHome = styled.div`
justify-content: center;
align-items: center;
text-align: center;

`

const SocialIcons=styled.img`
width: 5%;
@media(min-width: 375px) and (max-width:765px){
width: 15%;
}
`

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
width: 100%;
height: 100%;
object-fit: cover;
`
const Container = styled.div`
position: absolute;
color: white;
display: flex;
flex-direction:row;
`
const BotaoEstilizado = styled.button`
justify-content: center;
text-align: center;
align-items: center;
display: flex;
border-radius: 50px;
    width: 150px;
    padding: 10px;
    margin: 10px;
    background-color: white;
    color: #995C32;
    border-color: #995C32;
`

function HomePage() {
const navigate = useNavigate()


  return (
    <Main>
      <Content >
      <RocketVideo src={foguete} autoPlay loop muted></RocketVideo>
      <FooterHome>
      <SocialIcons src={img1}></SocialIcons>
      <SocialIcons src={img2}></SocialIcons>
      <SocialIcons src={img3}></SocialIcons>
      </FooterHome>
      <Container>
      <BotaoEstilizado onClick={()=>GoToTrips(navigate)}>Viagens</BotaoEstilizado>
      <BotaoEstilizado onClick={()=>GoToLoguin(navigate)}>Login</BotaoEstilizado>
      </Container>
      </Content>
    </Main>
  )
}

export default HomePage