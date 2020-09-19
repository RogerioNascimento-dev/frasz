import React,{useContext,useState} from 'react';
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes';
import AuthContext from '../context/auth'
import {View,ActivityIndicator} from 'react-native'


import colors from '../commons/colors';
const Routes = () => {
  const {signed,loading} = useContext(AuthContext)
  if(loading){
    return(
        <View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
            <ActivityIndicator size="large" color="#666" />
        </View>
     )
}
  return signed ? <AppRoutes />:<AuthRoutes/>;
}

export default Routes;