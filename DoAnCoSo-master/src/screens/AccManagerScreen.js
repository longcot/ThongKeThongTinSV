import React, { useState, useContext } from 'react';
import { Text } from 'react-native-elements';
import { View, StyleSheet, Button } from 'react-native';
import { TextInput, Divider } from 'react-native-paper';
import { Context as StatContext } from '../context/StatisticContext';


const AccManagerScreen = ({ navigation }) => {

    const [mssv, setMssv] = useState('');
    const [hovaten, setHovaten] = useState('');

    const { searchSV } = useContext(StatContext);

    return (
        <View style={styles.view}>
            <TextInput
                label='MSSV'
                mode='outlined'
                value={mssv}
                onChangeText={setMssv}
                keyboardType = 'numeric'
            />
            <TextInput
                label='Họ và tên'
                mode='outlined'
                value={hovaten}
                onChangeText={setHovaten}
            />
            <Text></Text>
            <Button
                title="Tìm kiếm"
                onPress={() => {
                    searchSV(mssv, hovaten)
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 8
    }
});

export default AccManagerScreen; 