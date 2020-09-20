import React,{useContext,useState} from 'react';
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes';
import AuthContext from '../context/auth';
import PreferenceContext from '../context/preferences';
import colors from '../commons/colors';

import {View,ActivityIndicator} from 'react-native';
import {ThemeProvider} from 'styled-components';



const Routes = () => {
  const {signed,loading} = useContext(AuthContext);
  const {darkMode} = useContext(PreferenceContext);  
  if(loading){
    return(
        <View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
            <ActivityIndicator size="large" color="#666" />
        </View>
     )
}
  return signed ?
  <ThemeProvider theme={darkMode ? colors.dark :colors.light} > 
  <AppRoutes />
  </ThemeProvider>
  :
  <ThemeProvider theme={darkMode ? colors.dark :colors.light} >
    <AuthRoutes/>
    </ThemeProvider>;
}

export default Routes;