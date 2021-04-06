import axios from 'axios';

const url = 'http://localhost:3005/users';

export const createUser = (newUser) => {
    axios.post(url, newUser);
};
