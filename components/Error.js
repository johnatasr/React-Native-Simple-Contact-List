import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const Error = (props) => (
    <View style={style.container}>
        <Icon name="exclamationcircle" size={50} color="#eb4034" style={style.error}/>
        <Text style={style.title} >{props.title}</Text>
    </View>
)

const style = StyleSheet.create({

    container: {
        marginTop: 25,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    title: {
        fontSize: 30,
        color: '#272343',
        marginTop: 15
    },
    
})

export default Error;