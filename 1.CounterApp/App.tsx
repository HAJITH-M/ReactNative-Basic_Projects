import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const startValue = 0;
  const [count, setCount] = useState(startValue);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <>
      <View style={styles.BackgroundContainer}>
        <View style={styles.MainContainer}>
          <Text style={styles.HeadingText}>Day-1 Project</Text>
          <Text style={styles.HeadingText2}>Counter App</Text>
          <View style={styles.CountContainer}>
            <Text style={styles.CountText}>{count}</Text>
          </View>
          <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.Button} onPress={increaseCount}>
              <Text style={styles.ButtonText}>Increase Count</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={decreaseCount}>
              <Text style={styles.ButtonText}>Decrease Count</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  BackgroundContainer: {
    flex: 1,
    backgroundColor: '#8D0B41',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  HeadingText: {
    padding: 10,
    backgroundColor: '#FFF8E6',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#D39D55',
    marginTop: 50,
    marginBottom: 10,
    borderRadius: 5,
  },
  HeadingText2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF8E6',
    textAlign: 'center',
    marginBottom: 30,
  },
  CountContainer: {
    backgroundColor: '#FFF8E6',
    padding: 40,
    marginBottom: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CountText: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#D39D55',
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  Button: {
    backgroundColor: '#D39D55',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    fontSize: 18,
    color: '#FFF8E6',
    fontWeight: 'bold',
  },
});

export default App;
