import React, { useState, useContext } from 'react';
import { Text, Button, Input,Divider } from 'react-native-elements';
import { View, StyleSheet, TextInput } from 'react-native';
import { Context as NotificationContext } from '../../context/NotificationContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spacer from '../../components/Spacers';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const CreateNotificationScreen = () => {
    const [title, setTitle] = useState(' ');
    const [content, setContent] = useState(' ');
    const { postNoti } = useContext(NotificationContext);

    return (
        <View>
            <Spacer>
                <Input
                        label="Tiêu đề:"
                        value={title}
                        onChangeText={setTitle}
                        autoCorrect={false}
                        placeholder='Nhập tiêu đề'
                        leftIcon={
                            <MaterialCommunityIcons name="textbox-password" size={24} color="black" />
                        }
                    />  
                    <Input
                        label="Nội dung:"
                        value={content}
                        onChangeText={setContent}
                        autoCorrect={false}
                        placeholder='Nhập nội dung'
                        leftIcon={
                            <FontAwesome name="pencil-square-o" size={24} color="black" />
                        }
                    />  
                    <Spacer/>
                <Button
                    title="Đăng thông báo"
                    onPress={() => { postNoti(title, content) }}
                />
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        marginBottom: 5,
        fontSize: 20,
        marginLeft: 5
    }
});

export default CreateNotificationScreen; 