import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native'

const PreFlight = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableOpacity style={styles.backButton}>
                <Text style={{ textAlign: 'center' }}>{'<'}</Text>
            </TouchableOpacity>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>pre-flight</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30}}>
                <Text style={styles.subheading}>travel essentials
                
                </Text>
                <TouchableOpacity style={styles.addButton}>
                        <Text style={{ textAlign: 'center' }}>{'+'}</Text>
                    </TouchableOpacity>
                

            </View>

            <ScrollView style={styles.todoContainer}>
                <View style={styles.todo}>
                    <TextInput style={styles.userInput} placeholder='Passport/ID' />
                </View>
                <View style={styles.todo}>
                    <TextInput style={styles.userInput} placeholder='Travel pillow' />
                </View>
                <View style={styles.todo}>
                    <TextInput style={styles.userInput} placeholder='Hand Sanitzer' />
                </View>

            </ScrollView>

            <View style={{ flexDirection: 'row', marginTop: 30}}>
                <Text style={styles.subheading}>errands
                </Text>
                <TouchableOpacity style={styles.addButton}>
                        <Text style={{ textAlign: 'center' }}>{'+'}</Text>
                    </TouchableOpacity>
            </View>

            <ScrollView style={styles.todoContainer}>
                <View style={styles.todo}>
                    <TextInput style={styles.userInput} placeholder='Water the plants' />
                </View>
                <View style={styles.todo}>
                    <TextInput style={styles.userInput} placeholder='Drop off keys at Johns' />
                </View>
                <View style={styles.todo}>
                    <TextInput style={styles.userInput} placeholder='Take out the trash' />
                </View>
                <View style={styles.todo}>
                    <TextInput style={styles.userInput} placeholder='Water the plants' />
                </View>
                <View style={styles.todo}>
                    <TextInput style={styles.userInput} placeholder='Drop off keys at Johns' />
                </View>
                <View style={styles.todo}>
                    <TextInput style={styles.userInput} placeholder='Take out the trash' />
                </View>
            </ScrollView>


        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    heading: {
        color: 'black',
        fontSize: 40,
        fontWeight: '300',
        textAlign: 'left',
        marginLeft: 40,
    },
    headingContainer: {
        //justifyContent: 'center',
        //alignItems: 'center',
        marginTop: 15,
    },
    subheadingContainer: {
        //justifyContent: 'center',
        //alignItems: 'center',
        marginTop: 30,
    },
    subheading: {
        color: 'black',
        fontSize: 25,
        fontWeight: '300',
        marginLeft: 40,
    },
    todoContainer: {
        marginTop: 10,

    },
    todo: {
        marginTop: 10,
        backgroundColor: '#FFD3D5',
        borderRadius: 15,
        height: 40,
        width: 250,
        marginLeft: 70,

    },
    userInput: {
        marginLeft: 10,
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
    addButton: {
        backgroundColor: '#FFD3D5',
        padding: 10,
        borderRadius: 50,
        marginLeft: 30,
        width: 30,
        height: 30,
       
    },

})
export default PreFlight
