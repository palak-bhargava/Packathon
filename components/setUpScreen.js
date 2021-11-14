import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Ionicons';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function SetUpScreen({ navigation }) {

    return (
        <SafeAreaView style={{backgroundColor:'white'}}>
            <ImageBackground source={require('../assets/images/background.png')} style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Let's get you started!</Text>
                    <View >
                        <Text style={styles.subheading}>What is your name?</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput style={styles.textInput1} placeholder="firstname" />
                        <TextInput style={styles.textInput1} placeholder="lastname" />
                    </View>
                    <View >
                        <Text style={styles.subheading}>What is your flight number? </Text>
                    </View>
                    <View style={styles.flightContainer}>
                    <Icon2
                            name="airplane"
                            size={35}
                            style={styles.airplane}
                        />
                        <TextInput style={styles.textInput2} placeholder="flight number" />
                        
                    </View>
                    <TouchableOpacity style={styles.nextButton}
                        onPress={() => {
                            navigation.navigate('MainScreen');
                        }}
                    >
                        <Icon
                            name="arrow-right-l"
                            size={40}
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 32,
        marginTop: 90
    },
    heading: {
        fontSize: 40
    },
    subheading: {
        fontSize: 27,
        marginTop: 50,
    },
    textInput1: {
        backgroundColor: "#FFD3D5",
        padding: 10,
        borderRadius: 10,
        height: 50,
        width: 152,
        marginRight: 15,
        marginTop: 10,
        fontSize: 20
    },
    textInput2: {
        backgroundColor: "#FFD3D5",
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 10,
        fontSize: 20
    },
    nextButton: {
        marginLeft: 277,
        marginTop: 50
    },
    background: {
        width: windowWidth,
        height: windowHeight
    },
    airplane: {
        paddingLeft: 5,
    },
    flightContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: "#FFD3D5", 
        borderRadius: 10, 
        padding: 10,
        marginTop: 10,
       
    }
});

export default SetUpScreen;