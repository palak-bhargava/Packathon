import React, { Component, Fragment } from 'react';
import SetUpScreen from './components/setUpScreen';


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