import { CREATE } from '../constants/actionTypes';
import * as api from '../api';

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};
