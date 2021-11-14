import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'

const PreFlight = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity style={styles.backButton}>
                <Text style={{ textAlign: 'center' }}>{'<'}</Text>
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>pre-flight</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.subheading}>travel essentials</Text>
                </View>

                <ScrollView style={styles.todoContainer}>
                    <View style={styles.todo}>
                        <Text style={styles.userInput}> Passport/ID</Text>
                    </View>
                    <View style={styles.todo}>
                        <Text style={styles.userInput}> Travel Pillow </Text>
                    </View>
                    <View style={styles.todo}>
                        <Text style={styles.userInput}> Hand Sanitizer</Text>
                    </View>
                    <View style={styles.todo}>
                        <Text style={styles.userInput}> Mask</Text>
                    </View>
                </ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput placeholder="enter a new essential" style={styles.todo1} />
                    <TouchableOpacity style={styles.imageButton}>
                        <Image source={require('../assets/plusDark.png')}
                            style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{ flex: 1 }}>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.subheading}>errands
                </Text>
                </View>
                <ScrollView style={styles.todoContainer}>

                    <View style={styles.todo}>
                        <Text style={styles.userInput}> Water the plants</Text>
                    </View>
                    <View style={styles.todo}>
                        <Text style={styles.userInput}> Drop off keys at John's</Text>
                    </View>
                    <View style={styles.todo}>
                        <Text style={styles.userInput}> Take out the trash</Text>
                    </View>
                    <View style={styles.todo}>
                        <Text style={styles.userInput}> Water the plants</Text>
                    </View>

                </ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput placeholder="enter a new errand" style={styles.todo2} />
                    <TouchableOpacity style={styles.imageButton}>
                        <Image source={require('../assets/plusDark.png')}
                            style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
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
    subheading: {
        color: 'black',
        fontSize: 20,
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
        justifyContent: 'center'

    },
    todo1: {
        marginTop: 10,
        backgroundColor: '#FF777B',
        borderRadius: 15,
        height: 40,
        width: 250,
        marginLeft: 70,
        justifyContent: 'center',
        padding: 10,
    },
    
    todo2: {
        backgroundColor: '#FF777B',
        borderRadius: 15,
        height: 40,
        width: 250,
        marginLeft: 70,
        padding: 10,
        marginBottom: 20,

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
        //marginTop: 10,
    },
    addButton: {
        backgroundColor: '#EAE9E9',
        padding: 10,
        borderRadius: 50,
        marginLeft: 30,
        width: 30,
        height: 30,

    },
    imageButton: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 10,

    }

})
export default PreFlight
