import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react"
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type State = {
  id: string;
  name: string;
}

const ToDoComponent = ()=> {
  const [task, setTask] = useState<string>('');
  const [saveTasks, setSavedTask] = useState<State[]>([]);

  const addtask = () =>{
    if(task){
      const newTask = [...saveTasks, {id: Date.now().toString(), name: task} ];
      setSavedTask(newTask);
      store(newTask);
      setTask('');
    }
  };

  const store = async (newTask: State[]) =>{
    try{
      await AsyncStorage.setItem('task', JSON.stringify(newTask));
    }
    catch(e){
      console.error('Error storing data', e);
    }
  }

  const retrive = async () =>{
    try{
      const taskStored = await AsyncStorage.getItem('task');
      if(taskStored){
        setSavedTask(JSON.parse(taskStored));
      }
    }
    catch(e){
      console.error('Error retrieving data', e);
    }
  }

  useEffect(()=>{
    retrive();
  }, []);

  const removeTask = async (id:string) =>{
    const newTask = saveTasks.filter((task) => task.id !== id);
    setSavedTask(newTask);
    store(newTask);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Enter a task"
        />
        <TouchableOpacity onPress={addtask}>
          <LinearGradient 
            colors={['#F4C27F', '#D8605B']} 
            start={[0, 1]} 
            end={[1, 0]} 
            style={styles.addButton}
          >
            <Text style={styles.buttonText}>Add Task</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <FlatList
        data={saveTasks}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.name}</Text>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <LinearGradient 
                colors={['#F4C27F', '#D8605B']} 
                start={[0, 1]} 
                end={[1, 0]} 
                style={styles.deleteButton}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFF8E6',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D8605B',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  addButton: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 9,
    paddingBottom: 9,
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D8605B',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFF8E6',
    letterSpacing: 1,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F4C27F',
    borderRadius: 10,
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 20,
    color: '#FFF8E6',
  },
  deleteButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D8605B',
  },
  deleteButtonText: {
    color: '#FFF8E6',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
});

export default ToDoComponent;