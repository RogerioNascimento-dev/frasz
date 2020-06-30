import React from 'react';
import Home from '../pages/home';
import Profile from '../pages/profile';
import {Ionicons,FontAwesome} from '@expo/vector-icons'
import colors from '../commons/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppBotton = createBottomTabNavigator();

const AppRoutes = () =>(
    <AppBotton.Navigator  screenOptions={({ route }) => ({        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? <Ionicons name="ios-home" size={size} color={color} />:<Ionicons name="md-home" size={size} color={color} />;
          } else if (route.name === 'Profile') {
            iconName = focused ? <FontAwesome name="user" size={size} color={color} />:<FontAwesome name="user-o" size={size} color={color} />; 
          }
          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.titles,
        inactiveTintColor: colors.texts,        
      }}>
        <AppBotton.Screen  name="Home" component={Home} options={{title:"Home"}}   />
        <AppBotton.Screen name="Profile" component={Profile} options={{title:"Perfil"}} />
    </AppBotton.Navigator>
)

export default AppRoutes;