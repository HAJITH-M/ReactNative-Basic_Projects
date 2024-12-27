import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, Platform } from 'react-native'
import { RootStackParamList } from '../App'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import * as SecureStore from 'expo-secure-store'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Storage utility for cross-platform compatibility
export const Storage = {
 
  setItem: async (key: string, value: string) => {
    try {
      if (Platform.OS === 'web') {
        // Use localStorage for web
        await AsyncStorage.setItem(key, value);
      } else {
        // Use SecureStore for mobile
        console.log('key', key,value);
        await SecureStore.setItemAsync(key, value);
      }
    } catch (error) {
      console.error(`Error saving ${key}:`, error);
      throw error;
    }
  },

  getItem: async (key: string) => {
    try {
      if (Platform.OS === 'web') {
        return localStorage.getItem(key);
      } else {
        return await SecureStore.getItemAsync(key);
      }
    } catch (error) {
      console.error(`Error retrieving ${key}:`, error);
      throw error;
    }
  },

  removeItem: async (key: string) => {
    try {
      if (Platform.OS === 'web') {
        localStorage.removeItem(key);
      } else {
        await SecureStore.deleteItemAsync(key);
      }
    } catch (error) {
      console.error(`Error removing ${key}:`, error);
      throw error;
    }
  }
};

const SignupComponent = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [fullname, setFullname] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^[0-9]{10}$/;
  const passwordRegex = /^[A-Za-z]{5,}\d{2,}$/

  type SignupNavigationprop = StackNavigationProp<RootStackParamList, 'signupcomponent'>
  const navigation = useNavigation<SignupNavigationprop>();

  const handleNextPage = async () => {
    let formIsValid = true;
    let newErrors = { ...errors };
  
    // Validation checks remain the same
    if (!nameRegex.test(fullname) || fullname === '') {
      newErrors.fullname = 'Full Name should only contain letters and spaces.';
      formIsValid = false;
    } else {
      newErrors.fullname = '';
    }
  
    if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
      formIsValid = false;
    } else {
      newErrors.email = '';
    }
  
    if (!phoneRegex.test(phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
      formIsValid = false;
    } else {
      newErrors.phone = '';
    }
  
    if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be 5 letters followed by 2 or more digits.';
      formIsValid = false;
    } else {
      newErrors.password = '';
    }
  
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
      formIsValid = false;
    } else {
      newErrors.confirmPassword = '';
    }
  
    setErrors(newErrors);
  
    if (formIsValid) {
      try {
        const userData = {
          fullname,
          email,
          phone,
          password,
          timestamp: new Date().getTime().toString()
        };
        

        // Store data using the platform-specific storage
        const data = await Storage.setItem('userEmail', email);

        // console.log('data', data);
        // await Storage.setItem('userPassword', password);
        // await Storage.setItem('userData', JSON.stringify(userData));
        // await Storage.setItem('userPhone', phone);
        // await Storage.setItem('userName', fullname);
        
        
        // await console.log('-----', SecureStore.setItemAsync('userEmail', email));
        await SecureStore.setItemAsync('userEmail', email)
        // console.log('secusers', secuser);

        // console.log(userData.timestamp);
        await SecureStore.setItemAsync('userPassword', password);


        navigation.navigate('secondpage');
      } catch (error) {
        console.error('Error saving data:', error);
        Alert.alert('Error', 'Failed to save user data. Please try again.');
      }
    } else {
      Alert.alert('Error', 'Please fix the errors before submitting.');
    }
  };

  const handleLoginNavigation = () => {
    navigation.navigate('logincomponent');
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullname}
            onChangeText={setFullname}
          />
          {errors.fullname && <Text style={styles.errorText}>{errors.fullname}</Text>}
        </View>

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
            keyboardType="phone-pad"
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
          />
          {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
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

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
        </View>

        <TouchableOpacity onPress={handleNextPage} style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLoginNavigation} style={styles.loginButton}>
          <Text style={styles.buttonText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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

export default SignupComponent