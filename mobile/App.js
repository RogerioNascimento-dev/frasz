import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index'
import FlashMessage from "react-native-flash-message";

import {AuthProvider} from './src/context/auth';
import {PreferenceProvider} from './src/context/preferences';
import {PhraseProvider} from './src/context/phrase';

export default function App() {
  return (          
    <Provider store={store}>
    <NavigationContainer>
      <PreferenceProvider>
        <AuthProvider>        
          <PhraseProvider>
            <Routes />      
          </PhraseProvider>    
        </AuthProvider>     
      </PreferenceProvider>   
    </NavigationContainer>
    <FlashMessage position="top" />
    </Provider>
  );
  }

