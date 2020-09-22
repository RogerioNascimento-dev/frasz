import React,{useContext} from 'react';
import Home from '../pages/home';
import Profile from '../pages/profile';
import Likes from '../pages/likes';
import Settings from '../pages/settings';
import {Ionicons,AntDesign,SimpleLineIcons,Fontisto} from '@expo/vector-icons'
import colors from '../commons/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image }from 'react-native';

import AuthContext from '../context/auth';
const AppBotton = createBottomTabNavigator();

const AppRoutes = () =>{    
  const {user} = useContext(AuthContext);
  const  styleImageProfile  =  {width:33,height:33,borderRadius:15,borderWidth:1};
  return(
    <AppBotton.Navigator  screenOptions={({ route }) => ({        
        tabBarIcon: ({ focused, color, size }) => {          
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? <Ionicons name="ios-home" size={30} color={color} />:<Ionicons name="md-home" size={30} color={color} />;
          } else if (route.name === 'Profile') {
            iconName = focused ? <Image style={[styleImageProfile,{borderColor:color}]} source={{uri:user.image_profile}} />:<Image style={[styleImageProfile,{borderColor:color}]} source={{uri:user.image_profile}} />; 
          }else if(route.name === 'Likes') {
              iconName = focused ? <AntDesign name="hearto" size={30} color={color} />:<AntDesign name="heart" size={30} color={color} />;
          }else if(route.name === 'Settings') {
            iconName = focused ? <SimpleLineIcons name="settings" size={30} color={color} />:<Fontisto name="player-settings" size={30} color={color} />;
          }
          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#D90429',
        inactiveTintColor: '#8D99AE',    
        showLabel:false,
        tabStyle:{backgroundColor:'#EDF2F4'}            
      }}      
      >
        <AppBotton.Screen  name="Home" component={Home} options={{title:"Home"}}   />
        <AppBotton.Screen name="Likes" component={Likes} options={{title:"Likes"}} />
        <AppBotton.Screen name="Profile" component={Profile} options={{title:"Perfil"}} />
        <AppBotton.Screen name="Settings" component={Settings} options={{title:"Configurações"}} />
        
        
    </AppBotton.Navigator>
)}

export default AppRoutes;