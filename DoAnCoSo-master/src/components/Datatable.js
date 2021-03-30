import React, { useState, useEffect,useContext } from 'react';
import { DataTable } from 'react-native-paper';
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context as ProfContext } from '../context/ProfContext';


function Datatable({ header, datatable = [], page = 1, perPage = 30, style, Touchable }) {

  const {searchSV} = useContext(ProfContext);

  const [state, setState] = useState({
    datatable,
    page: page - 1,
    perPage,
    numberOfPages: Math.ceil(datatable.length / perPage),
  });

  const getValue = (object, path) => {
    return path
      .replace(/\[/g, '.')
      .replace(/\]/g, '')
      .split('.')
      .reduce((o, k) => (o || {})[k], object);
  };

  useEffect(() => {
    //console.log('useEffect:', state);
  });

  return (
    <ScrollView horizontal={true}>
      <DataTable style={style}>
        <DataTable.Header>
          {header.map((item, i) => {
            let sortDirection = item.sortDirection ? item.sortDirection : false;
            return (
              item.name != 'Họ và tên' ?
                <DataTable.Title
                  key={i}
                  style={styles.cell}>
                  {item.name}
                </DataTable.Title>
                :
                <DataTable.Title
                  key={i}
                  style={{ width: 150 }}>
                  {item.name}
                </DataTable.Title>
            );
          })}
        </DataTable.Header>
        <ScrollView>
          {state.datatable
            .slice(state.perPage * state.page, state.perPage * (state.page + 1))
            .map((item, i) => {
            return (Touchable==true?
            <TouchableOpacity 
              onPress={()=>{searchSV(item.mssv)}}>              
                <DataTable.Row key={i}>
                {header.map((headerItem, j) => {
                  return (<View>
                    {
                      headerItem.attr == 'hovaten' ?
                        getValue(item, headerItem.attr).split(' ').length < 4 ?
                          <DataTable.Cell key={j} style={{ width: 150 }} >
                            {getValue(item, headerItem.attr)}
                          </DataTable.Cell>
                          :
                          <View>
                            <DataTable.Cell key={j} style={{ width: 150 }} >
                              {getValue(item, headerItem.attr).split(' ')[0] + ' ' + getValue(item, headerItem.attr).split(' ')[1]}
                            </DataTable.Cell>
                            <DataTable.Cell key={j + '1'} style={{ width: 150 }} >
                              {getValue(item, headerItem.attr).split(' ')[2] + ' ' + getValue(item, headerItem.attr).split(' ')[3]}
                            </DataTable.Cell>
                          </View>
                        :
                        <DataTable.Cell key={j} style={styles.cell} >
                          {getValue(item, headerItem.attr)}
                        </DataTable.Cell>
                    }
                  </View>
                  )
                })}
              </DataTable.Row>
            </TouchableOpacity>
            :
            <DataTable.Row key={i}>
            {header.map((headerItem, j) => {
              return (<View>
                {
                  headerItem.attr == 'hovaten' ?
                    getValue(item, headerItem.attr).split(' ').length < 4 ?
                      <DataTable.Cell key={j} style={{ width: 150 }} >
                        {getValue(item, headerItem.attr)}
                      </DataTable.Cell>
                      :
                      <View>
                        <DataTable.Cell key={j} style={{ width: 150 }} >
                          {getValue(item, headerItem.attr).split(' ')[0] + ' ' + getValue(item, headerItem.attr).split(' ')[1]}
                        </DataTable.Cell>
                        <DataTable.Cell key={j + '1'} style={{ width: 150 }} >
                          {getValue(item, headerItem.attr).split(' ')[2] + ' ' + getValue(item, headerItem.attr).split(' ')[3]}
                        </DataTable.Cell>
                      </View>
                    :
                    <DataTable.Cell key={j} style={styles.cell} >
                      {getValue(item, headerItem.attr)}
                    </DataTable.Cell>
                }
              </View>
              )
            })}
          </DataTable.Row>
            );
            })}
        </ScrollView>
        <DataTable.Pagination
          page={state.page}
          numberOfPages={state.numberOfPages}
          onPageChange={page => {
            console.log('change', page);
            setState({ ...state, page });
          }}
          label={state.page + 1 + ' of ' + state.numberOfPages}
        />
      </DataTable>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  cell: {
    textAlign: 'left',
    width: 100
  }
});


export default Datatable;
