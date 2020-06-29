import React from 'react';
import Login from '../pages/login';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = () =>(
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login} options={{headerShown:false}} />
    </AuthStack.Navigator>
)

export default AuthRoutes;