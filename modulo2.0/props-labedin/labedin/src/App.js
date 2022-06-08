import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPerfil from './imagens/fotoPerfil.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemPerfil} 
          nome="Guilherme" 
          descricao="Oi, eu sou o Guilherme. Sou aluno da Labenu. Adoro aprender novas tecnologias  de desenvolvimento."
        />
        
        <ImagemButton 
          imagem="https://media.istockphoto.com/photos/magnifier-glass-picture-id519752711?k=20&m=519752711&s=612x612&w=0&h=M7gaTpFY9vAElsKR0gBfFRZ99QvUSOgnBpHHMtlVes8=" 
          texto="Ver mais"
        />        
      </div>
      <div className="page-section-container">
      <CardPequeno
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb27t3Hf6TiN35Na5CF1oGwPsdKPGeGoofTw&usqp=CAU"
          categoria="Email :"
          informacao="gt-267@hotmail.com"
          
        />
        
        <CardPequeno
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZYG4CfRGkaOgkJT-a_2rKeivl8tWrY3xjg&usqp=CAU "
          categoria="Endereço :"
          informacao="Brasil,Brasília-DF/Taguatinga, rua 06 chácara 267 casa 16A"
          
        />


      </div>
      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Atualmente cursando o Full Stack Web, estou no módulo front-end e as tecnologias aprendidas até o momento são: Html5, Css3, JavaScript e React." 
        />
        
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/174/174881.png" 
          nome="Freelancer WordPress" 
          descricao="Já desenvolvi diversos sites utilizando o wp como lojas virtuais,landing pages e um sistema de aulas EAD." 
        />
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGO4F9WY3a9iZ_7pPZ-4PRaM7_Tk1FcQUCKg&usqp=CAU" 
          nome="Professor de Ciências Biológicas" 
          descricao="Formado pela faculdade LS educacional em 2021, trabalhei como professor no colégio Futuro Vip onde desenvolvi várias habilidades pedagógicas." 
        />
      </div>
      

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
