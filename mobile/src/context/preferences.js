import React,{ createContext,useState,useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const ContextData = {
    darkMode: false,      
}

const PreferenceContext = createContext(ContextData);

export const PreferenceProvider = ({children}) =>{    
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() =>{
        async function loadStorageData(){                      
            const storeDarkMode = await AsyncStorage.getItem('@RNfrasz:darkMode');            
            if(storeDarkMode){                
                setDarkMode(JSON.parse(storeDarkMode));                
            }    
            console.log('carregou o load e retornou oprimeiro situacao ',darkMode);                         
        }
        loadStorageData()
    },[])

    async function changeDarkMode(){    
        console.log('chegou aquio estava', darkMode);
            setDarkMode(darkMode ? false : true);      
            console.log('ficou',darkMode);            
            await AsyncStorage.setItem('@RNfrasz:darkMode',JSON.stringify(darkMode))
        return;
    }    

    return(
        <PreferenceContext.Provider value={{darkMode:darkMode,changeDarkMode}}>
            {children}
        </PreferenceContext.Provider >
    )}

export default PreferenceContext;