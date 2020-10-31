import React,{useContext} from 'react';
import { FontAwesome} from "@expo/vector-icons";
import LogoMin from '../../assets/LogoMin.png';
import logoBlack from '../../assets/logoBlack.png';
import AuthContext from '../../context/auth';
import * as Facebook from 'expo-facebook';
import {Image} from 'react-native';

 import { Container,
  ContainerLogo,
  Logo,
  TextLogo,
  ContainerUndrow,
  ContainerButton,
  ButtonLogin,
  ContainerAlignButton,
  TextButtonLogin } from './styles';

const Login = () => {

  const { signInFacebook } = useContext(AuthContext);
  
  async function handleSignInFacebook(){  
    try{
      await Facebook.initializeAsync('935499743624589');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile','email'],
      });
      if (type === 'success') {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=name,email,picture.width(200){url}`);
        const userFacebook = await response.json();
        const responseSignIn =  await signInFacebook(userFacebook);  
        if(!responseSignIn.success){              
          alert('Algo inesperado aconteceu!')
        }
        
      }
    }catch ({ message }) {
      console.log(`Facebook Login Error: ${message}`);
    }    
   }

  return (
  <Container>
      <ContainerLogo>
          <Logo source={LogoMin} />
          <TextLogo>Seja bem vindo ao</TextLogo>
          <TextLogo>Frazs</TextLogo>                   
      </ContainerLogo>
      <ContainerUndrow>
        <Logo source={logoBlack} />        
      </ContainerUndrow>     

      <ContainerButton>

        <ButtonLogin onPress={handleSignInFacebook}>
            <ContainerAlignButton >
              <FontAwesome name="facebook-official" size={20} color="blue" />  
              <TextButtonLogin>Acessar com Facebook</TextButtonLogin>
            </ContainerAlignButton>
        </ButtonLogin> 
        <ButtonLogin>
            <ContainerAlignButton>
              <FontAwesome name="google-plus-square" size={20} color="red" />  
              <TextButtonLogin>Acessar com Google</TextButtonLogin>
            </ContainerAlignButton>
        </ButtonLogin>
      </ContainerButton>      
  </Container>
  );
}

export default Login;