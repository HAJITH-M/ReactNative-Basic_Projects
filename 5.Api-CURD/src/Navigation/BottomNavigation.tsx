import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Home/HomePage';
import ProfileComponent from '../Profile/ProfileComponent';
import { AntDesign } from '@expo/vector-icons';

export type BottomNavigationProp = {
    home: undefined;
    profile: undefined;
}

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator<BottomNavigationProp>()

  return (
    <Tab.Navigator initialRouteName='home' 
    screenOptions={({ route }) => ({ tabBarIcon: ({focused, color, size}) => { 
      let iconName;
        if (route.name === 'home') {
          iconName = focused ? "home" : "home" ;
        } else if (route.name === 'profile') {
          iconName = focused ? "profile" : "profile";
        }
        return <AntDesign name={iconName as "home" | "profile" | undefined} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },

      tabBarPosition: 'bottom',
      tabBarStyle: { 
        paddingBottom: 5, height: 60
       },
    })}>

      <Tab.Screen name="home" component={HomePage} options={{ headerShown: false }}/>
      <Tab.Screen name="profile" component={ProfileComponent} />

    </Tab.Navigator>
  )
}

export default BottomNavigation