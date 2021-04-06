import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export default (users = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...users, action.payload];
        case FETCH_ALL:
            return action.payload;
        default:
            return users;
    }
};
