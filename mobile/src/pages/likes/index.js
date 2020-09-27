import React from 'react';
import Card from '../../components/card';

import { 
  Container,
  Title,
  Lists } from './styles';

const Likes = () => {

  const phrasesLikeds = [
    {
      id:9896899,
      phrase:'Minha Frase é esta quero que saiba',
      author:'Nascimento'
    },
    {
      id:98969899,
      phrase:'Minha Frase é esta quero que saiba',
      author:'Nascimento'
    },
    {
      id:998969,
      phrase:'Minha Frase é esta quero que saiba',
      author:'Nascimento'
    },
    {
      id:9989689,
      phrase:'Minha Frase é esta quero que saiba',
      author:'Nascimento'
    },
    {
      id:999869,
      phrase:'Minha Frase é esta quero que saiba',
      author:'Nascimento'
    },
    {
      id:998999,
      phrase:'Minha Frase é esta quero que saiba',
      author:'Nascimento'
    },
    {
      id:96999,
      phrase:'Minha Frase é esta quero que saiba',
      author:'Nascimento'
    },
    {
      id:997969,
      phrase:'Minha Frase é esta quero que saiba',
      author:'Nascimento'
    },
    {
      id:97799,
      phrase:'Minha Frase é esta quero que saiba',
      author:'Nascimento'
    },
    {
      id:99589,
      phrase:'Minha Frase é esta quero que saiba',
      author:'Nascimento'
    },
    {
      id:9989,
      phrase:'Minha Frase é esta quero que saiba',
      author:'Nascimento'
    },
    {
      id:9979,
      phrase:'Minha Frase é esta quero que saiba',
      author:'Nascimento'
    },
    {
      id:9299,
      phrase:'Minha Frase é esta quero que saiba',
      author:'Nascimento'
    },
    {
      id:94599,
      phrase:'Minha Frase é esta quero que saiba',
      author:'Nascimento'
    },
    {
      id:9949,
      phrase:'Minha Frase é esta quero que saiba',
      author:'Nascimento'
    },    
  ]
  return (
  <Container>
      <Title>Frases curtidas</Title>
      <Lists 
      data={phrasesLikeds}
      keyExtractor={phrase => `${phrase.id}`}
      renderItem={({item}) =>{
        return (<Card phrase={item.phrase} author={item.author} id={item.id} />)
      }}
      />
      
  </Container>
  );
}

export default Likes;