import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from 'react-native'
import React from 'react'

interface Task {
  title: string;
  description: string;
  date: string;
}



const AddTaskFunctions = () => {
    
 const handleaddtask = async (title: string, description: string) => {
    try {
      // Create a task object
      const task = { 
        title, 
        description, 
        date: new Date().toISOString() 
    };
  
      // Get the existing tasks from AsyncStorage
      const storedTasks = await AsyncStorage.getItem('tasks');
      const tasks = storedTasks ? JSON.parse(storedTasks) : [];
  
      // Add the new task to the tasks array
      tasks.push(task);
  
      // Store the updated tasks array back into AsyncStorage
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      
  
      console.log('Task added successfully!');
    } catch (error) {
      console.log('Error saving task:', error);
    }
  };
  
  
  
     const handleDeleteTask = async (title: string) => {
      try {
        // Retrieve stored tasks from AsyncStorage
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          const tasks = JSON.parse(storedTasks);
    
          // Filter out the task to be deleted by its title (or any other identifier)
          const updatedTasks = tasks.filter((task: Task) => task.title !== title);
    
          // Save the updated task list back to AsyncStorage
          await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    
          console.log(`Task with title "${title}" deleted successfully.`);
        }
      } catch (error) {
        console.log('Error deleting task:', error);
      }
    };
  return {

    handleaddtask,
    handleDeleteTask
  }
}

export default AddTaskFunctions