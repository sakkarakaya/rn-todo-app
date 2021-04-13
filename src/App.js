/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import { SafeAreaView, View, Text, FlatList, KeyboardAvoidingView } from 'react-native';

import { main } from './style';
import TodoInput from './components/TodoInput';
import TodoCard from './components/TodoCard';

const App = () => {
  const [list, setList] = useState([]);

  const renderItem = ({ item }) => (
    <TodoCard 
    data={item}
    onDone={(i) => doneTodo(i) }
    onRemove={() => removeTodo(item.id)}
    /> 
);
    
 

  function addTodo(text){
    const element = {
      id: list.length,
      text,
      isDone: false
    }
    const myArray = [...list];
    myArray.push(element);
    console.log(myArray)
    setList(myArray)
  }

  function doneTodo(i){
      const newArray = [...list];
      const myIndex = newArray.findIndex(index => index.id == i );
      newArray[myIndex].isDone = !newArray[myIndex].isDone;
      setList(newArray)
  }

  function removeTodo(i){
    const removedArray = [...list];
    const myIndex = removedArray.findIndex(index => index.id == i );
    removedArray.splice(myIndex, 1)
    setList(removedArray)
  }
  
  return (
    <SafeAreaView style={main.container}>
      <KeyboardAvoidingView style={main.container} behavior="padding">

        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={main.counterText}>{list.filter(i => i.isDone == false).length}</Text>
        </View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => <Text style={main.nothing}>nothing to do...</Text>}
        />
        <TodoInput onEnter={t => addTodo(t)} />

      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

export default App

