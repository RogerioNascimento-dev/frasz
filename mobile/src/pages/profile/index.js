import React,{useContext} from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import PreferenceContext from '../../context/preferences';

import {
  Container,  
} from './styles';

const Profile = () => {
  const { changeDarkMode } = useContext(PreferenceContext); 
  

  const hanfleChangeDarkMode = () =>{
    changeDarkMode();
  }

  return (
      <Container>
          <Text>Perfil do usuário</Text>
          <TouchableOpacity onPress={hanfleChangeDarkMode}>
            <Text>Clique para Tema Dark</Text>
          </TouchableOpacity>
      </Container>
  );
}

export default Profile;