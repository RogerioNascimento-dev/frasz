import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import Card from '../../components/card';
import {likeOrUnlike,phrasesLiked, phrases} from '../../services/phrase';
import {pushPhrasesLiked} from '../../store/modules/phraseLikeds/actions';
import {pushPhrases,clean} from '../../store/modules/phrase/actions';

import { 
  Container,
  Title,
  ContainerTitle,
  Lists,
  } from './styles';

const Likes = () => {

  const dataPhrasesLiked = useSelector(state => state.phraseLikeds);   
  const dispach = useDispatch();
  const [loadingPhrasesLiked,setLoadingPhrasesLiked] = useState(false);
  
  const load = async () =>{    
     setLoadingPhrasesLiked(true);
     const data = await phrasesLiked();     
     dispach(pushPhrasesLiked(data));
     setLoadingPhrasesLiked(false);
  }
  useEffect(() =>{   
    load()    
   },[])  


   const handleTeste = async (phrase_id,action) =>{

           
    await likeOrUnlike(phrase_id,action);

    Promise.all([      
      phrasesLiked(),
      phrases()])
      .then((values) =>{
        dispach(clean());
        dispach(pushPhrasesLiked(values[0]));
        dispach(pushPhrases(values[1]));        
    })
  }

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
          likeOrUnlike={handleTeste}
          liked={item.liked}     
          reloadPhrasesHome={true}     
           />)
      }}
      />      
  </Container>
  );
}

export default Likes;