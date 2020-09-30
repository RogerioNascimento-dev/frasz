import React,{createContext,useState,useEffect} from 'react';
import api from '../services/api';
import {phrasesLiked,phrases} from '../services/phrase';

const contectData = {
    phraseHome:[],
    loadingPhrasesHome:false,
    loadingPhrasesLiked:false,
    dataPhrasesLiked: []
}

const PhraseContext = createContext(contectData);

export const PhraseProvider = ({children})=>{

    const [phraseHome,setPhraseHome] = useState([]);
    const [loadingPhrasesHome,setLoadingPhrasesHome] = useState(false);
    const [loadingPhrasesLiked,setLoadingPhrasesLiked] =  useState(false);
    const [dataPhrasesLiked,setDataPhrasesLiked] = useState([]);

    async function loadPhrasesHome(){        
        setLoadingPhrasesHome(true);        
        const data = await phrases(); 
        setPhraseHome([]);
        setPhraseHome(data);
        setLoadingPhrasesHome(false);
      }

    async function loadPhrasesLiked(){
        setLoadingPhrasesLiked(true);       
        const phrases = await phrasesLiked();          
        setDataPhrasesLiked([]);
        setDataPhrasesLiked(phrases.data);
        setLoadingPhrasesLiked(false);
    }

    return (
        <PhraseContext.Provider value={
            {phraseHome,
            loadingPhrasesHome,
            loadPhrasesHome,
            loadingPhrasesLiked,
            dataPhrasesLiked,
            loadPhrasesLiked
           }
            }>
            {children}
        </PhraseContext.Provider>
    )
}

export default PhraseContext;