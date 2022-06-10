import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {  
  state = {
    pessoas: [
      {
        nomeUsuario:"Rick",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150"
      },
      {
        nomeUsuario:"Guilherme",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150"
      },
      {
        nomeUsuario:"Tuba",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150"
      }

    ]
  }
  render() {
    return (
      <MainContainer>
        <Post
        
          
        />
         <Post
          
        />
         <Post
          
        />
      </MainContainer>
    );
  }
}

export default App;
