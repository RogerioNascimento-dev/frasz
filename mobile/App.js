import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index'

import {AuthProvider} from './src/context/auth';
import {PreferenceProvider} from './src/context/preferences';

export default function App() {
  return (          
    <NavigationContainer>
      <PreferenceProvider>
      <AuthProvider>        
        <Routes />          
      </AuthProvider>     
      </PreferenceProvider>   
    </NavigationContainer>
  );
  }

