import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet
} from 'react-native';


const LineDetail = ({ label = " -  :  " , content = "  - " }) => (
   
    <View style={styles.line}>
        <Text style={[
            styles.cell, 
            styles.label,
            label.length > 7 ? styles.longLabel : null
            ]}
        >{label}: </Text>
        <Text style={[styles.cell, styles.content]}>{content}</Text>
    </View>
   
)

const styles = StyleSheet.create({

    line: {
        margin: 2,
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5',
        borderRadius: 5
    },
    
    cell:{
        fontSize: 18,
        paddingLeft: 5
    },
  
    label: {
      fontWeight: 'bold',
      flex: 1
    },

    longLabel: {
        fontSize: 14
    },
    
    content: {
        flex: 4
    }

})

export default LineDetail;