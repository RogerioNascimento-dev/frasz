import 'react-native-gesture-handler';
import React,{useState,useContext} from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index'
import {AuthProvider} from './src/context/auth'
import {ThemeProvider} from 'styled-components';
import colors from './src/commons/colors';
import PreferenceContext,{PreferenceProvider} from './src/context/preferences';

export default function App() {
  
const {darkMode} = useContext(PreferenceContext);  
return (        
<ThemeProvider theme={darkMode ? colors.dark :colors.light} >
  <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent  />
  <NavigationContainer>
    <PreferenceProvider>
    <AuthProvider>        
      <Routes />          
    </AuthProvider>     
    </PreferenceProvider>   
  </NavigationContainer>
</ThemeProvider>
);
}

