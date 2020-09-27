import React,{useState} from 'react';
import { TouchableOpacity,Share,Clipboard } from 'react-native';
import {AntDesign} from '@expo/vector-icons';

import {  
  Container,
  ContainerPhrase,
  Phrase,
  ContainerFooter,
  ContainerFooterBottons,
  AuthorText
} from './styles';

const Card = ({phrase,author,id,liked,likeOrUnlike}) => {   

    const [likedState,setLikedState] =  useState(liked);    
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
        await likeOrUnlike(id,actionLike);
        setLikedState(!likedState);
      }
  return (
      <Container>
          <ContainerPhrase>
            <Phrase>{phrase}</Phrase>
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