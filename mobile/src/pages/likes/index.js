import React,{useContext,useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import Card from '../../components/card';
import {likeOrUnlike,phrasesLiked} from '../../services/phrase';
import {pushPhrasesLiked,cleanLiked} from '../../store/modules/phrase/actions';

import { 
  Container,
  Title,
  ContainerTitle,
  Lists,
  } from './styles';

const Likes = () => {

  const dataPhrasesLiked = useSelector(state => state.phrase);   
  const dispach = useDispatch();
  const [loadingPhrasesLiked,setLoadingPhrasesLiked] = useState(false);
  const load = async () =>{
    setLoadingPhrasesLiked(true);
    const data = await phrasesLiked();    
    dispach(cleanLiked());
    dispach(pushPhrasesLiked(data));
    setLoadingPhrasesLiked(false);
  }
  useEffect(() =>{   
    load()
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
      data={dataPhrasesLiked.phraseLiked}
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