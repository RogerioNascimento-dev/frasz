import React from 'react';
import Home from '../pages/home';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes = () =>(
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
    </AppStack.Navigator>
)

export default AppRoutes;