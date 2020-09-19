import React,{useContext,useState,useEffect} from 'react';
import { Text, Image,TouchableOpacity,Animated } from 'react-native';
import logoHeader from '../../assets/logoBlackHeader.png';
import {FontAwesome} from '@expo/vector-icons'
import styles from './styles';
import colors from '../../commons/colors';
import AuthContext from '../../context/auth';

const header = () => {
    const {user,signOut} = useContext(AuthContext);
    const [heightAnimado,setHeightAnimado] = useState(new Animated.Value(0));

      
    useEffect(() =>{      
      Animated.timing(heightAnimado,{
        toValue:160,        
        duration:600,
        useNativeDriver: false,
      }).start();      
    },[])
   
  return (
      <Animated.View style={[styles.container,{height:heightAnimado}]}>
          <Image source={logoHeader} />
          <TouchableOpacity style={styles.containerNameUser} onPress={signOut}>
            <Text style={styles.textNameUser}>Olá, {user.name}</Text>
            <FontAwesome name="sign-out" size={20} color={colors.texts} />
            
          </TouchableOpacity>
      </Animated.View>
  );
}

export default header;