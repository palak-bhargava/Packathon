import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const MainScreen = () => {
    return (
        <SafeAreaView >
            <TouchableOpacity style={styles.backButton}>
                <Text style={{ textAlign: 'center' }}>{'<'}</Text>
            </TouchableOpacity>

            

            <View style={styles.headingContainer}>
                <Text style={styles.heading}>hi davia!</Text>
            </View>

            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#17C1E6', '#57D6F2', '#BBF1FD']} style={styles.weather}>
                <Text style={styles.buttonText}>
                    Barcelona, Spain
                </Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.buttonTemp}>75
                </Text>
                
                <Image style={styles.sunImage} source={require('../components/sun.png')}></Image>
                </View>
            </LinearGradient>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity>
                <Image style={styles.left1} source={require('../components/Frame3.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image style={styles.left2} source={require('../components/Frame4.png')}></Image>
                </TouchableOpacity>
            </View>




        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    heading: {
        color: 'black',
        fontSize: 35,
        fontWeight: '300',
        textAlign: 'left',
        marginLeft: 40,
    },
    headingContainer: {
        //justifyContent: 'center',
        //alignItems: 'center',
        marginTop: 35,
    },
    container: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    backButton: {
        backgroundColor: '#FFD3D5',
        padding: 10,
        borderRadius: 50,
        marginLeft: 15,
        width: 40,
        height: 40,
        marginTop: 20,
    },
    weather: {
        marginTop: 15,
       // backgroundColor: '#FFD3D5',
        borderRadius: 20,
        height: 90,
        width: 330,
        //justifyContent: 'center',
        //alignItems: 'center',
        marginLeft: 40,

    },
    weatherText: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 15,
        fontWeight: 400,
    },
    preFlight: {
        marginTop: 30,
        backgroundColor: '#FFD3D5',
        borderRadius: 20,
        height: 340,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    postFlight: {
        marginLeft: 20,
        marginTop: 30,
        backgroundColor: '#FFD3D5',
        borderRadius: 20,
        height: 340,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        //textAlign: 'center',
        //margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        marginLeft: 20,
        marginTop: 10,
        fontSize: 18,
        fontWeight: '300',
    },
    buttonTemp: {
        fontSize: 30,
        color: '#ffffff',
        backgroundColor: 'transparent',
        marginLeft: 50,
        fontWeight: '300',

    },
    sunImage:{
        marginLeft: 160,
        //marginTop: 20,
        marginTop: -10,
        width:45,
        height:45,
    },
    left1: {
        marginRight: 30,
        marginTop: 20,
    },
    left2: {
        //marginRight: 30,
        marginTop: 20,
    }


})
export default MainScreen