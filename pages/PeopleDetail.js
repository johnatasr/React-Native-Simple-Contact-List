import React from 'react';
import { 
    StyleSheet, 
    View, 
    ScrollView,
    Image,
    Button,
    Text 
} from 'react-native';

import Line from '../components/LineDetail'
import Captalize from '../utils/index'

export default class PeopleDetail extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render () { 
        
        const people = this.props.route.params.people;
        
        return (
            <View style={styles.container}>
                <View style={styles.headerDetail} >
                  <Image 
                      source={{ uri: people.picture.large }}
                      style={styles.avatar}
                  />

                  <View style={styles.divButtons} >
                    <View style={styles.button}>
                      <Button 
                        title='Whatsapp' 
                        color="#bae8e8"
                        fontCol  ></Button>
                    </View>
                    <View style={styles.button}>
                      <Button title='Ligar' color="#bae8e8"></Button>
                    </View>
                    
                  </View>
                
                </View>
                
                <ScrollView>
                  <View style={styles.detailContainer}>
                      <Line label="Email" content={people.email} />
                      <Line label="Cidade" content={Captalize(people.location.city)} />
                      <Line label="Estado" content={Captalize(people.location.state)} />
                      <Line label="Telefone" content={people.phone} />
                      <Line label="Celular" content={people.cell} />
                      <Line label="Nacionalidade" content={people.nac} />
                  </View>  
                </ScrollView>                        
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },

  headerDetail: {
    flexDirection: 'row'
  },

  avatar: {
    aspectRatio: 1,
    borderRadius: 70,
    alignItems: "center",
    alignContent: "center",
    flex: 2 
  },

  divButtons: {
    marginLeft: 15,
    marginTop: 30,
    flex: 3
  },

  button: {
    margin: 5,
    borderRadius: 5,
    color: "#272343",
    fontWeight: 'bold'
  },

  detailContainer: {
    backgroundColor: '#e3f6f5',
    marginTop: 20,
    elevation: 1,
    borderRadius: 5
  },

});


