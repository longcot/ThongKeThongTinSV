import React, { useState, useContext, useEffect, useReducer } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { TextInput,HelperText} from 'react-native-paper';
import { Context as ProfileContext } from '../context/ProfContext';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import Spacer from '../components/Spacers';
import { Context as StatContext } from '../context/StatisticContext';

const UpdateSvProfileScreen = ({ navigation }) => {   
    
    const {getLop, state} = useContext(StatContext);
    const {postSvProf } = useContext(ProfileContext);
    
    const data = navigation.getParam('state');

    useEffect(() => {
        getLop('');
        const listener = navigation.addListener('didFocus', () => {
            getLop('');
        })
        return () => {
            listener.remove();
        }
    }, [])

    const [mssv, setMssv] = useState(data.mssv);
    const [hovaten, setHovaten] = useState(data.hovaten);
    const [malop, setMaLop] = useState(data.malop);
    const [tinhtranghoc, setTinhtranghoc] = useState(data.tinhtranghoc);
    const [ngaysinh, setNgaysinh] = useState(data.ngaysinh);
    const [noisinh, setNoisinh] = useState(data.noisinh);
    const [dantoc, setDantoc] = useState(data.dantoc);
    const [tongiao, setTongiao] = useState(data.tongiao);
    const [email, setEmail] = useState(data.email);
    const [sdt, setSdt] = useState(data.sdt);
    const [cmnd, setCmnd] = useState(data.cmnd);
    const [diachi, setDiachi] = useState(data.diachi);
    const [gioitinh, setGioitinh] = useState(data.gioitinh);

    let noiSinhData = [{
        value: 'Lâm Đồng',
    },{
        value: 'An Giang',
    }, {
        value: 'Bà Rịa-Vũng Tàu',
    }, {
        value: 'Bạc Liêu',
    }, {
        value: 'Bắc Kạn',
    }, {
        value: 'Bắc Giang',
    }, {
        value: 'Bắc Ninh',
    }, {
        value: 'Bến Tre',
    }, {
        value: 'Bình Dương',
    }, {
        value: 'Bình Định',
    }, {
        value: 'Bình Phước',
    }, {
        value: 'Bình Thuận',
    }, {
        value: 'Cà Mau',
    }, {
        value: 'Cao Bằng',
    }, {
        value: 'Cần Thơ',
    }, {
        value: 'Đà Nẵng',
    }, {
        value: 'Đắk Lắk',
    }, {
        value: ' Đắk Nông',
    }, {
        value: 'Điện Biên',
    }, {
        value: 'Đồng Tháp',
    }, {
        value: 'Đồng Nai',
    }, {
        value: 'Gia Lai',
    }, {
        value: 'Hà Giang',
    }, {
        value: 'Hà Nội (TP)',
    }, {
        value: 'Hà Tây',
    }, {
        value: 'Hà Tĩnh',
    }, {
        value: 'Hải Phòng (TP)',
    }, {
        value: 'Hòa Bình',
    }, {
        value: 'Hồ Chí Minh (TP)',
    }, {
        value: 'Hậu Giang',
    }, {
        value: 'Hưng Yên',
    }, {
        value: 'Khánh Hòa',
    }, {
        value: 'Kiên Giang',
    }, {
        value: 'Kon Tum',
    }, {
        value: 'Lai Châu',
    }, {
        value: 'Lào Cai',
    }, {
        value: 'Lạng Sơn',
    }, {
        value: 'Long An',
    }, {
        value: 'Nam Định',
    }, {
        value: 'Ninh Bình',
    }, {
        value: 'Ninh Thuận',
    }, {
        value: 'Phú Thọ',
    }, {
        value: 'Phú Yên',
    }, {
        value: 'Quảng Bình',
    }, {
        value: 'Quảng Nam',
    }, {
        value: 'Quảng Ngãi',
    }, {
        value: 'Quảng Ninh',
    }, {
        value: 'Quảng Trị',
    }, {
        value: 'Sóc Trăng',
    }, {
        value: 'Sơn La',
    }, {
        value: 'Tây Ninh',
    }, {
        value: 'Thái Bình',
    }, {
        value: 'Thái Nguyên',
    }, {
        value: 'Thanh Hóa',
    }, {
        value: 'Thừa Thiên – Huế',
    }, {
        value: 'Tiền Giang',
    }, {
        value: 'Tuyên Quang',
    }, {
        value: 'Vĩnh Long',
    }, {
        value: 'Vĩnh Phúc',
    }, {
        value: 'Yên Bái',
    }];

    let gioiTinhData = [{
        value: 'Nam'
      }, {
        value: 'Nữ'
      }, {
        value: 'Khác'
      }];

    let tongiaoData = [{
        value: 'Phật Giáo'
    }, {
        value: 'Công Giáo'
    }, {  value: 'Không'
    }, {
        value: 'Khác'
    }];

      let dantocData = [{
          value: 'Kinh'
        }, {
          value: 'Khác'
        }];

      let tinhtrangData = [{
          value: 'Tất cả'
        }, {
          value: 'Còn học'
        }, {
          value: 'Đã Nghỉ'
        }, {
          value: 'Bảo Lưu'
        }];

    console.log(sdt.length)

    const hasSdtErrors = () => {
        return (sdt.length!=10);
      };
    const hasCmndErrors = () => {
        return (cmnd.length!=9);
    };
    const hasEmailErrors = () => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(String(email).toLowerCase());
    };

    return (
        <View>            
            <ScrollView >                      
            <View style={styles.view}>
                <TextInput        
                    label='MSSV'
                    mode='outlined'
                    style={styles.textInput}
                    value={mssv}
                    disabled
                />
                <View style={{flex:1,paddingHorizontal:5}}>
                    <Dropdown
                        label='Lớp'
                        data={state.lop}
                        onChangeText={(text) => {
                            setMaLop(text);
                        }}
                        value={malop}
                    />
                </View>
                <View style={{flex:1,paddingHorizontal:5}}>
                    <Dropdown
                        label='Tình trạng học'
                        data={tinhtrangData}
                        onChangeText={(text) => {
                            setTinhtranghoc(text);
                        }}
                        value={tinhtranghoc}
                    />
                </View>
            </View>
                <View style={styles.view}>
                    <TextInput        
                        label='Họ và tên'
                        mode='outlined'
                        style={{padding:8,flex:3}}
                        value={hovaten}
                        onChangeText={setHovaten}
                    />
                    <View style={{paddingHorizontal:16,flex:1}}>
                        <Dropdown
                        label='Giới tính'
                        data={gioiTinhData}
                        value={gioitinh}
                        onChangeText={setGioitinh}
                        /> 
                    </View> 
                </View>
                <View
                    style={{flexDirection:'row',
                        justifyContent:'flex-start',
                        paddingHorizontal:8}} >
                <View
                    style={{
                        paddingVertical:12,
                        padding:8}} >
                    <Text>Ngày sinh</Text>
                    <DatePicker               
                        date={ngaysinh}
                        mode="date"
                        placeholder="Chọn ngày"
                        format="DD-MM-YYYY"
                        confirmBtnText="Xác nhận"
                        cancelBtnText="Hủy"
                        onDateChange={setNgaysinh}
                        showIcon={false}
                    />   
                </View>
                <View style={{paddingHorizontal:16,flex:1}}>
                    <Dropdown
                        label='Nơi sinh'
                        data={noiSinhData}
                        value={noisinh}
                        onChangeText={setNoisinh}
                    /> 
                </View>
                </View>
                <View
                    style={{flexDirection:'row',
                        justifyContent:'flex-start'}}>
                    <View style={{flex:1,paddingHorizontal:12}}>
                        <Dropdown
                            label='Dân tộc'
                            data={dantocData}
                            onChangeText={(text) => {
                                setDantoc(text);
                            }}
                            value={dantoc}
                        />
                    </View>
                    <View style={{flex:1,paddingHorizontal:12}}>
                        <Dropdown
                        label='Tôn giáo'
                            data={tongiaoData}
                            onChangeText={(text) => {
                                setTongiao(text);
                            }}
                            value={tongiao}
                        />
                    </View>
                </View>
                <View>
                    <TextInput        
                        label='Email'
                        mode='outlined'
                        style={styles.textInput}
                        value={email}
                        onChangeText={setEmail}
                    />          
                    <HelperText type="error" visible={hasEmailErrors()}>
                        Email không hợp lệ
                    </HelperText>   
                </View>
                <View>   
                <TextInput        
                    label='Số điện thoại'
                    mode='outlined'
                    style={styles.textInput}
                    value={sdt}
                    onChangeText={setSdt}
                    keyboardType = 'numeric'
                />         
                <HelperText type="error" visible={hasSdtErrors()}>
                    Số điện thoại phải gồm 10 số
                </HelperText>
                </View>  
                <View>
                <TextInput        
                    label='CMND'
                    mode='outlined'
                    style={styles.textInput}
                    value={cmnd}
                    onChangeText={setCmnd}
                    keyboardType = 'numeric'
                />          
                <HelperText type="error" visible={hasCmndErrors()}>
                    CMND gồm 9 số
                </HelperText>
                </View>         
                <TextInput        
                    label='Địa chỉ'
                    mode='outlined'
                    style={styles.textInput}
                    value={diachi}
                    onChangeText={setDiachi}
                />
                <Spacer>
                    {(hasSdtErrors()||hasCmndErrors()||hasEmailErrors())?
                    <Button 
                        title="Xác nhận" 
                        onPress={()=>postSvProf({mssv,hovaten,malop,tinhtranghoc,ngaysinh,noisinh,dantoc,tongiao,email,sdt,cmnd,diachi,gioitinh})}
                        disabled={true}
                    />:
                    <Button 
                        title="Xác nhận" 
                        onPress={()=>postSvProf({mssv,hovaten,malop,tinhtranghoc,ngaysinh,noisinh,dantoc,tongiao,email,sdt,cmnd,diachi,gioitinh})}
                    />}
                </Spacer>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({    
    textInput:{
        padding:8,
        flex:1      
    },
    view:{
        flex:1, 
        flexDirection:'row'
    }
});

export default UpdateSvProfileScreen; 