import { Entypo, Feather } from "@expo/vector-icons";
import { StyledMaterialIcons, StyledSimpleLineIcons, StyledText, StyledView } from "../../Styled/StyledComponents";
import { ScrollView, TouchableOpacity } from "react-native";
import { vector } from "../../assets/Svg/Vector";
import { SvgXml } from "react-native-svg";
import { Text } from "react-native";
import { useCallback, useEffect, useState } from "react";
// import { handleaddtask, handleDeleteTask } from "../AddTask/AddTaskFunctions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HomePageProps } from "./HomePageProps";
import React from "react";
import AddTaskFunctions from "../AddTask/AddTaskFunctions";



const HomePage = (props: HomePageProps) => {
  interface Task {
    title: string;
    description: string;
  }

  const homepageTask = AddTaskFunctions()

  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.log('Error loading tasks:', error);
    }
  };

  useEffect(
    useCallback(()=>{
      loadTasks()

    },[])
    // Load tasks when the component mounts
  );


  const deleteTask = async (title: string) => {
    try {
      await homepageTask.handleDeleteTask(title);  // Delete the task from AsyncStorage

    } catch (error) {
      console.log('Error deleting task:', error);
    }
  };


  return (
    <StyledView className='flex-1 bg-indigo-50'>
      <StyledView className='bg-indigo-400'>
        <StyledView className='flex flex-row justify-between items-center w-full px-4 py-4 mt-8'>
          <StyledText className='text-2xl mt-3 font-bold text-white'>TODO APP</StyledText>
          <StyledView className='relative'>
            <Feather name="calendar" size={50} color="white" />
            <StyledText className='absolute top-5 left-3.5 text-lg font-medium text-white'>15</StyledText>
          </StyledView>
        </StyledView> 
      </StyledView>

      <ScrollView className='w-full px-2 '>
        {tasks.length > 0 ? tasks.map((task, index) => (
          <StyledView key={index} className='flex flex-row justify-between items-center w-full px-4 mt-8 bg-white p-6 rounded-lg'>
            <StyledView>
              <StyledText className='text-sm text-indigo-500 font-semibold'>{task.title}</StyledText>
              <StyledText className='text-sm font-semibold'>{task.description}</StyledText>
            </StyledView>

            <StyledView className='flex flex-row gap-x-4'>
              <TouchableOpacity>
                <StyledSimpleLineIcons name="pencil" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(task.title)}>
                <StyledMaterialIcons name="delete" size={24} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
                <SvgXml xml={vector} width="24" height="24" />
              </TouchableOpacity>
            </StyledView>
          </StyledView>
        )) : (
          <Text>No tasks found!</Text>
        )}
      </ScrollView>

      <StyledView className='absolute bottom-6 right-6 rounded-full bg-indigo-400 p-4'>
        <Entypo name="add-to-list" size={24} color="white" onPress={() => props.navigation.navigate('addtask')} />
      </StyledView>
    </StyledView>
  );
};

export default HomePage;
