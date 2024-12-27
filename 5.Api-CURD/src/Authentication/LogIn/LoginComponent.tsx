import React from 'react'
import { StyledAntDesign, StyledFontAwesome, StyledImage, StyledPressable, StyledText, StyledTextInput, StyledView } from '../../../Styled/StyledComponents'
import { useNavigation } from '@react-navigation/native'
import { LoginComponentProps } from './LoginComponentProps'
import { AntDesign } from '@expo/vector-icons'

const LoginHome = () => {
    const navigation = useNavigation<LoginComponentProps>()
  return (
    <>
    <StyledView className='flex-1 items-center justify-center bg-white w-[98%] mx-auto'>

        <StyledView className='gap-1 mt-5'>
          <StyledText className='text-center text-blue-800  text-3xl font-bold  tracking-widest '>Login here</StyledText>
        </StyledView>    

        <StyledView>
          <StyledText className='text-center px-28 font-bold text-base shadow-lg  shadow-blue-700 tracking-wide mt-6'>Welcome back you've been missed!</StyledText>
        </StyledView>

        <StyledView>

          <StyledView>
            <StyledTextInput 
                className='w-80 h-12 border-2 border-gray-300 rounded-lg px-4 mt-8 focus:border-blue-500 active:border-blue-500'
                placeholder='Email'
              />
          </StyledView>
            
          <StyledView>
            <StyledTextInput 
              // secureTextEntr
              className='w-80 h-12 border-2 border-gray-300 rounded-lg px-4 mt-8 focus:border-blue-500 active:border-blue-500'
              placeholder='Password'
            />
            <StyledText className='text-right text-blue-800 font-semibold mt-4'>Forget your password?</StyledText>
          </StyledView>

          <StyledView className='mt-8'>
            <StyledPressable className='text-center px-12 shadow-lg shadow-blue-700 py-3 bg-blue-800 rounded-lg tracking-widest active:bg-blue-700 hover:bg-blue-700' 
              onPress={() => navigation.navigate('login')}>
              <StyledText className='text-white text-xl text-center font-semibold'>Sign in</StyledText>
            </StyledPressable>
          </StyledView>

          <StyledView>
            <StyledText className='text-center  font-semibold text-base shadow-lg text-gray-700 tracking-wider mt-8'>Create new account</StyledText>
          </StyledView>

          <StyledView className='mb-4'>
            <StyledText className='text-center mt-16 text-blue-800 font-semibold'>Or continue with</StyledText>
          </StyledView>


          <StyledView className='mt-8 flex flex-row items-center justify-center gap-8'>
            <StyledAntDesign name='google' size={22} color='black' className='bg-gray-300 py-1 px-3 rounded-md' />
            <StyledAntDesign name='facebook-square' size={22} color='black' className='bg-gray-300 py-1 px-3 rounded-md' />
            <StyledAntDesign name='apple1' size={22} color='black' className='bg-gray-300 py-1 px-3 rounded-md' />
          </StyledView>

        </StyledView>        
      </StyledView>
    </>
  )
}

export default LoginHome