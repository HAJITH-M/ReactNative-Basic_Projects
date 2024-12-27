import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './components/WelcomePage';
import SignupComponent from './components/SignupComponent';
import LoginComponent from './components/LoginComponent';
import SecondPage from './components/SecondPage';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';



export type RootStackParamList = {
  welcomepage: undefined;
  signupcomponent:undefined;
  logincomponent:undefined;
  secondpage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();


const  App:React.FC = () => {
  return (
    <>
    <StatusBar style="light"  backgroundColor="black" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcomepage" screenOptions={{ headerShown: false }} >

          <Stack.Screen name="welcomepage" component={WelcomePage} options={{ headerShown: false }} />
          <Stack.Screen name="signupcomponent" component={SignupComponent} />
          <Stack.Screen name="logincomponent" component={LoginComponent} />
          <Stack.Screen name="secondpage" component={SecondPage} />

        </Stack.Navigator>

      </NavigationContainer>

    <Text style={{textAlign:'center', fontSize:30, fontWeight:'bold', color:'black', marginBottom:20}}>Authentication</Text>

    </>
   

  );
}

export default App;

