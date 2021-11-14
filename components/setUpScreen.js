import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Ionicons';

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

class SetUpScreen extends Component {
    render() {
        return (
            <SafeAreaView>
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
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={styles.textInput2} placeholder="fligh number">
                                <Icon2
                                    name="airplane"
                                    size={35}
                                />
                            </TextInput>

                        </View>
                        <TouchableOpacity style={styles.nextButton}>
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
        marginTop: 10
    },
    textInput2: {
        backgroundColor: "#FFD3D5",
        padding: 10,
        borderRadius: 10,
        height: 50,
        width: 320,
        marginRight: 15,
        marginTop: 10
    },
    nextButton: {
        marginLeft: 277,
        marginTop: 40
    },
    background:{
        width: windowWidth,
        height:windowHeight
    }
});

export default SetUpScreen;