import React,{ createContext,useState,useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import * as auth from '../services/auth';
import api from '../services/api';
const AuthContextData = {
    signed: false,  
    loading: false,  
    user: {},    
}

const AuthContext = createContext(AuthContextData);

export const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(() =>{
        async function loadStorageData(){
            setLoading(true);
            const storeUser = await AsyncStorage.getItem('@RNfrasz:user')
            const storeToken = await AsyncStorage.getItem('@RNfrasz:token')
            if(storeUser && storeToken){
                api.defaults.headers.Authorization = `Bearer ${storeToken}`;
                setUser(JSON.parse(storeUser));                
            }
            setLoading(false);            
        }
        loadStorageData()
    },[])

    async function signInFacebook(email,password){        
        setLoading(true);
        const response = await auth.signInFacebook(email,password)        
        if(response.success){
            api.defaults.headers.Authorization = `Bearer ${response.token}`;
            setUser(response.user)      
            await AsyncStorage.setItem('@RNfrasz:user',JSON.stringify(response.user))
            await AsyncStorage.setItem('@RNfrasz:token',response.token)        
        }
        setLoading(false);
        return response;
    }

    async function signOut(){
        await AsyncStorage.clear();
        setUser(null);        
    }

    return(
        <AuthContext.Provider value={{signed:!!user,token: '',user, signInFacebook, signOut,loading}}>
            {children}
        </AuthContext.Provider >
    )}

export default AuthContext;