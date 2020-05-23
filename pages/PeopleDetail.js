import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Header from '../components/Header';

export default class PeopleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.props ={
            pessoa: []
        }
    }
  
    render () {
        return (
            <View style={styles.container}></View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
