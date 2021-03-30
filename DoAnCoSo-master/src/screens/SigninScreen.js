import React, { useState, useContext, useEffect } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { View, StyleSheet, Image } from 'react-native';
import Spacer from '../components/Spacers';
import { Context as AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const SigninScreen = ({ navigation }) => {

    const [email, setEmail] = useState('1710156');
    const [password, setPassword] = useState('1');
    const { state, signin } = useContext(AuthContext);

    return (
        <View style={styles.background}>
            <Spacer>
                <View style={styles.image}>
                    <Image
                        style={{ alignSelf: 'center' }}
                        source={require('../images/banner.png')}
                    />
                </View>
            </Spacer>
            <Spacer /><Spacer />
            <Spacer>
                <Input 
                    style={styles.inputs}
                    label="Tên đăng nhập:"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Nhập tên đăng nhập'
                    leftIcon={
                        <Icon
                        name='user'
                        size={24}
                        color='black'
                        />
                    }
                />
                <Spacer />
                <Input
                    label="Mật khẩu:"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry
                    placeholder='Nhập mật khẩu'
                    leftIcon={
                        <Icon
                        name='lock'
                        size={24}
                        color='black'
                        />
                    }
                />
            </Spacer>
            {state.errorMessage ?
                <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button
                    title='Đăng nhập'
                    onPress={() => { signin({ email, password }) }}
                />
            </Spacer>       
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 80
    },
    errorMessage: {
        fontSize: 16,
        color: 'red'
    },
    inputs: {
      borderWidth: 1,
      borderColor: '#E3E3E3',
      borderRadius: 21.5
    }
});

export default SigninScreen; 