import React from 'react'
import { StyledAntDesign, StyledPressable, StyledText, StyledTextInput, StyledView } from '../../../Styled/StyledComponents'
import { useNavigation } from '@react-navigation/native'
import { SignupComponentProps } from './SignupComponentProps'

const SignupComponent = () => {
    const navigation = useNavigation<SignupComponentProps>()

  return (
    <>
    <StyledView className='flex-1 items-center justify-center bg-white w-[98%] mx-auto'>

        <StyledView className='gap-1 mt-5'>
          <StyledText className='text-center text-blue-800  text-3xl font-bold  tracking-widest '>Create Account</StyledText>
        </StyledView>    

        <StyledView>
          <StyledText className='text-center px-6 font-bold text-base shadow-lg  shadow-blue-700 tracking-wide mt-6'>Create an account so you can explore all the existing jobs</StyledText>
        </StyledView>

        <StyledView>

          <StyledView>
            <StyledTextInput 
              className='w-80 h-12 border-2 border-gray-300 rounded-lg px-4 mt-8 focus:border-blue-500 active:border-blue-500'
              placeholder='Name'
            />
          </StyledView>

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
          </StyledView>

          <StyledView>
            <StyledTextInput 
              // secureTextEntr
              className='w-80 h-12 border-2 border-gray-300 rounded-lg px-4 mt-8 focus:border-blue-500 active:border-blue-500'
              placeholder='Confirm Password'
            />
          </StyledView>

          <StyledView className='mt-8'>
            <StyledPressable className='text-center px-12 shadow-lg shadow-blue-700 py-3 bg-blue-800 rounded-lg tracking-widest active:bg-blue-700 hover:bg-blue-700' 
              onPress={() => navigation.navigate('login')}>
              <StyledText className='text-white text-xl text-center font-semibold'>Sign up</StyledText>
            </StyledPressable>
          </StyledView>

          <StyledView>
            <StyledText className='text-center  font-semibold text-base shadow-lg text-gray-700 tracking-wider mt-8' onPress={()=>navigation.navigate('login')}>Already have an account?</StyledText>
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

export default SignupComponent


// https://meet.google.com/fct-vdff-qtg