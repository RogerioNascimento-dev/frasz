import React,{useContext} from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import PreferenceContext from '../../context/preferences';

import {
  Container,  
  TextTeste
} from './styles';

const Profile = () => {
  const { changeDarkMode } = useContext(PreferenceContext); 
  

  const hanfleChangeDarkMode = () =>{
    changeDarkMode();
  }

  return (
      <Container>
          <TextTeste>Perfil do usuário</TextTeste>
          <TouchableOpacity onPress={hanfleChangeDarkMode}>
            <TextTeste>Clique para Tema Dark</TextTeste>
          </TouchableOpacity>
      </Container>
  );
}

export default Profile;