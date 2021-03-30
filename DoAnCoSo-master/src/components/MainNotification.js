import React, { useState, useContext } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { View, StyleSheet, Image } from 'react-native';
import Spacer from '../components/Spacers';
import { Context as AuthContext } from '../context/AuthContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const MainNotification = () => {
    return (
        <View>
            <Text>Main notification</Text>
            <FlatList
                data={}
                keyExtractor={}
                renderItem={({})=> {
                    return (       
                        <View>                 
                            <Text>Title</Text>
                            <Text>Content</Text>
                            <Text>Author</Text>
                        </View>
                    );
                }}
            />
        </View>
    )
}