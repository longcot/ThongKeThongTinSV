import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const profReducer = (state, action) => {
    switch (action.type) {
        case 'get_profile':
            return action.payload;
        default:
            return state;
    }
}

const getProf = (dispatch) => {
    return async () => {
        const email = await AsyncStorage.getItem('email');
        const response = await trackerApi.get(`/profile/${email}`)
        dispatch({ type: 'get_profile', payload: response.data });
        navigate('Profile');
    }
}

const searchSV = (dispatch) => async (mssv) => {

    const response = await trackerApi.get(`/profile/${mssv}`)
    dispatch({ type: 'get_profile', payload: response.data });

    navigate('SvProfile');
}

const postProf = (dispatch) => async ({ mssv, hovaten, malop, tinhtranghoc, ngaysinh, noisinh, dantoc, tongiao, email, sdt, cmnd, diachi,gioitinh }) => {
    try {
        const response = await trackerApi.post(`/profile/${mssv}`, { mssv, hovaten, malop, tinhtranghoc, ngaysinh, noisinh, dantoc, tongiao, email, sdt, cmnd, diachi,gioitinh })
        navigate('Profile');
        //dispatch({ type: 'resetpassword', payload: respone.data.msg })
    }
    catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong when reset password'
        })
    }
}

const postSvProf = (dispatch) => async ({ mssv, hovaten, malop, tinhtranghoc, ngaysinh, noisinh, dantoc, tongiao, email, sdt, cmnd, diachi,gioitinh }) => {
    try {
        const response = await trackerApi.post(`/profile/${mssv}`, { mssv, hovaten, malop, tinhtranghoc, ngaysinh, noisinh, dantoc, tongiao, email, sdt, cmnd, diachi,gioitinh })

        const response2 = await trackerApi.get(`/profile/${mssv}`)
        dispatch({ type: 'get_profile', payload: response2.data });
    
        navigate('SvProfile');
        //dispatch({ type: 'resetpassword', payload: respone.data.msg })
    }
    catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong when reset password'
        })
    }
}

export const { Provider, Context } = createDataContext(
    profReducer,
    { getProf, postProf, searchSV, postSvProf },
    { data: '', errorMessage: '' }
);