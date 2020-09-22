import React,{useContext} from 'react';
import { Text,TouchableOpacity } from 'react-native';

import AuthContext from '../../context/auth';

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
  const {user,signOut} = useContext(AuthContext);
     
  return (
      <Container>
        <ContainerImagePerfil>
          <Craze source={LogoMin} />
          <ImagePerfil source={{uri:user.image_profile}} />          
          <Name>{user.name}</Name>          
          <Biography>"Algumas palavras sobre mim."</Biography>
        </ContainerImagePerfil>        
        
      </Container>
      
  );
}

export default Profile;