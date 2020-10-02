import React from 'react';
import {capitalize} from '../../commons/functions';
import {
  Container,
  Title,
  SubTitle,
} from './styles';

const MiniCard = ({onPress,title,subTitle}) => {
    const titleReplaced = capitalize(title.replace('Frases ', ''))
  return (    
        <Container onPress={onPress}>
            <Title numberOfLines={1} >{titleReplaced}</Title>
            {subTitle && 
            <SubTitle>{subTitle}</SubTitle>
            }
        </Container>     
  );
}

export default MiniCard;