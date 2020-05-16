import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import CapitalizeLetter from '../utils/index'

export default class PeopleListItem extends React.Component {
    constructor(){
        super();
        this.props = {
            pessoa: []
        }
    }
       
    render () {
        const { title, first, last } = this.props.pessoa.name; 
        const { thumbnail } = this.props.pessoa.picture;

        return (    
            <TouchableOpacity onPress={ () => console.log('Clicado') }>     
                <View key={ first } style={styles.line}>
                    <Image style={styles.avatar} source={{ uri: thumbnail}} />
                    <Text style={styles.lineText} >{
                        `${
                            CapitalizeLetter(title)
                        } ${
                            CapitalizeLetter(first)
                        } ${
                            CapitalizeLetter(last)
                        }`}</Text> 
                </View>
            </TouchableOpacity>
       )
    }
}

const styles = StyleSheet.create({
    
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",

        alignItems: 'center',
        flexDirection: 'row'
    },

    lineText : {
        fontSize: 20,
        paddingLeft: 15,
        color: '#D81E5B',
        flex: 7
    },

    avatar:{
        aspectRatio: 1,
        borderRadius: 50,
        flex: 1,
        marginLeft: 15,
    }

})

