import React,{useContext,useEffect} from 'react';
import { Text,TouchableOpacity } from 'react-native';
import PreferenceContext from '../../context/preferences';
import AuthContext from '../../context/auth';
import AsyncStorage from '@react-native-community/async-storage';
import LogoMin from '../../assets/LogoMin.png';

import {
  Container,  
  ContainerImagePerfil,
  ImagePerfil,
  Craze,
  Name,  
  Biography
} from './styles';

const Profile = () => {
  const { changeDarkMode } = useContext(PreferenceContext); 
  const {user,signOut} = useContext(AuthContext);
 
  const hanfleChangeDarkMode = () =>{
    changeDarkMode();
  }

  const  handleTeste = async () =>{
    const storeDarkMode = await AsyncStorage.getItem('@RNfrasz:darkMode');
    console.log('no async storage agora é'+JSON.parse(storeDarkMode))
  }
  return (
      <Container>
        <ContainerImagePerfil>
          <Craze source={LogoMin} />
          <ImagePerfil source={{uri:user.image_profile}} />
          <TouchableOpacity onPress={hanfleChangeDarkMode}>
          <Name>{user.name}</Name>
          </TouchableOpacity>
          <Biography>"Formando em sistemas de informação, amante de programação.testando a quantidade de caracteres permiti."</Biography>
        </ContainerImagePerfil>
        
        <TouchableOpacity onPress={() => signOut()}>
          <Text>SAIR</Text>
        </TouchableOpacity>
      </Container>
      
  );
}

export default Profile;