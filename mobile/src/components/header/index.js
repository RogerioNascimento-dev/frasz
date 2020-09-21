import React,{useContext,useState,useEffect} from 'react';
import logoHeader from '../../assets/LogoMin.png';
import AuthContext from '../../context/auth';
import {useNavigation} from '@react-navigation/native';

import {
  Container,LogoMiniHeader,
  Welcome,TextNameUser,ContainerNameUser } from './styles';

const header = () => {
    const {user} = useContext(AuthContext);
    const navigation  = useNavigation();
  return (
      <Container>
          <LogoMiniHeader source={logoHeader} />
          <ContainerNameUser onPress={() =>navigation.navigate('Profile')}>
            <Welcome>Bem vindo,</Welcome>                   
            <TextNameUser>{user.name}</TextNameUser>               
          </ContainerNameUser>
      </Container>
  );
}

export default header;