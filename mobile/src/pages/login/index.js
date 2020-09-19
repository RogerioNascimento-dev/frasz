import React,{useContext} from 'react';
import { FontAwesome} from "@expo/vector-icons";
import LogoMin from '../../assets/LogoMin.png';
import logoBlack from '../../assets/logoBlack.png';
import AuthContext from '../../context/auth';

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
    const response =  await signInFacebook('royal.xd01@gmail.com','1010')    
    if(!response.success){     
      alert('Algo inesperado aconteceu!')
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