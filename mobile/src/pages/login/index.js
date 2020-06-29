import React,{useContext} from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import { FontAwesome} from "@expo/vector-icons";
import AuthContext from '../../context/auth';

import Logo from '../../assets/logoBlack.png';
import styles from './styles';

const Login = () => {
  const { signInFacebook } = useContext(AuthContext);
    
  async function handleSignInFacebook(){        
   const response =  await signInFacebook('royal.xd01@gmail.com','1010')    
   if(!response.success){
     alert('Algo inesperado aconteceu!')
   }
  }

  return (
    <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image source={Logo} />
        </View>
        <View style={styles.containerApresentation}>
          <Text style={styles.title}>Bem Vindo!</Text>
          <Text style={styles.subTitle}>Cadastre-se e acesse gratuitamente usando o facebook.</Text>

          <View  style={styles.containerButton}>
            <TouchableOpacity style={styles.buttonLogin} onPress={handleSignInFacebook}>  
              <View style={styles.containerAlignButton}>
                <FontAwesome name="facebook-official" size={20} color="blue" />  
                <Text style={styles.textButtonLogin}>               
                  Acessar com Facebook
                </Text>
              </View>          
            </TouchableOpacity>
          </View>
          
          <View  style={styles.containerButton}>
            <TouchableOpacity style={styles.buttonLogin}>  
              <View style={styles.containerAlignButton}>
                <FontAwesome name="google-plus-square" size={20} color="red" />  
                <Text style={styles.textButtonLogin}>               
                  Acessar com o Google
                </Text>
              </View>          
            </TouchableOpacity>
          </View>

        </View>        
    </View>
  );
}

export default Login;