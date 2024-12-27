import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginHome from './src/Authentication/LogIn/LoginComponent';
import WelcomeComponent from './src/WelcomeComponent/WelcomeComponent';
import SignupComponent from './src/Authentication/SignUP/SignupComponent';

export type RootStackParamList = {
  welcomecomponent : undefined,
  login : undefined,
  signup : undefined,
};

const App:React.FC = () => {

  const Stack = createStackNavigator<RootStackParamList>()

  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='welcomecomponent'>
        <Stack.Screen name="welcomecomponent" component = {WelcomeComponent} options={{ headerShown: false }} />
        <Stack.Screen  name="login" component = {LoginHome} options={{ headerShown: false }} />
        <Stack.Screen  name="signup" component = {SignupComponent} options={{ headerShown: false }} />

     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App