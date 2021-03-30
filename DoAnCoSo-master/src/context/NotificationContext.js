import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const notiReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'get_notifications':
            return action.payload;
        default:
            return state;
    }
}

const getNoti = (dispatch) => {
    return async () => {
        const response = await trackerApi.get('/notification')

        dispatch({ type: 'get_notifications', payload: response.data })
    }
}

const updateNoti = (dispatch) => async ({ id, title, content }) => {
    try {
        const response = await trackerApi.post('notification', { id, title, content })
        dispatch({ type: 'themthongbao', payload: response.data })
    }
    catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with update notification' })
    }
}

const postNoti = (dispatch) => {
    return async (title, content) => {
        await trackerApi.post('/notification', { title, content });
        navigate('Notification');
    }
}

export const { Provider, Context } = createDataContext(
    notiReducer,
    { updateNoti, getNoti, postNoti },
    { data: '', errorMessage: '' }
);
