import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Entypo';

import {
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Text,
    ImageBackground,
    View,
    FlatList,
} from 'react-native';

const favorites = ['Place A', 'Place B', 'Place C', 'Place D', 'Place E'];
//favorites.push("Place D");
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Item = ({ place }) => (
    <View style={styles.item}>
        <View style={{ flexDirection: 'row' }}>
            <Text style={styles.title}>{place}</Text>
            <TouchableOpacity>
                <Icon
                    name="heart"
                    size={20}
                    color="red"
                    style={styles.favButton}
                />
            </TouchableOpacity>
        </View>

    </View>
);
const renderItem = ({ item }) => (
    <Item place={item} />
);

class ToDoList extends Component {

    render() {
        showMore = () => {
            for (let i = 0; i < 5; i++) {
                favorites.push("Place");
            }
            console.log(favorites)
        }
        return (
            <SafeAreaView>
                <View>
                    <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover" style={styles.background} >
                        
                        <View style={styles.container}>
                        <TouchableOpacity style={styles.backButton}>
                            <Icon
                                name="arrow-left-l"
                                color="grey"
                                size={35}
                            />
                        </TouchableOpacity>
                            <Text style={styles.heading}>Here's some places to go</Text>
                            <FlatList
                                data={favorites}
                                renderItem={renderItem}
                                keyExtractor={item => item}
                            />
                        </View>
                    </ImageBackground>

                </View>


            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        //marginTop: 60
    },
    heading: {
        fontSize: 37,
        fontWeight: "300"
    },
    subheading: {
        fontSize: 27,
        marginTop: 50,
    },
    buttonContainter: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    showMoreButton: {
        height: 50,
        width: 150,
        backgroundColor: "#FFD3D5",
        padding: 10,
        borderRadius: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        backgroundColor: "#FFD3D5",
        padding: 10,
        borderRadius: 10,
        height: 50,
        width: 320,
        marginRight: 15,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 20,
    },
    favButton: {
        marginLeft: 200,
    },
    background: {
        justifyContent: 'center',
        width: windowWidth,
        height: windowHeight
    },
    backButton: {
        backgroundColor: "#FFD3D5",
        alignItems: 'center',
        width: 60,
        marginBottom: 50,
        borderRadius: 10
    }
});

export default ToDoList;