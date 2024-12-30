import React, { useEffect, useState } from 'react'
import { StyledAntDesign, StyledPressable, StyledText, StyledTextInput, StyledView } from '../../../Styled/StyledComponents'
import { useNavigation } from '@react-navigation/native'
import { LoginComponentProps } from './LoginComponentProps'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as jwt_decode from 'jwt-decode'

const LoginHome = () => {
  const navigation = useNavigation<LoginComponentProps>()



  const [form, setForm] = useState({
      email: '',
      password: ''
  })

  const [errors, setErrors] = useState({
      email: '',
      password: ''
  })

  const handleInputChange = (field: string) => (text: string) => {
      setForm(prev => ({ ...prev, [field]: text }))
  }



//   useEffect(() => {
//     const validateToken = async () => {
//       const token = await AsyncStorage.getItem('token');
//       if (token) {
//         navigation.replace('bottomnavigation');
//         return false;
//       }
//       else{
//         navigation.navigate('login');
//       }
//     };

//     validateToken();
//   }, []);



  const handleSignIn = async () => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/

      const formFields = { ...form }
      const newErrors = { ...errors }
      let IsFormValid = true

      if (!formFields.email) {
          newErrors.email = "Email is required"
          IsFormValid = false
      } else if (!emailRegex.test(formFields.email)) {
          newErrors.email = "Please enter a valid email address."
          IsFormValid = false
      } else {
          newErrors.email = ''
      }

      if (!formFields.password) {
          newErrors.password = "Password is required"
          IsFormValid = false
      } else if (!passwordRegex.test(formFields.password)) {
          newErrors.password = "Password should contain at least 5 letters and 2 numbers."
          IsFormValid = false
      } else {
          newErrors.password = ''
      }

      setErrors(newErrors)

      if (IsFormValid) {
          try {
            const response = await axios.post('https://rntodoapi.vercel.app/login', {
              // https://webscraper-ct6m.onrender.com//api/signup
                email: form.email,
                password: form.password,
            })
            console.log('response okkkkkkkkkkkkkkkkkkkk')

            await AsyncStorage.setItem('token', JSON.stringify(response.data))
            const token = await AsyncStorage.getItem('token')
            console.log('asynctoken', token)
            console.log('Login successful:', response.data)
            navigation.navigate('bottomnavigation')
        } catch (err : any) {
            if (err.response) {
                alert('Login failed: ' + err.response.data.error)
            } else {
                console.error('Error logging in:', err)
                alert('An error occurred. Please try again later.')
            }
        }
      }
  }

  const handlelogout = async () => {
      await AsyncStorage.removeItem('token')
      navigation.navigate('welcomecomponent')
  }

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
                          value={form.email}
                          onChangeText={handleInputChange('email')}
                          className='w-96 h-14 border-2 border-gray-300 rounded-lg px-4 mt-8 focus:border-blue-500 active:border-blue-500'
                          placeholder='Email'
                      />
                      {errors.email && <StyledText className='text-red-500 text-xs pl-1 pt-0.5'>{errors.email}</StyledText>}
                  </StyledView>

                  <StyledView>
                      <StyledTextInput
                          value={form.password}
                          onChangeText={handleInputChange('password')}
                          secureTextEntry
                          className='w-96 h-14 border-2 border-gray-300 rounded-lg px-4 mt-8 focus:border-blue-500 active:border-blue-500'
                          placeholder='Password'
                      />
                      {errors.password && <StyledText className='text-red-500 text-xs pl-1 pt-0.5'>{errors.password}</StyledText>}

                      <StyledText className='text-right text-blue-800 font-semibold mt-4'>Forget your password?</StyledText>
                  </StyledView>

                  <StyledView className='mt-8'>
                      <StyledPressable className='text-center px-12 shadow-lg shadow-blue-700 py-3 bg-blue-800 rounded-lg tracking-widest active:bg-blue-700 '
                          onPress={handleSignIn}>
                          <StyledText className='text-white text-xl text-center font-semibold'>Sign in</StyledText>
                      </StyledPressable>
                  </StyledView>

                  <StyledView>
                      <StyledText className='text-center  font-semibold text-base shadow-lg text-gray-700 tracking-wider mt-8' onPress={() => navigation.navigate('signup')}>Create new account</StyledText>
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