import React,{useState,useContext} from 'react';
import { TouchableOpacity,Share,Clipboard } from 'react-native';
import {useDispatch} from 'react-redux';
import {AntDesign} from '@expo/vector-icons';
import LottieView from  "lottie-react-native";
import phraseContext from '../../context/phrase';
import {phrases,phrasesLiked} from '../../services/phrase';
import {pushPhrases, clean,pushPhrasesLiked,cleanLiked} from '../../store/modules/phrase/actions';
import { showMessage } from "react-native-flash-message";
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
const dispatch = useDispatch();

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
  showMessage({
    message: "Sucesso!",
    description: "Mensagem copiada, pronta comartilhar :)",
    type: "success",
  });
};

const handleLikeOrUnlike = async (id,actionLike)=>{
  
  try{
    setAnimateLike(true);
    await likeOrUnlike(id,actionLike);            
    if(reloadPhrasesHome){
      const dados = await phrases();     
      dispatch(clean()); 
      dispatch(pushPhrases(dados));
    }    
    const data = await phrasesLiked();    
    dispatch(cleanLiked());
    dispatch(pushPhrasesLiked(data));
    setAnimateLike(false);  
    setLikedState(!likedState);
  }catch(ex){
    setAnimateLike(false); 
    showMessage({
      message: "Oops!",
      description: `Algo inesperado aconteceu ao tentar ${likedState?'descurtir':'curtir'} esta frase!`,
      type: "danger",
    });
    
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