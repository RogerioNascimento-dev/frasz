import React,{useEffect,useState} from 'react';
import { View,Text,ScrollView,FlatList,ActivityIndicator,Animated } from 'react-native';
import styles from './styles';
import Header from '../../components/header'
import MiniCard from '../../components/miniCard';
import Card from '../../components/card';
import colors from '../../commons/colors';
import api from '../../services/api';

const Home = () => {
  const [categories,setCategories] = useState([])
  const [totalCategories,setTotalCategories] = useState(0)
  const [pageCategories,setPageCategories] = useState(1)
  const [loadingCategories,setLoadingCategories] = useState(false)

  const [authors,setAuthors] =  useState([]);
  const [totalAuthors,setTotalAuthors] =  useState(0);
  const [pageAuthors,setPageAuthors] =  useState(1);
  const [loadingAuthors,setLoadingAuthors] =  useState(false);

  const [phrases,setPhrases] =  useState([]);    
  const [loadingPhrases,setLoadingPhrases] =  useState(false);
  
  function handdleMinicardCategories(){
    alert('chamei aqui...');
  }
  function handdleMinicardAuthor(){

  }
  async function loadPhrases(){
    setLoadingPhrases(true);
    const response = await api.get('phrases');
    const {data} = response.data;
    setPhrases(data);
    setLoadingPhrases(false);
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


  useEffect(() =>{   
   loadAuthors()
   loadCategories()
   loadPhrases()
  },[])  

 
  return (
    <>
    <Header />
    <ScrollView>      
      <View style={styles.container}>
        <View style={styles.containerCategories}>
            <View style={{flexDirection:'row'}}>              
                <Text style={styles.textCategories}>Categorias de frases</Text>               
                {loadingCategories &&
                  <ActivityIndicator size="small" color={colors.titles} />
                }
            </View>    
            <FlatList
              style={styles.lists}
              data={categories}
              onEndReached={loadCategories}
              onEndReachedThreshold={0.2}
              keyExtractor={category => `${category.id}`}
              horizontal              
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =>{
                return (
                  <MiniCard title={item.name} subTitle={`${item.phrases.length} Frases`} onpress={handdleMinicardCategories} />
                )
              }}
            />
          <View style={{flexDirection:'row'}}>
          <Text style={styles.textCategories}>Autores</Text>   
          {loadingAuthors &&
            <ActivityIndicator size="small" color={colors.titles} />
          }  
          </View>
            <FlatList
              style={styles.lists}
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
        </View>  
      </View> 

  <View style={{paddingHorizontal: 20, backgroundColor:colors.background}}>
  <View style={{flexDirection:'row'}}>  
    <Text style={styles.textCategories}>Frases Em Destaque</Text>  
    {loadingPhrases &&
      <ActivityIndicator size="small" color={colors.titles} />
    } 
    </View>
    {phrases.map((phrase) =>(    
      <Card 
        key={`${phrase.id}`}
        phrase={phrase.text}
        author={(phrase.author?.name)?phrase.author?.name:phrase.user?.name}
        id={phrase.id}
      />
    ))}
  </View>
  </ScrollView>
  </>
  );
}

export default Home;