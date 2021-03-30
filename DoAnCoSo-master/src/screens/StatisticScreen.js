import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Context as StatContext } from '../context/StatisticContext';


const StatisticScreen = ({ navigation }) => {

    const { state, getLop, getKhoa, getData } = useContext(StatContext);

    const updateLop = (value) => {
        getLop(value);
    }

    useEffect(() => {
        getKhoa();
        const listener = navigation.addListener('didFocus', () => {
            getKhoa();
        })
        return () => {
            listener.remove();
        }
    }, [])

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

      let tinhtrangData = [ {
          value: 'Còn học'
        }, {
          value: 'Đã Nghỉ'
        }, {
          value: 'Bảo Lưu'
        }];

      let thongkeData = [{
          value: 'Tùy chọn',
        }, {
          value: 'Danh sách sinh viên theo khoa',
        }, {
          value: 'Danh sách sinh viên theo lớp',
        }, {
            value: 'Danh sách sinh viên theo tình trạng học',
        }, {
            value: 'Danh sách sinh viên theo nơi sinh',
        }, {
            value: 'Danh sách sinh viên theo dân tộc',
        }, {
            value: 'Danh sách sinh viên theo giới tính',
        }, {
            value: 'Danh sách sinh viên theo tôn giáo',
        }];

    const [loai, setLoai] = useState('');
    const [tieude, setTieude] = useState('');
    const [mssv, setMssv] = useState('');
    const [hovaten, setHovaten] = useState('');
    const [makhoa, setMakhoa] = useState('');
    const [malop, setMaLop] = useState('');
    const [gioitinh, setGioitinh] = useState('');
    const [tinhtrang, setTinhtrang] = useState('');
    const [noisinh, setNoisinh] = useState('');
    const [dantoc, setDantoc] = useState('');
    const [tongiao, setTongiao] = useState('');

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 8, flex: 1 }}>
                <Dropdown
                    label='Loại thống kê'
                    data={thongkeData}
                    onChangeText={(text) => {
                        setLoai(text);         
                        setMssv('')
                        setHovaten('')
                        setGioitinh('')
                        setMaLop('')
                        setMakhoa('')
                        setDantoc('')
                        setNoisinh('')
                        setTieude('')
                        setTongiao('')
                        setTinhtrang('')
                    }}
                    value={loai}
                />
                {
                loai=='Tùy chọn'?
                <View>
                    <Dropdown
                        label='Khoa'
                        data={state.khoa}
                        onChangeText={(text) => {
                            setMakhoa(text);
                            setMaLop(' ');
                            updateLop(text);
                        }}
                        value={makhoa}
                    />
                    <Dropdown
                        label='Lớp'
                        data={state.lop}
                        onChangeText={(text) => {
                            setMaLop(text);
                        }}
                        value={malop}
                    />
                    <Dropdown
                        label='Giới tính'
                        data={gioiTinhData}
                        onChangeText={setGioitinh}
                        value={gioitinh}
                    />
                    <Dropdown
                        label='Tình trạng học'
                        data={tinhtrangData}
                        onChangeText={setTinhtrang}
                        value={tinhtrang}
                    />
                    <Dropdown
                        label='Nơi sinh'
                        data={noiSinhData}
                        value={noisinh}
                        onChangeText={setNoisinh}
                    /> 
                    <Dropdown
                        label='Dân tộc'
                        data={dantocData}
                        value={dantoc}
                        onChangeText={setDantoc}
                    /> 
                    <Dropdown
                        label='Tốn giáo'
                        data={tongiaoData}
                        value={tongiao}
                        onChangeText={setTongiao}
                    /> 
                </View>
                :
                loai=='Danh sách sinh viên theo khoa'?
                <View>
                    <Dropdown
                        label='Khoa'
                        data={state.khoa}
                        onChangeText={(text) => {
                            setMakhoa(text);
                            setMaLop(' ');
                            updateLop(text);
                        }}
                        value={makhoa}
                    />
                </View>
                :
                loai=='Danh sách sinh viên theo lớp'?
                <View>
                    <Dropdown
                        label='Khoa'
                        data={state.khoa}
                        onChangeText={(text) => {
                            setMakhoa(text);
                            setMaLop(' ');
                            updateLop(text);
                        }}
                        value={makhoa}
                    />
                    <Dropdown
                        label='Lớp'
                        data={state.lop}
                        onChangeText={(text) => {
                            setMaLop(text);
                        }}
                        value={malop}
                    />
                </View>
                :
                loai=='Danh sách sinh viên theo tình trạng học'?
                <View>
                    <Dropdown
                        label='Khoa'
                        data={state.khoa}
                        onChangeText={(text) => {
                            setMakhoa(text);
                            setMaLop(' ');
                            updateLop(text);
                        }}
                        value={makhoa}
                    />
                    <Dropdown
                        label='Lớp'
                        data={state.lop}
                        onChangeText={(text) => {
                            setMaLop(text);
                        }}
                        value={malop}
                    />
                    <Dropdown
                        label='Tình trạng học'
                        data={tinhtrangData}
                        onChangeText={setTinhtrang}
                        value={tinhtrang}
                    />
                </View>
                :
                loai=='Danh sách sinh viên theo nơi sinh'?
                <View>
                    <Dropdown
                        label='Khoa'
                        data={state.khoa}
                        onChangeText={(text) => {
                            setMakhoa(text);
                            setMaLop(' ');
                            updateLop(text);
                        }}
                        value={makhoa}
                    />
                    <Dropdown
                        label='Lớp'
                        data={state.lop}
                        onChangeText={(text) => {
                            setMaLop(text);
                        }}
                        value={malop}
                    />
                    <Dropdown
                        label='Nơi sinh'
                        data={noiSinhData}
                        value={noisinh}
                        onChangeText={setNoisinh}
                    /> 
                </View>
                :
                loai=='Danh sách sinh viên theo dân tộc'?
                <View>
                    <Dropdown
                        label='Khoa'
                        data={state.khoa}
                        onChangeText={(text) => {
                            setMakhoa(text);
                            setMaLop(' ');
                            updateLop(text);
                        }}
                        value={makhoa}
                    />
                    <Dropdown
                        label='Lớp'
                        data={state.lop}
                        onChangeText={(text) => {
                            setMaLop(text);
                        }}
                        value={malop}
                    />
                    <Dropdown
                        label='Dân tộc'
                        data={dantocData}
                        value={dantoc}
                        onChangeText={setDantoc}
                    /> 
                </View>
                :
                loai=='Danh sách sinh viên theo giới tính'?
                <View>
                    <Dropdown
                        label='Khoa'
                        data={state.khoa}
                        onChangeText={(text) => {
                            setMakhoa(text);
                            setMaLop(' ');
                            updateLop(text);
                        }}
                        value={makhoa}
                    />
                    <Dropdown
                        label='Lớp'
                        data={state.lop}
                        onChangeText={(text) => {
                            setMaLop(text);
                        }}
                        value={malop}
                    />
                    <Dropdown
                        label='Giới tính'
                        data={gioiTinhData}
                        value={gioitinh}
                        onChangeText={setGioitinh}
                    /> 
                </View>
                :
                loai=='Danh sách sinh viên theo tôn giáo'?
                <View>
                    <Dropdown
                        label='Khoa'
                        data={state.khoa}
                        onChangeText={(text) => {
                            setMakhoa(text);
                            setMaLop(' ');
                            updateLop(text);
                        }}
                        value={makhoa}
                    />
                    <Dropdown
                        label='Lớp'
                        data={state.lop}
                        onChangeText={(text) => {
                            setMaLop(text);
                        }}
                        value={malop}
                    />
                    <Dropdown
                        label='Tốn giáo'
                        data={tongiaoData}
                        value={tongiao}
                        onChangeText={setTongiao}
                    /> 
                </View>
                :
                null
            }

            </View>
            <Button
                title='Xác nhận'
                onPress={()=>{         
                    malop.length<makhoa.length?
                    getData(mssv,hovaten,makhoa,gioitinh,tinhtrang,noisinh,dantoc,tongiao)
                    :           
                    getData(mssv,hovaten,malop,gioitinh,tinhtrang,noisinh,dantoc,tongiao);
                }}
            />
            <View>
                <Text></Text>
            </View>
            <Button
                title='Xóa tất cả'
                onPress={()=>{         
                    setMssv('')
                    setHovaten('')
                    setGioitinh('')
                    setMaLop('')
                    setMakhoa('')
                    setDantoc('')
                    setLoai('')
                    setNoisinh('')
                    setTieude('')
                    setTongiao('')
                    setTinhtrang('')
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8
    },
    table: {
        backgroundColor: '#fff'
    },
    scrollView: {
    },
});

export default StatisticScreen; 