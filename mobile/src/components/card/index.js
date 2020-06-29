import React from 'react';
import { View,Text,TouchableOpacity,Share } from 'react-native';
import styles from './styles';
import {AntDesign} from '@expo/vector-icons'

const Card = ({phrase,author,id}) => {

    const handleOnShare = async (phrase) => {
        try {
          const result = await Share.share(
              {message:phrase},
              {dialogTitle:"Por onde deseja compartilhar?"}
              );                    
        } catch (error) {
          alert(error.message);
        }
      };

  return (
      <View style={styles.container}>
          <View style={styles.containerPhrase}>
            <Text style={styles.phrase}>{phrase}</Text>
          </View>
          <View style={styles.containerFooter}>
            <Text>{author}</Text>
            <View style={styles.containerFooterBottons}>
                <TouchableOpacity style={{marginRight:10}}>
                    <AntDesign name="copy1" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight:10}} onPress={() => handleOnShare(phrase)}>
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