import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


import CapitalizeLetter from '../utils/index'

export default class PeopleListItem extends React.Component {
    constructor(props){
        super(props);
        this.props = {
            pessoa: [],
        }
    }
       
    render () {
        const { first, last } = this.props.pessoa.name; 
        const { thumbnail } = this.props.pessoa.picture;
        const { detailFunction } = this.props;

        return (    
            <TouchableOpacity onPress={() => detailFunction()}>     
                <View key={ first } style={styles.line}>
                    <Image style={styles.avatar} source={{ uri: thumbnail}} />
                    <Text style={styles.lineText} >{
                        `${
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
        color: '#272343',
        flex: 7
    },

    avatar:{
        aspectRatio: 1,
        borderRadius: 50,
        flex: 1,
        marginLeft: 15,
    }

})

