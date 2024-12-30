
import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { StyledText, StyledView, StyledTextInput } from '../../Styled/StyledComponents'
import Feather from '@expo/vector-icons/Feather'
import AddTaskFunctions from './AddTaskFunctions'



const AddTask = () => {
  const addtask = AddTaskFunctions()
  const navigation = useNavigation()

    const [addTask, setAddTask] = useState({
      title: '',
      description: ''
    });
  
    const handleSetTask = (key: string, value: string) => {
      setAddTask({...addTask, [key]: value});
    };
  

  return (
    <StyledView className='flex-1'>
      <StyledView className='bg-indigo-400'>
        <StyledView className='flex flex-row justify-between items-center w-full px-4 py-4 mt-8'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <StyledText className='text-2xl mt-3 font-bold text-white'>Add Task</StyledText>
          <View style={{width: 24}} />
        </StyledView>
      </StyledView>

      <StyledView className='w-full px-4 mt-8'>
        <StyledView className='mb-6'>
          <StyledText className='text-sm text-gray-600 mb-2'>Title</StyledText>
          <StyledTextInput 
            value={addTask.title}
            onChangeText={(value) => handleSetTask('title', value)}
            className='w-full bg-white p-4 rounded-lg'
            placeholder='Enter task title'
          />
        </StyledView>

        <StyledView className='mb-6'>
          <StyledText className='text-sm text-gray-600 mb-2'>Description</StyledText>
          <StyledTextInput
            className='w-full bg-white p-4 rounded-lg'
            placeholder='Enter task description'
            multiline
            numberOfLines={4}
            textAlignVertical='top'
            value={addTask.description}
            onChangeText={(value) => handleSetTask('description', value)}
          />
        </StyledView>

        <StyledView className='mb-6'>
          <StyledText className='text-sm text-gray-600 mb-2'>Due Date</StyledText>
          <TouchableOpacity className='w-full bg-white p-4 rounded-lg flex-row items-center'>
            <Feather name="calendar" size={20} color="gray" />
            <StyledText className='ml-2 text-gray-500'>Select due date</StyledText>
          </TouchableOpacity>
        </StyledView>

        <TouchableOpacity className='bg-indigo-400 p-4 rounded-lg' onPress={() => addtask.handleaddtask(addTask.title, addTask.description)}>
          <StyledText className='text-white text-center font-bold text-lg'>Add Task</StyledText>
        </TouchableOpacity>

      </StyledView>
    </StyledView>
  )
}

export default AddTask