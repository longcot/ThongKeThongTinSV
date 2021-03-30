import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'

const data = [
    { 
      key: 'Quản lý tài khoản',
      source: require('../images/taikhoan.png'),
      navi:'AccManager'
    }, 
    { 
      key: 'Thống kê \n theo trường thông tin ',
      source: require('../images/thongke.png'),
      navi:'Statistic'
    }
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;

const ManagementScreen = ({navigation}) => {
    const renderItem = ({ item, index }) => {
        if (item.empty === true) {
          return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(item.navi)}
          >
            <Image
                source={item.source}
                style={{ width: Dimensions.get('window').width / numColumns -80, height: Dimensions.get('window').width / numColumns -80}}
            />
            <Text style={styles.text}>{item.key}</Text>
          </TouchableOpacity>
        );
      };
    
    return (
        <View style={{backgroundColor:'white',flex:1}}>
            <FlatList
                data={formatData(data, numColumns)}
                style={styles.container}
                renderItem={renderItem}
                numColumns={numColumns}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: 20,
    },
    item: {
      alignItems: 'center',
      flex: 1,
      margin: 1,
      height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    text:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold'
    }
});

export default ManagementScreen; 