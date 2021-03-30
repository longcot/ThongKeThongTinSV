import React, { useContext, useState } from 'react';
import { Button, Modal, Portal, TextInput, Provider } from 'react-native-paper';
import { View, StyleSheet,Linking} from 'react-native';
import Datatable from '../components/Datatable';
import { Context as StatContext } from '../context/StatisticContext';

const DataTableScreen = () => {

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
  
    const hideModal = () => setVisible(false);
    
    const {state,getCSV} = useContext(StatContext);
    const [tieude, setTieude] = useState('');

    return (
        <View style={styles.container}>
            <Datatable
                header={[
                    {
                        name: 'MSSV',
                        attr: 'mssv',
                    },
                    {
                        name: 'Họ và tên',
                        attr: 'hovaten',
                    },
                    {
                        name: 'Lớp',
                        attr: 'malop',
                    },
                    {
                        name: 'Giới tính',
                        attr: 'gioitinh',
                    },
                    {
                        name: 'Tình trạng',
                        attr: 'tinhtranghoc',
                    },
                    {
                        name: 'Nơi sinh',
                        attr: 'noisinh',
                    },
                    {
                        name: 'Dân tộc',
                        attr: 'dantoc',
                    },
                    {
                        name: 'Tôn giáo',
                        attr: 'tongiao',
                    }
                ]}
                datatable={state.data}
                //page={page}
                //perPage={4}
                style={styles.table}
                Touchable={false}
            />
            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal}>                           
                    <View style={{margin:10}} >
                        <TextInput       
                            label='Tên file'
                            mode='outlined'
                            style={styles.textInput}
                            value={tieude}
                            onChangeText={setTieude}
                        />
                    </View>
                        <Button style={{marginHorizontal:10}}  mode="contained" onPress={ ()=>{ Linking.openURL(`http://animated-spot-glade.glitch.me/csv?mssv=${state.query.mssv}&&hovaten=${state.query.hovaten}&&malop=${state.query.malop}&&gioitinh=${state.query.gioitinh}&&tinhtranghoc=${state.query.tinhtrang}&&noisinh=${state.query.noisinh}&&dantoc=${state.query.dantoc}&&tongiao=${state.query.tongiao}&&tieude=${tieude}`)}}>
                                Tải xuống
                            </Button>
                    </Modal>
                </Portal>
            </Provider>   
            <Button style={{marginTop: 30}} onPress={showModal}>
                Kết Xuất
            </Button>
        </View>
    )
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

export default DataTableScreen; 