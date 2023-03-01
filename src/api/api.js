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
    updateProfile(data) {
        return instance.put(`profile`, data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status});
    },
    savePhoto(file) {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    logIn(email, password, rememberMe, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logOut() {
        return instance.delete(`auth/login`);
    },
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    },
};
