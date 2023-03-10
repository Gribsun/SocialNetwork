import axios from 'axios';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '6e532188-ce4c-4737-b1e8-530b95c40254',
    }
});
