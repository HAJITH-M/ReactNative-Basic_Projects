import React, { useState } from 'react'
import { StyledAntDesign, StyledPressable, StyledText, StyledTextInput, StyledView } from '../../../Styled/StyledComponents'
import { useNavigation } from '@react-navigation/native'
import { SignupComponentProps } from './SignupComponentProps'
import { Text, View } from 'react-native'
import axios from 'axios'

const SignupComponent = () => {
    const navigation = useNavigation<SignupComponentProps>()

    const [form, setForm] = useState({
      username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleInputChange = (field: string) => (text: string) => {
      setForm(prev => ({ ...prev, [field]: text }))
  }

    
    const handleSignUp = async () =>{

        const nameRegex = /^[A-Za-z\s]+$/;
    
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        // const phoneRegex = /^[0-9]{10}$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
    
        const formFields = {...form}
        const newErrors = {...errors}
        let IsFormValid = true
    
        if(!nameRegex.test(formFields.username)){
            newErrors.username = "Full Name should only contain letters and spaces.";
            IsFormValid = false;
        }
        else{
            newErrors.username = ''
        }
    
        if(!emailRegex.test(formFields.email)){
            newErrors.email = "Please enter a valid email address.";
            IsFormValid = false;
        }
        else{
            newErrors.email = ''
        }
    
        if(!passwordRegex.test(formFields.password)){
            newErrors.password = "Password should contain at least 5 characters and 2 numbers.";
            IsFormValid = false;
        }
        else{
            newErrors.password = ''
        }
    
        if(formFields.password !== formFields.confirmPassword){
            newErrors.confirmPassword = "Passwords do not match.";
            IsFormValid = false;
        }
        else{
            newErrors.confirmPassword = ''
        }
    
        if(IsFormValid){
            console.log(formFields)

            try{
              const response = await axios.post('https://rntodoapi.vercel.app/register', {
                username: form.username,
                email: form.email,
                password: form.password,
              });
              console.log('Response:', response.data);

            }
            catch(error:any){
                console.log('Error:', error);
                console.log("Error:", error.response.data);
          }
        }
        else{
            setErrors(newErrors)
        }    
    }

  return (
    <>
    <StyledView className='flex-1 items-center justify-center bg-white w-[100%] mx-auto'>

        <StyledView className='gap-1 mt-5'>
          <StyledText className='text-center text-blue-800  text-3xl font-bold  tracking-widest '>Create Account</StyledText>
        </StyledView>    

        <StyledView>
          <StyledText className='text-center px-6 font-bold text-base shadow-lg  shadow-blue-700 tracking-wide mt-6'>Create an account so you can explore all the existing jobs</StyledText>
        </StyledView>

        <StyledView>

          <StyledView >
            <StyledTextInput 
              value={form.username}
              onChangeText={handleInputChange('username')}
              className='w-96 h-12 border-2 border-gray-300 rounded-lg px-4 mt-8 focus:border-blue-500 active:border-blue-500'
              placeholder='Name'
            />
            {errors.username && <StyledText className='text-red-500 text-xs pl-1 pt-0.5'>{errors.username}</StyledText>}
          </StyledView>

          <StyledView>
            <StyledTextInput 
                value={form.email}
                onChangeText={handleInputChange('email')}
                className='w-96 h-12 border-2 border-gray-300 rounded-lg px-4 mt-8 focus:border-blue-500 active:border-blue-500'
                placeholder='Email'
              />
            {errors.email && <StyledText className='text-red-500 text-xs pl-1 pt-0.5'>{errors.email}</StyledText>}
          </StyledView>
            
          <StyledView>
            <StyledTextInput 
              // secureTextEntr
              value={form.password}
              onChangeText={handleInputChange('password')}
              className='w-96 h-12 border-2 border-gray-300 rounded-lg px-4 mt-8 focus:border-blue-500 active:border-blue-500'
              placeholder='Password'
            />
            {errors.password && <StyledText className='text-red-500 text-xs pl-1 pt-0.5'>{errors.password}</StyledText>}
          </StyledView>

          <StyledView>
            <StyledTextInput 
              value={form.confirmPassword}
              onChangeText={handleInputChange('confirmPassword')}
              // secureTextEntr
              className='w-96 h-12 border-2 border-gray-300 rounded-lg px-4 mt-8 focus:border-blue-500 active:border-blue-500'
              placeholder='Confirm Password'
            />
            {errors.confirmPassword && <StyledText className='text-red-500 text-xs pl-1 pt-0.5'>{errors.confirmPassword}</StyledText>}
          </StyledView>

          <StyledView className='mt-8 ' >
            <StyledPressable className='text-center px-12 shadow-lg shadow-blue-700 py-3 bg-blue-800 rounded-lg tracking-widest active:bg-blue-700 hover:bg-blue-700' 
              onPress={handleSignUp}>
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


          {/* <View className='mt-16'>
            <Text className='text-center text-red-500'>By signing up, you agree to our Terms of Service and Privacy Policy</Text>

          </View> */}

        </StyledView>        
      </StyledView>
    </>
  )
}

export default SignupComponent


// https://meet.google.com/fct-vdff-qtg