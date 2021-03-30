import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload.token, role: action.payload.role, email: action.payload.email };
        case 'signup':
            return { errorMessage: '', token: action.payload };
        case 'resetpassword':
            return { errorMessage: '', token: action.payload };
        case 'signout':
            return { token: null, email: null, role: null, errorMessage: '' };
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    const role = await AsyncStorage.getItem('role');
    const email = await AsyncStorage.getItem('email');
    if (token && role && email) {
        dispatch(
            {
                type: 'signin',
                payload:
                {
                    token,
                    role,
                    email
                }
            }
        );
        role === 'SV' ? navigate('SvFlow') : navigate('QtvFlow');
    }
    else {
        navigate('loginFlow');
    }
}

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('role', response.data.role);
        await AsyncStorage.setItem('email', email);
        dispatch(
            {
                type: 'signin',
                payload:
                {
                    token: response.data.token,
                    role: response.data.role,
                    email: email
                }
            }
        );
        const role = response.data.role;
        role === 'AD' ? navigate('QtvFlow') : navigate('SvFlow');
    } catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign in'
        });
    }
};

const signup = (dispatch) => async ({ email, password, role }) => {
    //make api request
    try {
        const response = await trackerApi.post('/signup', { email, password, role });
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('role', response.data.role);
        dispatch({ type: 'signup', payload: response.data.token })

        //navigate to main flow
        //navigate('TrackList');
    }
    catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
};

const resetpassword = (dispatch) => async ({ email, oldpassword, newpassword }) => {
    try {
        const response = await trackerApi.post('resetpassword', { email, oldpassword, newpassword })
        navigate('Signin')
        dispatch({
            type: 'add_error',
            payload: 'Đổi mật khẩu thành công! Vui lòng đăng nhập lại'
        })
    }
    catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Đổi mật khẩu thất bại'
        })
    }
}

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signout' });
        navigate('loginFlow');
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, resetpassword, tryLocalSignin },
    { token: '', errorMessage: '', role: '', email: '' }
);
