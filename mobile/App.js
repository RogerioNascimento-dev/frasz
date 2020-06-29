import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index'
import {AuthProvider} from './src/context/auth'



export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent  />
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>        
      </NavigationContainer>
    </>        
  );
}

