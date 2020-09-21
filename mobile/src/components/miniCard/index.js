import React from 'react';
import {capitalize} from '../../commons/functions';
import {
  Container,
  Title,
  SubTitle,
} from './styles';

const MiniCard = ({onpress,title,subTitle}) => {
    const titleReplaced = capitalize(title.replace('Frases ', ''))
  return (    
        <Container onPress={onpress}>
            <Title numberOfLines={1} >{titleReplaced}</Title>
            {subTitle && 
            <SubTitle>{subTitle}</SubTitle>
            }
        </Container>     
  );
}

export default MiniCard;