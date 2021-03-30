import React, { useState, useContext } from 'react';
import { Text, Button, ListItem,Divider } from 'react-native-elements';
import { View, StyleSheet,Linking } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spacer from '../../components/Spacers';


const AccountScreen = ({ navigation }) => {

    const { state, signout, resetpassword } = useContext(AuthContext);

    return (
        <View>
                <ListItem
                    title='Thông tin'
                    onPress={ ()=>{ Linking.openURL(`http://animated-spot-glade.glitch.me/thongtin`)}}
                />
                <Divider style={{ backgroundColor: '#e1e8ee' }} />
                <ListItem
                    title='Trợ giúp'
                    onPress={ ()=>{ Linking.openURL(`http://animated-spot-glade.glitch.me/trogiup`)}}
                />
                <Divider style={{ backgroundColor: '#e1e8ee' }} />
                <ListItem
                    title='Đặt lại mật khẩu'
                    onPress={() => navigation.navigate('ResetPassword')} 
                />
                <Divider style={{ backgroundColor: '#e1e8ee' }} />
                <ListItem
                    title='Đăng xuất'
                    onPress={signout} 
                />
        </View>
    )
}

export default AccountScreen; 