import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './src/ToDoComponent/WecomePage';
import ToDoComponent from './src/ToDoComponent/ToDoComponent';

// Define the type of the navigation stack
export type RootStackParamList = {
  welcomepage: undefined;
  ToDoComponent: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const App:React.FC = () => {
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="welcomepage" screenOptions={{ headerShown: false }} >
       
          <Stack.Screen name="welcomepage" component={WelcomePage} options={{ headerShown: false }} />
          <Stack.Screen name="ToDoComponent" component={ToDoComponent} />

        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
    
  )
}

export default App