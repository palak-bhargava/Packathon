import React, { Component, Fragment } from 'react';
import DuringFlight from './components/duringFlight';
import ToDoList from './components/toDoList';
import SetUpScreen from './components/setUpScreen';
import PreFlight from './components/preFlight';

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
       <SetUpScreen/>
      </SafeAreaView>

    );
  //}
}

export default App;

