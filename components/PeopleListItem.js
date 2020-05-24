import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import CapitalizeLetter from '../utils/index'

export default class PeopleListItem extends React.Component {
    constructor(props){
        super(props);
    }
       
    render () {
        const { first, last } = this.props.pessoa.name; 
        const { thumbnail } = this.props.pessoa.picture;

        return (    
            <TouchableOpacity onPress={() => this.props.detailFunction.navigate('PeopleDetail', 
                            { title: first + ' ' + last, people: this.props.pessoa })}>     
                <View style={styles.line}>
                    <Image style={styles.avatar} source={{ uri: thumbnail }} />
                    <Text style={styles.lineText} >{
                        `${
                            CapitalizeLetter(first)
                        } ${
                            CapitalizeLetter(last)
                        }`}
                    </Text> 
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
        borderRadius: 5 ,
        backgroundColor: '#e3f6f5',

        margin: 2.5,

        alignItems: 'center',
        flexDirection: 'row',

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

// export default withNavigation(PeopleListItem)
// JSON.stringify(