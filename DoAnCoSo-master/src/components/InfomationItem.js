import * as React from 'react';
import { TextInput,Subheading} from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const InformationItem = ({ title,content,disabled,onChangeText }) => {
    return (
        <TextInput        
          label={title}
          disabled={disabled}
          mode='outlined'
          value={content}
          onChangeText={content => this.setState({ content })}
          style={styles.textInput}
        />
    ); 
};

const styles = StyleSheet.create({
    view: {
        flexDirection:'row',
        justifyContent: 'space-around',
        flex:1
    },
    subheading: {
      paddingVertical:20
    },
    textInput:{
        flex:1,
        padding:8       
    }
});

export default InformationItem;