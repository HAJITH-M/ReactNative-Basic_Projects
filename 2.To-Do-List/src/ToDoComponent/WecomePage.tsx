import React from 'react'
import { View, Text, ImageBackground, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../App'



function WelcomePage() {

    type WelcomeNavigationProp = StackNavigationProp<RootStackParamList, 'welcomepage'>
 
   const navigation = useNavigation<WelcomeNavigationProp>();

   const handleNextPage = () => {
    navigation.navigate('ToDoComponent');
   }
    return (
        <>
        <View style={{backgroundColor: '#F4C27F', width: '100%', height: '100%', justifyContent: 'center', }}> 
            <View style={{width:'98%', justifyContent: 'center', rowGap:50}}>
                <View style={{marginTop:70}}>

                    <View >
                        <Text style={styles.TextHeading}>Project - 2</Text>
                        <Text style={styles.Text}>To-Do-List</Text>
                    </View>

                    <View style={{marginHorizontal:15}}>
                        <Image source={require('../../assets/ImagesToDo/ToDoImage.png')}
                    style={{width: '100%'}} 
                    resizeMode='contain'
                        />
                    </View>
                </View>

                <TouchableOpacity style={{marginTop:50, paddingTop:40}} onPress={handleNextPage}>
                    <LinearGradient colors={['#F4C27F', '#D8605B']} start={[0, 1]} end={[1, 0]}  style={{marginHorizontal: 40, marginVertical: 100, justifyContent: 'center', alignItems: 'center', padding: 7, borderRadius: 50, borderWidth: 1, borderColor: '#D8605B'}}>
                        <Text style={styles.TouchableText}>Get Started</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </View>
        </>
    )
}


const styles = StyleSheet.create(
    {
        TextHeading:{
            fontSize: 20,
            // fontWeight: 'bold',
            textAlign: 'center',
        },
        Text:{
            fontSize: 40,
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 10,
            textAlign: 'center',
        },
        TouchaleBackground:{
            backgroundColor: '#D8605B',
            padding: 10,
            borderRadius: 5,
            marginHorizontal: 40,
        },
        TouchableText:{
            fontSize: 24,
            fontWeight: '700',
            marginTop: 10,
            textAlign: 'center',
            color: '#FFF8E6',
            letterSpacing: 1
        },
        
    }
)

export default WelcomePage
