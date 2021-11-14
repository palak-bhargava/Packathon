import React, { Component, Fragment } from 'react';
import DuringFlight from './components/duringFlight';
import ToDoList from './components/toDoList';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function App() {
  
  
  //render() {
    
    return (
      <SafeAreaView>
        
       <DuringFlight/>
      </SafeAreaView>

    );
  //}
}
export default App;
