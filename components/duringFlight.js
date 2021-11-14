import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Entypo';

import {
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Text,
    ImageBackground,
    View,
} from 'react-native';

const favorites = ['Place A', 'Place B', 'Place C', 'Place D', 'Place E'];
//favorites.push("Place D");


const Item = ({ place }) => (
    <View style={styles.item}>
        <Text style={styles.testStyle}>{place}</Text>
    </View>
);
const renderItem = ({ item }) => (
    <Item place={item} />
);


class DuringFlight extends Component {
    render() {
        return (
            <SafeAreaView>
                
                <View style={styles.container}>
                <TouchableOpacity style={styles.backButton}>
                            <Icon
                                name="arrow-left-l"
                                color="grey"
                                size={35}
                            />
                        </TouchableOpacity>

                    <Text style={styles.heading}>What are you looking to do tonight?</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.nextButton}>
                            <Icon2
                                name="restaurant"
                                size={35}
                            />
                            <Text>Restaurant</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextButton}>
                            <Icon2
                                name="location"
                                size={35}
                            />
                            <Text>Sights</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextButton}>
                            <Icon
                                name="shopping-bag-1"
                                size={35}
                            />
                            <Text>Shopping</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextButton}>
                            <Icon3
                                name="beach"
                                size={35}
                            />
                            <Text>Beach</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextButton}>
                            <Icon4
                                name="drink"
                                size={35}
                            />
                            <Text>Night Life</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextButton}>
                            <Icon4
                                name="map"
                                size={35}
                            />
                            <Text>Historical</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.heading}>Your Current Plan:</Text>
                        <View>
                            <FlatList
                                data={favorites}
                                renderItem={renderItem}
                                keyExtractor={item => item}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 30,
    },
    heading: {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 20
    },
    subheading: {
        fontSize: 27,
        marginTop: 50,
    },
    nextButton: {
        height: 80,
        width: 100,
        backgroundColor: "#FFD3D5",
        padding: 10,
        borderRadius: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: "#FFD3D5",
        padding: 10,
        borderRadius: 10,
        height: 50,
        width: 320,
        marginRight: 15,
        marginTop: 10
    },
    testStyle: {
        fontSize: 20
    },
    item: {
        backgroundColor: "#FFD3D5",
        padding: 10,
        borderRadius: 10,
        margin: 5,
    },
    backButton: {
        backgroundColor: "#FFD3D5",
        alignItems: 'center',
        width: 60,
        marginBottom: 20,
        borderRadius: 10
    }
});

export default DuringFlight;