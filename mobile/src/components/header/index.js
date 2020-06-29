import React,{useContext} from 'react';
import { Text, View,Image,TouchableOpacity } from 'react-native';
import logoHeader from '../../assets/logoBlackHeader.png';
import {FontAwesome} from '@expo/vector-icons'
import styles from './styles';
import colors from '../../commons/colors'
import AuthContext from '../../context/auth';

const header = () => {
    const {user,signOut} = useContext(AuthContext);

  return (
      <View style={styles.container}>
          <Image source={logoHeader} />
          <TouchableOpacity style={styles.containerNameUser} onPress={signOut}>
            <Text style={styles.textNameUser}>Olá, {user.name}</Text>
            <FontAwesome name="user" size={20} color={colors.texts} />
          </TouchableOpacity>
      </View>
  );
}

export default header;