import React, { useState, useContext, useEffect, useReducer } from 'react';
import { Text, Button, Input,Divider } from 'react-native-elements';
import { View, StyleSheet, TextInput } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spacer from '../../components/Spacers';


const ResetPasswordScreen = () => {

    const {state,resetpassword } = useContext(AuthContext);
    const email=state.email;
    const msg=state.errorMessage;

    const [oldpassword, setOldpassword] = useState('');
    const [newpassword, setNewpassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    return (
        <View style={styles.background}>
            <Spacer>
                <Input
                    label="Mật khẩu hiện tại:"
                    value={oldpassword}
                    onChangeText={setOldpassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry
                    placeholder='Nhập mật khẩu hiện tại'
                    leftIcon={
                        <Icon
                        name='lock'
                        size={24}
                        color='black'
                        />
                    }
                />          
                <Input
                    label="Mật khẩu mới:"
                    value={newpassword}
                    onChangeText={setNewpassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry
                    placeholder='Nhập mật khẩu mới'
                    leftIcon={
                        <Icon
                        name='unlock-alt'
                        size={24}
                        color='black'
                        />
                    }
                />         
                <Input
                    label="Xác nhận mật khẩu mới:"
                    value={confirmpassword}
                    onChangeText={setConfirmpassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry
                    placeholder='Nhập lại mật khẩu mới'
                    leftIcon={
                        <Icon
                        name='unlock'
                        size={24}
                        color='black'
                        />
                    }
                />             
            {state.errorMessage ?
                <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
                <Spacer />  
            <Button title="Xác nhận" onPress={()=>resetpassword({email,oldpassword,newpassword})}/>
            </Spacer>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 21.5,
        padding: 10,
        margin: 5,
        flex:1,
        marginBottom: 20,
        marginRight: 20,
        marginTop: 10,
        backgroundColor:'white'
    },
    label: {
        marginBottom: 5,
        fontSize: 20,
        marginLeft: 20,
        width:120,
        marginTop: 10
    },
    row: {
        flexDirection: 'row'
    },
    errorMessage: {
        fontSize: 16,
        color: 'red'
    },
    background: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 20
    }
});

export default ResetPasswordScreen; 