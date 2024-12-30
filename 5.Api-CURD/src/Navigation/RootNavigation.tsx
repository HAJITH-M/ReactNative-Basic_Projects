import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginHome from '../Authentication/LogIn/LoginComponent';
import WelcomeComponent from '../WelcomeComponent/WelcomeComponent';
import SignupComponent from '../Authentication/SignUP/SignupComponent';
import SplashScreen from '../SplashScreen/SplashScreen';
import HomePage from '../Home/HomePage';
import BottomNavigation from './BottomNavigation';
import AddTask from '../AddTask/AddTask';

export type RootStackParamList = {
  splashscreen : undefined,
  welcomecomponent : undefined,
  login : undefined,
  signup : undefined,
  home : undefined,
  bottomnavigation : undefined,
  addtask: undefined;

};



const RootNavigation:React.FC = () => {

  const Stack = createStackNavigator<RootStackParamList>()

  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='splashscreen'>
        <Stack.Screen name="home" component = {HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="splashscreen" component = {SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="welcomecomponent" component = {WelcomeComponent} options={{ headerShown: false }} />
        <Stack.Screen  name="login" component = {LoginHome} options={{ headerShown: false }} />
        <Stack.Screen  name="signup" component = {SignupComponent} options={{ headerShown: false }} />
        <Stack.Screen name="bottomnavigation" component = {BottomNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="addtask" component = {AddTask} options={{ headerShown: false }} />
     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default RootNavigation