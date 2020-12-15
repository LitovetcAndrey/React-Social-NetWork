import * as axios from "axios";

const BASE_URL = `https://social-network.samuraijs.com/api/1.0/`

const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "API-KEY": `c233b2ab-c911-4c2a-9ca2-f04cdde337db`
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },

    unFollowSuccess(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },

    followSuccess(id) {
        return instance.post(`follow/${id}`, null).then(response => response.data);
    },

    //profilePage
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    }
}


export const authAPI = {
    me() {
        // return instance.get(`/auth/me`).then(response => response.data);
        return instance.get(`/auth/me`);
    },
}
