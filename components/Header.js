import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const Header = (props) => (
    <View style={style.container}>
        <TouchableOpacity>
            <Icon name="left" size={30} color="#FFFF" style={style.backIcon}/>
        </TouchableOpacity> 
        <Text style={style.title} >{props.title}</Text>
    </View>
)

const style = StyleSheet.create({

    container: {
        marginTop: 10,
        backgroundColor: '#bae8e8',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 30,
        color: '#272343',
        marginLeft: 10
    },

    
})

export default Header;