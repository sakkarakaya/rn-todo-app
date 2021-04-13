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
    <TodoCard data={item}/> 
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
  
  return (
    <SafeAreaView style={main.container}>
      <KeyboardAvoidingView style={main.container} behavior="padding">

        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={main.counterText}>10</Text>
        </View>
        <FlatList
          data={list}
          renderItem={renderItem}
        />
        <TodoInput onEnter={t => addTodo(t)} />

      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

export default App

