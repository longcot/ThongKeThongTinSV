import React, { useContext } from 'react';
import { Text } from 'react-native-elements';
import { View, StyleSheet} from 'react-native';
import Datatable from '../components/Datatable';
import { Context as StatContext } from '../context/StatisticContext';


const AccountTableScreen = () => {

    const {state} = useContext(StatContext);
    
    return (
        <View 
        style={{flex:1,backgroundColor:'white',
        alignItems:'center',margin:8}}>
            <View
                style={{flex:1}}
                >
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
                        }
                    ]}
                    datatable={state.data}
                    Touchable={true}
                    style={styles.table}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        alignItems:'center'
    },
    table: {
        backgroundColor: '#fff',
        flex:1,
        marginVertical:8,
        padding:8
    },
    scrollView: {
    },
});

export default AccountTableScreen; 