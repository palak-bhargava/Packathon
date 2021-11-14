import React from 'react';
import MainScreen from './components/mainScreen';

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
 
    return(
      <SafeAreaView>
        <MainScreen/>
      </SafeAreaView>
      
    );
}
export default App;