import React, { useEffect, useContext } from 'react';
import { View, Text,StyleSheet, FlatList  } from 'react-native'
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'
import { Context as NotificationContext } from '../../context/NotificationContext';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NotificationScreen = ({ navigation }) => {
    const { state, getNoti } = useContext(NotificationContext);
    useEffect(() => {
        getNoti();
        const listener = navigation.addListener('didFocus', () => {
            getNoti();
        })
        return () => {
            listener.remove();
        }
    }, [])

    return (
        <View>            
            <FlatList
                data={state}
                keyExtractor={(state) => `item${state.id}`}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => navigation.navigate('ShowNotification', { id: item.id })} >
                        <Card
                            title={item.title}>
                            <View style={styles.row}>
                                <Image
                                    source={{ uri: 'http://tuyensinh.dlu.edu.vn/Temp/ArticleImage/fadea810-5788-486c-b3d6-b4b617b7934d.jpg' }}
                                    style={{ width: 100, height: 100 }}
                                />
                                <Text style={styles.content}>{item.content.length>65?item.content.substring(0, 65)+'...':item.content}</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                }}
            />
        </View>
    )
}

NotificationScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('CreateNotification')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity> 
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
    row: {
        flexDirection: 'row'
    },
    content:{
        fontSize:18,
        marginLeft:10,
        flex:1
    }
});

export default NotificationScreen; 