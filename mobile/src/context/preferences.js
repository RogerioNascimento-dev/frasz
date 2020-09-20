import React,{ createContext,useState,useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage';

const ContextData = {
    darkMode: false,
       
}

const PreferenceContext = createContext(ContextData);

export const PreferenceProvider = ({children}) =>{    
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() =>{
        async function loadStorageData(){     
            console.log('carregou: loadStorageData');                          
            const storeDarkMode = await AsyncStorage.getItem('@RNfrasz:darkMode');            
            if(storeDarkMode){                
                console.log('entrou no if do storedarkmode'+JSON.parse(storeDarkMode))
                setDarkMode(JSON.parse(storeDarkMode));                
            }                      
        }
        loadStorageData()
    },[])

    async function changeDarkMode(){            
            setDarkMode(!darkMode);  
            await AsyncStorage.setItem('@RNfrasz:darkMode',JSON.stringify(!darkMode))
        return;
    }    

    return(
        <PreferenceContext.Provider value={{darkMode,changeDarkMode}}>
            {children}
        </PreferenceContext.Provider >
    )}

export default PreferenceContext;