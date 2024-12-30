import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import { SplashScreenProps } from './SplashScreenProps'

const SplashScreen = (props: SplashScreenProps) => {
  // const navigation = useNavigation<SplashScreenProps>()

  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('welcomecomponent')
    }, 5000)
  }, [])

  return (

    <View className="flex-1 justify-center items-center bg-blue-500">
      <MaterialIcons name="checklist" size={100} color="white" />
      <Text className="text-white text-3xl font-bold mt-4">Welcome to TodoList</Text>
      <Text className="text-white text-lg mt-2">Your Personal Task Manager</Text>
    </View>

  )
}

export default SplashScreen