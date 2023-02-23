import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '6e532188-ce4c-4737-b1e8-530b95c40254',
    }
});

export const usersAPI = {
    users(pageSize, page, term) {
        return instance.get(`users?count=${pageSize}&page=${page}&term=${term}`);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
}

export const profileAPI = {
    profile(id) {
        return instance.get(`profile/${id}`);
    },
    status(id) {
        return instance.get(`profile/status/${id}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status});
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    logIn(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logOut() {
        return instance.delete(`auth/login`);
    },
};
