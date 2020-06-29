import React from 'react';
import { Text,TouchableOpacity } from 'react-native';
import {capitalize} from '../../commons/functions';
import styles from './styles';

const MiniCard = ({onpress,title,subTitle}) => {
    const titleReplaced = capitalize(title.replace('Frases ', ''))
  return (    
        <TouchableOpacity style={styles.container} onPress={onpress}>
            <Text numberOfLines={1} style={styles.title}>{titleReplaced}</Text>
            {subTitle && 
            <Text style={styles.subTitle}>{subTitle}</Text>
            }
        </TouchableOpacity>     
  );
}

export default MiniCard;