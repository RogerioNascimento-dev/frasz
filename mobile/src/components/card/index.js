import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import styles from './styles';
import {AntDesign} from '@expo/vector-icons'

const Card = () => {
  return (
      <View style={styles.container}>
          <View style={styles.containerPhrase}>
              <Text style={styles.phrase}>Em quanto houver sol ainda haverá um amanhã dígno da gente se ver</Text>
          </View>
          <View style={styles.containerFooter}>
            <Text>Rogério Nascimento</Text>
            <View style={styles.containerFooterBottons}>
                <TouchableOpacity style={{marginRight:10}}>
                    <AntDesign name="copy1" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight:10}}>
                    <AntDesign name="sharealt" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="heart" size={20} color="black" />
                </TouchableOpacity>
            </View>
          </View>
      </View>
  );
}

export default Card;