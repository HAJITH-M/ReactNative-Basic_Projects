
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../App';

const WelcomePage = () => {

    type WelcomeNavigationProp = StackNavigationProp<RootStackParamList, 'welcomepage'>
 
    const navigation = useNavigation<WelcomeNavigationProp>();
    const handleNextPage = () => {
        navigation.navigate('signupcomponent');
       }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Thank you for joining us</Text>
      <Button title="Next" onPress={handleNextPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default WelcomePage;
