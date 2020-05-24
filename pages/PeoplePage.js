import React from 'react';
import { 
    StyleSheet, 
    View,
    ActivityIndicator, 
    Text
} from 'react-native';
import PeopleList from '../components/PeopleList';

import axios from 'axios';

import Error from '../components/Error'

export default class PeoplePage extends React.Component {
    constructor() {
        super();
        this.state ={
            pessoas: [],
            loading: false,
            error: false
        }
    }

    renderLoading() {
        if ( this.state.loading ){
            return <ActivityIndicator size='large' color="#bae8e8" /> ;
        } else {
            return null ;
        }
    }

    componentDidMount () {
        this.setState({ loading: true }) 
        axios.get('https://randomuser.me/api2/?nat=br&results=100')
        .then( response => {
            const pessoas = response.data.results;
            this.setState({
                pessoas : pessoas,
                loading: false
            });
        }).catch( error => {
            this.setState({
                error: true,
                loading: false,
              })
        }) 
    }   
  
    render () {
        return (
            <View style={styles.container}>
                {
                    this.state.loading 
                        ?  <ActivityIndicator size='large' color="#bae8e8" /> 
                        : this.state.error
                            ? <Error title="Ops ... algo deu errado =("/>
                            : <PeopleList 
                                peoples={this.state.pessoas} 
                                detailFunction={this.props.navigation}
                                />
                }                                    
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
