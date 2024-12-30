import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { WelcomeNavigationProp } from './WecomeComponentProp'
import { StyledImage, StyledPressable, StyledText, StyledView } from '../../Styled/StyledComponents'
import * as jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native';

const WelcomeComponent = () => {

    const navigation = useNavigation<WelcomeNavigationProp>();

    const handleNavigate = async () =>{
        console.log(await AsyncStorage.getItem('token'));
        navigation.navigate('login')
    }

    const tokenremove = async () =>{
       const token = await AsyncStorage.removeItem('token');
       console.log(token);
    }


  return (
    <StyledView className='flex-1 items-center justify-center bg-white h-screen'>

        <StyledImage className='w-50 h-50' source={require('../../assets/WelcomeAssets/welcome image.png')} />
        <StyledView className='gap-1 mt-5'>
          <StyledText className='text-center text-blue-800  text-4xl font-bold  tracking-widest '>Discover Your</StyledText>
          <StyledText className='text-center px-11 pt-1 text-blue-800 text-4xl font-bold tracking-widest '> Dream Job here</StyledText>
        </StyledView>

        <StyledView>
          <StyledText className='text-center px-8 font-semibold tracking-widest mt-6'>Explore all the existing job roles based on your interest and study major</StyledText>
        </StyledView>

        <StyledView className='flex items-center justify-center mt-12 mb-2 flex-row space-x-9'>

          <StyledPressable className='text-center px-12 shadow-lg shadow-blue-700 py-3 bg-blue-800 rounded-lg tracking-widest active:bg-blue-700 hover:bg-blue-700' 
            onPress={handleNavigate}>
            <StyledText className='text-white text-xl font-semibold'>Login</StyledText>
          </StyledPressable>


          

          <StyledText className='text-center px-10 border-gray-300 border py-3 font-semibold tracking-widest text-xl rounded-lg' onPress={() => navigation.navigate('signup')}>Register</StyledText>
        </StyledView>


<Text onPress={tokenremove}>remove</Text>
 
    </StyledView>
  )
}

export default WelcomeComponent