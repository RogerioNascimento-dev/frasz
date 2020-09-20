import React,{useContext} from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import PreferenceContext from '../../context/preferences';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,  
  TextTeste
} from './styles';

const Profile = () => {
  const { changeDarkMode } = useContext(PreferenceContext); 
  

  const hanfleChangeDarkMode = () =>{
    changeDarkMode();
  }

  const  handleTeste = async () =>{
    const storeDarkMode = await AsyncStorage.getItem('@RNfrasz:darkMode');
    console.log('no async storage agora é'+JSON.parse(storeDarkMode))
  }
  return (
      <Container>
        <TouchableOpacity onPress={handleTeste}>
          <TextTeste>Perfil do usuário</TextTeste>
          </TouchableOpacity>
          <TouchableOpacity onPress={hanfleChangeDarkMode}>
            <TextTeste>Clique para Tema Dark</TextTeste>
          </TouchableOpacity>
      </Container>
  );
}

export default Profile;