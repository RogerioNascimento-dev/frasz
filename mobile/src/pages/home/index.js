import React,{useEffect,useContext,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { ActivityIndicator,FlatList } from 'react-native';
import Header from '../../components/header'
import MiniCard from '../../components/miniCard';
import Card from '../../components/card';
import api from '../../services/api';
import {likeOrUnlike,phrases} from '../../services/phrase';
import {pushPhrases} from '../../store/modules/phrase/actions';
import { showMessage } from "react-native-flash-message";

import {  
  ScrollViewContainer,
  Container,
  ContainerCategories,
  Lists,
  TextCategories,
  SpotlightContainer,
  SpotlightTitleContainer,
  ContainerTitleCategories,
  TextNotData,
} from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const phrasesStore = useSelector(state => state.phrase); 
  const [categories,setCategories] = useState([])
  const [totalCategories,setTotalCategories] = useState(0)
  const [pageCategories,setPageCategories] = useState(1)
  const [loadingCategories,setLoadingCategories] = useState(false)
  const [authors,setAuthors] =  useState([]);
  const [totalAuthors,setTotalAuthors] =  useState(0);
  const [pageAuthors,setPageAuthors] =  useState(1);
  const [loadingAuthors,setLoadingAuthors] =  useState(false);   
  
  const [loadingPhrasesHome,setLoadingPhrasesHome] = useState(false);
  


  function handdleMinicardCategories(){    
    showMessage({
      message: "Hello World",
      description: "This is our second message",
      type: "success",
    });
  }
  function handdleMinicardAuthor(){
  }  

  async function loadAuthors(){    
    if(loadingAuthors || totalAuthors > 0 && authors.length === totalAuthors){
      return;
    }
    setLoadingAuthors(true);
    const response = await api.get(`authors?page=${pageAuthors}`);
    const {data,total,page,lastPage} = response.data;
    setAuthors([...authors,...data]);
    setTotalAuthors(total);
    setLoadingAuthors(false);
    setPageAuthors(pageAuthors +1);
 }
 async function loadCategories(){  
  if(loadingCategories || totalCategories > 0 && categories.length === totalCategories){
    return;
  }
  setLoadingCategories(true);

  const response = await api.get(`categories?page=${pageCategories}`);
  const {data,total,page,lastPage} = response.data;  
  setCategories([...categories,...data]);
  setTotalCategories(total);
  setLoadingCategories(false);
  setPageCategories(pageCategories + 1);
}

async function loadPhrasesHome(){
  setLoadingPhrasesHome(true);
  const dados = await phrases();
  dispatch(pushPhrases(dados));
  setLoadingPhrasesHome(false);
}

useEffect(() =>{   
  loadAuthors()
  loadCategories()
  loadPhrasesHome()          
},[])  
  
  return (    
    <>        
    <Header />    
    <ScrollViewContainer>           
      <Container>
        <ContainerCategories>
            <ContainerTitleCategories>              
                <TextCategories>Categorias</TextCategories>               
                {loadingCategories &&
                  <ActivityIndicator size="small" color={props => props.theme.titles}  />
                }
            </ContainerTitleCategories>  
            {!loadingCategories && totalCategories == 0 &&
              <TextNotData>Nenhuma categoria encontrada.</TextNotData>  
            } 
            <Lists              
              data={categories}
              onEndReached={loadCategories}
              onEndReachedThreshold={0.2}
              keyExtractor={category => `${category.id}`}
              horizontal              
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =>{
                return (
                  <MiniCard title={item.name} subTitle={`${item.phrases.length} Frases`} onPress={handdleMinicardCategories} />
                )
              }}
            />
            
          <ContainerTitleCategories>
          <TextCategories>Autores</TextCategories>   
          {loadingAuthors &&
            <ActivityIndicator size="small" color={props => props.theme.titles}  />
          }  
          </ContainerTitleCategories>
          {!loadingAuthors && totalAuthors == 0 &&
              <TextNotData>Nenhum autor encontrado.</TextNotData>  
            }
            <Lists              
              data={authors}
              keyExtractor={autor => `${autor.id}`}
              horizontal
              onEndReached={loadAuthors}
              onEndReachedThreshold={0.2}              
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =>{
                return (
                  <MiniCard title={item.name} subTitle={`${item.phrases.length} Frases`} onpress={handdleMinicardAuthor} />
                )
              }}
            />          
        </ContainerCategories>  
      </Container> 

  <SpotlightContainer>
  <SpotlightTitleContainer>  
    <TextCategories>Frases Em Destaque</TextCategories>  
    {loadingPhrasesHome &&
      <ActivityIndicator size="small" color={props => props.theme.titles} />
    } 
    </SpotlightTitleContainer>
    {!loadingAuthors && totalAuthors == 0 &&
      <TextNotData>Nenhuma frase em destaque encontrada.</TextNotData>  
    }    
    
     { phrasesStore.phraseHome.map((phrase) =>(    
      <Card 
        key={`${phrase.id}`}
        phrase={phrase.text}
        author={(phrase.author?.name)?phrase.author?.name:phrase.user?.name}
        id={phrase.id}
        likeOrUnlike={likeOrUnlike}
        liked={phrase.liked}
        reloadPhrasesHome={false}
      />
     ))}  
  </SpotlightContainer>
  </ScrollViewContainer>
  </>
  );
}

export default Home;