import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginHome from '../LogIn/LoginComponent';

const ProtectedRoute = ({ component: Component }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // Track login state

  // Simulate checking for a logged-in user
  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      setIsLoggedIn(!!userToken); // If token exists, user is logged in
    };
    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    // Show loading while checking login status
    return <Text>Loading...</Text>;
  }

  if (isLoggedIn) {
    // If logged in, render the protected route (HomePage)
    return <Component />;
  }

  // If not logged in, redirect to login screen
  return <LoginHome />;
};

export default ProtectedRoute;
