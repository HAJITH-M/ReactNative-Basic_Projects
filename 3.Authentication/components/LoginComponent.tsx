import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

const LoginComponent = () => {

      type LoginNavigationprop = StackNavigationProp<RootStackParamList, 'logincomponent'>
      const navigation = useNavigation<LoginNavigationprop>();


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^[A-Za-z]{5,}\d{2,}$/


  const users = {
    "users": [
      {
        "id": "1",
        "email": "john.doe@example.com",
        "password": "JD123pass"
      },
      {
        "id": "2", 
        "email": "hajithm2003@gmail.com",
        "password": "Mhajith12345"
      }
    ]
  };
  

  const handleLogin = async () => {

    let formIsValid = true;
    const newErrors = {...errors}

    if(!emailRegex.test(email)) {

      newErrors.email = 'Please enter a valid email address.';
      formIsValid = false;
      
    }

    if(!passwordRegex.test(password)) {
      newErrors.password = 'Password should be at least 5 characters long and contain at least 2 digits.';
      formIsValid = false;
    }

    setErrors(newErrors);

    if(formIsValid) {

      try{
        // const storedUserData = await AsyncStorage.getItem('userData');

      // if (storedUserData) {
      //   const user = JSON.parse(storedUserData);
      //   console.log('Retrieved user data:', user);

      //   if (email === user.email && password === user.password) {
      //     navigation.navigate('secondpage');
      //   } else {
      //     alert('Invalid email or password');
      //   }
        
      // } else {
      //   alert('No user data found');
      // }

      const user = await SecureStore.getItemAsync('userEmail')
      const pass = await SecureStore.getItemAsync('userPassword');
      console.log('user', user);
        if (email === user && password === pass) {
          navigation.navigate('secondpage');
          } else {
          alert('Invalid email or password');
          }
    }
      catch(error) {
        console.log('Error retrieving data:', error);
      }

    } else {
      alert('Form is invalid');
    } 
  }


  const handlenext = () =>{
    navigation.navigate('signupcomponent');
  }

 
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={() => {handleLogin()}}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButton} onPress={() => {handlenext()}}>
          <Text style={styles.buttonText}>New User? Signup</Text>
        </TouchableOpacity>

        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  signUpButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginComponent