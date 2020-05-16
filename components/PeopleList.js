import React from 'react';
import { View, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';


export default class PeopleList extends React.Component {
    constructor(){
        super();
        this.props = {
            peoples: []
        }
    }
   
    renderList () {
        const listaNomes = this.props.peoples.map((pessoa) => {
            return <PeopleListItem  pessoa={pessoa} />
        })
    
        return listaNomes
    }
    
    render () {
        return (
            <View style={styles.container}>
                {this.renderList()}
            </View>
       )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#59C9A5'
    },
    
})

