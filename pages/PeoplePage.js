import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Header from '../components/Header';
import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {
    constructor() {
        super();
        this.state ={
            pessoas: []
        }
    }

    componentDidMount () { 
        axios.get('https://randomuser.me/api/?nat=br&results=10')
        .then( response => {
            const pessoas = response.data.results;
            this.setState({pessoas : pessoas});
        }) 
    }   
  
    render () {
        return (
            <View style={styles.container}>
                <Header title="Contatos"/>
                <PeopleList peoples={this.state.pessoas} onPress={(page) => {
                    this.props.navigation.navigate('PeopleDetail')
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
