import React from 'react';
import { 
    StyleSheet, 
    View,
    FlatList 
} from 'react-native';

import PeopleListItem from './PeopleListItem';

export default class PeopleList extends React.Component {
    constructor(props){
        super(props);
    }
    
    render () {
        return (
            <FlatList 
                style={styles.container}
                data={this.props.peoples}    
                renderItem={({ item }) => (
                    <PeopleListItem  pessoa={item} detailFunction={this.props.detailFunction}/>            
                )}
                keyExtractor={ (item, index) => item.name.first + "_" + `${Math.floor(Math.random() * 10 * 2) }` + `${index}` }
            />
       )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 5,
        flex: 1,    
    },
    
})




// <ScrollView style={styles.container}>
// {this.renderList()}
// </ScrollView>