import React,{useContext,useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import Card from '../../components/card';
import {likeOrUnlike} from '../../services/phrase';
import phraseContext from '../../context/phrase';

import { 
  Container,
  Title,
  ContainerTitle,
  Lists,
  ContentLoadPhrases } from './styles';

const Likes = () => {

  const {loadingPhrasesLiked,dataPhrasesLiked,loadPhrasesLiked}= useContext(phraseContext);

  useEffect(() =>{   
    loadPhrasesLiked()      
   },[])  
  return (
  <Container>
    <ContainerTitle>
      <Title>Frases curtidas</Title>
      {loadingPhrasesLiked &&
          <ActivityIndicator size="small" color={props => props.theme.titles}  />
        }
        </ContainerTitle>      
      <Lists 
      data={dataPhrasesLiked}
      keyExtractor={item => `${item.phrase.id}`}
      renderItem={({item}) =>{        
        return (<Card 
          phrase={item.phrase.text}
          author={(item.phrase.author?.name)?item.phrase.author?.name:item.phrase.user?.name}
          id={item.phrase.id}
          likeOrUnlike={likeOrUnlike}
          liked={item.liked}
          reloadPhrasesHome={true}
           />)
      }}
      />
      
  </Container>
  );
}

export default Likes;