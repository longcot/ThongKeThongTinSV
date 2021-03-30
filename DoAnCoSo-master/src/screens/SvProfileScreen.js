import React, { useState, useContext, useEffect } from 'react';
import { Text,TextInput, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Context as ProfileContext } from '../context/ProfContext';
import Spacer from '../components/Spacers';
import InfomationItem from '../components/InfomationItem';
import Icon from 'react-native-vector-icons/FontAwesome';


const SvProfileScreen = ({navigation}) => {

    const { state } = useContext(ProfileContext);

    return (
        <View>
            <ScrollView>
                    <View style={styles.view}>
                        <InfomationItem 
                            title={'MSSV'}
                            content={state.mssv}
                            disabled
                        />
                        <InfomationItem 
                            title={'Lớp'}
                            content={state.malop}
                            disabled
                        />
                        <InfomationItem 
                            title={'Tình trạng'}
                            content={state.tinhtranghoc}
                            disabled
                        />
                    </View>  
                    <View style={styles.view}>
                        <TextInput        
                          label='Họ và tên'
                          disabled
                          mode='outlined'
                          value={state.hovaten}
                          style={{padding:8,flex:3}}
                        />
                        <TextInput        
                          label='Giới tính'
                          disabled
                          mode='outlined'
                          value={state.gioitinh}
                          style={{padding:8,flex:1}}
                        />
                    </View>                  
                    <View style={styles.view}>
                        <InfomationItem 
                            title={'Ngày sinh'}
                            content={state.ngaysinh}
                            disabled
                        />
                        <InfomationItem 
                            title={'Nơi sinh'}
                            content={state.noisinh}
                            disabled
                        />
                    </View>
                    <View style={styles.view}>
                        <InfomationItem 
                            title={'Dân tộc'}
                            content={state.dantoc}
                            disabled
                        />
                        <InfomationItem 
                            title={'Tôn giáo'}
                            content={state.tongiao}
                            disabled
                        />
                    </View>
                    <InfomationItem 
                        title={'Email'}
                        content={state.email}
                        disabled
                    />
                    <InfomationItem 
                        title={'Số điện thoại'}
                        content={state.sdt}
                        disabled
                    />
                    <InfomationItem 
                        title={'Số CMND'}
                        content={state.cmnd}
                        disabled
                    />
                    <InfomationItem 
                        title={'Địa chỉ'}
                        content={state.diachi}
                        disabled
                    />
                <Spacer>
                <Button  mode="contained" onPress={()=>navigation.navigate('UpdateSvProfile',{state})}>
                    Cập nhật
                </Button>
                </Spacer>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 5,
        flex:1,
        marginBottom: 20,
        marginRight: 20,
        marginTop: 10
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
    view:{
        flex:1, 
        flexDirection:'row'
    },
    textInput:{
        flex:1,
        padding:8       
    }
});

export default SvProfileScreen; 