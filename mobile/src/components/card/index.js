import React,{useState,useContext} from 'react';
import { TouchableOpacity,Share,Clipboard } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import LottieView from  "lottie-react-native";
import phraseContext from '../../context/phrase';

import {  
  Container,
  ContainerPhrase,
  Phrase,
  ContainerFooter,
  ContainerFooterBottons,
  AuthorText
} from './styles';

const Card = ({phrase,author,id,liked,likeOrUnlike,reloadPhrasesHome}) => {   

const [likedState,setLikedState] =  useState(liked);    
const [animateLike,setAnimateLike] = useState(false);
const {loadPhrasesHome,loadPhrasesLiked}= useContext(phraseContext);

const handleOnShare = async (phrase,author) => {
  try {
    const result = await Share.share(
        {message:`${phrase} (${author})`},
        {dialogTitle:"Por onde deseja compartilhar?"}
        );                    
  } catch (error) {
    alert(error.message);
  }
};

const handleCopy = async (phrase,author) => {
  await Clipboard.setString(`${phrase} (${author})`);
  alert('Copied to Clipboard!');
};

const handleLikeOrUnlike = async (id,actionLike)=>{
  
  try{
    setAnimateLike(true);
    await likeOrUnlike(id,actionLike);       
    setAnimateLike(false);    
    if(reloadPhrasesHome){
      loadPhrasesHome();
    }
    loadPhrasesLiked();
    setLikedState(!likedState);
  }catch(ex){
    setAnimateLike(false); 
    alert(`Algo inesperado aconteceu ao tentar ${likedState?'descurtir':'curtir'} esta frase!`);
  }
}

  return (
      <Container>               
          <ContainerPhrase>
            <Phrase>{phrase}</Phrase>            
            {animateLike && <LottieView source={require("../../assets/like.json")} loop autoPlay />}            
          </ContainerPhrase>
          <ContainerFooter>
            <AuthorText>{author ? author : 'Desconhecido'}</AuthorText>
            <ContainerFooterBottons>
                <TouchableOpacity style={{marginRight:10}}>
                    <AntDesign name="copy1" size={20} color="black" onPress={()=>handleCopy(phrase,author)} />
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight:10}} onPress={() => handleOnShare(phrase,author)}>
                    <AntDesign name="sharealt" size={20} color="black" />
                </TouchableOpacity>                
                <TouchableOpacity onPress={() => handleLikeOrUnlike(id,likedState?'UNLIKE':'LIKE')}>
                    <AntDesign name={likedState?'heart':'hearto'} size={20} color={likedState?"red":"black"} />
                </TouchableOpacity>
            </ContainerFooterBottons>
          </ContainerFooter>
      </Container>
  );
}

export default Card;