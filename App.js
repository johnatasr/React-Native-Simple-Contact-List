import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import PeopleList from './components/PeopleList';

import axios from 'axios';

export default class App extends React.Component {

  constructor() {
    super();
    this.state ={
      pessoas: []
    }
  }

  componentDidMount () { 
    axios.get('https://randomuser.me/api/?nat=br&results=5')
    .then( response => {
        const pessoas = response.data.results;
        this.setState({pessoas : pessoas});
    }) 
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Header title="Contatos"/>
        
        <PeopleList peoples={this.state.pessoas} />

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
